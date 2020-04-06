!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(e=e||{},"function"==typeof t)return t(e,n);var i=document.createElement(t);return Object.keys(e).forEach((function(t){e.hasOwnProperty(t)&&u(i,t,e[t])})),c(n,i),i}function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=document.createDocumentFragment();return e.forEach((function(t){return c(t,o)})),o}n.r(e);var r=document.querySelector("#componentStyles");function a(t){r.innerText+=t.trim().replace(/\t/g,"").replace(/\n/g,"")}function c(t,e){if(Array.isArray(t))t.forEach((function(t){return c(t,e)}));else{if(!t)return;"string"==typeof t?e.appendChild(document.createTextNode(t)):e.appendChild(t)}}function u(t,e,n){var o=e.toLowerCase().trim(),i=e.trim();"classname"==o?t.setAttribute("class",n):o.startsWith("on")&&"function"==typeof n?t.addEventListener(o.replace("on",""),n):-1!=["innerText","value","disabled","classList"].indexOf(i)?t[i]=n:t.setAttribute(e,n)}r||c(r=o("style",{id:"componentStyles"}),document.body);var s,l=(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.connectedCallback=function(){this.addEventListener("click",this.whenClicked),this.hasAttribute("manual")?this.targetURL=this.getAttribute("to"):(this.innerText=this.getAttribute("to"),this.targetURL="home"==this.getAttribute("to")?"#":"#/"+this.getAttribute("to"))},e.prototype.toggle=function(){this.hidden?(this.style.display="flex",this.style.animation="fade-in 0.5s ease-in",this.style.animationFillMode="both"):(this.style.animation="fade-out 0.5s ease-in",this.style.animationFillMode="both")},e.define=function(){a("\n    tab-link {\n        flex: 1;\n        text-align: center;\n        display: flex;\n        font-size: 1.75rem;\n        align-items: center;\n        transition: background 0.25s ease-in-out, color 0.25s ease-in-out;\n        justify-content: center;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    tab-link.mobile {\n        font-size: 2rem;\n    }\n\n    tab-link:not([active=true]):hover { color: var(--accent) }\n\n    tab-link[active=true] { background: var(--accent); }\n"),customElements.define("tab-link",this)},e.prototype.whenClicked=function(){location.href=this.targetURL},e}(HTMLElement);var f=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=matchMedia("(max-width: 550px)"),p=function(t){var e=t.location;return o(i,null,o("button",{id:"openMenu",className:"d-none nothing"},o("i",{className:"color-accent fas fa-bars"})," Menu"),o("br",{className:"d-none mobile-only"}),o("h1",{className:"hero d-inline"},e,"@obliviontech"))},y=function(t){function e(){var e=t.call(this)||this;return c(o(p,{location:e.dataset.location}),e),e.display=e.querySelector(".hero"),e.display.innerText=e.dataset.location+"@obliviontech",h.addEventListener("change",(function(t){var n=t.matches;e.display.innerText=n?e.dataset.location:e.dataset.location+"@obliviontech"})),e}return f(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return["data-location"]},enumerable:!0,configurable:!0}),e.prototype.attributeChangedCallback=function(){this.display.innerText=this.dataset.location,h.matches||(this.display.innerText+="@obliviontech")},e.define=function(){customElements.define("main-heading",this,{extends:"header"})},e}(HTMLElement),m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=["home","about","projects","contact"],v=function(){return o(i,null,b.map((function(t){return o("tab-link",{to:t})})))},g=matchMedia("(max-width: 550px)"),w=function(t){function e(){var e=t.call(this)||this;return g.addEventListener("change",function(t){t.matches?(document.body.style.paddingLeft="0",e.hidden=!0,e.style.display="none"):(document.body.style.paddingLeft="4rem",e.hidden=!1,e.style.display="flex")}.bind(e)),c(o(v,null),e),e}return m(e,t),e.define=function(){a("\n    body { padding-left: 4rem; }\n\n    [is=side-bar] {\n        height: 4rem;\n        width: 100vh;\n        position: fixed;\n        display: flex;\n        flex-direction: row-reverse;\n        transform-origin: top left;\n        transform: rotate(-90deg);\n        top: 100vh; left: 0;\n    }\n"),customElements.define("side-bar",this,{extends:"nav"})},e}(HTMLElement),_=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),x=["home","about","projects","contact"],O=function(t){return o(i,null,o("div",{className:"text-center padding"},o("button",{onClick:t.closeMenu,title:"Close Menu",className:"color-close circle-btn fas fa-times h1"})),x.map((function(t){return o("tab-link",{to:t})})),o("tab-link",{manual:!0,to:"https://github.com/raghav-misra/obliviontech.dev"},"source"))},P=function(t){function e(){var e=t.call(this)||this;return c(o(O,{closeMenu:e.closeMenu.bind(e)}),e),e}return _(e,t),e.define=function(){a("\n    [is=mobile-menu] {\n        position: fixed;\n        top: 0; bottom: 0; \n        left: 0; right: 0;\n        z-index: 69;\n        background: var(--background-accent);\n        display: none;\n        flex-direction: column;\n        justify-content: center;\n    }\n"),customElements.define("mobile-menu",this,{extends:"nav"})},e.prototype.bindToButton=function(t){document.querySelector(t).addEventListener("click",this.openMenu.bind(this))},e.prototype.openMenu=function(){this.style.display="flex",this.hidden=!1,this.style.animation="fade-in 0.5s ease-in",this.style.animationFillMode="both"},e.prototype.closeMenu=function(){var t=this;this.hidden=!0,this.style.animation="fade-out 0.5s ease-out",this.style.animationFillMode="both",setTimeout(function(){return t.style.display="none"}.bind(this),450)},e}(HTMLElement),E=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),M={whenShown:new Event("whenShown"),whenHidden:new Event("whenHidden"),whenConnected:new Event("whenConnected")},j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return E(e,t),Object.defineProperty(e.prototype,"friendlyName",{get:function(){return"/"==this.getAttribute("path")?"home":this.getAttribute("path").replace("/","")},enumerable:!0,configurable:!0}),e.prototype.connectedCallback=function(){this.dispatchEvent(M.whenConnected),this.hidden=!0},e.prototype.showPage=function(t){void 0===t&&(t=null),this.hidden=!1,this.style.display=this.dataset.display||"flex",this.dispatchEvent(M.whenShown),this.style.animation="fade-in 0.5s ease-in",this.style.animationFillMode="both",setTimeout(t,450)},e.prototype.hidePage=function(t){var e=this;void 0===t&&(t=null),this.style.animation="fade-out 0.5s ease-out",this.style.animationFillMode="both",setTimeout(function(){e.hidden=!0,e.dispatchEvent(M.whenHidden),e.style.display="none",t()}.bind(this),450)},e.define=function(){a("\n\tspa-view {\n        flex: 1;\n        display: none;\n        align-items: center;\n        justify-content: center;\n\t}\n"),customElements.define("spa-view",this)},e}(HTMLElement),k=function(){function t(t){this.currentPage=null,this.header=t,window.addEventListener("hashchange",this.onRedirect.bind(this)),this.onRedirect(),function(t){var e=t.pageRoot,n=t.pathMap;document.querySelector(e);Object.keys(n).forEach((function(t){var e=n[t],o=document.querySelector("spa-view[path='"+t+"']");fetch(e).then((function(t){return t.text()})).then((function(t){o.innerHTML=t}))}))}(JSON.parse(document.querySelector("view-config").textContent))}return t.prototype.onRedirect=function(){var t=this,e=window.location.hash.replace("#","");""==e.trim()&&(e="/"),console.log(e),document.querySelectorAll("tab-link").forEach((function(t){return t.removeAttribute("active")}));try{!function(t){if(!t.startsWith("/"))return"bruh no /";""==t.replace("/","")&&(t="home"),document.querySelectorAll("tab-link[to='"+t.replace("/","")+"']").forEach((function(t){return t.setAttribute("active","true")}))}(e)}catch(t){}this.currentPage?this.currentView.hidePage(function(){return t.showPage(e)}.bind(this)):this.showPage(e)},t.prototype.showPage=function(t){this.currentPage=t,this.currentView.showPage(),this.header.dataset.location=this.currentView.friendlyName},Object.defineProperty(t.prototype,"currentView",{get:function(){return document.querySelector("spa-view[path='"+this.currentPage+"']")||document.querySelector("spa-view[path='404']")},enumerable:!0,configurable:!0}),t}();d.define(),y.define();var S=document.querySelector("[is=main-heading]");w.define(),P.define(),document.querySelector("nav[is=mobile-menu]").bindToButton("#openMenu"),j.define(),new k(S)}]);
//# sourceMappingURL=app.js.map