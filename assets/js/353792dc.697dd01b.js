"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[3070],{7942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(959);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(5882),i=n(950),a=(n(959),n(7942)),o=["components"],s={id:"react-beautiful-dnd",title:"React Beautiful DND",sidebar_label:"React Beautiful DND",slug:"/react-beautiful-dnd/"},d=void 0,l={unversionedId:"scenarios/react-beautiful-dnd",id:"scenarios/react-beautiful-dnd",title:"React Beautiful DND",description:"The example below integrates React Virtuoso with the maintained fork of React Beautiful DND, hello-pangea/dnd.",source:"@site/docs/scenarios/react-beautiful-dnd.md",sourceDirName:"scenarios",slug:"/react-beautiful-dnd/",permalink:"/react-beautiful-dnd/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/scenarios/react-beautiful-dnd.md",tags:[],version:"current",frontMatter:{id:"react-beautiful-dnd",title:"React Beautiful DND",sidebar_label:"React Beautiful DND",slug:"/react-beautiful-dnd/"},sidebar:"defaultSidebar",previous:{title:"RB DND + Window Scroller",permalink:"/react-beautiful-dnd-window-scroller/"},next:{title:"React Sortable HOC",permalink:"/react-sortable-hoc/"}},c={},u=[],p={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The example below integrates React Virtuoso with the maintained fork of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/atlassian/react-beautiful-dnd"},"React Beautiful DND"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hello-pangea/dnd"},"hello-pangea/dnd"),".\nThe example works with Beautiful DND too, but causes warnings with StrictMode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live import=react-beautiful-dnd",live:!0,import:"react-beautiful-dnd"},'import React, { useEffect, useState } from "react";\nimport ReactDOM from "react-dom";\nimport { Virtuoso } from "react-virtuoso";\n// Works with react-beautiful-dnd, too, but causes issues with StrictMode\nimport { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";\n\n// Virtuoso\'s resize observer can this error,\n// which is caught by DnD and aborts dragging.\nwindow.addEventListener("error", (e) => {\n  if (\n    e.message ===\n      "ResizeObserver loop completed with undelivered notifications." ||\n    e.message === "ResizeObserver loop limit exceeded"\n  ) {\n    e.stopImmediatePropagation();\n  }\n});\n\n// Generate our initial big data set\nconst initial = Array.from({ length: 1000 }, (_, k) => ({\n  id: `id:${k}`,\n  text: `item ${k}`\n}));\n\nfunction reorder(list, startIndex, endIndex) {\n  const result = Array.from(list);\n  const [removed] = result.splice(startIndex, 1);\n  result.splice(endIndex, 0, removed);\n\n  return result;\n}\n\nfunction Item({ provided, item, isDragging }) {\n  return (\n    <div style={{ paddingBottom: "8px" }}>\n      <div\n        {...provided.draggableProps}\n        {...provided.dragHandleProps}\n        ref={provided.innerRef}\n        style={provided.draggableProps.style}\n        className={`item ${isDragging ? "is-dragging" : ""}`}\n      >\n        {item.text}\n      </div>\n    </div>\n  );\n}\n\nexport default function App() {\n  const [items, setItems] = useState(initial)\n\n  const onDragEnd = React.useCallback(\n    (result) => {\n      if (!result.destination) {\n        return\n      }\n      if (result.source.index === result.destination.index) {\n        return\n      }\n\n      // void setItems\n      setItems((items) => reorder(items, result.source.index, result.destination.index))\n    },\n    [setItems]\n  )\n\n  const HeightPreservingItem = React.useCallback(({ children, ...props }) => {\n    const [size, setSize] = useState(0);\n    const knownSize = props["data-known-size"];\n    useEffect(() => {\n      setSize((prevSize) => {\n        return knownSize == 0 ? prevSize : knownSize;\n      });\n    }, [knownSize]);\n    return (\n      <div\n        {...props}\n        className="height-preserving-container"\n        style={{\n          "--child-height": `${size}px`\n        }}\n      >\n        {children}\n      </div>\n    );\n  }, []);\n\n  return (\n    <div style={{ padding: \'1rem\' }}>\n      <style>\n      {`\n      .height-preserving-container:empty {\n        min-height: calc(var(--child-height));\n        box-sizing: border-box;\n        }\n    `}\n        </style>\n        <DragDropContext onDragEnd={onDragEnd}>\n          <Droppable\n            droppableId="droppable"\n            mode="virtual"\n            renderClone={(provided, snapshot, rubric) => (\n              <Item provided={provided} isDragging={snapshot.isDragging} item={items[rubric.source.index]} />\n            )}\n          >\n          {(provided) => {\n            return (\n              <Virtuoso\n                components={{\n                  Item: HeightPreservingItem\n                }}\n                scrollerRef={provided.innerRef}\n                data={items}\n                style={{ width: 300, height: 500 }}\n                itemContent={(index, item) => {\n                  return (\n                    <Draggable draggableId={item.id} index={index} key={item.id} >\n                      {(provided) => ( <Item provided={provided} item={item} isDragging={false} />)}\n                    </Draggable>\n                  );\n                }}\n              />\n            );\n          }}\n        </Droppable>\n      </DragDropContext>\n    </div>\n  );\n}\n')))}f.isMDXComponent=!0}}]);