(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{109:function(t,e,i){},110:function(t,e,i){},111:function(t,e,i){},112:function(t,e,i){},113:function(t,e,i){},116:function(t,e,i){},122:function(t,e,i){},140:function(t,e,i){},141:function(t,e,i){},142:function(t,e,i){},143:function(t,e,i){},144:function(t,e,i){},145:function(t,e,i){"use strict";i.r(e);var o=i(0),c=i.n(o),A=i(19),a=i.n(A),r=(i(109),i(110),i(29)),s=i(28),n=(i(111),i.p+"static/media/cart.3aef7f42.svg"),l=i.p+"static/media/favorite.ed661a1f.svg",K=i.p+"static/media/logo.988637e7.svg",d=i(37),j=(i(112),i.p+"static/media/close.48d04c28.svg"),g=(i(113),i(1)),u=function(t){return Object(g.jsxs)("div",{className:"cart-modal__item",children:[Object(g.jsx)("div",{className:"cart-modal__item__img",children:Object(g.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABTAFMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiuVv/h1YahrV7qbXV3HNeTWs0qIY9hMH3AMoSAeM85OMZAyKzdL+DulaSZjFqGpSGaeCeQyvE24xOXUf6vgEnBxg4AGQM5AO8ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z",alt:"product"})}),Object(g.jsxs)("div",{className:"cart-modal__item__info",children:[Object(g.jsx)("div",{className:"cart-modal__item__title",children:t.title}),Object(g.jsxs)("div",{className:"cart-modal__item__price",children:["1 x ",Object(g.jsx)("b",{children:t.getValute(t.prodId)+(Math.round(100*t.price)/100).toFixed(2)||"0.00"})]})]}),Object(g.jsx)("div",{className:"cart-modal__item__remove",onClick:function(){return t.removeFromChart(t.prodId)},children:Object(g.jsx)("img",{src:j,alt:"close"})})]})},B=function(t){var e=t.isOpen?" open":"",i=0,o=function(){return t.getValute(t.valute)+(Math.round(100*i)/100).toFixed(2)||"0.00"};return Object(g.jsx)("div",{className:"cart-modal".concat(e),onClick:function(e){return t.closeModal(e)},children:Object(g.jsx)("div",{className:"cart-modal__body",children:Object(g.jsxs)("div",{className:"cart-modal__content",children:[Object(g.jsxs)("div",{className:"cart-modal__top",children:[Object(g.jsx)("h2",{children:"Cart"}),Object(g.jsx)("div",{className:"cart-modal__close",children:Object(g.jsx)("img",{src:j,alt:"close"})})]}),Object(g.jsx)("div",{className:"cart-modal__items",children:function(){var e=t.products,o=[];return e?(e.map((function(e){return e.inCart?(i+=e.price,o=[].concat(Object(d.a)(o),[Object(g.jsx)(u,{prodId:e.id,title:e.title,price:e.price,valute:t.valute,getValute:function(e){return t.getValute(e)},removeFromChart:function(e){return t.removeFromChart(e)}},e.id)])):null})),o.length?o:Object(g.jsx)("div",{className:"cart-modal__items__title",children:"No cart items yet, add some items!!"})):Object(g.jsx)("div",{className:"cart-modal__items__title",children:"No items yet!"})}()}),Object(g.jsxs)("div",{className:"cart-modal__amount",children:[Object(g.jsxs)("div",{className:"cart-modal__amount__item",children:[Object(g.jsx)("span",{children:"Sub total:"}),Object(g.jsx)("span",{children:o()})]}),Object(g.jsxs)("div",{className:"cart-modal__amount__item",children:[Object(g.jsx)("span",{children:"Total:"}),Object(g.jsx)("span",{children:o()})]})]}),Object(g.jsxs)("div",{className:"cart-modal__btns",children:[Object(g.jsx)("button",{className:"button",children:"view chart"}),Object(g.jsx)("button",{className:"button",children:"checkout"})]})]})})})},h=(i(115),i(56)),C=i(24),Q=(i(116),function(t){var e=t.to,i=t.modifierEnd,o=t.icon,c=t.count,A=t.setIsOpen,a=t.isOpen,r=i?"header__badge_".concat(i):"";return e?Object(g.jsxs)(C.b,{to:e,className:"header__badge ".concat(r),children:[Object(g.jsx)("img",{src:o,alt:"badge icon"}),Object(g.jsx)("div",{className:"header__badge__count",children:c})]}):Object(g.jsxs)("div",{className:"header__badge ".concat(r),onClick:function(){return A(!a)},children:[Object(g.jsx)("img",{src:o,alt:"badge icon"}),Object(g.jsx)("div",{className:"header__badge__count",children:c})]})}),m=h.a.Option,b=function(t){var e=Object(o.useState)(!1),i=Object(s.a)(e,2),c=i[0],A=i[1],a=0,d=0;t.products.map((function(t){return t.inCart&&(a+=1),t.favorite&&(d+=1),null}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"header",children:Object(g.jsxs)("div",{className:"header__wrap",children:[Object(g.jsx)("div",{className:"header__logo",children:Object(g.jsx)(C.b,{to:"",children:Object(g.jsx)("img",{src:K,alt:"cart"})})}),Object(g.jsxs)("div",{className:"header__action",children:[Object(g.jsx)(C.b,{to:"/users",className:"users-btn"}),Object(g.jsxs)("div",{className:"valute",children:[Object(g.jsx)("span",{children:"Valute: "}),Object(g.jsxs)(h.a,{className:"valute__select",defaultValue:"usd",name:"valute",onChange:function(e){t.setValute(e);var i=1;"amd"===e?i=525:"rur"===e&&(i=76),t.setProducts(t.products.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{price:t.defaultPrice*i})})))},children:[Object(g.jsx)(m,{value:"usd",children:"usd $"}),Object(g.jsx)(m,{value:"rur",children:"rur \u20bd"}),Object(g.jsx)(m,{value:"amd",children:"amd \u058f"})]})]}),Object(g.jsx)(Q,{modifierEnd:"cart",icon:n,count:a,setIsOpen:A,isOpen:c}),Object(g.jsx)(Q,{modifierEnd:"favorite",to:"/favorite",icon:l,count:d})]})]})}),Object(g.jsx)(B,{isOpen:c,products:t.products,valute:t.valute,closeModal:function(t){return function(t){switch(t.target.className){case"cart-modal open":case"cart-modal__close":A(!1);break;default:return null}}(t)},removeFromChart:function(e){return t.removeFromChart(e)},getValute:function(e){return t.getValute(e)}})]})},O=i(17),x=(i(122),function(t){var e=t.inCart?"in-cart":"",i=t.favorite?"favorite":"";return Object(g.jsxs)("div",{className:"product-actions",children:[Object(g.jsx)("div",{className:"product-actions__item product-actions__item_cart ".concat(e),onClick:function(){return t.addToCart(t.prodId)},children:Object(g.jsx)("div",{className:"product-actions__item__tooltip",children:"Add to cart"})}),Object(g.jsx)("div",{className:"product-actions__item product-actions__item_favorite ".concat(i),onClick:function(){return t.toggleFavorite(t.prodId)},children:Object(g.jsx)("div",{className:"product-actions__item__tooltip",children:"Add to favorite"})}),Object(g.jsx)("div",{className:"product-actions__item product-actions__item_lock",children:Object(g.jsx)("div",{className:"product-actions__item__tooltip",children:"Add to lock"})})]})}),I=(i(81),"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADUANQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOV8VfFPwr4J1S207W9ZhsLy4UOkTqzYUttDOVBCKTxliBVqXx/wCHYvFsHhg6tbnX5gStghLSABDJ82BhflGfmxkY9RXjn7QPibwsfEsPhC7mtNHuNYiifWtZlj+dLKN9yRKQCS7MuB2Uc9+Ol8YLat8cPhHPaKnlTw6o4kQY3r9ljCknqeMdaAO00/4p+FNV8Vy+GrTWoJtajZ0Nsqtgsgy6q5G1mUdVBJHOelbPiHxFpvhTR7nVdXvI7HT7cBpZ5ei5OB05JJIAA5JNeA6V4t8FeJfjLHax3lnoOleHJbqOztogYZL29lUrPNkD5VUA4OQSec1y/gX4j2dlo/ifUvHV7qPiGz0+1hn0Ow1RmYXlv9okEVwVJIMhcIpkIyoxyRQB9DxfF7wdL4YbxF/b9rHo6zm2a4m3RkTAZMZRgGD4524zjmn6/wDFjwn4Y0jS9T1PWI7Wz1SIT2bGKRmljKht4RVLABSCSQMZ5xXkvheTSdW+AXxD1GLUrTWNYv7e/wBT1JrdT5dtcy27YjTI/hXjI68881V8deMNF8NfCnwFYSLZ23iHWtCg0+HVLuPIsbV4EE8hOM9DgKOp+lAH0VY3tvqVlBd2kyXFrPGssU0ZyrowyGB7gg1PXP8Aw/i0q38EaHBodz9s0iG0jhtbj/noiqFDfU4roKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"),E=function(t){return Object(g.jsx)("div",{className:"product",children:Object(g.jsxs)("div",{className:"product__wrap",children:[Object(g.jsx)("div",{className:"product__img",children:Object(g.jsx)("a",{href:"#test",children:Object(g.jsx)("img",{src:I,alt:""})})}),Object(g.jsxs)("div",{className:"product__info",children:[Object(g.jsx)("a",{href:"#test",className:"product__title",children:t.title}),Object(g.jsx)("div",{className:"product__price",children:t.getValute(t.valute)+(Math.round(100*t.price)/100).toFixed(2)||"0.00"}),Object(g.jsx)("div",{className:"product__left",children:t.left||"125 left"})]}),Object(g.jsx)(x,{prodId:t.id,favorite:t.favorite,inCart:t.inCart,addToCart:function(e){return t.addToCart(e)},toggleFavorite:function(e){return t.toggleFavorite(e)}})]})})},p=function(t){return Object(g.jsx)("div",{className:"products",children:Object(g.jsx)("div",{className:"products__wrap",children:function(){var e=t.products,i=[];return e||e.length?(e.map((function(e){return i=[].concat(Object(d.a)(i),[Object(g.jsx)(E,{id:e.id,title:e.title,price:e.price,valute:t.valute,favorite:e.favorite,inCart:e.inCart,addToCart:function(e){return t.addToCart(e)},toggleFavorite:function(e){return t.toggleFavorite(e)},getValute:function(e){return t.getValute(e)}},e.id)])})),i):Object(g.jsx)("div",{className:"products__title",children:"No Products yet :("})}()})})},F=(i(82),i.p+"static/media/delete.37e4cac9.svg"),f=function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"favorite-products__table__img",children:Object(g.jsx)("img",{src:I,alt:"product"})})}),Object(g.jsx)("td",{children:t.title}),Object(g.jsx)("td",{children:t.getValute(t.valute)+(Math.round(100*t.price)/100).toFixed(2)||"0.00"}),Object(g.jsx)("td",{children:t.stockStatus||"In Stock"}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{className:"favorite-products__table__button button",onClick:function(){return t.addToCart(t.prodId)},children:"add to cart"})}),Object(g.jsx)("td",{children:Object(g.jsx)("div",{className:"favorite-products__table__delete",onClick:function(){return t.toggleFavorite(t.prodId)},children:Object(g.jsx)("img",{src:F,alt:"delete"})})})]})},R=function(t){return Object(g.jsxs)("div",{className:"favorite-products",children:[Object(g.jsx)("h1",{children:"Favorite products"}),Object(g.jsxs)("table",{className:"favorite-products__table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Image"})}),Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Product"})}),Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Price"})}),Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Stock Status"})}),Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Add To Cart"})}),Object(g.jsx)("td",{children:Object(g.jsx)("h3",{children:"Delete"})})]})}),Object(g.jsx)("tbody",{children:function(){var e=t.products,i=[];return e&&(e.map((function(e){return e.favorite?i=[].concat(Object(d.a)(i),[Object(g.jsx)(f,{prodId:e.id,title:e.title,price:e.price,valute:t.valute,getValute:function(e){return t.getValute(e)},toggleFavorite:function(e){return t.toggleFavorite(e)},addToCart:function(e){return t.addToCart(e)}},e.id)]):null})),!i.length)?Object(g.jsx)("tr",{children:Object(g.jsxs)("td",{className:"favorite-products__table__empty",colSpan:"6",children:[Object(g.jsx)("h2",{children:"No Favorite items yet!"}),Object(g.jsx)(C.b,{className:"button",to:"",children:"Go to Home Page"})]})}):i}()})]})]})},w=i(104),D=i(99).create({baseURL:"https://reqres.in/"}),U=function(t){return D.get("api/users?page=".concat(t,"?delay=1")).then((function(t){return t.data}))},N=function(t){return D.get("api/users/".concat(t,"?delay=1")).then((function(t){return t.data}))},M=i(147),J=(i(140),function(t){return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("img",{src:"data:image/gif;base64,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",alt:"...loading"})})}),Y=(i(141),function(t){return Object(g.jsx)("div",{className:"user",children:Object(g.jsxs)("div",{className:"user__wrap",title:t.firstName,children:[Object(g.jsx)(C.b,{to:"profile/".concat(t.id),className:"user__photo",children:Object(g.jsx)("img",{src:t.avatar,alt:"avatar"})}),Object(g.jsx)("div",{className:"user__name",title:t.firstName,children:t.firstName+" "+t.lastName})]})})}),v=(i(142),function(t){return t.isFetching?Object(g.jsx)(J,{}):Object(g.jsxs)("div",{className:"users-container",children:[Object(g.jsx)("div",{className:"users",children:function(){var e=t.users.data||[],i=[];return e.length?(e.map((function(t){return i=[].concat(Object(d.a)(i),[Object(g.jsx)(Y,{id:t.id,firstName:t.first_name,lastName:t.last_name,avatar:t.avatar,email:t.email},t.id)])})),i):Object(g.jsx)("div",{children:"No users yet!! :D"})}()}),Object(g.jsx)("div",{className:"pagination",children:Object(g.jsx)(M.a,{current:t.users.page||1,total:10*t.users.total_pages||10,onChange:function(e){t.setCurrentPage(e)}})})]})}),G=(i(143),i(144),Object(O.e)((function(t){var e=t.match.params.userId||1,i=Object(o.useState)(null),c=Object(s.a)(i,2),A=c[0],a=c[1];return Object(o.useEffect)((function(){N(e).then((function(t){a(t.data)}))}),[e]),A?Object(g.jsxs)("div",{className:"profile",children:[Object(g.jsx)("div",{className:"profile__avatar",children:Object(g.jsx)("img",{src:A.avatar,alt:"avatar"})}),Object(g.jsx)("div",{className:"profile__subtitle",children:"Name:"}),Object(g.jsx)("h1",{className:"profile__name",children:A.first_name+" "+A.last_name}),Object(g.jsx)("div",{className:"profile__subtitle",children:"Email:"}),Object(g.jsx)("div",{className:"profile__email",children:A.email})]}):Object(g.jsx)(J,{})}))),k=function(t){var e=Object(o.useState)("usd"),i=Object(s.a)(e,2),c=i[0],A=i[1],a=Object(o.useState)([{id:1,title:"Cart item 1",price:1,defaultPrice:1,inCart:!1,favorite:!1},{id:2,title:"Cart item 2",price:100,defaultPrice:100,inCart:!1,favorite:!1},{id:3,title:"Cart item 3",price:1000.5,defaultPrice:1000.5,inCart:!1,favorite:!1},{id:4,title:"Cart item 4",price:120,defaultPrice:120,inCart:!1,favorite:!1},{id:5,title:"Cart item 5",price:20.5,defaultPrice:20.5,inCart:!1,favorite:!1},{id:6,title:"Cart item 6",price:5.55,defaultPrice:5.55,inCart:!1,favorite:!1},{id:7,title:"Cart item 7",price:500.05,defaultPrice:500.05,inCart:!1,favorite:!1}]),n=Object(s.a)(a,2),l=n[0],K=n[1],d=Object(o.useState)([]),j=Object(s.a)(d,2),u=j[0],B=j[1],h=Object(o.useState)(!1),C=Object(s.a)(h,2),Q=C[0],m=C[1],x=Object(o.useState)(1),I=Object(s.a)(x,2),E=I[0],F=I[1];Object(o.useEffect)((function(){m(!0),U(E).then((function(t){B(t),m(!1)}))}),[E]);var f=function(t){w.b.success(t)},D=function(t){w.b.error(t)},N=function(t){var e;K(l.map((function(i){return i.id===t?(e=i.inCart,Object(r.a)(Object(r.a)({},i),{},{inCart:!0})):i}))),e||f("Product is successfuly added to cart!")},M=function(t){var e;K(l.map((function(i){return i.id===t?(e=i.favorite,Object(r.a)(Object(r.a)({},i),{},{favorite:!i.favorite})):i}))),e?D("Product is removed from favorite list!"):f("Product is successfuly added to favorite list!")},J=function(t){return"usd"===t?"$":"rur"===t?"\u20bd":"amd"===t?"\u058f":"$"};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b,{products:l,setProducts:K,removeFromChart:function(t){return function(t){K(l.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{inCart:!1}):e}))),D("Product is removed from cart!")}(t)},valute:c,setValute:function(t){return A(t)},getValute:function(t){return J(t)}}),Object(g.jsx)(O.a,{path:"/favorite",render:function(){return Object(g.jsx)(R,{products:l,valute:c,getValute:function(t){return J(t)},toggleFavorite:function(t){return M(t)},addToCart:function(t){return N(t)}})}}),Object(g.jsx)(O.a,{path:"/users",render:function(){return Object(g.jsx)(v,{setCurrentPage:F,users:u,isFetching:Q})}}),Object(g.jsx)(O.a,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(G,{})}}),Object(g.jsx)(O.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(p,{addToCart:function(t){return N(t)},toggleFavorite:function(t){return M(t)},products:l,valute:c,getValute:function(t){return J(t)}})}})]})};var H=function(){return Object(g.jsx)(k,{})},S=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,148)).then((function(e){var i=e.getCLS,o=e.getFID,c=e.getFCP,A=e.getLCP,a=e.getTTFB;i(t),o(t),c(t),A(t),a(t)}))};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(C.a,{children:Object(g.jsx)(H,{})})}),document.getElementById("root")),S()},81:function(t,e,i){},82:function(t,e,i){}},[[145,1,2]]]);
//# sourceMappingURL=main.b44bd1df.chunk.js.map