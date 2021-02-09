!function(){"use strict";var e={168:function(e,r,n){var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,':root{--color-primary: #FFAFD4;--color-primary-dark: #F865A8;--color-primary-light: #FFC7E1;--color-black: #333333;--color-white: #F5F5F5}*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}body{box-sizing:border-box;background-color:var(--color-primary-light)}body{font-family:"Roboto",sans-serif;font-weight:400;line-height:1.7;color:var(--color-black)}.center-items{display:flex;flex-direction:row;align-items:center;justify-content:space-around;flex-wrap:wrap}.container{max-width:120rem;min-height:100vh;margin:auto;padding:1.6rem}.card{width:12rem;height:12rem;margin:1rem;border-radius:8px;cursor:pointer;perspective:100rem}.card__inner{width:100%;height:100%;border-radius:8px;border:1rem solid var(--color-primary-dark);background-color:var(--color-primary);transition:transform .75s;transform-style:preserve-3d}.card:hover .card__inner{transform:rotateY(180deg)}.card__inner--front,.card__inner--back{position:absolute;width:100%;height:100%;padding:1rem;background-color:var(--color-primary);-webkit-backface-visibility:hidden;backface-visibility:hidden}.card__inner--front__image{width:100%;height:100%}.card__inner--back{text-align:center;transform:rotateY(180deg)}.card__inner--back__image{height:75%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.card__inner--back__text{font-size:1.4rem;font-weight:800;letter-spacing:2px;color:var(--color-primary-dark);text-shadow:2px 0 0 var(--color-black),-2px 0 0 var(--color-black),0 2px 0 var(--color-black),0 -2px 0 var(--color-black),1px 1px var(--color-black),-1px -1px 0 var(--color-black),1px -1px 0 var(--color-black),-1px 1px 0 var(--color-black)}',""]),r.Z=o},645:function(e){e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);t&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),r.push(l))}},r}},379:function(e,r,n){var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function a(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function c(e,r){for(var n={},t=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var s=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:d,updater:v(f,r),references:1}),t.push(d)}return t}function l(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,d=(u=[],function(e,r){return u[e]=r,u.filter(Boolean).join("\n")});function s(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function v(e,r){var n,t,o;if(r.singleton){var i=h++;n=p||(p=l(r)),t=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=l(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=a(n[t]);i[o].references--}for(var l=c(e,r),u=0;u<n.length;u++){var d=a(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e=n(379),r=n.n(e),t=n(168),o=(r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,["hen","cat","cow","dog","frog"]);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e){return document.getElementById(e)}function c(e,r){e.addEventListener("mouseenter",(function(){return function(e){var r="./assets/audio/".concat(e,".mp3");new Audio(r).play()}(r)}))}!function(){var e,r=function(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}(o);try{for(r.s();!(e=r.n()).done;){var n=e.value;c(a(n),n)}}catch(e){r.e(e)}finally{r.f()}}()}()}();