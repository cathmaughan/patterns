"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[727],{4137:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8158:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=i(7462),n=(i(7294),i(4137));const a={version:1,submitted_by:"dubrie",published_date:"TBD",category:"cloud",tags:["compute","monitoring","role:cloud-engineer","role:software-engineer","role:reliability-engineer","size:medium"]},o="Optimize peak CPU utilization",l={unversionedId:"catalog/cloud/optimize-peak-cpu-utilization",id:"catalog/cloud/optimize-peak-cpu-utilization",title:"Optimize peak CPU utilization",description:"Description",source:"@site/docs/catalog/cloud/optimize-peak-cpu-utilization.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/optimize-peak-cpu-utilization",permalink:"/catalog/cloud/optimize-peak-cpu-utilization",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/optimize-peak-cpu-utilization.md",tags:[{label:"compute",permalink:"/tags/compute"},{label:"monitoring",permalink:"/tags/monitoring"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"role:reliability-engineer",permalink:"/tags/role-reliability-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"dubrie",published_date:"TBD",category:"cloud",tags:["compute","monitoring","role:cloud-engineer","role:software-engineer","role:reliability-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Optimize average CPU utilization",permalink:"/catalog/cloud/optimize-avg-cpu-utilization"},next:{title:"Queue non-urgent processing requests",permalink:"/catalog/cloud/queue-non-urgent-requests"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"optimize-peak-cpu-utilization"},"Optimize peak CPU utilization"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"CPU usage and utilization varies throughout the day, sometimes wildly for different computational requirements. The larger the variance between the average and peak CPU utilization values, the more resources need to be provisioned in stand-by mode to absorb those spikes in traffic. "),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Optimizing peak CPU utilization can take many different forms but the key is to understand the processes utilizing your CPU and what actions drive increases and decreases. For example, loading a user's full profile could potentially require dozens of database queries, data processing threads and UI rendering that can drive CPU usage up. Adding caching layers, reducing the amount of data being transmitted and rendered, or queuing non-urgent requests up for later processing are good examples of ways to optimize CPU utilization and flatten out some of the spikes your system may see.  "),(0,n.kt)("p",null,"From an energy efficiency perspective, optimizing and reducing the peak CPU utilization values for your system reduces the overall energy required to support traffic and can make your system hardware requirements more predictable overall. "),(0,n.kt)("p",null,"From a hardware efficiency perspective, optimizing and reducing the peak CPU utilization values for your system reduces the amount of resources needed to support traffic. If the traffic in your system spikes quickly, that typically requires resources to be on stand-by and under utilized. This pattern would reduce the amount of resources required to support traffic. "),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,n.kt)("p",null,"Optimizing peak CPU utilization impacts SCI as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": Reduced peak CPU utilization will reduce the amount of energy needed to support the systems traffic from the reduced CPU requirements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": Reduced peak CPU utilization will reduce the amount of resources needed which will decrease the amount of embodied carbon required to support the system.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is an assumption that traffic is expected to fluctuate during normal production usage because of external natural changes in how users consume. If there are other reasons for the CPU utilization spikes caused by the system itself, these should be addressed separately. ")),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is no optimal CPU utilization value provided in this pattern, that should be determined from the system and its specific requirements."),(0,n.kt)("li",{parentName:"ul"},"Reducing spikes in CPU utilization could be achieved by adding more hardware to better load balance. The software practioner should try to find efficiencies within the system that don't involve introducing more hardware and therefore additional embodied carbon.")),(0,n.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);