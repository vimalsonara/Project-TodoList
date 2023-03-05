(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"/* css reset start */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nbody {\n  min-height: 100vh;\n  background: rgb(0, 0, 102);\n}\n/* css reset end */\n\nh1 {\n    color: white;\n    font-weight: bold;\n    font-size: 24px;\n    text-align: center;\n    padding-top: 13px;\n}\n\nform {\n    padding-top: 10px;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput {\n  width: 200px;\n  height: 30px;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 8px;\n}\n\nbutton {\n  width: 100px;\n  height: 30px;\n  border-radius: 10px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#todo-list {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  justify-content: center;\n  gap: 20px;\n}\n\n.todo {\n  width: 300px;\n  height: auto;\n  padding: 10px;\n  border-radius: 8px;\n  background: rgb(77, 121, 255);\n  display: grid;\n  grid-template-columns: 25px 230px 25px;\n  grid-template-rows: minmax(2, auto);\n}\n\n.check {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  width: 15px;\n  height: 15px;\n\n}\n\n.todoName {\n  font-size: 24px;\n  font-weight: bold;\n  grid-column: 2 / 3;\n}\n\n.todoDueDate {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.trashIcon {\n  grid-row: 2 / 3;\n  width: 20px;\n  height: 20px;\n}\n\n.trashIcon:hover {\n  cursor: pointer;\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=n.p+"321d985cbeb9c91f04ec.svg";class g{constructor(t,e){this.todo=t,this.dueDate=e,this.completed=!1}}const v=new class{constructor(){this.todos=JSON.parse(localStorage.getItem("todos"))||[]}addTodo(t){this.todos.push(t),this.saveTodo()}delteTodo(t){this.todos.splice(this.todos.indexOf(t),1),this.saveTodo()}completeTodo(t){const e=this.todos.indexOf(t);!0!==t.completed?(this.todos[e].completed=!0,this.saveTodo()):(this.todos[e].completed=!1,this.saveTodo())}displayTodo(t){const e=document.querySelector("#todo-list"),n=document.createElement("div");n.classList.add("todo");const o=document.createElement("p");o.classList.add("todoName"),o.innerText=t.todo;const r=document.createElement("p");r.classList.add("todoDueDate"),r.innerText=t.dueDate;const a=document.createElement("input");a.classList.add("check"),a.type="checkbox",n.appendChild(a),n.appendChild(o),n.appendChild(r);const i=document.createElement("img");i.src=f,i.alt="trash icon",i.classList.add("trashIcon"),n.appendChild(i),i.addEventListener("click",(e=>{this.delteTodo(t),e.target.parentElement.remove(),this.saveTodo()})),n.addEventListener("click",(e=>{e.target.classList.contains("check")&&this.completeTodo(t)})),e.appendChild(n)}saveTodo(){localStorage.setItem("todos",JSON.stringify(this.todos))}},x=document.querySelector("#todo-form");x.addEventListener("submit",(t=>{t.preventDefault();const e=x.todo.value,n=x.dueDate.value,o=new g(e,n);v.addTodo(o),v.displayTodo(o),x.reset()})),window.addEventListener("load",(()=>{const t=JSON.parse(localStorage.getItem("todos"));""!=t&&t.forEach((t=>{v.displayTodo(t),1==t.completed&&document.querySelectorAll(".todo").forEach((e=>{e.childNodes[1].textContent===t.todo&&(e.childNodes[0].classList.add("markCheck"),document.querySelectorAll(".markCheck").forEach((t=>{t.checked=!0})))}))}))}))})()})();