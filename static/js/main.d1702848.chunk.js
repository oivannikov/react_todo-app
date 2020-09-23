(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=(n(12),n(13),n(14),n(4)),l=n(1),s=n.n(l),i=n(2),m="https://mate-api.herokuapp.com";function f(){return(f=Object(i.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/users/"),{method:"POST",body:JSON.stringify({name:"Alex",username:"Ivannikov",email:"alexii.ivannikov@gmail.com",phone:"344556677"})});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.data;case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){var n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todos/"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.next=8,a.data;case 8:return r=e.sent,c=r.filter((function(e){return e.userId===+t})).sort((function(e,t){return e.id-t.id})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return fetch("".concat(m,"/todos/").concat(e),{method:"DELETE"})}function h(){return(h=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todos/").concat(t),{method:"PATCH",body:JSON.stringify({completed:!0})});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/todos/").concat(t),{method:"PATCH",body:JSON.stringify({completed:!1})});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=e.handleInput,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(e,o),l("")}(e)}},r.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:o,onChange:function(e){return l(e.target.value)}}))}var v=n(3),g=n.n(v);function y(e){var t=e.title,n=e.completed,a=e.id,c=e.upDateUserTodos;function o(e){n?function(e){return E.apply(this,arguments)}(a).then((function(){return c()})):function(e){return h.apply(this,arguments)}(a).then((function(){return c()}))}return r.a.createElement("li",null,r.a.createElement("div",{className:g()("view",{completed:n})},r.a.createElement("input",{type:"checkbox",className:"toggle",checked:n,onChange:function(e){return o()}}),r.a.createElement("label",null,t),r.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return function(e){d(e).then((function(){return c()}))}(a)}})),r.a.createElement("input",{type:"text",className:"edit"}))}function N(e){var t=e.todos,n=e.upDateUserTodos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),r.a.createElement("ul",{className:"todo-list"},t.map((function(e){return r.a.createElement(y,Object.assign({key:e.id},e,{upDateUserTodos:n}))}))))}function O(e){var t=e.todos,n=(e.deleteAllTodos,e.currentFilter),a=e.upDateUserTodos,c=e.getCurrentFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"todo-count"},"".concat(t.length," items left")),r.a.createElement("ul",{className:"filters"},r.a.createElement("li",null,r.a.createElement("a",{href:"#/",className:g()({selected:"all"===n}),onClick:function(){return c("all")}},"All")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/active",className:g()({selected:"active"===n}),onClick:function(){return c("active")}},"Active")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/completed",className:g()({selected:"completed"===n}),onClick:function(){return c("completed")}},"Completed"))),r.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){var e=t.filter((function(e){return e.completed})).map((function(e){return d(e.id)}));Promise.all(e).then((function(){return a()}))}},"Clear completed"))}var k=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],d=Object(a.useState)("all"),h=Object(u.a)(d,2),E=h[0],v=h[1],g=localStorage.getItem("id");function y(){(function(e){return p.apply(this,arguments)})(n).then((function(e){return i(e)}))}return Object(a.useEffect)((function(){g?c(g):function(){return f.apply(this,arguments)}().then((function(e){var t=e.id;c(t),localStorage.setItem("id",t)}))}),[]),Object(a.useEffect)((function(){n&&y()}),[n]),r.a.createElement("section",{className:"todoapp"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement(b,{handleInput:function(e,t){e.preventDefault(),function(e,t){return fetch("".concat(m,"/todos"),{method:"POST",body:JSON.stringify({title:e,userId:t,completed:!1})})}(t,n).then((function(){return y()}))}})),r.a.createElement("section",{className:"main"},r.a.createElement(N,{todos:function(){switch(E){case"all":return s;case"active":return s.filter((function(e){return!e.completed}));case"completed":return s.filter((function(e){return e.completed}));default:return s}}(),upDateUserTodos:y})),r.a.createElement("footer",{className:"footer"},r.a.createElement(O,{todos:s,upDateUserTodos:y,getCurrentFilter:function(e){return v(e)},currentFilter:E})))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d1702848.chunk.js.map