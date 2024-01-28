"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[9441],{7942:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(959);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,y=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=t(5882),i=t(950),o=(t(959),t(7942)),s=["components"],l={id:"grid-responsive-columns",title:"Grid with Responsive Columns",sidebar_label:"Responsive Columns",slug:"/grid-responsive-columns/"},a=void 0,p={unversionedId:"grid/grid-responsive-columns",id:"grid/grid-responsive-columns",title:"Grid with Responsive Columns",description:"The VirtuosoGrid component displays equally-sized items, while supporting multiple items per row.",source:"@site/docs/grid/grid-responsive-columns.md",sourceDirName:"grid",slug:"/grid-responsive-columns/",permalink:"/grid-responsive-columns/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/grid/grid-responsive-columns.md",tags:[],version:"current",frontMatter:{id:"grid-responsive-columns",title:"Grid with Responsive Columns",sidebar_label:"Responsive Columns",slug:"/grid-responsive-columns/"},sidebar:"defaultSidebar",previous:{title:"@tanstack/table",permalink:"/tanstack-table-integration/"},next:{title:"Endless Scrolling",permalink:"/endless-scrolling/"}},c={},d=[{value:"Responsive Layout",id:"responsive-layout",level:3}],u={toc:d},m="wrapper";function y(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",(0,o.kt)("strong",{parentName:"p"},"equally-sized items"),", while supporting multiple items per row."),(0,o.kt)("p",null,"The component provides no styling out of the box.\nThe styling and the layout of the items is be specified by passing two properties - ",(0,o.kt)("inlineCode",{parentName:"p"},"itemClassName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"listClassName"),"."),(0,o.kt)("p",null,"Alternatively, you can use styled components and pass them as ",(0,o.kt)("inlineCode",{parentName:"p"},"components.Item")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"components.List"),"."),(0,o.kt)("p",null,"Either way, it is up to you to implement the layout with Flexbox or CSS grid. You can use plain old CSS or CSS in JS for the purpose."),(0,o.kt)("h3",{id:"responsive-layout"},"Responsive Layout"),(0,o.kt)("p",null,"You can safely use media queries, ",(0,o.kt)("inlineCode",{parentName:"p"},"min-width"),", percentages, etc. in the item layout definitions.\nThe grid observes the container/item dimensions and recalculates the scroll size accordingly. The example below uses inline styling, but you can easily put the styles in a stylesheet and change the item sizes with media queries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'import { forwardRef } from "react";\nimport { VirtuosoGrid } from "react-virtuoso";\n\n// Ensure that this stays out of the component, \n// Otherwise the grid will remount with each render due to new component instances.\nconst gridComponents = {\n  List: forwardRef(({ style, children, ...props }, ref) => (\n    <div\n      ref={ref}\n      {...props}\n      style={{\n        display: "flex",\n        flexWrap: "wrap",\n        ...style,\n      }}\n    >\n      {children}\n    </div>\n  )),\n  Item: ({ children, ...props }) => (\n    <div\n      {...props}\n      style={{\n        padding: "0.5rem",\n        width: "33%",\n        display: "flex",\n        flex: "none",\n        alignContent: "stretch",\n        boxSizing: "border-box",\n      }}\n    >\n      {children}\n    </div>\n  )\n}\n\nconst ItemWrapper = ({ children, ...props }) => (\n  <div\n    {...props}\n    style={{\n      display: "flex",\n      flex: 1,\n      textAlign: "center",\n      padding: "1rem 1rem",\n      border: "1px solid gray",\n      whiteSpace: "nowrap",\n    }}\n  >\n    {children}\n  </div>\n);\n\nexport default function App() {\n  return (\n    <>\n      <VirtuosoGrid\n        style={{ height: 500 }}\n        totalCount={1000}\n        components={gridComponents}\n        itemContent={(index) => <ItemWrapper>Item {index}</ItemWrapper>}\n      />\n      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>\n    </>\n  );\n}\n')))}y.isMDXComponent=!0}}]);