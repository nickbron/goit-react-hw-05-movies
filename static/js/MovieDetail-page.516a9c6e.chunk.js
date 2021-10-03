(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{42:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(40),a=n.n(r),c=n(41),s=n(44),i=n.n(s);i.a.defaults.baseURL="https://api.themoviedb.org/3/",i.a.defaults.params={api_key:"12355de9ae36d576f407c0d316008e50",language:"en-US"};var u=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/trending/movie/day");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t,"/reviews"),{params:{page:1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/search/movie",{params:{query:t,page:1,include_adult:!1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},78:function(e,t,n){"use strict";n.r(t);var r,a,c=n(40),s=n.n(c),i=n(41),u=n(43),o=n(0),l=n(3),p=n(11),d=n(42),j=n(7),b=n(8),h=b.a.img(r||(r=Object(j.a)(["\n  width: 280px;\n  height: auto;\n  display: block;\n"]))),v=b.a.button(a||(a=Object(j.a)(["\n  margin-left: 10px;\n  margin-bottom: 15px;\n"]))),f=n(1),O=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,79))})),x=Object(o.lazy)((function(){return n.e(2).then(n.bind(null,76))}));t.default=function(){var e,t,n,r,a,c,j,b=Object(l.f)(),m=Object(l.g)(),g=Object(l.i)(),w=g.url,k=g.path,y=Object(o.useState)({}),_=Object(u.a)(y,2),G=_[0],S=_[1],E=Object(l.h)().filmId;function U(e){return e.split("-")[0]}Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t,n,r,a,c,i,u,o,l,p,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.b)(E);case 3:if(200!==(t=e.sent).status){e.next=11;break}n=t.data,r=n.id,a=n.poster_path,c=n.title,i=n.release_date,u=n.vote_average,o=n.overview,l=n.genres,p=U(i),j=l.map((function(e){return e.name})).join(", "),S({id:r,poster_path:a,title:c,year:p,vote_average:u,overview:o,parseGenres:j}),e.next=12;break;case 11:throw new Error("Error - "+t.status);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[E]);var z=G.poster_path,A=G.title,C=G.year,F=G.vote_average,I=G.overview,J=G.parseGenres;return Object(f.jsx)(f.Fragment,{children:G&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{type:"button",onClick:function(){var e,t,n;b.push(null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/")},children:null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.label)&&void 0!==e?e:"GoBack"}),Object(f.jsx)(h,{src:"https://image.tmdb.org/t/p/w500"+z,alt:A}),Object(f.jsxs)("h2",{children:[A," (",C,")"]}),Object(f.jsxs)("p",{children:["User Score: ",10*F," %"]}),Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:I}),Object(f.jsx)("h3",{children:"Genres"}),Object(f.jsxs)("span",{children:[" ",J]}),Object(f.jsx)("hr",{}),Object(f.jsx)("h1",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(p.c,{to:{pathname:"".concat(w,"/cast"),state:{from:null!==(r=null===m||void 0===m||null===(a=m.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/"}},children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(p.c,{to:{pathname:"".concat(w,"/reviews"),state:{from:null!==(c=null===m||void 0===m||null===(j=m.state)||void 0===j?void 0:j.from)&&void 0!==c?c:"/"}},children:"Reviews"})})]}),Object(f.jsxs)(o.Suspense,{fallback:Object(f.jsx)("h1",{children:"LOADING..."}),children:[Object(f.jsx)(l.a,{path:"".concat(k,"/cast"),children:Object(f.jsx)(O,{})}),Object(f.jsx)(l.a,{path:"".concat(k,"/reviews"),children:Object(f.jsx)(x,{})})]}),Object(f.jsx)("hr",{})]})})}}}]);
//# sourceMappingURL=MovieDetail-page.516a9c6e.chunk.js.map