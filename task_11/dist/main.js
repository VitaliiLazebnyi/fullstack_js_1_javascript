(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=function(t,e){for(var n=c(t,2),r=n[0],o=n[1],i=e[t[0]][t[1]].color,a=[],u=[[1,1],[-1,-1],[1,-1],[-1,1]],l=null,s=0;s<u.length;s++){l=u[s];for(var f=1;f<8;f++){var h=r+f*l[1],p=o+f*l[0];if(p<0||p>7||h<0||h>7)break;if(e[h][p]){if(i===e[h][p].color)break;a.push([h,p]);break}a.push([h,p])}}return a},h=new WeakMap,p=new WeakSet,y=function(){function t(e){var n;a(this,t),p.add(this),(n="_color")in this?Object.defineProperty(this,n,{value:null,enumerable:!0,configurable:!0,writable:!0}):this[n]=null,h.set(this,{writable:!0,value:["white","black"]}),function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}(this,p,v).call(this,e)}return l(t,[{key:"color",get:function(){return this._color}}]),t}(),v=function(t){if(!function(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}(this,h).includes(t))throw new Error("Invalid color");this._color=t},w=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",value:function(t,e){var n,r=c(t,2),o=r[0],i=r[1],a=e[t[0]][t[1]].color,u=[];return e[o+(n="white"===a?-1:1)][i]||u.push([o+n,i]),("white"===a&&6===o||"black"===a&&1===o)&&u.push([o+2*n,i]),e[o+n][i-1]&&e[o+n][i-1].color!==a&&u.push([o+n,i-1]),e[o+n][i+1]&&e[o+n][i+1].color!==a&&u.push([o+n,i+1]),u}}]),o}(y),d=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",get:function(){return f}}]),o}(y),b=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",value:function(t,e){var n=c(t,2),r=n[0],o=n[1];return[[o+1,r-2],[o+2,r-1],[o+2,r+1],[o+1,r+2],[o-1,r+2],[o-2,r+1],[o-2,r-1],[o-1,r-2]]}}]),o}(y),g=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",value:function(t,e){return[]}}]),o}(y),m=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",value:function(t,e){return f(t,e)}}]),o}(y),k=function(t){e(o,t);var n=r(o);function o(){return a(this,o),n.apply(this,arguments)}return l(o,[{key:"generateMoves",value:function(t,e){}}]),o}(y);function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}function W(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var A=new WeakMap,M=new WeakMap,P=new WeakMap,I=new WeakSet,_=new WeakSet,R=new WeakSet,U=new WeakSet,F=new WeakSet,x=new WeakSet,C=new WeakSet,G=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),C.add(this),x.add(this),F.add(this),U.add(this),R.add(this),_.add(this),I.add(this),A.set(this,{writable:!0,value:null}),M.set(this,{writable:!0,value:[]}),P.set(this,{writable:!0,value:[]}),W(this,U,q).call(this)}var e,n;return e=t,(n=[{key:"move",value:function(t,e){var n=S(W(this,F,z).call(this,t),2),r=n[0],o=n[1],i=S(W(this,F,z).call(this,e),2),a=i[0],u=i[1];W(this,C,B).call(this,[r,o],[a,u]),O(this,A)[a][u]&&O(this,P).push(O(this,A)[a][u]),O(this,A)[a][u]=O(this,A)[r][o],O(this,A)[r][o]=null,O(this,M).push("".concat(t,"->").concat(e))}},{key:"color",value:function(t){var e=S(W(this,F,z).call(this,t),2),n=e[0],r=e[1];return O(this,A)[n][r]?O(this,A)[n][r].color:null}},{key:"field",get:function(){return O(this,A)}},{key:"userFriendlyField",get:function(){return O(this,A).map((function(t){return t.map((function(t){return t?t.color[0]+t.constructor.name[0]:"  "}))})).join("\n")}},{key:"removed",get:function(){return O(this,P)}},{key:"showHistory",get:function(){return O(this,M)}}])&&j(e.prototype,n),t}(),H=function(t){var e=new g(t),n=new b(t),r=new d(t);return[e,n,r,new m(t),new k(t),r,n,e]},D=function(t){var e=new w(t);return new Array(8).fill(e)},$=function(){return new Array(8).fill(null)},q=function(){!function(t,e,n){var r=e.get(t);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(t,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}}(this,A,[W(this,I,H).call(this,"black"),W(this,_,D).call(this,"black"),W(this,R,$).call(this),W(this,R,$).call(this),W(this,R,$).call(this),W(this,R,$).call(this),W(this,_,D).call(this,"white"),W(this,I,H).call(this,"white")])},z=function(t){var e={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}[t[0]];return[8-parseInt(t[1]),e]},B=function(t,e){var n=S(t,2),r=n[0],o=n[1],i=S(e,2),a=i[0],u=i[1],l=O(this,A)[r][o];if(!l)throw new Error("nothing to move");var c,s=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=E(t))){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(l.generateMoves([r,o],O(this,A)));try{for(s.s();!(c=s.n()).done;){var f=c.value;if(f[0]===a&&f[1]===u)return}}catch(t){s.e(t)}finally{s.f()}throw new Error("Invalid move")};function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function K(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}function L(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}function N(t,e,n){var r=e.get(t);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(t,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}var Q=new WeakMap,V=new WeakMap,X=new WeakMap,Y=new WeakSet,Z=new WeakSet,tt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Z.add(this),Y.add(this),Q.set(this,{writable:!0,value:null}),V.set(this,{writable:!0,value:null}),X.set(this,{writable:!0,value:"white"})}var e,n;return e=t,(n=[{key:"start",value:function(){N(this,Q,new G),L(this,Y,et).call(this,"progress")}},{key:"movePiece",value:function(t,e){if(K(this,X)!==K(this,Q).color(t))throw new Error("Wrong turn.");K(this,Q).move(t,e),L(this,Z,nt).call(this)}},{key:"proposeToGiveUpTo",value:function(t){L(this,Y,et).call(this,"give up proposition")}},{key:"acceptGiveUp",value:function(){L(this,Y,et).call(this,"".concat(K(this,X)," won"))}},{key:"refuseGiveUp",value:function(){L(this,Y,et).call(this,"progress")}},{key:"showField",get:function(){return K(this,Q).userFriendlyField}},{key:"showRemoved",get:function(){return K(this,Q).removed}},{key:"showHistory",get:function(){return K(this,Q).showHistory}}])&&J(e.prototype,n),t}(),et=function(t){if(!["progress","white won","black won","pat","give up proposition"].includes(t))throw new Error("Invalid state");N(this,V,t)},nt=function(){"white"===K(this,X)?N(this,X,"black"):N(this,X,"white")},rt=new tt;rt.start(),rt.movePiece("g2","g4"),rt.movePiece("e7","e5"),rt.movePiece("f2","f3"),rt.movePiece("d8","h4"),rt.proposeToGiveUpTo("white"),rt.acceptGiveUp(),console.log(rt.showField),console.log(rt.showRemoved),console.log(rt.showHistory)})();