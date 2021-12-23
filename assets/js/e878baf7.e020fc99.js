(self.webpackChunksite=self.webpackChunksite||[]).push([[8377],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6788:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={title:"\u5e94\u7528\u5165\u53e3",order:3},l={unversionedId:"guide/basic/app",id:"guide/basic/app",isDocsHomePage:!1,title:"\u5e94\u7528\u5165\u53e3",description:"\u6846\u67b6\u901a\u8fc7\u8c03\u7528 runApp \u521b\u5efa\u6e32\u67d3\u6574\u4e2a\u5e94\u7528\uff0c\u5728\u521b\u5efa\u5e94\u7528\u65f6\u53ef\u4ee5\u4f20\u5165\u5e94\u7528\u7684\u5168\u5c40\u914d\u7f6e\u3002",source:"@site/docs/guide/basic/app.md",sourceDirName:"guide/basic",slug:"/guide/basic/app",permalink:"/docs/guide/basic/app",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/app.md",version:"current",frontMatter:{title:"\u5e94\u7528\u5165\u53e3",order:3},sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/docs/guide/basic/structure"},next:{title:"\u5de5\u7a0b\u914d\u7f6e",permalink:"/docs/guide/basic/build"}},c=[{value:"\u914d\u7f6e\u89c4\u8303",id:"\u914d\u7f6e\u89c4\u8303",children:[]},{value:"\u542f\u52a8\u9879\u914d\u7f6e",id:"\u542f\u52a8\u9879\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u914d\u7f6e\u9879\u8bf4\u660e",children:[{value:"<code>app.getInitialData</code>",id:"appgetinitialdata",children:[]},{value:"<code>app.renderComponent</code>",id:"apprendercomponent",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6846\u67b6\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"runApp")," \u521b\u5efa\u6e32\u67d3\u6574\u4e2a\u5e94\u7528\uff0c\u5728\u521b\u5efa\u5e94\u7528\u65f6\u53ef\u4ee5\u4f20\u5165\u5e94\u7528\u7684\u5168\u5c40\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u89c4\u8303"},"\u914d\u7f6e\u89c4\u8303"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u5bf9\u5e94\u7528\u8fdb\u884c\u5168\u5c40\u914d\u7f6e\uff0c\u8bbe\u7f6e\u8def\u7531\u3001\u8fd0\u884c\u73af\u5883\u3001\u8bf7\u6c42\u3001\u65e5\u5fd7\u7b49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { runApp, IAppConfig } from 'ice';\n\nconst appConfig: IAppConfig = {\n  app: {},\n  router: {},\n  store: {},\n  request: {},\n};\n\nrunApp(appConfig);\n")),(0,o.kt)("h2",{id:"\u542f\u52a8\u9879\u914d\u7f6e"},"\u542f\u52a8\u9879\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"app")," \u8fd9\u4e00\u9879\u6240\u652f\u6301\u7684\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { runApp } from 'ice';\n\nconst appConfig = {\n  app: {\n    // \u53ef\u9009\uff0c\u9ed8\u8ba4 ice-container\uff0c\u6839\u8282\u70b9 id\n    rootId: 'ice-container',\n\n    // \u53ef\u9009\uff0c\u6839\u8282\u70b9 DOM \u5143\u7d20\uff0c\u66f4\u7075\u6d3b\u7684 rootId\n    mountNode: document.getElementById('ice-container'),\n\n    // \u53ef\u9009\uff0c\u9ed8\u8ba4 true\uff0c\u662f\u5426\u89e3\u6790\u8def\u7531\u7ec4\u4ef6\u7684\u67e5\u8be2\u53c2\u6570\n    parseSearchParams: true,\n\n    // \u53ef\u9009\uff0c\u9ed8\u8ba4 false\uff0c\u662f\u5426\u5f00\u542f React.StrictMode\uff0cicejs 2.0 \u5f00\u59cb\u652f\u6301\n    strict: false,\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u6dfb\u52a0 Provider\n    addProvider: ({ children }) => {\n      return <ConfigProvider>{children}</ConfigProvider>;\n    },\n\n    // \u53ef\u9009\uff0c\u5e38\u7528\u4e8e SSR \u573a\u666f\u6216\u8005\u521d\u59cb\u5316\u5f02\u6b65\u83b7\u53d6\u6570\u636e\u7684\u573a\u666f\n    // \u5982\u679c\u8fd4\u56de\u5b57\u6bb5\u4e2d\u5305\u542b initialStates \u5b57\u6bb5\u5c06\u4f1a\u4f5c\u4e3a\u72b6\u6001\u7ba1\u7406 store \u7684\u521d\u59cb\u503c\n    // \u5982\u679c\u8fd4\u56de\u5b57\u6bb5\u4e2d\u5305\u542b auth \u5b57\u6bb5\u5c06\u4f1a\u4f5c\u4e3a\u6743\u9650\u7ba1\u7406 auth \u7684\u521d\u59cb\u503c\n    getInitialData: async() => {\n      const result = await request();\n      return result;\n    },\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u9519\u8bef\u8fb9\u754c\u7684 fallback UI\n    ErrorBoundaryFallback: <div>\u6e32\u67d3\u9519\u8bef</div>,\n\n    // \u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u9519\u8bef\u7684\u5904\u7406\u4e8b\u4ef6\n    onErrorBoundaryHandler: (error, componentStack) => {\n      // Do something with the error\n    },\n\n    // \u53ef\u9009\uff0cSPA \u573a\u666f\u4e0b\u6e32\u67d3\u4e00\u4e2a\u7b80\u5355\u7ec4\u4ef6\uff0c\u4e0d\u518d\u5f15\u5165 react-router \u7684\u8def\u7531\u7cfb\u7edf\n    // \u9700\u8981\u914d\u5408\u8bbe\u7f6e build.json \u7684 router \u9879\u4e3a false\n    renderComponent: SimpleComponent,\n  },\n};\n\nrunApp(appConfig);\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879\u8bf4\u660e"},"\u914d\u7f6e\u9879\u8bf4\u660e"),(0,o.kt)("h3",{id:"appgetinitialdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"app.getInitialData")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8be5\u80fd\u529b\u5e76\u4e0d\u8026\u5408 SSR\uff0c\u5728 CSR \u573a\u666f\u4e0b\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528")),(0,o.kt)("p",null,"\u901a\u8fc7\u8be5\u914d\u7f6e\u9879\u53ef\u4ee5\u5728\u5e94\u7528\u6e32\u67d3\u524d\u505a\u4e00\u4e9b\u5f02\u6b65\u7684\u4e8b\u60c5\uff0c\u6bd4\u5982\u83b7\u53d6\u4e00\u4e9b\u5168\u5c40\u6570\u636e\u3001\u8bfb\u53d6/\u8bbe\u7f6e Cookie/LocalStorage \u7b49\u3002"),(0,o.kt)("h4",{id:"\u5168\u5c40\u5f02\u6b65\u83b7\u53d6\u6570\u636e\u5e76\u6d88\u8d39"},"\u5168\u5c40\u5f02\u6b65\u83b7\u53d6\u6570\u636e\u5e76\u6d88\u8d39"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app")," \u4e2d\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialData()"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { runApp, request } from 'ice';\n\nconst appConfig = {\n  app: {\n+    getInitialData: async (ctx) => {\n+      const { username, age } = await request.get('/api/user');\n+      const theme = localStorage.getItem('theme');\n+      // \u4efb\u610f\u7684\u64cd\u4f5c\uff1a\u6bd4\u5982\u8bfb\u5199 cookie \u7b49\n+      return { theme, username, age };\n+    }\n  },\n};\n")),(0,o.kt)("p",null,"\u63a5\u7740\u5728 View \u7b49\u5730\u65b9\u5373\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialData")," API \u6d88\u8d39\u8fd9\u4e9b\u6570\u636e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"// src/pages/Home/index.jsx\nimport { getInitialData } from 'ice';\n\nexport default function Home(props) {\n+  const initialData = getInitialData();\n\n  return (\n    <>\n+      \u7528\u6237\u540d\u79f0\uff1a{initialData.username}\n+      \u5f53\u524d\u4e3b\u9898\uff1a{initialData.theme}\n    </>\n  );\n}\n")),(0,o.kt)("h4",{id:"\u5f02\u6b65\u8bbe\u7f6e-store-\u7684\u521d\u59cb\u72b6\u6001"},"\u5f02\u6b65\u8bbe\u7f6e Store \u7684\u521d\u59cb\u72b6\u6001"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/basic/store#%E8%AE%BE%E7%BD%AE%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81"},"\u8bbe\u7f6e\u521d\u59cb\u72b6\u6001")),(0,o.kt)("h4",{id:"\u5f02\u6b65\u8bbe\u7f6e\u521d\u59cb\u6743\u9650\u6570\u636e"},"\u5f02\u6b65\u8bbe\u7f6e\u521d\u59cb\u6743\u9650\u6570\u636e"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/advanced/auth#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%9D%83%E9%99%90%E6%95%B0%E6%8D%AE"},"\u521d\u59cb\u5316\u6743\u9650\u6570\u636e")),(0,o.kt)("h3",{id:"apprendercomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"app.renderComponent")),(0,o.kt)("p",null,"\u8be5\u9009\u9879\u7528\u4e8e\u81ea\u5b9a\u4e49\u5e94\u7528\u7684\u6e32\u67d3\u5165\u53e3\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4e0d\u63a8\u8350\u4f7f\u7528\u8be5\u9879\u80fd\u529b\u3002\u4f46\u662f\u5f53\u6709\u4ee5\u4e0b\u8bc9\u6c42\u65f6\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u8be5\u914d\u7f6e\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6574\u4e2a\u5e94\u7528\u4e0d\u4f9d\u8d56\u8def\u7531\uff0c\u53ea\u6e32\u67d3\u4e00\u4e2a\u7b80\u5355\u7684 React \u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u60f3\u8131\u79bb\u6846\u67b6\u7684\u8def\u7531\u89c4\u8303\uff0c\u4f7f\u7528 react-router \u539f\u59cb\u7684 API \u7f16\u5199\u8def\u7531")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u4f7f\u7528\u8be5\u80fd\u529b\u4e4b\u540e\uff0c\u8def\u7531\u9875\u9762\uff08\u5982\u679c\u6709\uff09\u7684 SSR \u76f8\u5173\u80fd\u529b\u4e5f\u4f1a\u5931\u6548\u3002\u4ee5\u4e0b\u662f\u4e24\u4e2a\u573a\u666f\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,o.kt)("h4",{id:"1-\u6e32\u67d3\u4e00\u4e2a\u7b80\u5355\u7684-react-\u7ec4\u4ef6"},"1. \u6e32\u67d3\u4e00\u4e2a\u7b80\u5355\u7684 React \u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5982\u679c\u662f SPA \u573a\u666f\u5219\u9996\u5148\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u7981\u7528\u8def\u7531\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n+  "router": false\n}\n')),(0,o.kt)("p",null,"\u63a5\u7740\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"app.renderComponent")," \u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"runApp({\n  app: {\n    renderComponent() {\n      return <div>\u6574\u4e2a\u5e94\u7528\u5c31\u4e00\u4e2a\u7b80\u5355\u7ec4\u4ef6</div>\n    }\n  }\n})\n")),(0,o.kt)("h4",{id:"\u4f7f\u7528-react-router-\u539f\u59cb\u7684-api-\u7f16\u5199\u8def\u7531"},"\u4f7f\u7528 react-router \u539f\u59cb\u7684 API \u7f16\u5199\u8def\u7531"),(0,o.kt)("p",null,"icejs \u9ed8\u8ba4\u5c06\u8def\u7531\u80fd\u529b\u505a\u4e86\u5c01\u88c5\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u7f16\u5199\u5bf9\u5e94\u7684\u8def\u7531\u914d\u7f6e\u5373\u53ef\uff0c\u5982\u679c\u5e0c\u671b\u975e\u5e38\u7075\u6d3b\u7684\u7f16\u5199\u8def\u7531\uff0c\u5219\u9700\u8981\u901a\u8fc7\u8be5\u9009\u9879\u3002"),(0,o.kt)("p",null,"\u540c\u4e0a\uff0c\u5982\u679c\u662f SPA \u573a\u666f\u5219\u9996\u5148\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"build.json")," \u4e2d\u7981\u7528\u8def\u7531\u63d2\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'{\n+  "router": false\n}\n')),(0,o.kt)("p",null,"\u63a5\u7740\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"app.renderComponent")," \u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { runApp } from 'ice';\nimport { Router, Switch, Route } from 'react-router-dom';\nimport Home from '@/pages/Home';\n\nfunction App() {\n  return (\n    <Router>\n      <Switch>\n        <Route path=\"/home\" component={Home} />\n      </Switch>\n    <Router/>\n  )\n}\n\nrunApp({\n  app: {\n    renderComponent() {\n      return <App />;\n    }\n  }\n});\n")))}d.isMDXComponent=!0}}]);