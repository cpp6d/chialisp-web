(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[57],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3954:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],l={id:"Chialisp",title:"Chialisp"},s="Chialisp",c={type:"mdx",permalink:"/chialisp-web/zh/",source:"@site/i18n/zh/docusaurus-plugin-content-pages/index.md"},p=[{value:"Why Lisp?",id:"why-lisp",children:[]},{value:"Coloured Coins",id:"coloured-coins",children:[]},{value:"Singletons",id:"singletons",children:[]},{value:"DeFi",id:"defi",children:[]},{value:"Introductory Material",id:"introductory-material",children:[]},{value:"Developer Documentation",id:"developer-documentation",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chialisp"},"Chialisp"),(0,i.kt)("p",null,"Chialisp \u662f\u4e00\u79cd\u529f\u80fd\u5f3a\u5927\u4e14\u5b89\u5168\u7684 LISP \u7c7b\u8bed\u8a00\uff0c\u7528\u4e8e\u901a\u8fc7\u667a\u80fd\u5408\u7ea6\u529f\u80fd\u6765\u9650\u5236\u548c\u91ca\u653e\u8d44\u91d1\u3002 \u8be5\u7f51\u7ad9\u662f\u4e86\u89e3 Chialisp\u3001CLVM \u548c\u6761\u4ef6\u8bed\u8a00\u7684\u7efc\u5408\u573a\u6240\u3002"),(0,i.kt)("p",null,"Here's a sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (if (= (sha256 password) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824))\n    (list (list CREATE_COIN new_puzhash amount))\n    (x)\n  )\n)\n")),(0,i.kt)("h2",{id:"why-lisp"},"Why Lisp?"),(0,i.kt)("p",null,"Many people come into our keybase channel and ask us why we chose a 60 year old language as our on chain programming language. We chose it due to a few unique features that make it remarkably well suited to the Chia blockchain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Completely sandboxed.")," Chialisp resource utilization is completely controlled.  The language needs to be run on half a million computers, so it is important that the program cannot reach out and affect everyone's machines in an unintended way.  A lisp program is ",(0,i.kt)("em",{parentName:"p"},"evaluated")," and therefore cannot spawn any new processes or interact with the system it is running on.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Composability."),' A lisp program is itself just a list.  This feature allows for powerful techniques that allow you to modify source code during program evaluation.  Doing so can allow a "smart contract" to enforce rules on a participating coin while still allowing it to utilize the full programmability that Chialisp has to offer.  Using lisp programs like this allows you to have ',(0,i.kt)("em",{parentName:"p"},"layers of smart contracts"),' in which the output of an "inner" contract can be used in the evaluation of the "outer" contract.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Interoperability.")," Every contract in the Chia ecosystem, no matter how complex, is fundamentally a coin that is locked up with a Chialisp puzzle. The input to any puzzle will always be a lisp data structure, and the output will always be a list of ",(0,i.kt)("strong",{parentName:"p"},"conditions")," that all puzzles share. This means that everything in Chia interoperates with everything else.  Any smart contract should be able to interact or communicate with any other coin or smart contract, regardless of whether either smart contract was specifically designed to do so."))),(0,i.kt)("h2",{id:"coloured-coins"},"Coloured Coins"),(0,i.kt)("p",null,"The first Chialisp smart transaction that we integrated into chia-blockchain were Coloured Coins. Coloured coins allow you to create tokens on the Chia blockchain that are entirely controlled by you.  This allows you to issue assets on the Chia blockchain that cannot be created or destroyed by others without your permission.  This can be used for stable coins, stock issuance, voting shares, or anything else you can think of.  Check out our ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YOlpmCBK8zY"},"Non Technical Overview and Guide.")),(0,i.kt)("h2",{id:"singletons"},"Singletons"),(0,i.kt)("p",null,"Another fascinating application of Chialisp is the creation of ",(0,i.kt)("strong",{parentName:"p"},"singletons"),".  Singletons are a type of coin that there is verifiably only one of.  When you can verify that there is only one of a coin, you can enable some interesting functionality.  The Chia Network pooling protocol uses this to verify that you have committed your plots to a pool and have not promised them to any other pool.  You can also make NFTs, decentralized identities, and anything else that could make use of a unique coin."),(0,i.kt)("h2",{id:"defi"},"DeFi"),(0,i.kt)("p",null,"Chialisp is also capable of any of the popularly available decentralized finance tools you find on other blockchains today.  One feature that enables this is the fact that coins can communicate with each other when they are spent.  You can have market makers announce prices and have other coins utilize those prices in their own logic when they are spent.  The natural interoperability that Chialisp provides is also relevant because it will allow participants to layer and leverage many different DeFi tools all at once!"),(0,i.kt)("h2",{id:"introductory-material"},"Introductory Material"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The introductory post on ",(0,i.kt)("a",{parentName:"li",href:"https://www.chia.net/2019/11/27/chialisp.en.html"},"Chialisp")),(0,i.kt)("li",{parentName:"ul"},"Introduction to our ",(0,i.kt)("a",{parentName:"li",href:"https://www.chia.net/2020/04/29/coloured-coins-launch.en.html"},"MVP of Coloured coins")),(0,i.kt)("li",{parentName:"ul"},"A Vision for ",(0,i.kt)("a",{parentName:"li",href:"https://www.chia.net/2021/07/13/a-vision-for-defi-in-chia.en.html"},"DeFi in Chia"))),(0,i.kt)("h2",{id:"developer-documentation"},"Developer Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/clvm"},"ChiaLisp Compiler Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=dEFLJSU87K8"},"A video introduction to developing in Chialisp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools for developing in Chialisp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/"},"CLVM Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/glossary/"},"Glossary of Chialisp terms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ref/clvm/"},"Lower Level Language Reference Document"))))}h.isMDXComponent=!0}}]);