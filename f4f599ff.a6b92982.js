(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),i=(n(0),n(190)),a={id:"_interfaces_.groupedscrollintoviewlocation",title:"Interface: GroupedScrollIntoViewLocation",sidebar_label:"GroupedScrollIntoViewLocation"},c={unversionedId:"api/interfaces/_interfaces_.groupedscrollintoviewlocation",id:"api/interfaces/_interfaces_.groupedscrollintoviewlocation",isDocsHomePage:!1,title:"Interface: GroupedScrollIntoViewLocation",description:'"interfaces".GroupedScrollIntoViewLocation',source:"@site/docs/api/interfaces/_interfaces_.groupedscrollintoviewlocation.md",slug:"/api/interfaces/_interfaces_.groupedscrollintoviewlocation",permalink:"/api/interfaces/_interfaces_.groupedscrollintoviewlocation",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.groupedscrollintoviewlocation.md",version:"current",sidebar_label:"GroupedScrollIntoViewLocation",sidebar:"someSidebar",previous:{title:"Interface: GroupItemContent<D, C>",permalink:"/api/interfaces/_interfaces_.groupitemcontent"},next:{title:"Interface: Item<D>",permalink:"/api/interfaces/_interfaces_.item"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"align",id:"align",children:[]},{value:"behavior",id:"behavior",children:[]},{value:"calculateViewLocation",id:"calculateviewlocation",children:[]},{value:"done",id:"done",children:[]},{value:"groupIndex",id:"groupindex",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".GroupedScrollIntoViewLocation"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions"}),"ScrollIntoViewLocationOptions")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"GroupedScrollIntoViewLocation")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"align"},"align"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"align"),": ",'"',"start",'"'," ","|"," ",'"',"center",'"'," ","|"," ",'"',"end",'"'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions"}),"ScrollIntoViewLocationOptions"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions#align"}),"align"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/fd6c048/src/interfaces.ts#L351"}),"interfaces.ts:351"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"behavior"},"behavior"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"behavior"),": ",'"',"auto",'"'," ","|"," ",'"',"smooth",'"'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions"}),"ScrollIntoViewLocationOptions"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions#behavior"}),"behavior"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/fd6c048/src/interfaces.ts#L352"}),"interfaces.ts:352"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"calculateviewlocation"},"calculateViewLocation"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"calculateViewLocation"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#calculateviewlocation"}),"CalculateViewLocation")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions"}),"ScrollIntoViewLocationOptions"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions#calculateviewlocation"}),"calculateViewLocation"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/fd6c048/src/interfaces.ts#L380"}),"interfaces.ts:380"))),Object(i.b)("p",null,"Use this function to fine-tune the scrollIntoView behavior.\nThe function receives the item's top and bottom position in the viewport, and the viewport top/bottom.\nReturn an location object to scroll, or null to prevent scrolling.\nHere's the default implementation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const defaultCalculateViewLocation: CalculateViewLocation = ({\nitemTop,\nitemBottom,\nviewportTop,\nviewportBottom,\nlocationParams: { behavior, align, ...rest },\n}) => {\nif (itemTop < viewportTop) {\nreturn { ...rest, behavior, align: align ?? 'start' }\n}\nif (itemBottom > viewportBottom) {\nreturn { ...rest, behavior, align: align ?? 'end' }\n}\nreturn null\n}\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"done"},"done"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"done"),": () => void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions"}),"ScrollIntoViewLocationOptions"),".",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/api/interfaces/_interfaces_.scrollintoviewlocationoptions#done"}),"done"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/fd6c048/src/interfaces.ts#L356"}),"interfaces.ts:356"))),Object(i.b)("p",null,"Will be called when the scroll is done, or immediately if no scroll is needed."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"groupindex"},"groupIndex"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"groupIndex"),": number"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/fd6c048/src/interfaces.ts#L388"}),"interfaces.ts:388"))))}b.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,m=s["".concat(a,".").concat(f)]||s[f]||u[f]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);