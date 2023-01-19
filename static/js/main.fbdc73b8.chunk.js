(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a,s=c(4),n=c.n(s),l=c(2),i=c(1),o=(c(11),c(12),c(5)),r=c.n(o),d=c(6),j=c.n(d),b=c(0),u=Object(i.memo)((function(e){var t=e.todos,c=e.onSelect,a=e.selectedId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),n?Object(b.jsx)("td",{className:"is-vcentered",children:Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}):Object(b.jsx)("td",{className:"is-vcentered"}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:"has-text-".concat(n?"success":"danger"),children:s})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:j()({far:!0,"fa-eye":a!==t,"fa-eye-slash":a===t})})})})})]},t)}))})]})}));!function(e){e.all="all",e.active="active",e.completed="completed"}(a||(a={}));var h=Object(i.memo)((function(e){var t=e.filterType,c=e.onFilter,s=e.query,n=e.onSearch,l=e.onClean;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){switch(e.currentTarget.value){case a.all:c(a.all);break;case a.active:c(a.active);break;case a.completed:c(a.completed)}},children:[Object(b.jsx)("option",{value:a.all,children:"All"}),Object(b.jsx)("option",{value:a.active,children:"Active"}),Object(b.jsx)("option",{value:a.completed,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){n(e.currentTarget.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:l})})]})]})}));function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var O=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},x=Object(i.memo)((function(e){var t=e.selectedTodo,c=e.onClose,a=t,s=a.id,n=a.title,o=a.completed,r=a.userId,d=Object(i.useState)(!0),j=Object(l.a)(d,2),u=j[0],h=j[1],x=Object(i.useState)(null),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(i.useState)(""),y=Object(l.a)(N,2),g=y[0],k=y[1];return Object(i.useEffect)((function(){(function(e){return m("/users/".concat(e))})(r).then((function(e){v(e)})).catch((function(){return k("something went wrong, try later")})).finally((function(){return h(!1)}))}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),u&&Object(b.jsx)(O,{}),!!p&&Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:n}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===p||void 0===p?void 0:p.email),children:null===p||void 0===p?void 0:p.name})]})]})]}),g&&Object(b.jsx)("div",{className:"modal-card",children:Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("h1",{className:"title",children:g}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]})})]})})),f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),d=o[0],j=o[1],f=Object(i.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(""),g=Object(l.a)(y,2),k=g[0],C=g[1],S=Object(i.useState)(0),w=Object(l.a)(S,2),T=w[0],I=w[1],_=Object(i.useState)(""),E=Object(l.a)(_,2),L=E[0],A=E[1],B=Object(i.useState)(a.all),F=Object(l.a)(B,2),q=F[0],J=F[1];Object(i.useEffect)((function(){A(""),m("/todos").then((function(e){s(e),j(!0)})).catch((function(){A("something went wrong, try to reload the page")})).finally((function(){return j(!0)}))}),[]);var P=Object(i.useCallback)(r()(C,300),[]),D=Object(i.useCallback)((function(){N(""),P("")}),[]),M=Object(i.useCallback)((function(e){I(e)}),[c]),z=Object(i.useCallback)((function(e){return c.find((function(t){return t.id===e}))||null}),[T]),G=Object(i.useCallback)((function(){I(0)}),[]),H=Object(i.useMemo)((function(){return q?c.filter((function(e){var t=e.title.toLowerCase().includes(k.toLowerCase());switch(q){case a.all:return t;case a.active:return t&&!e.completed;case a.completed:return t&&e.completed;default:return!0}})):c}),[c,q,k]),K=d&&!L,Q=L;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(h,{filterType:q,query:v,onFilter:J,onSearch:function(e){N(e),P(e)},onClean:D})}),Object(b.jsxs)("div",{className:"block",children:[!d&&Object(b.jsx)(O,{}),K&&Object(b.jsx)(u,{todos:H,onSelect:M,selectedId:T}),Q&&Object(b.jsx)("h1",{className:"title",style:{textAlign:"center",color:"red"},children:L})]})]})})}),!!T&&Object(b.jsx)(x,{selectedTodo:z(T),onClose:G})]})};n.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fbdc73b8.chunk.js.map