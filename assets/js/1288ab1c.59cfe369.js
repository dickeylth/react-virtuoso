"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[6810],{7942:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(5882),o=t(950),i=(t(959),t(7942)),l=["components"],a={id:"scroll-to-index",title:"Scroll to Index",sidebar_label:"Scroll to Index",slug:"/scroll-to-index/"},s=void 0,c={unversionedId:"basics/scroll-to-index",id:"basics/scroll-to-index",title:"Scroll to Index",description:"The Virtuoso component exposes an imperative scrollToIndex method, which scrolls the item at the specified index into view.",source:"@site/docs/basics/scroll-to-index.md",sourceDirName:"basics",slug:"/scroll-to-index/",permalink:"/scroll-to-index/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/basics/scroll-to-index.md",tags:[],version:"current",frontMatter:{id:"scroll-to-index",title:"Scroll to Index",sidebar_label:"Scroll to Index",slug:"/scroll-to-index/"},sidebar:"defaultSidebar",previous:{title:"Scroll Handling",permalink:"/scroll-handling/"},next:{title:"Top Items",permalink:"/top-items/"}},u={},p=[],d={toc:p},m="wrapper";function v(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Virtuoso component exposes an imperative ",(0,i.kt)("inlineCode",{parentName:"p"},"scrollToIndex")," method, which scrolls the item at the specified index into view.\nAs an optional configuration, the method accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"align: 'start' | 'center' | 'end'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"behavior: 'smooth'"),"."),(0,i.kt)("p",null,"Warning: Using smooth scrolling over many items can kill performance and potentially clash with loading strategies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live include-data",live:!0,"include-data":!0},'import { Virtuoso } from \'react-virtuoso\'\nimport { generateUsers, avatar, avatarPlaceholder } from \'./data\'\nimport { useState, useMemo, useRef } from \'react\'\n\nexport default function App() {\n  const [align, setAlign] = useState("start");\n  const [behavior, setBehavior] = useState("auto");\n  const virtuoso = useRef(null);\n  const users = useMemo(() => generateUsers(1000), []);\n  return (\n    <div>\n      <ul className="knobs">\n        <li>\n          <button\n            onClick={() => {\n              virtuoso.current.scrollToIndex({\n                index: 0,\n                align,\n                behavior\n              });\n              return false;\n            }}\n          >\n            Scroll To 1\n          </button>\n        </li>\n        <li>\n          <button\n            onClick={() => {\n              virtuoso.current.scrollToIndex({\n                index: 499,\n                align,\n                behavior\n              });\n              return false;\n            }}\n          >\n            Scroll To 500\n          </button>\n        </li>\n        <li>\n          <button\n            onClick={() => {\n              virtuoso.current.scrollToIndex({\n                index: 999,\n                align,\n                behavior\n              });\n              return false;\n            }}\n          >\n            Scroll To 1000\n          </button>\n        </li>\n        <li>\n          <label>\n            Align:\n            <select value={align} onChange={(e) => setAlign(e.target.value)}>\n              <option value="start">Start</option>\n              <option value="center">Center</option>\n              <option value="end">End</option>\n            </select>\n          </label>\n        </li>\n        <li>\n          <label>\n            Behavior:\n            <select value={behavior} onChange={(e) => setBehavior(e.target.value)}>\n              <option value="auto">Instant (auto)</option>\n              <option value="smooth">Smooth</option>\n            </select>\n          </label>\n        </li>\n      </ul>\n\n      <div style={{height: 600}}>\n        <Virtuoso\n          data={users}\n          ref={virtuoso}\n          itemContent={(index, user) => {\n            return (\n              <div\n                style={{\n                  backgroundColor: user.bgColor,\n                  padding: "1rem 0",\n                }}\n              >\n                <div style={{ float: "left", margin: "1rem" }}>{avatar()}</div>\n\n                <h4>{user.index}. {user.name}</h4>\n\n                {user.longText}\n              </div>\n            );\n          }}\n        />\n      </div>\n    </div>\n  )\n}\n')))}v.isMDXComponent=!0}}]);