(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[675],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8364:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"faq",title:"ChiaLisp and CLVM FAQ",sidebar_label:"ChiaLisp and CLVM FAQ"},l=void 0,c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"ChiaLisp and CLVM FAQ",description:"Q: Why is my number being evaluated to (), a.k.a. nil?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/chialisp-web/zh/docs/faq",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/faq.md",version:"current",frontMatter:{id:"faq",title:"ChiaLisp and CLVM FAQ",sidebar_label:"ChiaLisp and CLVM FAQ"},sidebar:"someSidebar",previous:{title:"Spend a coin using RPC",permalink:"/chialisp-web/zh/docs/tutorials/coin_spend_rpc"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q:")," Why is my number being evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),", a.k.a. ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," In clvm (the ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," command), integers are evaluated as references to arguments in the argument tree. If no argument tree is given on the command line, the default is an empty argument tree. When an argument is not found, ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," is returned. In ChiaLisp (the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," command), integers are compiled to quoted atoms, which will give you the value you expected."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q:")," Is it possible to store data or maintain state in smart contracts?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:"),' Yes, but probably not how you are thinking. Quite deliberately the ChiaLisp environment is designed so that state is stored exclusively in coins. Remember Chia uses smart coins, not smart contracts. This leads to a different kind of design to smart contracts. A common design pattern in Chia smart coins is that they will recreate themselves with the same puzzle but with some "state" changed.'),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q:")," What is the difference between ChiaLisp, CLVM bytecode, CLVM assembly and the Conditions Language?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A:")," ChiaLisp is the higher level language which can be compiled into the lower level language called CLVM."),(0,i.kt)("p",null,"CLVM Assembly is the lower level language that ChiaLisp is compiled to."),(0,i.kt)("p",null,"CLVM Bytecode is the serialized form of CLVM Assembly."),(0,i.kt)("p",null,"When CLVM is run on the network, it can use a language called the Conditions Language to declare certain requirements be met. The conditions language is a series of statements which are evaluated all at the same time."))}m.isMDXComponent=!0}}]);