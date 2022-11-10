"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[8725],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(4137));const i={version:1,submitted_by:"greenhsu123",published_date:"tbd",category:"cloud",description:"From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment.",tags:["networking","role:cloud-engineer","size:small"]},o="Cache static data",c={unversionedId:"catalog/cloud/cache-static-data",id:"catalog/cloud/cache-static-data",title:"Cache static data",description:"From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment.",source:"@site/docs/catalog/cloud/cache-static-data.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/cache-static-data",permalink:"/catalog/cloud/cache-static-data",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/cache-static-data.md",tags:[{label:"networking",permalink:"/tags/networking"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"greenhsu123",published_date:"tbd",category:"cloud",description:"From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment.",tags:["networking","role:cloud-engineer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Cloud",permalink:"/catalog/cloud/"},next:{title:"Choose the region that is closest to users",permalink:"/catalog/cloud/choose-region-closest-to-users"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u=(d="PatternComponent",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const p={toc:l};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cache-static-data"},"Cache static data"),(0,n.kt)(u,{mdxType:"PatternComponent"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"From an energy-efficiency perspective, it's better to reduce network traffic by reading the data locally through a cache rather than accessing it remotely over the network. "),(0,n.kt)("p",null,"Shortening the distance a network packet travels means that less energy is required to transmit it. Similarly, from an embodied carbon perspective, we are more efficient with hardware when a network packet traverses through less computing equipment. "),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Caching static data, such as images or audio, instead of transferring it over the network. "),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,n.kt)("p",null,"Reducing the distance travelled will impact SCI as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": By reducing the distance a packet travels, less total electricity is required. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total amount of computing equipment traversed, the total embodied carbon is lower.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"Suppose we transfer all the data of an application across the network as often as needed because some of the data may require a regular update. A better solution would be to consider a caching mechanism for static data that doesn't require frequent updates. This will reduce network traffic because we are doing local readings of the static data. "),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It may reduce cloud bills because shortening the path that a network packet travels will cost less. "),(0,n.kt)("li",{parentName:"ul"},"If data is not static anymore, there is more overhead to re-architect the application to deal with the new data requirement."),(0,n.kt)("li",{parentName:"ul"},"It is assumed that a local in-memory cache of the server(s) is used to implement this pattern. If any external cache infrastructure is leveraged, then SCI score may not reduce considerably as we have to account for the E and M values of the external infrastructure in the equation. ")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/hardware-efficiency"},"Hardware Efficiency Principle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/energy-efficiency"},"Energy Efficiency Principle"))))}h.isMDXComponent=!0}}]);