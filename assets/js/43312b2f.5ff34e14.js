(self.webpackChunksite=self.webpackChunksite||[]).push([[6929],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7918:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a={badge:"badge_1IBP",error:"error_3kJW"};var i=function(e){var t=e.type,n=void 0===t?"error":t,i=e.text;return r.createElement("div",{className:a.badge+" "+a[n]},i)}},813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(7918),l=["components"],p={title:"\u9875\u9762\u8def\u7531\u7ec4\u4ef6",order:7},s={unversionedId:"guide/basic/page",id:"guide/basic/page",isDocsHomePage:!1,title:"\u9875\u9762\u8def\u7531\u7ec4\u4ef6",description:"\u9875\u9762\u8def\u7531\u7ec4\u4ef6\u5bf9\u5e94\u4e00\u4e2a\u8def\u7531\uff0c\u8fdb\u5165\u5bf9\u5e94\u8def\u7531\u65f6\u4f1a\u6e32\u67d3\u8be5\u7ec4\u4ef6\uff0c\u540c\u65f6\u79bb\u5f00\u8be5\u8def\u7531\u7684\u65f6\u5019\u4e5f\u4f1a\u5378\u8f7d\u8be5\u7ec4\u4ef6\uff0c\u76f8\u6bd4\u4e8e\u666e\u901a\u7684 React \u7ec4\u4ef6\uff0c\u9875\u9762\u8def\u7531\u7ec4\u4ef6\u4f1a\u6709\u4e00\u4e9b\u589e\u5f3a\u7684\u80fd\u529b\uff0c\u6bd4\u5982\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u914d\u7f6e\u9879\u3001\u9ed8\u8ba4\u4f1a\u643a\u5e26\u4e00\u4e9b props \u7b49\u3002",source:"@site/docs/guide/basic/page.md",sourceDirName:"guide/basic",slug:"/guide/basic/page",permalink:"/docs/guide/basic/page",editUrl:"https://github.com/ice-lab/site/edit/master/docs/guide/basic/page.md",version:"current",frontMatter:{title:"\u9875\u9762\u8def\u7531\u7ec4\u4ef6",order:7},sidebar:"docs",previous:{title:"React \u7ec4\u4ef6",permalink:"/docs/guide/basic/component"},next:{title:"\u6837\u5f0f\u65b9\u6848",permalink:"/docs/guide/basic/style"}},c=[{value:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e\u9879",id:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e\u9879",children:[{value:'1. \u4e2d\u5fc3\u5316\u914d\u7f6e\u5728 <code>src/routes.ts</code> \u4e2d\uff08\u63a8\u8350\uff09<Badge text="2.0.0" />',id:"1-\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728-srcroutests-\u4e2d\uff08\u63a8\u8350\uff09",children:[]},{value:"2. \u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u4e0a",id:"2-\u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u4e0a",children:[]}]},{value:"\u9875\u9762\u7ec4\u4ef6\u9ed8\u8ba4 props",id:"\u9875\u9762\u7ec4\u4ef6\u9ed8\u8ba4-props",children:[]},{value:"\u9875\u9762\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5",id:"\u9875\u9762\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9875\u9762\u8def\u7531\u7ec4\u4ef6\u5bf9\u5e94\u4e00\u4e2a\u8def\u7531\uff0c\u8fdb\u5165\u5bf9\u5e94\u8def\u7531\u65f6\u4f1a\u6e32\u67d3\u8be5\u7ec4\u4ef6\uff0c\u540c\u65f6\u79bb\u5f00\u8be5\u8def\u7531\u7684\u65f6\u5019\u4e5f\u4f1a\u5378\u8f7d\u8be5\u7ec4\u4ef6\uff0c\u76f8\u6bd4\u4e8e\u666e\u901a\u7684 React \u7ec4\u4ef6\uff0c\u9875\u9762\u8def\u7531\u7ec4\u4ef6\u4f1a\u6709\u4e00\u4e9b\u589e\u5f3a\u7684\u80fd\u529b\uff0c\u6bd4\u5982\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u914d\u7f6e\u9879\u3001\u9ed8\u8ba4\u4f1a\u643a\u5e26\u4e00\u4e9b props \u7b49\u3002"),(0,i.kt)("h2",{id:"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e\u9879"},"\u9875\u9762\u7ec4\u4ef6\u914d\u7f6e\u9879"),(0,i.kt)("p",null,"\u6846\u67b6\u4e3a\u9875\u9762\u7ea7\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7279\u6b8a\u7684\u914d\u7f6e\u9879\uff0c\u8ba9\u9875\u9762\u7ea7\u7ec4\u4ef6\u53ef\u4ee5\u5feb\u901f\u62e5\u6709\u4e00\u4e9b\u80fd\u529b\u3002\u652f\u6301\u4e24\u79cd\u914d\u7f6e\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"src/routes.ts")," \u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u5165\u53e3 tsx \u4e2d")),(0,i.kt)("h3",{id:"1-\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728-srcroutests-\u4e2d\uff08\u63a8\u8350\uff09"},"1. \u4e2d\u5fc3\u5316\u914d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"h3"},"src/routes.ts")," \u4e2d\uff08\u63a8\u8350\uff09",(0,i.kt)(o.Z,{text:"2.0.0",mdxType:"Badge"})),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u914d\u7f6e\u5f0f\u8def\u7531\u7684\u5f00\u53d1\u8005\uff0c\u63a8\u8350\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/routes.ts")," \u4e2d\uff0c\u7ba1\u7406\u8d77\u6765\u66f4\u52a0\u65b9\u4fbf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import UserLogin from '@/pages/UserLogin';\n\nexport default [\n  {\n    path: '/login',\n    component: UserLogin,\n+    pageConfig: {\n+      title: '\u767b\u5f55\u9875\u9762',\n+    },\n  },\n];\n\nexport default routerConfig;\n")),(0,i.kt)("p",null,"pageConfig \u652f\u6301\u7684\u914d\u7f6e\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"title: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"\uff0c\u914d\u7f6e\u9875\u9762\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},"scrollToTop: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),"\uff0c\u9ed8\u8ba4 false\uff0c\u8fdb\u5165\u9875\u9762\u65f6\u662f\u5426\u8981\u6eda\u52a8\u5230\u9876\u90e8"),(0,i.kt)("li",{parentName:"ul"},"auth: ",(0,i.kt)("inlineCode",{parentName:"li"},"String[]"),"\uff0c\u914d\u7f6e\u9875\u9762\u51c6\u5165\u6743\u9650\u89d2\u8272\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"errorBoundary: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),"\uff0c\u9ed8\u8ba4 false\uff0c\u662f\u5426\u4e3a\u9875\u9762\u7ec4\u4ef6\u5305\u88f9 ",(0,i.kt)("inlineCode",{parentName:"li"},"ErrorBoundary")),(0,i.kt)("li",{parentName:"ul"},"keepAlive: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),"\uff0c\u7531 ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin-keep-alive")," \u63d2\u4ef6\u6269\u5c55\uff0c\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"spm: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"\uff0c\u7531 ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin-spm")," \u63d2\u4ef6\u6269\u5c55")),(0,i.kt)("h3",{id:"2-\u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u4e0a"},"2. \u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u4e0a"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528\u6587\u4ef6\u7ea6\u5b9a\u8def\u7531\u7684\u9879\u76ee\uff0c\u53ea\u80fd\u53bb\u4e2d\u5fc3\u5316\u914d\u7f6e\u5728\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u4e0a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"// src/pages/Home/index.tsx\nimport React from 'react';\n\nconst Home = () => {\n  return (\n    <div>Home</div>\n  );\n};\n\n+ Home.pageConfig = {\n+   title: 'Home'\n+ };\n\nexport default Home;\n")),(0,i.kt)("h2",{id:"\u9875\u9762\u7ec4\u4ef6\u9ed8\u8ba4-props"},"\u9875\u9762\u7ec4\u4ef6\u9ed8\u8ba4 props"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8def\u7531\u7ec4\u4ef6\uff08\u5373\u9875\u9762\u7ea7\u7ec4\u4ef6\uff09\uff0c\u53ef\u901a\u8fc7\u7ec4\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," \u83b7\u53d6\u5230\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location"),"\uff1a\u5f53\u524d\u8def\u7531\u7684 location \u5bf9\u8c61\uff0c\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"pathname"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"search"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"hash"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"state")," \u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history"),"\uff1a\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/about#history"},"history api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"searchParams"),"\uff1a\u5f53\u524d URL \u7684\u67e5\u8be2\u53c2\u6570\u5bf9\u8c61\uff08\u9700\u8981\u5f00\u542f ",(0,i.kt)("a",{parentName:"li",href:"/docs/guide/basic/app#%E5%90%AF%E5%8A%A8%E9%A1%B9%E9%85%8D%E7%BD%AE"},"parseSearchParams"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),"\uff1a\u5f53\u524d\u8def\u7531\u548c URL match \u540e\u7684\u5bf9\u8c61\uff0c\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"url"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"params"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"isExact")," \u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageConfig"),"\uff1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"routes.ts")," \u4e2d\u914d\u7f6e\u7684\u9875\u9762 pageConfig \u5c5e\u6027")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/pages/Home/index.tsx\nexport default function Home(props) {\n  const { location, history, searchParams, match, pageConfig } = props;\n  const { foo } = pageConfig;\n\n  console.log(foo); // => bar\n  return <>Home</>;\n}\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u975e\u8def\u7531\u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u5185\u5982\u60f3\u83b7\u53d6\u4e0a\u8ff0\u5c5e\u6027\u9700\u8981\u501f\u52a9 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/about#useHistory"},"useHistory"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/about#useLocation"},"useLocation"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/about#useParams"},"useParams"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/about#withRouter"},"withRouter")," \u7b49 API\u3002"),(0,i.kt)("h2",{id:"\u9875\u9762\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5"},"\u9875\u9762\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5"),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Page.getInitialProps()")," \u5728 SSR/SSG \u7684\u65f6\u5019\u5f02\u6b65\u83b7\u53d6\u521d\u59cb\u5c5e\u6027\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"// src/pages/Home/index.tsx\nimport React from 'react';\n\nconst Home = ({ stars }) => {\n  return (\n    <div>Home stars: {stars}</div>\n  );\n};\n\n+ Home.getInitialProps = async (ctx) => {\n+   const res = await request.get('https://api.github.com/repos/alibaba/ice');\n+   return { stars: res.data.stargazers_count };\n+ }\n\nexport default Home;\n")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Page.getStaticPaths()")," \u6307\u5b9a SSG \u65f6\u52a8\u6001\u8def\u7531\u7684\u9875\u9762\u9700\u8981\u6e32\u67d3\u51fa\u54ea\u4e9b\u5177\u4f53\u7684\u8def\u7531\u9875\u9762\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"// src/pages/Project/index.tsx\nimport React from 'react';\nimport { useParams } from 'ice';\n\nconst Project = () => {\n  const params = useParams();\n\n  return (\n    <div>Project id: {params.id}</div>\n  );\n};\n\n+ Project.getStaticPaths = async () => {\n+   return ['/project/1', 'project/100'];\n+ }\n\nexport default Project;\n")))}m.isMDXComponent=!0}}]);