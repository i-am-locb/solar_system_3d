(this.webpackJsonpsolar_system_3d=this.webpackJsonpsolar_system_3d||[]).push([[0],{24:function(e,t,n){e.exports={warning:"Warning_warning__102qO",warningBlock:"Warning_warningBlock__2A8Oj",h1:"Warning_h1__2XTZd",text:"Warning_text__D_jT4",button:"Warning_button__2Xmow"}},39:function(e,t,n){e.exports={navigation:"Navigation_navigation__1ty22",planet:"Navigation_planet__EeDhu",selected:"Navigation_selected__3y6Xn"}},43:function(e,t,n){e.exports={bar:"InfoBar_bar__2h8V0",infoBar:"InfoBar_infoBar__1K6pK"}},59:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(20),c=n.n(r),s=(n(59),n(13)),o=n(91),l=n(89),j=n(90),d=n(6),u=n.p+"static/media/Sun.b34e6ead.jpg",p=n(7);function b(){var e=Object(s.c)(d.TextureLoader,u);return Object(p.jsxs)("mesh",{children:[Object(p.jsx)("sphereGeometry",{args:[.696342,32,32]}),Object(p.jsx)("meshStandardMaterial",{map:e})]})}function O(){var e=1.25;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ambientLight",{intensity:.15}),Object(p.jsx)("pointLight",{position:[0,0,0]}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[e,0,0],intensity:2,distance:e}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[0,e,0],intensity:2,distance:e}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[0,0,e],intensity:2,distance:e}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[-e,0,0],intensity:2,distance:e}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[0,-e,0],intensity:2,distance:e}),Object(p.jsx)("pointLight",{color:"#f6f3ea",position:[0,0,-e],intensity:2,distance:e})]})}var f=n(37),h=f.create({withCredentials:!1,baseURL:"https://api.le-systeme-solaire.net/rest.php/bodies/"}),m=function(){return h.get("?filter%5B%5D=isPlanet%2Cneq%2Cfalse&filter%5B%5D=id%2Cneq%2Cceres&filter%5B%5D=id%2Cneq%2Ceris&filter%5B%5D=id%2Cneq%2Chaumea&filter%5B%5D=id%2Cneq%2Cmakemake&filter%5B%5D=id%2Cneq%2Cpluton")},x=function(e,t){return e+Math.random()*t},g=function(e){return function(t){t({type:"OFF_ZOOM"}),t({type:"ZOOM",name:e})}};x(.005,.015),x(0,2*Math.PI),x(.001,.003);var _=function(e){for(var t=e.xRadius,n=void 0===t?1:t,a=e.zRadius,i=void 0===a?1:a,r=[],c=0;c<64;c++){var s=c/64*2*Math.PI,o=n*Math.cos(s),l=i*Math.sin(s);r.push(new d.Vector3(o,0,l))}r.push(r[0]);var j=(new d.BufferGeometry).setFromPoints(r);return Object(p.jsx)("line",{geometry:j,children:Object(p.jsx)("lineBasicMaterial",{attach:"material",color:"#454545",linewidth:.5})})};function v(e){var t,n=e.planet,a=n.englishName,r=n.aphelion,c=n.perihelion,o=n.equaRadius,l=n.zoomed,j=n.speed,u=n.offset,b=n.rotationSpeed,O=(n.axialTilt,e.textures),f=e.dispatch;O.forEach((function(e){e.includes(""+a)&&(t=e)}));var h=1e5,m=5e7,x=Object(s.c)(d.TextureLoader,t),v=i.a.useRef();return Object(s.b)((function(e){var t=e.clock,n=e.camera,a=t.getElapsedTime()*j+u,i=(r/m+.696342)*Math.sin(a),s=(c/m+.696342)*Math.cos(a);if(v.current.position.x=i,v.current.position.z=s,v.current.rotation.y+=b,l){var p=i+o/h+Math.sqrt(o/h),O=s+o/h+Math.sqrt(o/h);n.position.lerp(new d.Vector3(p,.1,O),.01),n.lookAt(i,0,s)}})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("mesh",{ref:v,onClick:function(){return f(g(a))},children:[Object(p.jsx)("sphereGeometry",{args:[o/h,100,100]}),Object(p.jsx)("meshStandardMaterial",{map:x})]}),Object(p.jsx)(_,{xRadius:r/m+.696342,zRadius:c/m+.696342})]})}var y=n(88);function N(){return Object(p.jsx)(y.a,{radius:300,depth:60,count:2e4,factor:7,saturation:0,fade:!0})}var C=n(15),M=n(24),D=n.n(M);function w(e){var t=Object(C.b)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:D.a.warning,children:Object(p.jsxs)("div",{className:D.a.warningBlock,children:[Object(p.jsx)("h1",{className:D.a.h1,children:"Warning"}),Object(p.jsx)("p",{className:D.a.text,children:"Don't use mobile traffic!"}),Object(p.jsx)("button",{className:D.a.button,onClick:function(){t((function(e){e({type:"TOGGLE_CONFIRM",isConfirm:!0})})),t((function(e){m().then((function(t){var n=t.data.bodies;n.sort((function(e,t){return e.aphelion-t.aphelion}));for(var a=0;a<n.length;a++)e({type:"ADD_PLANET",planet:t.data.bodies[a],speed:x(.005,.015),offset:x(0,2*Math.PI),rotationSpeed:x(.001,.003)})}))}))},children:"OK"})]})})})}var L=n(27),k=n(8),E={isConfirm:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_CONFIRM"===t.type?Object(k.a)(Object(k.a)({},e),{},{isConfirm:t.isConfirm}):e},I=n(54),S=n(12),F={planets:[],textures:[n.p+"static/media/Mercury.b3bc4c35.jpg",n.p+"static/media/Venus.a2b5dff8.jpg",n.p+"static/media/Earth.54672c1f.jpg",n.p+"static/media/Mars.a4802994.jpg",n.p+"static/media/Jupiter.b3729a97.jpg",n.p+"static/media/Saturn.afe61e83.jpg",n.p+"static/media/Uranus.428ad3f9.jpg",n.p+"static/media/Neptune.6dd11266.jpg"]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLANET":return Object(k.a)(Object(k.a)({},e),{},{planets:[].concat(Object(S.a)(e.planets),[Object(k.a)(Object(k.a)({},t.planet),{},{speed:t.speed,offset:t.offset,rotationSpeed:t.rotationSpeed})])});case"OFF_ZOOM":return Object(k.a)(Object(k.a)({},e),{},{planets:Object(S.a)(e.planets.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{zoomed:!1})})))});case"ZOOM":return Object(k.a)(Object(k.a)({},e),{},{planets:Object(S.a)(e.planets.map((function(e){return e.englishName===t.name?Object(k.a)(Object(k.a)({},e),{},{zoomed:!0}):e})))});default:return e}},q={planetsInfo:null,zoomed:!1,link:null,title:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLANET_INFO":return Object(k.a)(Object(k.a)({},e),{},{text:t.text,link:t.link,title:t.title});case"ENABLE_ZOOM":return Object(k.a)(Object(k.a)({},e),{},{zoomed:!0});default:return e}},R=Object(L.b)({solarSystemData:T,confirmed:B,planetInfo:A}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,P=Object(L.d)(R,z(Object(L.a)(I.a))),G=f.create({withCredentials:!1,baseURL:"https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&&exintro="}),Z=function(e){return G.get("&titles="+e)},W=n(39),V=n.n(W);function X(){var e=Object(C.c)((function(e){return e.solarSystemData.planets})),t=Object(C.b)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:V.a.navigation,children:e.map((function(e){return Object(p.jsx)("button",{className:e.zoomed?V.a.selected:V.a.planet,onClick:function(){var n;t(g(e.englishName)),t((function(e){e({type:"ENABLE_ZOOM"})})),t((n=e.englishName,function(e){Z(n).then((function(t){console.log(t);var n=t.data.query.pages;for(var a in n)e({type:"ADD_PLANET_INFO",text:n[a].extract,link:"https://en.wikipedia.org/?curid="+n[a].pageid,title:n[a].title})}))}))},children:e.englishName},e.id)}))})})}var U=n(43),J=n.n(U);function K(){var e=Object(C.c)((function(e){return e.planetInfo.text})),t=Object(C.c)((function(e){return e.planetInfo.zoomed})),n=Object(C.c)((function(e){return e.planetInfo.link})),a=Object(C.c)((function(e){return e.planetInfo.title}));return t?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:J.a.bar,children:[Object(p.jsx)("h1",{children:a}),Object(p.jsx)("div",{className:J.a.infoBar,dangerouslySetInnerHTML:{__html:e}}),Object(p.jsx)("a",{href:n,target:"_blank",children:"Read more..."})]})}):t?void 0:Object(p.jsx)(p.Fragment,{})}function H(e){var t=Object(C.c)((function(e){return e.confirmed.isConfirm})),n=Object(C.c)((function(e){return e.solarSystemData.planets})),i=Object(C.c)((function(e){return e.solarSystemData.textures})),r=Object(C.b)();return t?t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{camera:{position:[0,20,65],fov:45},children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(Q,{}),children:Object(p.jsxs)(C.a,{store:P,children:[Object(p.jsx)(b,{}),Object(p.jsx)(N,{}),n.map((function(e){return Object(p.jsx)(v,{dispatch:r,planet:e,textures:i},e.id)})),Object(p.jsx)(O,{}),Object(p.jsx)(o.a,{})]})})}),Object(p.jsx)(K,{}),Object(p.jsx)(X,{})]}):void 0:Object(p.jsx)(w,{})}function Q(){var e=Object(l.a)(),t=e.active,n=e.progress,a=e.errors,i=e.item,r=e.loaded,c=e.total;return console.log({active:t,progress:n,errors:a,item:i,loaded:r,total:c}),Object(p.jsxs)(j.a,{center:!0,children:[n," % loaded"]})}c.a.render(Object(p.jsx)(C.a,{store:P,children:Object(p.jsx)(H,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.5ae6d6e2.chunk.js.map