(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[85],{895:function(e,t,n){"use strict";n.d(t,{dK:function(){return a},_k:function(){return o},vc:function(){return l},rx:function(){return u},qo:function(){return s},Hk:function(){return i},Iz:function(){return d}});var r=n(1336),c=n.n(r);n(892)(c()),n(4212).w(c()),n(4182)(c());var a=["en","zh"],o=!1,l=null,u="d8d96c6b",s=8,i=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},7979:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),c=n(6010),a=n(8692),o=n(3905),l=n(1729),u=n(571),s=n(9306),i="mdxPageWrapper_3qD3";var d=function(e){var t=e.content,n=t.frontMatter,d=t.metadata,m=n.title,f=n.description,v=n.wrapperClassName,_=n.hide_table_of_contents,h=d.permalink;return r.createElement(a.Z,{title:m,description:f,permalink:h,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,c.Z)("row",i)},r.createElement("div",{className:(0,c.Z)("col",!_&&"col--8")},r.createElement(o.Zo,{components:l.Z},r.createElement(t,null))),!_&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(u.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),c=n(6010);var a=function(e,t,n){var c=(0,r.useState)(void 0),a=c[0],o=c[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var c=0,l=!1,u=document.getElementsByClassName(e);c<u.length&&!l;){var s=u[c],i=s.href,d=decodeURIComponent(i.substring(i.indexOf("#")+1));r.id===d&&(a&&a.classList.remove(t),s.classList.add(t),o(s),l=!0),c+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},o="tableOfContents_35-E",l="table-of-contents__link";function u(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return a(l,"table-of-contents__link--active",100),r.createElement("div",{className:(0,c.Z)(o,"thin-scrollbar")},r.createElement(u,{toc:t}))}}}]);