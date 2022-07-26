(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(2),l=c(1),i=(c(9),c(10),c(0)),r=function(e){var t=e.todoItems,c=e.selectedTodoId,s=e.onSelectTodo,n=e.onUserSelect,a=function(e,t,c){switch(t){case"completed":return e.filter((function(e){return!0===e.completed})).filter((function(e){return e.title.includes(c)}));case"active":return e.filter((function(e){return!1===e.completed})).filter((function(e){return e.title.includes(c)}));default:return e.filter((function(e){return e.title.includes(c)}))}}(t,e.filteringOptions,e.currentQuery);return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{style:{color:!0===e.completed?"green":"red"},children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(i.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){return s(0)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye-slash"})})}):Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e.id),n(e.userId)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye"})})})})]},e.title)}))})]})},o=function(e){var t=e.currentQuery,c=e.onFilterChange,s=e.onInputChange;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target;return c(t.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",value:t,className:"input",onChange:function(e){return s(e.target.value)},placeholder:"Search..."}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},d=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedUserId,c=e.selectedTodoId,s=e.onModalClose,n=e.todos,r=Object(l.useState)((function(){return(e=t,j("/users/".concat(e))).then((function(e){return b(e)}));var e})),o=Object(a.a)(r,2),u=o[0],b=o[1],h=Object(l.useState)((function(){return n.find((function(e){return e.id===c}))||null})),m=Object(a.a)(h,2),O=m[0],x=m[1];return Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),null!==u&&void 0!==u&&u.name?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #2"}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(),x(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:null===O||void 0===O?void 0:O.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==O&&void 0!==O&&O.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"".concat(u.email),children:u.name})]})]})]}):Object(i.jsx)(d,{})]})},b=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)(0),b=Object(a.a)(n,2),h=b[0],m=b[1],O=Object(l.useState)((function(){return j("/todos").then((function(e){return p(e)}))})),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(""),v=Object(a.a)(N,2),y=v[0],g=v[1],S=Object(l.useState)("All"),k=Object(a.a)(S,2),C=k[0],I=k[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(o,{currentQuery:y,onFilterChange:I,onInputChange:g})}),Object(i.jsx)("div",{className:"block",children:f.length>0?Object(i.jsx)(r,{currentQuery:y,filteringOptions:C,todoItems:f,onSelectTodo:s,onUserSelect:m,selectedTodoId:c}):Object(i.jsx)(d,{})})]})})}),h&&Object(i.jsx)(u,{todos:f,selectedTodoId:c,selectedUserId:h,onModalClose:function(){s(0),m(0)}})]})};n.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f27936b0.chunk.js.map