(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(12),n(1)),s=n(2),l=n(3),u=(n(13),function(e){return o.a.createElement(l.YMaps,null,o.a.createElement(l.Map,{width:"100%",height:"100%",className:"map__wrapper",instanceRef:function(t){return n=t,void e.getMap(n);var n},defaultState:{center:[55.75,37.57],zoom:9}},e.points.map(function(t,n){return o.a.createElement(l.Placemark,{key:n,geometry:t.coords,options:{draggable:!0},modules:["geoObject.addon.hint","geoObject.addon.balloon"],properties:{iconContent:n+1,balloonContentHeader:t.name,hintContent:t.name},onDragEnd:function(t){return function(t,n){var a=n.originalEvent.target.geometry._coordinates;e.updatePoint(t,a)}(n,t)}})}),o.a.createElement(l.Polyline,{geometry:e.points.map(function(e){return e.coords}),options:{balloonCloseButton:!1,strokeColor:"#000",strokeWidth:4,strokeOpacity:.5}})))}),p=(n(14),null),m=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],l=function(){p=null};return o.a.createElement("div",{className:"points__wrapper"},o.a.createElement("input",{className:"points__input",type:"text",value:r,onChange:function(e){var t=e.target.value;c(t)},onKeyDown:function(t){13===t.keyCode&&""!==r&&(t.preventDefault(),e.createPoint(r),c(""))}}),o.a.createElement("ul",{className:"points__list"},e.points.map(function(t,n){var a=t.name;return o.a.createElement("li",{key:a,className:"points__item",onDragOver:function(){return function(t){var n=e.points[t];if(p!==n){var a=e.points.filter(function(e){return e!==p});a.splice(t,0,p),e.updateList(a)}}(n)},draggable:!0,onDragStart:function(t){return function(t,n){p=e.points[n],console.log(n,p),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.target)}(t,n)},onDragEnd:l},o.a.createElement("span",{className:"points__content"},a),o.a.createElement("button",{className:"points__delete",onClick:function(){return function(t){var n=[].concat(Object(i.a)(e.points.slice(0,t)),Object(i.a)(e.points.slice(t+1)));e.updateList(n)}(n)}}))})))},d=(n(15),function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)([]),p=Object(s.a)(l,2),d=p[0],f=p[1];return o.a.createElement("div",{className:"app__wrapper"},o.a.createElement("div",{className:"app__points"},o.a.createElement(m,{createPoint:function(e){var t=r.getCenter();f([].concat(Object(i.a)(d),[{coords:t,name:e}]))},points:d,updateList:function(e){f(e)}})),o.a.createElement("div",{className:"app__map"},o.a.createElement(u,{getMap:function(e){c(e)},points:d,updatePoint:function(e,t){var n=d[e].name,a=[].concat(Object(i.a)(d.slice(0,e)),[{coords:t,name:n}],Object(i.a)(d.slice(e+1)));f(Object(i.a)(a))}})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.bb44904c.chunk.js.map