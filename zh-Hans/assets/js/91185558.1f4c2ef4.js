(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[790],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2877:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var i=n(2122),o=n(9756),a=(n(7294),n(3905)),r=["components"],s={id:"debugging",title:"9 - Debugging"},l=void 0,u={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"9 - Debugging",description:"Due to the nature of Chialisp programs, it can often be difficult to determine where exactly something is going wrong.  Since Chialisp is serialized to CLVM before it is run, errors that you receive will often appear to make little sense within the context in which you wrote the faulty code.  Let's go over some tricks now that you can use to make catching the bugs in your program a little easier.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/chialisp-web/zh-Hans/docs/debugging",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/debugging.md",version:"current",frontMatter:{id:"debugging",title:"9 - Debugging"},sidebar:"someSidebar",previous:{title:"8 - Security",permalink:"/chialisp-web/zh-Hans/docs/security"},next:{title:"10 - Optimization",permalink:"/chialisp-web/zh-Hans/docs/optimization"}},h=[{value:"Verbose output",id:"verbose-output",children:[]},{value:"Common errors",id:"common-errors",children:[{value:"path into atom",id:"path-into-atom",children:[]},{value:"first/rest of non-cons",id:"firstrest-of-non-cons",children:[]},{value:"sha256 on list",id:"sha256-on-list",children:[]}]},{value:"Using <code>(x)</code> to log",id:"using-x-to-log",children:[]},{value:"main.sym",id:"mainsym",children:[]},{value:"<code>opd</code> and <code>opc</code>",id:"opd-and-opc",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Due to the nature of Chialisp programs, it can often be difficult to determine where exactly something is going wrong.  Since Chialisp is serialized to CLVM before it is run, errors that you receive will often appear to make little sense within the context in which you wrote the faulty code.  Let's go over some tricks now that you can use to make catching the bugs in your program a little easier."),(0,a.kt)("h2",{id:"verbose-output"},"Verbose output"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"brun")," have a ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," flag for printing verbose outputs.  This output is ",(0,a.kt)("em",{parentName:"p"},"very")," verbose and shows every evaluation that the program made before it finished or exited.  Let take a look at an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"brun '(c (sha256 0xdeadbeef) ())' '()' -v\n\nFAIL: path into atom ()\n\n(a 2 3) [((c (sha256 0xdeadbeef) ()))] => (didn't finish)\n\n3 [((c (sha256 0xdeadbeef) ()))] => ()\n\n2 [((c (sha256 0xdeadbeef) ()))] => (c (sha256 0xdeadbeef) ())\n\n(c (sha256 0xdeadbeef) ()) [()] => (didn't finish)\n\n() [()] => ()\n\n(sha256 0xdeadbeef) [()] => (didn't finish)\n\n0xdeadbeef [()] => (didn't finish)\n")),(0,a.kt)("p",null,"Every verbose output starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"(a 2 3)")," which simply represents the whole puzzle being run with whole solution. If you're debugging, this will likely have an output of ",(0,a.kt)("inlineCode",{parentName:"p"},"(didn't finish)"),". We can trace the appearances of ",(0,a.kt)("inlineCode",{parentName:"p"},"(didn't finish)")," down until we find the deepest failure to evaluate.  In this example, we see that it is trying to run ",(0,a.kt)("inlineCode",{parentName:"p"},"0xdeadbeef")," as a program to access a value in the solution.  The solution is just ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," which is obviously not deep enough, so it throws an error.  We should have quoted the atom before we passed it to ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256"),"."),(0,a.kt)("h2",{id:"common-errors"},"Common errors"),(0,a.kt)("h3",{id:"path-into-atom"},"path into atom"),(0,a.kt)("p",null,"This error is perhaps the most common error that will come up when you run a new program.  It means that you have tried to traverse a tree with an index that is deeper than the tree is."),(0,a.kt)("p",null,"What this is usually trying to convey is that something is wrong with a variable that you are trying to reference.  Make sure to check your arguments are being properly passed from one function to the next and that all of your code is referencing them within the correct scope.  Maybe you called a function and didn't pass it enough parameters.  Maybe the function was expecting a program and you gave it an atom.  You can look in the verbose output to see what evaluations didn't finish to get a clue of what part might be failing."),(0,a.kt)("h3",{id:"firstrest-of-non-cons"},"first/rest of non-cons"),(0,a.kt)("p",null,"With this error, clvm is trying to tell you that you have attempted to use ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," on an atom instead of a cons box.  This is, again, usually due to a misalignment of arguments.  Make sure you know what every variable is allowed to be when it gets passed to another function: an atom, a cons box, or either.  If it can be either, make sure you check if it is a cons before performing list operations on it. Sometimes this can be caused by evaluating a list of an unexpected length and running into ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," before you expect it.  Also, double check that all of the evaluation in your program is happening at the right time.  Perhaps a program was evaluated into an atom too soon."),(0,a.kt)("h3",{id:"sha256-on-list"},"sha256 on list"),(0,a.kt)("p",null,"This error is fairly descriptive, but it is important to highlight when this most commonly occurs.  Often when building a program, you will want to hash a commitment to some kind of CLVM program with some other data.  Usually this is done by tree hashing the program using ",(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/common_functions#sha256tree1"},"sha256tree")," and then committing to it that way.  However, with the complexity and moving pieces of a lot of applications, you may lose track of which elements are programs and which elements are just tree hashes.  This error often indicates that you are passing in a program when you should be passing in a tree hash.  Go to every reference of ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256")," in your application and you can probably find the culprit."),(0,a.kt)("h2",{id:"using-x-to-log"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"(x)")," to log"),(0,a.kt)("p",null,"Oftentimes, you would like to be able to see the values of a variable in the middle of a program execution.  Most languages have some sort of log statement with which to do this, but it's somewhat impossible to implement in Chialisp since it's evaluated rather than run.  One of the workarounds you can use is to wrap the statement you are looking to debug in ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),".  The raise operator takes an optional argument to log when it raises.  Let's say you are trying to debug this line of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"(list CREATE_COIN_ANNOUNCEMENT (sha256tree (list coin-info coin-data)))\n")),(0,a.kt)("p",null,"You can try commenting out that line and creating a new raise to exit out with some information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"; (list CREATE_COIN_ANNOUNCEMENT (sha256tree (list coin-info coin-data)))\n(x (list CREATE_COIN_ANNOUNCEMENT (sha256tree (list coin-info coin-data))))\n")),(0,a.kt)("p",null,"Keep in mind that evaluation will happen before the raise message gets created.  Sometimes it's better to just raise a list of the arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},"; (list CREATE_COIN_ANNOUNCEMENT (sha256tree (list coin-info coin-data)))\n(x (list coin-info coin-data))\n")),(0,a.kt)("p",null,"There is also a caveat that occurs when you are trying to debug a series of spends that happen sequnetially.  Maybe the puzzle runs the first time and fails the second time.  If you raise during execution, you may cause your first puzzle error out too, which will not get you to the second puzzle.  In scenarios like these, try to figure out a difference between the spends and wrap the raise in an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," so that you can pass safely through the first puzzle."),(0,a.kt)("h2",{id:"mainsym"},"main.sym"),(0,a.kt)("p",null,"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," on a ",(0,a.kt)("inlineCode",{parentName:"p"},"mod")," that contains constants or functions, the compiler will automatically generate a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"main.sym"),".  This file contains mappings from the constant or function names to their representations in the bytecode.  When you are running the program with ",(0,a.kt)("inlineCode",{parentName:"p"},"brun"),", you can specify the symbol file with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-y")," flag.  Then, when you see errors or print verbose outputs, you will see human readable text rather than the integer or bytecode that is being used to refer to it."),(0,a.kt)("p",null,"This is particularly useful when dealing with long verbose outputs.  You can scroll up the log until you recognize a snippet of code that isn't finishing.  Without the symbol table, it may be much more difficult to recognize."),(0,a.kt)("p",null,"Importantly, the symbol table will not be able to identify inline functions or macros since they are inserted at compile time.  If you are debugging, it's probably a good idea to change inline functions into functions so that you can recognize them in the symbol table."),(0,a.kt)("h2",{id:"opd-and-opc"},(0,a.kt)("inlineCode",{parentName:"h2"},"opd")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"opc")),(0,a.kt)("p",null,"There are two more commands in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools repository")," that are related to the serialization of CLVM.  When the program is run on the blockchain, it is run in its serialized form. It can sometimes be helpful to see that serialized compilation. For example, when the cost of a program is evaluated, it is charged cost for every byte in the puzzle reveal.  You are incentivized to make sure that puzzle reveal is as small as possible."),(0,a.kt)("p",null,"If you would like to see the serialized output, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"opc")," to compile or ",(0,a.kt)("strong",{parentName:"p"},"assemble")," the CLVM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},'opc \'(q "hello" . "world")\'\nff01ff8568656c6c6f85776f726c64\n')),(0,a.kt)("p",null,"In addition, other languages like Python usually also handle CLVM in its serialized format.  If you are writing driver code for your puzzles, you may need to debug a spend bundle that contains some serialized CLVM. In this scenario, it can be useful to ",(0,a.kt)("strong",{parentName:"p"},"disassemble")," the serialized program into the human readable form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-chialisp"},'opd ff01ff8568656c6c6f85776f726c64\n(q "hello" . "world")\n')),(0,a.kt)("p",null,"With large programs, it may not be much clearer in the human readable form, but you can often still distinguish certain patterns. Curried arguments, for example, are relatively easy to pick out and they can often give you the crucial information you need to debug your programs."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Debugging Chialisp at times can be frustrating. Due to the nature of how lisp handles data structures, programs will often continue on with incorrect values only to error out at a later spot that gives no clue to the initial breakage. For example, a variable typo will often result in the variable being evaluated as a string, and if that gets hashed into something it's impossible to tell!"),(0,a.kt)("p",null,"It is recommended that you have a strong grasp of CLVM since it underlies all of the processes that happen in Chialisp. It will make it easier to build the picture in your head of the evaluations that are happening and why they may be happening unexpectedly."),(0,a.kt)("p",null,"Hopefully with these tricks you can save yourself a bit of time and get your smart contracts out quicker."))}p.isMDXComponent=!0}}]);