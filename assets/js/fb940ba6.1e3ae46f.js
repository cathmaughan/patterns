"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[927],{4137:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const i={version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",tags:["ai","machine-learning","role:data-scientist","size:small"]},o="Select an energy-efficient AI/ML framework",l={unversionedId:"catalog/ai/energy-efficent-framework",id:"catalog/ai/energy-efficent-framework",title:"Select an energy-efficient AI/ML framework",description:"Description",source:"@site/docs/catalog/ai/energy-efficent-framework.md",sourceDirName:"catalog/ai",slug:"/catalog/ai/energy-efficent-framework",permalink:"/catalog/ai/energy-efficent-framework",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/ai/energy-efficent-framework.md",tags:[{label:"ai",permalink:"/tags/ai"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"role:data-scientist",permalink:"/tags/role-data-scientist"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",tags:["ai","machine-learning","role:data-scientist","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Run AI models at the edge",permalink:"/catalog/ai/energy-efficent-ai-edge"},next:{title:"Evaluate and use energy-efficient AI/ML models",permalink:"/catalog/ai/energy-efficent-models"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],f={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select-an-energy-efficient-aiml-framework"},"Select an energy-efficient AI/ML framework"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Training an AI model have a significant carbon footprint.The underlying framework used for the development, training and deployment of AI/Model needs to be evaluated and considered for energy efficient AI/ML process.\nTypically, AI/ML frameworks that is build on energy-efficient languages like C/C++ offer better energy efficiency as compared to other programming languages."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Evaluate and select energy efficient framework/module for AI/ML development, training and inference. "),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"For the SCI equation, selecting an energy-efficient AI/ML would impact the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'E': Having an energy efficient framework would reduce the energy consumption for your AI/ML training and inference and consequently, the E number should decrease.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"None "),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stefanos1316.github.io/my_curriculum_vitae/GKSSZ22.pdf"},"Green AI: Do Deep Learning Frameworks Have Different Costs?"))))}u.isMDXComponent=!0}}]);