(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(2),l=c(1),r=(c(9),c(10),c(0)),o=function(e){var t=e.todoItems,c=e.selectedTodoId,s=e.onSelectTodo,n=e.onUserSelect,a=function(e,t,c){switch(t){case"completed":return e.filter((function(e){return!0===e.completed})).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));case"active":return e.filter((function(e){return!1===e.completed})).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));default:return e.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))}}(t,e.filteringOptions,e.currentQuery);return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){var t=e.completed,a=c===e.id;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"".concat(a?"has-background-info-light":""),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:t&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{style:{color:t?"green":"red"},children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(r.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){return s(0)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye-slash"})})}):Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e.id),n(e.userId)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.title)}))})]})},i=function(e){var t=e.currentQuery,c=e.onFilterChange,s=e.onInputChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target;return c(t.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",value:t,className:"input",onChange:function(e){return s(e.target.value)},placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},d=(c(12),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedUserId,c=e.selectedTodoId,s=e.onModalClose,n=e.todos,o=Object(l.useState)((function(){return(e=t,j("/users/".concat(e))).then((function(e){return b(e)}));var e})),i=Object(a.a)(o,2),u=i[0],b=i[1],h=Object(l.useState)((function(){return n.find((function(e){return e.id===c}))||null})),m=Object(a.a)(h,2),O=m[0],x=m[1];return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),null!==u&&void 0!==u&&u.name?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo ".concat(c)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(),x(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===O||void 0===O?void 0:O.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==O&&void 0!==O&&O.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"".concat(u.email),children:u.name})]})]})]}):Object(r.jsx)(d,{})]})},b=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)(0),b=Object(a.a)(n,2),h=b[0],m=b[1],O=Object(l.useState)((function(){return j("/todos").then((function(e){return p(e)}))})),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(""),v=Object(a.a)(N,2),y=v[0],g=v[1],C=Object(l.useState)("All"),k=Object(a.a)(C,2),S=k[0],w=k[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(i,{currentQuery:y,onFilterChange:w,onInputChange:g})}),Object(r.jsx)("div",{className:"block",children:f.length>0?Object(r.jsx)(o,{currentQuery:y,filteringOptions:S,todoItems:f,onSelectTodo:s,onUserSelect:m,selectedTodoId:c}):Object(r.jsx)(d,{})})]})})}),h&&Object(r.jsx)(u,{todos:f,selectedTodoId:c,selectedUserId:h,onModalClose:function(){s(0),m(0)}})]})};n.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f88cf75c.chunk.js.map