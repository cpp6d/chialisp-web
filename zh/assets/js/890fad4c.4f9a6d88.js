(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[493],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"deeper_into_clvm",title:"3 - Deeper into CLVM"},s=void 0,u={unversionedId:"deeper_into_clvm",id:"deeper_into_clvm",isDocsHomePage:!1,title:"3 - Deeper into CLVM",description:"This guide assumes knowledge of the basics of CLVM so if you haven't read that, please do so before reading this.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deeper_into_clvm.md",sourceDirName:".",slug:"/deeper_into_clvm",permalink:"/chialisp-web/zh/docs/deeper_into_clvm",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/deeper_into_clvm.md",version:"current",frontMatter:{id:"deeper_into_clvm",title:"3 - Deeper into CLVM"},sidebar:"someSidebar",previous:{title:"2 - Coins, Spends and Wallets",permalink:"/chialisp-web/zh/docs/coins_spends_and_wallets"},next:{title:"4 - The High Level Language, Compiler, and Functions",permalink:"/chialisp-web/zh/docs/high_level_lang"}},p=[{value:"Lazy Evaluation in ChiaLisp",id:"lazy-evaluation-in-chialisp",children:[]},{value:"Introduction to Evaluate",id:"introduction-to-evaluate",children:[]},{value:"Programs as Parameters",id:"programs-as-parameters",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide assumes knowledge of ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"the basics of CLVM")," so if you haven't read that, please do so before reading this."),(0,o.kt)("p",null,"This section of the guide will cover how ChiaLisp relates to transactions and coins on the Chia network. If there are any terms that you aren't sure of, be sure to check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary"},"glossary"),"."),(0,o.kt)("h2",{id:"lazy-evaluation-in-chialisp"},"Lazy Evaluation in ChiaLisp"),(0,o.kt)("p",null,"As we've seen in earlier sections, programs are often structured around ",(0,o.kt)("inlineCode",{parentName:"p"},"(i A B C)")," to control flow. ChiaLisp evaluates programs as trees, where the leaves are evaluated first. This can cause unexpected problems if you are not aware of it. Consider the following program which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," which immediately halts and throws an error if it is evaluated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(i (q . 1) (q . 100) (x (q . \"still being evaluated\")))'\nFAIL: clvm raise (0x7374696c6c206265696e67206576616c7561746564)\n")),(0,o.kt)("p",null,"This is because ChiaLisp evaluates both of the leaves even though it will only follow the path of one."),(0,o.kt)("p",null,"To get around this we can use the following design pattern to replace (i A B C)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"(a (i (A) (q . B) (q . C)) 1)\n")),(0,o.kt)("p",null,"Applying this to our above example looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a (i (q . 1) (q . (q . 100)) (q . (x (q . \"still being evaluated\")))) 1)'\n100\n")),(0,o.kt)("p",null,"It is worth keeping this in mind whenever you write an ",(0,o.kt)("inlineCode",{parentName:"p"},"(i A B C)"),"."),(0,o.kt)("p",null,"If you're wondering how this works (and how the ",(0,o.kt)("a",{parentName:"p",href:"/docs/coins_spends_and_wallets#example-signature-locked-coin"},"signature locked coin")," from before worked), then allow me to introduce Evaluate."),(0,o.kt)("h2",{id:"introduction-to-evaluate"},"Introduction to Evaluate"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"the introduction to CLVM")," we mentioned that a program is usually a list where the first element is an operator, and every subsequent element is a valid program. We can also run programs with new arguments inside a program."),(0,o.kt)("p",null,"This looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"(a *puzzle* *solution*)\n")),(0,o.kt)("p",null,"Let's put this into practice."),(0,o.kt)("p",null,"Here is a program that evaluates the program ",(0,o.kt)("inlineCode",{parentName:"p"},"(+ 2 (q . 5)))")," and uses the list ",(0,o.kt)("inlineCode",{parentName:"p"},"(70 80 90)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"(80 90 100)")," as the solution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a (q . (+ 2 (q . 5))) (q . (70 80 90)))' '(20 30 40)'\n75\n\n$ brun '(a (q . (+ 2 (q . 5))) (q . (80 90 100)))' '(20 30 40)'\n85\n")),(0,o.kt)("p",null,"Notice how the original solution ",(0,o.kt)("inlineCode",{parentName:"p"},"(20 30 40)")," does not matter for the new evaluation environment. In this example we use ",(0,o.kt)("inlineCode",{parentName:"p"},"q .")," to quote both the new puzzle and the new solution to prevent them from being prematurely evaluated."),(0,o.kt)("p",null,"A neat trick that we can pull is that we can define the new solution in terms of the outer solution. In this next example we will add the first element of the old solution to our new solution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a (q . (+ 2 (q . 5))) (c 2 (q . (70 80 90))))' '(20 30 40)'\n25\n")),(0,o.kt)("p",null,"However it's not just the new solution that we can affect using this, we can also pass programs as parameters."),(0,o.kt)("h2",{id:"programs-as-parameters"},"Programs as Parameters"),(0,o.kt)("p",null,"The core CLVM does not have an operator for creating user defined functions. It does, however, allow programs to be passed as parameters, which can be used for similar results."),(0,o.kt)("p",null,"Here is a puzzle that executes the program contained in ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," (the first solution argument) with the solution ",(0,o.kt)("inlineCode",{parentName:"p"},"(12)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a 2 (q . (12)))' '((* 2 (q . 2)))'\n24\n")),(0,o.kt)("p",null,"Taking this further we can make the puzzle run a new evaluation that only uses parameters from its old solution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(a 2 1)' '((* 5 (q . 2)) 10)'\n20\n")),(0,o.kt)("p",null,"We can use this technique to implement recursive programs."))}h.isMDXComponent=!0}}]);