(self.webpackChunksite=self.webpackChunksite||[]).push([[5030],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},267:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i={title:"\u7ea6\u5b9a\u5f0f\u8def\u7531",order:10},l={unversionedId:"guide/advanced/convention-routing",id:"guide/advanced/convention-routing",isDocsHomePage:!1,title:"\u7ea6\u5b9a\u5f0f\u8def\u7531",description:"icejs \u63a8\u8350\u4f7f\u7528 \u914d\u7f6e\u5f0f\u8def\u7531 \u8fdb\u884c\u8def\u7531\u7ba1\u7406\u3002\u4f46\u540c\u65f6\u4e5f\u652f\u6301 \u7ea6\u5b9a\u5f0f\u8def\u7531 \u65b9\u6848\uff0c\u5f53\u9879\u76ee\u4e2d\u5b58\u5728 src/routes.[ts|js] \u6587\u4ef6\u65f6\uff0c\u5219\u4f7f\u7528\u914d\u7f6e\u5f0f\u8def\u7531\uff0c\u5426\u5219\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u3002",source:"@site/docs/guide/advanced/convention-routing.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/convention-routing",permalink:"/docs/guide/advanced/convention-routing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/advanced/convention-routing.md",version:"current",frontMatter:{title:"\u7ea6\u5b9a\u5f0f\u8def\u7531",order:10},sidebar:"docs",previous:{title:"\u6743\u9650\u7ba1\u7406",permalink:"/docs/guide/advanced/auth"},next:{title:"\u672c\u5730 Mock \u6570\u636e",permalink:"/docs/guide/advanced/mock"}},p=[{value:"\u7ea6\u5b9a\u5f0f\u8def\u7531",id:"\u7ea6\u5b9a\u5f0f\u8def\u7531",children:[{value:"\u57fa\u7840\u8def\u7531",id:"\u57fa\u7840\u8def\u7531",children:[]},{value:"404 \u8def\u7531",id:"404-\u8def\u7531",children:[]},{value:"index \u8def\u7531",id:"index-\u8def\u7531",children:[]},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",children:[]},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",children:[]},{value:"\u5168\u5c40 Layout",id:"\u5168\u5c40-layout",children:[]}]},{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",children:[{value:"\u8fd0\u884c\u65f6\u914d\u7f6e",id:"\u8fd0\u884c\u65f6\u914d\u7f6e",children:[]},{value:"\u6784\u5efa\u914d\u7f6e",id:"\u6784\u5efa\u914d\u7f6e",children:[]}]}],u={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"icejs \u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5f0f\u8def\u7531")," \u8fdb\u884c\u8def\u7531\u7ba1\u7406\u3002\u4f46\u540c\u65f6\u4e5f\u652f\u6301 ",(0,o.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531")," \u65b9\u6848\uff0c\u5f53\u9879\u76ee\u4e2d\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes.[ts|js]")," \u6587\u4ef6\u65f6\uff0c\u5219\u4f7f\u7528\u914d\u7f6e\u5f0f\u8def\u7531\uff0c\u5426\u5219\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8def\u7531\u6587\u4ef6\u683c\u5f0f\u8bf7\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.[ts|js]")," \u4fdd\u6301\u4e00\u81f4\uff0c\u5982\u5e94\u7528\u5165\u53e3\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.js"),"\uff0c\u90a3\u4e48\u8def\u7531\u6587\u4ef6\u5e94\u8be5\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"routes.js"),"\uff0c\u5982\u679c\u6587\u4ef6\u540d\u683c\u5f0f\u4e0d\u4e00\u81f4\u5219\u4f1a\u8fdb\u5165\u5230\u7ea6\u5b9a\u5f0f\u8def\u7531\u7684\u903b\u8f91\u4e2d\u3002")),(0,o.kt)("h2",{id:"\u7ea6\u5b9a\u5f0f\u8def\u7531"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),(0,o.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u7ea6\u5b9a\u5f0f\u8def\u7531\u4f1a\u6839\u636e\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u8def\u7531\u914d\u7f6e\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u624b\u52a8\u914d\u7f6e\u3002\u7ea6\u5b9a\u5f0f\u8def\u7531\u867d\u7136\u4e0d\u9700\u8981\u7528\u6237\u624b\u52a8\u914d\u7f6e\uff0c\u4f46\u56e0\u4e3a\u8def\u7531\u914d\u7f6e\u672c\u8eab\u5b58\u5728\u5f88\u591a\u89c4\u5219\uff0c\u56e0\u6b64\u7ea6\u5b9a\u5f0f\u8def\u7531\u4e5f\u9700\u8981\u7ea6\u5b9a\u4e00\u7cfb\u5217\u7684\u76ee\u5f55\u7ed3\u6784\u8bbe\u8ba1\uff0c\u8fd9\u672c\u8eab\u4e5f\u6709\u4e00\u5b9a\u7684\u5b66\u4e60\u6210\u672c\u3002"),(0,o.kt)("h3",{id:"\u57fa\u7840\u8def\u7531"},"\u57fa\u7840\u8def\u7531"),(0,o.kt)("p",null,"\u5047\u8bbe pages \u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"src/pages\n\u2514\u2500\u2500 About\n\u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 Dashboard\n\u251c\u2500\u2500 a.tsx\n\u2514\u2500\u2500 b.tsx\n")),(0,o.kt)("p",null,"\u90a3\u4e48\uff0c\u6846\u67b6\u81ea\u52a8\u751f\u6210\u7684\u8def\u7531\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default [\n  {\n    path: '/about',\n    exact: true,\n    component: PageAbout,\n  },\n  {\n    path: '/dashboard/a',\n    exact: true,\n    component: PageDashboardA,\n  },\n  {\n    path: '/dashboard/b',\n    exact: true,\n    component: PageDashboardB,\n  },\n];\n")),(0,o.kt)("h3",{id:"404-\u8def\u7531"},"404 \u8def\u7531"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/404.[jsx|tsx]")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/404/index.[jsx|tsx]")," \u6587\u4ef6\u5b58\u5728\uff0c\u5219\u5c06\u5b83\u4f5c\u4e3a 404 \u9875\u9762"),(0,o.kt)("h3",{id:"index-\u8def\u7531"},"index \u8def\u7531"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/index.[jsx|tsx]")," \u6587\u4ef6\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u6620\u5c04\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u7684\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,o.kt)("p",null,"\u6846\u67b6\u7ea6\u5b9a\u9875\u9762\u76ee\u5f55\u4e0b\u5b58\u5728\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"_layout.[jsx|tsx]")," \u65f6\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5d4c\u5957\u8def\u7531\uff0c\u5f53\u524d\u76ee\u5f55\u548c\u5b50\u76ee\u5f55\u5747\u4e3a\u5b50\u8def\u7531\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe pages \u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"src/pages\n\u2514\u2500\u2500 About\n\u251c\u2500\u2500 \\_layout.tsx\n\u251c\u2500\u2500 a.tsx\n\u2514\u2500\u2500 b.tsx\n\u2514\u2500\u2500 Dashboard\n\u2514\u2500\u2500 index.tsx\n")),(0,o.kt)("p",null,"\u90a3\u4e48\uff0c\u6846\u67b6\u81ea\u52a8\u751f\u6210\u7684\u8def\u7531\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"[\n  {\n    path: '/about',\n    exact: false,\n    component: LayoutAbout,\n    children: [\n      {\n        path: '/a',\n        exact: true,\n        component: PageAboutA,\n      },\n      {\n        path: '/b',\n        exact: true,\n        component: PageAboutB,\n      },\n    ],\n  },\n  {\n    path: '/dashboard',\n    exact: true,\n    component: PageDashboard,\n  },\n];\n")),(0,o.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,o.kt)("p",null,"\u6846\u67b6\u7ea6\u5b9a\u5b9a\u4e49\u5e26\u53c2\u6570\u7684\u52a8\u6001\u8def\u7531\uff0c\u9700\u8981\u521b\u5efa\u5bf9\u5e94\u7684\u4ee5\u4e0b\u5212\u7ebf\u4f5c\u4e3a\u524d\u7f00\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8def\u5f84\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," \u4f5c\u4e3a\u6587\u4ef6\u5939\u6216\u6587\u4ef6\u540d\u7684\u9996\u4e2a\u5b57\u7b26\uff0c\u6807\u8bc6\u4e00\u4e2a\u52a8\u6001\u8def\u7531\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/app/$uid.tsx")," \u4f1a\u751f\u6210\u8def\u7531 ",(0,o.kt)("inlineCode",{parentName:"li"},"/app/:uid")),(0,o.kt)("li",{parentName:"ul"},"\u8def\u5f84\u4e2d\u6587\u4ef6\u5939\u6216\u6587\u4ef6\u540d\u7684\u9996\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u540c\u65f6\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"$"),"\uff0c\u6807\u8bc6\u4e00\u4e2a\u53ef\u9009\u7684\u52a8\u6001\u8def\u7531\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"src/pages/app/$uid$.tsx")," \u4f1a\u751f\u6210\u8def\u7531 ",(0,o.kt)("inlineCode",{parentName:"li"},"/app/:uid?"))),(0,o.kt)("p",null,"\u5047\u8bbe pages \u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"src/pages\n\u2514\u2500\u2500 repo\n\u251c\u2500\u2500 $pid.tsx\n    \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 $uid$.tsx\n")),(0,o.kt)("p",null,"\u90a3\u4e48\uff0c\u6846\u67b6\u81ea\u52a8\u751f\u6210\u7684\u8def\u7531\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default [\n  {\n    path: '/repo/:pid',\n    exact: true,\n    component: PageRepo$pid,\n  },\n  {\n    path: '/repo',\n    exact: true,\n    component: PageRepo,\n  },\n  {\n    path: '/:uid?',\n    exact: true,\n    component: Page$uid$,\n  },\n];\n")),(0,o.kt)("h3",{id:"\u5168\u5c40-layout"},"\u5168\u5c40 Layout"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"src/layouts/index.[jsx|tsx]")," \u6587\u4ef6\u5b58\u5728\uff0c\u5219\u5c06\u5b83\u9ed8\u8ba4\u4f5c\u4e3a\u5168\u5c40 layout"),(0,o.kt)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u8fd0\u884c\u65f6\u914d\u7f6e"},"\u8fd0\u884c\u65f6\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guide/basic/router#%E8%BF%90%E8%A1%8C%E6%97%B6%E9%85%8D%E7%BD%AE"},"\u8be6\u89c1")),(0,o.kt)("h3",{id:"\u6784\u5efa\u914d\u7f6e"},"\u6784\u5efa\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e00\u4e9b\u6784\u5efa\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "router": {\n    // ...options\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"options"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"configPath"),": \u4ec5\u914d\u7f6e\u5f0f\u8def\u7531\uff0c\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"'src/routes.[t|j]s'"),"\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u5f0f\u8def\u7531\u6587\u4ef6\u7684\u5730\u5740"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"caseSensitive"),": \u4ec5\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c \u6839\u636e\u6587\u4ef6\u540d\u8f6c\u6362\u4e3a\u8def\u7531\u65f6\u662f\u5426\u5927\u5c0f\u5199\u654f\u611f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ignoreRoutes"),": \u4ec5\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"\uff0c\u5ffd\u7565\u6307\u5b9a\u8def\u7531\u7684\u751f\u6210"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ignorePaths"),": \u4ec5\u7ea6\u5b9a\u5f0f\u8def\u7531\uff0c\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u9ed8\u8ba4\u503c ",(0,o.kt)("inlineCode",{parentName:"li"},"['components']"),"\uff0c\u751f\u6210\u8def\u7531\u65f6\u5ffd\u7565\u6307\u5b9a\u76ee\u5f55")))}c.isMDXComponent=!0}}]);