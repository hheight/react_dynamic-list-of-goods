(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),c=a.n(o),s=a(1),l=a.n(s),i=a(7),u=a(4),m=a(8),d=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-goods/","goods.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){var t=e.goods;return n.a.createElement("ul",{className:"collection"},t.map((function(e){var t=e.id,a=e.name,r=e.color;return n.a.createElement("li",{className:"collection-item",key:t,style:{color:"".concat(r)}},a)})))},p=function(e){var t=e.filterName,a=e.title,r=e.loadGoods;return n.a.createElement("button",{type:"button",className:"waves-effect waves-light btn-large mx1",onClick:function(){return r(t)}},a)},b=(a(15),function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1];function c(e){return s.apply(this,arguments)}function s(){return(s=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:a=e.sent,e.t0=t,e.next="all"===e.t0?7:"firstFive"===e.t0?9:"redOnly"===e.t0?11:13;break;case 7:return o(a),e.abrupt("break",14);case 9:return o(Object(i.a)(a).sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5)),e.abrupt("break",14);case 11:return o(a.filter((function(e){return"red"===e.color}))),e.abrupt("break",14);case 13:return e.abrupt("break",14);case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),console.log(e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row center-align"},n.a.createElement(p,{title:"Load All goods",filterName:"all",loadGoods:c}),n.a.createElement(p,{title:"Load 5 first goods",filterName:"firstFive",loadGoods:c}),n.a.createElement(p,{title:"Load red goods",filterName:"redOnly",loadGoods:c})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s6 offset-s3"},n.a.createElement(f,{goods:a}))))});c.a.render(n.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3c9a9871.chunk.js.map