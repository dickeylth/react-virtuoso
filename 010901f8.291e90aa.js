(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return l}));var o=t(0),c=t.n(o);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function y(n,e){if(null==n)return{};var t,o,c=function(n,e){if(null==n)return{};var t,o,c={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var i=c.a.createContext({}),S=function(n){var e=c.a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):m(m({},e),n)),t},a=function(n){var e=S(n.components);return c.a.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return c.a.createElement(c.a.Fragment,{},e)}},r=c.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,s=n.originalType,u=n.parentName,i=y(n,["components","mdxType","originalType","parentName"]),a=S(t),r=o,l=a["".concat(u,".").concat(r)]||a[r]||p[r]||s;return t?c.a.createElement(l,m(m({ref:e},i),{},{components:t})):c.a.createElement(l,m({ref:e},i))}));function l(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=t.length,u=new Array(s);u[0]=r;var m={};for(var y in e)hasOwnProperty.call(e,y)&&(m[y]=e[y]);m.originalType=n,m.mdxType="string"==typeof n?n:o,u[1]=m;for(var i=2;i<s;i++)u[i]=t[i];return c.a.createElement.apply(null,u)}return c.a.createElement.apply(null,t)}r.displayName="MDXCreateElement"},64:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return u})),t.d(e,"metadata",(function(){return m})),t.d(e,"rightToc",(function(){return y})),t.d(e,"default",(function(){return S}));var o=t(2),c=t(6),s=(t(0),t(156)),u={id:"_table_",title:"Module: Table",sidebar_label:"Table"},m={unversionedId:"api/modules/_table_",id:"api/modules/_table_",isDocsHomePage:!1,title:"Module: Table",description:"Index",source:"@site/docs/api/modules/_table_.md",slug:"/api/modules/_table_",permalink:"/api/modules/_table_",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/modules/_table_.md",version:"current",sidebar_label:"Table"},y=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"Items",id:"items",children:[]},{value:"Table",id:"table",children:[]},{value:"useEmitter",id:"useemitter",children:[]},{value:"useEmitterValue",id:"useemittervalue",children:[]},{value:"usePublisher",id:"usepublisher",children:[]}]}],i={rightToc:y};function S(n){var e=n.components,t=Object(c.a)(n,["components"]);return Object(s.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"index"},"Index"),Object(s.b)("h3",{id:"interfaces"},"Interfaces"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/interfaces/_table_.hooks"}),"Hooks"))),Object(s.b)("h3",{id:"variables"},"Variables"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/modules/_table_#items"}),"Items")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/modules/_table_#table"}),"Table")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/modules/_table_#useemitter"}),"useEmitter")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/modules/_table_#useemittervalue"}),"useEmitterValue")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"/api/modules/_table_#usepublisher"}),"usePublisher"))),Object(s.b)("h2",{id:"variables-1"},"Variables"),Object(s.b)("h3",{id:"items"},"Items"),Object(s.b)("p",null,"\u2022 ",Object(s.b)("inlineCode",{parentName:"p"},"Const")," ",Object(s.b)("strong",{parentName:"p"},"Items"),": NamedExoticComponent","<","object> = React.memo(function VirtuosoItems() { const listState = useEmitterValue('listState') const ","[deviation, setDeviation]"," = React.useState(0) const react18ConcurrentRendering = useEmitterValue('react18ConcurrentRendering') useEmitter('deviation', (value) => { if (deviation !== value) { conditionalFlushSync(react18ConcurrentRendering)(() => setDeviation(value)) } }) const sizeRanges = usePublisher('sizeRanges') const useWindowScroll = useEmitterValue('useWindowScroll') const customScrollParent = useEmitterValue('customScrollParent') const windowScrollContainerStateCallback = usePublisher('windowScrollContainerState') const ","_","scrollContainerStateCallback = usePublisher('scrollContainerState') const scrollContainerStateCallback = customScrollParent ","|","|"," useWindowScroll ? windowScrollContainerStateCallback : ","_","scrollContainerStateCallback const itemContent = useEmitterValue('itemContent') const trackItemSizes = useEmitterValue('trackItemSizes') const itemSize = useEmitterValue('itemSize') const log = useEmitterValue('log') const ref = useChangedListContentsSizes(sizeRanges, itemSize, trackItemSizes, scrollContainerStateCallback, log, customScrollParent) const EmptyPlaceholder = useEmitterValue('EmptyPlaceholder') const ScrollSeekPlaceholder = useEmitterValue('ScrollSeekPlaceholder') ","|","|"," DefaultScrollSeekPlaceholder const FillerRow = useEmitterValue('FillerRow') ","|","|"," DefaultFillerRow const TableBodyComponent = useEmitterValue('TableBodyComponent')! const TableRowComponent = useEmitterValue('TableRowComponent')! const computeItemKey = useEmitterValue('computeItemKey') const isSeeking = useEmitterValue('isSeeking') const paddingTopAddition = useEmitterValue('paddingTopAddition') const firstItemIndex = useEmitterValue('firstItemIndex') const statefulTotalCount = useEmitterValue('statefulTotalCount') const context = useEmitterValue('context') if (statefulTotalCount === 0 && EmptyPlaceholder) { return createElement(EmptyPlaceholder, contextPropIfNotDomElement(EmptyPlaceholder, context)) } const paddingTop = listState.offsetTop + paddingTopAddition + deviation const paddingBottom = listState.offsetBottom const paddingTopEl = paddingTop > 0 ? ","<",'FillerRow height={paddingTop} key="padding-top" /> : null const paddingBottomEl = paddingBottom > 0 ? ',"<",'FillerRow height={paddingBottom} key="padding-bottom" /> : null const items = listState.items.map((item) => { const index = item.originalIndex! const key = computeItemKey(index + firstItemIndex, item.data, context) if (isSeeking) { return createElement(ScrollSeekPlaceholder, { ...contextPropIfNotDomElement(ScrollSeekPlaceholder, context), key, index: item.index, height: item.size, type: item.type ',"|","|"," 'item', }) } return createElement( TableRowComponent, { ...contextPropIfNotDomElement(TableRowComponent, context), key, 'data-index': index, 'data-known-size': item.size, 'data-item-index': item.index, style: { overflowAnchor: 'none' }, } as any, itemContent(item.index, item.data, context) ) }) return createElement( TableBodyComponent, { ref, 'data-test-id': 'virtuoso-item-list', ...contextPropIfNotDomElement(TableBodyComponent, context) }, ","[paddingTopEl, ...items, paddingBottomEl]"," )})"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/d52b11d/src/Table.tsx#L70"}),"src/Table.tsx:70"))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"table"},"Table"),Object(s.b)("p",null,"\u2022  ",Object(s.b)("strong",{parentName:"p"},"Table"),": ForwardRefExoticComponent","<","{} & {} & {} & ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tablerootprops"}),"TableRootProps")," & RefAttributes","<","MethodsFromPropMap","<","SystemSpec","<","[SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","[SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","any[], (Anonymous function)>], (Anonymous function)>, SystemSpec","<","SystemSpecs, (Anonymous function)>], (Anonymous function)>, { required: {} ; events: { atBottomStateChange: ",'"',"atBottomStateChange",'"',' = "atBottomStateChange"; atTopStateChange: ','"',"atTopStateChange",'"',' = "atTopStateChange"; endReached: ','"',"endReached",'"',' = "endReached"; groupIndices: ','"',"groupIndices",'"',' = "groupIndices"; isScrolling: ','"',"isScrolling",'"',' = "isScrolling"; itemsRendered: ','"',"itemsRendered",'"',' = "itemsRendered"; rangeChanged: ','"',"rangeChanged",'"',' = "rangeChanged"; startReached: ','"',"startReached",'"',' = "startReached"; totalListHeightChanged: ','"',"totalListHeightChanged",'"',' = "totalListHeightChanged" } ; methods: { scrollBy: ','"',"scrollBy",'"',' = "scrollBy"; scrollIntoView: ','"',"scrollIntoView",'"',' = "scrollIntoView"; scrollTo: ','"',"scrollTo",'"',' = "scrollTo"; scrollToIndex: ','"',"scrollToIndex",'"',' = "scrollToIndex" } ; optional: { alignToBottom: ','"',"alignToBottom",'"',' = "alignToBottom"; atBottomThreshold: ','"',"atBottomThreshold",'"',' = "atBottomThreshold"; components: ','"',"components",'"',' = "components"; computeItemKey: ','"',"computeItemKey",'"',' = "computeItemKey"; context: ','"',"context",'"',' = "context"; customScrollParent: ','"',"customScrollParent",'"',' = "customScrollParent"; data: ','"',"data",'"',' = "data"; defaultItemHeight: ','"',"defaultItemHeight",'"',' = "defaultItemHeight"; firstItemIndex: ','"',"firstItemIndex",'"',' = "firstItemIndex"; fixedHeaderContent: ','"',"fixedHeaderContent",'"',' = "fixedHeaderContent"; fixedItemHeight: ','"',"fixedItemHeight",'"',' = "fixedItemHeight"; followOutput: ','"',"followOutput",'"',' = "followOutput"; groupCounts: ','"',"groupCounts",'"',' = "groupCounts"; increaseViewportBy: ','"',"increaseViewportBy",'"',' = "increaseViewportBy"; initialItemCount: ','"',"initialItemCount",'"',' = "initialItemCount"; initialScrollTop: ','"',"initialScrollTop",'"',' = "initialScrollTop"; initialTopMostItemIndex: ','"',"initialTopMostItemIndex",'"',' = "initialTopMostItemIndex"; itemContent: ','"',"itemContent",'"',' = "itemContent"; itemSize: ','"',"itemSize",'"',' = "itemSize"; logLevel: ','"',"logLevel",'"',' = "logLevel"; overscan: ','"',"overscan",'"',' = "overscan"; react18ConcurrentRendering: ','"',"react18ConcurrentRendering",'"',' = "react18ConcurrentRendering"; scrollSeekConfiguration: ','"',"scrollSeekConfiguration",'"',' = "scrollSeekConfiguration"; scrollerRef: ','"',"scrollerRef",'"',' = "scrollerRef"; topItemCount: ','"',"topItemCount",'"',' = "topItemCount"; totalCount: ','"',"totalCount",'"',' = "totalCount"; useWindowScroll: ','"',"useWindowScroll",'"',' = "useWindowScroll" }  }>>>'),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/d52b11d/src/Table.tsx#L216"}),"src/Table.tsx:216"))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"useemitter"},"useEmitter"),Object(s.b)("p",null,"\u2022  ",Object(s.b)("strong",{parentName:"p"},"useEmitter"),": ","<","K_5, V_1>(key: K","_","5, callback: (value: V","_","1) => void) => void"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/d52b11d/src/Table.tsx#L219"}),"src/Table.tsx:219"))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"useemittervalue"},"useEmitterValue"),Object(s.b)("p",null,"\u2022  ",Object(s.b)("strong",{parentName:"p"},"useEmitterValue"),": ","<","K_4, V>(key: K","_","4) => V"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/d52b11d/src/Table.tsx#L218"}),"src/Table.tsx:218"))),Object(s.b)("hr",null),Object(s.b)("h3",{id:"usepublisher"},"usePublisher"),Object(s.b)("p",null,"\u2022  ",Object(s.b)("strong",{parentName:"p"},"usePublisher"),": ","<","K_3>(key: K","_","3) => (value: S","[K","_","3]"," ",Object(s.b)("em",{parentName:"p"},"extends")," Stream","<",Object(s.b)("em",{parentName:"p"},"infer")," R","_","4> ? R","_","4 : never) => void"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/d52b11d/src/Table.tsx#L217"}),"src/Table.tsx:217"))))}S.isMDXComponent=!0}}]);