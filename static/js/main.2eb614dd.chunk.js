(this["webpackJsonpcoursework-table"]=this["webpackJsonpcoursework-table"]||[]).push([[0],{130:function(e,a,t){e.exports=t(158)},158:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(10),l=t.n(r),o=t(15),u=t(12),i=t(189),s=t(193),m=t(194),d=(t(221),t(31)),p=t(33),E=t(197),f=t(227),b=t(195),h=t(112),v=t(200),g=t(228),O=t(196),y=t(226),j=t(69),k=t.n(j),w=t(70),S=t.n(w),C=Object(O.a)((function(e){return Object(y.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},title:{flex:"1 1 100%"},upload:{display:"none"}})})),x=function(){var e=C(),a=Object(n.useState)(null),t=Object(d.a)(a,2),r=t[0],l=t[1],o=Boolean(r),u=function(){l(null)};return c.a.createElement(E.a,{className:e.root},c.a.createElement(f.a,{title:"Power BI"},c.a.createElement(p.b,{to:"power_bi"},c.a.createElement(b.a,{"aria-label":"analysis"},c.a.createElement(k.a,null)))),c.a.createElement(f.a,{title:"Add"},c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{onClick:function(e){l(e.currentTarget)},"aria-controls":"fade-menu","aria-haspopup":"true","aria-label":"add"},c.a.createElement(S.a,null)),c.a.createElement(h.a,{id:"fade-menu",anchorEl:r,keepMounted:!0,open:o,onClose:u,TransitionComponent:v.a},c.a.createElement("input",{id:"upload",className:e.upload,type:"file",accept:".csv"}),c.a.createElement("label",{htmlFor:"upload"},c.a.createElement(g.a,{onClick:u},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c CSV")),c.a.createElement(g.a,{onClick:u},"\u0418\u0437 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430")))))},N=t(13),T=t(4),_=t(159),P=t(201),I=t(202),R=t(203),z=t(222),W=t(224),L=Object(O.a)({root:{width:"100%",maxWidth:"1000px",margin:"0 auto"},container:{maxHeight:"580px",height:"calc(100vh - 230px)"},row:{cursor:"pointer"},header:{fontWeight:700},pagination:{backgroundColor:"rgb(161, 52, 60)",color:"white"},textField:{width:"80px"}}),F=Object(O.a)({underline:{"&&&:before":{borderBottom:"none"}}}),H=function(e){var a=e.rows,t=e.columns,n=e.link,r=void 0===n?"":n,l=e.hover,u=void 0===l||l,p=L(),E=F(),f=c.a.useState(0),b=Object(d.a)(f,2),h=b[0],v=b[1],g=c.a.useState(10),O=Object(d.a)(g,2),y=O[0],j=O[1],k=Object(o.f)();return c.a.createElement(_.a,{className:p.root},c.a.createElement(P.a,{className:p.container},c.a.createElement(x,null),c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:p.header},t.map((function(e){return c.a.createElement(m.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),c.a.createElement(R.a,null,a.slice(h*y,h*y+y).map((function(e){return c.a.createElement(s.a,{hover:u,className:u?p.row:"",role:"checkbox",tabIndex:-1,key:e.id,onClick:u?function(){return function(e){var a=k.location.pathname;/\/schemes$/gm.test(a)?k.push("".concat(a,"/").concat(e,"/wishes")):k.push("/".concat(e,"/").concat(r))}(e.id)}:void 0},t.map((function(t,n){var r=e[t.id]||0;return t.editable?c.a.createElement(m.a,{key:t.id,align:t.align},c.a.createElement(z.a,{id:"".concat(t.id,"_").concat(n),type:"number",defaultValue:r,color:"secondary",className:p.textField,onChange:function(e){return function(e,t,n){a[t]=Object(T.a)(Object(T.a)({},a[t]),{},Object(N.a)({},n,""+ +e.target.value))}(e,n,t.id)},InputProps:{classes:E}})):c.a.createElement(m.a,{key:t.id,align:t.align},t.format?t.format(r):r)})))}))))),c.a.createElement(W.a,{className:p.pagination,rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:y,page:h,onChangePage:function(e,a){v(a)},onChangeRowsPerPage:function(e){j(+e.target.value),v(0)}}))},U=t(5),V=t(52),A=t(207),B=t(208),G=t(225),M=t(3),D=t(100),Y=t.n(D),J=t(72),Z=t.n(J),$=t(101),q=t.n($);function X(){return(X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function Q(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var K=c.a.createElement("g",null,c.a.createElement("rect",{fill:"none",height:24,width:24})),ee=c.a.createElement("g",null,c.a.createElement("g",null,c.a.createElement("rect",{height:8.48,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -6.8717 17.6255)",width:3,x:16.34,y:12.87}),c.a.createElement("path",{d:"M17.5,10c1.93,0,3.5-1.57,3.5-3.5c0-0.58-0.16-1.12-0.41-1.6l-2.7,2.7L16.4,6.11l2.7-2.7C18.62,3.16,18.08,3,17.5,3 C15.57,3,14,4.57,14,6.5c0,0.41,0.08,0.8,0.21,1.16l-1.85,1.85l-1.78-1.78l0.71-0.71L9.88,5.61L12,3.49 c-1.17-1.17-3.07-1.17-4.24,0L4.22,7.03l1.41,1.41H2.81L2.1,9.15l3.54,3.54l0.71-0.71V9.15l1.41,1.41l0.71-0.71l1.78,1.78 l-7.41,7.41l2.12,2.12L16.34,9.79C16.7,9.92,17.09,10,17.5,10z"}))),ae=function(e){var a=e.svgRef,t=e.title,n=Q(e,["svgRef","title"]);return c.a.createElement("svg",X({enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:a},n),t?c.a.createElement("title",null,t):null,K,ee)},te=c.a.forwardRef((function(e,a){return c.a.createElement(ae,X({svgRef:a},e))}));t.p;function ne(){return(ne=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function ce(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var re=c.a.createElement("g",null,c.a.createElement("rect",{fill:"none",height:24,width:24})),le=c.a.createElement("g",null,c.a.createElement("path",{d:"M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z"})),oe=function(e){var a=e.svgRef,t=e.title,n=ce(e,["svgRef","title"]);return c.a.createElement("svg",ne({enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:a},n),t?c.a.createElement("title",null,t):null,re,le)},ue=c.a.forwardRef((function(e,a){return c.a.createElement(oe,ne({svgRef:a},e))})),ie=(t.p,t(102)),se=t.n(ie),me=t(73),de=t.n(me),pe=t(103),Ee=t.n(pe),fe=t(160),be=Object(U.a)({alternativeLabel:{top:22},active:{"& $line":{backgroundColor:"#a1343c"}},completed:{"& $line":{backgroundColor:"#a1343c"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(fe.a),he=Object(O.a)({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundColor:"#a1343c",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundColor:"#a1343c"}}),ve=function(){var e=Object(u.c)((function(e){return e.steps.step})),a=["\u041c\u043e\u0434\u0435\u043b\u0438","\u041f\u0440\u043e\u0434\u0430\u0436\u0438","\u0417\u0430\u043a\u0443\u043f\u043a\u0438","\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e","\u0420\u0430\u0441\u0447\u0451\u0442","\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435","\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0430","\u0411\u044e\u0434\u0436\u0435\u0442"];function t(e){var a,t=he(),n=e.active,r=e.completed,l={1:c.a.createElement(Y.a,null),2:c.a.createElement(Z.a,null),3:c.a.createElement(q.a,null),4:c.a.createElement(V.a,{component:te,viewBox:"0 0 24 24"}),5:c.a.createElement(V.a,{component:ue,viewBox:"0 0 24 24"}),6:c.a.createElement(se.a,null),7:c.a.createElement(de.a,null),8:c.a.createElement(Ee.a,null)};return c.a.createElement("div",{className:Object(M.a)(t.root,(a={},Object(N.a)(a,t.active,n),Object(N.a)(a,t.completed,r),a))},l[String(e.icon)])}return c.a.createElement("div",null,c.a.createElement(A.a,{alternativeLabel:!0,activeStep:e,connector:c.a.createElement(be,null)},a.map((function(e){return c.a.createElement(B.a,{key:e},c.a.createElement(G.a,{StepIconComponent:t},e))}))))},ge=Object(U.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(f.a),Oe=function(e){return c.a.createElement(ge,e)},ye=t(23),je=t.n(ye),ke="http://89.175.186.74:5002",we=function(){return function(e){je.a.get("".concat(ke,"/").concat("api/v1","/model_list")).then((function(a){var t=a.data.models;return e(Se(t))}))}},Se=function(e){return{type:"SET_MODELS",payload:e}},Ce=function(e){return{type:"SET_STEP",payload:e}},xe=t(206),Ne=t(104),Te=t.n(Ne),_e=Object(O.a)({root:{width:"100%",maxWidth:"1000px",margin:"0 auto"},container:{maxHeight:"580px",height:"calc(100vh - 150px)"},row:{cursor:"pointer"},subrow:{paddingLeft:"50px"},emptyCell:{width:"48px",padding:0},header:{fontWeight:700},pagination:{backgroundColor:"rgb(161, 52, 60)",color:"white"},textField:{width:"80px"},input:{width:"100px"},toolBar:{display:"flex",justifyContent:"space-between"}}),Pe=[{id:"name",label:"\u041a\u043b\u0438\u0435\u043d\u0442"},{id:"month",label:"\u041c\u0435\u0441\u044f\u0446"},{id:"stage",align:"right",label:"\u0421\u0442\u0430\u0434\u0438\u044f"},{id:"num",align:"right",label:"\u041f\u043e\u0437\u0438\u0446\u0438\u0439"},{id:"profit",align:"right",label:"\u041f\u0440\u0438\u0431\u044b\u043b\u044c (\u0442\u044b\u0441. \u0440\u0443\u0431.)"}],Ie=function(e){return e.models.models};function Re(){var e=_e(),a=Object(u.b)(),t=Object(u.c)(Ie);Object(n.useEffect)((function(){a(Ce(0)),a(we())}),[a]);var r=Object(o.f)();return c.a.createElement(_.a,{className:e.root},c.a.createElement(P.a,{className:e.container},c.a.createElement(E.a,{className:e.toolBar},c.a.createElement(xe.a,{variant:"h6",component:"h2"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"),c.a.createElement("div",{className:"right-side"},c.a.createElement(Oe,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"},c.a.createElement(b.a,{color:"secondary","aria-label":"add model"},c.a.createElement(S.a,null))),c.a.createElement(Oe,{title:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"},c.a.createElement(b.a,{color:"secondary","aria-label":"Power BI",onClick:function(){r.push("/power_bi")}},c.a.createElement(k.a,null))))),c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:e.header},c.a.createElement(m.a,{align:"center"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),Pe.map((function(e){return c.a.createElement(m.a,{key:e.id,align:e.align},e.label)})))),c.a.createElement(R.a,null,t.map((function(e){return c.a.createElement(s.a,{key:e.id},c.a.createElement(m.a,null,c.a.createElement(Oe,{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(xe.a,{color:"inherit"},"\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432\u0441\u0435 schemes \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438")},c.a.createElement(b.a,{color:"secondary","aria-label":"go to all schemes for model",onClick:function(){return a=e.id,void r.push("/".concat(a,"/schemes"));var a}},c.a.createElement(Te.a,null))),c.a.createElement(Oe,{title:c.a.createElement(c.a.Fragment,null,"\u0428\u0430\u0433 \u21162")},c.a.createElement(b.a,{onClick:function(){return a=e.id,void r.push("/".concat(a,"/wishes"));var a},color:"secondary","aria-label":"go to step 2"},c.a.createElement(Z.a,null)))),Pe.map((function(a){var t=e[a.id]||0;return c.a.createElement(m.a,{key:a.id,align:a.align},t)})))}))))))}var ze=function(){var e=Object(u.b)();return Object(n.useEffect)((function(){e(Ce(5))}),[e]),c.a.createElement("div",{className:"power-BI"},c.a.createElement("iframe",{title:"Power BI",style:{position:"absolute",width:"100%",height:"90vh",border:"none"},src:"https://app.powerbi.com/view?r=eyJrIjoiODYwYjBhOGMtZTIzYS00ZDJkLTk1MTEtNTk3Nzk4YTE2ZjUzIiwidCI6IjJhZTk1YzIwLWM2NzUtNGM0OC04OGQzLWYyNzZiNzYyYmY1MiIsImMiOjl9",allowFullScreen:!0}))},We=function(e){return{type:"SET_SCHEMES",payload:e}},Le=function(e){var a=e.match,t=Object(u.b)(),r=+a.params.id,l=Object(u.c)((function(e){return e.schemes.schemes}));return Object(n.useEffect)((function(){t(function(e){return function(a){je.a.get("".concat(ke,"/").concat("api/v1","/").concat(e,"/schemes")).then((function(e){var t=e.data.schemes;return a(We(t))}))}}(r))}),[t,r]),c.a.createElement(H,{rows:l,columns:[{id:"id",label:"\u2116"},{id:"ts",label:"\u0414\u0430\u0442\u0430"},{id:"profit",align:"right",label:"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"},{id:"type",align:"right",label:"\u0422\u0438\u043f"}]})},Fe=t(48),He=function(e){return{type:"SET_WISHES",payload:e}},Ue=function(e){return{type:"SET_WISHES_STATUS",payload:e}},Ve=t(108),Ae=t.n(Ve),Be=t(109),Ge=t.n(Be),Me=t(105),De=t.n(Me),Ye=t(106),Je=t.n(Ye),Ze=t(107),$e=t.n(Ze),qe=t(81),Xe=t.n(qe),Qe=t(80),Ke=t.n(Qe),ea=function(e){return e.wishes},aa=function(e){var a=e.match,t=_e(),r=Object(u.b)(),l=+a.params.id;Object(n.useEffect)((function(){r(Ce(1)),r(function(e){return function(a){je.a.get("".concat(ke,"/").concat("api/v1","/").concat(e,"/wishes")).then((function(e){var t=e.data,n=t.products,c=t.scheme;return a(He({wishes:n,scheme:c}))}))}}(l))}),[r,l]);var p=Object(u.c)(ea),f=p.wishes,h=p.status,v=p.scheme,g=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];r(Ue(a))},O=Object(n.useState)({}),y=Object(d.a)(O,2),j=y[0],k=y[1],w=function(e,a,t){var n=e.value;k(Object(T.a)(Object(T.a)({},j),{},Object(N.a)({},a,Object(T.a)(Object(T.a)({},j[a]),{},Object(N.a)({},t,n)))))},S=function(e){var a=Object(T.a)({},j);delete a[e],k(a)},C=Object(o.f)();return c.a.createElement(_.a,{className:t.root},c.a.createElement(P.a,{className:t.container},c.a.createElement(E.a,{className:t.toolBar},c.a.createElement("div",{className:"left-side"},c.a.createElement(Oe,{title:"\u041c\u043e\u0434\u0435\u043b\u0438"},c.a.createElement(b.a,{color:"secondary","aria-label":"back",onClick:function(){C.push("/")}},c.a.createElement(De.a,null)))),c.a.createElement(xe.a,{variant:"h6",component:"h2"},"\u0412\u0432\u043e\u0434 \u043f\u043b\u0430\u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436 \u0433\u043e\u0442\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438"),c.a.createElement("div",{className:"right-side"},c.a.createElement(Oe,{title:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f"},c.a.createElement(b.a,{color:"secondary","aria-label":"not save",onClick:function(){C.push("/".concat(l,"/schemes/").concat(v,"/purchase"))}},c.a.createElement(Je.a,null))),c.a.createElement(Oe,{title:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e"},c.a.createElement(b.a,{color:"secondary","aria-label":"calculate",onClick:function(){alert("\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e")}},c.a.createElement($e.a,null))))),c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:t.header},c.a.createElement(m.a,{className:t.emptyCell}),c.a.createElement(m.a,{className:t.emptyCell}),c.a.createElement(m.a,null,"\u2116"),c.a.createElement(m.a,null,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438"),c.a.createElement(m.a,{style:{minWidth:150}},"\u041e\u0431\u044a\u0435\u043c, \u0442"),c.a.createElement(m.a,{style:{minWidth:150}},"\u0426\u0435\u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0440\u0443\u0431/\u043a\u0433"),c.a.createElement(m.a,{align:"center"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),c.a.createElement(R.a,null,Object.keys(f).map((function(e){return c.a.createElement(c.a.Fragment,{key:e},c.a.createElement(s.a,null,c.a.createElement(m.a,{style:{fontWeight:"bold",cursor:"pointer"},colSpan:4,onClick:function(){return g(e)}},c.a.createElement(b.a,{style:{marginRight:16},color:"secondary",size:"small"},h[e].status?c.a.createElement(Ke.a,null):c.a.createElement(Xe.a,null)),c.a.createElement("span",null,"\u041a\u043e\u0434: ",c.a.createElement("span",{style:{fontWeight:400}},e))),c.a.createElement(m.a,{style:{fontWeight:700},align:"left"},+f[e].amount.toFixed(8)),c.a.createElement(m.a,{style:{fontWeight:700},align:"left"},+f[e].averagePrice.toFixed(8)),c.a.createElement(m.a,null)),h[e].status&&Object.keys(f[e].values).map((function(a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement(s.a,null,c.a.createElement(m.a,null),c.a.createElement(m.a,{colSpan:3,style:{fontWeight:"bold",cursor:"pointer"},onClick:function(){return g(e,a)}},c.a.createElement(b.a,{size:"small",color:"secondary",style:{marginRight:16}},h[e][a].status?c.a.createElement(Ke.a,null):c.a.createElement(Xe.a,null)),c.a.createElement("span",null,"\u041a\u043e\u0434:"," ",c.a.createElement("span",{style:{fontWeight:400}},a))),c.a.createElement(m.a,{align:"left"},+f[e].values[a].amount.toFixed(8)),c.a.createElement(m.a,{align:"left"},+f[e].values[a].averagePrice.toFixed(8)),c.a.createElement(m.a,null)),h[e][a].status&&f[e].values[a].values.map((function(n,l){return c.a.createElement(s.a,{key:"".concat(a,"_").concat(l)},c.a.createElement(m.a,null),c.a.createElement(m.a,null),c.a.createElement(m.a,null,n.code),c.a.createElement(m.a,null,n.name),j.hasOwnProperty(n.id)?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(Fe.a,{value:j[n.id][0],onValueChange:function(e){var a=e.value;return w({value:a},n.id,0)},thousandSeparator:" ",customInput:z.a,InputProps:{color:"secondary",size:"small",className:t.input}})),c.a.createElement(m.a,null,c.a.createElement(Fe.a,{value:j[n.id][1],onValueChange:function(e){var a=e.value;return w({value:a},n.id,1)},thousandSeparator:" ",suffix:"\u20bd",customInput:z.a,InputProps:{color:"secondary",size:"small",className:t.input}}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{style:{color:"rgba(0, 0, 0, 0.5)"}},+n.amount),c.a.createElement(m.a,{style:{color:"rgba(0, 0, 0, 0.5)"}},n.price)),j.hasOwnProperty(n.id)?c.a.createElement(m.a,{align:"center"},c.a.createElement(b.a,{onClick:function(){return function(e,a,t,n){var c={key1:a,key2:t,amount:j[e][0],price:j[e][1],index:n};r(function(e){return{type:"SAVE_WISHES",payload:e}}(c)),S(e)}(n.id,e,a,l)},size:"small",color:"secondary"},c.a.createElement(Ae.a,null)),c.a.createElement(b.a,{onClick:function(){return S(n.id)},size:"small",color:"secondary"},c.a.createElement(Ge.a,null))):c.a.createElement(m.a,{align:"center"},c.a.createElement(b.a,{onClick:function(){return function(e,a,t){k(Object(T.a)(Object(T.a)({},j),{},Object(N.a)({},e,{0:a,1:t})))}(n.id,n.amount,""+n.price)},size:"small",color:"secondary"},c.a.createElement(de.a,null))))})))})))}))))))},ta=function(e){return{type:"SET_PURCHASE",payload:e}},na=t(209),ca=t(210),ra=t(211),la=t(212),oa=t(213),ua=t(214),ia=t(215),sa=[{id:"name",label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"},{id:"amount",label:"\u0417\u0430\u043a\u0443\u043f\u043a\u0430, \u0442"},{id:"price",label:"\u0426\u0435\u043d\u0430, \u0440\u0443\u0431/\u043a\u0433"}],ma=function(e){var a=e.model,t=e.scheme,n=_e(),r=Object(o.f)();return c.a.createElement(E.a,{className:n.toolBar},c.a.createElement("div",{className:"left-side"},c.a.createElement(Oe,{title:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"},c.a.createElement(b.a,{color:"secondary","aria-label":"back",onClick:function(){r.push("/".concat(a,"/wishes"))}},c.a.createElement(na.a,null)))),c.a.createElement(xe.a,{variant:"h6",component:"h2"},"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043e\u043a"),c.a.createElement("div",{className:"right-side"},c.a.createElement(Oe,{title:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f"},c.a.createElement(b.a,{color:"secondary","aria-label":"refuse",onClick:function(){alert("\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f")}},c.a.createElement(ca.a,null))),c.a.createElement(Oe,{title:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e"},c.a.createElement(b.a,{color:"secondary","aria-label":"calculate",onClick:function(){alert("\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e")}},c.a.createElement(ra.a,null))),c.a.createElement(Oe,{title:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"},c.a.createElement(b.a,{color:"primary","aria-label":"accept",onClick:function(){r.push("/".concat(a,"/schemes/").concat(t,"/production"))}},c.a.createElement(la.a,null)))))},da=function(e){return e.purchase.purchase},pa=function(e){var a=e.match,t=_e(),r=Object(u.b)(),l=a.params,o=l.id,p=l.id2,E=Object(u.c)(da);Object(n.useEffect)((function(){r(Ce(2)),r(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){je.a.get("".concat(ke,"/").concat("api/v1","/").concat(e,"/schemes/").concat(a,"/purchase/0")).then((function(e){var a=e.data.products;return t(ta(a))}))}}(o,p))}),[r,o,p]);var f=Object(n.useState)({}),h=Object(d.a)(f,2),v=h[0],g=h[1],O=function(e){var a=Object(T.a)({},v);delete a[e],g(a)};return c.a.createElement(_.a,{className:t.root},c.a.createElement(P.a,{className:t.container},c.a.createElement(ma,{model:o,scheme:p}),c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:t.header},sa.map((function(e){return c.a.createElement(m.a,{key:e.id,align:e.align},e.label)})),c.a.createElement(m.a,{align:"center"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"))),c.a.createElement(R.a,null,E.map((function(e,a){var n=e.id,l=e.name,o=e.amount,u=e.price;return c.a.createElement(s.a,{key:n},c.a.createElement(m.a,null,l),c.a.createElement(m.a,null,o),v.hasOwnProperty(n)?c.a.createElement(m.a,null,c.a.createElement(Fe.a,{value:v[n],thousandSeparator:" ",customInput:z.a,suffix:"\u20bd",InputProps:{color:"secondary",size:"small",className:t.input},onValueChange:function(e){return function(e,a){var t=e.value;g(Object(T.a)(Object(T.a)({},v),{},Object(N.a)({},a,t)))}({value:e.value},n)}})):c.a.createElement(m.a,null,u),v.hasOwnProperty(n)?c.a.createElement(m.a,{align:"center"},c.a.createElement(b.a,{size:"small",color:"secondary",onClick:function(){return function(e,a){var t={index:a,price:+v[e]};r(function(e){return{type:"SAVE_PURCHASE",payload:e}}(t)),O(e)}(n,a)}},c.a.createElement(oa.a,null)),c.a.createElement(b.a,{size:"small",color:"secondary",onClick:function(){return O(n)}},c.a.createElement(ua.a,null))):c.a.createElement(m.a,{align:"center"},c.a.createElement(b.a,{size:"small",color:"secondary",onClick:function(){return function(e,a){g(Object(T.a)(Object(T.a)({},v),{},Object(N.a)({},e,a)))}(n,""+u)}},c.a.createElement(ia.a,null))))}))))))},Ea=function(e){return{type:"SET_PRODUCTION",payload:e}},fa=function(e){return{type:"SET_PRODUCTION_STATUS",payload:e}},ba=t(216),ha=t(217),va=function(e){return e.production},ga=function(e){var a=e.model,t=e.scheme,n=_e(),r=Object(o.f)();return c.a.createElement(E.a,{className:n.toolBar},c.a.createElement("div",{className:"left-side"},c.a.createElement(Oe,{title:"\u0417\u0430\u043a\u0443\u043f\u043a\u0438"},c.a.createElement(b.a,{color:"secondary","aria-label":"back",onClick:function(){r.push("/".concat(a,"/schemes/").concat(t,"/purchase"))}},c.a.createElement(na.a,null)))),c.a.createElement(xe.a,{variant:"h6",component:"h2"},"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043b\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430"),c.a.createElement("div",{className:"right-side"},c.a.createElement(Oe,{title:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f"},c.a.createElement(b.a,{color:"secondary","aria-label":"refuse",onClick:function(){alert("\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f")}},c.a.createElement(ca.a,null))),c.a.createElement(Oe,{title:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"},c.a.createElement(b.a,{color:"primary","aria-label":"accept",onClick:function(){r.push("/".concat(a,"/schemes/").concat(t,"/launch"))}},c.a.createElement(la.a,null)))))},Oa=function(e){var a=e.match,t=_e(),r=Object(u.b)(),l=a.params,o=l.id,d=l.id2;Object(n.useEffect)((function(){r(Ce(3)),r(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){je.a.get("".concat(ke,"/").concat("api/v1","/").concat(e,"/schemes/").concat(a,"/production/0")).then((function(e){var a=e.data.products;return t(Ea(a))}))}}(o,d))}),[r,o,d]);var p=Object(u.c)(va),E=p.production,f=p.status,h=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];r(fa(a))};return c.a.createElement(_.a,{className:t.root},c.a.createElement(P.a,{className:t.container},c.a.createElement(ga,{model:o,scheme:d}),c.a.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:t.header},c.a.createElement(m.a,{className:t.emptyCell}),c.a.createElement(m.a,{className:t.emptyCell}),c.a.createElement(m.a,{style:{width:100}},"\u2116"),c.a.createElement(m.a,{style:{width:400}},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f"),c.a.createElement(m.a,{style:{minWidth:150}},"\u041e\u0431\u044a\u0435\u043c, \u0442"))),c.a.createElement(R.a,null,Object.keys(E).map((function(e){return c.a.createElement(c.a.Fragment,{key:e},c.a.createElement(s.a,null,c.a.createElement(m.a,{style:{fontWeight:"bold",cursor:"pointer"},colSpan:4,onClick:function(){return h(e)}},c.a.createElement(b.a,{style:{marginRight:16},color:"secondary",size:"small"},f[e].status?c.a.createElement(ba.a,null):c.a.createElement(ha.a,null)),c.a.createElement("span",null,"\u041a\u043e\u0434: ",c.a.createElement("span",{style:{fontWeight:400}},e))),c.a.createElement(m.a,{style:{fontWeight:700},align:"left"},+E[e].amount.toFixed(8))),f[e].status&&Object.keys(E[e].values).map((function(a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement(s.a,null,c.a.createElement(m.a,null),c.a.createElement(m.a,{colSpan:3,style:{fontWeight:"bold",cursor:"pointer"},onClick:function(){return h(e,a)}},c.a.createElement(b.a,{size:"small",color:"secondary",style:{marginRight:16}},f[e][a].status?c.a.createElement(ba.a,null):c.a.createElement(ha.a,null)),c.a.createElement("span",null,"\u041a\u043e\u0434:"," ",c.a.createElement("span",{style:{fontWeight:400}},a))),c.a.createElement(m.a,{align:"left"},+E[e].values[a].amount.toFixed(8))),f[e][a].status&&E[e].values[a].values.map((function(e,t){return c.a.createElement(s.a,{key:"".concat(a,"_").concat(t)},c.a.createElement(m.a,null),c.a.createElement(m.a,null),c.a.createElement(m.a,null,e.code),c.a.createElement(m.a,null,e.name),c.a.createElement(m.a,{style:{color:"rgba(0, 0, 0, 0.5)"}},+e.amount))})))})))}))))))},ya=t(113),ja=t(218),ka=t(219);function wa(e){var a=e.inputRef,t=e.onChange,n=Object(ya.a)(e,["inputRef","onChange"]);return c.a.createElement(Fe.a,Object.assign({},n,{getInputRef:a,onValueChange:function(e){t({target:{value:e.value}})},thousandSeparator:" "}))}var Sa=function(){var e=_e(),a=Object(u.b)();Object(n.useEffect)((function(){a(Ce(4))}),[a]);var t=new Intl.NumberFormat("ru"),r=Object(n.useState)({value:"100",formattedValue:t.format(100)}),l=Object(d.a)(r,2),i=l[0],s=l[1],m=Object(n.useState)("10"),p=Object(d.a)(m,2),E=p[0],f=p[1],b=Object(o.f)();return c.a.createElement("div",{className:e.root},c.a.createElement(ja.a,{container:!0,spacing:3},c.a.createElement(ja.a,{item:!0,xs:12,sm:12},c.a.createElement(xe.a,{variant:"h5",component:"h2"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f")),c.a.createElement(ja.a,{item:!0,xs:12,sm:6},c.a.createElement(z.a,{id:"count",name:"count",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0442\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439",value:i.formattedValue,onChange:function(e){return function(e){var a=e.target.value.replace(/\s/g,"");console.log(a),/^[0-9]*$/.test(a)&&s({value:a,formattedValue:a?t.format(+a):""})}(e)},color:"secondary",required:!0,fullWidth:!0})),c.a.createElement(ja.a,{item:!0,xs:12,sm:6},c.a.createElement(z.a,{id:"interval",name:"interval",defaultValue:"10",value:E,onChange:function(e){f(e.target.value)},color:"secondary",label:"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043c\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 (+/- \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432)",InputProps:{inputComponent:wa},required:!0,fullWidth:!0})),c.a.createElement(ja.a,{item:!0,xs:3,sm:6},c.a.createElement(ka.a,{color:"secondary",onClick:function(){alert("\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e!"),b.push("/power_bi")}},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"))))},Ca=function(e){return{type:"SET_PRODUCTS",payload:e}},xa=[{id:"code",label:"\u041a\u043e\u0434"},{id:"name",label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435\xa0\u043f\u043e\u0437\u0438\u0446\u0438\u0438"},{id:"amount",label:"\u041e\u0431\u044a\u0435\u043c,\xa0\u0442",editable:!0},{id:"price",label:"\u0426\u0435\u043d\u0430,\xa0\u0440\u0443\u0431/\u043a\u0433",editable:!0},{id:"curr_rent",label:"\u0420\u0435\u043d\u0442-\u0441\u0442\u044c,\xa0%",align:"right",format:function(e){return(+(+e).toFixed(2)).toLocaleString("ru-RU")}},{id:"last_volume",label:"\u041e\u0431\u044a\u0435\u043c,\xa0\u0442",align:"right",format:function(e){return(+e).toLocaleString("ru-RU")}},{id:"last_price",label:"\u0426\u0435\u043d\u0430,\xa0\u0440\u0443\u0431/\u043a\u0433",align:"right",format:function(e){return(+e).toLocaleString("ru-RU")}},{id:"last_rent",label:"\u0420\u0435\u043d\u0442-\u0441\u0442\u044c,\xa0%",align:"right",format:function(e){return(+(+e).toFixed(2)).toLocaleString("ru-RU")}}],Na=function(e){var a=e.match,t=Object(u.b)(),r=a.params,l=r.id,o=r.id2,i=Object(u.c)((function(e){return e.products.products}));return Object(n.useEffect)((function(){t(Ce(6)),t(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){je.a.get("".concat(ke,"/").concat("api/v1","/").concat(e,"/schemes/").concat(a,"/wishes")).then((function(e){var a=e.data.products;return t(Ca(a))}))}}(l,o))}),[t,l,o]),c.a.createElement(H,{rows:i,columns:xa,hover:!1})},Ta=t(111),_a=t(220),Pa=Object(Ta.a)({palette:{primary:{main:"#4caf50"},secondary:{main:"rgb(161, 52, 60)"}}}),Ia=function(){return c.a.createElement(_a.a,{theme:Pa},c.a.createElement(ve,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:Re}),c.a.createElement(o.a,{exact:!0,path:"/power_bi",component:ze}),c.a.createElement(o.a,{exact:!0,path:"/:id/schemes",component:Le}),c.a.createElement(o.a,{exact:!0,path:"/:id/wishes",component:aa}),c.a.createElement(o.a,{exact:!0,path:"/:id/schemes/:id2/purchase",component:pa}),c.a.createElement(o.a,{exact:!0,path:"/:id/schemes/:id2/production",component:Oa}),c.a.createElement(o.a,{exact:!0,path:"/:id/schemes/:id2/launch",component:Sa}),c.a.createElement(o.a,{exact:!0,path:"/:id/schemes/:id2/wishes",component:Na})))},Ra=t(40),za={models:[]},Wa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:za,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MODELS":return Object(T.a)(Object(T.a)({},e),{},{models:a.payload});default:return Object(T.a)({},e)}},La={schemes:[]},Fa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:La,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SCHEMES":return Object(T.a)(Object(T.a)({},e),{},{schemes:a.payload});default:return Object(T.a)({},e)}},Ha=t(74),Ua={wishes:{},status:{},scheme:1315},Va=/^([0-9][0-9]*)\./,Aa=/^([0-9][0-9]*\.[0-9]*)/,Ba=function(e){var a=e.map((function(e){var a=e.code.match(Va)[1]||"all",t=e.code.match(Aa)[1]||"all";return Object(T.a)(Object(T.a)({},e),{},{firstGroup:a,secondGroup:t})})).reduce((function(e,a){return e[a.firstGroup]=e[a.firstGroup]||{values:[]},e[a.firstGroup].values.push(a),e}),Object.create(null));return Object.keys(a).forEach((function(e){a[e].values=a[e].values.reduce((function(e,a){return e[a.secondGroup]=e[a.secondGroup]||{values:[]},e[a.secondGroup].values.push(a),e}),Object.create(null))})),a},Ga=function(e){return e.reduce((function(e,a){return e.mult+=a.price*+a.amount,e.price+=a.price,e.amount+=+a.amount,e}),{amount:0,price:0,mult:0})},Ma=function(e){return Object.keys(e).forEach((function(a){Object.keys(e[a].values).forEach((function(t){var n=Ga(e[a].values[t].values),c=n.amount,r=n.price,l=n.mult;e[a].values[t]={values:e[a].values[t].values,price:r,amount:c,averagePrice:c?l/c:0}}));var t=Object.keys(e[a].values).map((function(t){var n=e[a].values[t];return{amount:n.amount,price:n.averagePrice}})),n=Ga(t),c=n.amount,r=n.price,l=n.mult;e[a]={values:e[a].values,price:r,amount:c,averagePrice:l/c}})),e},Da=function e(a){var t={status:!1};if(!Array.isArray(a))for(var n in a)t=Object(T.a)(Object(T.a)({},t),{},Object(N.a)({},n,e(a[n].values)));return t},Ya=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ua,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_WISHES":var t=a.payload,n=t.wishes,c=t.scheme,r=Ba(n),l=Da(r),o=Ma(r);return Object(T.a)(Object(T.a)({},e),{},{wishes:o,status:l,scheme:c});case"SET_WISHES_STATUS":var u=a.payload;return 2===u.length?Object(T.a)(Object(T.a)({},e),{},{status:Object(T.a)(Object(T.a)({},e.status),{},Object(N.a)({},u[0],Object(T.a)(Object(T.a)({},e.status[u[0]]),{},Object(N.a)({},u[1],{status:!e.status[u[0]][u[1]].status}))))}):1===u.length?Object(T.a)(Object(T.a)({},e),{},{status:Object(T.a)(Object(T.a)({},e.status),{},Object(N.a)({},u[0],Object(T.a)(Object(T.a)({},e.status[u[0]]),{},{status:!e.status[u[0]].status})))}):Object(T.a)({},e);case"SAVE_WISHES":var i=a.payload,s=i.key1,m=i.key2,d=i.amount,p=i.price,E=i.index,f=e.wishes[s].values[m].values,b=Object(Ha.a)(f),h=b[E],v=h.amount,g=h.price;if(d===v&&""+g===p)return Object(T.a)({},e);var O=Object(T.a)({},e.wishes),y=O[s].values[m].values[E];return y.price=+p,y.amount=d,Object(T.a)(Object(T.a)({},e),{},{wishes:Ma(O)});default:return Object(T.a)({},e)}},Ja={purchase:[]},Za=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ja,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PURCHASE":return Object(T.a)(Object(T.a)({},e),{},{purchase:a.payload});case"SAVE_PURCHASE":var t=Object(Ha.a)(e.purchase),n=a.payload,c=n.index,r=n.price;return t[c].price=r,Object(T.a)(Object(T.a)({},e),{},{purchase:t});default:return Object(T.a)({},e)}},$a={production:{},status:{}},qa=/^([0-9][0-9]*)\./,Xa=/^([0-9][0-9]*\.[0-9]*)/,Qa=function(e){var a=e.map((function(e){var a=e.code.match(qa)[1]||"all",t=e.code.match(Xa)[1]||"all";return Object(T.a)(Object(T.a)({},e),{},{firstGroup:a,secondGroup:t})})).reduce((function(e,a){return e[a.firstGroup]=e[a.firstGroup]||{values:[]},e[a.firstGroup].values.push(a),e}),Object.create(null));return Object.keys(a).forEach((function(e){a[e].values=a[e].values.reduce((function(e,a){return e[a.secondGroup]=e[a.secondGroup]||{values:[]},e[a.secondGroup].values.push(a),e}),Object.create(null))})),a},Ka=function(e){return e.reduce((function(e,a){return e+=+a.amount}),0)},et=function(e){return Object.keys(e).forEach((function(a){Object.keys(e[a].values).forEach((function(t){var n=Ka(e[a].values[t].values);e[a].values[t]={values:e[a].values[t].values,amount:n}}));var t=Object.keys(e[a].values).map((function(t){return{amount:e[a].values[t].amount}})),n=Ka(t);e[a]={values:e[a].values,amount:n}})),e},at=function e(a){var t={status:!1};if(!Array.isArray(a))for(var n in a)t=Object(T.a)(Object(T.a)({},t),{},Object(N.a)({},n,e(a[n].values)));return t},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$a,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PRODUCTION":var t=a.payload,n=Qa(t),c=at(n),r=et(n);return Object(T.a)(Object(T.a)({},e),{},{production:r,status:c});case"SET_PRODUCTION_STATUS":var l=a.payload;return 2===l.length?Object(T.a)(Object(T.a)({},e),{},{status:Object(T.a)(Object(T.a)({},e.status),{},Object(N.a)({},l[0],Object(T.a)(Object(T.a)({},e.status[l[0]]),{},Object(N.a)({},l[1],{status:!e.status[l[0]][l[1]].status}))))}):1===l.length?Object(T.a)(Object(T.a)({},e),{},{status:Object(T.a)(Object(T.a)({},e.status),{},Object(N.a)({},l[0],Object(T.a)(Object(T.a)({},e.status[l[0]]),{},{status:!e.status[l[0]].status})))}):Object(T.a)({},e);default:return Object(T.a)({},e)}},nt={products:[]},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PRODUCTS":return Object(T.a)(Object(T.a)({},e),{},{products:a.payload});default:return Object(T.a)({},e)}},rt={step:0},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_STEP":return Object(T.a)(Object(T.a)({},e),{},{step:a.payload});default:return Object(T.a)({},e)}},ot=Object(Ra.c)({models:Wa,schemes:Fa,wishes:Ya,purchase:Za,production:tt,products:ct,steps:lt}),ut=t(110),it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ra.d,st=Object(Ra.e)(ot,it(Object(Ra.a)(ut.a)));l.a.render(c.a.createElement(u.a,{store:st},c.a.createElement(p.a,null,c.a.createElement(Ia,null))),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.2eb614dd.chunk.js.map