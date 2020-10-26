(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return y}));var a=n(2),l=n(9),o=n(0),i=n.n(o),r=n(151),c=n(162),p=n(154),b=n(144),u=n.n(b),s=37,m=39;var d=function(e){var t=e.block,n=e.children,a=e.defaultValue,l=e.values,r=e.groupId,b=Object(c.a)(),d=b.tabGroupChoices,h=b.setTabGroupChoices,g=Object(o.useState)(a),O=g[0],f=g[1],j=Object(o.useState)(!1),y=j[0],N=j[1];if(null!=r){var v=d[r];null!=v&&v!==O&&l.some((function(e){return e.value===v}))&&f(v)}var C=function(e){f(e),null!=r&&h(r,e)},k=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},A=function(){N(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",A)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(p.a)("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(p.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),w(e)},onFocus:function(){return C(t)},onClick:function(){C(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))};var h=function(e){return i.a.createElement("div",null,e.children)},g={title:"Migration Guide",description:"Updating your app to Angular Apollo 2.0 and Apollo Client 3.0"},O={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration Guide",description:"Updating your app to Angular Apollo 2.0 and Apollo Client 3.0",source:"@site/docs/migration.md",slug:"/migration",permalink:"/docs/migration",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/migration.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Get started",permalink:"/docs/get-started"}},f=[{value:"Update with Angular Schematics",id:"update-with-angular-schematics",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Basic updates",id:"basic-updates",children:[{value:"No SelectPipe",id:"no-selectpipe",children:[]},{value:"HttpLink and HttpBatchLink",id:"httplink-and-httpbatchlink",children:[]},{value:"Apollo Links",id:"apollo-links",children:[]},{value:"graphql-tag",id:"graphql-tag",children:[]},{value:"Using apollo-utilities without the rest of Apollo Client",id:"using-apollo-utilities-without-the-rest-of-apollo-client",children:[]},{value:"Using apollo-cache and/or apollo-cache-inmemory without the rest of Apollo Client",id:"using-apollo-cache-andor-apollo-cache-inmemory-without-the-rest-of-apollo-client",children:[]},{value:"Breaking cache changes",id:"breaking-cache-changes",children:[]}]}],j={rightToc:f};function y(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Apollo Client is now distributed as the ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client")," package (previous versions are distributed as ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-client"),")."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client")," package includes both core logic and GraphQL request handling, which previously required installing separate packages."),Object(r.b)("li",{parentName:"ul"},"\u203c\ufe0f The ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client")," includes React-specific code so it's very important to use ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/core")," instead."),Object(r.b)("li",{parentName:"ul"},"Apollo's cache (",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache"),") is more flexible and performant. It now supports garbage collection, storage of both normalized and non-normalized data, and the customization of cached data with new ",Object(r.b)("inlineCode",{parentName:"li"},"TypePolicy")," and ",Object(r.b)("inlineCode",{parentName:"li"},"FieldPolicy")," APIs."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular")," includes now GraphQL request handling (",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular/http"),"), which previously required installing separate packages."),Object(r.b)("li",{parentName:"ul"},"New Apollo Angular no longer supports the ",Object(r.b)("inlineCode",{parentName:"li"},"SelectPipe"),".")),Object(r.b)("h2",{id:"update-with-angular-schematics"},"Update with Angular Schematics"),Object(r.b)("p",null,"Apollo Angular comes with set of migration schematics:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"ng update apollo-angular\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Important! Migration doesn't cover all use-cases and NgModules like ",Object(r.b)("inlineCode",{parentName:"p"},"HttpLinkModule")," have to be deleted manually. To improve the migration script, please open issues and PRs!")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"To get started with the v2.0, you will change your imports to use the two packages. A typical upgrade looks like this:"),Object(r.b)(d,{defaultValue:"before",values:[{label:"Before",value:"before"},{label:"After",value:"after"},{label:"Diff",value:"diff"}],mdxType:"Tabs"},Object(r.b)(h,{value:"before",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {ApolloClient} from 'apollo-client';\nimport {InMemoryCache} from 'apollo-cache-inmemory';\nimport {Apollo} from 'apollo-angular';\nimport gql from 'graphql-tag';\nimport {HttpLink} from 'apollo-angular-link-http';\n"))),Object(r.b)(h,{value:"after",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {ApolloClient, InMemoryCache} from '@apollo/client/core';\nimport {Apollo, gql} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\n"))),Object(r.b)(h,{value:"diff",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"-import {ApolloClient} from 'apollo-client';\n-import {InMemoryCache} from 'apollo-cache-inmemory';\n+import {ApolloClient, InMemoryCache} from '@apollo/client/core';\n-import {Apollo} from 'apollo-angular';\n-import gql from 'graphql-tag';\n+import {Apollo, gql} from 'apollo-angular';\n-import {HttpLink} from 'apollo-angular-link-http';\n+import {HttpLink} from 'apollo-angular/http';\n")))),Object(r.b)("h2",{id:"basic-updates"},"Basic updates"),Object(r.b)("p",null,"A simple usage of Apollo Angular upgrading to the 2.0 would look like this:"),Object(r.b)(d,{defaultValue:"before",values:[{label:"Before",value:"before"},{label:"After",value:"after"},{label:"Diff",value:"diff"}],mdxType:"Tabs"},Object(r.b)(h,{value:"before",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {NgModule} from '@angular/core';\nimport {HttpClientModule} from '@angular/common/http';\nimport {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';\nimport {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';\nimport {InMemoryCache} from 'apollo-cache-inmemory';\n\n@NgModule({\n  imports: [\n    // ... other modules\n    HttpClientModule,\n    HttpLinkModule,\n    ApolloModule,\n  ],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          cache: new InMemoryCache(),\n          link: httpLink.create({\n            uri: 'http://localhost:3000',\n          }),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n"))),Object(r.b)(h,{value:"after",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {NgModule} from '@angular/core';\nimport {HttpClientModule} from '@angular/common/http';\nimport {APOLLO_OPTIONS} from 'apollo-angular';\nimport {HttpLink} from 'apollo-angular/http';\nimport {InMemoryCache} from '@apollo/client/core';\n\n@NgModule({\n  imports: [\n    // ... other modules\n    HttpClientModule,\n  ],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          cache: new InMemoryCache(),\n          link: httpLink.create({\n            uri: 'http://localhost:3000',\n          }),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n"))),Object(r.b)(h,{value:"diff",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'language="typescript"',language:'"typescript"'}),"import {NgModule} from '@angular/core';\nimport {HttpClientModule} from '@angular/common/http';\nimport {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';\n-import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';\n+import {HttpLink} from 'apollo-angular/http';\n-import {InMemoryCache} from 'apollo-cache-inmemory';\n+import {InMemoryCache} from '@apollo/client/core';\n\n\n@NgModule({\n  imports: [\n    // ... other modules\n    HttpClientModule,\n    ApolloModule,\n-   HttpLinkModule,\n  ],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          cache: new InMemoryCache(),\n          link: httpLink.create({\n            uri: 'http://localhost:3000',\n          }),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n")))),Object(r.b)("p",null,"What's different?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular-link-http")," and ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular-link-http-batch")," are now available under ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular/http")),Object(r.b)("li",{parentName:"ul"},"No ",Object(r.b)("inlineCode",{parentName:"li"},"HttpLinkModule")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-client"),", ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-link")," and ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-cache-inmemory")," are now under ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/core")),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/core")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client")," because the latter includes React-related code.")),Object(r.b)("p",null,"This is the ",Object(r.b)("strong",{parentName:"p"},"most important part")," of migrating to 2.0."),Object(r.b)("p",null,"Few things to be explained."),Object(r.b)("h3",{id:"no-selectpipe"},"No SelectPipe"),Object(r.b)("p",null,"There are two reasons behind dropping ",Object(r.b)("inlineCode",{parentName:"p"},"SelectPipe"),". We haven't seen any big applications using the pipe and the logic there is very simple to recreate."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Pipe, PipeTransform} from '@angular/core';\n\n@Pipe({\n  name: 'select',\n})\nexport class SelectPipe implements PipeTransform {\n  public transform(obj: any, name: string = '') {\n    if (name !== '') {\n      return obj?.data?.[name];\n    }\n  }\n}\n")),Object(r.b)("h3",{id:"httplink-and-httpbatchlink"},"HttpLink and HttpBatchLink"),Object(r.b)("p",null,"The previous version of Apollo Angular (v1.0) setup had two extra packages: ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular-link-http")," and ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular-link-http-batch"),"."),Object(r.b)("p",null,"Now it's just one: ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular/http"),"."),Object(r.b)("h3",{id:"apollo-links"},"Apollo Links"),Object(r.b)("p",null,"The separate ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-link-*")," packages, that were previously maintained in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/apollo-link"}),"https://github.com/apollographql/apollo-link")," repo, have been merged into the Apollo Client project. These links now have their own nested ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client/link/*")," entry points. Imports should be updated as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular-link-persisted")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-angular/persisted-queries")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-link-context")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/link/context")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-link-error")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/link/error")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-link-retry")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/link/retry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-link-schema")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/link/schema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apollo-link-ws")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"@apollo/client/link/ws"))),Object(r.b)("h3",{id:"graphql-tag"},"graphql-tag"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," package includes ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag")," as a dependency and re-exports ",Object(r.b)("inlineCode",{parentName:"p"},"gql"),". To simplify your dependencies, we recommend importing ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," and removing all ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag")," dependencies."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {gql} from 'apollo-angular';\n")),Object(r.b)("h3",{id:"using-apollo-utilities-without-the-rest-of-apollo-client"},"Using apollo-utilities without the rest of Apollo Client"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-utilities")," package has been removed, but you can access the utilities themselves from the ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client/utilities")," entry point:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {isReference, isInlineFragment} from '@apollo/client/utilities';\n")),Object(r.b)("h3",{id:"using-apollo-cache-andor-apollo-cache-inmemory-without-the-rest-of-apollo-client"},"Using apollo-cache and/or apollo-cache-inmemory without the rest of Apollo Client"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-cache")," and ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-cache-inmemory")," packages have been removed, but if you're interested in using Apollo Client's cache by itself, you can access their contents with the ",Object(r.b)("inlineCode",{parentName:"p"},"@apollo/client/cache")," entry point:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {ApolloCache, InMemoryCache} from '@apollo/client/cache';\n")),Object(r.b)("h3",{id:"breaking-cache-changes"},"Breaking cache changes"),Object(r.b)("p",null,"The following cache changes are not backward compatible. Take them into consideration before you upgrade to Apollo Client 3.0."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By default, the ",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache")," no longer merges the fields of two objects unless those objects have the same unique identifier and that identifier is present in both objects. Additionally, the values of fields with the same name are no longer merged recursively by default. You can define a custom ",Object(r.b)("inlineCode",{parentName:"li"},"merge")," function for a field to handle both of these changes for a particular field. You can read more about these changes in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/caching/field-behavior#merging-non-normalized-objects"}),"Merging non-normalized objects"),". (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-client/pull/5603"}),"PR #5603"),")."),Object(r.b)("li",{parentName:"ul"},"All cache results are now frozen/immutable, as promised in the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.apollographql.com/whats-new-in-apollo-client-2-6-b3acf28ecad1"}),"Apollo Client 2.6 blog post")," (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-client/pull/5153"}),"PR #5153"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FragmentMatcher"),", ",Object(r.b)("inlineCode",{parentName:"li"},"HeuristicFragmentMatcher"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"IntrospectionFragmentMatcher")," have all been removed. We recommend using the ",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache"),"'s ",Object(r.b)("inlineCode",{parentName:"li"},"possibleTypes")," option instead. For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/data/fragments#defining-possibletypes-manually"}),"Defining possibleTypes manually")," (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-client/pull/5073"}),"PR #5073"),")."),Object(r.b)("li",{parentName:"ul"},"The internal representation of normalized data in the cache has changed. If you\u2019re using ",Object(r.b)("inlineCode",{parentName:"li"},"apollo-cache-inmemory"),"'s public API, then these changes shouldn't impact you. If you are manipulating cached data directly instead, review ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-client/pull/5146"}),"PR #5146")," for details."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(client/cache).writeData")," have been fully removed. ",Object(r.b)("inlineCode",{parentName:"li"},"(client/cache).writeQuery"),", ",Object(r.b)("inlineCode",{parentName:"li"},"(client/cache).writeFragment"),", and/or ",Object(r.b)("inlineCode",{parentName:"li"},"cache.modify")," can be used to update the cache.")),Object(r.b)(d,{defaultValue:"before",values:[{label:"Before",value:"before"},{label:"After",value:"after"}],mdxType:"Tabs"},Object(r.b)(h,{value:"before",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"client.writeData({\n  data: {\n    cartItems: [],\n  },\n});\n"))),Object(r.b)(h,{value:"after",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"client.writeQuery({\n  query: gql`\n    query GetCartItems {\n      cartItems\n    }\n  `,\n  data: {\n    cartItems: [],\n  },\n});\n")))),Object(r.b)("p",null,"For more details around why writeData has been removed, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/apollo-client/pull/5923"}),"PR #5923"),"."))}y.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?l.a.createElement(d,r(r({ref:t},p),{},{components:n})):l.a.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},154:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},161:function(e,t,n){"use strict";var a=n(0),l=Object(a.createContext)(void 0);t.a=l},162:function(e,t,n){"use strict";var a=n(0),l=n(161);t.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);