"use strict";(self.webpackChunknpa=self.webpackChunknpa||[]).push([[129],{4884:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(4165),s=n(5861),r=n(9439),l=n(2791),a=n(5979),c=n(7004),o=n(882),d=n(5584),u=n(6481),m=n(2316),v=n(32),g=n(4805),f=n(8461),x=n(184),h=(0,v.Pi)((function(e){var t=e.limit,n=e.setLimit,i=function(e){e.preventDefault();var t=e.target,i=t.closest("li"),s=t.closest(".liketuner__limit");null!==i&&void 0!==i&&i.textContent&&i?((0,f.J)(e,"li"),n(i.textContent.toString().replace("Count:","")),(0,g.$)(".liketuner__limit ul").remove("add")):s&&((0,g.$)(".liketuner__limit ul").toggle("add"),(0,g.$)(".liketuner__limit").toggle("add"))};return(0,x.jsx)("div",{className:"liketuner",children:(0,x.jsx)("div",{className:"liketuner__row",children:(0,x.jsx)("div",{className:"liketuner__blocks",children:(0,x.jsx)("div",{className:"liketuner__block",children:(0,x.jsxs)("div",{className:"liketuner__limit",children:[(0,x.jsxs)("div",{onClick:i,className:"liketuner__number",children:[(0,x.jsx)("p",{children:"Limit "}),(0,x.jsx)("p",{className:"liketuner__arrow",children:">"})]}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{className:4==+t?"add":"",onClick:i,children:(0,x.jsx)("p",{className:"mini",children:"Count: 4"})}),(0,x.jsx)("li",{className:8==+t?"add":"",onClick:i,children:(0,x.jsx)("p",{className:"mini",children:"Count: 8"})}),(0,x.jsx)("li",{className:12==+t?"add":"",onClick:i,children:(0,x.jsx)("p",{className:"mini",children:"Count: 12"})})]})]})})})})})})),_=n(6197),p=n(4262),k=(0,v.Pi)((function(e){var t=e.limit,n=e.favorite,l=(0,c.Z)((0,s.Z)((0,i.Z)().mark((function e(){var s,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.getProductsLimit.length+ +t,e.next=3,u.T.getAll(s.toString());case 3:r=e.sent,n.setLimitProduct=r.devices;case 5:case"end":return e.stop()}}),e)})))),a=(0,r.Z)(l,2),o=a[0],d=a[1];return(0,x.jsx)("div",{className:"likepagination",children:(0,x.jsx)("div",{className:"likepagination__wrap",children:(0,x.jsx)("div",{className:"likepagination__btn",onClick:d,children:o?(0,x.jsx)(p.Z,{}):(0,x.jsx)("p",{className:"",children:"Show more"})})})})})),j=n(5734),w=(0,v.Pi)((function(){var e=(0,l.useContext)(a._).favorite,t=(0,l.useState)("8"),n=(0,r.Z)(t,2),v=n[0],g=n[1],f=(0,c.Z)((0,s.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.T.getAll(v);case 2:n=t.sent,e.setLimitProduct=n.devices;case 4:case"end":return t.stop()}}),t)})))),p=(0,r.Z)(f,2),w=p[0],N=p[1],b=(0,c.Z)((0,s.Z)((0,i.Z)().mark((function t(){var n,s;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.count==e.getProductsLimit.length){t.next=7;break}if(!((n=e.getProductsLimit.length-1)>=0)){t.next=7;break}return t.next=5,u.T.getAll(n.toString());case 5:s=t.sent,e.setLimitProduct=s.devices;case 7:case"end":return t.stop()}}),t)})))),Z=(0,r.Z)(b,2),L=(Z[0],Z[1]);return(0,l.useEffect)((function(){return window.addEventListener("click",_.m),function(){window.removeEventListener("click",_.m)}}),[]),(0,l.useEffect)((function(){N(),document.title="Favorite goods"}),[]),(0,l.useEffect)((function(){L()}),[e.count]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"likesGoods",children:[(0,x.jsx)("div",{className:"indentstart"}),(0,x.jsx)(d.Z,{name:"Favorites"}),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(m.Z,{classname:"like",children:[(0,x.jsx)(h,{setLimit:g,limit:v}),(0,x.jsx)(j.O,{isLoading:w,children:(0,x.jsx)(o.Z,{like:!0})}),+e.count>+v&&+e.count>+e.getProductsLimit.length&&(0,x.jsx)(k,{favorite:e,limit:v})]})})]})})}))},882:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(9439),s=n(853),r=n(2791),l=n(32),a=n(5979),c=n(1087),o=n(184),d=function(){var e=(0,r.useContext)(a._).device,t=m(),n=function(n){var i,s=e.getPage;+(s=(null===(i=n.target)||void 0===i?void 0:i.closest(".pagination__back")).dataset.back?+s-1+"":+s+1+"")>=1&&+s<=+e.getPages&&(t("page",s.toString()),e.setPage=s.toString(),document.documentElement.scrollIntoView({block:"start",behavior:"smooth"}))};return(0,o.jsx)("div",{className:"pagination",children:(0,o.jsxs)("div",{className:"pagination__wrap",children:[(0,o.jsx)("div",{onClick:n,"data-back":!0,className:"pagination__back",children:(0,o.jsx)("p",{children:"Back"})}),(0,o.jsx)("ul",{children:function(){for(var t=new Map,n=1;n<=+e.getPages;n++)t.set(n,(0,o.jsx)(u,{children:n.toString()},n));return Array.from(t.values())}()}),(0,o.jsx)("div",{onClick:n,"data-next":!0,className:"pagination__back",children:(0,o.jsx)("p",{children:"Next"})})]})})},u=function(e){var t=e.children,n=(0,r.useContext)(a._).device,i=m();return(0,o.jsx)("li",{onClick:function(){i("page",t.toString()),n.setPage=t,document.documentElement.scrollIntoView({block:"start",behavior:"smooth"})},className:t==n.getPage?"add":"",children:(0,o.jsx)("p",{children:t})})},m=function(){var e=(0,c.lr)(),t=(0,i.Z)(e,2),n=t[0],s=t[1];return function(e,t){n.set(e,t),s(n)}},v=(n(3134),(0,l.Pi)((function(e){var t=e.like,n=(0,r.useContext)(a._),l=n.device,u=n.favorite,m=(0,c.lr)(),v=(0,i.Z)(m,1)[0];return(0,o.jsxs)("div",{className:"product__table",children:[(0,o.jsx)("div",{className:"product__goods",children:function(){var e=[];return(t?u.getProductsLimit:v.has("sale")?l.getDevice.filter((function(e){return e.sale>0})):l.getDevice).map((function(t){e.push((0,o.jsx)(s.G8,{product:t},t.name))})),e}()}),+l.getPages>1&&!t&&(0,o.jsx)(d,{})]})})))},8461:function(e,t,n){function i(e,t){for(var n,i,s=[],r=e.target.closest(t);r.previousSibling;)1==(r=r.previousSibling).nodeType&&s.push(r);for(r=e.target.closest(t);r.nextSibling;)1==(r=r.nextSibling).nodeType&&s.push(r);s.map((function(e){var n;null===e||void 0===e||null===(n=e.closest(t))||void 0===n||n.classList.remove("add")})),null===(n=e.target.closest(t))||void 0===n||null===(i=n.closest(t))||void 0===i||i.classList.toggle("add")}function s(e,t){var n,i,s,r=e.target,l=r.closest("ul");r.closest('li[data-type="All"]')?Array.from(null===l||void 0===l?void 0:l.querySelectorAll("li.add")).forEach((function(e){e.classList.remove("add")})):(null===(n=r.closest(t))||void 0===n||n.classList.toggle("add"),null===l||void 0===l||null===(i=l.querySelector('li[data-type="All"]'))||void 0===i||i.classList.remove("add"));null!==l&&void 0!==l&&l.querySelector("li.add")||(null===l||void 0===l||null===(s=l.querySelector('li[data-type="All"]'))||void 0===s||s.classList.add("add"))}n.d(t,{J:function(){return i},l:function(){return s}})},2316:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(184),s=function(e){var t=e.classname,n=e.children;return(0,i.jsx)("div",{className:"goodsrow",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"goodsrow__row",children:(0,i.jsx)("div",{className:"goodsrow__container ".concat(t),children:n})})})})}},6197:function(e,t,n){n.d(t,{m:function(){return s}});var i=n(4805);function s(e){var t,n,s,r=e.target;r.closest(".wemersion")?null!==(t=r.closest(".wemersion"))&&void 0!==t&&t.classList.contains("add")&&r.closest(".wemersion__head")?null===(n=r.closest(".wemersion"))||void 0===n||n.classList.remove("add"):((0,i.$)(".wemersion").remove("add"),null===(s=r.closest(".wemersion"))||void 0===s||s.classList.add("add")):(0,i.$)(".wemersion").remove("add");r.closest(".searchblock")||(0,i.$)(".searchblock__items").remove("add"),r.closest(".liketuner__row")||((0,i.$)(".liketuner__limit ul").remove("add"),(0,i.$)(".liketuner__limit").remove("add"))}},3134:function(){}}]);
//# sourceMappingURL=129.21cbfd61.chunk.js.map