(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),o=Object(l.memo)((function(e){var t=e.todos,c=e.onSelect,s=e.selectedId;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:t}),n?Object(i.jsx)("td",{className:"is-vcentered",children:Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}):Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-".concat(n?"success":"danger"),children:a})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye".concat(s===t?"-slash":"")})})})})]},t)}))})]})})),d=Object(l.memo)((function(e){var t=e.filterType,c=e.onFilter,s=e.query,a=e.onSearch,n=e.onClean;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.currentTarget.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.currentTarget.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:n})})]})]})}));function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},b=Object(l.memo)((function(e){var t=e.selectedTodo,c=e.onClose,s=t,a=s.id,o=s.title,d=s.completed,b=s.userId,u=Object(l.useState)(!0),h=Object(n.a)(u,2),m=h[0],O=h[1],x=Object(l.useState)(null),f=Object(n.a)(x,2),p=f[0],v=f[1];return Object(l.useEffect)((function(){(function(e){return r("/users/".concat(e))})(b).then((function(e){v(e),O(!1)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),m?Object(i.jsx)(j,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[d?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(null===p||void 0===p?void 0:p.email),children:null===p||void 0===p?void 0:p.name})]})]})]})]})})),u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),u=Object(n.a)(a,2),h=u[0],m=u[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(""),N=Object(n.a)(v,2),y=N[0],g=N[1],C=Object(l.useState)(0),k=Object(n.a)(C,2),S=k[0],T=k[1];Object(l.useEffect)((function(){r("/todos").then((function(e){s(e),m(!0)}))}),[]);var w,I=Object(l.useCallback)((function(){g("")}),[]),_=Object(l.useCallback)((function(e){T(e)}),[c]),E=Object(l.useCallback)((function(){T(0)}),[]),L=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(y.toLowerCase());switch(f){case"all":return t;case"active":return t&&!e.completed;case"completed":return t&&e.completed;default:return!0}}))}),[c,f,y]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(d,{filterType:f,query:y,onFilter:p,onSearch:g,onClean:I})}),Object(i.jsx)("div",{className:"block",children:h?Object(i.jsx)(o,{todos:L,onSelect:_,selectedId:S}):Object(i.jsx)(j,{})})]})})}),S&&Object(i.jsx)(b,{selectedTodo:(w=S,c.find((function(e){return e.id===w}))||null),onClose:E})]})};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.171a0b5f.chunk.js.map