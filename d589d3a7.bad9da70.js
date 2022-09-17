(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),a=(n(0),n(161)),i={id:"getting-started",title:"Getting Started with React Virtuoso",sidebar_label:"Getting Started",slug:"/"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started with React Virtuoso",description:"React Virtuoso is a family of powerful yet easy-to-use React components that can render enormous data sets.",source:"@site/docs/getting-started.md",slug:"/",permalink:"/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Troubleshooting React Virtuoso",permalink:"/troubleshooting"}},l=[{value:"Grouping",id:"grouping",children:[]},{value:"Table",id:"table",children:[]},{value:"Grid",id:"grid",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Pinned Items",id:"pinned-items",children:[]},{value:"Scroll to Index",id:"scroll-to-index",children:[]},{value:"Customize the Scroll Container",id:"customize-the-scroll-container",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Gotchas",id:"gotchas",children:[]},{value:"Browser Support",id:"browser-support",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"React Virtuoso")," is a family of powerful yet easy-to-use React components that can render enormous data sets."),Object(a.b)("p",null,"Out of the box, Virtuoso:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Handles items with ",Object(a.b)("strong",{parentName:"li"},"variable dynamic height"),"; no manual measurements or hard-coding of item heights necessary;"),Object(a.b)("li",{parentName:"ul"},"Supports ",Object(a.b)("strong",{parentName:"li"},"grouping with sticky headers"),";"),Object(a.b)("li",{parentName:"ul"},"Supports ",Object(a.b)("strong",{parentName:"li"},"responsive grid layout"),";"),Object(a.b)("li",{parentName:"ul"},"Automatically handles content resizing;"),Object(a.b)("li",{parentName:"ul"},"Supports headers and footers."),Object(a.b)("li",{parentName:"ul"},"Can ",Object(a.b)("strong",{parentName:"li"},"pin the first ",Object(a.b)("inlineCode",{parentName:"strong"},"N")," items")," to the top of the list.")),Object(a.b)("p",null,"To start, install ",Object(a.b)("inlineCode",{parentName:"p"},"react-virtuoso")," in your React project. The package exports the ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso"),",  ",Object(a.b)("inlineCode",{parentName:"p"},"TableVirtuoso"),", ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoGrid")," components."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-virtuoso\n")),Object(a.b)("p",null,"Add the Component to your application. "),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst App = () => (\n  <Virtuoso\n    style={{ height: '400px' }}\n    totalCount={200}\n    itemContent={index => <div>Item {index}</div>}\n  />\n)\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),Object(a.b)("p",null,"Here's how it looks (live editor):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"import { Virtuoso } from 'react-virtuoso'\n\nexport default function App() {\n  return <Virtuoso\n    style={{ height: \"400px\", }}\n    totalCount={200}\n    itemContent={(index) => <div>Item {index}</div>}\n  />\n}\n")),Object(a.b)("h3",{id:"grouping"},"Grouping"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),' component is similar to the "flat" ',Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso"),", with the following differences:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instead of ",Object(a.b)("inlineCode",{parentName:"li"},"totalCount"),", the Component accepts ",Object(a.b)("inlineCode",{parentName:"li"},"groupedCounts: number[]"),", which specifies the amount of items in each group.\nFor example, passing ",Object(a.b)("inlineCode",{parentName:"li"},"[20, 30]")," will render two groups with 20 and 30 items each;"),Object(a.b)("li",{parentName:"ul"},"In addition the ",Object(a.b)("inlineCode",{parentName:"li"},"item")," render prop, the Component requires an additional ",Object(a.b)("inlineCode",{parentName:"li"},"group")," render prop,\nwhich renders the ",Object(a.b)("strong",{parentName:"li"},"group header"),". The ",Object(a.b)("inlineCode",{parentName:"li"},"group")," callback receives the zero-based group index as a parameter;"),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"item")," render prop gets called with an additional second parameter, ",Object(a.b)("inlineCode",{parentName:"li"},"groupIndex: number"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"import { GroupedVirtuoso } from 'react-virtuoso'\n\n  const groupCounts = []\n  for (let index = 0; index < 1000; index++) {\n    groupCounts.push(10)\n  }\n\nexport default function App() {\n\n  return (\n    <GroupedVirtuoso\n    style={{ height: \"400px\" }}\n      groupCounts={groupCounts}\n      groupContent={index => {\n        return (\n          <div style={{ backgroundColor: 'white' }}>\n            Group {index * 10} &ndash; {index * 10 + 10}\n          </div>\n        )\n      }}\n      itemContent={(index, groupIndex) => {\n        return (\n              <div>Item {groupIndex}.{index}</div>\n        )\n      }}\n    />\n  )\n}\n")),Object(a.b)("p",null,"Check the\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/grouped-numbers"}),"grouped numbers"),",\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/grouped-by-first-letter"}),"grouped by first letter")," and\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/grouped-with-load-on-demand"}),"groups with load on demand"),"\nexamples."),Object(a.b)("h3",{id:"table"},"Table"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"TableVirtuoso")," component works like the ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso")," one, but with HTML tables. It supports window scrolling, sticky headers, and fixed columns."),Object(a.b)("p",null,"Check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/hello-table"}),"Basic Table")," example for a sample implementation."),Object(a.b)("h3",{id:"grid"},"Grid"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",Object(a.b)("strong",{parentName:"p"},"same sized items")," in multiple columns.\nThe layout and item sizing is controlled CSS class properties or styled containers,\nwhich allows you to use media queries, min-width, percentage, etc."),Object(a.b)("p",null,"Check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/grid-responsive-columns"}),"responsive grid columns")," example for a sample implementation."),Object(a.b)("h3",{id:"footer"},"Footer"),Object(a.b)("p",null,"The Component accepts an optional\n",Object(a.b)("inlineCode",{parentName:"p"},"footer")," ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/render-props.html"}),"render property"),',\nwhich is rendered after all items.\nThe footer can be used to host a "load more" button\nor an indicator that the user has reached the end of the list.'),Object(a.b)("p",null,"Check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/footer"}),"footer"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/press-to-load-more"}),"press load more")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/endless-scrolling"}),"endless scrolling")," examples for practical applications of the footer."),Object(a.b)("h3",{id:"pinned-items"},"Pinned Items"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso")," component accepts an optional ",Object(a.b)("inlineCode",{parentName:"p"},"topItems"),' property that specifies\nhow many items must remain "pinned" at the top of the list.\nCheck the ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/top-items"}),"top items")," example."),Object(a.b)("h3",{id:"scroll-to-index"},"Scroll to Index"),Object(a.b)("p",null,"The Virtuoso components provide an imperative ",Object(a.b)("inlineCode",{parentName:"p"},"scrollToIndex")," method with an optional ",Object(a.b)("inlineCode",{parentName:"p"},"align")," that scrolls the specified item into view.\n",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso")," exports convenience callback to obtain the group item indices to scroll to a given group."),Object(a.b)("p",null,"Check the\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/scroll-to-index"}),"scroll to index")," and\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/scroll-to-group"}),"scroll to group"),"\nexamples for possible usage of the method."),Object(a.b)("h3",{id:"customize-the-scroll-container"},"Customize the Scroll Container"),Object(a.b)("p",null,"You can swap the Virtuoso scroller implementation to add custom scroll logic or to integrate a custom scrolling library (like ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/malte-wessel/react-custom-scrollbars"}),"React scrollbars"),")."),Object(a.b)("p",null,"Check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/custom-scroll-container"}),"custom scroll container")," example for a starting point."),Object(a.b)("h2",{id:"performance"},"Performance"),Object(a.b)("p",null,"Several factors affect the component's performance.\nThe first and most important one is the ",Object(a.b)("em",{parentName:"p"},"size of the visible area"),".\nRedrawing more items takes more time and reduces the frame rate.\nTo see if this affects you, reduce the component width or height;\nSet the ",Object(a.b)("inlineCode",{parentName:"p"},"style")," property to something like ",Object(a.b)("inlineCode",{parentName:"p"},"{{width: '200px'}}"),"."),Object(a.b)("p",null,"Next, if the items are complex or slow to render, use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactmemo"}),"React.memo")," for the ",Object(a.b)("inlineCode",{parentName:"p"},"itemContent")," contents."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"// Item contents are cached properly with React.memo\nconst InnerItem = React.memo(({ index }) => {\n  React.useEffect(() => {\n    console.log('inner mounting', index)\n    return () => {\n      console.log('inner unmounting', index)\n    }\n  }, [index])\n  return <div style={{ height: 30 }}>Item {index}</div>\n})\n\n// The callback is executed often - don't inline complex components in here.\nconst itemContent = (index) => {\n  console.log('providing content', index)\n  return <InnerItem index={index} />\n}\n\nconst App = () => {\n  return <Virtuoso totalCount={100} itemContent={itemContent} style={{ height: 300 }} />\n}\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),Object(a.b)("p",null,"You can experiment with the ",Object(a.b)("inlineCode",{parentName:"p"},"overscan")," property that specifies\nhow much more to render in addition to the viewport's visible height.\nFor example, if the component is ",Object(a.b)("inlineCode",{parentName:"p"},"100px")," tall, setting the ",Object(a.b)("inlineCode",{parentName:"p"},"overscan"),"\nto ",Object(a.b)("inlineCode",{parentName:"p"},"150")," will cause the list to render ",Object(a.b)("strong",{parentName:"p"},"at least")," ",Object(a.b)("inlineCode",{parentName:"p"},"250px")," of content."),Object(a.b)("p",null,"In a nutshell, increasing the ",Object(a.b)("inlineCode",{parentName:"p"},"overscan")," causes less frequent re-renders,\nbut makes each re-render more expensive (because more items will get replaced)."),Object(a.b)("p",null,"Loading images and displaying complex components while scrolling can cause jank.\nTo fix that, you can hook to the ",Object(a.b)("inlineCode",{parentName:"p"},"isScrolling")," callback and replace\nthe problematic content in the item with a simplified one.\nCheck the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/scroll-handling"}),"scroll handling example")," for a possible implementation."),Object(a.b)("h2",{id:"gotchas"},"Gotchas"),Object(a.b)("p",null,"Setting ",Object(a.b)("strong",{parentName:"p"},"CSS margins")," to the content or the item elements is the Kryptonite of Virtuoso's content measuring mechanism - the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"}),Object(a.b)("inlineCode",{parentName:"a"},"contentRect")," measurement")," does not include them."),Object(a.b)("p",null,"If this affects you, the total scroll height will be miscalculated, and the user won't be able to scroll all the way down to the list."),Object(a.b)("p",null,"To avoid that, if you are putting paragraphs and headings inside the ",Object(a.b)("inlineCode",{parentName:"p"},"item"),", make sure that the top/bottom elements' margins do not protrude outside of the item container."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<Virtuoso\n  totalCount={100}\n  item={index => (\n    <div>\n      <p style={{ margin: 0 }}>Item {index}</p>\n    </div>\n  )}\n/>\n")),Object(a.b)("p",null,"A few more common problems are present in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/troubleshooting"}),"troubleshooting section"),"."),Object(a.b)("h2",{id:"browser-support"},"Browser Support"),Object(a.b)("p",null,"Virtuoso uses ",Object(a.b)("inlineCode",{parentName:"p"},"position: sticky")," to keep the virtual viewport at the top of the scroller when in grouped mode. ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://caniuse.com/#feat=css-sticky"}),"This does not work in IE 11"),"."))}s.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=o,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||a;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);