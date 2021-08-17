(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[211],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1147:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],l={id:"coins_spends_and_wallets",title:"2 - Coins, Spends and Wallets"},r=void 0,c={unversionedId:"coins_spends_and_wallets",id:"coins_spends_and_wallets",isDocsHomePage:!1,title:"2 - Coins, Spends and Wallets",description:"This guide assumes knowledge of the basics of CLVM so if you haven't read that page, please do so before reading this.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/coins_spends_and_wallets.md",sourceDirName:".",slug:"/coins_spends_and_wallets",permalink:"/chialisp-web/zh-Hans/docs/coins_spends_and_wallets",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/coins_spends_and_wallets.md",version:"current",frontMatter:{id:"coins_spends_and_wallets",title:"2 - Coins, Spends and Wallets"},sidebar:"someSidebar",previous:{title:"1 - CLVM Basics",permalink:"/chialisp-web/zh-Hans/docs/"},next:{title:"3 - Deeper into CLVM",permalink:"/chialisp-web/zh-Hans/docs/deeper_into_clvm"}},h=[{value:"Coins",id:"coins",children:[]},{value:"Spends",id:"spends",children:[]},{value:"Puzzles and Solutions in Practice",id:"puzzles-and-solutions-in-practice",children:[{value:"Conditions",id:"conditions",children:[]},{value:"Example 1: Password Locked Coin",id:"example-1-password-locked-coin",children:[]},{value:"Generating Conditions from the Puzzle vs. from the Solution",id:"generating-conditions-from-the-puzzle-vs-from-the-solution",children:[]},{value:"Example: Signature Locked Coin",id:"example-signature-locked-coin",children:[]}]},{value:"Wallets",id:"wallets",children:[{value:"Change Making",id:"change-making",children:[]},{value:"Coin Aggregation and Spend Bundles",id:"coin-aggregation-and-spend-bundles",children:[]},{value:"Example: Pay to &quot;Delegated Puzzle&quot;",id:"example-pay-to-delegated-puzzle",children:[]}]},{value:"Conclusions",id:"conclusions",children:[]}],d={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide assumes knowledge of ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"the basics of CLVM")," so if you haven't read that page, please do so before reading this."),(0,i.kt)("p",null,"This section of the guide will cover evaluating a program inside a program, how ChiaLisp relates to transactions and coins on the Chia network, and cover some techniques to create smart transactions using ChiaLisp. If there are any terms that you aren't sure of, be sure to check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary"},"glossary"),"."),(0,i.kt)("h2",{id:"coins"},"Coins"),(0,i.kt)("p",null,"A coin's ID is constructed from 3 pieces of information."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ID of its parent"),(0,i.kt)("li",{parentName:"ol"},"The hash of its puzzle (AKA the puzzlehash)"),(0,i.kt)("li",{parentName:"ol"},"The amount that it is worth")),(0,i.kt)("p",null,"To construct a coin ID simply take the hash of these 3 pieces of information concatenated in order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"coinID == sha256(parent_ID + puzzlehash + amount)\n")),(0,i.kt)("p",null,"This means that a coin's puzzle and amount are intrinsic parts of it. You cannot change a coin's puzzle or amount, you can only spend a coin."),(0,i.kt)("p",null,"The body of a coin is also made up of these 3 pieces of information, but instead of being hashed, they are stored in full. Here is the actual code that defines a coin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Coin:\n    parent_coin_info: bytes32\n    puzzle_hash: bytes32\n    amount: uint64\n")),(0,i.kt)("h2",{id:"spends"},"Spends"),(0,i.kt)("p",null,"When you spend a coin you destroy it. Unless the behaviour of a puzzle designates what to do with the coin's value when it is spent, the value of the coin is also destroyed in the spend."),(0,i.kt)("p",null,"To spend a coin you need 3 pieces of information (and an optional 4th)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The coin's ID"),(0,i.kt)("li",{parentName:"ol"},"The full source of the coin's puzzle"),(0,i.kt)("li",{parentName:"ol"},"A solution to the coin's puzzle"),(0,i.kt)("li",{parentName:"ol"},"(OPTIONAL) A collection of signatures grouped together, called an aggregated signature")),(0,i.kt)("p",null,"Remember the puzzle and solution is the same as we covered in the basics, except the puzzle has already been stored inside the coin and anybody can submit a solution."),(0,i.kt)("p",null,"The network has no concept of coin ownership, anybody can attempt to spend any coin on the network. It's up to the puzzles to prevent coins from being stolen or spent in unintended ways."),(0,i.kt)("p",null,'If anybody can submit a solution for a coin, you may be wondering how somebody can "own" a coin. By the end of the next section of the guide, hopefully it should be clear.'),(0,i.kt)("h2",{id:"puzzles-and-solutions-in-practice"},"Puzzles and Solutions in Practice"),(0,i.kt)("p",null,"So far we have covered ChiaLisp programs that will evaluate to some result. Remember the first part represents a puzzle which is committed to locking up a coin, and the second part is a solution anybody can submit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(+ 2 5)' '(40 50)'\n90\n\n$ brun '(c (q . 800) 1)' '(\"some data\" 0xdeadbeef)'\n(800 \"some data\" 0xdeadbeef)\n")),(0,i.kt)("p",null,"These are fun exercises in isolation, but this format can be used to communicate instructions to the blockchain network of how a coin should behave when it is spent. This can be done by having the result of an evaluation be a list of ",(0,i.kt)("strong",{parentName:"p"},"conditions"),"."),(0,i.kt)("h3",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"Conditions are split into two categories: ",(0,i.kt)("em",{parentName:"p"},'"this spend is only valid if X"')," and ",(0,i.kt)("em",{parentName:"p"},'"if this spend is valid then X"'),"."),(0,i.kt)("p",null,"Here is the complete list of conditions along with their format and behaviour."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AGG_SIG_UNSAFE - ","[49]"," - (49 pubkey message)"),": This spend is only valid if the attached aggregated signature contains a signature from the given public key of the given message. This is labeled unsafe because if you sign a message once, any other coins you have that require that signature may potentially also be unlocked. It's probably better just to use AGG_SIG_ME because of the natural entropy introduced by the coin ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AGG_SIG_ME - ","[50]"," - (50 pubkey message)"),": This spend is only valid if the attached aggregated signature contains a signature from the specified public key of that message concatenated with the coin's ID and the network's genesis challenge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CREATE_COIN - ","[51]"," - (51 puzzlehash amount)"),": If this spend is valid, then create a new coin with the given puzzlehash and amount."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_FEE - ","[52]"," - (52 amount)"),": This spend is only valid if there is unused value in this transaction equal to ",(0,i.kt)("em",{parentName:"li"},"amount"),", which is explicitly to be used as the fee."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CREATE_COIN_ANNOUNCEMENT - ","[60]"," - (60 message)"),": If this spend is valid, this creates an ephemeral announcement with an ID dependent on the coin that creates it. Other coins can then assert an announcement exists for inter-coin communication inside a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_COIN_ANNOUNCEMENT - ","[61]"," - (61 announcementID)"),": This spend is only valid if there was an announcement in this block matching the announcementID.  The announcementID is the hash of the message that was announced concatenated with the coin ID of the coin that announced it ",(0,i.kt)("inlineCode",{parentName:"li"},"announcementID == sha256(coinID + message)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CREATE_PUZZLE_ANNOUNCEMENT - ","[62]"," - (62 message)"),": If this spend is valid, this creates an ephemeral announcement with an ID dependent on the puzzle that creates it. Other coins can then assert an announcement exists for inter-coin communication inside a block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_PUZZLE_ANNOUNCEMENT - ","[63]"," - (63 announcementID)"),": This spend is only valid if there was an announcement in this block matching the announcementID.  The announcementID is the message that was announced concatenated with the puzzle hash of the coin that announced it ",(0,i.kt)("inlineCode",{parentName:"li"},"announcementID == sha256(puzzle_hash + message)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_MY_COIN_ID - ","[70]"," - (70 coinID)"),": This spend is only valid if the presented coin ID is exactly the same as the ID of the coin that contains this puzzle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_MY_PARENT_ID - ","[71]"," - (71 parentID)"),": This spend is only valid if the presented parent coin info is exactly the same as the parent coin info of the coin that contains this puzzle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_MY_PUZZLE_HASH - ","[72]"," - (72 puzzlehash)"),": This spend is only valid if the presented puzzle hash is exactly the same as the puzzle hash of the coin that contains this puzzle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_MY_AMOUNT - ","[73]"," - (73 amount)"),": This spend is only valid if the presented amount is exactly the same as the amount of the coin that contains this puzzle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_SECONDS_RELATIVE - ","[80]"," - (80 seconds)"),": This spend is only valid if the given time has passed since this coin was created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_SECONDS_ABSOLUTE - ","[81]"," - (81 time)"),": This spend is only valid if the timestamp on this block is greater than the specified timestamp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_HEIGHT_RELATIVE - ","[82]"," - (82 block_age)"),": This spend is only valid if the specified number of blocks have passed since this coin was created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ASSERT_HEIGHT_ABSOLUTE - ","[83]"," - (83 block_height)"),": This spend is only valid if the given block_height has been reached.")),(0,i.kt)("p",null,"Conditions are returned as a list of lists in the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"((51 0xabcd1234 200) (50 0x1234abcd) (53 0xdeadbeef))\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Remember: this is what a puzzle should evaluate to when presented with a solution so that a full-node can understand it.")),(0,i.kt)("p",null,"Let's create a few examples puzzles and solutions to demonstrate how this is used in practice."),(0,i.kt)("h3",{id:"example-1-password-locked-coin"},"Example 1: Password Locked Coin"),(0,i.kt)("p",null,"Let's create a coin that can be spent by anybody as long as they know the password."),(0,i.kt)("p",null,'To implement this we would have the hash of the password committed into the puzzle and, if presented with the correct password, the puzzle will return instructions to create a new coin with a puzzle hash given in the solution. For the following example the password is "hello" which has the hash value 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824. The implementation for the above coin would be thus:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'(i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (c (q . 51) (c 5 (c (q . 100) ()))) (q . "wrong password"))\n')),(0,i.kt)("p",null,"This program takes the hash, with ",(0,i.kt)("inlineCode",{parentName:"p"},"(sha256 )"),", of the first element in the solution, with ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", and compares that value with the already committed. If the password is correct it will return ",(0,i.kt)("inlineCode",{parentName:"p"},"(c (q . 51) (c 5 (c (q . 100) ())))")," which evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"(51 0xmynewpuzzlehash 100)"),". Remember, ",(0,i.kt)("inlineCode",{parentName:"p"},"51")," is the opcode for the condition to create a new coin with the specified puzzle hash and amount. ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"(f (r 1))")," and we use it to access the puzzle hash from the solution."),(0,i.kt)("p",null,'If the password is incorrect it will return the string "wrong password".'),(0,i.kt)("p",null,"The format for a solution to this is expected to be formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"(password newpuzzlehash)"),". Remember, anybody can attempt to spend this coin as long as they know the coin's ID and the full puzzle code."),(0,i.kt)("p",null,"Let's test it out using clvm_tools."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ brun \'(i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (c (c (q . 51) (c 5 (c (q . 100) ()))) (q ())) (q . "wrong password"))\' \'("let_me_in" 0xdeadbeef)\'\n"wrong password"\n\n$ brun \'(i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (c (q . 51) (c 5 (c (q . 100) ()))) (q . "wrong password"))\' \'("incorrect" 0xdeadbeef)\'\n"wrong password"\n\n$ brun \'(i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (c (q . 51) (c 5 (c (q . 100) ()))) (q . "wrong password"))\' \'("hello" 0xdeadbeef)\'\n((51 0xdeadbeef 100))\n')),(0,i.kt)("p",null,"There is one final change we need to make before this is a complete smart transaction."),(0,i.kt)("p",null,"If you want to invalidate a spend then you need to raise an exception using ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". Otherwise you just have a valid spend that isn't returning any conditions, and that would destroy our coin and not create a new one! So we need to change the fail condition to be ",(0,i.kt)("inlineCode",{parentName:"p"},'(x "wrong password")')," which means the transaction fails and the coin is not spent."),(0,i.kt)("p",null,"If we're doing this then we should also change the ",(0,i.kt)("inlineCode",{parentName:"p"},"(i A B C)")," pattern to ",(0,i.kt)("inlineCode",{parentName:"p"},"(a (i A (q . B) (q . C)) 1)"),". The reason for this is explained in ",(0,i.kt)("a",{parentName:"p",href:"/docs/deeper_into_clvm/"},"a later section"),". For now don't worry about why."),(0,i.kt)("p",null,"Here is our completed password protected coin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"'(a (i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q . (c (c (q . 51) (c 5 (c (q . 100) ()))) ())) (q . (x (q . \"wrong password\")))) 1)'\n")),(0,i.kt)("p",null,"Let's test it out using clvm_tools:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ brun \'(a (i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q . (c (c (q . 51) (c 5 (c (q . 100) ()))) ())) (q . (x (q . "wrong password")))) 1)\' \'("let_me_in" 0xdeadbeef)\'\nFAIL: clvm raise ("wrong password")\n\n$ brun \'(a (i (= (sha256 2) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824)) (q . (c (c (q . 51) (c 5 (c (q . 100) ()))) ())) (q . (x (q . "wrong password")))) 1)\' \'("hello" 0xdeadbeef)\'\n((51 0xdeadbeef 100))\n')),(0,i.kt)("h3",{id:"generating-conditions-from-the-puzzle-vs-from-the-solution"},"Generating Conditions from the Puzzle vs. from the Solution"),(0,i.kt)("p",null,'Let\'s take a moment to consider the balance of power between the send and the spender. Another way of phrasing this is "how much control over the output should the solution have?"'),(0,i.kt)("p",null,"Suppose we lock a coin up using the following puzzle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(q . ((51 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a 100)))\n")),(0,i.kt)("p",null,"Regardless of what solution is passed this puzzle will ",(0,i.kt)("em",{parentName:"p"},"always")," return instructions to create a new coin with the puzzlehash 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a and the amount 100."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(q . ((51 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a 100)))' '(80 90 \"hello\")'\n((51 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a 100))\n\n$ brun '(q . ((51 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a 100)))' '(\"it doesn't matter what we put here\")'\n((51 0x365bdd80582fcc2e4868076ab9f24b482a1f83f6d88fd795c362c43544380e7a 100))\n")),(0,i.kt)("p",null,"In this example the result of spending the coin is entirely determined from the puzzle. Even though anybody could initiate the spend of the coin, the person that locked the coin up has all the power in the way that the coin is spent as the solution doesn't matter at all."),(0,i.kt)("p",null,"Conversely lets consider a coin locked up with the following puzzle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"1\n")),(0,i.kt)("p",null,"This example may look a little weird, because most ChiaLisp programs are lists, and this is just an atom, but it is still a valid program. This puzzle simply returns the entire solution. You can think about this in terms of power and control. The person that locked the coin up has given all the power to the person who provides the solution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '1' '((51 0xf00dbabe 50) (51 0xfadeddab 50))'\n((51 0xf00dbabe 50) (51 0xfadeddab 50))\n\n$ brun '1' '((51 0xf00dbabe 75) (51 0xfadeddab 15) (51 0x1234abcd 10))'\n((51 0xf00dbabe 75) (51 0xfadeddab 15) (51 0x1234abcd 10))\n")),(0,i.kt)("p",null,"In this situation, not only can anybody spend the coin, they can spend it however they like! This balance of power determines a lot of how puzzles are designed in ChiaLisp."),(0,i.kt)("p",null,"For example, let's create a puzzle that lets the spender choose the output, but with one stipulation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"  (c (q . (51 0xcafef00d 200)) 1)\n")),(0,i.kt)("p",null,"This will let the spender return any conditions they want via the solution but will always add the condition to create a coin with the puzzle hash 0xcafef00d and value 200."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c (q . (51 0xcafef00d 200)) 1)' '((51 0xf00dbabe 75) (51 0xfadeddab 15) (51 0x1234abcd 10))'\n((51 0xcafef00d 200) (51 0xf00dbabe 75) (51 0xfadeddab 15) (51 0x1234abcd 10))\n")),(0,i.kt)("p",null,"This section is intended to demonstrate the point that conditions can come from both the recipient's solution and from the sender's puzzle, and how that represents trust and the balance of power."),(0,i.kt)("p",null,'In the next exercise we will put everything we know together and create the "standard" transaction in Chia that underpins how wallets are able to send money to each other.'),(0,i.kt)("h3",{id:"example-signature-locked-coin"},"Example: Signature Locked Coin"),(0,i.kt)("p",null,"To 'send a coin to somebody' you simply create a puzzle that requires the recipient's signature, but then allows them to return any other conditions that they like. This means that the coin cannot be spent by anybody else, but the outputs are entirely decided by the recipient."),(0,i.kt)("p",null,"We can construct the following smart transaction where AGG_SIG_ME is 50 and the recipient's pubkey is ",(0,i.kt)("inlineCode",{parentName:"p"},"0xfadedcab"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(c (c (q . 50) (c (q . 0xfadedcab) (c (sha256 2) (q . ())))) 3)\n")),(0,i.kt)("p",null,"This puzzle forces the resultant evaluation to contain ",(0,i.kt)("inlineCode",{parentName:"p"},"(50 pubkey *hash_of_first_solution_arg*)")," but then adds on all of the conditions presented in the solution."),(0,i.kt)("p",null,"Let's test it out in clvm_tools - for this example the recipient's pubkey will be represented as 0xdeadbeef. The recipient wants to spend the coin to create a new coin which is locked up with the puzzle 0xfadedcab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c (c (q . 50) (c (q . 0xfadedcab) (c (sha256 2) ()))) 3)' '(\"hello\" (51 0xcafef00d 200))'\n((50 0xfadedcab 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824) (51 0xcafef00d 200))\n")),(0,i.kt)("p",null,"Brilliant."),(0,i.kt)("p",null,"Let's pull back and add some context here."),(0,i.kt)("h2",{id:"wallets"},"Wallets"),(0,i.kt)("p",null,"A wallet is some software that has several features that make it easy for a user to interact with coins."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A wallet keeps track of public and private keys"),(0,i.kt)("li",{parentName:"ul"},"A wallet can generate puzzles and solutions"),(0,i.kt)("li",{parentName:"ul"},"A wallet can sign things with its keys"),(0,i.kt)("li",{parentName:"ul"},"A wallet can identify and remember what coins that the user 'owns'"),(0,i.kt)("li",{parentName:"ul"},"A wallet can spend coins")),(0,i.kt)("p",null,"You may be wondering how a wallet is able to identify what coins that the user 'owns' if any person can attempt to spend a coin. This is because all wallets already know and agree on what the standard format for sending a coin to somebody is. They know what their own pubkeys are, so when a new coin is created a wallet can check if the puzzle inside that coin is a 'standard send puzzle' to one of their pubkeys. If it is, then that coin can be considered to be owned by that 'wallet' as nobody else can spend it."),(0,i.kt)("p",null,"If the wallet that 'owns' the coin then wanted to send that coin on again to somebody else, they ask for an address (which is a bech32m encoded puzzle hash) and then they could then spend the coin that they own, destroying it, and creating a new coin that is locked up with the new recipient's puzzle hash. The new recipient can then identify that it 'owns' the coin and can send it on as they wish later."),(0,i.kt)("h3",{id:"change-making"},"Change Making"),(0,i.kt)("p",null,"Change making is simple. If a wallet spends less than the total value of a coin, they can create another coin with the remaining portion of value, and lock it up with the standard puzzle for themselves again. You can split a coin up into as many new coins with fractions of the original value as you'd like."),(0,i.kt)("p",null,"You cannot create two coins of the same value, with the same puzzlehash, from the same parent as this will lead to an ID collision and the spend will be rejected."),(0,i.kt)("h3",{id:"coin-aggregation-and-spend-bundles"},"Coin Aggregation and Spend Bundles"),(0,i.kt)("p",null,"You can aggregate a bunch of smaller coins together into one large coin. To do this, you can create a SpendBundle which groups together one or more spends with a single aggregated signature."),(0,i.kt)("p",null,"SpendBundles are particularly important when the using announcements.  Since created announcements are only good for the block they are created in, you want to make sure that the coins that are asserting those announcements get spent alongside the announcing coins."),(0,i.kt)("p",null,"We'll go more into SpendBundles and cohesion between coins in a later section."),(0,i.kt)("h3",{id:"example-pay-to-delegated-puzzle"},'Example: Pay to "Delegated Puzzle"'),(0,i.kt)("p",null,"We can construct an even more powerful version of the signature locked coin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(c (c (q . 50) (c (q . 0xfadedcab) (c (sha256 2) ()))) (a 5 11))\n")),(0,i.kt)("p",null,"The first part is mostly the same, the puzzle always returns an AGGSIG check for the pubkey ",(0,i.kt)("inlineCode",{parentName:"p"},"0xfadedcab"),'. However it only checks for the first element of the solution. This is because, instead of the solution for this puzzle being a list of Conditions to be printed out, the solution is a program/solution pair. This means that the recipient can run their own program as part of the solution generation, or sign a puzzle and let somebody else provide the solution. When we use program parameters to generate solutions, refer to that as a "delegated puzzle".'),(0,i.kt)("p",null,"The new program and solution inside the solution are evaluated and the result of that is added to the condition output. We will cover in more detail how this works in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/deeper_into_clvm/"},"next part")," of this guide."),(0,i.kt)("p",null,"A basic solution for this standard transaction might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'("hello" (q . ((51 0xmynewpuzzlehash 50) (51 0xanothernewpuzzlehash 50))) ())\n')),(0,i.kt)("p",null,"Running that in the clvm_tools looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c (c (q . 50) (c (q . 0xfadedcab) (c (sha256 2) ()))) (a 5 11))' '(\"hello\" (q . ((51 0xdeadbeef 50) (51 0xf00dbabe 50))) ())'\n\n((50 0xfadedcab 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824) (51 0xdeadbeef 50) (51 0xf00dbabe 50))\n")),(0,i.kt)("h2",{id:"conclusions"},"Conclusions"),(0,i.kt)("p",null,'Coin ownership refers to the concept of creating a coin with a puzzle that means it can only be spent when signed by the private key of the coin\'s "owner". The goal of wallet software is to generate, interpret and manage these kinds of coins and puzzles.'),(0,i.kt)("p",null,"The next part of this guide will go further in depth in ChiaLisp, and cover how to write more complex puzzles. If any of the material in this part of the guide has got you confused, try returning to it after the next part."))}p.isMDXComponent=!0}}]);