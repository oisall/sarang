_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return b}));var c=n("q1tI"),o=n.n(c),a=n("/MKj"),i=n("1zst"),l=n("kduo"),r=n("Vl3Y"),u=n("5rEg"),s=n("2/Rp"),d=n("p+NB"),f=o.a.createElement,m=function(){var e=Object(c.useState)(""),t=e[0],n=e[1],o=Object(a.b)(),i=Object(a.c)((function(e){return e.post})),l=i.imagePaths,m=i.addPostDone,p=Object(c.useRef)();Object(c.useEffect)((function(){m&&n("")}),[m]);var b=Object(c.useCallback)((function(e){n(e.target.value)})),g=Object(c.useCallback)((function(){if(!t||!t.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud558\uc138\uc694.");var e=new FormData;return l.forEach((function(t){e.append("image",t)})),e.append("content",t),o({type:d.e,data:e})}),[t,l]),h=Object(c.useCallback)((function(){p.current.click()}),[p.current]),w=Object(c.useCallback)((function(e){console.log("images",e.target.files);var t=new FormData;[].forEach.call(e.target.files,(function(e){t.append("image",e)})),o({type:d.F,data:t})})),v=Object(c.useCallback)((function(e){return function(){o({type:d.v,data:e})}}));return f(r.a,{style:{margin:"10px 0 20px"},encType:"multipart/form-data",onFinish:g},f(u.a.TextArea,{value:t,onChange:b,maxLength:140,placeholder:"\uc5b4\ub5a4 \uc2e0\uae30\ud55c \uc77c\uc774 \uc788\uc5c8\ub098\uc694?"}),f("div",null,f("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:p,onChange:w}),f(s.a,{onClick:h},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"),f(s.a,{type:"primary",style:{float:"right"},htmlType:"submit"},"\uc9f9\uc9f9")),f("div",null,l.map((function(e,t){return f("div",{key:e,style:{display:"inline-block"}},f("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),f("div",null,f(s.a,{onClick:v(t)},"\uc81c\uac70")))}))))},p=o.a.createElement,b=!0;t.default=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.user})).me,n=Object(a.c)((function(e){return e.post})),o=n.mainPosts,r=n.hasMorePost,u=n.loadPostsLoading,s=n.retweetError;return Object(c.useEffect)((function(){s&&alert(s)}),[s]),Object(c.useEffect)((function(){function t(){if(console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight),window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&r&&!u){var t,n=null===(t=o[o.length-1])||void 0===t?void 0:t.id;e({type:d.n,lastId:n})}}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[r,u,o]),p(i.a,null,t&&p(m,null),o.map((function(e){return p(l.a,{key:e.id,post:e})})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,6,0,3,4,5,7]]]);