/*! For license information please see main.ff2599ec.chunk.js.LICENSE.txt */
(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{37:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(0),a=n(13),r=n.n(a),s=n(12),o=n(3),d=n(7);var m=function(){var t=Object(d.c)((function(t){return t.itemReducer}));return Object(i.jsxs)("div",{id:"nav-body",children:[Object(i.jsxs)("span",{id:"title",children:[Object(i.jsx)("img",{id:"logo",src:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/JayLogo.png",alt:"logo"}),Object(i.jsx)(s.b,{to:"/",children:Object(i.jsx)("span",{id:"name",children:"J Cafe"})})]}),Object(i.jsxs)("div",{id:"menu",children:[Object(i.jsx)(s.b,{to:"/",children:"Menus"}),Object(i.jsxs)(s.b,{to:"/shoppingcart",children:["Cart Items",Object(i.jsx)("span",{id:"nav-item-counter",children:t.cartItems.length})]})]})]})},u="ADD_TO_CART",l="REMOVE_FROM_CART",j="SET_QUANTITY",h="ENQUEUE_NOTIFICATION",b="DEQUEUE_NOTIFICATION",p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return function(n){var i=Math.random();n(O(t,e,i)),setTimeout((function(){n(f())}),e)}},O=function(t,e,n){return{type:h,payload:{message:t,dismissTime:e,uuid:n}}},f=function(){return{type:b}};function x(t){var e=t.item,n=t.handleClick;return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("img",{className:"item-img",src:e.img,alt:e.name}),Object(i.jsx)("span",{className:"item-name","data-testid":e.name,children:e.name}),Object(i.jsxs)("span",{className:"item-price",children:[e.price," \uc6d0"]}),Object(i.jsx)("button",{className:"item-button",onClick:function(t){return n(t,e.id)},children:"\uc7a5\ubc14\uad6c\ub2c8 \ub2f4\uae30"})]},e.id)}var g=function(){var t=Object(d.c)((function(t){return t.itemReducer})),e=t.items,n=t.cartItems,c=Object(d.b)(),a=function(t){var e;n.map((function(t){return t.itemId})).includes(t.id)?c(p("\uc774\ubbf8 \ucd94\uac00\ub41c \uc0c1\ud488\uc785\ub2c8\ub2e4.")):(c((e=t.id,{type:u,payload:{itemId:e,quantity:1}})),c(p("\uc7a5\ubc14\uad6c\ub2c8\uc5d0 ".concat(t.name," \uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))))};return Object(i.jsx)("div",{id:"item-list-container",children:Object(i.jsxs)("div",{id:"item-list-body",children:[Object(i.jsx)("div",{id:"item-list-title",children:"Coffee Menus"}),e.map((function(t,e){return Object(i.jsx)(x,{item:t,handleClick:function(){a(t)}},e)}))]})})},v=n(19);function y(t){var e=t.text,n=t.dismissTime,a=Object(c.useState)(!1),r=Object(v.a)(a,2),s=r[0],o=r[1];return Object(c.useEffect)((function(){var t=!0;return setTimeout((function(){t&&o(!0)}),n-500),function(){t=!1}}),[]),Object(i.jsx)("div",{className:"notification ".concat(s?"fade-out":""),children:e})}var I=function(){var t=Object(d.c)((function(t){return t.notificationReducer}));return Object(i.jsx)("div",{className:"notification-container top-right",children:t.notifications.map((function(t){return Object(i.jsx)(y,{text:t.message,dismissTime:t.dismissTime},t.uuid)}))})},k=n(10);function N(t){var e=t.item,n=t.checkedItems,c=t.handleCheckChange,a=t.handleQuantityChange,r=t.handleDelete,s=t.quantity;return Object(i.jsxs)("li",{className:"cart-item-body",children:[Object(i.jsx)("input",{type:"checkbox",className:"cart-item-checkbox",onChange:function(t){c(t.target.checked,e.id)},checked:!!n.includes(e.id)}),Object(i.jsx)("div",{className:"cart-item-thumbnail",children:Object(i.jsx)("img",{src:e.img,alt:e.name})}),Object(i.jsxs)("div",{className:"cart-item-info",children:[Object(i.jsx)("div",{className:"cart-item-title","data-testid":"cart-".concat(e.name),children:e.name}),Object(i.jsxs)("div",{className:"cart-item-price",children:[e.price," \uc6d0"]})]}),Object(i.jsx)("input",{type:"number",min:1,className:"cart-item-quantity",value:s,onChange:function(t){a(Number(t.target.value),e.id)}}),Object(i.jsx)("button",{className:"cart-item-delete",onClick:function(){r(e.id)},children:"\uc0ad\uc81c"})]})}function w(t){var e=t.totalQty,n=t.total;return Object(i.jsxs)("div",{id:"order-summary-container",children:[Object(i.jsx)("h4",{children:"\uc8fc\ubb38 \ud569\uacc4"}),Object(i.jsxs)("div",{id:"order-summary",children:["\ucd1d \uc544\uc774\ud15c \uac1c\uc218 :"," ",Object(i.jsxs)("span",{className:"order-summary-text",children:[e," \uac1c"]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{id:"order-summary-total",children:["\ud569\uacc4 : ",Object(i.jsxs)("span",{className:"order-summary-text",children:[n," \uc6d0"]})]})]}),Object(i.jsx)("div",{id:"btnWrap",children:Object(i.jsx)("button",{id:"pay",onClick:function(){0!==n?(alert("\ucd1d ".concat(n," \uc6d0 \uacb0\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694 :)")),window.location.href="/J-cafe-deploy"):alert("\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ucee4\ud53c\ub97c \ub2f4\uc544\uc8fc\uc138\uc694")},children:"\uacb0\uc81c\ud558\uae30"})})]})}function C(){var t=Object(d.c)((function(t){return t.itemReducer})),e=t.cartItems,n=t.items,a=Object(d.b)(),r=Object(c.useState)(e.map((function(t){return t.itemId}))),s=Object(v.a)(r,2),o=s[0],m=s[1],u=function(t,e){m(t?[].concat(Object(k.a)(o),[e]):o.filter((function(t){return t!==e})))},h=function(t,e){a(function(t,e){return{type:j,payload:{itemId:t,quantity:e}}}(e,t))},b=function(t){m(o.filter((function(e){return e!==t}))),a(function(t){return{type:l,payload:{itemId:t}}}(t))},p=n.filter((function(t){return e.map((function(t){return t.itemId})).indexOf(t.id)>-1})),O=function(){for(var t=e.map((function(t){return t.itemId})),i={price:0,quantity:0},c=function(c){if(o.indexOf(t[c])>-1){var a=e[c].quantity,r=n.filter((function(t){return t.id===e[c].itemId}))[0].price;i.price=i.price+a*r,i.quantity=i.quantity+a}},a=0;a<t.length;a++)c(a);return i}();return Object(i.jsx)("div",{id:"item-list-container",children:Object(i.jsxs)("div",{id:"item-list-body",children:[Object(i.jsx)("div",{id:"item-list-title",children:"\uc7a5\ubc14\uad6c\ub2c8"}),Object(i.jsxs)("span",{id:"shopping-cart-select-all",children:[Object(i.jsx)("input",{type:"checkbox",checked:o.length===e.length,onChange:function(t){return n=t.target.checked,void m(n?e.map((function(t){return t.itemId})):[]);var n}}),Object(i.jsx)("label",{children:"\uc804\uccb4\uc120\ud0dd"})]}),Object(i.jsxs)("div",{id:"shopping-cart-container",children:[e.length?Object(i.jsx)("div",{id:"cart-item-list",children:p.map((function(t,n){var c=e.filter((function(e){return e.itemId===t.id}))[0].quantity;return Object(i.jsx)(N,{handleCheckChange:u,handleQuantityChange:h,handleDelete:b,item:t,checkedItems:o,quantity:c},n)}))}):Object(i.jsx)("div",{id:"item-list-text",children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc544\uc774\ud15c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),Object(i.jsx)(w,{total:O.price,totalQty:O.quantity})]})]})})}n(37);var E=function(){return Object(i.jsxs)(s.a,{basename:"/J-cafe-deploy",children:[Object(i.jsx)(m,{}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(g,{})}),Object(i.jsx)(o.a,{path:"/shoppingcart",children:Object(i.jsx)(C,{})})]}),Object(i.jsx)(I,{})]})},_=n(9),T=(n(38),{items:[{id:1,name:"\ud50c\ub7ab \ud654\uc774\ud2b8",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/flatWhite.png",price:4e3},{id:2,name:"\uc544\uba54\ub9ac\uce74\ub178",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/americano.png",price:4500},{id:3,name:"\uc5d0\uc2a4\ud504\ub808\uc18c",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/espresso.png",price:4e3},{id:4,name:"\uce74\ud478\uce58\ub178",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/cappuccino.png",price:5e3},{id:5,name:"\ucf58 \ud30c\ub098",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/conPanna.png",price:5500},{id:6,name:"\ubaa8\uce74",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/mocha.png",price:5e3},{id:7,name:"\uce74\ub77c\uba5c \ub9c8\ub07c\uc544\ub610",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/caramelMacchiato.png",price:5500},{id:8,name:"\ub9c8\ub07c\uc544\ub610",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/macchiato.png",price:5500},{id:9,name:"\ud14c\uc774\ud06c\uc5b4\uc6e8\uc774",img:"https://jcafebucket.s3.ap-northeast-2.amazonaws.com/takeAway.png",price:2500}],cartItems:[],notifications:[]}),R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object.assign({},t,{cartItems:[].concat(Object(k.a)(t.cartItems),[e.payload])});case l:var n=t.cartItems.filter((function(t){return t.itemId!==e.payload.itemId}));return Object.assign({},t,{cartItems:n});case j:var i=t.cartItems.findIndex((function(t){return t.itemId===e.payload.itemId}));return Object.assign({},t,{cartItems:[].concat(Object(k.a)(t.cartItems.slice(0,i)),[e.payload],Object(k.a)(t.cartItems.slice(i+1)))});default:return t}},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object.assign({},t,{notifications:[].concat(Object(k.a)(t.notifications),[e.payload])});case b:return Object.assign({},t,{notifications:t.notifications.slice(1)});default:return t}},z=Object(_.c)({itemReducer:R,notificationReducer:q}),D=n(27),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_.d,M=Object(_.e)(z,S(Object(_.a)(D.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(i.jsx)(d.a,{store:M,children:Object(i.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ff2599ec.chunk.js.map