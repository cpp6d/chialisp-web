(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[507],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),f=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=f(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=f(t),d=i,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var f=2;f<o;f++)l[f]=t[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4473:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return c},default:function(){return u}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),l=["components"],r={id:"coin_spend_rpc",title:"How to spend a coin using an RPC call",sidebar_label:"Spend a coin using RPC"},s=void 0,f={unversionedId:"tutorials/coin_spend_rpc",id:"tutorials/coin_spend_rpc",isDocsHomePage:!1,title:"How to spend a coin using an RPC call",description:"This tutorial teaches you how to spend a coin with any puzzle using RPC calls. We will be using the password-locked coin puzzle from How to lock coin with a custom puzzle as an example.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/tutorials/coin_spend_rpc.md",sourceDirName:"tutorials",slug:"/tutorials/coin_spend_rpc",permalink:"/chialisp-web/zh-Hans/docs/tutorials/coin_spend_rpc",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/tutorials/coin_spend_rpc.md",version:"current",frontMatter:{id:"coin_spend_rpc",title:"How to spend a coin using an RPC call",sidebar_label:"Spend a coin using RPC"},sidebar:"someSidebar",previous:{title:"Lock a coin with a custom puzzle",permalink:"/chialisp-web/zh-Hans/docs/tutorials/custom_puzzle_lock"},next:{title:"ChiaLisp and CLVM FAQ",permalink:"/chialisp-web/zh-Hans/docs/faq"}},c=[{value:"Get your coin&#39;s info (amount, puzzle hash &amp; parent info)",id:"get-your-coins-info-amount-puzzle-hash--parent-info",children:[{value:"Using Chia explorer (by puzzle hash/receive address)",id:"using-chia-explorer-by-puzzle-hashreceive-address",children:[]}]},{value:"Get serialized puzzle and solution",id:"get-serialized-puzzle-and-solution",children:[{value:"Serialization using clvm_tools",id:"serialization-using-clvm_tools",children:[]},{value:"Serialization using Quexington's Chialisp Dev Utility",id:"serialization-using-quexingtons-chialisp-dev-utility",children:[]},{value:"Serialization using Chialisp web tool",id:"serialization-using-chialisp-web-tool",children:[]}]},{value:"Spend a coin with RPC call",id:"spend-a-coin-with-rpc-call",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial teaches you how to spend a coin with any puzzle using RPC calls. We will be using the password-locked coin puzzle from ",(0,o.kt)("a",{parentName:"p",href:"custom_puzzle_lock"},"How to lock coin with a custom puzzle")," as an example."),(0,o.kt)("h2",{id:"get-your-coins-info-amount-puzzle-hash--parent-info"},"Get your coin's info (amount, puzzle hash & parent info)"),(0,o.kt)("p",null,"RPC call for spending a coin requires you to specify which coin you are spending. For unique identification, you need the coin's amount, puzzle hash, and parent info. Those three pieces of information are also enough to calculate the coin's ID."),(0,o.kt)("h3",{id:"using-chia-explorer-by-puzzle-hashreceive-address"},"Using Chia explorer (by puzzle hash/receive address)"),(0,o.kt)("p",null,"If you know the puzzle hash or receive address of the coin you are looking for, you can ",(0,o.kt)("a",{parentName:"p",href:"https://www.chiaexplorer.com/blockchain/search"},"search for it using Chia explorer"),". Chia explorer cannot search using puzzle hash, so if you have a puzzle hash, you first need to convert it to receive address using ",(0,o.kt)("a",{parentName:"p",href:"https://www.chiaexplorer.com/tools/address-puzzlehash-converter"},"Chia explorer's tool"),".  Remember that receive addresses are just encoded puzzle hashes and will still refer to the puzzle you are looking for."),(0,o.kt)("p",null,"When you search for a receive address, you'll see all coins locked by the corresponding puzzle. Select the one you want to spend. That will get you the coin's amount, puzzle hash, and parent info."),(0,o.kt)("h2",{id:"get-serialized-puzzle-and-solution"},"Get serialized puzzle and solution"),(0,o.kt)("p",null,"The next thing you need to know to spend the coin is the coin's puzzle and solution. Puzzles and solutions are provided in a serialized format, so we need to get that for each. The puzzle has to be compiled to low-level Chialisp and is serialized as normal."),(0,o.kt)("p",null,"To serialize the solution, you need to slightly modify the solution format to make it valid Chialisp program. For that, you need to quote your solution. For example, in case of the solution ",(0,o.kt)("inlineCode",{parentName:"p"},"(hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2)")," you need to change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"(q . (hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2))")," which makes it valid Chialisp program that can be compiled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example for the password-locked coin:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Puzzle:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(a (q 2 (i (= (sha256 5) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q 4 (c 2 (c 11 (c 23 ()))) ()) (q 8)) 1) (c (q . 51) 1))")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serialized puzzle:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0xff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2)")," (as valid Chialisp program ",(0,o.kt)("inlineCode",{parentName:"p"},"(q . (hello 0x5f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675 2))"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Serialized solution:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"0xff8568656c6c6fffa05f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675ff0280")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"WARNING: You have to change this solution and replace the target puzzle hash with your own to get your coins back")),(0,o.kt)("h3",{id:"serialization-using-clvm_tools"},"Serialization using ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools")),(0,o.kt)("p",null,"The same command that we used for getting the puzzle hash in ",(0,o.kt)("a",{parentName:"p",href:"custom_puzzle_lock#get-puzzle-hash-from-a-puzzle"},"How to lock coin with a custom puzzle")," (",(0,o.kt)("inlineCode",{parentName:"p"},"opc -H <compiled_puzzle>"),") can be used for getting the serialized version of our puzzle and solution as well. The serialized version will be included in the response ",(0,o.kt)("strong",{parentName:"p"},"on the second line"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"opc -H '(a (q 2 (i (= (sha256 5) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q 4 (c 2 (c 11 (c 23 ()))) ()) (q 8)) 1) (c (q . 51) 1))'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"4843c869bba5f65aa1e806cd372dae5668ca3b69640d067e86837ca96b324e71\nff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080\n")),(0,o.kt)("h3",{id:"serialization-using-quexingtons-chialisp-dev-utility"},"Serialization using ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/Quexington/chialisp_dev_utility"},"Quexington's Chialisp Dev Utility")),(0,o.kt)("p",null,"Follow repository's README to set up a new project and serialize puzzle."),(0,o.kt)("p",null,"In short: paste your compiled puzzle/solution to your work file and call ",(0,o.kt)("inlineCode",{parentName:"p"},"chialisp build"),". That will generate ",(0,o.kt)("inlineCode",{parentName:"p"},".hex")," files with a serialized version of your puzzle/solution (depending on your work file)."),(0,o.kt)("h3",{id:"serialization-using-chialisp-web-tool"},"Serialization using ",(0,o.kt)("a",{parentName:"h3",href:"https://clisp.surrealdev.com/"},"Chialisp web tool")),(0,o.kt)("p",null,"Paste your puzzle in the text area and click ",(0,o.kt)("strong",{parentName:"p"},"Compile"),". The serialized result will be displayed in the ",(0,o.kt)("strong",{parentName:"p"},"Serialized")," section."),(0,o.kt)("h2",{id:"spend-a-coin-with-rpc-call"},"Spend a coin with RPC call"),(0,o.kt)("p",null,"To spend your coin, you only need to call RPC (broadcast transaction example) with values specific to your spend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --insecure --cert ~/.chia/mainnet/config/ssl/full_node/private_full_node.crt --key ~/.chia/mainnet/config/ssl/full_node/private_full_node.key -d \'{        "spend_bundle": {\n            "aggregated_signature": "0xc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n            "coin_solutions": [\n                {\n                    "coin": {\n                        "amount": 1,\n                        "parent_coin_info": "0xccd5bb71183532bff220ba46c268991a00000000000000000000000000004082",\n                        "puzzle_hash": "0x4843c869bba5f65aa1e806cd372dae5668ca3b69640d067e86837ca96b324e71"\n                    },\n                    "puzzle_reveal": "ff02ffff01ff02ffff03ffff09ffff0bff0580ffff01a02cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b982480ffff01ff04ffff04ff02ffff04ff0bffff04ff17ff80808080ff8080ffff01ff088080ff0180ffff04ffff0133ff018080 ",\n                    "solution": "ff8568656c6c6fffa05f5767744f91c1c326d927a63d9b34fa7035c10e3eb838c44e3afe127c1b7675ff0280"\n                }\n            ]\n        }}\' -H "Content-Type: application/json" -X POST https://localhost:8555/push_tx\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"spend_bundle")," object contains an ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregated_signature"),", which we can later assert in the puzzle, and ",(0,o.kt)("inlineCode",{parentName:"p"},"coin_solutions"),": a list of objects for all of the coins we are spending. If ",(0,o.kt)("inlineCode",{parentName:"p"},"aggregated_signature")," is not necessary for your puzzle, use 0xc followed by 191 zeros (as in the example above). However, it's worth noting that a puzzle that doesn't use a signature is usually unsafe and should be used only for testing purposes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"coin_solution")," contains information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"coin")," it is spending (",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"parent_coin_info"),", and  ",(0,o.kt)("inlineCode",{parentName:"p"},"puzzle_hash"),"). It also includes a serialized puzzle as a ",(0,o.kt)("inlineCode",{parentName:"p"},"puzzle_reveal")," and serialized ",(0,o.kt)("inlineCode",{parentName:"p"},"solution"),"."),(0,o.kt)("p",null,"If you fill in all your information correctly and send this request, your coin will be spent according to its provided solution, and the response ",(0,o.kt)("inlineCode",{parentName:"p"},'{"status": "SUCCESS", "success": true}')," should be returned from the RPC call."),(0,o.kt)("p",null,"If your puzzle requires an aggregated signature, stay tuned for more tutorials."))}u.isMDXComponent=!0}}]);