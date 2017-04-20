import './_common';

import {
  NgModule,
  Component,
  destroyPlatform,
  getPlatform,
  ApplicationRef,
} from '@angular/core';
import {
  ServerModule,
  renderModule,
  INITIAL_CONFIG,
  PlatformState,
  platformDynamicServer,
} from '@angular/platform-server';
import { async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloClient } from 'apollo-client';
import { filter } from 'rxjs/operator/filter';
import { first } from 'rxjs/operator/first';
import { toPromise } from 'rxjs/operator/toPromise';

import gql from 'graphql-tag';

import 'rxjs/add/operator/take';

import { ApolloModule, Apollo } from '../src';
import { mockClient } from './_mocks';

// Mock GraphQL endpoint
const query = gql`
  query websiteInfo {
    website {
      status
    }
  }
`;
const data = {
  website: {
    status: 'online',
  },
};
const client = mockClient({
  request: { query },
  result: { data },
  delay: 500,
});
function provideClient(): ApolloClient {
  return client;
}

@Component({
  selector: 'app',
  template: 'Website: {{text}}',
})
class AsyncServerApp {
  public text = '';

  constructor(
    private apollo: Apollo,
  ) {}

  public ngOnInit() {
    this.apollo.query<any>({ query })
      .take(1)
      .subscribe(result => {
        this.text = result.data.website.status;
      });
  }
}

@NgModule({
  declarations: [AsyncServerApp],
  imports: [
    BrowserModule.withServerTransition({appId: 'async-server'}),
    ServerModule,
    ApolloModule.withClient(provideClient),
  ],
  bootstrap: [AsyncServerApp],
})
class AsyncServerModule {}

describe('integration', () => {
  beforeEach(() => {
    if (getPlatform()) {
      destroyPlatform();
    }
  });

  describe('render', () => {
    let doc: string;
    let called: boolean;

    beforeEach(() => {
      doc = '<html><head></head><body><app></app></body></html>';
      called = false;
    });

    afterEach(() => { expect(called).toBe(true); });

    test('using long form should work', async(() => {
      const platform =
        platformDynamicServer([{provide: INITIAL_CONFIG, useValue: {document: doc}}]);

      platform.bootstrapModule(AsyncServerModule)
        .then((moduleRef) => {
          const applicationRef: ApplicationRef = moduleRef.injector.get(ApplicationRef);
          return toPromise.call(first.call(
            filter.call(applicationRef.isStable, (isStable: boolean) => isStable)));
          })
          .then(() => {
            const str = platform.injector.get(PlatformState).renderToString();
            expect(clearNgVersion(str)).toMatchSnapshot();
            platform.destroy();
            called = true;
          });
    }));

    test('using renderModule should work', async(() => {
      renderModule(AsyncServerModule, { document: doc }).then(output => {
        expect(clearNgVersion(output)).toMatchSnapshot();
        called = true;
      });
    }));
  });
});

function clearNgVersion(html: string): string {
  return html.replace(/ng-version=\"[^"]+\"/, '');
}
