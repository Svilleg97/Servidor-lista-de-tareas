var e,t={7507:(e,t,n)=>{(()=>{var t={2989:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var n;!function(){var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8514:(e,t,n)=>{var o=n(6115);e.exports=function(e,t,n){e&&o((function(){e.apply(n||null,t||[])}))}},5229:(e,t,n)=>{var o=n(2989),r=n(8514);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var o=arguments.length;if(1===o)delete i[t];else if(0===o)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=o(arguments),a=this||e;if("error"===t&&!1!==n.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach((function(o){n.async?r(o,i,a):o.apply(a,i),o._once&&e.off(t,o)})),e}},e}},3285:(e,t,n)=>{n(8691),e.exports=n(4579).Array.isArray},6981:(e,t,n)=>{n(2699),e.exports=n(4579).Object.assign},5627:(e,t,n)=>{n(6760);var o=n(4579).Object;e.exports=function(e,t){return o.create(e,t)}},7965:(e,t,n)=>{n(520),e.exports=n(4579).Object.entries},8613:(e,t,n)=>{n(961),e.exports=n(4579).Object.keys},433:(e,t,n)=>{n(9349),e.exports=n(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,n)=>{var o=n(6727);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,n)=>{var o=n(7932),r=n(8728),i=n(6531);e.exports=function(e){return function(t,n,s){var a,l=o(t),c=r(l.length),d=i(s,c);if(e&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,n)=>{var o=n(5663);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(e,t,n)=>{var o=n(6727),r=n(3938).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,n)=>{var o=n(3938),r=n(4579),i=n(9216),s=n(1818),a=n(7069),l="prototype",c=function(e,t,n){var d,h,u,p=e&c.F,f=e&c.G,m=e&c.S,g=e&c.P,b=e&c.B,v=e&c.W,y=f?r:r[t]||(r[t]={}),w=y[l],C=f?o:m?o[t]:(o[t]||{})[l];for(d in f&&(n=t),n)(h=!p&&C&&void 0!==C[d])&&a(y,d)||(u=h?C[d]:n[d],y[d]=f&&"function"!=typeof C[d]?n[d]:b&&h?i(u,o):v&&C[d]==u?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[l]=e[l],t}(u):g&&"function"==typeof u?i(Function.call,u):u,g&&((y.virtual||(y.virtual={}))[d]=u,e&c.R&&w&&!w[d]&&s(w,d,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},1818:(e,t,n)=>{var o=n(4743),r=n(3101);e.exports=n(9666)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},4881:(e,t,n)=>{var o=n(3938).document;e.exports=o&&o.documentElement},3758:(e,t,n)=>{e.exports=!n(9666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,n)=>{var o=n(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},1421:(e,t,n)=>{var o=n(2894);e.exports=Array.isArray||function(e){return"Array"==o(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(8195),s=n(6274),a=n(6530),l=n(799),c=Object.assign;e.exports=!c||n(7929)((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=o}))?function(e,t){for(var n=a(e),c=arguments.length,d=1,h=i.f,u=s.f;c>d;)for(var p,f=l(arguments[d++]),m=h?r(f).concat(h(f)):r(f),g=m.length,b=0;g>b;)p=m[b++],o&&!u.call(f,p)||(n[p]=f[p]);return n}:c},526:(e,t,n)=>{var o=n(2159),r=n(7856),i=n(3338),s=n(8989)("IE_PROTO"),a=function(){},l="prototype",c=function(){var e,t=n(7467)("iframe"),o=i.length;for(t.style.display="none",n(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;o--;)delete c[l][i[o]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[l]=o(e),n=new a,a[l]=null,n[s]=e):n=c(),void 0===t?n:r(n,t)}},4743:(e,t,n)=>{var o=n(2159),r=n(3758),i=n(3206),s=Object.defineProperty;t.f=n(9666)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},7856:(e,t,n)=>{var o=n(4743),r=n(2159),i=n(6162);e.exports=n(9666)?Object.defineProperties:function(e,t){r(e);for(var n,s=i(t),a=s.length,l=0;a>l;)o.f(e,n=s[l++],t[n]);return e}},6183:(e,t,n)=>{var o=n(6274),r=n(3101),i=n(7932),s=n(3206),a=n(7069),l=n(3758),c=Object.getOwnPropertyDescriptor;t.f=n(9666)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(e){}if(a(e,t))return r(!o.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,n)=>{var o=n(7069),r=n(7932),i=n(7428)(!1),s=n(8989)("IE_PROTO");e.exports=function(e,t){var n,a=r(e),l=0,c=[];for(n in a)n!=s&&o(a,n)&&c.push(n);for(;t.length>l;)o(a,n=t[l++])&&(~i(c,n)||c.push(n));return c}},6162:(e,t,n)=>{var o=n(2963),r=n(3338);e.exports=Object.keys||function(e){return o(e,r)}},6274:(e,t)=>{t.f={}.propertyIsEnumerable},2584:(e,t,n)=>{var o=n(3856),r=n(4579),i=n(7929);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],s={};s[e]=t(n),o(o.S+o.F*i((function(){n(1)})),"Object",s)}},2050:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(7932),s=n(6274).f;e.exports=function(e){return function(t){for(var n,a=i(t),l=r(a),c=l.length,d=0,h=[];c>d;)n=l[d++],o&&!s.call(a,n)||h.push(e?[n,a[n]]:a[n]);return h}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,n)=>{var o=n(6727),r=n(2159),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{(o=n(9216)(Function.call,n(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},8989:(e,t,n)=>{var o=n(250)("keys"),r=n(5730);e.exports=function(e){return o[e]||(o[e]=r(e))}},250:(e,t,n)=>{var o=n(4579),r=n(3938),i="__core-js_shared__",s=r[i]||(r[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,n)=>{var o=n(1052),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=o(e))<0?r(e+t,0):i(e,t)}},1052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var o=n(799),r=n(8333);e.exports=function(e){return o(r(e))}},8728:(e,t,n)=>{var o=n(1052),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},6530:(e,t,n)=>{var o=n(8333);e.exports=function(e){return Object(o(e))}},3206:(e,t,n)=>{var o=n(6727);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},8691:(e,t,n)=>{var o=n(3856);o(o.S,"Array",{isArray:n(1421)})},2699:(e,t,n)=>{var o=n(3856);o(o.S+o.F,"Object",{assign:n(8082)})},6760:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{create:n(526)})},961:(e,t,n)=>{var o=n(6530),r=n(6162);n(2584)("keys",(function(){return function(e){return r(o(e))}}))},9349:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{setPrototypeOf:n(2906).set})},520:(e,t,n)=>{var o=n(3856),r=n(2050)(!0);o(o.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,n)=>{var o=n(9638),r=n(4874),i=n.g.document,s=function(e,t,n,o){return e.addEventListener(t,n,o)},a=function(e,t,n,o){return e.removeEventListener(t,n,o)},l=[];function c(e,t,n){var o=function(e,t,n){var o,r;for(o=0;o<l.length;o++)if((r=l[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(o){var r=l[o].wrapper;return l.splice(o,1),r}}n.g.addEventListener||(s=function(e,t,o){return e.attachEvent("on"+t,function(e,t,o){var r=c(e,t,o)||function(e,t,o){return function(t){var r=t||n.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,o.call(e,r)}}(e,0,o);return l.push({wrapper:r,element:e,type:t,fn:o}),r}(e,t,o))},a=function(e,t,n){var o=c(e,t,n);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:s,remove:a,fabricate:function(e,t,n){var s=-1===r.indexOf(t)?new o(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(s):e.fireEvent("on"+t,s)}}},4874:(e,t,n)=>{var o=[],r="",i=/^on/;for(r in n.g)i.test(r)&&o.push(r.slice(2));e.exports=o},9638:(e,t,n)=>{var o=n.g.CustomEvent;e.exports=function(){try{var e=new o("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?o:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},3249:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.removeEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0);var i=r;t.default=i,e.exports=t.default},1416:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.addEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)}))}:void 0);var i=r;t.default=i,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=o(n(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):i(e,t)}:i;function i(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){var t=(0,s.default)(e),n=(0,i.default)(t),o=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(o,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),{top:a.top+(n.pageYOffset||o.scrollTop)-(o.clientTop||0),left:a.left+(n.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a};var r=o(n(1629)),i=o(n(7624)),s=o(n(9981));e.exports=t.default},2939:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),n=e&&e.offsetParent;n&&"html"!==s(e)&&"static"===(0,i.default)(n,"position");)n=n.offsetParent;return n||t.documentElement};var r=o(n(9981)),i=o(n(162));function s(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},7265:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n,o={top:0,left:0};return"fixed"===(0,c.default)(e,"position")?n=e.getBoundingClientRect():(t=t||(0,s.default)(e),n=(0,i.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(o=(0,i.default)(t)),o.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,a.default)(t)||0,o.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0),(0,r.default)({},n,{top:n.top-o.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:n.left-o.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var r=o(n(434)),i=o(n(2565)),s=o(n(2939)),a=o(n(504)),l=o(n(5770)),c=o(n(162));e.exports=t.default},5770:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft:e.scrollLeft;n?n.scrollTo(t,"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop):e.scrollLeft=t};var r=o(n(7624));e.exports=t.default},504:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop:e.scrollTop;n?n.scrollTo("pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=o(n(7624));e.exports=t.default},7023:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var o=e.currentStyle[t]||null;if(null==o&&n&&n[t]&&(o=n[t]),s.test(o)&&!i.test(t)){var a=n.left,l=e.runtimeStyle,c=l&&l.left;c&&(l.left=e.currentStyle.left),n.left="fontSize"===t?"1em":o,o=n.pixelLeft+"px",n.left=a,c&&(l.left=c)}return o}}};var r=o(n(3497)),i=/^(top|right|bottom|left)$/,s=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t,n){var o="",d="",h=t;if("string"==typeof t){if(void 0===n)return e.style[(0,r.default)(t)]||(0,s.default)(e).getPropertyValue((0,i.default)(t));(h={})[t]=n}Object.keys(h).forEach((function(t){var n=h[t];n||0===n?(0,c.default)(t)?d+=t+"("+n+") ":o+=(0,i.default)(t)+": "+n+";":(0,a.default)(e,(0,i.default)(t))})),d&&(o+=l.transform+": "+d+";"),e.style.cssText+=";"+o};var r=o(n(3497)),i=o(n(4403)),s=o(n(7023)),a=o(n(1760)),l=n(702),c=o(n(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!n.test(e))};var n=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,s,a,l,c,d,h,u,p,f,m=o(n(139)),g="transform";if(t.transform=g,t.animationEnd=s,t.transitionEnd=i,t.transitionDelay=d,t.transitionTiming=c,t.transitionDuration=l,t.transitionProperty=a,t.animationDelay=f,t.animationTiming=p,t.animationDuration=u,t.animationName=h,m.default){var b=function(){for(var e,t,n=document.createElement("div").style,o={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(o),i="",s=0;s<r.length;s++){var a=r[s];if(a+"TransitionProperty"in n){i="-"+a.toLowerCase(),e=o[a]("TransitionEnd"),t=o[a]("AnimationEnd");break}}return!e&&"transitionProperty"in n&&(e="transitionend"),!t&&"animationName"in n&&(t="animationend"),n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=s=b.animationEnd,t.transform=g=r+"-"+g,t.transitionProperty=a=r+"-transition-property",t.transitionDuration=l=r+"-transition-duration",t.transitionDelay=d=r+"-transition-delay",t.transitionTiming=c=r+"-transition-timing-function",t.animationName=h=r+"-animation-name",t.animationDuration=u=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=f=r+"-animation-timing-function"}var v={transform:g,end:i,property:a,timing:c,delay:d,duration:l};t.default=v},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))};var n=/-(.)/g;e.exports=t.default},3497:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=o(n(1908)),i=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,"-$1").toLowerCase()};var n=/([A-Z])/g;e.exports=t.default},4403:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=o(n(1185)),i=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n,e.exports=t.default},9425:e=>{var t={};function n(e){var n=t[e];return n?n.lastIndex=0:t[e]=n=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),n}e.exports={add:function(e,t){var o=e.className;o.length?n(t).test(o)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(n(t)," ").trim()}}},7137:(e,t,n)=>{var o=n(5229),r=n(1808),i=n(9425),s=document,a=s.documentElement;function l(e,t,o,i){n.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],i):n.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],i):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],i),r[t](e,o,i))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,t){return void 0!==n.g[t]?n.g[t]:a.clientHeight?a[e]:s.body[e]}function h(e,t,n){var o,r=e||{},i=r.className;return r.className+=" gu-hide",o=s.elementFromPoint(t,n),r.className=i,o}function u(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===s?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||v(e)}function v(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||v(g(e)))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function w(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in n)&&o[e]in n&&(e=o[e]),n[e]}e.exports=function(e,t){var n,v,C,x,S,_,T,k,R,E,O;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var I,M=null,$=t||{};void 0===$.moves&&($.moves=p),void 0===$.accepts&&($.accepts=p),void 0===$.invalid&&($.invalid=function(){return!1}),void 0===$.containers&&($.containers=e||[]),void 0===$.isContainer&&($.isContainer=u),void 0===$.copy&&($.copy=!1),void 0===$.copySortSource&&($.copySortSource=!1),void 0===$.revertOnSpill&&($.revertOnSpill=!1),void 0===$.removeOnSpill&&($.removeOnSpill=!1),void 0===$.direction&&($.direction="vertical"),void 0===$.ignoreInputTextSelection&&($.ignoreInputTextSelection=!0),void 0===$.mirrorContainer&&($.mirrorContainer=s.body);var A=o({containers:$.containers,start:function(e){var t=F(e);t&&W(t)},end:B,cancel:q,remove:Z,destroy:function(){P(!0),j({})},canMove:function(e){return!!F(e)},dragging:!1});return!0===$.removeOnSpill&&A.on("over",(function(e){i.rm(e,"gu-hide")})).on("out",(function(e){A.dragging&&i.add(e,"gu-hide")})),P(),A;function N(e){return-1!==A.containers.indexOf(e)||$.isContainer(e)}function P(e){var t=e?"remove":"add";l(a,t,"mousedown",L),l(a,t,"mouseup",j)}function D(e){l(a,e?"remove":"add","mousemove",G)}function z(e){var t=e?"remove":"add";r[t](a,"selectstart",H),r[t](a,"click",H)}function H(e){I&&e.preventDefault()}function L(e){if(_=e.clientX,T=e.clientY,1===c(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=F(t);n&&(I=n,D(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function G(e){if(I)if(0!==c(e)){if(void 0===e.clientX||e.clientX!==_||void 0===e.clientY||e.clientY!==T){if($.ignoreInputTextSelection){var t=w("clientX",e),o=w("clientY",e);if(b(s.elementFromPoint(t,o)))return}var r=I;D(!0),z(),B(),W(r);var h,u={left:(h=C.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:h.top+d("scrollTop","pageYOffset")};x=w("pageX",e)-u.left,S=w("pageY",e)-u.top,i.add(E||C,"gu-transit"),function(){if(!n){var e=C.getBoundingClientRect();(n=C.cloneNode(!0)).style.width=f(e)+"px",n.style.height=m(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),$.mirrorContainer.appendChild(n),l(a,"add","mousemove",Q),i.add($.mirrorContainer,"gu-unselectable"),A.emit("cloned",n,C,"mirror")}}(),Q(e)}}else j({})}function F(e){if(!(A.dragging&&n||N(e))){for(var t=e;g(e)&&!1===N(g(e));){if($.invalid(e,t))return;if(!(e=g(e)))return}var o=g(e);if(o&&!$.invalid(e,t)&&$.moves(e,o,t,y(e)))return{item:e,source:o}}}function W(e){var t,n;t=e.item,n=e.source,("boolean"==typeof $.copy?$.copy:$.copy(t,n))&&(E=e.item.cloneNode(!0),A.emit("cloned",E,e.item,"copy")),v=e.source,C=e.item,k=R=y(e.item),A.dragging=!0,A.emit("drag",C,v)}function B(){if(A.dragging){var e=E||C;V(e,g(e))}}function U(){I=!1,D(!0),z(!0)}function j(e){if(U(),A.dragging){var t=E||C,o=w("clientX",e),r=w("clientY",e),i=X(h(n,o,r),o,r);i&&(E&&$.copySortSource||!E||i!==v)?V(t,i):$.removeOnSpill?Z():q()}}function V(e,t){var n=g(e);E&&$.copySortSource&&t===v&&n.removeChild(C),Y(t)?A.emit("cancel",e,v,v):A.emit("drop",e,t,v,R),K()}function Z(){if(A.dragging){var e=E||C,t=g(e);t&&t.removeChild(e),A.emit(E?"cancel":"remove",e,t,v),K()}}function q(e){if(A.dragging){var t=arguments.length>0?e:$.revertOnSpill,n=E||C,o=g(n),r=Y(o);!1===r&&t&&(E?o&&o.removeChild(E):v.insertBefore(n,k)),r||t?A.emit("cancel",n,v,v):A.emit("drop",n,o,v,R),K()}}function K(){var e=E||C;U(),n&&(i.rm($.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",Q),g(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),O&&clearTimeout(O),A.dragging=!1,M&&A.emit("out",e,M,v),A.emit("dragend",e),v=C=E=k=R=O=M=null}function Y(e,t){var o;return o=void 0!==t?t:n?R:y(E||C),e===v&&o===k}function X(e,t,n){for(var o=e;o&&!r();)o=g(o);return o;function r(){if(!1===N(o))return!1;var r=J(o,e),i=ee(o,r,t,n);return!!Y(o,i)||$.accepts(C,o,v,i)}}function Q(e){if(n){e.preventDefault();var t=w("clientX",e),o=w("clientY",e),r=t-x,i=o-S;n.style.left=r+"px",n.style.top=i+"px";var s=E||C,a=h(n,t,o),l=X(a,t,o),c=null!==l&&l!==M;(c||null===l)&&(M&&f("out"),M=l,c&&f("over"));var d=g(s);if(l!==v||!E||$.copySortSource){var u,p=J(l,a);if(null!==p)u=ee(l,p,t,o);else{if(!0!==$.revertOnSpill||E)return void(E&&d&&d.removeChild(s));u=k,l=v}(null===u&&c||u!==s&&u!==y(s))&&(R=u,l.insertBefore(s,u),A.emit("shadow",s,l,v))}else d&&d.removeChild(s)}function f(e){A.emit(e,s,M,v)}}function J(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===a?null:n}function ee(e,t,n,o){var r="horizontal"===$.direction,i=t!==e?function(){var e=t.getBoundingClientRect();return s(r?n>e.left+f(e)/2:o>e.top+m(e)/2)}():function(){var t,i,s,a=e.children.length;for(t=0;t<a;t++){if(s=(i=e.children[t]).getBoundingClientRect(),r&&s.left+s.width/2>n)return i;if(!r&&s.top+s.height/2>o)return i}return null}();return i;function s(e){return e?y(t):t}}}},4057:(e,t,n)=>{n.d(t,{Z:()=>Zi});var o={};n.r(o),n.d(o,{types:()=>Jr});var r=n(4184),i=n.n(r),s=n(6689),a=n.n(s);function l(e){switch(e){case 48:return 0;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function d(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=c(r,e,t+1/3),s=c(r,e,t),a=c(r,e,t-1/3)}return{type:"rgba",r:Math.round(255*i),g:Math.round(255*s),b:Math.round(255*a),a:r}}const h=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function u(e){if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){const t=(e=e.trim()).length;if(0===t)return null;if(35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:(16*l(e.charCodeAt(7))+l(e.charCodeAt(8)))/255};if(4===t){const t=l(e.charCodeAt(1)),n=l(e.charCodeAt(2)),o=l(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:1}}if(5===t){const t=l(e.charCodeAt(1)),n=l(e.charCodeAt(2)),o=l(e.charCodeAt(3)),r=l(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:(16*r+r)/255}}return null}(e);const t=h.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}return"hsl"===n||"hsla"===n?d({h:o[0],s:o[1],l:o[2],a:o[3]}):{type:"rgba",r:o[0],g:o[1],b:o[2],a:o[3]}}const p=e=>{return"hsla"===(t=u(e)).type&&(t=d(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000";var t};var f=n(827),m=n(3308);const g=e=>!(e===f.o$||e===f.lH),b=/^.*(:?\n){0,2}/m;function v(e,t="\n"){return e.replace("\n"===t?b:new RegExp(`^.*(:?${t}){0,2}`,"m"),"")}const y=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function w(e){const t=[];for(let n=y.exec(e);null!==n;n=y.exec(e)){const[,e,o]=n;t.push({name:e,email:o})}return t}const C={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"};function x(e){return`--column-${e}-color`}function S(e={}){const t={};return Object.keys(e).forEach((n=>{n.includes("--graph-color-")||n.match(/^--column-\d+-color$/)?CSS.supports("color",e[n])&&(t[n]=e[n]):t[n]=e[n]})),function(e={}){return{...C,...e}}(t)}const _=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,T=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,k=new Map;let R;const E=["th","st","nd","rd"];function O(e){const t=e%100;return`${e}${E[(t-20)%10]??E[t]??E[0]}`}let I={};function M(e,t,n,o){const r=`${e}${o?"_compact":""}`;let i=I[e];return i||(i=n+e*t+t/2,I[r]=i,i)}const $={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function A(e,t){let n="";for(const[e,o]of Object.entries($)){const r=t[o];r&&(n+=` ${e}="${r}"`)}return`<${e}${n} />`}function N(e){return A("line",e)}function P(e,t,n,o){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:n,strokeDasharray:g(e)?o?1:2:0,stroke:t}}function D(e,t,n,o){return`${e}_${t}_${n||"+"}${o?"_compact":""}`}function z(e,t,n){return`${e}_${t||"+"}${n?"_compact":""}`}function H(e,t,n){return(e=e<=n?e:n)>=t?e:t}const L={HEAD:"head",REMOTE:"remote",TAG:"tag"};var G=n(9453);const F=e=>{let t;return(...n)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...n)}))}};function W(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function B(e,t,n,o){const{id:r}=e;return!r||null===t||null===t?.[r]||o&&null===t?.[r]?.[o]?null:t&&r in t?o&&!t[r]?.[o]?(n(r,[o]),null):o?t?.[r]?.[o]:t?.[r]:(n(r,G.AI),null)}function U(e,t){if(t.id)return t.id;const n=t.owner||"";return e===L.REMOTE?`${e}/${n}/${t.name}`:`${e}/${t.name}`}function j(e){return U(e.refType,e)}function V(e,t=0){for(let n=e.length-1;n>=t;n-=1){const t=e[n];if(t.currentWidth>t.minimumWidth)return t}}function Z(e,t=0){if(e.length){for(let n=t;n<e.length;n+=1){const t=e[n],o=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(o&&t.currentWidth<o)return t}return e[e.length-1]}}function q(e,t=!1){const n="--scrollable-scrollbar-thickness",o=t||!e[n]?S(e):e,r=o[n]?parseInt(o[n],10):0;return Number.isNaN(r)?0:r}function K(e,t){let n=0;for(const o of e)t&&o.type===t||(n+=o.currentWidth);return n}const Y=(e,t)=>e===t[t.length-1].type;function X(e,t,n){return t||n||0===e}function Q(e,t,n){return e+(X(e,t,n)?1:0)}function J(e,t,n){const o=Q(e,t,n);return m.$0*o}function ee(e,t){return e.type===m.Wm&&t>0?e.contentWidth||0:e.currentWidth}function te(e,t,n,o,r){const i=re(e,t);return i?(s=i,a=n.length,s.currentWidth<ee(s,a)?q(o,r):0):0;var s,a}function ne(e,t,n,o,r,i,s,a,l){const c=re(e,t);if(!c)return 0;const d=function(e,t,n,o,r,i,s){const a=J(i,n,o);return Y(e.type,t)&&(r<a||s)}(c,t,n,o,r,i.length,s);return d?q(a,l):0}function oe(e,t,n){return H(n,e.minimumWidth||0,e.maximumWidth&&!Y(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function re(e,t){return t.find((({type:t})=>t===e))}function ie(e,t){return t.findIndex((({type:t})=>t===e))}function se(e,t,n){let o=0,r=0;const i=ie(e,t);if(i>-1){const e=function(e,t=0){let n=0;for(let o=t;o<e.length;o+=1)n+=e[o].minimumWidth;return n}(t,i+1),s=function(e,t=e.length-1){let n=0;for(let o=0;o<=t;o+=1)n+=e[o].currentWidth;return n}(t,i-1),a=t[i].maximumWidth||Number.MAX_VALUE,l=Math.min(a,n-e-s);o=t[i].minimumWidth,r=l}return{min:o,max:r}}function ae(e){const t=!!e&&e===m.Um.Compact,n=t?1:2,o=t?10:28,r=t?1:3,i=t?1:3,s=t?10:22,a=t?s:m.P3,l=t?s:s/2+1,c=t?45:56;return{COMMIT_ZONE_LINE_WIDTH:n,COMMIT_ZONE_GUTTER_WIDTH:o,COMMIT_ZONE_PADDING_LEFT:r,COMMIT_ZONE_PADDING_RIGHT:i,COMMIT_COLUMN_WIDTH:s,COMMIT_NODE_DIAMETER:a,COMMIT_MERGE_NODE_DIAMETER:l,COMMIT_NODE_TOP_OFFSET:.5*m.P3-.5*a,COMMIT_MERGE_NODE_LEFT_OFFSET:s/2-l/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*m.P3-.5*l,COMMIT_ZONE_AVATAR_DIAMETER:a-2*n,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:a+r+i+o,COMMIT_ZONE_SHOW_ICON_WIDTH:c,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:a/2-l/2}}function le(e){return(e?.heads||[]).some((e=>e.isCurrentHead))}function ce(e){return!!e&&Object.values(e).some((e=>e>0))}function de(e){return 1===Object.keys(e).length}function he(e,t){return!0===e[t]&&de(e)}function ue(e,t){const{heads:n,tags:o,remotes:r}=e.hasRefs?e:e.childRefs,i=n?n.map((e=>({...e,refType:L.HEAD}))):[],s=o?o.map((e=>({...e,refType:L.TAG}))):[];return[...i,...r?r.map((e=>({...e,fullName:t&&e.owner?`${e.owner}/${e.name}`:e.name,refType:L.REMOTE}))):[],...s]}function pe(e){const t=[];let n,o=!1;for(const r of e){o=!1,n=r.fullName||r.name;for(const e of t)if(e.length>0&&e[0].name===n){r.refType===L.HEAD?e.unshift(r):e.push(r),o=!0;break}o||t.push([r])}return t}class fe{props;constructor(e){this.props=e}getActiveGraphZone(e){const t=re(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupForRow(e){const t=this.getRow(e);return t?ue(t,this.props.showRemoteNamesOnRefs):[]}getGraphRefGroupsByNameForRow(e){const t=this.getGraphRefGroupForRow(e);return t?pe(t):[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){const n=t?this.getVerticalScrollWidth(e):0;return function(e,t){return re(e,t)?.currentWidth||m.qi[e].minimumWidth}(e,this.props.graphZones)-n}isDateTimeZoneActive(){return Boolean(this.getActiveGraphZone(m.PL))}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return((e,t)=>{const n=ie(e,t),o=ie(m.Wm,t);return-1!==n&&-1!==o&&n-o==1})(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){const t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return Y(e,this.props.graphZones)}getSelectedRefGroupByName(){if(de(this.props.isSelectedBySha)){const e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return pe(ue(t,this.props.showRemoteNamesOnRefs))}return[]}getHorizontalScrollHeight(e){return te(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return ne(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;const t=this.getRow(e);if(!t)return!1;let n=[];if(this.props.dimRowsOfSelectedCommit){const e=this.getSelectedRefGroupByName();if(!e.length)return!1;n=e[0]}else{const{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;n=e}const{name:o,refType:r}=n[0],i=r===L.TAG,s=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:a,tags:l,remotes:c}=!t.hasRefs||s&&!i?t.childRefs:t;return!(a.length||c.length||l.length)||!a.some((e=>e.name===o&&n.some((e=>e.refType===L.HEAD))))&&!c.some((e=>e.name===o&&n.some((t=>t.refType===L.REMOTE&&t.owner===e.owner))))&&!l.some((e=>e.name===o&&n.some((e=>e.refType===L.TAG))))}isSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&he(this.props.isSelectedBySha,t)}hasTimeline(e){return Boolean(this.props.processedRows[e]?.timeLineEntry)&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return le(e)}}const me={"Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago",ResizePanel:"Resize Panel",Hide:"Hide",Show:"Show"},ge={0:1,90:0,180:-1,270:0},be={0:0,90:1,180:0,270:-1},ve=m.O5-m.NP,ye=` A ${ve} ${ve} 0 0 0 `;function we(e,t,n){const o=ge[n],r=be[n];return{x:e-m.O5*o,xOffset:-o*m.NP,y:t+m.O5*r,yOffset:r*m.NP}}const Ce={};var xe=function(e,t,n,o,r,i,s,a){const l=P(o,e,s,a);return l.d=function(e,t,n,o){const r=`${e}_${t}_${n}_${o}`;let i=Ce[r];if(i)return i;const s=we(e,t,o),a=we(e,t,n);return i=`M ${s.x} ${s.y}${a.xOffset?` H ${s.x+a.xOffset}`:` V ${s.y+a.yOffset}`}${ye}${a.x+s.xOffset} ${a.y+s.yOffset}${s.xOffset?` H ${a.x}`:` V ${a.y}`}`,Ce[r]=i,i}(r,i,n,t),A("path",l)};let Se={};function _e(e,t,n,o,r,i,s,a){const l=D(e,t,n,a);let c=Se[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,n,o,r,i,s){const a=P(n,e,i,s);return a.x1=M(t,o,r,s),a.x2=M(t,o,r,s),a.y1=0,a.y2=m.at/2,N(a)}(o[e],t,n,r,i,s,a):function(e,t,n,o,r,i,s,a){const l=P(o,e,s,a),c=t<n?-m.O5:m.O5,d={...l};d.x1=M(n,r,i,a),d.x2=M(n,r,i,a),d.y1=0,d.y2=m.An;const h={...l};return h.x1=M(n,r,i,a)+c,h.x2=M(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${N(d)}${xe(e,t>n?0:90,t>n?90:180,o,M(n,r,i,a)+c,m.An,s,a)}${N(h)}</g>`}(o[e],t,e,n,r,i,s,a),Se[l]=c,c)}let Te={};function ke(e,t,n,o,r,i,s){const a=z(e,t,s);let l=Te[a];if(l)return l;const c=M(e,o,r,s),d=P(t,n[e],i,s);return d.x1=c,d.x2=c,d.y1=0,d.y2=m.at,l=N(d),Te[a]=l,l}let Re={};function Ee(e,t,n,o,r,i,s,a){const l=D(e,t,n,a);let c=Re[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,n,o,r,i,s){const a=P(n,e,i,s);return a.x1=M(t,o,r,s),a.x2=M(t,o,r,s),a.y1=m.at/2,a.y2=m.at,N(a)}(o[e],t,n,r,i,s,a):function(e,t,n,o,r,i,s,a){const l=P(o,e,s,a),c=t<n?-m.O5:m.O5,d={...l};d.x1=M(n,r,i,a),d.x2=M(n,r,i,a),d.y1=m.at-m.$s,d.y2=m.at;const h={...l};return h.x1=M(n,r,i,a)+c,h.x2=M(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${xe(e,t<n?180:270,t<n?270:0,o,M(n,r,i,a)+c,m.at-m.$s,s,a)}${N(d)}${N(h)}</g>`}(o[e],t,e,n,r,i,s,a),Re[l]=c,c)}let Oe={};function Ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Me(e){return Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(e)}function $e(e){var t=function(e,t){if("object"!==Me(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==Me(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Me(t)?t:String(t)}function Ae(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,$e(o.key),o)}}function Ne(e,t,n){return t&&Ae(e.prototype,t),n&&Ae(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function De(e,t){if(t&&("object"===Me(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Pe(e)}function ze(e){return ze=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ze(e)}function He(e,t){return He=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},He(e,t)}function Le(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&He(e,t)}function Ge(e,t,n){return(t=$e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fe=n(6871);function We(){return We=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},We.apply(this,arguments)}function Be(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Be(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const Ue=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=Be(e))&&(o&&(o+=" "),o+=t);return o};function je(e){var t=e.cellCount,n=e.cellSize,o=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,i=e.nextCellsCount,s=e.nextCellSize,a=e.nextScrollToIndex,l=e.scrollToIndex,c=e.updateScrollOffsetForScrollToIndex;t===i&&("number"!=typeof n&&"number"!=typeof s||n===s)||(o(r),l>=0&&l===a&&c())}function Ve(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ze=function(){function e(t){var n=t.cellCount,o=t.cellSizeGetter,r=t.estimatedCellSize;Ie(this,e),Ge(this,"_cellSizeAndPositionData",{}),Ge(this,"_lastMeasuredIndex",-1),Ge(this,"_lastBatchedIndex",-1),Ge(this,"_cellCount",void 0),Ge(this,"_cellSizeGetter",void 0),Ge(this,"_estimatedCellSize",void 0),this._cellSizeGetter=o,this._cellCount=n,this._estimatedCellSize=r}return Ne(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,n=e.estimatedCellSize,o=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=n,this._cellSizeGetter=o}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),n=t.offset+t.size,o=this._lastMeasuredIndex+1;o<=e;o++){var r=this._cellSizeGetter({index:o});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(o," of value ").concat(r));null===r?(this._cellSizeAndPositionData[o]={offset:n,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[o]={offset:n,size:r},n+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;if(o<=0)return 0;var s,a=this.getSizeAndPositionOfCell(i),l=a.offset,c=l-o+a.size;switch(n){case"start":s=l;break;case"end":s=c;break;case"center":s=l-(o-a.size)/2;break;default:s=Math.max(c,Math.min(l,r))}var d=this.getTotalSize();return Math.max(0,Math.min(d-o,s))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;if(0===this.getTotalSize())return{};var o=n+t,r=this._findNearestCell(n),i=this.getSizeAndPositionOfCell(r);n=i.offset+i.size;for(var s=r;n<o&&s<this._cellCount-1;)s++,n+=this.getSizeAndPositionOfCell(s).size;return{start:r,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,n){for(;t<=e;){var o=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(o).offset;if(r===n)return o;r<n?t=o+1:r>n&&(e=o-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var n=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=n,n*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),n=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(n,0,e):this._exponentialSearch(n,e)}}]),e}(),qe=function(){function e(t){var n=t.maxScrollSize,o=void 0===n?"undefined"!=typeof window&&window.chrome?16777100:15e5:n,r=Ve(t,["maxScrollSize"]);Ie(this,e),Ge(this,"_cellSizeAndPositionManager",void 0),Ge(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new Ze(r),this._maxScrollSize=o}return Ne(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize(),i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(r-o))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;r=this._safeOffsetToOffset({containerSize:o,offset:r});var s=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:n,containerSize:o,currentOffset:r,targetIndex:i});return this._offsetToSafeOffset({containerSize:o,offset:s})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;return n=this._safeOffsetToOffset({containerSize:t,offset:n}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:n})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,n=e.offset,o=e.totalSize;return o<=t?0:n/(o-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:o});return Math.round(i*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(o-t))}}]),e}();function Ke(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(n){var o=n.callback,r=n.indices,i=Object.keys(r),s=!e||i.every((function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0})),a=i.length!==Object.keys(t).length||i.some((function(e){var n=t[e],o=r[e];return Array.isArray(o)?n.join(",")!==o.join(","):n!==o}));t=r,s&&a&&o(r)}}var Ye=-1;function Xe(e){var t=e.cellSize,n=e.cellSizeAndPositionManager,o=e.previousCellsCount,r=e.previousCellSize,i=e.previousScrollToAlignment,s=e.previousScrollToIndex,a=e.previousSize,l=e.scrollOffset,c=e.scrollToAlignment,d=e.scrollToIndex,h=e.size,u=e.sizeJustIncreasedFromZero,p=e.updateScrollIndexCallback,f=n.getCellCount(),m=d>=0&&d<f;m&&(h!==a||u||!r||"number"==typeof t&&t!==r||c!==i||d!==s)?p(d):!m&&f>0&&(h<a||f<o)&&l>n.getTotalSize()-h&&p(f-1)}const Qe=!("undefined"==typeof window||!window.document||!window.document.createElement);var Je,et;function tt(e){if((!Je&&0!==Je||e)&&Qe){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Je=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Je}var nt,ot,rt=(et="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||et.webkitRequestAnimationFrame||et.mozRequestAnimationFrame||et.oRequestAnimationFrame||et.msRequestAnimationFrame||function(e){return et.setTimeout(e,1e3/60)},it=et.cancelAnimationFrame||et.webkitCancelAnimationFrame||et.mozCancelAnimationFrame||et.oCancelAnimationFrame||et.msCancelAnimationFrame||function(e){et.clearTimeout(e)},st=rt,at=it,lt=function(e){return at(e.id)},ct=function(e,t){var n;Promise.resolve().then((function(){n=Date.now()}));var o={id:st((function r(){Date.now()-n>=t?e.call():o.id=st(r)}))};return o};function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ut="requested",pt=(ot=nt=function(e){function t(e){var n;Ie(this,t),Ge(Pe(n=De(this,ze(t).call(this,e))),"_onGridRenderedMemoizer",Ke()),Ge(Pe(n),"_onScrollMemoizer",Ke(!1)),Ge(Pe(n),"_deferredInvalidateColumnIndex",null),Ge(Pe(n),"_deferredInvalidateRowIndex",null),Ge(Pe(n),"_recomputeScrollLeftFlag",!1),Ge(Pe(n),"_recomputeScrollTopFlag",!1),Ge(Pe(n),"_horizontalScrollBarSize",0),Ge(Pe(n),"_verticalScrollBarSize",0),Ge(Pe(n),"_scrollbarPresenceChanged",!1),Ge(Pe(n),"_scrollingContainer",void 0),Ge(Pe(n),"_childrenToDisplay",void 0),Ge(Pe(n),"_columnStartIndex",void 0),Ge(Pe(n),"_columnStopIndex",void 0),Ge(Pe(n),"_rowStartIndex",void 0),Ge(Pe(n),"_rowStopIndex",void 0),Ge(Pe(n),"_renderedColumnStartIndex",0),Ge(Pe(n),"_renderedColumnStopIndex",0),Ge(Pe(n),"_renderedRowStartIndex",0),Ge(Pe(n),"_renderedRowStopIndex",0),Ge(Pe(n),"_initialScrollTop",void 0),Ge(Pe(n),"_initialScrollLeft",void 0),Ge(Pe(n),"_disablePointerEventsTimeoutId",void 0),Ge(Pe(n),"_styleCache",{}),Ge(Pe(n),"_cellCache",{}),Ge(Pe(n),"_debounceScrollEndedCallback",(function(){n._disablePointerEventsTimeoutId=null,n.setState({isScrolling:!1,needToResetStyleCache:!1})})),Ge(Pe(n),"_invokeOnGridRenderedHelper",(function(){var e=n.props.onSectionRendered;n._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:n._columnStartIndex,columnOverscanStopIndex:n._columnStopIndex,columnStartIndex:n._renderedColumnStartIndex,columnStopIndex:n._renderedColumnStopIndex,rowOverscanStartIndex:n._rowStartIndex,rowOverscanStopIndex:n._rowStopIndex,rowStartIndex:n._renderedRowStartIndex,rowStopIndex:n._renderedRowStopIndex}})})),Ge(Pe(n),"_onWheel",(function(e){var t=e.deltaX,o=e.deltaY;n.handleWheelEvent({deltaX:t,deltaY:o})})),Ge(Pe(n),"_setScrollingContainerRef",(function(e){e&&(e.removeEventListener("wheel",n.preventDefault),e.addEventListener("wheel",n.preventDefault,{passive:!1})),n._scrollingContainer=e})),Ge(Pe(n),"_onScroll",(function(e){e.target===n._scrollingContainer&&n.handleScrollEvent(e.target)}));var o=new qe({cellCount:e.columnCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.columnWidth)(n)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new qe({cellCount:e.rowCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.rowHeight)(n)},estimatedCellSize:t._getEstimatedRowSize(e)});return n.state={instanceProps:{columnSizeAndPositionManager:o,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(n._initialScrollTop=n._getCalculatedScrollTop(e,n.state)),e.scrollToColumn>0&&(n._initialScrollLeft=n._getCalculatedScrollLeft(e,n.state)),n}return Le(t,e),Ne(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,n=void 0===t?this.props.scrollToAlignment:t,o=e.columnIndex,r=void 0===o?this.props.scrollToColumn:o,i=e.rowIndex,s=void 0===i?this.props.scrollToRow:i,a=ht({},this.props,{scrollToAlignment:n,scrollToColumn:r,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(a),scrollTop:this._getCalculatedScrollTop(a)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,n=void 0===t?0:t,o=e.scrollTop,r=void 0===o?0:o;if(!(r<0)){this._debounceScrollEnded();var i=this.props,s=i.autoHeight,a=i.autoWidth,l=i.height,c=i.width,d=this.state.instanceProps,h=d.scrollbarSize,u=d.rowSizeAndPositionManager.getTotalSize(),p=d.columnSizeAndPositionManager.getTotalSize(),f=Math.min(Math.max(0,p-c+h),n),m=Math.min(Math.max(0,u-l+h),r);if(this.state.scrollLeft!==f||this.state.scrollTop!==m){var g={isScrolling:!0,scrollDirectionHorizontal:f!==this.state.scrollLeft?f>this.state.scrollLeft?1:Ye:this.state.scrollDirectionHorizontal,scrollDirectionVertical:m!==this.state.scrollTop?m>this.state.scrollTop?1:Ye:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};s||(g.scrollTop=m),a||(g.scrollLeft=f),g.needToResetStyleCache=!1,this.setState(g)}this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:m,totalColumnsWidth:p,totalRowsHeight:u})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,n=e.deltaY;this._debounceScrollEnded();var o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.height,a=o.width,l=this.state.instanceProps.scrollbarSize,c=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),h=Math.min(Math.max(0,d-a+l),Math.max(0,this._scrollingContainer.scrollLeft+t)),u=Math.min(Math.max(0,c-s+l),Math.max(0,this._scrollingContainer.scrollTop+n));if(this.state.scrollLeft!==h||this.state.scrollTop!==u){var p={isScrolling:!0,scrollDirectionHorizontal:h!==this.state.scrollLeft?h>this.state.scrollLeft?1:Ye:this.state.scrollDirectionHorizontal,scrollDirectionVertical:u!==this.state.scrollTop?u>this.state.scrollTop?1:Ye:this.state.scrollDirectionVertical,scrollPositionChangeReason:ut};r||(p.scrollTop=u),i||(p.scrollLeft=h),p.needToResetStyleCache=!1,this.setState(p)}this._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalColumnsWidth:d,totalRowsHeight:c})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,n):n}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,n=e.rowCount,o=this.state.instanceProps;o.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),o.rowSizeAndPositionManager.getSizeAndPositionOfCell(n-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.scrollToColumn,a=i.scrollToRow,l=this.state.instanceProps;l.columnSizeAndPositionManager.resetCell(n),l.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=s>=0&&(1===this.state.scrollDirectionHorizontal?n<=s:n>=s),this._recomputeScrollTopFlag=a>=0&&(1===this.state.scrollDirectionVertical?r<=a:r>=a),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,n=e.rowIndex,o=this.props,r=o.columnCount,i=o.onScrollToTargetCausedUpdate,s=this.state,a=s.scrollLeft,l=s.scrollTop,c=this.props,d=this.state,h=void 0,u=void 0;if(r>1&&void 0!==t){var p=this._updateScrollLeftForScrollToColumn(ht({},c,{scrollToColumn:t}),d,!0);p&&"number"==typeof p.scrollLeft&&p.scrollLeft>=0&&(h=p.scrollLeft)}if(void 0!==n){var f=this._updateScrollTopForScrollToRow(ht({},c,{scrollToRow:n}),d,!0);f&&"number"==typeof f.scrollTop&&f.scrollTop>=0&&(u=f.scrollTop)}if(i&&("number"==typeof h||"number"==typeof u)){var m="number"!=typeof h?h:a,g="number"!=typeof u?u:l;i({clientHeight:c.height,clientWidth:c.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:m,scrollTop:g,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,n=e.getScrollbarSize,o=e.height,r=e.scrollLeft,i=e.scrollToColumn,s=e.scrollTop,a=e.scrollToRow,l=e.width,c=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),c.scrollbarSizeMeasured||this.setState((function(e){var t=ht({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=n(),t.instanceProps.scrollbarSizeMeasured=!0,t})),"number"==typeof r&&r>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var h=o>0&&l>0;i>=0&&h&&this._updateScrollLeftForScrollToColumn(),a>=0&&h&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:s||0,totalColumnsWidth:c.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:c.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var n=this,o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.columnCount,a=o.height,l=o.rowCount,c=o.scrollToAlignment,d=o.scrollToColumn,h=o.scrollToRow,u=o.width,p=this.state,f=p.scrollLeft,m=p.scrollPositionChangeReason,g=p.scrollTop,b=p.instanceProps;this._handleInvalidatedGridSize();var v=s>0&&0===e.columnCount||l>0&&0===e.rowCount;m===ut&&(!i&&f>=0&&(f!==this._scrollingContainer.scrollLeft||v)&&(this._scrollingContainer.scrollLeft=f),!r&&g>=0&&(g!==this._scrollingContainer.scrollTop||v)&&(this._scrollingContainer.scrollTop=g));var y=(0===e.width||0===e.height)&&a>0&&u>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):Xe({cellSizeAndPositionManager:b.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:f,scrollToAlignment:c,scrollToIndex:d,size:u,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollLeftForScrollToColumn(n.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):Xe({cellSizeAndPositionManager:b.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:g,scrollToAlignment:c,scrollToIndex:h,size:a,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollTopForScrollToRow(n.props)}}),this._invokeOnGridRenderedHelper(),f!==t.scrollLeft||g!==t.scrollTop){var w=b.rowSizeAndPositionManager.getTotalSize(),C=b.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:g,totalColumnsWidth:C,totalRowsHeight:w})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&lt(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,n=e.autoHeight,o=e.autoWidth,r=e.className,i=e.containerProps,a=e.containerRole,l=e.containerStyle,c=e.height,d=e.id,h=e.noContentRenderer,u=e.role,p=e.style,f=e.tabIndex,m=e.width,g=this.state,b=g.instanceProps,v=g.needToResetStyleCache,y=this._isScrolling(),w={boxSizing:"border-box",direction:"ltr",height:n?"auto":c,position:"relative",width:o?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};v&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var C=b.columnSizeAndPositionManager.getTotalSize(),x=b.rowSizeAndPositionManager.getTotalSize(),S=x>c?b.scrollbarSize:0,_=C>m?b.scrollbarSize:0;_===this._horizontalScrollBarSize&&S===this._verticalScrollBarSize||(this._horizontalScrollBarSize=_,this._verticalScrollBarSize=S,this._scrollbarPresenceChanged=!0),w.overflowX=C+S<=m?"hidden":"auto",w.overflowY=x+_<=c?"hidden":"auto";var T=this._childrenToDisplay,k=0===T.length&&c>0&&m>0;return s.createElement("div",We({ref:this._setScrollingContainerRef},i,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:Ue("ReactVirtualized__Grid",r),id:d,onScroll:this._onScroll,onWheel:this._onWheel,role:u,style:ht({},w,{},p),tabIndex:f}),T.length>0&&s.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:a,style:ht({width:t?"auto":C,height:x,maxWidth:C,maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"},l)},T),k&&h())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=e.cellRenderer,o=e.cellRangeRenderer,r=e.columnCount,i=e.deferredMeasurementCache,s=e.height,a=e.overscanColumnCount,l=e.overscanIndicesGetter,c=e.overscanRowCount,d=e.rowCount,h=e.width,u=e.isScrollingOptOut,p=t.scrollDirectionHorizontal,f=t.scrollDirectionVertical,m=t.instanceProps,g=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,b=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,v=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&h>0){var y=m.columnSizeAndPositionManager.getVisibleCellRange({containerSize:h,offset:b}),w=m.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:g}),C=m.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:h,offset:b}),x=m.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:g});this._renderedColumnStartIndex=y.start,this._renderedColumnStopIndex=y.stop,this._renderedRowStartIndex=w.start,this._renderedRowStopIndex=w.stop;var S=l({direction:"horizontal",cellCount:r,overscanCellsCount:a,scrollDirection:p,startIndex:"number"==typeof y.start?y.start:0,stopIndex:"number"==typeof y.stop?y.stop:-1}),_=l({direction:"vertical",cellCount:d,overscanCellsCount:c,scrollDirection:f,startIndex:"number"==typeof w.start?w.start:0,stopIndex:"number"==typeof w.stop?w.stop:-1}),T=S.overscanStartIndex,k=S.overscanStopIndex,R=_.overscanStartIndex,E=_.overscanStopIndex;if(i){if(!i.hasFixedHeight())for(var O=R;O<=E;O++)if(!i.has(O,0)){T=0,k=r-1;break}if(!i.hasFixedWidth())for(var I=T;I<=k;I++)if(!i.has(0,I)){R=0,E=d-1;break}}this._childrenToDisplay=o({cellCache:this._cellCache,cellRenderer:n,columnSizeAndPositionManager:m.columnSizeAndPositionManager,columnStartIndex:T,columnStopIndex:k,deferredMeasurementCache:i,horizontalOffsetAdjustment:C,isScrolling:v,isScrollingOptOut:u,parent:this,rowSizeAndPositionManager:m.rowSizeAndPositionManager,rowStartIndex:R,rowStopIndex:E,scrollLeft:b,scrollTop:g,styleCache:this._styleCache,verticalOffsetAdjustment:x,visibleColumnIndices:y,visibleRowIndices:w}),this._columnStartIndex=T,this._columnStopIndex=k,this._rowStartIndex=R,this._rowStopIndex=E}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&lt(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=ct(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:i,scrollLeft:n,scrollTop:o,scrollWidth:r})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?Boolean(e.isScrolling):Boolean(t.isScrolling)}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var n=e.scrollLeft,o=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:n,scrollTop:o});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,n)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,n)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,n=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var o=this._rowStartIndex;o<=this._rowStopIndex;o++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var i="".concat(o,"-").concat(r);this._styleCache[i]=e[i],n&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,n){var o={};0===e.columnCount&&0!==n.scrollLeft||0===e.rowCount&&0!==n.scrollTop?(o.scrollLeft=0,o.scrollTop=0):(e.scrollLeft!==n.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==n.scrollTop&&e.scrollToRow<0)&&Object.assign(o,t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,i,s=n.instanceProps;return o.needToResetStyleCache=!1,e.columnWidth===s.prevColumnWidth&&e.rowHeight===s.prevRowHeight||(o.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==s.prevColumnCount&&0!==s.prevRowCount||(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(o,{isScrolling:!1}),je({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,n)}}),je({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,n)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,o.instanceProps=s,ht({},o,{},r,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,n=e.scrollLeft,o=e.scrollTop,r={scrollPositionChangeReason:ut};return"number"==typeof n&&n>=0&&(r.scrollDirectionHorizontal=n>t.scrollLeft?1:Ye,r.scrollLeft=n),"number"==typeof o&&o>=0&&(r.scrollDirectionVertical=o>t.scrollTop?1:Ye,r.scrollTop=o),"number"==typeof n&&n>=0&&n!==t.scrollLeft||"number"==typeof o&&o>=0&&o!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var n=e.columnCount,o=e.height,r=e.scrollToAlignment,i=e.scrollToColumn,s=e.width,a=t.scrollLeft,l=t.instanceProps;if(n>0){var c=n-1,d=i<0?c:Math.min(c,i),h=l.rowSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>o?l.scrollbarSize:0;return l.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:s-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,n){var o=n.scrollLeft,r=t._getCalculatedScrollLeft(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var n=e.height,o=e.rowCount,r=e.scrollToAlignment,i=e.scrollToRow,s=e.width,a=t.scrollTop,l=t.instanceProps;if(o>0){var c=o-1,d=i<0?c:Math.min(c,i),h=l.columnSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>s?l.scrollbarSize:0;return l.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:n-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,n){var o=n.scrollTop,r=t._getCalculatedScrollTop(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:-1,scrollTop:r}):{}}}]),t}(s.PureComponent),Ge(nt,"propTypes",null),ot);Ge(pt,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,n=e.cellRenderer,o=e.columnSizeAndPositionManager,r=e.columnStartIndex,i=e.columnStopIndex,s=e.deferredMeasurementCache,a=e.horizontalOffsetAdjustment,l=e.isScrolling,c=e.isScrollingOptOut,d=e.parent,h=e.rowSizeAndPositionManager,u=e.rowStartIndex,p=e.rowStopIndex,f=e.styleCache,m=e.verticalOffsetAdjustment,g=e.visibleColumnIndices,b=e.visibleRowIndices,v=[],y=o.areOffsetsAdjusted()||h.areOffsetsAdjusted(),w=!l&&!y,C=u;C<=p;C++)for(var x=h.getSizeAndPositionOfCell(C),S=r;S<=i;S++){var _=o.getSizeAndPositionOfCell(S),T=S>=g.start&&S<=g.stop&&C>=b.start&&C<=b.stop,k="".concat(C,"-").concat(S),R=void 0;w&&f[k]?R=f[k]:s&&!s.has(C,S)?R={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(R={height:x.size,left:_.offset+a,position:"absolute",top:x.offset+m,width:_.size},f[k]=R);var E={columnIndex:S,isScrolling:l,isVisible:T,key:k,parent:d,rowIndex:C,style:R},O=void 0;!c&&!l||a||m?O=n(E):(t[k]||(t[k]=n(E)),O=t[k]),null!=O&&!1!==O&&v.push(O)}return v},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:tt,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return 1===o?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,Fe.polyfill)(pt);const ft=pt;function mt(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return n=Math.max(1,n),1===o?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i+1)}}var gt,bt;function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var yt,wt,Ct=(bt=gt=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),Ge(Pe(n),"_columnStartIndex",0),Ge(Pe(n),"_columnStopIndex",0),Ge(Pe(n),"_rowStartIndex",0),Ge(Pe(n),"_rowStopIndex",0),Ge(Pe(n),"_onKeyDown",(function(e){var t=n.props,o=t.columnCount,r=t.disabled,i=t.mode,s=t.rowCount;if(!r){var a=n._getScrollState(),l=a.scrollToColumn,c=a.scrollToRow,d=n._getScrollState(),h=d.scrollToColumn,u=d.scrollToRow;switch(e.key){case"ArrowDown":u="cells"===i?Math.min(u+1,s-1):Math.min(n._rowStopIndex+1,s-1);break;case"ArrowLeft":h="cells"===i?Math.max(h-1,0):Math.max(n._columnStartIndex-1,0);break;case"ArrowRight":h="cells"===i?Math.min(h+1,o-1):Math.min(n._columnStopIndex+1,o-1);break;case"ArrowUp":u="cells"===i?Math.max(u-1,0):Math.max(n._rowStartIndex-1,0)}h===l&&u===c||(e.preventDefault(),n._updateScrollState({scrollToColumn:h,scrollToRow:u}))}})),Ge(Pe(n),"_onSectionRendered",(function(e){var t=e.columnStartIndex,o=e.columnStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;n._columnStartIndex=t,n._columnStopIndex=o,n._rowStartIndex=r,n._rowStopIndex=i})),n}return Le(t,e),Ne(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow;this.setState({scrollToRow:n,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,o=this._getScrollState(),r=o.scrollToColumn,i=o.scrollToRow;return s.createElement("div",{className:t,onKeyDown:this._onKeyDown},n({onSectionRendered:this._onSectionRendered,scrollToColumn:r,scrollToRow:i}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow,o=this.props,r=o.isControlled,i=o.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:n}),r||this.setState({scrollToColumn:t,scrollToRow:n})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vt(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(s.PureComponent),Ge(gt,"propTypes",null),bt);function xt(e,t){var o,r=void 0!==(o=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:n.g).document&&o.document.attachEvent;if(!r){var i=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,o=t.lastElementChild,r=n.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},l=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},c=!1,d="",h="animationstart",u="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=o.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(c=!0),!1===c)for(var m=0;m<u.length;m++)if(void 0!==f.style[u[m]+"AnimationName"]){d="-"+u[m].toLowerCase()+"-",h=p[m],c=!0;break}var g="resizeanim",b="@"+d+"keyframes "+g+" { from { opacity: 0; } to { opacity: 0; } } ",v=d+"animation: 1ms "+g+"; "}return{addResizeListener:function(t,n){if(r)t.attachEvent("onresize",n);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=o.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var n=(b||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(t.createTextNode(n)),o.appendChild(r)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=c;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),h&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==g&&a(t)},t.__resizeTriggers__.addEventListener(h,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(n)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(h,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ge(Ct,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,Fe.polyfill)(Ct);var Tt=(wt=yt=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"state",{height:n.props.defaultHeight||0,width:n.props.defaultWidth||0}),Ge(Pe(n),"_parentNode",void 0),Ge(Pe(n),"_autoSizer",void 0),Ge(Pe(n),"_window",void 0),Ge(Pe(n),"_detectElementResize",void 0),Ge(Pe(n),"_onResize",(function(){var e=n.props,t=e.disableHeight,o=e.disableWidth,r=e.onResize;if(n._parentNode){var i=n._parentNode.offsetHeight||0,s=n._parentNode.offsetWidth||0,a=(n._window||window).getComputedStyle(n._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,h=parseInt(a.paddingBottom,10)||0,u=i-d-h,p=s-l-c;(!t&&n.state.height!==u||!o&&n.state.width!==p)&&(n.setState({height:i-d-h,width:s-l-c}),r({height:i,width:s}))}})),Ge(Pe(n),"_setRef",(function(e){n._autoSizer=e})),n}return Le(t,e),Ne(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=xt(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.disableHeight,r=e.disableWidth,i=e.style,a=this.state,l=a.height,c=a.width,d={overflow:"visible"},h={};return o||(d.height=0,h.height=l),r||(d.width=0,h.width=c),s.createElement("div",{className:n,ref:this._setRef,style:_t({},d,{},i)},t(h))}}]),t}(s.Component),Ge(yt,"propTypes",null),wt);Ge(Tt,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var kt,Rt,Et=n(6405),Ot=n.n(Et),It=(Rt=kt=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"_child",void 0),Ge(Pe(n),"_measure",(function(){var e=n.props,t=e.cache,o=e.columnIndex,r=void 0===o?0:o,i=e.parent,s=e.rowIndex,a=void 0===s?n.props.index||0:s,l=n._getCellMeasurements(),c=l.height,d=l.width;c===t.getHeight(a,r)&&d===t.getWidth(a,r)||(t.set(a,r,d,c),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:r,rowIndex:a}))})),Ge(Pe(n),"_registerChild",(function(e){e&&Element,n._child=e,e&&n._maybeMeasureCell()})),n}return Le(t,e),Ne(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,Et.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var n=t.style.width,o=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return n&&(t.style.width=n),o&&(t.style.height=o),{height:r,width:i}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,n=e.columnIndex,o=void 0===n?0:n,r=e.parent,i=e.rowIndex,s=void 0===i?this.props.index||0:i;if(!t.has(s,o)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(s,o,c,l),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:o,rowIndex:s})}}}]),t}(s.PureComponent),Ge(kt,"propTypes",null),Rt);function Mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function $t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Mt(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ge(It,"__internalCellMeasurerFlag",!1);var At="requested",Nt=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),Ge(Pe(n),"_calculateSizeAndPositionDataOnNextUpdate",!1),Ge(Pe(n),"_onSectionRenderedMemoizer",Ke()),Ge(Pe(n),"_onScrollMemoizer",Ke(!1)),Ge(Pe(n),"_invokeOnSectionRenderedHelper",(function(){var e=n.props,t=e.cellLayoutManager,o=e.onSectionRendered;n._onSectionRenderedMemoizer({callback:o,indices:{indices:t.getLastRenderedIndices()}})})),Ge(Pe(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),Ge(Pe(n),"_updateScrollPositionForScrollToCell",(function(){var e=n.props,t=e.cellLayoutManager,o=e.height,r=e.scrollToAlignment,i=e.scrollToCell,s=e.width,a=n.state,l=a.scrollLeft,c=a.scrollTop;if(i>=0){var d=t.getScrollPositionForCell({align:r,cellIndex:i,height:o,scrollLeft:l,scrollTop:c,width:s});d.scrollLeft===l&&d.scrollTop===c||n._setScrollPosition(d)}})),Ge(Pe(n),"_onScroll",(function(e){if(e.target===n._scrollingContainer){n._enablePointerEventsAfterDelay();var t=n.props,o=t.cellLayoutManager,r=t.height,i=t.isScrollingChange,s=t.width,a=n._scrollbarSize,l=o.getTotalSize(),c=l.height,d=l.width,h=Math.max(0,Math.min(d-s+a,e.target.scrollLeft)),u=Math.max(0,Math.min(c-r+a,e.target.scrollTop));if(n.state.scrollLeft!==h||n.state.scrollTop!==u){var p=e.cancelable?"observed":At;n.state.isScrolling||i(!0),n.setState({isScrolling:!0,scrollLeft:h,scrollPositionChangeReason:p,scrollTop:u})}n._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalWidth:d,totalHeight:c})}})),n._scrollbarSize=tt(),void 0===n._scrollbarSize?(n._scrollbarSizeMeasured=!1,n._scrollbarSize=0):n._scrollbarSizeMeasured=!0,n}return Le(t,e),Ne(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,n=e.scrollLeft,o=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=tt(),this._scrollbarSizeMeasured=!0,this.setState({})),o>=0?this._updateScrollPositionForScrollToCell():(n>=0||r>=0)&&this._setScrollPosition({scrollLeft:n,scrollTop:r}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),s=i.height,a=i.width;this._invokeOnScrollMemoizer({scrollLeft:n||0,scrollTop:r||0,totalHeight:s,totalWidth:a})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.height,r=n.scrollToAlignment,i=n.scrollToCell,s=n.width,a=this.state,l=a.scrollLeft,c=a.scrollPositionChangeReason,d=a.scrollTop;c===At&&(l>=0&&l!==t.scrollLeft&&l!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=l),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),o===e.height&&r===e.scrollToAlignment&&i===e.scrollToCell&&s===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,n=e.cellCount,o=e.cellLayoutManager,r=e.className,i=e.height,a=e.horizontalOverscanSize,l=e.id,c=e.noContentRenderer,d=e.style,h=e.verticalOverscanSize,u=e.width,p=this.state,f=p.isScrolling,m=p.scrollLeft,g=p.scrollTop;(this._lastRenderedCellCount!==n||this._lastRenderedCellLayoutManager!==o||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=n,this._lastRenderedCellLayoutManager=o,this._calculateSizeAndPositionDataOnNextUpdate=!1,o.calculateSizeAndPositionData());var b=o.getTotalSize(),v=b.height,y=b.width,w=Math.max(0,m-a),C=Math.max(0,g-h),x=Math.min(y,m+u+a),S=Math.min(v,g+i+h),_=i>0&&u>0?o.cellRenderers({height:S-C,isScrolling:f,width:x-w,x:w,y:C}):[],T={boxSizing:"border-box",direction:"ltr",height:t?"auto":i,position:"relative",WebkitOverflowScrolling:"touch",width:u,willChange:"transform"},k=v>i?this._scrollbarSize:0,R=y>u?this._scrollbarSize:0;return T.overflowX=y+k<=u?"hidden":"auto",T.overflowY=v+R<=i?"hidden":"auto",s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:Ue("ReactVirtualized__Collection",r),id:l,onScroll:this._onScroll,role:"grid",style:$t({},T,{},d),tabIndex:0},n>0&&s.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:v,maxHeight:v,maxWidth:y,overflow:"hidden",pointerEvents:f?"none":"",width:y}},_),0===n&&c())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout((function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})}),150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:r,scrollLeft:n,scrollTop:o,scrollWidth:i})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,n=e.scrollTop,o={scrollPositionChangeReason:At};t>=0&&(o.scrollLeft=t),n>=0&&(o.scrollTop=n),(t>=0&&t!==this.state.scrollLeft||n>=0&&n!==this.state.scrollTop)&&this.setState(o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:At}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:At}}}]),t}(s.PureComponent);Ge(Nt,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),Nt.propTypes={},(0,Fe.polyfill)(Nt);const Pt=Nt;var Dt=function(){function e(t){var n=t.height,o=t.width,r=t.x,i=t.y;Ie(this,e),this.height=n,this.width=o,this.x=r,this.y=i,this._indexMap={},this._indices=[]}return Ne(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),zt=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;Ie(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return Ne(e,[{key:"getCellIndices",value:function(e){var t=e.height,n=e.width,o=e.x,r=e.y,i={};return this.getSections({height:t,width:n,x:o,y:r}).forEach((function(e){return e.getCellIndices().forEach((function(e){i[e]=e}))})),Object.keys(i).map((function(e){return i[e]}))}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,n=e.width,o=e.x,r=e.y,i=Math.floor(o/this._sectionSize),s=Math.floor((o+n-1)/this._sectionSize),a=Math.floor(r/this._sectionSize),l=Math.floor((r+t-1)/this._sectionSize),c=[],d=i;d<=s;d++)for(var h=a;h<=l;h++){var u="".concat(d,".").concat(h);this._sections[u]||(this._sections[u]=new Dt({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:h*this._sectionSize})),c.push(this._sections[u])}return c}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map((function(t){return e._sections[t].toString()}))}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,n=e.index;this._cellMetadata[n]=t,this.getSections(t).forEach((function(e){return e.addCellIndex({index:n})}))}}]),e}();function Ht(e){var t=e.align,n=void 0===t?"auto":t,o=e.cellOffset,r=e.cellSize,i=e.containerSize,s=e.currentOffset,a=o,l=a-i+r;switch(n){case"start":return a;case"end":return l;case"center":return a-(i-r)/2;default:return Math.max(l,Math.min(a,s))}}var Lt=function(e){function t(e,n){var o;return Ie(this,t),(o=De(this,ze(t).call(this,e,n)))._cellMetadata=[],o._lastRenderedCellIndices=[],o._cellCache=[],o._isScrollingChange=o._isScrollingChange.bind(Pe(o)),o._setCollectionViewRef=o._setCollectionViewRef.bind(Pe(o)),o}return Le(t,e),Ne(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=We({},this.props);return s.createElement(Pt,We({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,n=e.cellSizeAndPositionGetter,o=[],r=new zt(e.sectionSize),i=0,s=0,a=0;a<t;a++){var l=n({index:a});if(null==l.height||isNaN(l.height)||null==l.width||isNaN(l.width)||null==l.x||isNaN(l.x)||null==l.y||isNaN(l.y))throw Error("Invalid metadata returned for cell ".concat(a,":\n        x:").concat(l.x,", y:").concat(l.y,", width:").concat(l.width,", height:").concat(l.height));i=Math.max(i,l.y+l.height),s=Math.max(s,l.x+l.width),o[a]=l,r.registerCell({cellMetadatum:l,index:a})}return{cellMetadata:o,height:i,sectionManager:r,width:s}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,n=e.cellIndex,o=e.height,r=e.scrollLeft,i=e.scrollTop,s=e.width,a=this.props.cellCount;if(n>=0&&n<a){var l=this._cellMetadata[n];r=Ht({align:t,cellOffset:l.x,cellSize:l.width,containerSize:s,currentOffset:r,targetIndex:n}),i=Ht({align:t,cellOffset:l.y,cellSize:l.height,containerSize:o,currentOffset:i,targetIndex:n})}return{scrollLeft:r,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,n=e.height,o=e.isScrolling,r=e.width,i=e.x,s=e.y,a=this.props,l=a.cellGroupRenderer,c=a.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:n,width:r,x:i,y:s}),l({cellCache:this._cellCache,cellRenderer:c,cellSizeAndPositionGetter:function(e){var n=e.index;return t._sectionManager.getCellMetadata({index:n})},indices:this._lastRenderedCellIndices,isScrolling:o})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(s.PureComponent);function Gt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Ft(e,t){if(e){if("string"==typeof e)return Gt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gt(e,t):void 0}}Ge(Lt,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,n=e.cellRenderer,o=e.cellSizeAndPositionGetter,r=e.indices,i=e.isScrolling;return r.map((function(e){var r=o({index:e}),s={index:e,isScrolling:i,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return i?(e in t||(t[e]=n(s)),t[e]):n(s)})).filter((function(e){return!!e}))}}),Lt.propTypes={},(function(e){function t(e,n){var o;return Ie(this,t),(o=De(this,ze(t).call(this,e,n)))._registerChild=o._registerChild.bind(Pe(o)),o}return Le(t,e),Ne(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.columnMaxWidth,o=t.columnMinWidth,r=t.columnCount,i=t.width;n===e.columnMaxWidth&&o===e.columnMinWidth&&r===e.columnCount&&i===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.columnMaxWidth,o=e.columnMinWidth,r=e.columnCount,i=e.width,s=o||1,a=n?Math.min(n,i):i,l=i/r;return l=Math.max(s,l),l=Math.min(a,l),l=Math.floor(l),t({adjustedWidth:Math.min(i,l*r),columnWidth:l,getColumnWidth:function(){return l},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(s.PureComponent)).propTypes={};var Wt=function(e){function t(e,n){var o;return Ie(this,t),(o=De(this,ze(t).call(this,e,n)))._loadMoreRowsMemoizer=Ke(),o._onRowsRendered=o._onRowsRendered.bind(Pe(o)),o._registerChild=o._registerChild.bind(Pe(o)),o}return Le(t,e),Ne(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=Ke(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,n=this.props.loadMoreRows;e.forEach((function(e){var o=n(e);o&&o.then((function(){var n;(n={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).startIndex>n.lastRenderedStopIndex||n.stopIndex<n.lastRenderedStartIndex||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;n?n.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)}))}))}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,n=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=n,this._doStuff(t,n)}},{key:"_doStuff",value:function(e,t){var n,o=this,r=this.props,i=r.isRowLoaded,s=r.minimumBatchSize,a=r.rowCount,l=r.threshold,c=function(e){for(var t=e.isRowLoaded,n=e.minimumBatchSize,o=e.rowCount,r=e.stopIndex,i=[],s=null,a=null,l=e.startIndex;l<=r;l++)t({index:l})?null!==a&&(i.push({startIndex:s,stopIndex:a}),s=a=null):(a=l,null===s&&(s=l));if(null!==a){for(var c=Math.min(Math.max(a,s+n-1),o-1),d=a+1;d<=c&&!t({index:d});d++)a=d;i.push({startIndex:s,stopIndex:a})}if(i.length)for(var h=i[0];h.stopIndex-h.startIndex+1<n&&h.startIndex>0;){var u=h.startIndex-1;if(t({index:u}))break;h.startIndex=u}return i}({isRowLoaded:i,minimumBatchSize:s,rowCount:a,startIndex:Math.max(0,e-l),stopIndex:Math.min(a-1,t+l)}),d=(n=[]).concat.apply(n,function(e){return function(e){if(Array.isArray(e))return Gt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Ft(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(c.map((function(e){return[e.startIndex,e.stopIndex]}))));this._loadMoreRowsMemoizer({callback:function(){o._loadUnloadedRanges(c)},indices:{squashedUnloadedRanges:d}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(s.PureComponent);Ge(Wt,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),Wt.propTypes={};var Bt,Ut,jt=(Ut=Bt=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),Ge(Pe(n),"_cellRenderer",(function(e){var t=e.parent,o=e.rowIndex,r=e.style,i=e.isScrolling,s=e.isVisible,a=e.key,l=n.props.rowRenderer,c=Object.getOwnPropertyDescriptor(r,"width");return c&&c.writable&&(r.width="100%"),l({index:o,style:r,isScrolling:i,isVisible:s,key:a,parent:t})})),Ge(Pe(n),"_setRef",(function(e){n.Grid=e})),Ge(Pe(n),"_onScroll",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:r})})),Ge(Pe(n),"_onScrollToRowCausedUpdate",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:o,scrollTop:r})})),Ge(Pe(n),"_onSectionRendered",(function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;(0,n.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:r,stopIndex:i})})),n}return Le(t,e),Ne(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.noRowsRenderer,o=e.scrollToIndex,r=e.width,i=Ue("ReactVirtualized__List",t);return s.createElement(ft,We({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:i,columnWidth:r,columnCount:1,noContentRenderer:n,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:o}))}}]),t}(s.PureComponent),Ge(Bt,"propTypes",null),Ut);Ge(jt,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:mt,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});const Vt=function(e,t,n,o,r){return"function"==typeof n?function(e,t,n,o,r){for(var i=n+1;t<=n;){var s=t+n>>>1;r(e[s],o)>=0?(i=s,n=s-1):t=s+1}return i}(e,void 0===o?0:0|o,void 0===r?e.length-1:0|r,t,n):function(e,t,n,o){for(var r=n+1;t<=n;){var i=t+n>>>1;e[i]>=o?(r=i,n=i-1):t=i+1}return r}(e,void 0===n?0:0|n,void 0===o?e.length-1:0|o,t)};function Zt(e,t,n,o,r){this.mid=e,this.left=t,this.right=n,this.leftPoints=o,this.rightPoints=r,this.count=(t?t.count:0)+(n?n.count:0)+o.length}var qt=Zt.prototype;function Kt(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function Yt(e,t){var n=sn(t);e.mid=n.mid,e.left=n.left,e.right=n.right,e.leftPoints=n.leftPoints,e.rightPoints=n.rightPoints,e.count=n.count}function Xt(e,t){var n=e.intervals([]);n.push(t),Yt(e,n)}function Qt(e,t){var n=e.intervals([]),o=n.indexOf(t);return o<0?0:(n.splice(o,1),Yt(e,n),1)}function Jt(e,t,n){for(var o=0;o<e.length&&e[o][0]<=t;++o){var r=n(e[o]);if(r)return r}}function en(e,t,n){for(var o=e.length-1;o>=0&&e[o][1]>=t;--o){var r=n(e[o]);if(r)return r}}function tn(e,t){for(var n=0;n<e.length;++n){var o=t(e[n]);if(o)return o}}function nn(e,t){return e-t}function on(e,t){return e[0]-t[0]||e[1]-t[1]}function rn(e,t){return e[1]-t[1]||e[0]-t[0]}function sn(e){if(0===e.length)return null;for(var t=[],n=0;n<e.length;++n)t.push(e[n][0],e[n][1]);t.sort(nn);var o=t[t.length>>1],r=[],i=[],s=[];for(n=0;n<e.length;++n){var a=e[n];a[1]<o?r.push(a):o<a[0]?i.push(a):s.push(a)}var l=s,c=s.slice();return l.sort(on),c.sort(rn),new Zt(o,sn(r),sn(i),l,c)}function an(e){this.root=e}qt.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},qt.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?Xt(this,e):this.left.insert(e):this.left=sn([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?Xt(this,e):this.right.insert(e):this.right=sn([e]);else{var n=Vt(this.leftPoints,e,on),o=Vt(this.rightPoints,e,rn);this.leftPoints.splice(n,0,e),this.rightPoints.splice(o,0,e)}},qt.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?Qt(this,e):2===(i=this.left.remove(e))?(this.left=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?Qt(this,e):2===(i=this.right.remove(e))?(this.right=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(1===this.count)return this.leftPoints[0]===e?2:0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var n=this,o=this.left;o.right;)n=o,o=o.right;if(n===this)o.right=this.right;else{var r=this.left,i=this.right;n.count-=o.count,n.right=o.left,o.left=r,o.right=i}Kt(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?Kt(this,this.left):Kt(this,this.right);return 1}for(r=Vt(this.leftPoints,e,on);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e)for(this.count-=1,this.leftPoints.splice(r,1),i=Vt(this.rightPoints,e,rn);i<this.rightPoints.length&&this.rightPoints[i][1]===e[1];++i)if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1;return 0},qt.queryPoint=function(e,t){return e<this.mid?this.left&&(n=this.left.queryPoint(e,t))?n:Jt(this.leftPoints,e,t):e>this.mid?this.right&&(n=this.right.queryPoint(e,t))?n:en(this.rightPoints,e,t):tn(this.leftPoints,t);var n},qt.queryInterval=function(e,t,n){var o;return e<this.mid&&this.left&&(o=this.left.queryInterval(e,t,n))||t>this.mid&&this.right&&(o=this.right.queryInterval(e,t,n))?o:t<this.mid?Jt(this.leftPoints,t,n):e>this.mid?en(this.rightPoints,e,n):tn(this.leftPoints,n)};var ln=an.prototype;ln.insert=function(e){this.root?this.root.insert(e):this.root=new Zt(e[0],null,null,[e],[e])},ln.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},ln.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},ln.queryInterval=function(e,t,n){if(e<=t&&this.root)return this.root.queryInterval(e,t,n)},Object.defineProperty(ln,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(ln,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var cn,dn,hn=function(){function e(){Ie(this,e),Ge(this,"_columnSizeMap",{}),Ge(this,"_intervalTree",new an(null)),Ge(this,"_leftMap",{})}return Ne(e,[{key:"estimateTotalHeight",value:function(e,t,n){var o=e-this.count;return this.tallestColumnSize+Math.ceil(o/t)*n}},{key:"range",value:function(e,t,n){var o=this;this._intervalTree.queryInterval(e,e+t,(function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(e,t)||Ft(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,3),r=t[0],i=(t[1],t[2]);return n(i,o._leftMap[i],r)}))}},{key:"setPosition",value:function(e,t,n,o){this._intervalTree.insert([n,n+o,e]),this._leftMap[e]=t;var r=this._columnSizeMap,i=r[t];r[t]=void 0===i?n+o:Math.max(i,n+o)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=0===t?o:Math.min(t,o)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=Math.max(t,o)}return t}}]),e}();function un(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function pn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?un(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):un(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fn=(dn=cn=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),Ge(Pe(n),"_debounceResetIsScrollingId",void 0),Ge(Pe(n),"_invalidateOnUpdateStartIndex",null),Ge(Pe(n),"_invalidateOnUpdateStopIndex",null),Ge(Pe(n),"_positionCache",new hn),Ge(Pe(n),"_startIndex",null),Ge(Pe(n),"_startIndexMemoized",null),Ge(Pe(n),"_stopIndex",null),Ge(Pe(n),"_stopIndexMemoized",null),Ge(Pe(n),"_debounceResetIsScrollingCallback",(function(){n.setState({isScrolling:!1})})),Ge(Pe(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),Ge(Pe(n),"_onScroll",(function(e){var t=n.props.height,o=e.currentTarget.scrollTop,r=Math.min(Math.max(0,n._getEstimatedTotalHeight()-t),o);o===r&&(n._debounceResetIsScrolling(),n.state.scrollTop!==r&&n.setState({isScrolling:!0,scrollTop:r}))})),n}return Le(t,e),Ne(t,[{key:"clearCellPositions",value:function(){this._positionCache=new hn,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new hn,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&lt(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.autoHeight,r=n.cellCount,i=n.cellMeasurerCache,a=n.cellRenderer,l=n.className,c=n.height,d=n.id,h=n.keyMapper,u=n.overscanByPixels,p=n.role,f=n.style,m=n.tabIndex,g=n.width,b=n.rowDirection,v=this.state,y=v.isScrolling,w=v.scrollTop,C=[],x=this._getEstimatedTotalHeight(),S=this._positionCache.shortestColumnSize,_=this._positionCache.count,T=0;if(this._positionCache.range(Math.max(0,w-u),c+2*u,(function(n,o,r){var s;void 0===e?(T=n,e=n):(T=Math.min(T,n),e=Math.max(e,n)),C.push(a({index:n,isScrolling:y,key:h(n),parent:t,style:(s={height:i.getHeight(n)},Ge(s,"ltr"===b?"left":"right",o),Ge(s,"position","absolute"),Ge(s,"top",r),Ge(s,"width",i.getWidth(n)),s)}))})),S<w+c+u&&_<r)for(var k=Math.min(r-_,Math.ceil((w+c+u-S)/i.defaultHeight*g/i.defaultWidth)),R=_;R<_+k;R++)e=R,C.push(a({index:R,isScrolling:y,key:h(R),parent:this,style:{width:i.getWidth(R)}}));return this._startIndex=T,this._stopIndex=e,s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:Ue("ReactVirtualized__Masonry",l),id:d,onScroll:this._onScroll,role:p,style:pn({boxSizing:"border-box",direction:"ltr",height:o?"auto":c,overflowX:"hidden",overflowY:x<c?"hidden":"auto",position:"relative",width:g,WebkitOverflowScrolling:"touch",willChange:"transform"},f),tabIndex:m},s.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:x,maxWidth:"100%",maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"}},C))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&lt(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=ct(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,n=e.cellMeasurerCache,o=e.width,r=Math.max(1,Math.floor(o/n.defaultWidth));return this._positionCache.estimateTotalHeight(t,r,n.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,n=e.onScroll,o=this.state.scrollTop;this._onScrollMemoized!==o&&(n({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:o}),this._onScrollMemoized=o)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var n=this.props,o=n.cellMeasurerCache,r=n.cellPositioner,i=e;i<=t;i++){var s=r(i),a=s.left,l=s.top;this._positionCache.setPosition(i,a,l,o.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(s.PureComponent),Ge(cn,"propTypes",null),dn);function mn(){}Ge(fn,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:mn,onScroll:mn,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,Fe.polyfill)(fn);var gn=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ie(this,e),Ge(this,"_cellMeasurerCache",void 0),Ge(this,"_columnIndexOffset",void 0),Ge(this,"_rowIndexOffset",void 0),Ge(this,"columnWidth",(function(e){var n=e.index;t._cellMeasurerCache.columnWidth({index:n+t._columnIndexOffset})})),Ge(this,"rowHeight",(function(e){var n=e.index;t._cellMeasurerCache.rowHeight({index:n+t._rowIndexOffset})}));var o=n.cellMeasurerCache,r=n.columnIndexOffset,i=void 0===r?0:r,s=n.rowIndexOffset,a=void 0===s?0:s;this._cellMeasurerCache=o,this._columnIndexOffset=i,this._rowIndexOffset=a}return Ne(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,n,o){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,n,o)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function vn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bn(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var yn=function(e){function t(e,n){var o;Ie(this,t),Ge(Pe(o=De(this,ze(t).call(this,e,n))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),Ge(Pe(o),"_deferredInvalidateColumnIndex",null),Ge(Pe(o),"_deferredInvalidateRowIndex",null),Ge(Pe(o),"_bottomLeftGridRef",(function(e){o._bottomLeftGrid=e})),Ge(Pe(o),"_bottomRightGridRef",(function(e){o._bottomRightGrid=e})),Ge(Pe(o),"_cellRendererBottomLeftGrid",(function(e){var t=e.rowIndex,n=Ve(e,["rowIndex"]),r=o.props,i=r.cellRenderer,a=r.fixedRowCount;return t===r.rowCount-a?s.createElement("div",{key:n.key,style:vn({},n.style,{height:20})}):i(vn({},n,{parent:Pe(o),rowIndex:t+a}))})),Ge(Pe(o),"_cellRendererBottomRightGrid",(function(e){var t=e.columnIndex,n=e.rowIndex,r=Ve(e,["columnIndex","rowIndex"]),i=o.props,s=i.cellRenderer,a=i.fixedColumnCount,l=i.fixedRowCount;return s(vn({},r,{columnIndex:t+a,parent:Pe(o),rowIndex:n+l}))})),Ge(Pe(o),"_cellRendererTopRightGrid",(function(e){var t=e.columnIndex,n=Ve(e,["columnIndex"]),r=o.props,i=r.cellRenderer,a=r.columnCount,l=r.fixedColumnCount;return t===a-l?s.createElement("div",{key:n.key,style:vn({},n.style,{width:20})}):i(vn({},n,{columnIndex:t+l,parent:Pe(o)}))})),Ge(Pe(o),"_columnWidthRightGrid",(function(e){var t=e.index,n=o.props,r=n.columnCount,i=n.fixedColumnCount,s=n.columnWidth,a=o.state,l=a.scrollbarSize;return a.showHorizontalScrollbar&&t===r-i?l:"function"==typeof s?s({index:t+i}):s})),Ge(Pe(o),"_onScroll",(function(e){var t=e.scrollLeft,n=e.scrollTop;o.setState({scrollLeft:t,scrollTop:n});var r=o.props.onScroll;r&&r(e)})),Ge(Pe(o),"_onScrollbarPresenceChange",(function(e){var t=e.horizontal,n=e.size,r=e.vertical,i=o.state,s=i.showHorizontalScrollbar,a=i.showVerticalScrollbar;if(t!==s||r!==a){o.setState({scrollbarSize:n,showHorizontalScrollbar:t,showVerticalScrollbar:r});var l=o.props.onScrollbarPresenceChange;"function"==typeof l&&l({horizontal:t,size:n,vertical:r})}})),Ge(Pe(o),"_onScrollLeft",(function(e){var t=e.scrollLeft;o._onScroll({scrollLeft:t,scrollTop:o.state.scrollTop})})),Ge(Pe(o),"_onScrollTop",(function(e){var t=e.scrollTop;o._onScroll({scrollTop:t,scrollLeft:o.state.scrollLeft})})),Ge(Pe(o),"_rowHeightBottomGrid",(function(e){var t=e.index,n=o.props,r=n.fixedRowCount,i=n.rowCount,s=n.rowHeight,a=o.state,l=a.scrollbarSize;return a.showVerticalScrollbar&&t===i-r?l:"function"==typeof s?s({index:t+r}):s})),Ge(Pe(o),"_topLeftGridRef",(function(e){o._topLeftGrid=e})),Ge(Pe(o),"_topRightGridRef",(function(e){o._topRightGrid=e}));var r=e.deferredMeasurementCache,i=e.fixedColumnCount,a=e.fixedRowCount;return o._maybeCalculateCachedStyles(!0),r&&(o._deferredMeasurementCacheBottomLeftGrid=a>0?new gn({cellMeasurerCache:r,columnIndexOffset:0,rowIndexOffset:a}):r,o._deferredMeasurementCacheBottomRightGrid=i>0||a>0?new gn({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:a}):r,o._deferredMeasurementCacheTopRightGrid=i>0?new gn({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:0}):r),o}return Le(t,e),Ne(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,n):n,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.fixedColumnCount,a=i.fixedRowCount,l=Math.max(0,n-s),c=Math.max(0,r-a);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:c}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:l,rowIndex:c}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:l,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,n=e.scrollTop;if(t>0||n>0){var o={};t>0&&(o.scrollLeft=t),n>0&&(o.scrollTop=n),this.setState(o)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,n=e.onSectionRendered,o=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),r=(e.scrollTop,e.scrollToRow),i=Ve(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var a=this.state,l=a.scrollLeft,c=a.scrollTop;return s.createElement("div",{style:this._containerOuterStyle},s.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(i),this._renderTopRightGrid(vn({},i,{onScroll:t,scrollLeft:l}))),s.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(vn({},i,{onScroll:t,scrollTop:c})),this._renderBottomRightGrid(vn({},i,{onScroll:t,onSectionRendered:n,scrollLeft:l,scrollToColumn:o,scrollToRow:r,scrollTop:c}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,n=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._leftGridWidth=o}else this._leftGridWidth=n*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,n=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._topGridHeight=o}else this._topGridHeight=n*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,n=t.columnWidth,o=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,i=t.height,s=t.fixedColumnCount,a=t.fixedRowCount,l=t.rowHeight,c=t.style,d=t.styleBottomLeftGrid,h=t.styleBottomRightGrid,u=t.styleTopLeftGrid,p=t.styleTopRightGrid,f=t.width,m=e||i!==this._lastRenderedHeight||f!==this._lastRenderedWidth,g=e||n!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,b=e||a!==this._lastRenderedFixedRowCount||l!==this._lastRenderedRowHeight;(e||m||c!==this._lastRenderedStyle)&&(this._containerOuterStyle=vn({height:i,overflow:"visible",width:f},c)),(e||m||b)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:f},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:f}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=vn({left:0,overflowX:"hidden",overflowY:o?"auto":"hidden",position:"absolute"},d)),(e||g||h!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=vn({left:this._getLeftGridWidth(this.props),position:"absolute"},h)),(e||u!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=vn({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},u)),(e||g||p!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=vn({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},p)),this._lastRenderedColumnWidth=n,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=a,this._lastRenderedHeight=i,this._lastRenderedRowHeight=l,this._lastRenderedStyle=c,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=h,this._lastRenderedStyleTopLeftGrid=u,this._lastRenderedStyleTopRightGrid=p,this._lastRenderedWidth=f}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,n=e.fixedColumnCount,o=e.fixedRowCount,r=e.rowCount,i=e.hideBottomLeftGridScrollbar,a=this.state.showVerticalScrollbar;if(!n)return null;var l=a?1:0,c=this._getBottomGridHeight(e),d=this._getLeftGridWidth(e),h=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,u=i?d+h:d,p=s.createElement(ft,We({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:n,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:c,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,r-o)+l,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:u}));return i?s.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:vn({},this._bottomLeftGridStyle,{height:c,width:d,overflowY:"hidden"})},p):p}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,n=e.fixedColumnCount,o=e.fixedRowCount,r=e.rowCount,i=e.scrollToColumn,a=e.scrollToRow;return s.createElement(ft,We({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-n),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,r-o),rowHeight:this._rowHeightBottomGrid,scrollToColumn:i-n,scrollToRow:a-o,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,n=e.fixedRowCount;return t&&n?s.createElement(ft,We({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:n,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,n=e.enableFixedRowScroll,o=e.fixedColumnCount,r=e.fixedRowCount,i=e.scrollLeft,a=e.hideTopRightGridScrollbar,l=this.state,c=l.showHorizontalScrollbar,d=l.scrollbarSize;if(!r)return null;var h=c?1:0,u=this._getTopGridHeight(e),p=this._getRightGridWidth(e),f=c?d:0,m=u,g=this._topRightGridStyle;a&&(m=u+f,g=vn({},this._topRightGridStyle,{left:0}));var b=s.createElement(ft,We({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-o)+h,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:m,onScroll:n?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:r,scrollLeft:i,style:g,tabIndex:null,width:p}));return a?s.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:vn({},this._topRightGridStyle,{height:u,width:p,overflowX:"hidden"})},b):b}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(s.PureComponent);function wn(e){var t=e.className,n=e.columns,o=e.style;return s.createElement("div",{className:t,role:"row",style:o},n)}Ge(yn,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),yn.propTypes={},(0,Fe.polyfill)(yn),(function(e){function t(e,n){var o;return Ie(this,t),(o=De(this,ze(t).call(this,e,n))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},o._onScroll=o._onScroll.bind(Pe(o)),o}return Le(t,e),Ne(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.clientHeight,o=t.clientWidth,r=t.scrollHeight,i=t.scrollLeft,s=t.scrollTop,a=t.scrollWidth;return e({clientHeight:n,clientWidth:o,onScroll:this._onScroll,scrollHeight:r,scrollLeft:i,scrollTop:s,scrollWidth:a})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.clientWidth,o=e.scrollHeight,r=e.scrollLeft,i=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:n,scrollHeight:o,scrollLeft:r,scrollTop:i,scrollWidth:s})}}]),t}(s.PureComponent)).propTypes={},wn.propTypes=null;const Cn={ASC:"ASC",DESC:"DESC"};function xn(e){var t=e.sortDirection,n=Ue("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===Cn.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===Cn.DESC});return s.createElement("svg",{className:n,width:18,height:18,viewBox:"0 0 24 24"},t===Cn.ASC?s.createElement("path",{d:"M7 14l5-5 5 5z"}):s.createElement("path",{d:"M7 10l5 5 5-5z"}),s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function Sn(e){var t=e.dataKey,n=e.label,o=e.sortBy,r=e.sortDirection,i=o===t,a=[s.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof n?n:null},n)];return i&&a.push(s.createElement(xn,{key:"SortIndicator",sortDirection:r})),a}function _n(e){var t=e.className,n=e.columns,o=e.index,r=e.key,i=e.onRowClick,a=e.onRowDoubleClick,l=e.onRowMouseOut,c=e.onRowMouseOver,d=e.onRowRightClick,h=e.rowData,u=e.style,p={"aria-rowindex":o+1};return(i||a||l||c||d)&&(p["aria-label"]="row",p.tabIndex=0,i&&(p.onClick=function(e){return i({event:e,index:o,rowData:h})}),a&&(p.onDoubleClick=function(e){return a({event:e,index:o,rowData:h})}),l&&(p.onMouseOut=function(e){return l({event:e,index:o,rowData:h})}),c&&(p.onMouseOver=function(e){return c({event:e,index:o,rowData:h})}),d&&(p.onContextMenu=function(e){return d({event:e,index:o,rowData:h})})),s.createElement("div",We({},p,{className:t,key:r,role:"row",style:u}),n)}xn.propTypes={},Sn.propTypes=null,_n.propTypes=null;var Tn=function(e){function t(){return Ie(this,t),De(this,ze(t).apply(this,arguments))}return Le(t,e),t}(s.Component);function kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Rn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?kn(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ge(Tn,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,n=e.rowData;return"function"==typeof n.get?n.get(t):n[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:Cn.ASC,flexGrow:0,flexShrink:1,headerRenderer:Sn,style:{}}),Tn.propTypes={};var En=function(e){function t(e){var n;return Ie(this,t),(n=De(this,ze(t).call(this,e))).state={scrollbarWidth:0},n._createColumn=n._createColumn.bind(Pe(n)),n._createRow=n._createRow.bind(Pe(n)),n._onScroll=n._onScroll.bind(Pe(n)),n._onSectionRendered=n._onSectionRendered.bind(Pe(n)),n._setRef=n._setRef.bind(Pe(n)),n}return Le(t,e),Ne(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,Et.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,r=t.disableHeader,i=t.gridClassName,a=t.gridStyle,l=t.headerHeight,c=t.headerRowRenderer,d=t.height,h=t.id,u=t.noRowsRenderer,p=t.rowClassName,f=t.rowStyle,m=t.scrollToIndex,g=t.style,b=t.width,v=this.state.scrollbarWidth,y=r?d:d-l,w="function"==typeof p?p({index:-1}):p,C="function"==typeof f?f({index:-1}):f;return this._cachedColumnStyles=[],s.Children.toArray(n).forEach((function(t,n){var o=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[n]=Rn({overflow:"hidden"},o)})),s.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":s.Children.toArray(n).length,"aria-rowcount":this.props.rowCount,className:Ue("ReactVirtualized__Table",o),id:h,role:"grid",style:g},!r&&c({className:Ue("ReactVirtualized__Table__headerRow",w),columns:this._getHeaderColumns(),style:Rn({height:l,overflow:"hidden",paddingRight:v,width:b},C)}),s.createElement(ft,We({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:Ue("ReactVirtualized__Table__Grid",i),cellRenderer:this._createRow,columnWidth:b,columnCount:1,height:y,id:void 0,noContentRenderer:u,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:v,scrollToRow:m,style:Rn({},a,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,n=e.columnIndex,o=e.isScrolling,r=e.parent,i=e.rowData,a=e.rowIndex,l=this.props.onColumnClick,c=t.props,d=c.cellDataGetter,h=c.cellRenderer,u=c.className,p=c.columnData,f=c.dataKey,m=c.id,g=h({cellData:d({columnData:p,dataKey:f,rowData:i}),columnData:p,columnIndex:n,dataKey:f,isScrolling:o,parent:r,rowData:i,rowIndex:a}),b=this._cachedColumnStyles[n],v="string"==typeof g?g:null;return s.createElement("div",{"aria-colindex":n+1,"aria-describedby":m,className:Ue("ReactVirtualized__Table__rowColumn",u),key:"Row"+a+"-Col"+n,onClick:function(e){l&&l({columnData:p,dataKey:f,event:e})},role:"gridcell",style:b,title:v},g)}},{key:"_createHeader",value:function(e){var t,n,o,r,i,a=e.column,l=e.index,c=this.props,d=c.headerClassName,h=c.headerStyle,u=c.onHeaderClick,p=c.sort,f=c.sortBy,m=c.sortDirection,g=a.props,b=g.columnData,v=g.dataKey,y=g.defaultSortDirection,w=g.disableSort,C=g.headerRenderer,x=g.id,S=g.label,_=!w&&p,T=Ue("ReactVirtualized__Table__headerColumn",d,a.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:_}),k=this._getFlexStyleForColumn(a,Rn({},h,{},a.props.headerStyle)),R=C({columnData:b,dataKey:v,disableSort:w,label:S,sortBy:f,sortDirection:m});if(_||u){var E=f!==v?y:m===Cn.DESC?Cn.ASC:Cn.DESC,O=function(e){_&&p({defaultSortDirection:y,event:e,sortBy:v,sortDirection:E}),u&&u({columnData:b,dataKey:v,event:e})};i=a.props["aria-label"]||S||v,r="none",o=0,t=O,n=function(e){"Enter"!==e.key&&" "!==e.key||O(e)}}return f===v&&(r=m===Cn.ASC?"ascending":"descending"),s.createElement("div",{"aria-label":i,"aria-sort":r,className:T,id:x,key:"Header-Col"+l,onClick:t,onKeyDown:n,role:"columnheader",style:k,tabIndex:o},R)}},{key:"_createRow",value:function(e){var t=this,n=e.rowIndex,o=e.isScrolling,r=e.key,i=e.parent,a=e.style,l=this.props,c=l.children,d=l.onRowClick,h=l.onRowDoubleClick,u=l.onRowRightClick,p=l.onRowMouseOver,f=l.onRowMouseOut,m=l.rowClassName,g=l.rowGetter,b=l.rowRenderer,v=l.rowStyle,y=this.state.scrollbarWidth,w="function"==typeof m?m({index:n}):m,C="function"==typeof v?v({index:n}):v,x=g({index:n}),S=s.Children.toArray(c).map((function(e,r){return t._createColumn({column:e,columnIndex:r,isScrolling:o,parent:i,rowData:x,rowIndex:n,scrollbarWidth:y})})),_=Ue("ReactVirtualized__Table__row",w),T=Rn({},a,{height:this._getRowHeight(n),overflow:"hidden",paddingRight:y},C);return b({className:_,columns:S,index:n,isScrolling:o,key:r,onRowClick:d,onRowDoubleClick:h,onRowRightClick:u,onRowMouseOver:p,onRowMouseOut:f,rowData:x,style:T})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),o=Rn({},t,{flex:n,msFlex:n,WebkitFlex:n});return e.props.maxWidth&&(o.maxWidth=e.props.maxWidth),e.props.minWidth&&(o.minWidth=e.props.minWidth),o}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,n=t.children;return(t.disableHeader?[]:s.Children.toArray(n)).map((function(t,n){return e._createHeader({column:t,index:n})}))}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.scrollHeight,o=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:o})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,o=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:o,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(s.PureComponent);Ge(En,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:mt,overscanRowCount:10,rowRenderer:_n,headerRowRenderer:wn,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),En.propTypes={};var On=[],In=null,Mn=null;function $n(){Mn&&(Mn=null,document.body&&null!=In&&(document.body.style.pointerEvents=In),In=null)}function An(){$n(),On.forEach((function(e){return e.__resetIsScrolling()}))}function Nn(e){e.currentTarget===window&&null==In&&document.body&&(In=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){Mn&&lt(Mn);var e=0;On.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),Mn=ct(An,e)}(),On.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function Pn(e,t){On.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",Nn),On.push(e)}function Dn(e,t){(On=On.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",Nn),Mn&&(lt(Mn),$n()))}var zn,Hn,Ln=function(e){return e===window},Gn=function(e){return e.getBoundingClientRect()};function Fn(e,t){if(e){if(Ln(e)){var n=window,o=n.innerHeight,r=n.innerWidth;return{height:"number"==typeof o?o:0,width:"number"==typeof r?r:0}}return Gn(e)}return{height:t.serverHeight,width:t.serverWidth}}function Wn(e){return Ln(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function Bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Un=function(){return"undefined"!=typeof window?window:void 0},jn=(Hn=zn=function(e){function t(){var e,n;Ie(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ge(Pe(n=De(this,(e=ze(t)).call.apply(e,[this].concat(r)))),"_window",Un()),Ge(Pe(n),"_isMounted",!1),Ge(Pe(n),"_positionFromTop",0),Ge(Pe(n),"_positionFromLeft",0),Ge(Pe(n),"_detectElementResize",void 0),Ge(Pe(n),"_child",void 0),Ge(Pe(n),"state",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Bn(n,!0).forEach((function(t){Ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Fn(n.props.scrollElement,n.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),Ge(Pe(n),"_registerChild",(function(e){e&&Element,n._child=e,n.updatePosition()})),Ge(Pe(n),"_onChildScroll",(function(e){var t=e.scrollTop;if(n.state.scrollTop!==t){var o=n.props.scrollElement;o&&("function"==typeof o.scrollTo?o.scrollTo(0,t+n._positionFromTop):o.scrollTop=t+n._positionFromTop)}})),Ge(Pe(n),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",n._onResize,!1):n._detectElementResize.addResizeListener(e,n._onResize)})),Ge(Pe(n),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",n._onResize,!1):e&&n._detectElementResize.removeResizeListener(e,n._onResize)})),Ge(Pe(n),"_onResize",(function(){n.updatePosition()})),Ge(Pe(n),"__handleWindowScrollEvent",(function(){if(n._isMounted){var e=n.props.onScroll,t=n.props.scrollElement;if(t){var o=Wn(t),r=Math.max(0,o.left-n._positionFromLeft),i=Math.max(0,o.top-n._positionFromTop);n.setState({isScrolling:!0,scrollLeft:r,scrollTop:i}),e({scrollLeft:r,scrollTop:i})}}})),Ge(Pe(n),"__resetIsScrolling",(function(){n.setState({isScrolling:!1})})),n}return Le(t,e),Ne(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,n=this.state,o=n.height,r=n.width,i=this._child||Et.findDOMNode(this);if(i instanceof Element&&e){var s=function(e,t){if(Ln(t)&&document.documentElement){var n=document.documentElement,o=Gn(e),r=Gn(n);return{top:o.top-r.top,left:o.left-r.left}}var i=Wn(t),s=Gn(e),a=Gn(t);return{top:s.top+i.top-a.top,left:s.left+i.left-a.left}}(i,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var a=Fn(e,this.props);o===a.height&&r===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=xt(),this.updatePosition(e),e&&(Pn(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.scrollElement,o=e.scrollElement;o!==n&&null!=o&&null!=n&&(this.updatePosition(n),Dn(this,o),Pn(this,n),this._unregisterResizeListener(o),this._registerResizeListener(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(Dn(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.isScrolling,o=t.scrollTop,r=t.scrollLeft,i=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:n,scrollLeft:r,scrollTop:o,width:s})}}]),t}(s.PureComponent),Ge(zn,"propTypes",null),Hn);Ge(jn,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:Un(),serverHeight:0,serverWidth:0});var Vn,Zn=(Vn=function(e,t){return Vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Vn(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Vn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),qn=function(){return qn=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},qn.apply(this,arguments)},Kn={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},Yn=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return Zn(t,e),t.prototype.render=function(){return s.createElement("div",{className:this.props.className||"",style:qn(qn({position:"absolute",userSelect:"none"},Kn[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(s.PureComponent),Xn=n(3316),Qn=n.n(Xn),Jn=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),eo=function(){return eo=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},eo.apply(this,arguments)},to={width:"auto",height:"auto"},no=Qn()((function(e,t,n){return Math.max(Math.min(e,n),t)})),oo=Qn()((function(e,t){return Math.round(e/t)*t})),ro=Qn()((function(e,t){return new RegExp(e,"i").test(t)})),io=function(e){return Boolean(e.touches&&e.touches.length)},so=Qn()((function(e,t,n){void 0===n&&(n=0);var o=t.reduce((function(n,o,r){return Math.abs(o-e)<Math.abs(t[n]-e)?r:n}),0),r=Math.abs(t[o]-e);return 0===n||r<n?t[o]:e})),ao=Qn()((function(e,t){return e.substr(e.length-t.length,t.length)===t})),lo=Qn()((function(e){return"auto"===(e=e.toString())||ao(e,"px")||ao(e,"%")||ao(e,"vh")||ao(e,"vw")||ao(e,"vmax")||ao(e,"vmin")?e:e+"px"})),co=function(e,t,n,o){if(e&&"string"==typeof e){if(ao(e,"px"))return Number(e.replace("px",""));if(ao(e,"%"))return t*(Number(e.replace("%",""))/100);if(ao(e,"vw"))return n*(Number(e.replace("vw",""))/100);if(ao(e,"vh"))return o*(Number(e.replace("vh",""))/100)}return e},ho=Qn()((function(e,t,n,o,r,i,s){return o=co(o,e.width,t,n),r=co(r,e.height,t,n),i=co(i,e.width,t,n),s=co(s,e.height,t,n),{maxWidth:void 0===o?void 0:Number(o),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===s?void 0:Number(s)}})),uo=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],po="__resizable_base__",fo=function(e){function t(t){var n=e.call(this,t)||this;return n.ratio=1,n.resizable=null,n.parentLeft=0,n.parentTop=0,n.resizableLeft=0,n.resizableRight=0,n.resizableTop=0,n.resizableBottom=0,n.targetLeft=0,n.targetTop=0,n.appendBase=function(){if(!n.resizable||!n.window)return null;var e=n.parentNode;if(!e)return null;var t=n.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(po):t.className+=po,e.appendChild(t),t},n.removeBase=function(e){var t=n.parentNode;t&&t.removeChild(e)},n.ref=function(e){e&&(n.resizable=e)},n.state={isResizing:!1,width:void 0===(n.propsSize&&n.propsSize.width)?"auto":n.propsSize&&n.propsSize.width,height:void 0===(n.propsSize&&n.propsSize.height)?"auto":n.propsSize&&n.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},n.onResizeStart=n.onResizeStart.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onMouseUp=n.onMouseUp.bind(n),n}return Jn(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||to},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var n=this.resizable.offsetWidth,o=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:n,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,n=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&ao(e.propsSize[t].toString(),"%")){if(ao(e.state[t].toString(),"%"))return e.state[t].toString();var n=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/n[t]*100+"%"}return lo(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?lo(t.width):n("width"),height:t&&void 0!==t.height&&!this.state.isResizing?lo(t.height):n("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,n=this.parentNode.style.flexWrap;"wrap"!==n&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=n),this.removeBase(e),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var n=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==n&&"auto"!==n?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var n,o,r=this.props.boundsByDirection,i=this.state.direction,s=r&&ro("left",i),a=r&&ro("top",i);if("parent"===this.props.bounds){var l=this.parentNode;l&&(n=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(n=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(n=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return n&&Number.isFinite(n)&&(e=e&&e<n?e:n),o&&Number.isFinite(o)&&(t=t&&t<o?t:o),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var n=this.props.scale||1,o=this.props.resizeRatio||1,r=this.state,i=r.direction,s=r.original,a=this.props,l=a.lockAspectRatio,c=a.lockAspectRatioExtraHeight,d=a.lockAspectRatioExtraWidth,h=s.width,u=s.height,p=c||0,f=d||0;return ro("right",i)&&(h=s.width+(e-s.x)*o/n,l&&(u=(h-f)/this.ratio+p)),ro("left",i)&&(h=s.width-(e-s.x)*o/n,l&&(u=(h-f)/this.ratio+p)),ro("bottom",i)&&(u=s.height+(t-s.y)*o/n,l&&(h=(u-p)*this.ratio+f)),ro("top",i)&&(u=s.height-(t-s.y)*o/n,l&&(h=(u-p)*this.ratio+f)),{newWidth:h,newHeight:u}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,n,o){var r=this.props,i=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,l=void 0===o.width?10:o.width,c=void 0===n.width||n.width<0?e:n.width,d=void 0===o.height?10:o.height,h=void 0===n.height||n.height<0?t:n.height,u=s||0,p=a||0;if(i){var f=(d-u)*this.ratio+p,m=(h-u)*this.ratio+p,g=(l-p)/this.ratio+u,b=(c-p)/this.ratio+u,v=Math.max(l,f),y=Math.min(c,m),w=Math.max(d,g),C=Math.min(h,b);e=no(e,v,y),t=no(t,w,C)}else e=no(e,l,c),t=no(t,d,h);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var n=this.props.bounds.getBoundingClientRect();this.targetLeft=n.left,this.targetTop=n.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),r=o.left,i=o.top,s=o.right,a=o.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=i,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var n,o=0,r=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(o=e.nativeEvent.clientX,r=e.nativeEvent.clientY):e.nativeEvent&&io(e.nativeEvent)&&(o=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable&&!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var i=this.window.getComputedStyle(this.resizable);if("auto"!==i.flexBasis){var s=this.parentNode;if(s){var a=this.window.getComputedStyle(s).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",n=i.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:o,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:eo(eo({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(l)}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&io(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,n=t.maxWidth,o=t.maxHeight,r=t.minWidth,i=t.minHeight,s=io(e)?e.touches[0].clientX:e.clientX,a=io(e)?e.touches[0].clientY:e.clientY,l=this.state,c=l.direction,d=l.original,h=l.width,u=l.height,p=this.getParentSize(),f=ho(p,this.window.innerWidth,this.window.innerHeight,n,o,r,i);n=f.maxWidth,o=f.maxHeight,r=f.minWidth,i=f.minHeight;var m=this.calculateNewSizeFromDirection(s,a),g=m.newHeight,b=m.newWidth,v=this.calculateNewMaxFromBoundary(n,o),y=this.calculateNewSizeFromAspectRatio(b,g,{width:v.maxWidth,height:v.maxHeight},{width:r,height:i});if(b=y.newWidth,g=y.newHeight,this.props.grid){var w=oo(b,this.props.grid[0]),C=oo(g,this.props.grid[1]),x=this.props.snapGap||0;b=0===x||Math.abs(w-b)<=x?w:b,g=0===x||Math.abs(C-g)<=x?C:g}this.props.snap&&this.props.snap.x&&(b=so(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=so(g,this.props.snap.y,this.props.snapGap));var S={width:b-d.width,height:g-d.height};h&&"string"==typeof h&&(ao(h,"%")?b=b/p.width*100+"%":ao(h,"vw")?b=b/this.window.innerWidth*100+"vw":ao(h,"vh")&&(b=b/this.window.innerHeight*100+"vh")),u&&"string"==typeof u&&(ao(u,"%")?g=g/p.height*100+"%":ao(u,"vw")?g=g/this.window.innerWidth*100+"vw":ao(u,"vh")&&(g=g/this.window.innerHeight*100+"vh"));var _={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(g,"height")};"row"===this.flexDir?_.flexBasis=_.width:"column"===this.flexDir&&(_.flexBasis=_.height),this.setState(_),this.props.onResize&&this.props.onResize(e,c,this.resizable,S)}},t.prototype.onMouseUp=function(e){var t=this.state,n=t.isResizing,o=t.direction,r=t.original;if(n&&this.resizable){var i={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,o,this.resizable,i),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:eo(eo({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,n=t.enable,o=t.handleStyles,r=t.handleClasses,i=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!n)return null;var c=Object.keys(n).map((function(t){return!1!==n[t]?s.createElement(Yn,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:r&&r[t]},l&&l[t]?l[t]:null):null}));return s.createElement("div",{className:a,style:i},c)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return-1!==uo.indexOf(n)||(t[n]=e.props[n]),t}),{}),n=eo(eo(eo({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(n.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return s.createElement(o,eo({ref:this.ref,style:n,className:this.props.className},t),this.state.isResizing&&s.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(s.PureComponent);const mo={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},go={min:0,max:1/0},bo=({height:e,heightConstraints:t,width:n,widthConstraints:o})=>({height:H(e,t.min,t.max),width:H(n,o.min,o.max)}),vo=({enable:e,height:t,heightConstraints:n,resizeEdge:o,width:r=0,widthConstraints:i})=>({...bo({height:t,widthConstraints:i,heightConstraints:n,width:r}),enable:void 0===e||e,horizontal:"left"===o||"right"===o,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===o||"bottom"===o});class yo extends a().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:go,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:go};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=vo(e)}componentWillReceiveProps(e){const{onResizeFromPropChange:t}=this.props,{height:n,resizing:o,width:r}=this.state,{onResizeFromPropChange:i}=e;if(o)return;const s=vo(e);this.setState(s);const{height:a,width:l}=s,c=i||t;!c||a===n&&l===r||c({height:a,width:l,originalHeight:n,originalWidth:r})}_onResize=(e,t,n,{height:o,width:r})=>{const{onResize:i}=this.props,{height:s,horizontal:a,vertical:l,width:c}=this.state,{height:d,width:h}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:n,widthConstraints:o},{initialHeight:r,initialWidth:i})=>bo({height:r+t,heightConstraints:n,width:i+e,widthConstraints:o}))({deltaWidth:r,deltaHeight:o},this.props,this.state),u=a&&h!==c,p=l&&d!==s;(u||p)&&(this.setState({height:p?d:s,width:u?h:c,isMouseWheeling:!1}),i&&i({height:p?d:void 0,width:u?h:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();const{onResizeStart:t}=this.props,{height:n,horizontal:o,vertical:r,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:r?n:void 0,width:o?i:void 0})};_onResizeEnd=()=>{const{onResizeEnd:e}=this.props,{height:t,horizontal:n,vertical:o,width:r,initialWidth:i,initialHeight:s}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),i===r&&s===t||e&&e({width:n?r:void 0,height:o?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout((()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})}),50)};render(){const{children:e,className:t,handleStyles:n,resizeContentClassName:o,resizeEdge:r,resizeHandleClassName:s,style:l,translate:c,heightConstraints:d,wrapChildrenInDivContainer:h,widthConstraints:u}=this.props,{enable:p,height:f,horizontal:m,resizing:g,vertical:b,width:v,isMouseWheeling:y}=this.state,{display:w,...C}=l,{min:x,max:S}=u,{min:_,max:T}=d,k={...this.props.wrapperStyle};m&&(k.width=v,k.minWidth=v),b&&(k.height=f,k.minHeight=f);const R=i()("resizable",t,{resizing:g}),E=i()("contents",o,`resize-edge-${r}`,{horizontal:m,vertical:b}),O=i()(r,s,"resizable-handle",{horizontal:m,vertical:b}),I=a().createElement("span",{title:c("ResizePanel")});return a().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...k,display:w}},a().createElement(fo,{className:R,"data-testid":"resizable-core",enable:{...mo,[r]:!y&&p},handleClasses:{[r]:O},handleComponent:{[r]:I},handleStyles:n,maxHeight:b?T:void 0,maxWidth:m?S:void 0,minHeight:b?_:void 0,minWidth:m?x:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:b?f:"100%",width:m?v:"100%"},style:C},h?a().createElement("div",{className:E,style:{userSelect:"none"}},e):e))}}class wo extends a().PureComponent{horizontalScrollRef=a().createRef();verticalScrollRef=a().createRef();outerHorizontalScrollRef=a().createRef();updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){const{scrollLeft:t,scrollTop:n}=this.props;e.scrollLeft===t&&e.scrollTop===n||this.updateScrollbarValues(t,n)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop)}hasHorizontalScroll(){const{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:n,width:o}=this.props;return n||t&&o<e}hasVerticalScroll(){const{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:n}=this.props;return t||e&&n<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}render(){const{children:e,contentHeight:t,contentWidth:n,forceHorizontalScrollbar:o,forceVerticalScrollbar:r,height:i,width:s}=this.props,l=this.hasVerticalScroll(),c=this.hasHorizontalScroll(),d=c&&a().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${i}px - var(--scrollable-scrollbar-thickness))`,width:s}},a().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:o?"scroll":"auto",width:l?`calc(${s}px - var(--scrollable-scrollbar-thickness))`:s}},a().createElement("div",{style:{height:"1px",width:n}}))),h=l&&a().createElement("div",{className:"scrollbar-outer vertical",style:{height:i}},a().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:r?"scroll":"auto",height:c?`calc(${i}px - var(--scrollable-scrollbar-thickness))`:i}},a().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return a().createElement("div",{className:"scrollbar-container"},a().createElement("div",{className:"scrollable-content"},e),d,h)}}var Co=wo;function xo(e,t,n){const o=t*m.$0,{shape:r}=m.Qh[e],i=m.d_[r];if(!i)return{height:0,offset:0};const{baseHeight:s,minHeight:a,maxHeight:l}=i;let c=s*(n/o);void 0!==a&&c<a&&(c=a),void 0!==l&&c>l&&(c=l);const d=m.$0*(n/o);return{height:c,offset:c>=d?0:(d-c)/2}}function So(e,t,n){const o=n*m.$0;return e*m.$0/o*t}class _o extends a().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.branchUpstreamRowIndices===this.props.branchUpstreamRowIndices&&e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas()}updateCanvas(e){const{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:n,viewportHeight:o,markerRowIndices:r,markerColors:i,scrollWidth:s,totalRows:a}=e||this.props,l=this.canvas.getContext("2d");l.canvas.width=s,l.canvas.height=o;const c=s/m.dF;l.clearRect(0,0,l.canvas.width,l.canvas.height);for(const[e,s]of Object.entries(m.Qh)){if(!(n.includes(e)||"remoteBranches"===e&&n.includes("localBranches")))continue;const d="remoteBranches"!==e||n.includes("remoteBranches")?r[e]||[]:t,h=i[e],u=s.lanes;h&&d.length&&(l.fillStyle=h,d.forEach((t=>{const{height:n,offset:r}=xo(e,a,o);u.length&&l.fillRect(u[0]*c,So(t,o,a)+r-.5*n,c*u.length,n)})))}}render(){return a().createElement("canvas",{className:"graph-scroll-markers",ref:e=>this.canvas=e})}}var To=function({children:e,className:t,height:n,heightAdjustment:o,graphZoneType:r,scrollTop:i,style:s}){const l=m.qi[r].listId,c=document.getElementById(l),d=c?.scrollHeight||0;let h=n-28;void 0!==i&&(h=Number(s.top)-i,c&&d-n-i<0&&(h=n-o-28));const u={top:h,zIndex:2},p=a().createElement("span",{className:"absolute",style:u},e);return a().createElement("div",{className:t,style:s},c?Ot().createPortal(p,document.getElementById("graph-container")):p)};function ko({inline:e,getExternalIcon:t,message:n,size:o=100,useSimpleSpinner:r}){const s=i()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),l=i()("spinner","mr1",{"inline-block":e}),c={height:o,width:o},d=i()("message",{"inline-block":e,mx2:e}),h=r?a().createElement("span",{className:l,style:c},t("loading")):a().createElement("div",{className:l,style:c},a().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:c}),a().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:c}),a().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:c}));return a().createElement("div",{className:s},h,n&&a().createElement("div",{className:d},n))}class Ro extends a().Component{render(){const{currentCommits:e,graphZoneType:t,hasMoreCommits:n,height:o,horizontalScrollHeight:r,getExternalIcon:i,isLoadingRows:s,scrollTop:l,style:c,translate:d}=this.props,h=a().createElement(ko,{className:"loading-spinner",getExternalIcon:i,size:20,useSimpleSpinner:!0}),u=0!==(e>0?e:0)||n?null:a().createElement(a().Fragment,null,d("Graph-NoCommits")),p=a().createElement("div",{className:"graph-adjust-commit-count p1"},s?a().createElement("div",{className:"flex items-center"},a().createElement("span",{style:{paddingRight:"5px"}},h)):u);return a().createElement(To,{graphZoneType:t,height:o,heightAdjustment:r,scrollTop:l,style:c},p)}}var Eo=Ro;function Oo({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:n,columnIndex:o,enabledScrollMarkerTypes:r,enableResizer:s,getExternalIcon:l,getKeyForCell:c,graphHeight:d,graphWidth:h,graphZoneType:u,graphZones:p,hasMoreCommits:f,horizontalScrollHeight:g,isLoadingRows:b,markerColors:v,markerRowIndices:y,onResize:w,onResizeEnd:C,onResizeFromPropChange:x,onScroll:S,onScrollToRowCausedUpdate:_,onZoneEnter:T,scrollLeft:k,scrollToAlignment:R,scrollToIndex:E,scrollTop:O,smartCellRangeRenderer:I,translate:M,verticalScrollWidth:$}){const A=re(u,p);if(!A)return null;const N=Y(u,p),P=X(t,f,b),D=Q(t,f,b),z=ee(A,t),H=J(t,f,b),L=$>0,G=r.length>0,F=i()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",u===m.jZ?"z3":null,{"pad-for-vertical-scrollbar":L}),W=u===m.Wm?{...!N&&{position:"static"},...N&&{width:A.currentWidth>z?A.currentWidth:z,maxWidth:"none"}}:void 0,B=e=>S(u,e,h,d,f),U=(e,r,i,s,p,v,y,w)=>a().createElement(ft,{autoContainerWidth:!0,cellRangeRenderer:I,cellRenderer:r=>((e,r)=>{if(r.rowIndex>t-1)return P&&0===o?a().createElement(Eo,{currentCommits:t-1,getExternalIcon:l,graphZoneType:u,hasMoreCommits:f,height:d,horizontalScrollHeight:g,isLoadingRows:b,key:c(r.rowIndex),scrollTop:O,style:r.style,translate:M}):void 0;const i={...r,style:{...r.style}};if(m.Gn===e){i.style.top=Number(r.style.top)-O;const e=document.getElementById(A.listId);e&&Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)<1&&(i.style.top=Number(r.style.top)-e?.scrollTop||O)}const s=n[e];return s?s(i):void 0})(e,r),className:i,columnCount:1,columnWidth:w,containerStyle:s,height:y,id:r,isScrolling:!1,key:r,onScroll:B,onScrollToTargetCausedUpdate:_?e=>_(u,e,h,d,f):void 0,overscanRowCount:0,rowCount:D,rowHeight:m.$0,scrollLeft:k,scrollToAlignment:R,scrollTop:O,scrollToRow:E,style:p,tabIndex:null,width:v}),j=U(A.type,A.listId,F,W,{position:"absolute"},A.currentWidth,d,z),V=j&&a().createElement(a().Fragment,null,G&&N?a().createElement(_o,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:r,markerColors:v,markerRowIndices:y,scrollWidth:$,totalRows:D,viewportHeight:d<H?d:H,viewportWidth:A.currentWidth}):null,a().createElement(Co,{contentHeight:H,contentWidth:z,displayHorizontalScrollbar:A.type===m.Wm,displayVerticalScrollbar:N,forceVerticalScrollbar:N&&G,height:d,onScroll:e=>B(e),scrollLeft:k,scrollTop:O,width:A.currentWidth},j)),Z=N?U(m.Gn,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:H},{position:"absolute",right:0,zIndex:3,maxHeight:d},1,d,1):void 0,q=a().createElement("div",{onMouseEnter:T},V,Z);return N?q:a().createElement(yo,{enable:s,height:d,id:`${u}Column`,key:`${u}Column`,onResize:w?e=>w(A,e):void 0,onResizeEnd:C?e=>C(A,e):void 0,onResizeFromPropChange:x?e=>x(A,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:A.currentWidth,widthConstraints:se(u,p,h)},q)}var Io=n(8613);function Mo(e,t){if(null==e)return{};var n,o,r={},i=Io(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var $o=n(5627),Ao=n(433);function No(e,t){return No=Ao?Ao.bind():function(e,t){return e.__proto__=t,e},No(e,t)}function Po(e,t){e.prototype=$o(t.prototype),e.prototype.constructor=e,No(e,t)}var Do=n(6981);function zo(){return zo=Do?Do.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},zo.apply(this,arguments)}var Ho,Lo=n(5697),Go=n.n(Lo),Fo=n(2856),Wo=n.n(Fo),Bo=n(8853),Uo=n.n(Bo),jo=n(644),Vo={in:Go().bool,mountOnEnter:Go().bool,unmountOnExit:Go().bool,appear:Go().bool,timeout:Go().number,onEnter:Go().func,onEntering:Go().func,onEntered:Go().func,onExit:Go().func,onExiting:Go().func,onExited:Go().func},Zo=((Ho={})[jo.d0]="in",Ho[jo.cn]="in",Ho),qo=function(e){function t(){return e.apply(this,arguments)||this}return Po(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,o=Mo(e,["className","children"]);return a().createElement(jo.ZP,o,(function(e,o){return a().cloneElement(n,zo({},o,{className:i()("fade",t,n.props.className,Zo[e])}))}))},t}(a().Component);qo.propTypes=Vo,qo.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};const Ko=qo;var Yo=zo({},Wo().propTypes,{show:Go().bool,rootClose:Go().bool,onHide:Go().func,animation:Go().oneOfType([Go().bool,Uo()]),onEnter:Go().func,onEntering:Go().func,onEntered:Go().func,onExit:Go().func,onExiting:Go().func,onExited:Go().func,placement:Go().oneOf(["top","right","bottom","left"])}),Xo={animation:Ko,rootClose:!1,show:!1,placement:"right"},Qo=function(e){function t(){return e.apply(this,arguments)||this}return Po(t,e),t.prototype.render=function(){var e,t=this.props,n=t.animation,o=t.children,r=Mo(t,["animation","children"]),l=!0===n?Ko:n||null;return e=l?o:(0,s.cloneElement)(o,{className:i()(o.props.className,"in")}),a().createElement(Wo(),zo({},r,{transition:l}),e)},t}(a().Component);Qo.propTypes=Yo,Qo.defaultProps=Xo;const Jo=Qo;var er=n(5638),tr=n.n(er),nr=n(3562),or=n.n(nr),rr=n(1143),ir=n.n(rr),sr={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function ar(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return"function"==typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function lr(e,t){var n=(e.bsClass||"").trim();return null==n&&ir()(!1),n+(t?"-"+t:"")}var cr=ar((function(e,t){var n=t.propTypes||(t.propTypes={}),o=t.defaultProps||(t.defaultProps={});return n.bsClass=Go().string,o.bsClass=e,t}));function dr(e){var t,n=((t={})[lr(e)]=!0,t);return e.bsSize&&(n[lr(e,sr[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(n[lr(e,e.bsStyle)]=!0),n}function hr(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function ur(e){var t={};return or()(e).forEach((function(e){var n=e[0],o=e[1];(function(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e})(n)||(t[n]=o)})),[hr(e),t]}ar((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.STYLES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=Go().oneOf(o);return n.STYLES=o,i._values=o,n.propTypes=zo({},r,{bsStyle:i}),void 0!==t&&((n.defaultProps||(n.defaultProps={})).bsStyle=t),n})),ar((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.SIZES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=[];o.forEach((function(e){var t=sr[e];t&&t!==e&&i.push(t),i.push(e)}));var s=Go().oneOf(i);return s._values=i,n.SIZES=o,n.propTypes=zo({},r,{bsSize:s}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n}));var pr={id:tr()(Go().oneOfType([Go().string,Go().number])),placement:Go().oneOf(["top","right","bottom","left"]),positionTop:Go().oneOfType([Go().number,Go().string]),positionLeft:Go().oneOfType([Go().number,Go().string]),arrowOffsetTop:Go().oneOfType([Go().number,Go().string]),arrowOffsetLeft:Go().oneOfType([Go().number,Go().string]),title:Go().node},fr=function(e){function t(){return e.apply(this,arguments)||this}return Po(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,o=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.title,d=t.className,h=t.style,u=t.children,p=ur(Mo(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),f=p[0],m=p[1],g=zo({},dr(f),((e={})[n]=!0,e)),b=zo({display:"block",top:o,left:r},h),v={top:s,left:l};return a().createElement("div",zo({},m,{role:"tooltip",className:i()(d,g),style:b}),a().createElement("div",{className:"arrow",style:v}),c&&a().createElement("h3",{className:lr(f,"title")},c),a().createElement("div",{className:lr(f,"content")},u))},t}(a().Component);fr.propTypes=pr,fr.defaultProps={placement:"right"};const mr=cr("popover",fr);function gr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var br=n(8149),vr=n.n(br),yr=n(1629),wr=n.n(yr);n(670);const Cr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),null)};function xr(e,t){return vr()(t)?t.indexOf(e)>=0:e===t}var Sr=Go().oneOf(["click","hover","focus"]),_r=zo({},Jo.propTypes,{trigger:Go().oneOfType([Sr,Go().arrayOf(Sr)]),delay:Go().number,delayShow:Go().number,delayHide:Go().number,defaultOverlayShown:Go().bool,overlay:Go().node.isRequired,onBlur:Go().func,onClick:Go().func,onFocus:Go().func,onMouseOut:Go().func,onMouseOver:Go().func,target:Go().oneOf([null]),onHide:Go().oneOf([null]),show:Go().oneOf([null])}),Tr=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).handleToggle=o.handleToggle.bind(gr(gr(o))),o.handleDelayedShow=o.handleDelayedShow.bind(gr(gr(o))),o.handleDelayedHide=o.handleDelayedHide.bind(gr(gr(o))),o.handleHide=o.handleHide.bind(gr(gr(o))),o.handleMouseOver=function(e){return o.handleMouseOverOut(o.handleDelayedShow,e,"fromElement")},o.handleMouseOut=function(e){return o.handleMouseOverOut(o.handleDelayedHide,e,"toElement")},o._mountNode=null,o.state={show:t.defaultOverlayShown},o}Po(t,e);var n=t.prototype;return n.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},n.componentDidUpdate=function(){this.renderOverlay()},n.componentWillUnmount=function(){Ot().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},n.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},n.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},n.handleHide=function(){this.hide()},n.handleMouseOverOut=function(e,t,n){var o=t.currentTarget,r=t.relatedTarget||t.nativeEvent[n];r&&r===o||wr()(o,r)||e(t)},n.handleToggle=function(){this.state.show?this.hide():this.show()},n.hide=function(){this.setState({show:!1})},n.makeOverlay=function(e,t){return a().createElement(Jo,zo({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},n.show=function(){this.setState({show:!0})},n.renderOverlay=function(){Ot().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},n.render=function(){var e=this.props,t=e.trigger,n=e.overlay,o=e.children,r=e.onBlur,i=e.onClick,l=e.onFocus,c=e.onMouseOut,d=e.onMouseOver,h=Mo(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete h.delay,delete h.delayShow,delete h.delayHide,delete h.defaultOverlayShown;var u=a().Children.only(o),p=u.props,f={};return this.state.show&&(f["aria-describedby"]=n.props.id),f.onClick=Cr(p.onClick,i),xr("click",t)&&(f.onClick=Cr(f.onClick,this.handleToggle)),xr("hover",t)&&(f.onMouseOver=Cr(p.onMouseOver,d,this.handleMouseOver),f.onMouseOut=Cr(p.onMouseOut,c,this.handleMouseOut)),xr("focus",t)&&(f.onFocus=Cr(p.onFocus,l,this.handleDelayedShow),f.onBlur=Cr(p.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(n,h),(0,s.cloneElement)(u,f)},t}(a().Component);Tr.propTypes=_r,Tr.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};const kr=Tr;var Rr={id:tr()(Go().oneOfType([Go().string,Go().number])),placement:Go().oneOf(["top","right","bottom","left"]),positionTop:Go().oneOfType([Go().number,Go().string]),positionLeft:Go().oneOfType([Go().number,Go().string]),arrowOffsetTop:Go().oneOfType([Go().number,Go().string]),arrowOffsetLeft:Go().oneOfType([Go().number,Go().string])},Er=function(e){function t(){return e.apply(this,arguments)||this}return Po(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,o=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.className,d=t.style,h=t.children,u=ur(Mo(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),p=u[0],f=u[1],m=zo({},dr(p),((e={})[n]=!0,e)),g=zo({top:o,left:r},d),b={top:s,left:l};return a().createElement("div",zo({},f,{role:"tooltip",className:i()(c,m),style:g}),a().createElement("div",{className:lr(p,"arrow"),style:b}),a().createElement("div",{className:lr(p,"inner")},h))},t}(a().Component);Er.propTypes=Rr,Er.defaultProps={placement:"right"};const Or=cr("tooltip",Er);var Ir=n(7334),Mr=function({classes:e=[],context:t,divStyle:n,height:o,size:r,url:i,width:s}){const l={...n,background:`url(${i}) 0% 0% / ${r}px no-repeat`,height:o||r,width:s||r},c=["avatar","content-box",...e].join(" ").trim();return a().createElement("div",{className:c,"data-test-class":"avatar","data-vscode-context":W(t),style:l})};const $r=(e,t,n)=>e?((e,t)=>a().createElement("span",{className:"ref-avatar mr1"},a().createElement(Mr,{context:t,size:14,url:e})))(e,n):t;function Ar({icon:e,tooltipClassName:t="",tooltipId:n,tooltipText:o}){return o&&n?a().createElement(kr,{delayShow:400,overlay:a().createElement(Or,{className:i()("gk-graph","bs-tooltip",t),id:n},o),placement:"top",trigger:["hover","focus"]},e):a().createElement(a().Fragment,null," ",e," ")}function Nr({hostingServiceType:e,icon:t,id:n,title:o}){return a().createElement(Ar,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${n}`,tooltipText:o&&""!==o.trim()?`#${n}: ${o}\nDouble-click to open pull request on ${(0,Ir.y)(e)}`:""})}function Pr({icon:e,type:t,upstream:n,tooltipText:o}){return a().createElement(Ar,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${n}`,tooltipText:o})}function Dr({avatarUrl:e,context:t,icon:n,tooltipText:o}){return a().createElement(Ar,{icon:$r(e,n,t),tooltipId:`remote-icon-${o||"tooltipText"}`,tooltipText:o})}var zr=function({name:e}){return a().createElement("span",{className:"ref-name truncate",style:{height:m.pj}},e)};function Hr(e,t,n,o,r,s,l){let c;if(c=o.refType===L.HEAD?o.upstream?e?.[o.upstream.id]?.[G.mQ]:null:B(o,e,t,G.mQ),!c||0===c.length)return null;const d=c,h=[];for(const e of d){const{context:t,hostingServiceType:c,id:d,title:u}=e;if(l.has(d))continue;l.add(d);const p={refId:o.id,type:G.mQ,data:e},f=`pr-icon-${o.refType}-${o.name}-${d}`,m=a().createElement("span",{className:i()("mr1","ref-pull-request"),"data-vscode-context":W(t),key:f,onClick:e=>r(e,p),onDoubleClick:e=>s(e,p)},n("pull-request"));h.push(a().createElement(Nr,{hostingServiceType:c,icon:m,id:d,key:f,title:u}))}return h}function Lr(e,t,n,o,r,i){const s=B(o,e,t,G.uq);if(!s||0===s.ahead&&0===s.behind)return null;const l=s,c={refId:o.id,type:G.uq,data:l},d=l.ahead>0,h=l.behind>0,u=l.context;if(d||h){const e=d?`${l.ahead>99?"99+":l.ahead}`:"",t=h?`${l.behind>99?"99+":l.behind}`:"",o=`${l.owner}/${l.name}`;let s,p;return h&&d?(s=`${t} ${l.behind>1?"commits":"commit"} behind and ${e} ${l.ahead>1?"commits":"commit"} ahead of ${o}\nDouble-click to pull changes`,p="ahead-behind"):h?(s=`${t} ${l.behind>1?"commits":"commit"} behind ${o}\nDouble-click to pull changes`,p="behind"):d&&(s=`${e} ${l.ahead>1?"commits":"commit"} ahead of ${o}\nDouble-click to push changes`,p="ahead"),a().createElement(Pr,{icon:a().createElement("div",{className:"ref-upstream","data-vscode-context":W(u),onClick:e=>r(e,c),onDoubleClick:e=>i(e,c)},h?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-behind"},t),n("upstream-behind")):null,d?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-ahead"},e),n("upstream-ahead")):null),tooltipText:s,type:p,upstream:o})}return null}function Gr(e,t,n,o=0){const{refType:r,name:s}=t;let l,c,d="";switch(r){case L.REMOTE:c=L.REMOTE,l=t.avatarUrl,d=`${t.owner} -> ${s} (${n("Ref-Remote")})`;break;case L.TAG:c=L.TAG,d=`${s} (${n("Ref-Tag")})`;break;case L.HEAD:default:c=L.HEAD,d=`${s} (${n("Ref-Local")})`}const h=t.context||void 0,u=a().createElement("span",{className:i()("mr1"),"data-vscode-context":W(h)},e(c));return a().createElement(Dr,{avatarUrl:l||"",context:h,icon:u,key:`ref-icon-${o}-${r}-${s}`,tooltipText:d})}function Fr(e,t,n){let o,r=!1,i=!1,s=!1;for(const a of e){if(a.refType===L.HEAD)return n?a.contextGroup||t:a.context;a.refType===L.REMOTE&&("origin"===a.owner?(r=!0,o=n?a.contextGroup||t:a.context):r||"upstream"!==a.owner?r||i||(s=!0,o=n?a.contextGroup||t:a.context):(i=!0,o=n?a.contextGroup||t:a.context)),r||i||s||(o=n?a.contextGroup||t:a.context)}return o}class Wr extends a().PureComponent{onContextMenu=e=>{const{onContextMenu:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClick=e=>{const{onClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClickMetadata=(e,t)=>{e.stopPropagation();const{onClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};onDoubleClick=e=>{const{onDoubleClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();const{onDoubleClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};render(){const{hasActive:e,hasRefs:t,getExternalIcon:n,groupIsHovered:o,isInUnsupportedRebase:r,isRefGroupIncluded:s,onMissingRefMetadata:l,refGroup:c,refGroupContext:d,refMetadata:h,onHovered:u,onHideRefClick:p,sha:f,enabledRefMetadataTypes:g,translate:b}=this.props,v=i()("ref-node-wrapper","flex"),y=i()("ref-node","flex","items-center","p1",{"has-active":e,"dim-ref":!t&&o,"is-active":e}),w=c.length?c[0].fullName||c[0].name:"",C=a().createElement(zr,{name:w}),x=[],S=[];let _=null;const T=new Set;let k;for(let e=0;e<c.length;e+=1){if(k=c[e],x.push(Gr(n,k,b,e)),g.includes(G.mQ)&&(k.refType===L.REMOTE||k.refType===L.HEAD&&k.upstream)){const e=Hr(h,l,n,k,this.onClickMetadata,this.onDoubleClickMetadata,T);e&&S.push(...e)}g.includes(G.uq)&&k.refType===L.HEAD&&(_=Lr(h,l,n,k,this.onClickMetadata,this.onDoubleClickMetadata))}const R=[...x,...S],E=c.some((e=>e.refType===L.HEAD&&e.isCurrentHead)),O=!e||o&&!E?null:a().createElement(Ar,{icon:a().createElement("span",{className:i()("mr1")},n("check")),tooltipId:"ref-icon-current",tooltipText:b("Ref-Current")}),I=Fr(c,d),M=Fr(c,d,!0),$=E||!o||s?null:a().createElement(Ar,{icon:a().createElement("span",{className:i()("mr1","button"),onClick:e=>p(e,c,f)},n("hide")),tooltipId:`ref-node-toggle-visibility-btn-${w}`,tooltipText:b("Hide")});return a().createElement("span",{className:v,"data-vscode-context":W(M),style:{minWidth:0,marginLeft:3}},a().createElement("span",{className:y,"data-test-class":"ref-node-span","data-vscode-context":W(I),onClick:this.onClick,onContextMenu:r?void 0:this.onContextMenu,onDoubleClick:r?void 0:this.onDoubleClick,onMouseEnter:e=>u(e,c,f),style:{height:m.cZ,minWidth:"100%"}},O,a().createElement("span",{className:"flex items-center"},R),C,_,a().createElement("span",{className:"flex ml-auto"},$)))}}class Br extends a().Component{constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{const{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,n)=>{this.props.onToggleRefNodesShown(e,t,n),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){return e.name<t.name?-1:e.name>t.name?1:e.name===t.name&&e.type===L.REMOTE?-1:0}render(){const{enableResizer:e,getExternalIcon:t,graphWidth:n,graphZones:o,graphZoneType:r,excludeRefsById:s,includeOnlyRefsById:l,isDraggable:c,onHover:d,onResize:h,onResizeEnd:u,onResizeFromPropChange:p,onResizeStart:f,onUnhover:g,rowsStatsLoading:b,showRemoteNamesOnRefs:v,translate:y}=this.props,{showPopoverMenu:w,refPopoverMenuTarget:C}=this.state,x=re(r,o);if(!x)return null;const S=Y(r,o);let _=null,T=null;if(r===m.jZ){const e=Object.entries(s),n=Object.values(l),o=n.length>0,r=o&&n.some((e=>e.type===L.TAG)),c=e.filter((e=>e[1].type===L.TAG&&(!o||!r)||!l[e[0]]));c.length>0&&(T=c.sort(((e,t)=>this.compareGraphRefOpts(e[1],t[1]))).map(((e,n)=>{const o=e[0],r=e[1];s[o].id=o;const i={name:r.name,refType:r.type,owner:r.owner,avatarUrl:r.avatarUrl},l=!v&&"*"!==i.name||i.refType!==L.REMOTE?i.name:`${i.owner}/${i.name}`;return a().createElement("li",{id:o,key:o,onClick:e=>this.onShowRefNodes(e,[s[o]],!0)},Gr(t,i,y,n),a().createElement("span",{className:"text-ellipsis"},l))})),_=a().createElement("div",{className:i()("right","text-normal","button",w?"active":null)},a().createElement(Ar,{icon:a().createElement("span",{onClick:this.onHiddenRefsClick},t("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:y("GraphHeader-HiddenRefs-btn")})))}const k=x.currentWidth<=x.showIconWidth,R=k?t(function(e){switch(e){case m.Wm:return"graph";case m.jZ:return"branch";case m.KE:return"message";case m.GF:return"author";case m.PL:return"datetime";case m.av:return"commit";case m.WD:return"changes";default:return""}}(r)):a().createElement("span",{className:"ml1 fs-1"},y(x.headerLabelUntranslated)),E=`${r}-header`,O=a().createElement("div",{onMouseEnter:d,onMouseLeave:g},r===m.WD&&b&&a().createElement("span",{className:"spinner"},t("loading")),_,a().createElement(Jo,{container:this,onHide:w?this.onHiddenRefsClick:void 0,placement:w?"bottom":void 0,rootClose:w,show:w,target:C},a().createElement(mr,{id:"opts-popover",style:{display:w?"block":"none"}},a().createElement("ul",null,T))),a().createElement("div",{className:k?"flex justify-start ml1":"text-ellipsis font-monospace text-disabled",style:{...k&&{width:x.currentWidth,marginTop:"0.25rem"}},title:k?y(x.headerLabelUntranslated):void 0},R)),I=i()("panel-bg0","graph-header",{"is-draggable":c});return S?a().createElement("div",{className:I,id:E,key:E,style:{minWidth:x.currentWidth-m.b4,transform:"translate3d(0, 0, 0)",zIndex:2}},O):a().createElement("div",{className:I,id:E,key:E,style:{display:"flex",minWidth:x.currentWidth,transform:"translate3d(0, 0, 0)",width:x.currentWidth,zIndex:2}},a().createElement(yo,{className:I,enable:e,handleStyles:{right:{right:0}},height:m.ze,onResize:h?e=>h(x,e):void 0,onResizeEnd:u?e=>u(x,e):void 0,onResizeFromPropChange:p?e=>p(x,e):void 0,onResizeStart:f?e=>f(x,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:y,width:x.currentWidth,widthConstraints:se(r,o,n)},O))}}const Ur=Br;var jr=n(977),Vr=n.n(jr);const Zr="dnd-container";class qr extends a().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,n,o)=>{if(this.props.onDrop&&e.id){const t=this.sanitizeId(e.id),n=o?.id?this.sanitizeId(o.id):null,r=this.childReactElementsById[t],i=n?this.childReactElementsById[n]:null;r&&this.props.onDrop(r,i)}};isContainerCallback=e=>Boolean(e?.classList.contains(Zr));movesCallback=e=>Boolean(e?.id)&&this.isDraggable(e.id);acceptsCallback=(e,t,n,o)=>Boolean(e?.id)&&this.isDroppable(e.id,o?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){const t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=Vr()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach((e=>{a().isValidElement(e)&&this.addChildReactElement(e)})):a().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){const t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){const t=this.sanitizeId(e),n=this.childReactElementsById[t];return Boolean(n)&&this.props.isDraggable(n)}return!1}isDroppable(e,t){if(this.props.isDroppable){const n=this.sanitizeId(e),o=t?this.sanitizeId(t):null,r=this.childReactElementsById[n],i=o?this.childReactElementsById[o]:null;if(r)return this.props.isDroppable(r,i)}return!1}render(){const{children:e,className:t}=this.props,n=i()(Zr,t);return a().createElement("div",{className:n,ref:this.dndDecorator},e)}}var Kr=qr;class Yr extends a().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){const{dragAppendToContainer:e,enableResizer:t,getExternalIcon:n,excludeRefsById:o,headerContext:r,includeOnlyRefsById:i,onPopupGraphHeaderContextMenu:s,onGraphZoneResize:l,onGraphZoneResizeEnd:c,onGraphZoneResizeFromPropChange:d,onSettingsClick:h,onToggleRefNodesShown:u,graphZones:p,repoPath:f,rowsStatsLoading:g,showRemoteNamesOnRefs:b,translate:v,width:y,height:w,settingsContext:C}=this.props,x=a().createElement("div",{className:"panel-bg0",style:{height:m.ze,marginBottom:m.wi,marginLeft:-m.mu,minWidth:m.mu+m.b4}}),S=h&&a().createElement("div",{className:"columns-settings","data-vscode-context":W(C)},a().createElement(Ar,{icon:a().createElement("span",{className:"columns-settings-btn text-disabled hover-icon",onClick:e=>h(e,y)},n("settings")),tooltipId:"header-columns-settings",tooltipText:v("GraphHeader-EditColumns")}));return a().createElement("div",{className:"graph-header flex","data-vscode-context":W(r),onContextMenu:s?e=>s(e,y):void 0,style:{height:m.ze,marginBottom:m.wi}},x,S,a().createElement(Kr,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:e,onDrop:this.onDrop},p.map((e=>a().createElement(Ur,{enableResizer:t,excludeRefsById:o,getExternalIcon:n,graphHeight:w,graphWidth:y,graphZones:p,graphZoneType:e.type,id:`${e.type}Header`,includeOnlyRefsById:i,isDraggable:e.isCustomizable,isDroppable:e.isCustomizable,key:`${e.type}Header`,onHover:this.onZoneHover,onResize:l,onResizeEnd:c,onResizeFromPropChange:d,onToggleRefNodesShown:u,onUnhover:this.onZoneUnHover,repoPath:f,rowsStatsLoading:g,showRemoteNamesOnRefs:b,translate:v})))))}}var Xr=Yr;function Qr(e){const{constraints:{max:t,min:n},stats:{files:o,additions:r,deletions:s},getExternalIcon:l,isLastColumn:c,isRowSelected:d,verticalScrollWidth:h,zoneWidth:u}=e,p=r+s,f=Math.max(n,Math.min(t,p));let g=c?h+m.SZ:m.SZ;p<=f&&(g+=m.SZ);const b=Math.max(m.QW,f/t*(u-52-g)),v=r/p*b,y=s/p*b;return a().createElement("div",{className:i()("changes-zone",d?"selected":null)},a().createElement("span",{className:"changes-files",style:{width:52}},a().createElement("span",{className:"mr1"},l("files")),a().createElement("span",{className:"mr1"},o>999?"999+":o)),a().createElement("span",{className:"changes-bar",style:{width:b}},r?a().createElement("div",{className:"changes-sub-bar added",style:{width:v}}):null,s?a().createElement("div",{className:"changes-sub-bar deleted",style:{width:y}}):null))}const Jr={ADDED:"added",DELETED:"deleted",MODIFIED:"modified"};class ei extends a().Component{render(){const{fileDiffType:e,getExternalIcon:t}=this.props;if(!e)return null;const n=(e=>{switch(e){case Jr.ADDED:return"added";case Jr.MODIFIED:return"modified";case Jr.DELETED:return"deleted";default:return""}})(e),o=(e=>{switch(e){case Jr.ADDED:return"color-green";case Jr.MODIFIED:return"color-orange";case Jr.DELETED:return"color-red";default:return null}})(e),r=(e=>{switch(e){case Jr.ADDED:return"added";case Jr.MODIFIED:return"modified";case Jr.DELETED:return"deleted";default:return null}})(e),s=i()("fs-1",o,"mr1");return a().createElement("span",{className:s,title:r},t(n))}}var ti=ei;const{ADDED:ni,DELETED:oi,MODIFIED:ri}=Jr,ii={[ni]:"CommitDiffSection-NFilesAdded",[oi]:"CommitDiffSection-NFilesDeleted",[ri]:"CommitDiffSection-NFilesModified"};var si=function({count:e,diffType:t,getExternalIcon:n,fileNodeListStyle:o,translate:r}){const i=o?e:r(ii[t],e);let s,l;return o&&(s={fontSize:m.wd,marginRight:m.IX},l={fontSize:m.dH,margin:`0px ${m.VB}px 0px 0px`}),a().createElement("span",{className:"tiny-files-readout",style:s},a().createElement(ti,{fileDiffType:t,getExternalIcon:n,style:l}),a().createElement("span",{className:"tiny-files-readout-text"},i))},ai=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:n,translate:r}){const{types:i}=o;if(!e)return a().createElement("span",null);if(!Object.values(e).some((e=>Boolean(e))))return a().createElement("span",null);const s=e.modified?a().createElement(si,{count:e.modified,diffType:i.MODIFIED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,l=e.added?a().createElement(si,{count:e.added,diffType:i.ADDED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,c=e.deleted?a().createElement(si,{count:e.deleted,diffType:i.DELETED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,d=t?{marginLeft:m.aV}:null;return a().createElement("span",{className:"summary",style:d},s,l,c)};const li=i()("absolute","top-0","right-0","bottom-0","left-0","time-line"),ci=i()(li,"z2");var di=function({z2:e}){return a().createElement("div",{className:e?ci:li,style:{height:2}})};const hi=a().createElement("div",{className:"color-strip height-100",style:{width:2}}),ui={},pi={};class fi extends a().PureComponent{render(){const{clearCurrentlyHoveredGraphCommit:e,children:t,column:n,context:o,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:s,getExternalIcon:l,graphZoneType:c,hasAvatars:d,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:u,isHighlighted:p,isHovering:g,isLastColumn:b,isInUnsupportedRebase:v,isMissingHoveredRefGroup:y,isSelected:w,numGraphColumns:C,onContextMenu:x,onClickCommit:S,onDoubleClickCommit:_,rowContext:T,sha:k,showColorStrip:R,showConflictIcon:E,showTimeline:O,setAsCurrentlyHoveredGraphCommit:I,style:M,title:$,translate:A,type:N,workDirStats:P,verticalScrollWidth:D,zoneWidth:z}=this.props,H=function(e,t){const n=e+t.toString();let o=ui[n];return o||(o=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),ui[n]=o,o)}(N,g),L=function(e,t,n,o,r,s=!1,a=!1,l=!1,c=!1){const d=`${e}${t}${o}${n}${s}${a}${l}${c}${r}`;let h=pi[d];return h||(h=i()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":o},{"is-highlighted":n},{"dimmed-row":c&&!n||s&&(a||l)}),pi[d]=h,h)}(N,n,p,w,C,y,h,s,u),G=O?a().createElement(di,null):null,F=N===f.ch&&void 0!==P&&Object.keys(P).length>0,B=F&&a().createElement(ai,{diffStats:P,getExternalIcon:l,translate:A});return a().createElement("div",{className:H,"data-vscode-context":W(T),onContextMenu:v?void 0:e=>x(e,c,k),onDoubleClick:e=>_(e,c,k),onMouseDown:e=>S(e,c,k),onMouseEnter:e=>I(e,c,k,r),onMouseLeave:t=>e(t,c,k,r),style:M},G,a().createElement("div",{className:L,"data-vscode-context":W(o)},R?hi:null,E?a().createElement("span",{className:i()("ml2")},l("warning")):null,a().createElement("span",{className:i()("graph-zone",F?"has-work-dir":"width-100","flex-1"),style:{lineHeight:`${m.cZ}px`,...b&&{width:z-D},...d&&{marginLeft:5}},title:$},t),B))}}var mi=(e,t)=>{const{processedRows:n,rowStatsConstraints:o,translate:r,getExternalIcon:i,highlightRowsOnRefHover:s,isInUnsupportedRebase:l,numGraphColumns:c,clearCurrentlyHoveredGraphCommit:d,currentlyHoveredCommitSha:h,dimMergeCommits:u,dimRowsOfSelectedCommit:p,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,rowsStats:y,setAsCurrentlyHoveredGraphCommit:w}=e,C=new fe(e);return({rowIndex:e,style:x})=>{const S=t(e),_=n[e],{sha:T,type:k,contexts:R}=_,E=R?.stats||void 0,O=R?.row||void 0,I=y?.[T];let M=[I?.files?`${I.files} files changed`:"",I?.additions?`${I.additions} lines added`:"",I?.deletions?`${I.deletions} lines deleted`:""].filter(Boolean).join(", ");M=k!==f.ch?M:"";const $=m.WD,A=C.isColumnFollowingGraphColumn($),N=C.isLastColumn($),P=C.getZoneWidth($),D=C.getVerticalScrollWidth($);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:d,column:_.column,context:E,currentlyHoveredCommitSha:h,dimRowsOfSelectedCommit:p,getExternalIcon:i,graphZoneType:$,highlightRowsOnRefHover:s,isDimmedMergeCommitRow:k===f.lH&&u,isHighlighted:C.isHighlighted(e),isHovering:C.isHovering(e),isInUnsupportedRebase:l,isLastColumn:N,isMissingHoveredRefGroup:C.isMissingHoveredRefGroup(e),isSelected:C.isSelected(e),key:S,numGraphColumns:c,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:O,setAsCurrentlyHoveredGraphCommit:w,sha:T,showColorStrip:A,showTimeline:C.hasTimeline(e),style:x,title:M,translate:r,type:k,verticalScrollWidth:D,zoneWidth:P},I&&k!==f.ch?a().createElement(Qr,{constraints:o,getExternalIcon:i,isLastColumn:N,isRowSelected:C.isSelected(e),stats:I,verticalScrollWidth:D,zoneWidth:P}):null)}};function gi(e){const t=(e||"").trim().toUpperCase();if(0===t.length)return"?";const n=t.split(" ");return 1===n.length?n[0][0]:n.length>1?n[0][0]+n[n.length-1][0]:"?"}function bi(e,t){return e&&t?`${e} <${t}>`:e||t||""}class vi extends a().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getMaybeDefaultAvatar=(e,t,n)=>{const{authorInitials:o,classes:r,column:i,context:s,cssVariables:l,divStyle:c,fontSize:d,minWidth:h,size:u,title:f=""}=this.props,g=void 0!==i&&l[x(i)]||m.iq,b=p(g.trim()),v={alignItems:"center",backgroundColor:g,backgroundSize:u,color:b,display:"flex",fontSize:`${d}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:h,top:n,width:t,...c},y=["avatar","gravatar","rad2",...r||[]].join(" ").trim();return a().createElement("div",{className:y,"data-vscode-context":W(s),style:v,title:f},o?o.toUpperCase():"")};ensureTooltipText=()=>{const{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};render(){const{tooltipText:e}=this.state,{avatarUrl:t,classes:n,context:o,divStyle:r,height:i,minWidth:s,size:l,title:c="",tooltip:d,top:h,useAuthorInitialsForAvatars:u,width:p}=this.props,f=i||l,g=p||l,b=h||m.P3/2-f/2;let v;if(u||!t)v=this.getMaybeDefaultAvatar(f,g,b);else{const e={height:f,width:g,top:b,backgroundImage:`url('${t}')`,backgroundSize:l,minWidth:s,...r},i=["avatar","gravatar","rad2",...n||[]].join(" ").trim();v=a().createElement("div",{className:i,"data-test-class":"avatar","data-vscode-context":W(o),style:e,title:c})}return d?a().createElement(kr,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:a().createElement(Or,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},v):v}}var yi=(e,t)=>{const{avatarUrlByEmail:n,clearCurrentlyHoveredGraphCommit:o,cssVariables:r,currentlyHoveredCommitSha:i,dimMergeCommits:s,dimRowsOfSelectedCommit:l,getExternalIcon:c,highlightRowsOnRefHover:d,processedRows:h,isInUnsupportedRebase:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,numGraphColumns:y,setAsCurrentlyHoveredGraphCommit:C,translate:x,useAuthorInitialsForAvatars:S}=e,_=new fe(e);return({rowIndex:e,style:T})=>{const k=t(e),R=h[e],{author:E,email:O,message:I,sha:M,type:$,contexts:A}=R,N=m.GF,P=_.getActiveGraphZone(N);let D=$!==f.ch?E:void 0;const z=$!==f.ch?bi(E,O):void 0,H=A?.author||void 0,L=A?.row||void 0,G=_.isColumnFollowingGraphColumn(N),F=_.isLastColumn(N),W=_.getZoneWidth(N),B=(W<=P.minimumWidth||P?.mode===m.Um.Rich)&&$!==f.ch;if(B){const e=()=>{const e=E&&""!==E.trim()&&"Unknown"!==E?bi(E,O):O,t=w(v(I||""));let n="";if(0===t.length)n=e;else{t.unshift({email:O,name:E});for(let e=0;e<t.length;e+=1){const o=t[e];n+=bi(o.name,o.email),e<t.length-1&&(n+=", ")}}return n},t=S?void 0:n[O];D=a().createElement(vi,{authorInitials:gi(E),avatarUrl:t,classes:["node",`${f.o$}`,"z6"],column:R.column,context:A?.avatar||void 0,cssVariables:r,fontSize:10,height:m.LG,size:m.Y8,tooltip:e,useAuthorInitialsForAvatars:S,width:m.LG})}return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:o,column:R.column,context:H,currentlyHoveredCommitSha:i,dimRowsOfSelectedCommit:l,getExternalIcon:c,graphZoneType:N,hasAvatars:B,highlightRowsOnRefHover:d,isDimmedMergeCommitRow:$===f.lH&&s,isHighlighted:_.isHighlighted(e),isHovering:_.isHovering(e),isInUnsupportedRebase:u,isLastColumn:F,isMissingHoveredRefGroup:_.isMissingHoveredRefGroup(e),isSelected:_.isSelected(e),key:k,numGraphColumns:y,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:L,setAsCurrentlyHoveredGraphCommit:C,sha:M,showColorStrip:G,showTimeline:_.hasTimeline(e),style:T,title:z,translate:x,type:$,verticalScrollWidth:_.getVerticalScrollWidth(N),zoneWidth:W},D)}},wi=(e,t)=>{const{processedRows:n,translate:o,getExternalIcon:r,highlightRowsOnRefHover:i,isInUnsupportedRebase:s,numGraphColumns:l,formatCommitDateTime:c,clearCurrentlyHoveredGraphCommit:d,dimMergeCommits:h,dimRowsOfSelectedCommit:u,currentlyHoveredCommitSha:p,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,setAsCurrentlyHoveredGraphCommit:y}=e,w=new fe(e);return({rowIndex:e,style:C})=>{const x=t(e),S=n[e],{date:_,sha:T,type:k,contexts:R}=S,E=_&&k!==f.ch?c(_,f.Gu.RowEntry):void 0,O=_&&k!==f.ch?c(_,f.Gu.Tooltip):void 0,I=R?.date||void 0,M=R?.row||void 0,$=m.PL,A=w.isColumnFollowingGraphColumn($),N=w.isLastColumn($),P=w.getZoneWidth($),D=w.getVerticalScrollWidth($);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:d,column:S.column,context:I,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:u,getExternalIcon:r,graphZoneType:$,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:k===f.lH&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:s,isLastColumn:N,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:l,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:M,setAsCurrentlyHoveredGraphCommit:y,sha:T,showColorStrip:A,showTimeline:!1,style:C,title:O,translate:o,type:k,verticalScrollWidth:D,zoneWidth:P},E)}},Ci=(e,t)=>{const{dimMergeCommits:n,dimRowsOfSelectedCommit:o,processedRows:r,translate:i,getExternalIcon:s,highlightRowsOnRefHover:l,isInUnsupportedRebase:c,numGraphColumns:d,workDirStats:h,clearCurrentlyHoveredGraphCommit:u,currentlyHoveredCommitSha:p,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,setAsCurrentlyHoveredGraphCommit:y}=e,w=new fe(e);return({rowIndex:e,style:C})=>{const x=t(e),S=r[e],{sha:_,type:T,contexts:k}=S,R=T===f.ch?i("Graph-WorkInProgress"):S.message,E=T===f.ch?i("Graph-WorkInProgress"):S.messageInline,O=k?.message||void 0,I=k?.row||void 0,M=m.KE,$=w.isColumnFollowingGraphColumn(M),A=w.isLastColumn(M),N=w.getZoneWidth(M),P=w.getVerticalScrollWidth(M);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:u,column:S.column,context:O,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:o,getExternalIcon:s,graphZoneType:M,highlightRowsOnRefHover:l,isDimmedMergeCommitRow:T===f.lH&&n,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:c,isLastColumn:A,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:d,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rowContext:I,setAsCurrentlyHoveredGraphCommit:y,sha:_,showColorStrip:$,showConflictIcon:T===f.S7||T===f.br,showTimeline:w.hasTimeline(e),style:C,title:R,translate:i,type:T,verticalScrollWidth:P,workDirStats:h,zoneWidth:N},E)}},xi=(e,t)=>{const{processedRows:n,translate:o,getExternalIcon:r,highlightRowsOnRefHover:i,isInUnsupportedRebase:s,numGraphColumns:l,clearCurrentlyHoveredGraphCommit:c,currentlyHoveredCommitSha:d,dimMergeCommits:h,dimRowsOfSelectedCommit:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,setAsCurrentlyHoveredGraphCommit:v,shaLength:y}=e,w=new fe(e);return({rowIndex:e,style:C})=>{const x=t(e),S=n[e],{sha:_,type:T,contexts:k}=S,R=((e,t=m.ai)=>e?e.substring(0,t):"")(_,y),E=k?.sha||void 0,O=k?.row||void 0,I=m.av,M=w.isColumnFollowingGraphColumn(I),$=w.isLastColumn(I),A=w.getZoneWidth(I),N=w.getVerticalScrollWidth(I);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:c,column:S.column,context:E,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:u,getExternalIcon:r,graphZoneType:I,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:T===f.lH&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:s,isLastColumn:$,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:l,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:O,setAsCurrentlyHoveredGraphCommit:v,sha:_,showColorStrip:M,showTimeline:w.hasTimeline(e),style:C,translate:o,type:T,verticalScrollWidth:N,zoneWidth:A},T!==f.ch?a().createElement("span",{className:"font-monospace pointer",title:R},R):null)}};function Si({hasRefs:e,isActiveSha:t,left:n,type:o,width:r}){const s=i()("ref-line","z4",{"is-active":t});return e&&function(e){return[f.o$,f.lH,f.S7].includes(e)}(o)?a().createElement("hr",{className:s,style:{left:n,width:r}}):null}var _i=Si;function Ti({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:n,nodeOffset:o,type:r}){return a().createElement(Si,{hasRefs:t,isActiveSha:n,left:0,type:r,width:o+(r===f.lH?e:0)})}function ki({className:e,marginLeft:t}){return a().createElement("div",{className:i()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},a().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}const Ri=(e,t,n,o)=>n+t*e+o/2;function Ei({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:n,COMMIT_ZONE_GUTTER_WIDTH:o}}){return a().createElement(ki,{className:"z1",marginLeft:Ri(e,t,o,n)})}function Oi(){return a().createElement(ki,{marginLeft:0})}const Ii=(e,t,n,o,r,s)=>{const l={height:s.COMMIT_MERGE_NODE_DIAMETER,left:n+s.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:s.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:o,width:s.COMMIT_MERGE_NODE_DIAMETER},c=i()("node",r,"z6"),d=a().createElement(Or,{className:"gk-graph",id:"graph-merge-node-tooltip"},bi(t,e));return a().createElement(kr,{delayShow:250,overlay:d,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:c,"data-test-class":"tree-row-commit-node",style:l}))};class Mi extends a().PureComponent{render(){const{authorEmail:e,authorName:t,getExternalIcon:n,graphZoneModeConstants:o,left:r,opacity:s,type:l}=this.props;return(t||e)&&l===f.o$?o.IS_COMPACT?Ii(e,t,r,s,f.lH,o):(({authorEmail:e,authorInitials:t,authorName:n,avatarUrl:o,column:r,context:i,cssVariables:s,graphZoneModeConstants:l,left:c,message:d,opacity:h,type:u,useAuthorInitialsForAvatars:p})=>a().createElement(vi,{authorInitials:t,avatarUrl:o,classes:["node",`${u}`,"z6"],column:r,context:i,cssVariables:s,divStyle:{left:c,opacity:h},fontSize:10,height:l.COMMIT_NODE_DIAMETER,size:l.COMMIT_ZONE_AVATAR_DIAMETER,tooltip:()=>{const t=n&&""!==n.trim()&&"Unknown"!==n?bi(n,e):e,o=w(v(d||""));let r="";if(0===o.length)r=t;else{o.unshift({email:e,name:n});for(let e=0;e<o.length;e+=1){const t=o[e];r+=bi(t.name,t.email),e<o.length-1&&(r+=", ")}}return r},top:l.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:p,width:l.COMMIT_NODE_DIAMETER}))(this.props):l===f.lH||l===f.S7||l===f.br?Ii(e,t,r,s,l,o):((e,t,n,o,r,s,l=!1,c)=>{const d={height:c.COMMIT_NODE_DIAMETER,left:o,marginTop:c.COMMIT_NODE_TOP_OFFSET,opacity:r,width:c.COMMIT_NODE_DIAMETER};l&&(d.borderWidth=1);const h=i()("node",s,"z6",{compact:l});let u;u=s===f.kP?"Stash":s===f.ch?"Work in Progress":bi(n,t);const p=a().createElement(Or,{className:"gk-graph",id:"graph-other-node-tooltip"},u);return a().createElement(kr,{delayShow:250,overlay:p,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:h,"data-test-class":"tree-row-commit-node",style:d},s!==f.kP||l?null:e("stash")))})(n,e,t,r,s,l,o.IS_COMPACT,o)}}class $i extends a().Component{render(){const{columnColorByColumn:e,edgeColumnMax:t,edges:n,nodeColumn:o,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:i,COMMIT_ZONE_LINE_WIDTH:s,IS_COMPACT:l}}=this.props,c=function(e,t,n,o,r,i,s,a){const l=function(e,t,n,o){let r="";for(let i=0;i<=t;i++){const{passThrough:t,starting:s,ending:a}=e[i]??{};r=`${r}_${D(i,n,s?.type,o)}_${D(i,n,a?.type,o)}_${z(i,t?.type,o)}`}return r}(e,t,n,a);let c=Oe[l];if(c)return c;let d="";for(let l=0;l<=t;l+=1){const t=e[l];if(!t)continue;const{passThrough:c,starting:h,ending:u}=t;d+=h?Ee(l,n,h.type,o,r,i,s,a):"",d+=c?ke(l,c.type,o,r,i,s,a):"",d+=u?_e(l,n,u.type,o,r,i,s,a):""}return c=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${d}</g></svg>')`,Oe[l]=c,c}(n,t,o,e,r,i,s,l);return a().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:c}})}}var Ai=$i;function Ni({boxShadowAlpha:e,boxShadowLeft:t,children:n,className:o="",left:r,width:s}){return a().createElement("div",{className:i()("absolute","top-0","bottom-0","z3",o),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:r,width:s}},n)}function Pi({boxShadowAlpha:e,hasTimeline:t,scrollLeft:n,width:o}){return a().createElement(Ni,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:n,width:o},t?a().createElement(di,{z2:!0}):null)}function Di({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:n,scrollLeft:o,width:r}){return a().createElement(Ni,{boxShadowAlpha:e,boxShadowLeft:-5,left:o+t-r,width:r},n?a().createElement(di,{z2:!0}):null,a().createElement(Oi,null))}class zi extends a().PureComponent{render(){const{authorEmail:e,authorName:t,avatarContext:n,avatarUrl:o,clearCurrentlyHoveredGraphCommit:r,column:s,columnColorByColumn:l,commitZoneWidth:c,cssVariables:d,currentlyHoveredCommitSha:h,edgeColumnMax:u,edges:p,hasRefs:f,hasTimeline:g,getExternalIcon:b,graphZoneModeConstants:v,isActiveSha:y,isInUnsupportedRebase:w,isLastColumn:C,isSelected:x,leftGutterBoxShadowAlpha:S,leftGutterWidth:_,message:T,nodeOffset:k,nodeOpacity:R,numGraphColumns:E,onContextMenu:O,onClickCommit:I,onDoubleClickCommit:M,rightGutterBoxShadowAlpha:$,rightGutterWidth:A,rowContext:N,scrollLeft:P,setAsCurrentlyHoveredGraphCommit:D,sha:z,shouldShowRefLine:H,style:L,type:G,useAuthorInitialsForAvatars:F,zoneContext:B}=this.props,U=s%E+1,j=i()("relative","commit-zone","height-100-percent","pt3",G,`column-${U}`,{"is-selected":x,"has-active":y}),V=g?a().createElement(di,{z2:!0}):null,Z=a().createElement("div",{className:j,"data-vscode-context":W(B),onContextMenu:w?void 0:e=>O(e,m.Wm,z),onDoubleClick:e=>M(e,m.Wm,z),onMouseDown:e=>I(e,m.Wm,z),onMouseEnter:e=>D(e,m.Wm,z,h),onMouseLeave:e=>r(e,m.Wm,z,h),style:{...L,...C&&{width:"100%"}}},V,a().createElement(Pi,{boxShadowAlpha:S,hasTimeline:g,scrollLeft:P,width:_}),H?a().createElement(Ti,{graphZoneModeConstants:v,hasRefs:f,isActiveSha:y,nodeOffset:k,type:G}):null,a().createElement(Mi,{authorEmail:e,authorInitials:gi(t),authorName:t,avatarUrl:o,column:s,context:n,cssVariables:d,getExternalIcon:b,graphZoneModeConstants:v,left:k,message:T,opacity:R,type:G,useAuthorInitialsForAvatars:F}),a().createElement(Ei,{column:s,graphZoneModeConstants:v}),a().createElement(Ai,{columnColorByColumn:l,edgeColumnMax:u,edges:p,graphZoneModeConstants:v,nodeColumn:s}),a().createElement(Di,{boxShadowAlpha:$,commitZoneWidth:c,hasTimeline:g,scrollLeft:P,width:A}));return N?a().createElement("div",{"data-vscode-context":W(N)},Z):Z}}var Hi=function(e,t){const{avatarUrlByEmail:n,onMissingAvatar:o,clearCurrentlyHoveredGraphCommit:r,columnColorByColumn:i,cssVariables:s,currentlyHoveredCommitSha:l,processedRows:c,getExternalIcon:d,graphZoneModeConstants:h,isInUnsupportedRebase:u,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,nodeOffsetByColumn:y,nodeOpacityByColumn:w,numGraphColumns:C,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,setAsCurrentlyHoveredGraphCommit:_,scrollLeft:T,shouldShowRefLine:k,useAuthorInitialsForAvatars:R}=e,E=new fe(e);return({rowIndex:e,style:O})=>{const I=t(e),M=c[e],$=m.Wm,A=E.getZoneWidth($),{email:N,author:P,contexts:D,message:z,sha:H,type:L}=M,G=M.column,F=D?.graph||void 0,W=D?.avatar||void 0,B=D?.row||void 0;let U;R||(U=n[N],U||o(N,H));const j=E.isLastColumn($);return a().createElement(zi,{authorEmail:N,authorName:P,avatarContext:W,avatarUrl:U,clearCurrentlyHoveredGraphCommit:r,column:G,columnColorByColumn:i,commitZoneWidth:A,cssVariables:s,currentlyHoveredCommitSha:l,edgeColumnMax:M.edgeColumnMaxes,edges:M.edges,getExternalIcon:d,graphZoneModeConstants:h,hasRefs:M.hasRefs||!1,hasTimeline:E.hasTimeline(e),isActiveSha:E.rowContainsCurrentHeadRef(M),isInUnsupportedRebase:u,isLastColumn:j,isSelected:E.isSelected(e),key:I,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,message:z,nodeOffset:y[G],nodeOpacity:w[G],numGraphColumns:C,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,rowContext:B,scrollLeft:T,setAsCurrentlyHoveredGraphCommit:_,sha:H,shouldShowRefLine:k,style:O,type:L,useAuthorInitialsForAvatars:R,zoneContext:F})}},Li=function({hasActive:e,overflowCount:t}){return a().createElement("span",{className:i()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},Gi=function({style:e,children:t,column:n,numGraphColumns:o,onMouseEnter:r,onMouseLeave:s}){const l=e?.top||0;return a().createElement("div",{className:i()("gk-graph","ref-zone","column-"+(n%o+1))},a().createElement("ul",{onMouseEnter:r,onMouseLeave:s,style:{...e,top:l-m.cZ/2,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},Fi=function({enabledRefMetadataTypes:e,column:t,context:n,getTargetRef:o,hasActive:r,hasRefs:i,getExternalIcon:s,includeOnlyRefsById:l,includeOnlyRemotesByName:c,isHovered:d,isInUnsupportedRebase:h,numGraphColumns:u,onMissingRefMetadata:p,refGroupContexts:f,refGroupsByName:g,refMetadata:b,refNodeHovered:v,sha:y,showContextMenuForGroupedRef:w,onClickRef:C,onDoubleClickRef:x,onToggleRefNodesShown:S,translate:_}){const T=(e,t,n)=>{const o=t.map((e=>({id:j(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})));S(e,o,!1,n)},k=d?g:[g[0]],R=k[0].some((e=>e.refType===L.HEAD&&e.isCurrentHead)),E=m.Vh+(g[0]?.length||0)*m.B+(R?m.B:0),O=Object.values(l),I=O.length>0&&O.some((e=>e.type===L.TAG)),M=k.map((t=>{const n=f?.[t[0].name]||void 0,o=t.some((e=>{const t=j(e);switch(e.refType){case L.TAG:return I&&Boolean(l[t]);case L.REMOTE:return Boolean(l[t])||e.owner&&c[e.owner];default:return Boolean(l[t])}})),u=a().createElement(Wr,{enabledRefMetadataTypes:e,getExternalIcon:s,groupIsHovered:d,hasActive:r,hasRefs:i,isInUnsupportedRebase:h,isRefGroupIncluded:o,key:`ref-node-${t[0].fullName||t[0].name}`,onClick:C,onContextMenu:w,onDoubleClick:x,onHideRefClick:T,onHovered:v,onMissingRefMetadata:p,refGroup:t,refGroupContext:n,refMetadata:b,sha:y,translate:_});return d?a().createElement("li",{key:u.key},u):u}));return d?a().createElement("div",{"data-vscode-context":W(n),style:{height:100,position:"relative"}},a().createElement(Jo,{placement:"right",show:d,target:o},a().createElement(Gi,{column:t,numGraphColumns:u},M))):a().createElement("span",{"data-vscode-context":W(n),style:{minWidth:E}},M)};const Wi={};class Bi extends a().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,n,o)=>{this.props.onToggleRefNodesShown(e,t,n,o),this.props.refZoneUnhovered()};render(){const{enabledRefMetadataTypes:e,column:t,context:n,showGhostRefsOnRowHover:o,hasActive:r,hasRefs:s,hasTimeline:l,hoveredRefGroup:c,hoveredRefZoneSha:d,getExternalIcon:h,includeOnlyRefsById:u,includeOnlyRemotesByName:p,isContainerWindowFocused:f,isInUnsupportedRebase:g,numGraphColumns:b,onClickRef:v,onDoubleClickRef:y,onMissingRefMetadata:w,refGroupContexts:C,refGroupsByName:x,refMetadata:S,refNodeHovered:_,refNodeUnhovered:T,refZoneHovered:k,refZoneUnhovered:R,sha:E,shouldShowRefLine:O,showColorStrip:I,showContextMenuForGroupedRef:M,style:$,translate:A,type:N,width:P}=this.props,D=d===E&&f,z={minWidth:P,width:P},H={...$,...z},L=l?a().createElement(di,null):null,G=x.length,F=e=>{k(E),G?_(e,x[0],E):c&&T(e,c,E)},W=e=>{f&&this.isContextMenuShown?this.isContextMenuShown=!1:(R(),c&&T(e,c,E))},B=function(e,t,n,o,r,s){const a=`${e}${t}${n}${o}${r}${s}`;let l=Wi[a];return l||(l=i()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":s,"has-active":o,z6:n,z1:!n}),Wi[a]=l,l)}(N,t,D,r,b,G>0&&!s&&o),U=a().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!G)return a().createElement("div",{className:B,onMouseEnter:F,onWheel:W,style:H},I?U:null,L);const j={minWidth:0,overflow:"hidden",width:P-m.PB},V=G-1,Z=V>0&&!D?a().createElement(Li,{hasActive:r,overflowCount:V}):null;return a().createElement("div",{className:B,onMouseEnter:F,onMouseLeave:W,onWheel:W,style:H},a().createElement("div",{ref:e=>this.refPopoverTarget=e}),I?U:null,L,a().createElement("div",{className:"flex",style:j},a().createElement(Fi,{column:t,context:n,enabledRefMetadataTypes:e,getExternalIcon:h,getTargetRef:this.getRefPopoverTarget,hasActive:r,hasRefs:s,includeOnlyRefsById:u,includeOnlyRemotesByName:p,isHovered:D,isInUnsupportedRebase:g,numGraphColumns:b,onClickRef:v,onDoubleClickRef:y,onMissingRefMetadata:w,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:C,refGroupsByName:x,refMetadata:S,refNodeHovered:_,sha:E,showContextMenuForGroupedRef:(e,t,n)=>{F(e),this.isContextMenuShown=!0,M(e,t,n)},translate:A}),Z),s&&O?a().createElement("div",{className:"absolute left-0 flex z1",style:z},a().createElement(_i,{hasRefs:!0,isActiveSha:r,left:m.yv,type:N,width:"100%"})):null)}}var Ui=(e,t)=>{const{enabledRefMetadataTypes:n,showGhostRefsOnRowHover:o,onDoubleClickRef:r,processedRows:i,includeOnlyRefsById:s,includeOnlyRemotesByName:l,isContainerWindowFocused:c,isInUnsupportedRebase:d,getExternalIcon:h,hoveredRefGroup:u,hoveredRefZoneSha:p,numGraphColumns:f,onClickRef:g,onMissingRefMetadata:b,onShowContextMenuForGroupedRef:v,onRefNodeHovered:y,onRefNodeUnhovered:w,onRefZoneHovered:C,onRefZoneUnhovered:x,onToggleRefNodesShown:S,refMetadataById:_,shouldShowRefLine:T,translate:k}=e,R=new fe(e);return({rowIndex:e,style:E})=>{const O=t(e),I=i[e],M=m.jZ,$=R.isLastColumn(M),A=R.getZoneWidth(M),N=R.isHovering(e),{sha:P,type:D,hasRefs:z,contexts:H}=I,L=H?.ref||void 0,G=H?.refGroups||void 0,F=R.isSingleSelected(e),W=R.getVerticalScrollWidth(M),B=(o||z)&&(z||N||F)?R.getGraphRefGroupsByNameForRow(e):[],U=R.isColumnFollowingGraphColumn(M);return a().createElement(Bi,{column:I.column,context:L,enabledRefMetadataTypes:n,getExternalIcon:h,hasActive:R.rowContainsCurrentHeadRef(I),hasRefs:z||!1,hasTimeline:R.hasTimeline(e),hoveredRefGroup:u,hoveredRefZoneSha:p,includeOnlyRefsById:s,includeOnlyRemotesByName:l,isContainerWindowFocused:c,isInUnsupportedRebase:d,isSingleSelected:F,key:O,numGraphColumns:f,onClickRef:g,onDoubleClickRef:r,onMissingRefMetadata:b,onToggleRefNodesShown:S,refGroupContexts:G,refGroupsByName:B,refMetadata:_,refNodeHovered:y,refNodeUnhovered:w,refZoneHovered:C,refZoneUnhovered:x,sha:P,shouldShowRefLine:T,showColorStrip:U,showContextMenuForGroupedRef:v,showGhostRefsOnRowHover:o,style:E,translate:k,type:D,width:$?A-W:A})}},ji=(e,t)=>{const{translate:n,processedRows:o}=e,r=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),s=new fe(e);return({rowIndex:e,style:l})=>{const c=t(e),d=i()("graph-row","height-100-percent","flex"),h=s.hasTimeline(e),u=o[e],p=u.contexts?.row||void 0,f=u.timeLineEntry?.label||"",m=u.timeLineEntry?.value||0,g=h?a().createElement(di,null):null,b=h?a().createElement("span",{className:"time-line-message-container"},a().createElement("span",{className:"time-line-message"},n(f,m))):null;return a().createElement("div",{className:r,"data-vscode-context":W(p),key:c,style:l},g,a().createElement("div",{className:d,"data-vscode-context":W(p)},b))}};class Vi extends a().PureComponent{graphContainerRef=a().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=m.OR;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=ae();graphZonesByType={};graphZoneOrdering=[m.jZ,m.Wm,m.KE,m.GF,m.WD,m.PL,m.av];missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>e.forEach((e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);const t=S(this.props.cssVariables);this.graphZoneModeConstants=ae(this.props.columnsSettings?.[m.Wm]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||m.X9.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);const e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,n=!1,o=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});const t=Object.keys(e.highlightedShas||{}).filter((t=>e.highlightedShas[t])),n=[];t.forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&n.push(this.processedGraphRowBySha[e].rowIndex)})),this.markerRowIndices={...this.markerRowIndices,highlights:n}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(n=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(n=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||n){this.cleanEdgeCaches();const r=S(e.cssVariables);o=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(r),cssVariablesWithDefaults:r,numGraphColumns:this.getNumGraphColumns(r)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||n)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits!==e.hasMoreCommits&&this.setState({hasMoreCommits:e.hasMoreCommits||!1}),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||m.OR,!ce(this.props.workDirStats)&&ce(e.workDirStats)||ce(this.props.workDirStats)&&!ce(e.workDirStats)?(o=!0,this.setState({workDirStats:this.workDirStats})):this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[m.Wm]?.mode!==this.props.columnsSettings?.[m.Wm]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=ae(e.columnsSettings?.[m.Wm]?.mode),this.updateCommitZoneContentWidthFromChange();const n=this.graphZonesByType[m.Wm];n.currentWidth=n.contentWidth,n.preferredWidth=n.contentWidth,n.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,n.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),o&&(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})),t){this.updateCommitZoneContentWidthFromChange();const e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=((e,t,n)=>{let o,r,i=!1,s=250;return(...t)=>{r=(new Date).getTime(),s=!o||r-o>s+20?20:250,i||(e(...t),o=(new Date).getTime(),i=!0,setTimeout((()=>{i=!1}),s))}})((()=>this.onGraphVisibleRowsUpdated()));onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,n,o)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o!==n&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:n}))};onClearCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{const n=this.graphZoneOrdering.indexOf(e);let o=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&n<o&&(o-=1),this.graphZoneOrdering.splice(n,1),this.graphZoneOrdering.splice(o,0,e);const r={};this.graphZoneOrdering.forEach(((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])})),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=F(((e,t)=>{if(t?.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!1),this.setState({graphZones:n})}}));onGraphZoneResizeEnd=F(((e,t)=>{if(t?.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!0),this.setState({graphZones:n})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))}));onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&this.props.onSettingsClick(e,t)};onMessageChange=e=>{this.props.onMessageChange&&this.props.onMessageChange(e)};onClickRef=(e,t,n,o)=>{this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onClickCommit=(e,t,n)=>{if(0===e.button){const{enableMultiSelection:o}=this.props,r=this.isMacOSPlatform();if(o&&(!r&&e.ctrlKey||r&&e.metaKey)?this.selectCommits([n],!0,!1):o&&e.shiftKey||this.selectCommits([n],!1,!1),this.props.onClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onClickGraphRow(e,t,o)}}};onDoubleClickCommit=(e,t,n)=>{if(this.props.onDoubleClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onDoubleClickGraphRow(e,t,o)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey);break;case 72:this.selectHead(e.shiftKey)}};onRefNodeHovered=(e,t,n)=>{(!this.props.showGhostRefsOnRowHover||he(this.isSelectedBySha,n)||this.processedGraphRowBySha[n]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,n)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:void 0})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout((()=>{this.shouldFireShowMoreCommits=!0}),100))};onScrollForZone=(e,t,n,o,r)=>{if(this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),!this.props.onShowMoreCommits||!r||!o||o<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;const i=this.scrollTop+o,s=this.orderedGraphRows.length*m.$0;i>s-m.qG&&i>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(i,s-1),this.onShowMoreCommits())};onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,n)=>{if(this.props.onRowContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRowContextMenu(e,t,o)}};onRefContextMenu=(e,t,n)=>{if(this.props.onRefContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRefContextMenu(e,t,o)}};onWipNodeInputWillUnmount=()=>{this.props.onWipNodeInputWillUnmount&&this.props.onWipNodeInputWillUnmount()};selectCommits(e,t,n){t||Object.keys(this.isSelectedBySha).forEach((t=>{e.includes(t)||delete this.isSelectedBySha[t]}));const o=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach((e=>{o.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,n))})),this.props.onSelectGraphRows){const e=this.getSelectedShas().map((e=>this.processedGraphRowBySha[e]));this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(m.Wm)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){const e=[];return Object.keys(this.isSelectedBySha).forEach((t=>{this.isSelectedBySha[t]&&e.push(t)})),e}getExcludeRemotesByName(){const e={};return Object.values(this.excludeRefsById).forEach((t=>{t.type===L.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}getIncludeOnlyRemotesByName(){const e={};return Object.values(this.includeOnlyRefsById).forEach((t=>{t.type===L.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}clearScrollToIndex=()=>{setTimeout((()=>this.setState({scrollToIndex:void 0})),100)};getTopAndBottomVisibleRowIndex(){const{graphHeight:e,orderedGraphRows:t,scrollTop:n}=this,o=e||0;if(!o||!t||!t.length)return{top:-1,bottom:-1};const r=(o-m.rl)/m.$0,i=n/m.$0,s=i+(r-1);return{top:Math.max(Math.floor(i),0),bottom:Math.min(Math.ceil(s),t.length-1)}}getOffsetSha(e){const t=this.graphHeight||0,n=this.props.scrollRowPadding||0;if(!n||!t)return e;let o=n;if(o<=0)return e;const r=this.getTopAndBottomVisibleRowIndex(),i=r.top,s=r.bottom;if(-1===i||-1===s)return e;const a=Math.floor((s-i)/2);if(a<1)return e;o=Math.min(o,a);const l=this.orderedGraphRows.length,c=this.orderedGraphRows.findIndex((t=>t.sha===e));if(!c||!this.orderedGraphRows.length)return e;const d=s-o<c;return i+o>c?this.orderedGraphRows[Math.max(c-o,0)].sha||e:d&&this.orderedGraphRows[Math.min(c+o,l-1)].sha||e}selectSha(e,t=!1){const n=this.processedGraphRowBySha[e]?.column||0,o=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(m.Wm),s=this.getCommitZoneContentWidth(),a=n*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,l=o-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=a,c=a<=o+r,d=Math.max(0,s-i),h=l&&c?o:H(a-r/2,0,d);this.setScrollToSha(t?this.getOffsetSha(e):e,h),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,n){const o=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],i=oe(r,o,e);if(r.currentWidth=i,t===m.Wm){const e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}n&&(r.preferredWidth=i)}updateCommitZoneContentWidthFromChange(){const e=this.graphZonesByType[m.Wm];if(!e.isHidden){const t=this.getOrderedActiveGraphZones(),n=this.getCommitZoneContentWidth();e.contentWidth=n,e.maximumWidth=n,e.currentWidth>n&&(e.currentWidth=oe(e,t,n)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){const n=t?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0,o=this.graphZonesByType[e];return o&&!o.isHidden?o.currentWidth-n:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){const t=e?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0;if(this.graphZonesByType[m.Wm])return this.graphZonesByType[m.Wm].currentWidth-t;const{columnsSettings:n}=this.props;return n?.[m.Wm]?n[m.Wm].width-t:m.qi[m.Wm].minimumWidth-t}getSingleColumnModeFactor(){const e=this.maxColumns,t=this.getCurrentWidthByZone(m.Wm);return 1===e?0:H(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setScroll(e,t){null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===m.Wm&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){const e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){const e=this.getScrollToSha();return this.orderedGraphRows.findIndex((t=>t.sha===e))}getScrollToAlignment(){return m.os}getMinNodeOffset(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,n){return this.graphZonesByType[e]?te(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,n):0}getVerticalScrollWidth(e,t,n){return this.graphZonesByType[e]?ne(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,n):0}getMaxNodeOffset(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return(1-n)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+n*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){const e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){const e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),n=this.getAbsoluteNodeLeftByColumn(),o={};return Object.keys(n).forEach((r=>{const i=n[r];o[r]=H(i,e,t)})),o}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(m.Wm)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getCommitZoneContentWidth(),n=this.getSingleColumnModeFactor();return H((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+n/2}getNodeOpacityByColumn(){const e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),n=this.getAbsoluteNodeLeftByColumn(),o=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),i={};return Object.keys(n).forEach((s=>{const a=n[s],l=a-(e-r*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),c=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(a+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-o)),d=Math.min(l,c);i[s]=m.l3+(1-m.l3)*Math.max(d/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),r)})),i}getLeftGutterWidth(){const e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+e*(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return.4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){const t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(n,H(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){const t=this.getSingleColumnModeFactor(),n=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,n)}updateMarkerRowIndices(e){const t={...this.markerRowIndices};if(e.forEach((e=>{t[e]=[]})),e.includes("selection")&&this.getSelectedShas().forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.selection.push(this.processedGraphRowBySha[e].rowIndex)})),e.includes("highlights")){const e=this.state?.highlightedShas||this.props.highlightedShas||{};Object.keys(e).forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.highlights.push(this.processedGraphRowBySha[e].rowIndex)}))}this.markerRowIndices=t}getMarkerColors(){const e=getComputedStyle(document.documentElement),t={};return Object.values(m.Qh).forEach((n=>{const o=e.getPropertyValue(n.colorCssKey).trim();o&&(t[n.type]=o)})),t}initializeGraphZones(e,t,n){this.graphZonesByType={};const o=[];let r=0;t.forEach(((t,n)=>{const i=e?e[t]:void 0,s=m.qi[t],a=i?.width?i.width:s.minimumWidth,l={...s,type:t,currentWidth:a,preferredWidth:a,isHidden:i?.isHidden||!1,mode:i?.mode,order:s.isCustomizable&&void 0!==i?.order?i?.order:n};i?.isHidden||(r+=l.currentWidth),t===m.Wm&&(l.contentWidth=this.getCommitZoneContentWidth(),l.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,l.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(l.maximumWidth=l.contentWidth)),this.graphZonesByType[t]=l,l?.isHidden||o.push(l)}));const i=o[o.length-1];if(i){const e=q(this.props.cssVariables,!0),t=i.minimumWidth+e;(null==i.maximumWidth||i.maximumWidth>=t)&&(i.minimumWidth=t,null!=i.showIconWidth&&(i.showIconWidth+=e),o[o.length-1]=i)}for(o.forEach((e=>{const t=oe(e,o,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)}));r>n;){const e=V(o);if(!e)break;const t=e.currentWidth,i=r-n,s=Math.max(e.minimumWidth,t-i),a=t-s;this.graphZonesByType[e.type].currentWidth=s,r-=a}if(r<n){const e=t[t.length-1],r=n-K(o,e);this.graphZonesByType[e].currentWidth=r}return o}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every((t=>void 0!==e?.[t]?.order))&&this.graphZoneOrdering.sort(((t,n)=>e[t].order<e[n].order?-1:e[t].order>e[n].order?1:0))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach(((n,o)=>{const r=this.graphZonesByType[n],i=e?.[r.type];i&&(i.isHidden!==r.isHidden&&(t=!0,r.type!==m.WD||i.isHidden||this.updateRowStatsConstraints()),r.isHidden=i.isHidden,r.order=r.isCustomizable&&void 0!==i?.order?i?.order:o,r.mode=i.mode,r.preferredWidth=i.width??r.preferredWidth,r.currentWidth=r.preferredWidth)})),t&&this.graphZoneOrdering.forEach((e=>{const t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth}))}getEdgeColumnMaxes(e){let t=0;const n=this.processedGraphRowBySha[e]?.edges||{};return Object.keys(n).forEach((e=>{t=Math.max(t,parseInt(e,10))})),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){const n={};let o,r,i,s;return Object.keys(t).forEach((a=>{o=t[a],r=o.passThrough,i=o.starting,s=r&&!g(r.type)?r:i&&!g(i.type)?i:r||i||void 0,s&&(s.parentSha===e.sha?n[a]={ending:s}:n[a]={passThrough:s})})),n}getFinalEdgeStateForGraphAndRow(e,t){const n=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),o=this.getStartingEdgesByColumn(e);let r;return Object.keys(o).forEach((e=>{n[e]||(n[e]={ending:void 0,passThrough:void 0,starting:void 0}),r=n[e],r.starting=o[e]})),n}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach(((e,t)=>{const n=this.orderedGraphRows[t-1],o=n&&this.processedGraphRowBySha[n.sha]?.edges?this.processedGraphRowBySha[n.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,o);const r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)}))}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){const t={},n=e.parents;if(n.length>0){const o=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:n[0],type:o});for(let e=1;e<n.length;e+=1){const r=n[e],i=this.processedGraphRowBySha[r]?.column;void 0!==i&&(t[i]={parentSha:r,type:o})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=k.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=T.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(_))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?R:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&k.set(r,i)}if(null==t||T.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=k.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?R:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&k.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(_,((t,n,o,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return O(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}(e,m.It);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):me[e]?function(e,t){if(0===t.length)return e;let n=e;return t.forEach(((e,t)=>{const o=new RegExp(`\\{${t}\\}`,"g");n=n.replace(o,e)})),n}(me[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):a().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout((()=>{const e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}}),100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;const n=this.pendingMissingRefsMetadata[e]||[],o=t.filter((e=>!n.includes(e)));this.pendingMissingRefsMetadata[e]=[...n,...o],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout((()=>{const e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}}),100)};selectNext(e){const t=this.getSelectedShas(),n=t.length>0?t[t.length-1]:null;let o;if(e&&n){const e=this.processedGraphRowBySha[n];e?.parents?.length&&(o=e.parents[0])}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.min(e+1,this.orderedGraphRows.length-1);o=this.orderedGraphRows[t]?.sha}o&&this.selectCommits([o],!1,!0)}selectPrevious(e){const t=this.getSelectedShas(),n=t.length>0?t[0]:null;let o;if(e&&n){const e=this.childrenBySha[n];if(e?.length)for(let t=0;t<e.length;t+=1)if(t===e.length-1)o=e[t];else if(this.processedGraphRowBySha[e[t]]?.type!==f.kP){o=e[t];break}}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.max(-1,e-1);o=this.orderedGraphRows[t]?.sha,t<0&&(o=this.orderedGraphRows[0]?.sha)}o&&this.selectCommits([o],!1,!0)}selectHead(e){e&&this.headUpstreamSha?this.selectCommits([this.headUpstreamSha],!1,!0):this.headSha&&this.selectCommits([this.headSha],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){const t=e.parents||[],n=this.columnsToFreeWhenFound[e.sha];if(void 0!==n)for(let e=0;e<n.length;e+=1)delete this.columnsUsed[n[e]];let o=0;const r=this.reserverInfoBySha[e.sha];let i,s;void 0!==r?.column?(o=r.column,delete this.reserverInfoBySha[e.sha]):o=this.getAvailableColumnAndUseIt();for(let n=0;n<t.length;n+=1)if(i=t[n],s=this.reserverInfoBySha[i],0===n&&void 0!==s?.column&&s?.column!==o){const t=this.columnsToFreeWhenFound[i]||[],n=s?.type===f.kP&&e.type!==f.kP&&r?.newestDate>s?.newestDate;s?.column>o||n?(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.newestDate,column:o},t.push(s.column)):t.push(o),this.columnsToFreeWhenFound[i]=t}else void 0===s?.column&&(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.column===o?r?.newestDate:e.date,column:0===n?o:this.getAvailableColumnAndUseIt()});return o}getFilteredHeadsForGraphRow(e,t){return e.heads.filter((e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[U(L.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[U(L.HEAD,e)])))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter((e=>t?void 0!==this.includeOnlyRefsById[U(L.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[U(L.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner])))}getFilteredTagsForGraphRow(e,t,n){const o=t&&Object.values(this.includeOnlyRefsById).some((e=>e.type===L.TAG)),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter((e=>o?void 0!==this.includeOnlyRefsById[U(L.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[U(L.TAG,e)]&&(!t||r||n)))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};const t=new Map,n={},o=[],r=[];this.branchUpstreamRowIndices=[];const i=[],s=[],a=[],l=[],c={};if(ce(this.workDirStats)&&e.length>0&&e[0].type!==f.ch){const t=function(e){const t=e.find(le);return t?.sha||void 0}(e),n={sha:f.ch,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:"",type:f.ch,heads:[],remotes:[],tags:[],childRefs:{heads:[],tags:[],remotes:[]}};this.workDirStats.context&&(n.contexts={row:this.workDirStats.context}),e.unshift(n)}else!ce(this.workDirStats)&&e.length>0&&e[0].type===f.ch&&e.shift();const d=Object.keys(this.includeOnlyRefsById).length>0;e.forEach(((e,h)=>{const u=this.childrenBySha[e.sha]?.length>0,p=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,d):[],m=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,d):[],g=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,d,Boolean(c[e.sha]||u)):[],b=e.parents?.length>0?e.parents.filter((e=>!n[e])):[],v=p.length>0||m.length>0||g.length>0,y=p.length>0||m.length>0;if(e.type!==f.o$&&e.type!==f.lH||c[e.sha]){if(e.type===f.kP&&this.excludeByType.stashes&&(n[e.sha]=!0),!n[e.sha]&&b.length>0){let e;for(e of b)c[e]=!0}}else e.type!==f.o$&&e.type!==f.lH||c[e.sha]||v||u||(n[e.sha]=!0);const w=n[e.sha],C={...e,heads:p,remotes:m,tags:g,parents:b,column:w?0:this.getColumns(e),edgeColumnMaxes:0,edges:{},hasRefs:v,messageInline:e.message.replace(/\n+(?:\s+\n+)?/g," | "),childRefs:{heads:[],tags:[],remotes:[]}};if(!w){let n;const c=t.get(e.sha);c?.length&&(c.sort(((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return-1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return-1;if(e.rowEntered>t.rowEntered)return 1}return 0})),n=c[0],C.childRefs={heads:[...n?.heads||[]],remotes:[...n?.remotes||[]],tags:[...n?.tags||[]]},t.delete(e.sha));for(let o=0;o<b.length;o+=1){const r=b[o];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let i=t.get(r);(y||n)&&void 0===i&&(i=[],t.set(r,i)),y?i?.unshift({sha:e.sha,parentIndexScore:o,rowEntered:h,heads:p,remotes:m,tags:g}):n&&i?.unshift({...n,parentIndexScore:o,rowEntered:h})}const d=this.orderedGraphRows.length;if(C.rowIndex=d,p.length>0&&(i.push(d),p.some((e=>e.isCurrentHead))&&(this.headSha=C.sha,o.push(d))),m.length>0){s.push(d);for(const e of m)e.current&&(r.push(d),this.headUpstreamSha=C.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(d)}g.length>0&&a.push(d),e.type===f.kP&&l.push(d),this.orderedGraphRows.push(C)}this.processedGraphRowBySha[e.sha]=C})),this.markerRowIndices={...this.markerRowIndices,head:o,upstream:r,localBranches:i,remoteBranches:s,tags:a,stashes:l},clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval((()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})}),9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=function(e){const{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort(((e,t)=>e-t));const n=e[0],o=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],s=e[t-1],a=i-o;return{min:Math.max(n,r-1.5*a),max:Math.min(s,r+1.5*a)}}(null!=this.rowsStats?Object.values(this.rowsStats).map((e=>e.additions+e.deletions)):[])}updateTimelines(){const e=function(){const e=new Date,t={hour:[],day:[],week:[],month:[],year:[]};let n;for(n=1;n<=m.YJ.hour;n+=1)t.hour.push({date:e.getTime()-36e5*n,label:1===n?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:n});for(n=1;n<=m.YJ.day;n+=1)t.day.push({date:e.getTime()-864e5*n,label:1===n?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:n});for(n=1;n<=m.YJ.week;n+=1)t.week.push({date:e.getTime()-6048e5*n,label:1===n?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:n});const o=new Date;for(o.setHours(0,0,0,0),n=1;n<=m.YJ.month;n+=1)o.setMonth(o.getMonth()-1),o.setHours(0,0,0,0),t.month.push({date:o.getTime(),label:1===n?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:n});const r=new Date;for(r.setHours(0,0,0,0),n=1;n<=m.YJ.year;n+=1){let e;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),n){case 1:e="Timeline-1YearAgo";break;case m.YJ.year:e="Timeline-NPlusYearsAgo";break;default:e="Timeline-NYearsAgo"}t.year.push({date:r.getTime(),label:e,timeUnit:"year",value:n})}return t}();Object.values(e).forEach((e=>{e.forEach((e=>{const{date:t}=e,n=this.orderedGraphRows.find((e=>e.date<t));n&&this.processedGraphRowBySha[n.sha]&&(this.processedGraphRowBySha[n.sha].timeLineEntry=e)}))}))}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach((e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry}))}cleanupSelections(){const e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){const n=e[t];this.processedGraphRowBySha[n]||delete this.isSelectedBySha[n]}}getColumnColorByColumn(e){const t=this.getNumGraphColumns(e),n=this.maxColumns>t?this.maxColumns:t,o={};for(let i=0;i<=n;i+=1)if(i<t){const t=e[x(i)];o[i]="rgba"===(r=u(t)).type?`rgba(${r.r}, ${r.g}, ${r.b}, ${Number(r.a.toFixed(2))})`:`hsla(${r.h}, ${(100*r.s).toFixed(2)}%, ${(100*r.l).toFixed(2)}%, ${Number(r.a.toFixed(2))})`}else{const e=o[i%t];o[i]=e}var r;return o}getNumGraphColumns(e){const t=e["--num-columns-supported"],n=Number.parseInt(t,m.uK);return Number.isNaN(n)?m.uK:n}expandLastZoneMinWidthForScrollbar(e){const t=e[e.length-1]?.type;if(!t)return;const n=q(this.props.cssVariables,!0),o=m.qi[t].minimumWidth+n,r=this.graphZonesByType[t];if(!r||null!=r.maximumWidth&&o>r.maximumWidth)return;r.minimumWidth=o;const i=m.qi[t].showIconWidth;null!=i&&(r.showIconWidth=i+n),r.currentWidth<r.minimumWidth&&(r.currentWidth=r.minimumWidth),r.preferredWidth<r.minimumWidth&&(r.preferredWidth=r.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){const n=K(e);n>t&&this.shrinkZoneWidthsToFitWidth(e,t),n<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,n){let o=K(e);for(;o>t;){const r=V(e,n);if(!r)break;const i=K(e,r.type);if(i+r.currentWidth>t){const n=oe(r,e,t-i);this.updateWidthByZone(n,r.type)}o=K(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort(((e,t)=>this.graphZonesByType[e].order<this.graphZonesByType[t].order?-1:this.graphZonesByType[e].order>this.graphZonesByType[t].order?1:0)).filter((e=>!this.graphZonesByType[e].isHidden)).map((e=>this.graphZonesByType[e]))}expandZoneWidthsToFitWidth(e,t,n){let o=K(e);for(;o<t;){const r=Z(e,n);if(!r)break;const i=K(e,r.type),s=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(i+r.currentWidth<t){let n=t-i;!Y(r.type,e)&&n>s&&(n=s),n=oe(r,e,n),this.updateWidthByZone(n,r.type)}o=K(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,n,o)=>{t.forEach((e=>{n&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:n||(this.excludeRefsById[e.id]=e)})),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,n,o?this.processedGraphRowBySha[o]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){Oe={},Re={},Te={},Se={},I={}}onZoneEnter=(e,t,n,o)=>{t!==m.jZ&&(n&&o&&this.onRefNodeUnhovered(e,n,o),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,n,o){if(n?.width){const r=t.currentWidth;this.updateWidthByZone(n.width,t.type,o);const i=ie(t.type,e),s=this.graphZonesByType[t.type];r>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),r<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,n)=>{t&&n&&this.onRefNodeUnhovered(e,t,n),this.onRefZoneUnhovered()};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=F(((e,t)=>{const n=Math.floor(t),o=Math.floor(e),r=n!==this.graphHeight,i=o!==this.graphWidth,s={};if(r&&(this.graphHeight=n,s.height=n),i){this.graphWidth=o;const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(r||i)&&(this.setState(s),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))}));onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;const{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,n)=>{const o=function(e){const t=e||C;let n="";const o=Object.keys(t);n+=".gk-graph {\n";for(const e of o)n+=`${e}: ${t[e]};\n`;return n+="}\n",n}(t);return a().createElement(a().Fragment,null,a().createElement("style",{nonce:n},o),a().createElement("div",{className:"gk-graph"},e))};render(){const{isInUnsupportedRebase:e,isCommitting:t,pendingCommitMessageSummary:n,repoPath:o,nonce:r}=this.props,{avatarUrlByEmail:s,columnColorByColumn:l,contexts:c,cssVariablesWithDefaults:d,currentlyHoveredCommitSha:h,dimMergeCommits:u,dimRowsOfSelectedCommit:p,highlightRowsOnRefHover:f,showGhostRefsOnRowHover:g,showRemoteNamesOnRefs:b,enabledRefMetadataTypes:v,enabledScrollMarkerTypes:y,graphZones:w,hasMoreCommits:C,height:x,highlightedShas:S,hoveredRefGroup:_,hoveredRefZoneSha:T,themeOpacityFactor:k,isContainerWindowFocused:R,isLoadingRows:E,rowsStatsLoading:O,numGraphColumns:I,processedRows:M,refMetadataById:$,useAuthorInitialsForAvatars:A,scrollToAlignment:N,scrollToIndex:P,scrollTop:D,scrollLeft:z,shaLength:H,width:L,workDirStats:G}=this.state,F=i()("flex","graph-container"),B=(U=M,e=>e===U.length?"SHOW_MORE_COMMITS":U[e].sha);var U;const j=(V=e=>B(e),({cellCache:e,cellRenderer:t,columnSizeAndPositionManager:n,columnStartIndex:o,columnStopIndex:r,deferredMeasurementCache:i,horizontalOffsetAdjustment:s,isScrolling:a,parent:l,rowSizeAndPositionManager:c,rowStartIndex:d,rowStopIndex:h,styleCache:u,verticalOffsetAdjustment:p,visibleColumnIndices:f,visibleRowIndices:m})=>{const g=[],b=e,v=n.areOffsetsAdjusted()||c.areOffsetsAdjusted(),y=!a&&!v;for(let e=d;e<=h;e+=1){const d=c.getSizeAndPositionOfCell(e);for(let c=o;c<=r;c+=1){const o=n.getSizeAndPositionOfCell(c),r=c>=f.start&&c<=f.stop&&e>=m.start&&e<=m.stop,h=`${e}-${c}`;let v;y&&u[h]?v=u[h]:i&&!i.has(e,c)?v={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(v={height:d.size,left:o.offset+s,position:"absolute",top:d.offset+p,width:o.size},u[h]=v);const w={columnIndex:c,isScrolling:a,isVisible:r,key:h,parent:l,rowIndex:e,style:v};let C;if(!a||s||p)C=t(w);else{const n=V(e);b[h]&&b[h].realKeyForCell===n||(b[h]={realKeyForCell:n,cell:t(w)}),C=b[h].cell}null!=C&&g.push(C)}}return g});var V;const Z=this.getLeftGutterWidth(),q=this.getRightGutterWidth(),K=this.getRightGutterBoxShadowAlpha(k),Y=this.getLeftGutterBoxShadowAlpha(k),X=this.getNodeOffsetByColumn(),Q=this.getNodeOpacityByColumn(),J=ie(m.jZ,w),ee=ie(m.Wm,w),te=-1!==J&&-1!==ee&&ee-J==1,ne=!_,oe={avatarUrlByEmail:s,dimMergeCommits:u,dimRowsOfSelectedCommit:p,highlightRowsOnRefHover:f,showGhostRefsOnRowHover:g,showRemoteNamesOnRefs:b,enabledRefMetadataTypes:v,enabledScrollMarkerTypes:y,isInUnsupportedRebase:e,isCommitting:t,isContainerWindowFocused:R,pendingCommitMessageSummary:n,workDirStats:G,repoPath:o,columnColorByColumn:l,currentlyHoveredCommitSha:h,cssVariables:d,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:w,hasMoreCommits:C,height:x,highlightedShas:S,hoveredRefGroup:_,hoveredRefZoneSha:T,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:E,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:Y,leftGutterWidth:Z,nodeOffsetByColumn:X,nodeOpacityByColumn:Q,nonce:r,numGraphColumns:I,processedRows:M,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:$,rightGutterBoxShadowAlpha:K,rightGutterWidth:q,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,useAuthorInitialsForAvatars:A,scrollToAlignment:N,scrollLeft:z,scrollTop:D,shaLength:H,shouldShowRefLine:te,width:L,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,onWipNodeInputWillUnmount:this.onWipNodeInputWillUnmount,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,translate:this.translateCallback},re={[m.jZ]:Ui(oe,B),[m.Wm]:Hi(oe,B),[m.KE]:Ci(oe,B),[m.GF]:yi(oe,B),[m.PL]:wi(oe,B),[m.av]:xi(oe,B),[m.WD]:mi(oe,B),[m.Gn]:ji(oe,B)},se=w.map(((e,t)=>a().createElement(Oo,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:re,columnIndex:t,enabledScrollMarkerTypes:y,enableResizer:ne,getExternalIcon:this.getIconCallback,getKeyForCell:B,graphHeight:x-m.rl,graphWidth:L,graphZones:w,graphZoneType:e.type,hasMoreCommits:C,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,d),isLoadingRows:E,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===m.jZ?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,_,T),rowCount:M.length,scrollLeft:z,scrollToAlignment:e.type===m.jZ?N:void 0,scrollToIndex:e.type===m.jZ?P:void 0,scrollTop:D,smartCellRangeRenderer:j,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,d)}))),ae=this.graphContainerRef?.current&&a().createElement(Xr,{dragAppendToContainer:this.graphContainerRef?.current,enableResizer:ne,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:w,headerContext:c?.header,height:x,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:o,rowsStatsLoading:O,settingsContext:c?.settings,showRemoteNamesOnRefs:b,translate:this.translateCallback,width:L}),le=a().createElement("div",{className:"graph-component","data-vscode-context":W(c?.graph),onBlur:e=>this.onGraphContainerBlurred(e,_,T),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},ae,a().createElement("div",{className:S?i()(F,"graph-highlighted"):F,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:x,width:L},tabIndex:-1},se));return this.decorateWithHelmet(le,d,r)}}var Zi=Vi},827:(e,t,n)=>{n.d(t,{Gu:()=>c,S7:()=>r,br:()=>s,ch:()=>l,kP:()=>a,lH:()=>i,o$:()=>o});const o="commit-node",r="merge-conflict-node",i="merge-node",s="unsupported-rebase-warning-node",a="stash-node",l="work-dir-changes";var c=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(c||{})},8289:()=>{},2149:()=>{},3308:(e,t,n)=>{n.d(t,{$0:()=>s,$s:()=>d,An:()=>h,B:()=>P,B8:()=>R,GF:()=>re,Gn:()=>ee,IX:()=>Z,It:()=>S,KE:()=>oe,LG:()=>y,MQ:()=>X,NP:()=>f,O5:()=>m,OR:()=>ge,Oi:()=>F,P3:()=>p,PB:()=>$,PL:()=>ie,QW:()=>L,Qh:()=>he,RG:()=>ce,Rg:()=>A,SZ:()=>G,Um:()=>le,VB:()=>q,Vh:()=>D,WD:()=>ae,Wm:()=>ne,Wu:()=>g,X9:()=>U,Y8:()=>w,YJ:()=>me,aV:()=>j,ai:()=>pe,am:()=>N,at:()=>u,av:()=>se,b4:()=>J,cZ:()=>a,dF:()=>r,dH:()=>K,d_:()=>de,eq:()=>v,iq:()=>o,jZ:()=>te,j_:()=>E,jg:()=>_,jn:()=>b,l3:()=>c,lG:()=>k,m8:()=>C,mt:()=>z,mu:()=>Q,os:()=>Y,pj:()=>O,q1:()=>x,qG:()=>l,qi:()=>fe,rl:()=>i,uK:()=>ue,v1:()=>H,wd:()=>V,wi:()=>B,wy:()=>I,xI:()=>T,yv:()=>M,ze:()=>W});const o="#199489",r=3,i=26,s=28,a=22,l=50*s,c=.5,d=3,h=3,u=s,p=a,f=3,m=p/2,g=56,b=56,v=32,y=a,w=y-4,C=55,x=50,S="short+short",_=55,T=50,k=50,R=50,E=55,O=18,I=32,M=2,$=6,A=14,N=5,P=A+N,D=10,z=55,H=50,L=10,G=25,F=58,W=22,B=2,U={dark:1,light:.5},j=10,V=12,Z=6,q=3,K=12,Y="auto",X="center",Q=7,J=4,ee="timelineMessage",te="ref",ne="graph",oe="message",re="author",ie="datetime",se="sha",ae="changes";var le=(e=>(e.Compact="compact",e.Rich="rich",e.Text="text",e))(le||{}),ce=(e=>(e.Block="block",e.FullLine="fullLine",e.ThinLine="thinLine",e))(ce||{});const de={block:{type:"block",baseHeight:1*s,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*s,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*s,minHeight:1,maxHeight:2}},he={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},ue=10,pe=6,fe={[re]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:v,showIconWidth:C},[ie]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:x,showIconWidth:_},[oe]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:R,showIconWidth:E},[se]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:T,showIconWidth:k},[ne]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:g,showIconWidth:b},[te]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:I,showIconWidth:z},[ae]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:H,showIconWidth:F}},me={hour:23,day:6,week:4,month:11,year:6},ge={added:0,deleted:0,modified:0}},9453:(e,t,n)=>{n.d(t,{AI:()=>i,mQ:()=>o,uq:()=>r});const o="pullRequest",r="upstream",i=[o,r]},7334:(e,t,n)=>{function o(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}n.d(t,{y:()=>o})},664:()=>{},6756:()=>{},3316:e=>{function t(e,t,n,o){var r,i=null==(r=o)||"number"==typeof r||"boolean"==typeof r?o:n(o),s=t.get(i);return void 0===s&&(s=e.call(this,o),t.set(i,s)),s}function n(e,t,n){var o=Array.prototype.slice.call(arguments,3),r=n(o),i=t.get(r);return void 0===i&&(i=e.apply(this,o),t.set(r,i)),i}function o(e,t,n,o,r){return n.bind(t,e,o,r)}function r(e,r){return o(e,this,1===e.length?t:n,r.cache.create(),r.serializer)}function i(){return JSON.stringify(arguments)}function s(){this.cache=Object.create(null)}s.prototype.has=function(e){return e in this.cache},s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t};var a={create:function(){return new s}};e.exports=function(e,t){var n=t&&t.cache?t.cache:a,o=t&&t.serializer?t.serializer:i;return(t&&t.strategy?t.strategy:r)(e,{cache:n,serializer:o})},e.exports.strategies={variadic:function(e,t){return o(e,this,n,t.cache.create(),t.serializer)},monadic:function(e,n){return o(e,this,t,n.cache.create(),n.serializer)}}},1143:e=>{e.exports=function(e,t,n,o,r,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,s,a],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},621:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(n(6689)),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t],l=void 0===a?"undefined":o(a);return r.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"==typeof a.render||1===a.nodeType?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},8853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(6689)),r=n(9864),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t];return o.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(a)?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,o,r,i){var s=o||"<<anonymous>>",a=i||n;if(null==t[n])return new Error("The "+r+" `"+a+"` is required to make `"+s+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d];return e.apply(void 0,[t,n,o,r,i].concat(c))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,o,r,i,s){var a=r||"<<anonymous>>",l=s||o;if(null==n[o])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),h=6;h<c;h++)d[h-6]=arguments[h];return e.apply(void 0,[n,o,a,i,l].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:(e,t,n)=>{var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,n)=>{var o=n(7137),r=n(2989);e.exports=function(){return o.apply(this,r(arguments)).on("cloned",(function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)}));function e(e){e.removeAttribute("data-reactid")}}},9921:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case h:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case g:case m:case l:return e;default:return t}}case r:return t}}}function x(e){return C(e)===h}t.AsyncMode=d,t.ConcurrentMode=h,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=u,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||C(e)===d},t.isConcurrentMode=x,t.isContextConsumer=function(e){return C(e)===c},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return C(e)===u},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===r},t.isProfiler=function(e){return C(e)===a},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===h||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===b)},t.typeOf=C},9864:(e,t,n)=>{e.exports=n(9921)},6871:(e,t,n)=>{function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>s}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},7281:(e,t,n)=>{t.__esModule=!0;var o=c(n(5697)),r=c(n(621)),i=c(n(6689)),s=c(n(6405)),a=c(n(3464)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),h=0;h<r;h++)c[h]=arguments[h];return n=o=d(this,e.call.apply(e,[this].concat(c))),o._mountOverlayTarget=function(){o._overlayTarget||(o._overlayTarget=document.createElement("div"),o._portalContainerNode=(0,a.default)(o.props.container,(0,l.default)(o).body),o._portalContainerNode.appendChild(o._overlayTarget))},o._unmountOverlayTarget=function(){o._overlayTarget&&(o._portalContainerNode.removeChild(o._overlayTarget),o._overlayTarget=null),o._portalContainerNode=null},o._renderOverlay=function(){var e=o.props.children?i.default.Children.only(o.props.children):null;if(null!==e){o._mountOverlayTarget();var t=!o._overlayInstance;o._overlayInstance=s.default.unstable_renderSubtreeIntoContainer(o,e,o._overlayTarget,(function(){t&&o.props.onRendered&&o.props.onRendered()}))}else o._unrenderOverlay(),o._unmountOverlayTarget()},o._unrenderOverlay=function(){o._overlayTarget&&(s.default.unmountComponentAtNode(o._overlayTarget),o._overlayInstance=null)},o.getMountNode=function(){return o._overlayTarget},d(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,a.default)(e.container,(0,l.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(i.default.Component);h.displayName="Portal",h.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=h,e.exports=t.default},2856:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=d(n(5697)),i=d(n(8853)),s=d(n(6689)),a=d(n(5425)),l=d(n(7487)),c=d(n(2395));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!n.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,n=e.containerPadding,o=e.target,r=e.placement,i=e.shouldUpdatePosition,d=e.rootClose,h=e.children,u=e.transition,p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(p.show||u&&!this.state.exited))return null;var f=h;if(f=s.default.createElement(l.default,{container:t,containerPadding:n,target:o,placement:r,shouldUpdatePosition:i},f),u){var m=p.onExit,g=p.onExiting,b=p.onEnter,v=p.onEntering,y=p.onEntered;f=s.default.createElement(u,{in:p.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:b,onEntering:v,onEntered:y},f)}return d&&(f=s.default.createElement(c.default,{onRootClose:p.onHide},f)),s.default.createElement(a.default,{container:t},f)},t}(s.default.Component);h.propTypes=o({},a.default.propTypes,l.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.apply(void 0,[e].concat(o))},transition:i.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=h,e.exports=t.default},5425:(e,t,n)=>{t.__esModule=!0;var o=d(n(5697)),r=d(n(621)),i=d(n(6689)),s=d(n(6405)),a=d(n(3464)),l=d(n(290)),c=d(n(7281));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=h(this,e.call.apply(e,[this].concat(i))),o.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props;o._portalContainerNode=(0,a.default)(e.container,(0,l.default)(o).body)},o.getMountNode=function(){return o._portalContainerNode},h(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?s.default.createPortal(this.props.children,this._portalContainerNode):null},t}(i.default.Component);u.displayName="Portal",u.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=s.default.createPortal?u:c.default,e.exports=t.default},7487:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=p(n(4184)),i=p(n(5697)),s=p(n(621)),a=n(6689),l=p(a),c=p(n(6405)),d=p(n(7603)),h=p(n(3464)),u=p(n(290));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var m=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&c.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,i=f(e,["children","className"]),s=this.state,c=s.positionLeft,d=s.positionTop,h=f(s,["positionLeft","positionTop"]);delete i.target,delete i.container,delete i.containerPadding,delete i.shouldUpdatePosition;var u=l.default.Children.only(t);return(0,a.cloneElement)(u,o({},i,h,{positionLeft:c,positionTop:d,className:(0,r.default)(n,u.props.className),style:o({},u.props.style,{left:c,top:d})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),n=(0,h.default)(this.props.container,(0,u.default)(this).body);this.setState((0,d.default)(this.props.placement,t,e,n,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:i.default.oneOfType([s.default,i.default.func]),container:i.default.oneOfType([s.default,i.default.func]),containerPadding:i.default.number,placement:i.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:i.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},2395:(e,t,n)=>{t.__esModule=!0;var o=c(n(1629)),r=c(n(5697)),i=c(n(6689)),s=c(n(6405)),a=c(n(6616)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i.addEventListeners=function(){var e=i.props.event,t=(0,l.default)(i);i.documentMouseCaptureListener=(0,a.default)(t,e,i.handleMouseCapture,!0),i.documentMouseListener=(0,a.default)(t,e,i.handleMouse),i.documentKeyupListener=(0,a.default)(t,"keyup",i.handleKeyUp)},i.removeEventListeners=function(){i.documentMouseCaptureListener&&i.documentMouseCaptureListener.remove(),i.documentMouseListener&&i.documentMouseListener.remove(),i.documentKeyupListener&&i.documentKeyupListener.remove()},i.handleMouseCapture=function(e){var t;i.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,o.default)(s.default.findDOMNode(i),e.target)},i.handleMouse=function(e){!i.preventMouseRootClose&&i.props.onRootClose&&i.props.onRootClose(e)},i.handleKeyUp=function(e){27===e.keyCode&&i.props.onRootClose&&i.props.onRootClose(e)},i.preventMouseRootClose=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(i.default.Component);d.displayName="RootCloseWrapper",d.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},d.defaultProps={event:"click"},t.default=d,e.exports=t.default},6616:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i){return(0,o.default)(e,t,n,i),{remove:function(){(0,r.default)(e,t,n,i)}}};var o=i(n(1416)),r=i(n(3249));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i,s){var a="BODY"===i.tagName?(0,o.default)(n):(0,r.default)(n,i),c=(0,o.default)(t),d=c.height,h=c.width,u=void 0,p=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){p=a.top+(a.height-d)/2,u="left"===e?a.left-h:a.left+a.width;var g=function(e,t,n,o){var r=l(n),i=r.scroll,s=r.height,a=e-o-i,c=e+o-i+t;return a<0?-a:c>s?s-c:0}(p,d,i,s);p+=g,m=50*(1-2*g/d)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');u=a.left+(a.width-h)/2,p="top"===e?a.top-d:a.top+a.height;var b=function(e,t,n,o){var r=l(n).width,i=e-o,s=e+o+t;return i<0?-i:s>r?r-s:0}(u,h,i,s);u+=b,f=50*(1-2*b/h)+"%",m=void 0}return{positionLeft:u,positionTop:p,arrowOffsetLeft:f,arrowOffsetTop:m}};var o=a(n(2565)),r=a(n(7265)),i=a(n(504)),s=a(n(290));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,n=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,n=window.innerHeight,r=(0,i.default)((0,s.default)(e).documentElement)||(0,i.default)(e);else{var a=(0,o.default)(e);t=a.width,n=a.height,r=(0,i.default)(e)}return{width:t,height:n,scroll:r}}e.exports=t.default},3464:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var o,r=(o=n(6405))&&o.__esModule?o:{default:o};e.exports=t.default},290:(e,t,n)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(o.default.findDOMNode(e))};var o=i(n(6405)),r=i(n(9981));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},644:(e,t,n)=>{t.ZP=t.cn=t.d0=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(5697)),r=a(n(6689)),i=a(n(6405)),s=n(6871);function a(e){return e&&e.__esModule?e:{default:e}}n(4726);var l="unmounted",c="exited",d="entering";t.d0=d;var h="entered";t.cn=h;var u="exiting",p=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var r,i=n.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=c,o.appearStatus=d):r=h:r=t.unmountOnExit||t.mountOnEnter?l:c,o.state={status:r},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(t=d):n!==d&&n!==h||(t=u)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===d?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},s.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||o?(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(e,r)}))}))}))):this.safeSetState({status:h},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:u},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},o}(r.default.Component);function f(){}p.contextTypes={transitionGroup:o.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var m=(0,s.polyfill)(p);t.ZP=m},4726:(e,t,n)=>{var o;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(o=n(5697))&&o.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=n(2735)},6405:e=>{e.exports=n(2788)},8149:(e,t,n)=>{e.exports=n(3285)},3562:(e,t,n)=>{e.exports=n(7965)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{CHANGES_BAR_MIN_WIDTH:()=>a.QW,CHANGES_BAR_RIGHT_MARGIN:()=>a.SZ,CHANGES_ZONE_MIN_WIDTH:()=>a.v1,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>a.Oi,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>a.Y8,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>a.LG,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>a.eq,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>a.m8,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>a.q1,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>a.jg,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>a.B8,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>a.j_,COMMIT_NODE_MIN_ALPHA:()=>a.l3,COMMIT_SHA_ZONE_MIN_WIDTH:()=>a.xI,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>a.lG,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>a.Wu,COMMIT_ZONE_EDGE_ARC_PADDING:()=>a.NP,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>a.O5,COMMIT_ZONE_MARGIN_BOTTOM:()=>a.$s,COMMIT_ZONE_MARGIN_TOP:()=>a.An,COMMIT_ZONE_ROW_HEIGHT:()=>a.at,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>a.P3,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>a.jn,CommitDateTimeSources:()=>t.Gu,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>a.iq,DEFAULT_COMMIT_SHA_LENGTH:()=>a.ai,DEFAULT_WORKDIR_STATS:()=>a.OR,GRAPH_HEADER_ROW_HEIGHT:()=>a.rl,GRAPH_ROW_HEIGHT:()=>a.$0,GRAPH_ROW_INNER_HEIGHT:()=>a.cZ,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>a.qG,GRAPH_SCROLL_MARKER_LANES:()=>a.dF,GraphColumnMode:()=>a.Um,GraphMarkerShape:()=>a.RG,HEADER_ROW_HEIGHT:()=>a.ze,HEADER_ROW_MARGIN_BOTTOM:()=>a.wi,INLINE_SUMMARY_MARGIN_LEFT:()=>a.aV,LeftPanelToGraphMarginGap:()=>a.mu,OPACITY_FACTOR_BY_THEME:()=>a.X9,REF_NODE_ICON_MARGIN:()=>a.am,REF_NODE_ICON_SPACING:()=>a.B,REF_NODE_ICON_WIDTH:()=>a.Rg,REF_NODE_OUTER_SPACING:()=>a.Vh,REF_ZONE_MARGIN_LEFT:()=>a.yv,REF_ZONE_MARGIN_RIGHT:()=>a.PB,REF_ZONE_MIN_WIDTH:()=>a.wy,REF_ZONE_SHOW_ICON_WIDTH:()=>a.mt,REF_ZONE_TEXT_HEIGHT:()=>a.pj,ResizableHandleCorrection:()=>a.b4,SCROLL_TO_ALIGNMENT_AUTO:()=>a.os,SCROLL_TO_ALIGNMENT_CENTER:()=>a.MQ,TIMESTAMP_FORMAT_DATE_TIME:()=>a.It,TINY_FILES_READOUT_FONT_SIZE:()=>a.wd,TINY_FILES_READOUT_RIGHT_MARGIN:()=>a.IX,TINY_ICON_RIGHT_MARGIN:()=>a.VB,TINY_ICON_SIZE:()=>a.dH,allMetadataTypes:()=>l.AI,changesZone:()=>a.WD,commitAuthorZone:()=>a.GF,commitDateTimeZone:()=>a.PL,commitMessageZone:()=>a.KE,commitNodeType:()=>t.o$,commitShaZone:()=>a.av,commitZone:()=>a.Wm,default:()=>u,getHostingServiceName:()=>c.y,graphMarkerMetadata:()=>a.Qh,graphMarkerShapeMetadata:()=>a.d_,graphZoneMetaData:()=>a.qi,lookbackLimitByPeriod:()=>a.YJ,mergeConflictNodeType:()=>t.S7,mergeNodeType:()=>t.lH,numGraphColumnsDefault:()=>a.uK,pullRequestMetadataType:()=>l.mQ,refZone:()=>a.jZ,stashNodeType:()=>t.kP,timelineMsgRowRenderId:()=>a.Gn,unsupportedRebaseWarningNodeType:()=>t.br,upstreamMetadataType:()=>l.uq,workDirType:()=>t.ch});var e=r(4057),t=r(827),n=r(2149),o={};for(const e in n)["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(o[e]=()=>n[e]);r.d(i,o);var s=r(8289);o={};for(const e in s)["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(o[e]=()=>s[e]);r.d(i,o);var a=r(3308),l=r(9453),c=r(7334),d=r(664);o={};for(const e in d)["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName"].indexOf(e)<0&&(o[e]=()=>d[e]);r.d(i,o);var h=r(6756);o={};for(const e in h)["default","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName"].indexOf(e)<0&&(o[e]=()=>h[e]);r.d(i,o);var u=e.Z})(),e.exports=i})()},4516:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)o.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},3975:(e,t,n)=>{var o=n(2735),r=n(4516),i=n(9146);function s(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function a(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}o||s("227");var l=!1,c=null,d=!1,h=null,u={onError:function(e){l=!0,c=e}};function p(e,t,n,o,r,i,s,d,h){l=!1,c=null,a.apply(u,arguments)}var f=null,m={};function g(){if(f)for(var e in m){var t=m[e],n=f.indexOf(e);if(-1<n||s("96",e),!v[n])for(var o in t.extractEvents||s("97",e),v[n]=t,n=t.eventTypes){var r=void 0,i=n[o],a=t,l=o;y.hasOwnProperty(l)&&s("99",l),y[l]=i;var c=i.phasedRegistrationNames;if(c){for(r in c)c.hasOwnProperty(r)&&b(c[r],a,l);r=!0}else i.registrationName?(b(i.registrationName,a,l),r=!0):r=!1;r||s("98",o,e)}}}function b(e,t,n){w[e]&&s("100",e),w[e]=t,C[e]=t.eventTypes[n].dependencies}var v=[],y={},w={},C={},x=null,S=null,_=null;function T(e,t,n){var o=e.type||"unknown-event";e.currentTarget=_(n),function(e,t,n,o,r,i,a,u,f){if(p.apply(this,arguments),l){if(l){var m=c;l=!1,c=null}else s("198"),m=void 0;d||(d=!0,h=m)}}(o,t,void 0,e),e.currentTarget=null}function k(e,t){return null==t&&s("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function R(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var E=null;function O(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var o=0;o<t.length&&!e.isPropagationStopped();o++)T(e,t[o],n[o]);else t&&T(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var I={injectEventPluginOrder:function(e){f&&s("101"),f=Array.prototype.slice.call(e),g()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var o=e[t];m.hasOwnProperty(t)&&m[t]===o||(m[t]&&s("102",t),m[t]=o,n=!0)}n&&g()}};function M(e,t){var n=e.stateNode;if(!n)return null;var o=x(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&s("231",t,typeof n),n)}function $(e){if(null!==e&&(E=k(E,e)),e=E,E=null,e&&(R(e,O),E&&s("95"),d))throw e=h,d=!1,h=null,e}var A=Math.random().toString(36).slice(2),N="__reactInternalInstance$"+A,P="__reactEventHandlers$"+A;function D(e){if(e[N])return e[N];for(;!e[N];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[N]).tag||6===e.tag?e:null}function z(e){return!(e=e[N])||5!==e.tag&&6!==e.tag?null:e}function H(e){if(5===e.tag||6===e.tag)return e.stateNode;s("33")}function L(e){return e[P]||null}function G(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function F(e,t,n){(t=M(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=k(n._dispatchListeners,t),n._dispatchInstances=k(n._dispatchInstances,e))}function W(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=G(t);for(t=n.length;0<t--;)F(n[t],"captured",e);for(t=0;t<n.length;t++)F(n[t],"bubbled",e)}}function B(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=M(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=k(n._dispatchListeners,t),n._dispatchInstances=k(n._dispatchInstances,e))}function U(e){e&&e.dispatchConfig.registrationName&&B(e._targetInst,null,e)}function j(e){R(e,W)}var V=!("undefined"==typeof window||!window.document||!window.document.createElement);function Z(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var q={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionend:Z("Transition","TransitionEnd")},K={},Y={};function X(e){if(K[e])return K[e];if(!q[e])return e;var t,n=q[e];for(t in n)if(n.hasOwnProperty(t)&&t in Y)return K[e]=n[t];return e}V&&(Y=document.createElement("div").style,"AnimationEvent"in window||(delete q.animationend.animation,delete q.animationiteration.animation,delete q.animationstart.animation),"TransitionEvent"in window||delete q.transitionend.transition);var Q=X("animationend"),J=X("animationiteration"),ee=X("animationstart"),te=X("transitionend"),ne="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oe=null,re=null,ie=null;function se(){if(ie)return ie;var e,t,n=re,o=n.length,r="value"in oe?oe.value:oe.textContent,i=r.length;for(e=0;e<o&&n[e]===r[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===r[i-t];t++);return ie=r.slice(e,1<t?1-t:void 0)}function ae(){return!0}function le(){return!1}function ce(e,t,n,o){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(n):"target"===r?this.target=o:this[r]=n[r]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ae:le,this.isPropagationStopped=le,this}function de(e,t,n,o){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)}function he(e){e instanceof this||s("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function ue(e){e.eventPool=[],e.getPooled=de,e.release=he}r(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ae)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ae)},persist:function(){this.isPersistent=ae},isPersistent:le,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=le,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function n(){return o.apply(this,arguments)}var o=this;t.prototype=o.prototype;var i=new t;return r(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=r({},o.Interface,e),n.extend=o.extend,ue(n),n},ue(ce);var pe=ce.extend({data:null}),fe=ce.extend({data:null}),me=[9,13,27,32],ge=V&&"CompositionEvent"in window,be=null;V&&"documentMode"in document&&(be=document.documentMode);var ve=V&&"TextEvent"in window&&!be,ye=V&&(!ge||be&&8<be&&11>=be),we=String.fromCharCode(32),Ce={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},xe=!1;function Se(e,t){switch(e){case"keyup":return-1!==me.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function _e(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Te=!1;var ke={eventTypes:Ce,extractEvents:function(e,t,n,o){var r=void 0,i=void 0;if(ge)e:{switch(e){case"compositionstart":r=Ce.compositionStart;break e;case"compositionend":r=Ce.compositionEnd;break e;case"compositionupdate":r=Ce.compositionUpdate;break e}r=void 0}else Te?Se(e,n)&&(r=Ce.compositionEnd):"keydown"===e&&229===n.keyCode&&(r=Ce.compositionStart);return r?(ye&&"ko"!==n.locale&&(Te||r!==Ce.compositionStart?r===Ce.compositionEnd&&Te&&(i=se()):(re="value"in(oe=o)?oe.value:oe.textContent,Te=!0)),r=pe.getPooled(r,t,n,o),i?r.data=i:null!==(i=_e(n))&&(r.data=i),j(r),i=r):i=null,(e=ve?function(e,t){switch(e){case"compositionend":return _e(t);case"keypress":return 32!==t.which?null:(xe=!0,we);case"textInput":return(e=t.data)===we&&xe?null:e;default:return null}}(e,n):function(e,t){if(Te)return"compositionend"===e||!ge&&Se(e,t)?(e=se(),ie=re=oe=null,Te=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ye&&"ko"!==t.locale?null:t.data}}(e,n))?((t=fe.getPooled(Ce.beforeInput,t,n,o)).data=e,j(t)):t=null,null===i?t:null===t?i:[i,t]}},Re=null,Ee=null,Oe=null;function Ie(e){if(e=S(e)){"function"!=typeof Re&&s("280");var t=x(e.stateNode);Re(e.stateNode,e.type,t)}}function Me(e){Ee?Oe?Oe.push(e):Oe=[e]:Ee=e}function $e(){if(Ee){var e=Ee,t=Oe;if(Oe=Ee=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function Ae(e,t){return e(t)}function Ne(e,t,n){return e(t,n)}function Pe(){}var De=!1;function ze(e,t){if(De)return e(t);De=!0;try{return Ae(e,t)}finally{De=!1,(null!==Ee||null!==Oe)&&(Pe(),$e())}}var He={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Le(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!He[e.type]:"textarea"===t}function Ge(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Fe(e){if(!V)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function We(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Be(e){e._valueTracker||(e._valueTracker=function(e){var t=We(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){o=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ue(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=We(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}var je=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null});var Ve=/^(.*)[\\\/]/,Ze="function"==typeof Symbol&&Symbol.for,qe=Ze?Symbol.for("react.element"):60103,Ke=Ze?Symbol.for("react.portal"):60106,Ye=Ze?Symbol.for("react.fragment"):60107,Xe=Ze?Symbol.for("react.strict_mode"):60108,Qe=Ze?Symbol.for("react.profiler"):60114,Je=Ze?Symbol.for("react.provider"):60109,et=Ze?Symbol.for("react.context"):60110,tt=Ze?Symbol.for("react.concurrent_mode"):60111,nt=Ze?Symbol.for("react.forward_ref"):60112,ot=Ze?Symbol.for("react.suspense"):60113,rt=Ze?Symbol.for("react.memo"):60115,it=Ze?Symbol.for("react.lazy"):60116,st="function"==typeof Symbol&&Symbol.iterator;function at(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=st&&e[st]||e["@@iterator"])?e:null}function lt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case tt:return"ConcurrentMode";case Ye:return"Fragment";case Ke:return"Portal";case Qe:return"Profiler";case Xe:return"StrictMode";case ot:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case et:return"Context.Consumer";case Je:return"Context.Provider";case nt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case rt:return lt(e.type);case it:if(e=1===e._status?e._result:null)return lt(e)}return null}function ct(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,r=e._debugSource,i=lt(e.type);n=null,o&&(n=lt(o.type)),o=i,i="",r?i=" (at "+r.fileName.replace(Ve,"")+":"+r.lineNumber+")":n&&(i=" (created by "+n+")"),n="\n    in "+(o||"Unknown")+i}t+=n,e=e.return}while(e);return t}var dt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ht=Object.prototype.hasOwnProperty,ut={},pt={};function ft(e,t,n,o,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){mt[e]=new ft(e,0,!1,e,null)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];mt[t]=new ft(t,1,!1,e[1],null)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){mt[e]=new ft(e,2,!1,e.toLowerCase(),null)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){mt[e]=new ft(e,2,!1,e,null)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){mt[e]=new ft(e,3,!1,e.toLowerCase(),null)})),["checked","multiple","muted","selected"].forEach((function(e){mt[e]=new ft(e,3,!0,e,null)})),["capture","download"].forEach((function(e){mt[e]=new ft(e,4,!1,e,null)})),["cols","rows","size","span"].forEach((function(e){mt[e]=new ft(e,6,!1,e,null)})),["rowSpan","start"].forEach((function(e){mt[e]=new ft(e,5,!1,e.toLowerCase(),null)}));var gt=/[\-:]([a-z])/g;function bt(e){return e[1].toUpperCase()}function vt(e,t,n,o){var r=mt.hasOwnProperty(t)?mt[t]:null;(null!==r?0===r.type:!o&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,o)&&(n=null),o||null===r?function(e){return!!ht.call(pt,e)||!ht.call(ut,e)&&(dt.test(e)?pt[e]=!0:(ut[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,o=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}function yt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function wt(e,t){var n=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ct(e,t){var n=null==t.defaultValue?"":t.defaultValue,o=null!=t.checked?t.checked:t.defaultChecked;n=yt(null!=t.value?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function xt(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function St(e,t){xt(e,t);var n=yt(t.value),o=t.type;if(null!=n)"number"===o?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===o||"reset"===o)return void e.removeAttribute("value");t.hasOwnProperty("value")?Tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,yt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function _t(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!("submit"!==o&&"reset"!==o||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Tt(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,null)})),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink")})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")})),["tabIndex","crossOrigin"].forEach((function(e){mt[e]=new ft(e,1,!1,e.toLowerCase(),null)}));var kt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Rt(e,t,n){return(e=ce.getPooled(kt.change,e,t,n)).type="change",Me(n),j(e),e}var Et=null,Ot=null;function It(e){$(e)}function Mt(e){if(Ue(H(e)))return e}function $t(e,t){if("change"===e)return t}var At=!1;function Nt(){Et&&(Et.detachEvent("onpropertychange",Pt),Ot=Et=null)}function Pt(e){"value"===e.propertyName&&Mt(Ot)&&ze(It,e=Rt(Ot,e,Ge(e)))}function Dt(e,t,n){"focus"===e?(Nt(),Ot=n,(Et=t).attachEvent("onpropertychange",Pt)):"blur"===e&&Nt()}function zt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mt(Ot)}function Ht(e,t){if("click"===e)return Mt(t)}function Lt(e,t){if("input"===e||"change"===e)return Mt(t)}V&&(At=Fe("input")&&(!document.documentMode||9<document.documentMode));var Gt={eventTypes:kt,_isInputEventSupported:At,extractEvents:function(e,t,n,o){var r=t?H(t):window,i=void 0,s=void 0,a=r.nodeName&&r.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===r.type?i=$t:Le(r)?At?i=Lt:(i=zt,s=Dt):(a=r.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(i=Ht),i&&(i=i(e,t)))return Rt(i,n,o);s&&s(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&Tt(r,"number",r.value)}},Ft=ce.extend({view:null,detail:null}),Wt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Wt[e])&&!!t[e]}function Ut(){return Bt}var jt=0,Vt=0,Zt=!1,qt=!1,Kt=Ft.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ut,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=jt;return jt=e.screenX,Zt?"mousemove"===e.type?e.screenX-t:0:(Zt=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Vt;return Vt=e.screenY,qt?"mousemove"===e.type?e.screenY-t:0:(qt=!0,0)}}),Yt=Kt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Qt={eventTypes:Xt,extractEvents:function(e,t,n,o){var r="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(r&&(n.relatedTarget||n.fromElement)||!i&&!r)return null;if(r=o.window===o?o:(r=o.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=t,t=(t=n.relatedTarget||n.toElement)?D(t):null):i=null,i===t)return null;var s=void 0,a=void 0,l=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(s=Kt,a=Xt.mouseLeave,l=Xt.mouseEnter,c="mouse"):"pointerout"!==e&&"pointerover"!==e||(s=Yt,a=Xt.pointerLeave,l=Xt.pointerEnter,c="pointer");var d=null==i?r:H(i);if(r=null==t?r:H(t),(e=s.getPooled(a,i,n,o)).type=c+"leave",e.target=d,e.relatedTarget=r,(n=s.getPooled(l,t,n,o)).type=c+"enter",n.target=r,n.relatedTarget=d,o=t,i&&o)e:{for(r=o,c=0,s=t=i;s;s=G(s))c++;for(s=0,l=r;l;l=G(l))s++;for(;0<c-s;)t=G(t),c--;for(;0<s-c;)r=G(r),s--;for(;c--;){if(t===r||t===r.alternate)break e;t=G(t),r=G(r)}t=null}else t=null;for(r=t,t=[];i&&i!==r&&(null===(c=i.alternate)||c!==r);)t.push(i),i=G(i);for(i=[];o&&o!==r&&(null===(c=o.alternate)||c!==r);)i.push(o),o=G(o);for(o=0;o<t.length;o++)B(t[o],"bubbled",e);for(o=i.length;0<o--;)B(i[o],"captured",n);return[e,n]}};function Jt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var en=Object.prototype.hasOwnProperty;function tn(e,t){if(Jt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!en.call(t,n[o])||!Jt(e[n[o]],t[n[o]]))return!1;return!0}function nn(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function on(e){2!==nn(e)&&s("188")}function rn(e){if(e=function(e){var t=e.alternate;if(!t)return 3===(t=nn(e))&&s("188"),1===t?null:e;for(var n=e,o=t;;){var r=n.return,i=r?r.alternate:null;if(!r||!i)break;if(r.child===i.child){for(var a=r.child;a;){if(a===n)return on(r),e;if(a===o)return on(r),t;a=a.sibling}s("188")}if(n.return!==o.return)n=r,o=i;else{a=!1;for(var l=r.child;l;){if(l===n){a=!0,n=r,o=i;break}if(l===o){a=!0,o=r,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,o=r;break}if(l===o){a=!0,o=i,n=r;break}l=l.sibling}a||s("189")}}n.alternate!==o&&s("190")}return 3!==n.tag&&s("188"),n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var sn=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),an=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ln=Ft.extend({relatedTarget:null});function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},un=Ft.extend({key:function(e){if(e.key){var t=dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?hn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ut,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),pn=Kt.extend({dataTransfer:null}),fn=Ft.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ut}),mn=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),gn=Kt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),bn=[["abort","abort"],[Q,"animationEnd"],[J,"animationIteration"],[ee,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[te,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vn={},yn={};function wn(e,t){var n=e[0],o="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[n],isInteractive:t},vn[e]=t,yn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach((function(e){wn(e,!0)})),bn.forEach((function(e){wn(e,!1)}));var Cn={eventTypes:vn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=yn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,o){var r=yn[e];if(!r)return null;switch(e){case"keypress":if(0===cn(n))return null;case"keydown":case"keyup":e=un;break;case"blur":case"focus":e=ln;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=pn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=fn;break;case Q:case J:case ee:e=sn;break;case te:e=mn;break;case"scroll":e=Ft;break;case"wheel":e=gn;break;case"copy":case"cut":case"paste":e=an;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Yt;break;default:e=ce}return j(t=e.getPooled(r,t,n,o)),t}},xn=Cn.isInteractiveTopLevelEventType,Sn=[];function _n(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var o;for(o=n;o.return;)o=o.return;if(!(o=3!==o.tag?null:o.stateNode.containerInfo))break;e.ancestors.push(n),n=D(o)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var r=Ge(e.nativeEvent);o=e.topLevelType;for(var i=e.nativeEvent,s=null,a=0;a<v.length;a++){var l=v[a];l&&(l=l.extractEvents(o,t,i,r))&&(s=k(s,l))}$(s)}}var Tn=!0;function kn(e,t){if(!t)return null;var n=(xn(e)?En:On).bind(null,e);t.addEventListener(e,n,!1)}function Rn(e,t){if(!t)return null;var n=(xn(e)?En:On).bind(null,e);t.addEventListener(e,n,!0)}function En(e,t){Ne(On,e,t)}function On(e,t){if(Tn){var n=Ge(t);if(null===(n=D(n))||"number"!=typeof n.tag||2===nn(n)||(n=null),Sn.length){var o=Sn.pop();o.topLevelType=e,o.nativeEvent=t,o.targetInst=n,e=o}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{ze(_n,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Sn.length&&Sn.push(e)}}}var In={},Mn=0,$n="_reactListenersID"+(""+Math.random()).slice(2);function An(e){return Object.prototype.hasOwnProperty.call(e,$n)||(e[$n]=Mn++,In[e[$n]]={}),In[e[$n]]}function Nn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Pn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dn(e,t){var n,o=Pn(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pn(o)}}function zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Hn(){for(var e=window,t=Nn();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=Nn(e.document)}return t}function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Gn(e){var t=Hn(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zn(n.ownerDocument.documentElement,n)){if(null!==o&&Ln(n))if(t=o.start,void 0===(e=o.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=void 0===o.end?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Dn(n,i);var s=Dn(n,o);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fn=V&&"documentMode"in document&&11>=document.documentMode,Wn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Bn=null,Un=null,jn=null,Vn=!1;function Zn(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Vn||null==Bn||Bn!==Nn(n)?null:("selectionStart"in(n=Bn)&&Ln(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},jn&&tn(jn,n)?null:(jn=n,(e=ce.getPooled(Wn.select,Un,e,t)).type="select",e.target=Bn,j(e),e))}var qn={eventTypes:Wn,extractEvents:function(e,t,n,o){var r,i=o.window===o?o.document:9===o.nodeType?o:o.ownerDocument;if(!(r=!i)){e:{i=An(i),r=C.onSelect;for(var s=0;s<r.length;s++){var a=r[s];if(!i.hasOwnProperty(a)||!i[a]){i=!1;break e}}i=!0}r=!i}if(r)return null;switch(i=t?H(t):window,e){case"focus":(Le(i)||"true"===i.contentEditable)&&(Bn=i,Un=t,jn=null);break;case"blur":jn=Un=Bn=null;break;case"mousedown":Vn=!0;break;case"contextmenu":case"mouseup":case"dragend":return Vn=!1,Zn(n,o);case"selectionchange":if(Fn)break;case"keydown":case"keyup":return Zn(n,o)}return null}};function Kn(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Yn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(o&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function Xn(e,t){return null!=t.dangerouslySetInnerHTML&&s("91"),r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qn(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&s("92"),Array.isArray(t)&&(1>=t.length||s("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:yt(n)}}function Jn(e,t){var n=yt(t.value),o=yt(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=o&&(e.defaultValue=""+o)}function eo(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),x=L,S=z,_=H,I.injectEventPluginsByName({SimpleEventPlugin:Cn,EnterLeaveEventPlugin:Qt,ChangeEventPlugin:Gt,SelectEventPlugin:qn,BeforeInputEventPlugin:ke});var to={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?no(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ro,io=void 0,so=(ro=function(e,t){if(e.namespaceURI!==to.svg||"innerHTML"in e)e.innerHTML=t;else{for((io=io||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,o){MSApp.execUnsafeLocalFunction((function(){return ro(e,t)}))}:ro);function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var lo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},co=["Webkit","ms","Moz","O"];function ho(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function uo(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var o=0===n.indexOf("--"),r=ho(n,t[n],o);"float"===n&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}Object.keys(lo).forEach((function(e){co.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]}))}));var po=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(e,t){t&&(po[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&s("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&s("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||s("61")),null!=t.style&&"object"!=typeof t.style&&s("62",""))}function mo(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function go(e,t){var n=An(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=C[t];for(var o=0;o<t.length;o++){var r=t[o];if(!n.hasOwnProperty(r)||!n[r]){switch(r){case"scroll":Rn("scroll",e);break;case"focus":case"blur":Rn("focus",e),Rn("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":Fe(r)&&Rn(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===ne.indexOf(r)&&kn(r,e)}n[r]=!0}}}function bo(){}var vo=null,yo=null;function wo(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Co(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xo="function"==typeof setTimeout?setTimeout:void 0,So="function"==typeof clearTimeout?clearTimeout:void 0,_o=i.unstable_scheduleCallback,To=i.unstable_cancelCallback;function ko(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function Ro(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var Eo=[],Oo=-1;function Io(e){0>Oo||(e.current=Eo[Oo],Eo[Oo]=null,Oo--)}function Mo(e,t){Oo++,Eo[Oo]=e.current,e.current=t}var $o={},Ao={current:$o},No={current:!1},Po=$o;function Do(e,t){var n=e.type.contextTypes;if(!n)return $o;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in n)i[r]=t[r];return o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zo(e){return null!=(e=e.childContextTypes)}function Ho(e){Io(No),Io(Ao)}function Lo(e){Io(No),Io(Ao)}function Go(e,t,n){Ao.current!==$o&&s("168"),Mo(Ao,t),Mo(No,n)}function Fo(e,t,n){var o=e.stateNode;if(e=t.childContextTypes,"function"!=typeof o.getChildContext)return n;for(var i in o=o.getChildContext())i in e||s("108",lt(t)||"Unknown",i);return r({},n,o)}function Wo(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||$o,Po=Ao.current,Mo(Ao,t),Mo(No,No.current),!0}function Bo(e,t,n){var o=e.stateNode;o||s("169"),n?(t=Fo(e,t,Po),o.__reactInternalMemoizedMergedChildContext=t,Io(No),Io(Ao),Mo(Ao,t)):Io(No),Mo(No,n)}var Uo=null,jo=null;function Vo(e){return function(t){try{return e(t)}catch(e){}}}function Zo(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function qo(e,t,n,o){return new Zo(e,t,n,o)}function Ko(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Yo(e,t){var n=e.alternate;return null===n?((n=qo(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.contextDependencies=e.contextDependencies,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,o,r,i){var a=2;if(o=e,"function"==typeof e)Ko(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case Ye:return Qo(n.children,r,i,t);case tt:return Jo(n,3|r,i,t);case Xe:return Jo(n,2|r,i,t);case Qe:return(e=qo(12,n,t,4|r)).elementType=Qe,e.type=Qe,e.expirationTime=i,e;case ot:return(e=qo(13,n,t,r)).elementType=ot,e.type=ot,e.expirationTime=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Je:a=10;break e;case et:a=9;break e;case nt:a=11;break e;case rt:a=14;break e;case it:a=16,o=null;break e}s("130",null==e?e:typeof e,"")}return(t=qo(a,n,t,r)).elementType=e,t.type=o,t.expirationTime=i,t}function Qo(e,t,n,o){return(e=qo(7,e,o,t)).expirationTime=n,e}function Jo(e,t,n,o){return e=qo(8,e,o,t),t=0==(1&t)?Xe:tt,e.elementType=t,e.type=t,e.expirationTime=n,e}function er(e,t,n){return(e=qo(6,e,null,t)).expirationTime=n,e}function tr(e,t,n){return(t=qo(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nr(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),ir(t,e)}function or(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var n=e.earliestPendingTime,o=e.latestPendingTime;n===t?e.earliestPendingTime=o===t?e.latestPendingTime=0:o:o===t&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,o=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:o>t&&(e.latestSuspendedTime=t),ir(t,e)}function rr(e,t){var n=e.earliestPendingTime;return n>t&&(t=n),(e=e.earliestSuspendedTime)>t&&(t=e),t}function ir(e,t){var n=t.earliestSuspendedTime,o=t.latestSuspendedTime,r=t.earliestPendingTime,i=t.latestPingedTime;0===(r=0!==r?r:i)&&(0===e||o<e)&&(r=o),0!==(e=r)&&n>e&&(e=n),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function sr(e,t){if(e&&e.defaultProps)for(var n in t=r({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var ar=(new o.Component).refs;function lr(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:r({},t,n),e.memoizedState=n,null!==(o=e.updateQueue)&&0===e.expirationTime&&(o.baseState=n)}var cr={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===nn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var o=Ra(),r=Qi(o=Qs(o,e));r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var o=Ra(),r=Qi(o=Qs(o,e));r.tag=Vi,r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ra(),o=Qi(n=Qs(n,e));o.tag=Zi,null!=t&&(o.callback=t),Vs(),es(e,o),na(e,n)}};function dr(e,t,n,o,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,i,s):!t.prototype||!t.prototype.isPureReactComponent||(!tn(n,o)||!tn(r,i))}function hr(e,t,n){var o=!1,r=$o,i=t.contextType;return"object"==typeof i&&null!==i?i=Ui(i):(r=zo(t)?Po:Ao.current,i=(o=null!=(o=t.contextTypes))?Do(e,r):$o),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternalFiber=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function ur(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function pr(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=ar;var i=t.contextType;"object"==typeof i&&null!==i?r.context=Ui(i):(i=zo(t)?Po:Ao.current,r.context=Do(e,i)),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState),"function"==typeof(i=t.getDerivedStateFromProps)&&(lr(e,t,i,n),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&cr.enqueueReplaceState(r,r.state,null),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var fr=Array.isArray;function mr(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){n=n._owner;var o=void 0;n&&(1!==n.tag&&s("309"),o=n.stateNode),o||s("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:(t=function(e){var t=o.refs;t===ar&&(t=o.refs={}),null===e?delete t[r]:t[r]=e},t._stringRef=r,t)}"string"!=typeof e&&s("284"),n._owner||s("290",e)}return e}function gr(e,t){"textarea"!==e.type&&s("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function br(e){function t(t,n){if(e){var o=t.lastEffect;null!==o?(o.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,n){return(e=Yo(e,t)).index=0,e.sibling=null,e}function i(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.effectTag=2,n):o:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,o){return null===t||6!==t.tag?((t=er(n,e.mode,o)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,o){return null!==t&&t.elementType===n.type?((o=r(t,n.props)).ref=mr(e,t,n),o.return=e,o):((o=Xo(n.type,n.key,n.props,null,e.mode,o)).ref=mr(e,t,n),o.return=e,o)}function d(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=tr(n,e.mode,o)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function h(e,t,n,o,i){return null===t||7!==t.tag?((t=Qo(n,e.mode,o,i)).return=e,t):((t=r(t,n)).return=e,t)}function u(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=er(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case qe:return(n=Xo(t.type,t.key,t.props,null,e.mode,n)).ref=mr(e,null,t),n.return=e,n;case Ke:return(t=tr(t,e.mode,n)).return=e,t}if(fr(t)||at(t))return(t=Qo(t,e.mode,n,null)).return=e,t;gr(e,t)}return null}function p(e,t,n,o){var r=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==r?null:l(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case qe:return n.key===r?n.type===Ye?h(e,t,n.props.children,o,r):c(e,t,n,o):null;case Ke:return n.key===r?d(e,t,n,o):null}if(fr(n)||at(n))return null!==r?null:h(e,t,n,o,null);gr(e,n)}return null}function f(e,t,n,o,r){if("string"==typeof o||"number"==typeof o)return l(t,e=e.get(n)||null,""+o,r);if("object"==typeof o&&null!==o){switch(o.$$typeof){case qe:return e=e.get(null===o.key?n:o.key)||null,o.type===Ye?h(t,e,o.props.children,r,o.key):c(t,e,o,r);case Ke:return d(t,e=e.get(null===o.key?n:o.key)||null,o,r)}if(fr(o)||at(o))return h(t,e=e.get(n)||null,o,r,null);gr(t,o)}return null}function m(r,s,a,l){for(var c=null,d=null,h=s,m=s=0,g=null;null!==h&&m<a.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var b=p(r,h,a[m],l);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(r,h),s=i(b,s,m),null===d?c=b:d.sibling=b,d=b,h=g}if(m===a.length)return n(r,h),c;if(null===h){for(;m<a.length;m++)(h=u(r,a[m],l))&&(s=i(h,s,m),null===d?c=h:d.sibling=h,d=h);return c}for(h=o(r,h);m<a.length;m++)(g=f(h,r,m,a[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=i(g,s,m),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach((function(e){return t(r,e)})),c}function g(r,a,l,c){var d=at(l);"function"!=typeof d&&s("150"),null==(l=d.call(l))&&s("151");for(var h=d=null,m=a,g=a=0,b=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(r,m,v.value,c);if(null===y){m||(m=b);break}e&&m&&null===y.alternate&&t(r,m),a=i(y,a,g),null===h?d=y:h.sibling=y,h=y,m=b}if(v.done)return n(r,m),d;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=u(r,v.value,c))&&(a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return d}for(m=o(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return e&&m.forEach((function(e){return t(r,e)})),d}return function(e,o,i,l){var c="object"==typeof i&&null!==i&&i.type===Ye&&null===i.key;c&&(i=i.props.children);var d="object"==typeof i&&null!==i;if(d)switch(i.$$typeof){case qe:e:{for(d=i.key,c=o;null!==c;){if(c.key===d){if(7===c.tag?i.type===Ye:c.elementType===i.type){n(e,c.sibling),(o=r(c,i.type===Ye?i.props.children:i.props)).ref=mr(e,c,i),o.return=e,e=o;break e}n(e,c);break}t(e,c),c=c.sibling}i.type===Ye?((o=Qo(i.props.children,e.mode,l,i.key)).return=e,e=o):((l=Xo(i.type,i.key,i.props,null,e.mode,l)).ref=mr(e,o,i),l.return=e,e=l)}return a(e);case Ke:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(e,o.sibling),(o=r(o,i.children||[])).return=e,e=o;break e}n(e,o);break}t(e,o),o=o.sibling}(o=tr(i,e.mode,l)).return=e,e=o}return a(e)}if("string"==typeof i||"number"==typeof i)return i=""+i,null!==o&&6===o.tag?(n(e,o.sibling),(o=r(o,i)).return=e,e=o):(n(e,o),(o=er(i,e.mode,l)).return=e,e=o),a(e);if(fr(i))return m(e,o,i,l);if(at(i))return g(e,o,i,l);if(d&&gr(e,i),void 0===i&&!c)switch(e.tag){case 1:case 0:s("152",(l=e.type).displayName||l.name||"Component")}return n(e,o)}}var vr=br(!0),yr=br(!1),wr={},Cr={current:wr},xr={current:wr},Sr={current:wr};function _r(e){return e===wr&&s("174"),e}function Tr(e,t){Mo(Sr,t),Mo(xr,e),Mo(Cr,wr);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:t=oo(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}Io(Cr),Mo(Cr,t)}function kr(e){Io(Cr),Io(xr),Io(Sr)}function Rr(e){_r(Sr.current);var t=_r(Cr.current),n=oo(t,e.type);t!==n&&(Mo(xr,e),Mo(Cr,n))}function Er(e){xr.current===e&&(Io(Cr),Io(xr))}var Or=0,Ir=2,Mr=4,$r=8,Ar=16,Nr=32,Pr=64,Dr=128,zr=je.ReactCurrentDispatcher,Hr=0,Lr=null,Gr=null,Fr=null,Wr=null,Br=null,Ur=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0;function Xr(){s("307")}function Qr(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Jr(e,t,n,o,r,i){if(Hr=i,Lr=t,Fr=null!==e?e.memoizedState:null,zr.current=null===Fr?ui:pi,t=n(o,r),qr){do{qr=!1,Yr+=1,Fr=null!==e?e.memoizedState:null,Ur=Wr,Vr=Br=Gr=null,zr.current=pi,t=n(o,r)}while(qr);Kr=null,Yr=0}return zr.current=hi,(e=Lr).memoizedState=Wr,e.expirationTime=jr,e.updateQueue=Vr,e.effectTag|=Zr,e=null!==Gr&&null!==Gr.next,Hr=0,Ur=Br=Wr=Fr=Gr=Lr=null,jr=0,Vr=null,Zr=0,e&&s("300"),t}function ei(){zr.current=hi,Hr=0,Ur=Br=Wr=Fr=Gr=Lr=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0}function ti(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===Br?Wr=Br=e:Br=Br.next=e,Br}function ni(){if(null!==Ur)Ur=(Br=Ur).next,Fr=null!==(Gr=Fr)?Gr.next:null;else{null===Fr&&s("310");var e={memoizedState:(Gr=Fr).memoizedState,baseState:Gr.baseState,queue:Gr.queue,baseUpdate:Gr.baseUpdate,next:null};Br=null===Br?Wr=e:Br.next=e,Fr=Gr.next}return Br}function oi(e,t){return"function"==typeof t?t(e):t}function ri(e){var t=ni(),n=t.queue;if(null===n&&s("311"),0<Yr){var o=n.dispatch;if(null!==Kr){var r=Kr.get(n);if(void 0!==r){Kr.delete(n);var i=t.memoizedState;do{i=e(i,r.action),r=r.next}while(null!==r);return Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate===n.last&&(t.baseState=i),n.eagerReducer=e,n.eagerState=i,[i,o]}}return[t.memoizedState,o]}o=n.last;var a=t.baseUpdate;if(i=t.baseState,null!==a?(null!==o&&(o.next=null),o=a.next):o=null!==o?o.next:null,null!==o){var l=r=null,c=o,d=!1;do{var h=c.expirationTime;h<Hr?(d||(d=!0,l=a,r=i),h>jr&&(jr=h)):i=c.eagerReducer===e?c.eagerState:e(i,c.action),a=c,c=c.next}while(null!==c&&c!==o);d||(l=a,r=i),Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate=l,t.baseState=r,n.eagerReducer=e,n.eagerState=i}return[t.memoizedState,n.dispatch]}function ii(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},null===Vr?(Vr={lastEffect:null}).lastEffect=e.next=e:null===(t=Vr.lastEffect)?Vr.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,Vr.lastEffect=e),e}function si(e,t,n,o){var r=ti();Zr|=e,r.memoizedState=ii(t,n,void 0,void 0===o?null:o)}function ai(e,t,n,o){var r=ni();o=void 0===o?null:o;var i=void 0;if(null!==Gr){var s=Gr.memoizedState;if(i=s.destroy,null!==o&&Qr(o,s.deps))return void ii(Or,n,i,o)}Zr|=e,r.memoizedState=ii(t,n,i,o)}function li(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ci(){}function di(e,t,n){25>Yr||s("301");var o=e.alternate;if(e===Lr||null!==o&&o===Lr)if(qr=!0,e={expirationTime:Hr,action:n,eagerReducer:null,eagerState:null,next:null},null===Kr&&(Kr=new Map),void 0===(n=Kr.get(t)))Kr.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{Vs();var r=Ra(),i={expirationTime:r=Qs(r,e),action:n,eagerReducer:null,eagerState:null,next:null},a=t.last;if(null===a)i.next=i;else{var l=a.next;null!==l&&(i.next=l),a.next=i}if(t.last=i,0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.eagerReducer))try{var c=t.eagerState,d=o(c,n);if(i.eagerReducer=o,i.eagerState=d,Jt(d,c))return}catch(e){}na(e,r)}}var hi={readContext:Ui,useCallback:Xr,useContext:Xr,useEffect:Xr,useImperativeHandle:Xr,useLayoutEffect:Xr,useMemo:Xr,useReducer:Xr,useRef:Xr,useState:Xr,useDebugValue:Xr},ui={readContext:Ui,useCallback:function(e,t){return ti().memoizedState=[e,void 0===t?null:t],e},useContext:Ui,useEffect:function(e,t){return si(516,Dr|Pr,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,si(4,Mr|Nr,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4,Mr|Nr,e,t)},useMemo:function(e,t){var n=ti();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=ti();return t=void 0!==n?n(t):t,o.memoizedState=o.baseState=t,e=(e=o.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=di.bind(null,Lr,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},ti().memoizedState=e},useState:function(e){var t=ti();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:oi,eagerState:e}).dispatch=di.bind(null,Lr,e),[t.memoizedState,e]},useDebugValue:ci},pi={readContext:Ui,useCallback:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(n.memoizedState=[e,t],e)},useContext:Ui,useEffect:function(e,t){return ai(516,Dr|Pr,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ai(4,Mr|Nr,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4,Mr|Nr,e,t)},useMemo:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:ri,useRef:function(){return ni().memoizedState},useState:function(e){return ri(oi)},useDebugValue:ci},fi=null,mi=null,gi=!1;function bi(e,t){var n=qo(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function vi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function yi(e){if(gi){var t=mi;if(t){var n=t;if(!vi(e,t)){if(!(t=ko(n))||!vi(e,t))return e.effectTag|=2,gi=!1,void(fi=e);bi(fi,n)}fi=e,mi=Ro(t)}else e.effectTag|=2,gi=!1,fi=e}}function wi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;fi=e}function Ci(e){if(e!==fi)return!1;if(!gi)return wi(e),gi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Co(t,e.memoizedProps))for(t=mi;t;)bi(e,t),t=ko(t);return wi(e),mi=fi?ko(e.stateNode):null,!0}function xi(){mi=fi=null,gi=!1}var Si=je.ReactCurrentOwner,_i=!1;function Ti(e,t,n,o){t.child=null===e?yr(t,null,n,o):vr(t,e.child,n,o)}function ki(e,t,n,o,r){n=n.render;var i=t.ref;return Bi(t,r),o=Jr(e,t,n,o,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Pi(e,t,r))}function Ri(e,t,n,o,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ko(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Xo(n.type,null,o,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ei(e,t,s,o,r,i))}return s=e.child,r<i&&(r=s.memoizedProps,(n=null!==(n=n.compare)?n:tn)(r,o)&&e.ref===t.ref)?Pi(e,t,i):(t.effectTag|=1,(e=Yo(s,o)).ref=t.ref,e.return=t,t.child=e)}function Ei(e,t,n,o,r,i){return null!==e&&tn(e.memoizedProps,o)&&e.ref===t.ref&&(_i=!1,r<i)?Pi(e,t,i):Ii(e,t,n,o,i)}function Oi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ii(e,t,n,o,r){var i=zo(n)?Po:Ao.current;return i=Do(t,i),Bi(t,r),n=Jr(e,t,n,o,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Pi(e,t,r))}function Mi(e,t,n,o,r){if(zo(n)){var i=!0;Wo(t)}else i=!1;if(Bi(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),hr(t,n,o),pr(t,n,o,r),o=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=Ui(c):c=Do(t,c=zo(n)?Po:Ao.current);var d=n.getDerivedStateFromProps,h="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&ur(t,s,o,c),Ki=!1;var u=t.memoizedState;l=s.state=u;var p=t.updateQueue;null!==p&&(rs(t,p,o,s,r),l=t.memoizedState),a!==o||u!==l||No.current||Ki?("function"==typeof d&&(lr(t,n,d,o),l=t.memoizedState),(a=Ki||dr(t,n,a,o,u,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),o=!1)}else s=t.stateNode,a=t.memoizedProps,s.props=t.type===t.elementType?a:sr(t.type,a),l=s.context,"object"==typeof(c=n.contextType)&&null!==c?c=Ui(c):c=Do(t,c=zo(n)?Po:Ao.current),(h="function"==typeof(d=n.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&ur(t,s,o,c),Ki=!1,l=t.memoizedState,u=s.state=l,null!==(p=t.updateQueue)&&(rs(t,p,o,s,r),u=t.memoizedState),a!==o||l!==u||No.current||Ki?("function"==typeof d&&(lr(t,n,d,o),u=t.memoizedState),(d=Ki||dr(t,n,a,o,l,u,c))?(h||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(o,u,c),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(o,u,c)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=u),s.props=o,s.state=u,s.context=c,o=d):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),o=!1);return $i(e,t,n,o,i,r)}function $i(e,t,n,o,r,i){Oi(e,t);var s=0!=(64&t.effectTag);if(!o&&!s)return r&&Bo(t,n,!1),Pi(e,t,i);o=t.stateNode,Si.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:o.render();return t.effectTag|=1,null!==e&&s?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,a,i)):Ti(e,t,a,i),t.memoizedState=o.state,r&&Bo(t,n,!0),t.child}function Ai(e){var t=e.stateNode;t.pendingContext?Go(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Go(0,t.context,!1),Tr(e,t.containerInfo)}function Ni(e,t,n){var o=t.mode,r=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var s=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},s=!0,t.effectTag&=-65;if(null===e)if(s){var a=r.fallback;e=Qo(null,o,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),o=Qo(a,o,n,null),e.sibling=o,(n=e).return=o.return=t}else n=o=yr(t,null,r.children,n);else null!==e.memoizedState?(a=(o=e.child).sibling,s?(n=r.fallback,r=Yo(o,o.pendingProps),0==(1&t.mode)&&((s=null!==t.memoizedState?t.child.child:t.child)!==o.child&&(r.child=s)),o=r.sibling=Yo(a,n,a.expirationTime),n=r,r.childExpirationTime=0,n.return=o.return=t):n=o=vr(t,o.child,r.children,n)):(a=e.child,s?(s=r.fallback,(r=Qo(null,o,0,null)).child=a,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),(o=r.sibling=Qo(s,o,n,null)).effectTag|=2,n=r,r.childExpirationTime=0,n.return=o.return=t):o=n=vr(t,a,r.children,n)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=n,o}function Pi(e,t,n){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child&&s("153"),null!==t.child){for(n=Yo(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Yo(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Di(e,t,n){var o=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||No.current)_i=!0;else if(o<n){switch(_i=!1,t.tag){case 3:Ai(t),xi();break;case 5:Rr(t);break;case 1:zo(t.type)&&Wo(t);break;case 4:Tr(t,t.stateNode.containerInfo);break;case 10:Fi(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(o=t.child.childExpirationTime)&&o>=n?Ni(e,t,n):null!==(t=Pi(e,t,n))?t.sibling:null}return Pi(e,t,n)}}else _i=!1;switch(t.expirationTime=0,t.tag){case 2:o=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=Do(t,Ao.current);if(Bi(t,n),r=Jr(null,t,o,e,r,n),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,ei(),zo(o)){var i=!0;Wo(t)}else i=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var a=o.getDerivedStateFromProps;"function"==typeof a&&lr(t,o,a,e),r.updater=cr,t.stateNode=r,r._reactInternalFiber=t,pr(t,o,e,n),t=$i(null,t,o,!0,i,n)}else t.tag=0,Ti(null,t,r,n),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),i=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)})),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return Ko(e)?1:0;if(null!=e){if((e=e.$$typeof)===nt)return 11;if(e===rt)return 14}return 2}(e),i=sr(e,i),a=void 0,r){case 0:a=Ii(null,t,e,i,n);break;case 1:a=Mi(null,t,e,i,n);break;case 11:a=ki(null,t,e,i,n);break;case 14:a=Ri(null,t,e,sr(e.type,i),o,n);break;default:s("306",e,"")}return a;case 0:return o=t.type,r=t.pendingProps,Ii(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 1:return o=t.type,r=t.pendingProps,Mi(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 3:return Ai(t),null===(o=t.updateQueue)&&s("282"),r=null!==(r=t.memoizedState)?r.element:null,rs(t,o,t.pendingProps,null,n),(o=t.memoizedState.element)===r?(xi(),t=Pi(e,t,n)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(mi=Ro(t.stateNode.containerInfo),fi=t,r=gi=!0),r?(t.effectTag|=2,t.child=yr(t,null,o,n)):(Ti(e,t,o,n),xi()),t=t.child),t;case 5:return Rr(t),null===e&&yi(t),o=t.type,r=t.pendingProps,i=null!==e?e.memoizedProps:null,a=r.children,Co(o,r)?a=null:null!==i&&Co(o,i)&&(t.effectTag|=16),Oi(e,t),1!==n&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ti(e,t,a,n),t=t.child),t;case 6:return null===e&&yi(t),null;case 13:return Ni(e,t,n);case 4:return Tr(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=vr(t,null,o,n):Ti(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,ki(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 7:return Ti(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ti(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,Fi(t,i=r.value),null!==a){var l=a.value;if(0===(i=Jt(l,i)?0:0|("function"==typeof o._calculateChangedBits?o._calculateChangedBits(l,i):1073741823))){if(a.children===r.children&&!No.current){t=Pi(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.contextDependencies;if(null!==c){a=l.child;for(var d=c.first;null!==d;){if(d.context===o&&0!=(d.observedBits&i)){1===l.tag&&((d=Qi(n)).tag=Zi,es(l,d)),l.expirationTime<n&&(l.expirationTime=n),null!==(d=l.alternate)&&d.expirationTime<n&&(d.expirationTime=n),d=n;for(var h=l.return;null!==h;){var u=h.alternate;if(h.childExpirationTime<d)h.childExpirationTime=d,null!==u&&u.childExpirationTime<d&&(u.childExpirationTime=d);else{if(!(null!==u&&u.childExpirationTime<d))break;u.childExpirationTime=d}h=h.return}c.expirationTime<n&&(c.expirationTime=n);break}d=d.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}}Ti(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=(i=t.pendingProps).children,Bi(t,n),o=o(r=Ui(r,i.unstable_observedBits)),t.effectTag|=1,Ti(e,t,o,n),t.child;case 14:return i=sr(r=t.type,t.pendingProps),Ri(e,t,r,i=sr(r.type,i),o,n);case 15:return Ei(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:sr(o,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,zo(o)?(e=!0,Wo(t)):e=!1,Bi(t,n),hr(t,o,r),pr(t,o,r,n),$i(null,t,o,!0,e,n)}s("156")}var zi={current:null},Hi=null,Li=null,Gi=null;function Fi(e,t){var n=e.type._context;Mo(zi,n._currentValue),n._currentValue=t}function Wi(e){var t=zi.current;Io(zi),e.type._context._currentValue=t}function Bi(e,t){Hi=e,Gi=Li=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&(_i=!0),e.contextDependencies=null}function Ui(e,t){return Gi!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Gi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Li?(null===Hi&&s("308"),Li=t,Hi.contextDependencies={first:t,expirationTime:0}):Li=Li.next=t),e._currentValue}var ji=0,Vi=1,Zi=2,qi=3,Ki=!1;function Yi(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Xi(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Qi(e){return{expirationTime:e,tag:ji,payload:null,callback:null,next:null,nextEffect:null}}function Ji(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function es(e,t){var n=e.alternate;if(null===n){var o=e.updateQueue,r=null;null===o&&(o=e.updateQueue=Yi(e.memoizedState))}else o=e.updateQueue,r=n.updateQueue,null===o?null===r?(o=e.updateQueue=Yi(e.memoizedState),r=n.updateQueue=Yi(n.memoizedState)):o=e.updateQueue=Xi(r):null===r&&(r=n.updateQueue=Xi(o));null===r||o===r?Ji(o,t):null===o.lastUpdate||null===r.lastUpdate?(Ji(o,t),Ji(r,t)):(Ji(o,t),r.lastUpdate=t)}function ts(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=Yi(e.memoizedState):ns(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function ns(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Xi(t)),t}function os(e,t,n,o,i,s){switch(n.tag){case Vi:return"function"==typeof(e=n.payload)?e.call(s,o,i):e;case qi:e.effectTag=-2049&e.effectTag|64;case ji:if(null==(i="function"==typeof(e=n.payload)?e.call(s,o,i):e))break;return r({},o,i);case Zi:Ki=!0}return o}function rs(e,t,n,o,r){Ki=!1;for(var i=(t=ns(e,t)).baseState,s=null,a=0,l=t.firstUpdate,c=i;null!==l;){var d=l.expirationTime;d<r?(null===s&&(s=l,i=c),a<d&&(a=d)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(d=null,l=t.firstCapturedUpdate;null!==l;){var h=l.expirationTime;h<r?(null===d&&(d=l,null===s&&(i=c)),a<h&&(a=h)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===s&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=32,null===s&&null===d&&(i=c),t.baseState=i,t.firstUpdate=s,t.firstCapturedUpdate=d,e.expirationTime=a,e.memoizedState=c}function is(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ss(t.firstEffect,n),t.firstEffect=t.lastEffect=null,ss(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function ss(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var o=t;"function"!=typeof n&&s("191",n),n.call(o)}e=e.nextEffect}}function as(e,t){return{value:e,source:t,stack:ct(t)}}function ls(e){e.effectTag|=4}var cs=void 0,ds=void 0,hs=void 0,us=void 0;cs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ds=function(){},hs=function(e,t,n,o,i){var s=e.memoizedProps;if(s!==o){var a=t.stateNode;switch(_r(Cr.current),e=null,n){case"input":s=wt(a,s),o=wt(a,o),e=[];break;case"option":s=Kn(a,s),o=Kn(a,o),e=[];break;case"select":s=r({},s,{value:void 0}),o=r({},o,{value:void 0}),e=[];break;case"textarea":s=Xn(a,s),o=Xn(a,o),e=[];break;default:"function"!=typeof s.onClick&&"function"==typeof o.onClick&&(a.onclick=bo)}fo(n,o),a=n=void 0;var l=null;for(n in s)if(!o.hasOwnProperty(n)&&s.hasOwnProperty(n)&&null!=s[n])if("style"===n){var c=s[n];for(a in c)c.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(w.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in o){var d=o[n];if(c=null!=s?s[n]:void 0,o.hasOwnProperty(n)&&d!==c&&(null!=d||null!=c))if("style"===n)if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(l||(l={}),l[a]=d[a])}else l||(e||(e=[]),e.push(n,l)),l=d;else"dangerouslySetInnerHTML"===n?(d=d?d.__html:void 0,c=c?c.__html:void 0,null!=d&&c!==d&&(e=e||[]).push(n,""+d)):"children"===n?c===d||"string"!=typeof d&&"number"!=typeof d||(e=e||[]).push(n,""+d):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(w.hasOwnProperty(n)?(null!=d&&go(i,n),e||c===d||(e=[])):(e=e||[]).push(n,d))}l&&(e=e||[]).push("style",l),i=e,(t.updateQueue=i)&&ls(t)}},us=function(e,t,n,o){n!==o&&ls(t)};var ps="function"==typeof WeakSet?WeakSet:Set;function fs(e,t){var n=t.source,o=t.stack;null===o&&null!==n&&(o=ct(n)),null!==n&&lt(n.type),t=t.value,null!==e&&1===e.tag&&lt(e.type)}function ms(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Xs(e,t)}else t.current=null}function gs(e,t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)!==Or){var r=o.destroy;o.destroy=void 0,void 0!==r&&r()}(o.tag&t)!==Or&&(r=o.create,o.destroy=r()),o=o.next}while(o!==n)}}function bs(e){switch("function"==typeof jo&&jo(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var n=t=t.next;do{var o=n.destroy;if(void 0!==o){var r=e;try{o()}catch(e){Xs(r,e)}}n=n.next}while(n!==t)}break;case 1:if(ms(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Xs(e,t)}break;case 5:ms(e);break;case 4:ws(e)}}function vs(e){return 5===e.tag||3===e.tag||4===e.tag}function ys(e){e:{for(var t=e.return;null!==t;){if(vs(t)){var n=t;break e}t=t.return}s("160"),n=void 0}var o=t=void 0;switch(n.tag){case 5:t=n.stateNode,o=!1;break;case 3:case 4:t=n.stateNode.containerInfo,o=!0;break;default:s("161")}16&n.effectTag&&(ao(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||vs(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag)if(n)if(o){var i=t,a=r.stateNode,l=n;8===i.nodeType?i.parentNode.insertBefore(a,l):i.insertBefore(a,l)}else t.insertBefore(r.stateNode,n);else o?(a=t,l=r.stateNode,8===a.nodeType?(i=a.parentNode).insertBefore(l,a):(i=a).appendChild(l),null!=(a=a._reactRootContainer)||null!==i.onclick||(i.onclick=bo)):t.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function ws(e){for(var t=e,n=!1,o=void 0,r=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&s("160"),n.tag){case 5:o=n.stateNode,r=!1;break e;case 3:case 4:o=n.stateNode.containerInfo,r=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var i=t,a=i;;)if(bs(a),null!==a.child&&4!==a.tag)a.child.return=a,a=a.child;else{if(a===i)break;for(;null===a.sibling;){if(null===a.return||a.return===i)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r?(i=o,a=t.stateNode,8===i.nodeType?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){o=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(bs(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function Cs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:gs(Mr,$r,t);break;case 1:case 3:case 12:case 17:break;case 5:var n=t.stateNode;if(null!=n){var o=t.memoizedProps;e=null!==e?e.memoizedProps:o;var r=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&function(e,t,n,o,r){e[P]=r,"input"===n&&"radio"===r.type&&null!=r.name&&xt(e,r),mo(n,o),o=mo(n,r);for(var i=0;i<t.length;i+=2){var s=t[i],a=t[i+1];"style"===s?uo(e,a):"dangerouslySetInnerHTML"===s?so(e,a):"children"===s?ao(e,a):vt(e,s,a,o)}switch(n){case"input":St(e,r);break;case"textarea":Jn(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(n=r.value)?Yn(e,!!r.multiple,n,!1):t!==!!r.multiple&&(null!=r.defaultValue?Yn(e,!!r.multiple,r.defaultValue,!0):Yn(e,!!r.multiple,r.multiple?[]:"",!1))}}(n,i,r,e,o)}break;case 6:null===t.stateNode&&s("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(n=t.memoizedState,o=void 0,e=t,null===n?o=!1:(o=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=Ra())),null!==e&&function(e,t){for(var n=e;;){if(5===n.tag){var o=n.stateNode;if(t)o.style.display="none";else{o=n.stateNode;var r=n.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,o.style.display=ho("display",r)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else{if(13===n.tag&&null!==n.memoizedState){(o=n.child.sibling).return=n,n=o;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}(e,o),null!==(n=t.updateQueue)){t.updateQueue=null;var a=t.stateNode;null===a&&(a=t.stateNode=new ps),n.forEach((function(e){var n=ea.bind(null,t,e);a.has(e)||(a.add(e),e.then(n,n))}))}break;default:s("163")}}var xs="function"==typeof WeakMap?WeakMap:Map;function Ss(e,t,n){(n=Qi(n)).tag=qi,n.payload={element:null};var o=t.value;return n.callback=function(){za(o),fs(e,t)},n}function _s(e,t,n){(n=Qi(n)).tag=qi;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var r=t.value;n.payload=function(){return o(r)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof o&&(null===Gs?Gs=new Set([this]):Gs.add(this));var n=t.value,r=t.stack;fs(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function Ts(e){switch(e.tag){case 1:zo(e.type)&&Ho();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return kr(),Lo(),0!=(64&(t=e.effectTag))&&s("285"),e.effectTag=-2049&t|64,e;case 5:return Er(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return kr(),null;case 10:return Wi(e),null}}var ks=je.ReactCurrentDispatcher,Rs=je.ReactCurrentOwner,Es=1073741822,Os=!1,Is=null,Ms=null,$s=0,As=-1,Ns=!1,Ps=null,Ds=!1,zs=null,Hs=null,Ls=null,Gs=null;function Fs(){if(null!==Is)for(var e=Is.return;null!==e;){var t=e;switch(t.tag){case 1:var n=t.type.childContextTypes;null!=n&&Ho();break;case 3:kr(),Lo();break;case 5:Er(t);break;case 4:kr();break;case 10:Wi(t)}e=e.return}Ms=null,$s=0,As=-1,Ns=!1,Is=null}function Ws(){for(;null!==Ps;){var e=Ps.effectTag;if(16&e&&ao(Ps.stateNode,""),128&e){var t=Ps.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:ys(Ps),Ps.effectTag&=-3;break;case 6:ys(Ps),Ps.effectTag&=-3,Cs(Ps.alternate,Ps);break;case 4:Cs(Ps.alternate,Ps);break;case 8:ws(e=Ps),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}Ps=Ps.nextEffect}}function Bs(){for(;null!==Ps;){if(256&Ps.effectTag)e:{var e=Ps.alternate,t=Ps;switch(t.tag){case 0:case 11:case 15:gs(Ir,Or,t);break e;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,o=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:sr(t.type,n),o),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:s("163")}}Ps=Ps.nextEffect}}function Us(e,t){for(;null!==Ps;){var n=Ps.effectTag;if(36&n){var o=Ps.alternate,r=Ps,i=t;switch(r.tag){case 0:case 11:case 15:gs(Ar,Nr,r);break;case 1:var a=r.stateNode;if(4&r.effectTag)if(null===o)a.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:sr(r.type,o.memoizedProps);a.componentDidUpdate(l,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}null!==(o=r.updateQueue)&&is(0,o,a);break;case 3:if(null!==(o=r.updateQueue)){if(a=null,null!==r.child)switch(r.child.tag){case 5:case 1:a=r.child.stateNode}is(0,o,a)}break;case 5:i=r.stateNode,null===o&&4&r.effectTag&&wo(r.type,r.memoizedProps)&&i.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:s("163")}}128&n&&(null!==(r=Ps.ref)&&(i=Ps.stateNode,"function"==typeof r?r(i):r.current=i)),512&n&&(zs=e),Ps=Ps.nextEffect}}function js(e,t){Ls=Hs=zs=null;var n=la;la=!0;do{if(512&t.effectTag){var o=!1,r=void 0;try{var i=t;gs(Dr,Or,i),gs(Or,Pr,i)}catch(e){o=!0,r=e}o&&Xs(t,r)}t=t.nextEffect}while(null!==t);la=n,0!==(n=e.expirationTime)&&Ea(e,n),fa||la||Aa(1073741823,!1)}function Vs(){null!==Hs&&To(Hs),null!==Ls&&Ls()}function Zs(e,t){Ds=Os=!0,e.current===t&&s("177");var n=e.pendingCommitExpirationTime;0===n&&s("261"),e.pendingCommitExpirationTime=0;var o=t.expirationTime,r=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var n=e.latestPendingTime;0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(n=e.earliestSuspendedTime)?nr(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,nr(e,t)):t>n&&nr(e,t)}ir(0,e)}(e,r>o?r:o),Rs.current=null,o=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,o=t.firstEffect):o=t:o=t.firstEffect,vo=Tn,yo=function(){var e=Hn();if(Ln(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var o=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch(e){t=null;break e}var i=0,s=-1,a=-1,l=0,c=0,d=e,h=null;t:for(;;){for(var u;d!==t||0!==o&&3!==d.nodeType||(s=i+o),d!==r||0!==n&&3!==d.nodeType||(a=i+n),3===d.nodeType&&(i+=d.nodeValue.length),null!==(u=d.firstChild);)h=d,d=u;for(;;){if(d===e)break t;if(h===t&&++l===o&&(s=i),h===r&&++c===n&&(a=i),null!==(u=d.nextSibling))break;h=(d=h).parentNode}d=u}t=-1===s||-1===a?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),Tn=!1,Ps=o;null!==Ps;){r=!1;var a=void 0;try{Bs()}catch(e){r=!0,a=e}r&&(null===Ps&&s("178"),Xs(Ps,a),null!==Ps&&(Ps=Ps.nextEffect))}for(Ps=o;null!==Ps;){r=!1,a=void 0;try{Ws()}catch(e){r=!0,a=e}r&&(null===Ps&&s("178"),Xs(Ps,a),null!==Ps&&(Ps=Ps.nextEffect))}for(Gn(yo),yo=null,Tn=!!vo,vo=null,e.current=t,Ps=o;null!==Ps;){r=!1,a=void 0;try{Us(e,n)}catch(e){r=!0,a=e}r&&(null===Ps&&s("178"),Xs(Ps,a),null!==Ps&&(Ps=Ps.nextEffect))}if(null!==o&&null!==zs){var l=js.bind(null,e,o);Hs=i.unstable_runWithPriority(i.unstable_NormalPriority,(function(){return _o(l)})),Ls=l}Os=Ds=!1,"function"==typeof Uo&&Uo(t.stateNode),n=t.expirationTime,0===(t=(t=t.childExpirationTime)>n?t:n)&&(Gs=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function qs(e){for(;;){var t=e.alternate,n=e.return,o=e.sibling;if(0==(1024&e.effectTag)){Is=e;e:{var i=t,a=$s,l=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:zo(t.type)&&Ho();break;case 3:kr(),Lo(),(l=t.stateNode).pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==i&&null!==i.child||(Ci(t),t.effectTag&=-3),ds(t);break;case 5:Er(t);var c=_r(Sr.current);if(a=t.type,null!==i&&null!=t.stateNode)hs(i,t,a,l,c),i.ref!==t.ref&&(t.effectTag|=128);else if(l){var d=_r(Cr.current);if(Ci(t)){i=(l=t).stateNode;var h=l.type,u=l.memoizedProps,p=c;switch(i[N]=l,i[P]=u,a=void 0,c=h){case"iframe":case"object":kn("load",i);break;case"video":case"audio":for(h=0;h<ne.length;h++)kn(ne[h],i);break;case"source":kn("error",i);break;case"img":case"image":case"link":kn("error",i),kn("load",i);break;case"form":kn("reset",i),kn("submit",i);break;case"details":kn("toggle",i);break;case"input":Ct(i,u),kn("invalid",i),go(p,"onChange");break;case"select":i._wrapperState={wasMultiple:!!u.multiple},kn("invalid",i),go(p,"onChange");break;case"textarea":Qn(i,u),kn("invalid",i),go(p,"onChange")}for(a in fo(c,u),h=null,u)u.hasOwnProperty(a)&&(d=u[a],"children"===a?"string"==typeof d?i.textContent!==d&&(h=["children",d]):"number"==typeof d&&i.textContent!==""+d&&(h=["children",""+d]):w.hasOwnProperty(a)&&null!=d&&go(p,a));switch(c){case"input":Be(i),_t(i,u,!0);break;case"textarea":Be(i),eo(i);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(i.onclick=bo)}a=h,l.updateQueue=a,(l=null!==a)&&ls(t)}else{u=t,i=a,p=l,h=9===c.nodeType?c:c.ownerDocument,d===to.html&&(d=no(i)),d===to.html?"script"===i?((i=h.createElement("div")).innerHTML="<script><\/script>",h=i.removeChild(i.firstChild)):"string"==typeof p.is?h=h.createElement(i,{is:p.is}):(h=h.createElement(i),"select"===i&&p.multiple&&(h.multiple=!0)):h=h.createElementNS(d,i),(i=h)[N]=u,i[P]=l,cs(i,t,!1,!1),p=i;var f=c,m=mo(h=a,u=l);switch(h){case"iframe":case"object":kn("load",p),c=u;break;case"video":case"audio":for(c=0;c<ne.length;c++)kn(ne[c],p);c=u;break;case"source":kn("error",p),c=u;break;case"img":case"image":case"link":kn("error",p),kn("load",p),c=u;break;case"form":kn("reset",p),kn("submit",p),c=u;break;case"details":kn("toggle",p),c=u;break;case"input":Ct(p,u),c=wt(p,u),kn("invalid",p),go(f,"onChange");break;case"option":c=Kn(p,u);break;case"select":p._wrapperState={wasMultiple:!!u.multiple},c=r({},u,{value:void 0}),kn("invalid",p),go(f,"onChange");break;case"textarea":Qn(p,u),c=Xn(p,u),kn("invalid",p),go(f,"onChange");break;default:c=u}fo(h,c),d=void 0;var g=h,b=p,v=c;for(d in v)if(v.hasOwnProperty(d)){var y=v[d];"style"===d?uo(b,y):"dangerouslySetInnerHTML"===d?null!=(y=y?y.__html:void 0)&&so(b,y):"children"===d?"string"==typeof y?("textarea"!==g||""!==y)&&ao(b,y):"number"==typeof y&&ao(b,""+y):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(w.hasOwnProperty(d)?null!=y&&go(f,d):null!=y&&vt(b,d,y,m))}switch(h){case"input":Be(p),_t(p,u,!1);break;case"textarea":Be(p),eo(p);break;case"option":null!=u.value&&p.setAttribute("value",""+yt(u.value));break;case"select":(c=p).multiple=!!u.multiple,null!=(p=u.value)?Yn(c,!!u.multiple,p,!1):null!=u.defaultValue&&Yn(c,!!u.multiple,u.defaultValue,!0);break;default:"function"==typeof c.onClick&&(p.onclick=bo)}(l=wo(a,l))&&ls(t),t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&s("166");break;case 6:i&&null!=t.stateNode?us(i,t,i.memoizedProps,l):("string"!=typeof l&&(null===t.stateNode&&s("166")),i=_r(Sr.current),_r(Cr.current),Ci(t)?(a=(l=t).stateNode,i=l.memoizedProps,a[N]=l,(l=a.nodeValue!==i)&&ls(t)):(a=t,(l=(9===i.nodeType?i:i.ownerDocument).createTextNode(l))[N]=t,a.stateNode=l));break;case 13:if(l=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=a,Is=t;break e}l=null!==l,a=null!==i&&null!==i.memoizedState,null!==i&&!l&&a&&(null!==(i=i.child.sibling)&&(null!==(c=t.firstEffect)?(t.firstEffect=i,i.nextEffect=c):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8)),(l||a)&&(t.effectTag|=4);break;case 4:kr(),ds(t);break;case 10:Wi(t);break;default:s("156")}Is=null}if(t=e,1===$s||1!==t.childExpirationTime){for(l=0,a=t.child;null!==a;)(i=a.expirationTime)>l&&(l=i),(c=a.childExpirationTime)>l&&(l=c),a=a.sibling;t.childExpirationTime=l}if(null!==Is)return Is;null!==n&&0==(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=Ts(e)))return e.effectTag&=1023,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==o)return o;if(null===n)break;e=n}return null}function Ks(e){var t=Di(e.alternate,e,$s);return e.memoizedProps=e.pendingProps,null===t&&(t=qs(e)),Rs.current=null,t}function Ys(e,t){Os&&s("243"),Vs(),Os=!0;var n=ks.current;ks.current=hi;var o=e.nextExpirationTimeToWorkOn;o===$s&&e===Ms&&null!==Is||(Fs(),$s=o,Is=Yo((Ms=e).current,null),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==Is&&!Ma();)Is=Ks(Is);else for(;null!==Is;)Is=Ks(Is)}catch(t){if(Gi=Li=Hi=null,ei(),null===Is)r=!0,za(t);else{null===Is&&s("271");var i=Is,a=i.return;if(null!==a){e:{var l=e,c=a,d=i,h=t;if(a=$s,d.effectTag|=1024,d.firstEffect=d.lastEffect=null,null!==h&&"object"==typeof h&&"function"==typeof h.then){var u=h;h=c;var p=-1,f=-1;do{if(13===h.tag){var m=h.alternate;if(null!==m&&null!==(m=m.memoizedState)){f=10*(1073741822-m.timedOutAt);break}"number"==typeof(m=h.pendingProps.maxDuration)&&(0>=m?p=0:(-1===p||m<p)&&(p=m))}h=h.return}while(null!==h);h=c;do{if((m=13===h.tag)&&(m=void 0!==h.memoizedProps.fallback&&null===h.memoizedState),m){if(null===(c=h.updateQueue)?((c=new Set).add(u),h.updateQueue=c):c.add(u),0==(1&h.mode)){h.effectTag|=64,d.effectTag&=-1957,1===d.tag&&(null===d.alternate?d.tag=17:((a=Qi(1073741823)).tag=Zi,es(d,a))),d.expirationTime=1073741823;break e}c=a;var g=(d=l).pingCache;null===g?(g=d.pingCache=new xs,m=new Set,g.set(u,m)):void 0===(m=g.get(u))&&(m=new Set,g.set(u,m)),m.has(c)||(m.add(c),d=Js.bind(null,d,u,c),u.then(d,d)),-1===p?l=1073741823:(-1===f&&(f=10*(1073741822-rr(l,a))-5e3),l=f+p),0<=l&&As<l&&(As=l),h.effectTag|=2048,h.expirationTime=a;break e}h=h.return}while(null!==h);h=Error((lt(d.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ct(d))}Ns=!0,h=as(h,d),l=c;do{switch(l.tag){case 3:l.effectTag|=2048,l.expirationTime=a,ts(l,a=Ss(l,h,a));break e;case 1:if(p=h,f=l.type,d=l.stateNode,0==(64&l.effectTag)&&("function"==typeof f.getDerivedStateFromError||null!==d&&"function"==typeof d.componentDidCatch&&(null===Gs||!Gs.has(d)))){l.effectTag|=2048,l.expirationTime=a,ts(l,a=_s(l,p,a));break e}}l=l.return}while(null!==l)}Is=qs(i);continue}r=!0,za(t)}}break}if(Os=!1,ks.current=n,Gi=Li=Hi=null,ei(),r)Ms=null,e.finishedWork=null;else if(null!==Is)e.finishedWork=null;else{if(null===(n=e.current.alternate)&&s("281"),Ms=null,Ns){if(r=e.latestPendingTime,i=e.latestSuspendedTime,a=e.latestPingedTime,0!==r&&r<o||0!==i&&i<o||0!==a&&a<o)return or(e,o),void Ta(e,n,o,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,o=e.nextExpirationTimeToWorkOn=o,t=e.expirationTime=1073741823,void Ta(e,n,o,t,-1)}t&&-1!==As?(or(e,o),(t=10*(1073741822-rr(e,o)))<As&&(As=t),t=10*(1073741822-Ra()),t=As-t,Ta(e,n,o,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=o,e.finishedWork=n)}}function Xs(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var o=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===Gs||!Gs.has(o)))return es(n,e=_s(n,e=as(t,e),1073741823)),void na(n,1073741823);break;case 3:return es(n,e=Ss(n,e=as(t,e),1073741823)),void na(n,1073741823)}n=n.return}3===e.tag&&(es(e,n=Ss(e,n=as(t,e),1073741823)),na(e,1073741823))}function Qs(e,t){var n=i.unstable_getCurrentPriorityLevel(),o=void 0;if(0==(1&t.mode))o=1073741823;else if(Os&&!Ds)o=$s;else{switch(n){case i.unstable_ImmediatePriority:o=1073741823;break;case i.unstable_UserBlockingPriority:o=1073741822-10*(1+((1073741822-e+15)/10|0));break;case i.unstable_NormalPriority:o=1073741822-25*(1+((1073741822-e+500)/25|0));break;case i.unstable_LowPriority:case i.unstable_IdlePriority:o=1;break;default:s("313")}null!==Ms&&o===$s&&--o}return n===i.unstable_UserBlockingPriority&&(0===ha||o<ha)&&(ha=o),o}function Js(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),null!==Ms&&$s===n?Ms=null:(t=e.earliestSuspendedTime,o=e.latestSuspendedTime,0!==t&&n<=t&&n>=o&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>n)&&(e.latestPingedTime=n),ir(n,e),0!==(n=e.expirationTime)&&Ea(e,n)))}function ea(e,t){var n=e.stateNode;null!==n&&n.delete(t),null!==(e=ta(e,t=Qs(t=Ra(),e)))&&(nr(e,t),0!==(t=e.expirationTime)&&Ea(e,t))}function ta(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var o=e.return,r=null;if(null===o&&3===e.tag)r=e.stateNode;else for(;null!==o;){if(n=o.alternate,o.childExpirationTime<t&&(o.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===o.return&&3===o.tag){r=o.stateNode;break}o=o.return}return r}function na(e,t){null!==(e=ta(e,t))&&(!Os&&0!==$s&&t>$s&&Fs(),nr(e,t),Os&&!Ds&&Ms===e||Ea(e,e.expirationTime),Ca>wa&&(Ca=0,s("185")))}function oa(e,t,n,o,r){return i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){return e(t,n,o,r)}))}var ra=null,ia=null,sa=0,aa=void 0,la=!1,ca=null,da=0,ha=0,ua=!1,pa=null,fa=!1,ma=!1,ga=null,ba=i.unstable_now(),va=1073741822-(ba/10|0),ya=va,wa=50,Ca=0,xa=null;function Sa(){va=1073741822-((i.unstable_now()-ba)/10|0)}function _a(e,t){if(0!==sa){if(t<sa)return;null!==aa&&i.unstable_cancelCallback(aa)}sa=t,e=i.unstable_now()-ba,aa=i.unstable_scheduleCallback($a,{timeout:10*(1073741822-t)-e})}function Ta(e,t,n,o,r){e.expirationTime=o,0!==r||Ma()?0<r&&(e.timeoutHandle=xo(ka.bind(null,e,t,n),r)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function ka(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t,Sa(),ya=va,Na(e,n)}function Ra(){return la||(Oa(),0!==da&&1!==da||(Sa(),ya=va)),ya}function Ea(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===ia?(ra=ia=e,e.nextScheduledRoot=e):(ia=ia.nextScheduledRoot=e).nextScheduledRoot=ra):t>e.expirationTime&&(e.expirationTime=t),la||(fa?ma&&(ca=e,da=1073741823,Pa(e,1073741823,!1)):1073741823===t?Aa(1073741823,!1):_a(e,t))}function Oa(){var e=0,t=null;if(null!==ia)for(var n=ia,o=ra;null!==o;){var r=o.expirationTime;if(0===r){if((null===n||null===ia)&&s("244"),o===o.nextScheduledRoot){ra=ia=o.nextScheduledRoot=null;break}if(o===ra)ra=r=o.nextScheduledRoot,ia.nextScheduledRoot=r,o.nextScheduledRoot=null;else{if(o===ia){(ia=n).nextScheduledRoot=ra,o.nextScheduledRoot=null;break}n.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=n.nextScheduledRoot}else{if(r>e&&(e=r,t=o),o===ia)break;if(1073741823===e)break;n=o,o=o.nextScheduledRoot}}ca=t,da=e}var Ia=!1;function Ma(){return!!Ia||!!i.unstable_shouldYield()&&(Ia=!0)}function $a(){try{if(!Ma()&&null!==ra){Sa();var e=ra;do{var t=e.expirationTime;0!==t&&va<=t&&(e.nextExpirationTimeToWorkOn=va),e=e.nextScheduledRoot}while(e!==ra)}Aa(0,!0)}finally{Ia=!1}}function Aa(e,t){if(Oa(),t)for(Sa(),ya=va;null!==ca&&0!==da&&e<=da&&!(Ia&&va>da);)Pa(ca,da,va>da),Oa(),Sa(),ya=va;else for(;null!==ca&&0!==da&&e<=da;)Pa(ca,da,!1),Oa();if(t&&(sa=0,aa=null),0!==da&&_a(ca,da),Ca=0,xa=null,null!==ga)for(e=ga,ga=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ua||(ua=!0,pa=e)}}if(ua)throw e=pa,pa=null,ua=!1,e}function Na(e,t){la&&s("253"),ca=e,da=t,Pa(e,t,!1),Aa(1073741823,!1)}function Pa(e,t,n){if(la&&s("245"),la=!0,n){var o=e.finishedWork;null!==o?Da(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&(Ma()?e.finishedWork=o:Da(e,o,t)))}else null!==(o=e.finishedWork)?Da(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&Da(e,o,t));la=!1}function Da(e,t,n){var o=e.firstBatch;if(null!==o&&o._expirationTime>=n&&(null===ga?ga=[o]:ga.push(o),o._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===xa?Ca++:(xa=e,Ca=0),i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){Zs(e,t)}))}function za(e){null===ca&&s("246"),ca.expirationTime=0,ua||(ua=!0,pa=e)}function Ha(e,t){var n=fa;fa=!0;try{return e(t)}finally{(fa=n)||la||Aa(1073741823,!1)}}function La(e,t){if(fa&&!ma){ma=!0;try{return e(t)}finally{ma=!1}}return e(t)}function Ga(e,t,n){fa||la||0===ha||(Aa(ha,!1),ha=0);var o=fa;fa=!0;try{return i.unstable_runWithPriority(i.unstable_UserBlockingPriority,(function(){return e(t,n)}))}finally{(fa=o)||la||Aa(1073741823,!1)}}function Fa(e,t,n,o,r){var i=t.current;e:if(n){t:{2===nn(n=n._reactInternalFiber)&&1===n.tag||s("170");var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(zo(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);s("171"),a=void 0}if(1===n.tag){var l=n.type;if(zo(l)){n=Fo(n,l,a);break e}}n=a}else n=$o;return null===t.context?t.context=n:t.pendingContext=n,t=r,(r=Qi(o)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),Vs(),es(i,r),na(i,o),o}function Wa(e,t,n,o){var r=t.current;return Fa(e,t,n,r=Qs(Ra(),r),o)}function Ba(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ua(e){var t=1073741822-25*(1+((1073741822-Ra()+500)/25|0));t>=Es&&(t=Es-1),this._expirationTime=Es=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function ja(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Va(e,t,n){e={current:t=qo(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Za(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qa(e,t,n,o,r){var i=n._reactRootContainer;if(i){if("function"==typeof r){var s=r;r=function(){var e=Ba(i._internalRoot);s.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}else{if(i=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Va(e,!1,t)}(n,o),"function"==typeof r){var a=r;r=function(){var e=Ba(i._internalRoot);a.call(e)}}La((function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}))}return Ba(i._internalRoot)}function Ka(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Za(t)||s("200"),function(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ke,key:null==o?null:""+o,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Re=function(e,t,n){switch(t){case"input":if(St(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=L(o);r||s("90"),Ue(o),St(o,r)}}}break;case"textarea":Jn(e,n);break;case"select":null!=(t=n.value)&&Yn(e,!!n.multiple,t,!1)}},Ua.prototype.render=function(e){this._defer||s("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,o=new ja;return Fa(e,t,null,n,o._onCommit),o},Ua.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ua.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||s("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var o=null,r=t;r!==this;)o=r,r=r._next;null===o&&s("251"),o._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,Na(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Ua.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},ja.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ja.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&s("191",n),n()}}},Va.prototype.render=function(e,t){var n=this._internalRoot,o=new ja;return null!==(t=void 0===t?null:t)&&o.then(t),Wa(e,n,null,o._onCommit),o},Va.prototype.unmount=function(e){var t=this._internalRoot,n=new ja;return null!==(e=void 0===e?null:e)&&n.then(e),Wa(null,t,null,n._onCommit),n},Va.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var o=this._internalRoot,r=new ja;return null!==(n=void 0===n?null:n)&&r.then(n),Wa(t,o,e,r._onCommit),r},Va.prototype.createBatch=function(){var e=new Ua(this),t=e._expirationTime,n=this._internalRoot,o=n.firstBatch;if(null===o)n.firstBatch=e,e._next=null;else{for(n=null;null!==o&&o._expirationTime>=t;)n=o,o=o._next;e._next=o,null!==n&&(n._next=e)}return e},Ae=Ha,Ne=Ga,Pe=function(){la||0===ha||(Aa(ha,!1),ha=0)};var Ya={createPortal:Ka,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?s("188"):s("268",Object.keys(e))),e=null===(e=rn(t))?null:e.stateNode},hydrate:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!0,n)},render:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,o){return Za(n)||s("200"),(null==e||void 0===e._reactInternalFiber)&&s("38"),qa(e,t,n,!1,o)},unmountComponentAtNode:function(e){return Za(e)||s("40"),!!e._reactRootContainer&&(La((function(){qa(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return Ka.apply(void 0,arguments)},unstable_batchedUpdates:Ha,unstable_interactiveUpdates:Ga,flushSync:function(e,t){la&&s("187");var n=fa;fa=!0;try{return oa(e,t)}finally{fa=n,Aa(1073741823,!1)}},unstable_createRoot:function(e,t){return Za(e)||s("299","unstable_createRoot"),new Va(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=fa;fa=!0;try{oa(e)}finally{(fa=t)||la||Aa(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[z,H,L,I.injectEventPluginsByName,y,j,function(e){R(e,U)},Me,$e,On,$]}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Uo=Vo((function(e){return t.onCommitFiberRoot(n,e)})),jo=Vo((function(e){return t.onCommitFiberUnmount(n,e)}))}catch(e){}})(r({},e,{overrideProps:null,currentDispatcherRef:je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=rn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:D,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"});var Xa={default:Ya},Qa=Xa&&Ya||Xa;e.exports=Qa.default||Qa},2788:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=n(3975)},8447:(e,t,n)=>{var o=n(4516),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function C(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}function x(){}function S(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=C.prototype;var _=S.prototype=new x;_.constructor=S,o(_,C.prototype),_.isPureReactComponent=!0;var T={current:null},k={current:null},R=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o=void 0,r={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)R.call(t,o)&&!E.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===r[o]&&(r[o]=l[o]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:k.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,$=[];function A(e,t,n,o){if($.length){var r=$.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function P(e,t,n,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var a=!1;if(null===e)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return n(o,e,""===t?"."+z(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=t+z(r=e[l],l);a+=P(r,c,n,o)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),l=0;!(r=e.next()).done;)a+=P(r=r.value,c=t+z(r,l++),n,o);else"object"===r&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function D(e,t,n){return null==e?0:P(e,"",t,n)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?G(e,o,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),o.push(e))}function G(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(M,"$&/")+"/"),D(e,L,t=A(t,i,o,r)),N(t)}function F(){var e=T.current;return null===e&&v("307"),e}var W={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return G(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;D(e,H,t=A(null,null,t,n)),N(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return G(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||v("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,StrictMode:l,Suspense:f,createElement:O,cloneElement:function(e,t,n){null==e&&v("267",e);var r=void 0,s=o({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=k.current),void 0!==t.key&&(a=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)R.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(1===(r=arguments.length-2))s.children=n;else if(1<r){d=Array(r);for(var h=0;h<r;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:i,type:e.type,key:a,ref:l,props:s,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.4",unstable_ConcurrentMode:u,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:k,assign:o}},B={default:W},U=B&&W||B;e.exports=U.default||U},2735:(e,t,n)=>{e.exports=n(8447)},9666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=null,r=!1,i=3,s=-1,a=-1,l=!1,c=!1;function d(){if(!l){var e=o.expirationTime;c?_():c=!0,S(p,e)}}function h(){var e=o,t=o.next;if(o===t)o=null;else{var n=o.previous;o=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=i,s=a;i=e,a=t;try{var l=n()}finally{i=r,a=s}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===o)o=l.next=l.previous=l;else{n=null,e=o;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==o);null===n?n=o:n===o&&(o=l,d()),(t=n.previous).next=n.previous=l,l.next=n,l.previous=t}}function u(){if(-1===s&&null!==o&&1===o.priorityLevel){l=!0;try{do{h()}while(null!==o&&1===o.priorityLevel)}finally{l=!1,null!==o?d():c=!1}}}function p(e){l=!0;var n=r;r=e;try{if(e)for(;null!==o;){var i=t.unstable_now();if(!(o.expirationTime<=i))break;do{h()}while(null!==o&&o.expirationTime<=i)}else if(null!==o)do{h()}while(null!==o&&!T())}finally{l=!1,r=n,null!==o?d():c=!1,u()}}var f,m,g=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function C(e){f=y((function(t){v(m),e(t)})),m=b((function(){w(f),e(t.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var x=performance;t.unstable_now=function(){return x.now()}}else t.unstable_now=function(){return g.now()};var S,_,T,k=null;if("undefined"!=typeof window?k=window:void 0!==n.g&&(k=n.g),k&&k._schedMock){var R=k._schedMock;S=R[0],_=R[1],T=R[2],t.unstable_now=R[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,O=function(e){if(null!==E)try{E(e)}finally{E=null}};S=function(e){null!==E?setTimeout(S,0,e):(E=e,setTimeout(O,0,!1))},_=function(){E=null},T=function(){return!1}}else{var I=null,M=!1,$=-1,A=!1,N=!1,P=0,D=33,z=33;T=function(){return P<=t.unstable_now()};var H=new MessageChannel,L=H.port2;H.port1.onmessage=function(){M=!1;var e=I,n=$;I=null,$=-1;var o=t.unstable_now(),r=!1;if(0>=P-o){if(!(-1!==n&&n<=o))return A||(A=!0,C(G)),I=e,void($=n);r=!0}if(null!==e){N=!0;try{e(r)}finally{N=!1}}};var G=function(e){if(null!==I){C(G);var t=e-P+z;t<z&&D<z?(8>t&&(t=8),z=t<D?D:t):D=t,P=e+z,M||(M=!0,L.postMessage(void 0))}else A=!1};S=function(e,t){I=e,$=t,N||0>t?L.postMessage(void 0):A||(A=!0,C(G))},_=function(){I=null,M=!1,$=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var o=i,r=s;i=e,s=t.unstable_now();try{return n()}finally{i=o,s=r,u()}},t.unstable_next=function(e){switch(i){case 1:case 2:case 3:var n=3;break;default:n=i}var o=i,r=s;i=n,s=t.unstable_now();try{return e()}finally{i=o,s=r,u()}},t.unstable_scheduleCallback=function(e,n){var r=-1!==s?s:t.unstable_now();if("object"==typeof n&&null!==n&&"number"==typeof n.timeout)n=r+n.timeout;else switch(i){case 1:n=r+-1;break;case 2:n=r+250;break;case 5:n=r+1073741823;break;case 4:n=r+1e4;break;default:n=r+5e3}if(e={callback:e,priorityLevel:i,expirationTime:n,next:null,previous:null},null===o)o=e.next=e.previous=e,d();else{r=null;var a=o;do{if(a.expirationTime>n){r=a;break}a=a.next}while(a!==o);null===r?r=o:r===o&&(o=e,d()),(n=r.previous).next=r.previous=e,e.next=r,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)o=null;else{e===o&&(o=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=i;return function(){var o=i,r=s;i=n,s=t.unstable_now();try{return e.apply(this,arguments)}finally{i=o,s=r,u()}}},t.unstable_getCurrentPriorityLevel=function(){return i},t.unstable_shouldYield=function(){return!r&&(null!==o&&o.expirationTime<a||T())},t.unstable_continueExecution=function(){null!==o&&d()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return o}},9146:(e,t,n)=>{e.exports=n(9666)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"feature-billboard.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o.l=(t,n,r,i)=>{if(e[t])e[t].push(n);else{var s,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){s=d;break}}s||(a=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=t),e[t]=[n];var h=(n,o)=>{s.onerror=s.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),n)return n(o)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},o.p="#{root}/dist/webviews/",void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={786:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)l(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r={};(()=>{o.d(r,{q:()=>$h});var e=o(2735),t=o.n(e),n=o(2788),i=Object.defineProperty,s=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);class a{constructor(e,t=!1){this.method=e,this.reset=t,s(this,"_")}}class l extends a{}class c extends a{}function d(e,t,n){e.method===t.method&&n(t.params,e)}const h=new l("webview/ready"),u=new l("webview/focus");new l("command/execute"),new l("configuration/preview"),new l("configuration/update"),new c("configuration/didChange"),new c("configuration/didPreview"),new c("webview/didOpenAnchor");var p=(e=>(e.Upstream="upstream",e.PullRequest="pullRequest",e))(p||{});Object.values(p);const f=new l("graph/chooseRepository"),m=new l("graph/dimMergeCommits"),g=new l("graph/dblclick"),b=new l("graph/rows/ensure"),v=new l("graph/avatars/get"),y=new l("graph/refs/metadata/get"),w=new l("graph/rows/get"),C=new l("graph/search"),x=new l("graph/search/openInView"),S=new l("graph/columns/update"),_=new l("graph/refs/update/visibility"),T=new l("graph/fitlers/update/excludeType"),k=new l("graph/configuration/update"),R=new l("graph/fitlers/update/includeOnlyRefs"),E=new l("graph/selection/update"),O=new c("graph/didChange",!0),I=new c("graph/configuration/didChange"),M=new c("graph/subscription/didChange"),$=new c("graph/avatars/didChange"),A=new c("graph/refs/didChangeMetadata"),N=new c("graph/columns/didChange"),P=new c("graph/scrollMarkers/didChange"),D=new c("graph/focus/didChange"),z=new c("graph/window/focus/didChange"),H=new c("graph/refs/didChangeVisibility"),L=new c("graph/rows/didChange"),G=new c("graph/rows/stats/didChange"),F=new c("graph/selection/didChange"),W=new c("graph/workingTree/didChange"),B=new c("graph/rows/didEnsure"),U=new c("graph/didSearch"),j=new c("graph/didFetch");var V=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(V||{});var Z=Object.defineProperty,q=(e,t,n)=>(((e,t,n)=>{t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);function K(e,t){const n=e+t,o=t<0?n<0?0:n:n>255?255:n;return Math.round(o)}function Y(e,t){return X(e,-t)}function X(e,t){const n=function(e){const t=he(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==n)return e;const[o,r,i,s]=n,a=255*t/100;return`rgba(${K(o,a)}, ${K(r,a)}, ${K(i,a)}, ${s})`}function Q(e,t){const n=se.from(e);return null==n?e:n.transparent(t/100).toString()}function J(e,t,n){const o=se.from(e),r=se.from(t);return null==o||null==r?e:o.mix(r,n/100).toString()}function ee(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}class te{constructor(e,t,n,o=1){q(this,"_rgbaBrand"),q(this,"r"),q(this,"g"),q(this,"b"),q(this,"a"),this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,n)),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class ne{constructor(e,t,n,o){q(this,"_hslaBrand"),q(this,"h"),q(this,"s"),q(this,"l"),q(this,"a"),this.h=0|Math.max(Math.min(360,e),0),this.s=ee(Math.max(Math.min(1,t),0),3),this.l=ee(Math.max(Math.min(1,n),0),3),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=e.a,i=Math.max(t,n,o),s=Math.min(t,n,o);let a=0,l=0;const c=(s+i)/2,d=i-s;if(d>0){switch(l=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),i){case t:a=(n-o)/d+(n<o?6:0);break;case n:a=(o-t)/d+2;break;case o:a=(t-n)/d+4}a*=60,a=Math.round(a)}return new ne(a,l,c,r)}static _hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}static toRGBA(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=ne._hue2rgb(r,e,t+1/3),s=ne._hue2rgb(r,e,t),a=ne._hue2rgb(r,e,t-1/3)}return new te(Math.round(255*i),Math.round(255*s),Math.round(255*a),r)}}class oe{constructor(e,t,n,o){q(this,"_hsvaBrand"),q(this,"h"),q(this,"s"),q(this,"v"),q(this,"a"),this.h=0|Math.max(Math.min(360,e),0),this.s=ee(Math.max(Math.min(1,t),0),3),this.v=ee(Math.max(Math.min(1,n),0),3),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),i=r-Math.min(t,n,o),s=0===r?0:i/r;let a;return a=0===i?0:r===t?((n-o)/i%6+6)%6:r===n?(o-t)/i+2:(t-n)/i+4,new oe(Math.round(60*a),s,r,e.a)}static toRGBA(e){const{h:t,s:n,v:o,a:r}=e,i=o*n,s=i*(1-Math.abs(t/60%2-1)),a=o-i;let[l,c,d]=[0,0,0];return t<60?(l=i,c=s):t<120?(l=s,c=i):t<180?(c=i,d=s):t<240?(c=s,d=i):t<300?(l=s,d=i):t<=360&&(l=i,d=s),l=Math.round(255*(l+a)),c=Math.round(255*(c+a)),d=Math.round(255*(d+a)),new te(l,c,d,r)}}function re(e,t){return t.getPropertyValue(e).trim()}const ie=class{constructor(e){if(q(this,"rgba"),q(this,"_hsla"),q(this,"_hsva"),q(this,"_toString"),!e)throw new Error("Color needs a value");if(e instanceof te)this.rgba=e;else if(e instanceof ne)this._hsla=e,this.rgba=ne.toRGBA(e);else{if(!(e instanceof oe))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=oe.toRGBA(e)}}static from(e){return e instanceof ie?e:he(e)||ie.red}static fromCssVariable(e,t){return he(re(e,t))||ie.red}static fromHex(e){return ue(e)||ie.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:ne.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:oe.fromRGBA(this.rgba)}equals(e){return null!=e&&(Boolean(e)&&te.equals(this.rgba,e.rgba)&&ne.equals(this.hsla,e.hsla)&&oe.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ee(.2126*ie._relativeLuminanceForComponent(this.rgba.r)+.7152*ie._relativeLuminanceForComponent(this.rgba.g)+.0722*ie._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new se(new te(0,0,0,e.rgba.a));if(1===t)return new se(new te(255,255,255,e.rgba.a));const n=e.getRelativeLuminance();let o=20;const r=(e,n)=>{const i=e.mix(n,.5),s=i.getRelativeLuminance();return Math.abs(t-s)<1e-7||!o--?i:s>t?r(e,i):r(i,n)},i=(n>t?r(se.black,e):r(e,se.white)).rgba;return new se(new te(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),n=e.getRelativeLuminance();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new ie(new ne(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new ie(new ne(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:n,b:o,a:r}=this.rgba;return new ie(new te(t,n,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new ie(new te(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,n=this.rgba.a,o=t.a,r=n+o*(1-n);if(r<1e-6)return ie.transparent;const i=this.rgba.r*n/r+t.r*o*(1-n)/r,s=this.rgba.g*n/r+t.g*o*(1-n)/r,a=this.rgba.b*n/r+t.b*o*(1-n)/r;return new ie(new te(i,s,a,r))}mix(e,t){return function(e,t,n){const o=e.rgba,r=t.rgba;return new se(new te(o.r+n*(r.r-o.r),o.g+n*(r.g-o.g),o.b+n*(r.b-o.b),o.a+n*(r.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:n,b:o,a:r}=this.rgba;return new ie(new te(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-n),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>ie._flatten(t,e)));return ie._flatten(this,t)}static _flatten(e,t){const n=1-e.rgba.a;return new ie(new te(n*t.rgba.r+e.rgba.a*e.rgba.r,n*t.rgba.g+e.rgba.a*e.rgba.g,n*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return ce(e);return ae(e)}(this)),this._toString}static getLighterColor(e,t,n){if(e.isLighterThan(t))return e;n=n||.5;const o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return n=n*(r-o)/r,e.lighten(n)}static getDarkerColor(e,t,n){if(e.isDarkerThan(t))return e;n=n||.5;const o=e.getRelativeLuminance();return n=n*(o-t.getRelativeLuminance())/o,e.darken(n)}};let se=ie;function ae(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function le(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function ce(e){return`#${le(e.rgba.r)}${le(e.rgba.g)}${le(e.rgba.b)}`}q(se,"white",new ie(new te(255,255,255,1))),q(se,"black",new ie(new te(0,0,0,1))),q(se,"red",new ie(new te(255,0,0,1))),q(se,"blue",new ie(new te(0,0,255,1))),q(se,"green",new ie(new te(0,255,0,1))),q(se,"cyan",new ie(new te(0,255,255,1))),q(se,"lightgrey",new ie(new te(211,211,211,1))),q(se,"transparent",new ie(new te(0,0,0,0)));const de=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function he(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===V.Hash)return ue(e);const t=de.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new se(new te(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new se(new ne(o[0],o[1],o[2],o[3]))}return se.red}function ue(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==V.Hash)return null;switch(t){case 7:{const t=16*pe(e.charCodeAt(1))+pe(e.charCodeAt(2)),n=16*pe(e.charCodeAt(3))+pe(e.charCodeAt(4)),o=16*pe(e.charCodeAt(5))+pe(e.charCodeAt(6));return new se(new te(t,n,o,1))}case 9:{const t=16*pe(e.charCodeAt(1))+pe(e.charCodeAt(2)),n=16*pe(e.charCodeAt(3))+pe(e.charCodeAt(4)),o=16*pe(e.charCodeAt(5))+pe(e.charCodeAt(6)),r=16*pe(e.charCodeAt(7))+pe(e.charCodeAt(8));return new se(new te(t,n,o,r/255))}case 4:{const t=pe(e.charCodeAt(1)),n=pe(e.charCodeAt(2)),o=pe(e.charCodeAt(3));return new se(new te(16*t+t,16*n+n,16*o+o))}case 5:{const t=pe(e.charCodeAt(1)),n=pe(e.charCodeAt(2)),o=pe(e.charCodeAt(3)),r=pe(e.charCodeAt(4));return new se(new te(16*t+t,16*n+n,16*o+o,(16*r+r)/255))}default:return null}}function pe(e){switch(e){case V.Digit0:return 0;case V.Digit1:return 1;case V.Digit2:return 2;case V.Digit3:return 3;case V.Digit4:return 4;case V.Digit5:return 5;case V.Digit6:return 6;case V.Digit7:return 7;case V.Digit8:return 8;case V.Digit9:return 9;case V.a:case V.A:return 10;case V.b:case V.B:return 11;case V.c:case V.C:return 12;case V.d:case V.D:return 13;case V.e:case V.E:return 14;case V.f:case V.F:return 15}return 0}function fe(e,t){let n,o,r,i,s;function a(e){const n=e-(o??0);return null==o||n>=t||n<0}function l(){const e=Date.now();if(a(e))c();else{s=setTimeout(l,t-(e-(o??0)))}}function c(){return s=void 0,n?function(){const t=n,o=r;return n=r=void 0,i=e.apply(o,t),i}():(n=r=void 0,i)}function d(...e){const c=Date.now(),d=a(c);return n=e,r=this,o=c,d&&null==s?(s=setTimeout(l,t),i):(null==s&&(s=setTimeout(l,t)),i)}return d.cancel=function(){null!=s&&clearTimeout(s),n=o=r=s=void 0},d.flush=function(){return null!=s?c():i},d.pending=function(){return null!=s},d}const me=",",ge="",be="=",ve="{",ye="(",we=")",Ce=/\(([\s\S]*)\)/,xe=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,Se=/\s?=.*$/;const _e=500;var Te=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(Te||{}),ke=Object.defineProperty,Re=(e,t,n)=>(((e,t,n)=>{t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const Ee="";const Oe=new class{constructor(){Re(this,"output"),Re(this,"provider"),Re(this,"_isDebugging",!1),Re(this,"level",0),Re(this,"_logLevel",Te.Off)}configure(e,t,n=!1){this.provider=e,this._isDebugging=n,this.logLevel=t}enabled(e){return this.level>=Ie(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=Ie(this._logLevel),e===Te.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??Ee}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${n??Ee}${this.toLoggableParams(!0,t)}`)}error(e,t,...n){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${n.shift()??Ee}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??Ee}${this.toLoggableParams(!1,n)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??Ee}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${n??Ee}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??Ee}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${n??Ee}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const n=this.provider.toLoggable?.(e);if(null!=n)return n;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return Ee;const n=t.map((e=>this.toLoggable(e))).join(", ");return 0!==n.length?` — ${n}`:Ee}};function Ie(e){switch(e){case Te.Off:return 0;case Te.Error:return 1;case Te.Warn:return 2;case Te.Info:return 3;case Te.Debug:return 4;default:return 0}}var Me,$e;($e=Me||(Me={})).on=function(e,t,n,o){let r=!1;if("string"==typeof e){const i=function(t){const o=t?.target?.closest(e);null!=o&&n(t,o)};return document.addEventListener(t,i,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,o??!0))}}}const i=function(e){n(e,this)};return e.addEventListener(t,i,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,o??!1))}}},$e.insertTemplate=function(e,t,n){const o=document.getElementById(e);if(t.replaceChildren(o?.content.cloneNode(!0)),t.className=o.className,null!=n?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(n.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=n?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const o=n.bindings[e];null!=o&&(t.textContent=String(o))}}},$e.resetSlot=function(e){e.replaceChildren(),e.className=""};const Ae=class{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,n)=>{null==this.listeners&&(this.listeners=new He);const o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Ae._noop,this._disposed||o()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new He);for(let t=this.listeners.iterator(),n=t.next();!n.done;n=t.next())this._deliveryQueue.push([n.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let Ne=Ae;Ne._noop=function(){};const Pe={done:!0,value:void 0},De=class{constructor(e){this.element=e,this.next=De.Undefined,this.prev=De.Undefined}};let ze=De;ze.Undefined=new De(void 0);class He{constructor(){this._first=ze.Undefined,this._last=ze.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ze.Undefined}clear(){this._first=ze.Undefined,this._last=ze.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const n=new ze(e);if(this._first===ze.Undefined)this._first=n,this._last=n;else if(t){const e=this._last;this._last=n,n.prev=e,e.next=n}else{const e=this._first;this._first=n,n.next=e,e.prev=n}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(n))}}shift(){if(this._first===ze.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ze.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ze.Undefined&&e.next!==ze.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ze.Undefined&&e.next===ze.Undefined?(this._first=ze.Undefined,this._last=ze.Undefined):e.next===ze.Undefined?(this._last=this._last.prev,this._last.next=ze.Undefined):e.prev===ze.Undefined&&(this._first=this._first.next,this._first.prev=ze.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ze.Undefined?Pe:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ze.Undefined;t=t.next)e.push(t.element);return e}}const Le=new Ne,Ge=Le.event;function Fe(e){const t=document.documentElement,n=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),i=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),s=t.style,a=re("--vscode-editor-background",n);let l=re("--vscode-editor-foreground",n);l||(l=re("--vscode-foreground",n));let c=re("--color-background",n);return s.setProperty("--color-background--lighten-05",X(c,5)),s.setProperty("--color-background--darken-05",Y(c,5)),s.setProperty("--color-background--lighten-075",X(c,7.5)),s.setProperty("--color-background--darken-075",Y(c,7.5)),s.setProperty("--color-background--lighten-10",X(c,10)),s.setProperty("--color-background--darken-10",Y(c,10)),s.setProperty("--color-background--lighten-15",X(c,15)),s.setProperty("--color-background--darken-15",Y(c,15)),s.setProperty("--color-background--lighten-30",X(c,30)),s.setProperty("--color-background--darken-30",Y(c,30)),s.setProperty("--color-background--lighten-50",X(c,50)),s.setProperty("--color-background--darken-50",Y(c,50)),c=re("--color-button-background",n),s.setProperty("--color-button-background--darken-30",Y(c,30)),c=re("--color-highlight",n),s.setProperty("--color-highlight--75",Q(c,75)),s.setProperty("--color-highlight--50",Q(c,50)),s.setProperty("--color-highlight--25",Q(c,25)),c=re("--color-button-secondary-background",n),s.setProperty("--color-button-secondary-background--darken-30",Y(c,30)),c=re("--color-foreground",n),s.setProperty("--color-foreground--85",Q(c,85)),s.setProperty("--color-foreground--75",Q(c,75)),s.setProperty("--color-foreground--65",Q(c,65)),s.setProperty("--color-foreground--50",Q(c,50)),c=re("--color-link-foreground",n),s.setProperty("--color-link-foreground--darken-20",Y(c,20)),s.setProperty("--color-link-foreground--lighten-20",X(c,20)),c=re("--color-alert-infoBackground",n),s.setProperty("--color-alert-infoHoverBackground",r?Y(c,5):X(c,5)),c=re("--color-alert-warningBackground",n),s.setProperty("--color-alert-warningHoverBackground",r?Y(c,5):X(c,5)),c=re("--color-alert-errorBackground",n),s.setProperty("--color-alert-errorHoverBackground",r?Y(c,5):X(c,5)),c=r?Y(a,5):X(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",r?Y(c,5):X(c,5)),{colors:{background:a,foreground:l},computedStyle:n,isLightTheme:r,isHighContrastTheme:i,isInitializing:null==e}}let We=0;function Be(){return 1073741824===We?We=1:We++,`webview:${We}`}class Ue{constructor(e){this.appName=e;const t=[],n=Fe();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),t.push(Ge(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",Oe.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},Te.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Le.fire(Fe(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(Me.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(h,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(Me.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=fe((e=>{this.sendCommand(u,e)}),150);this.bindDisposables.push(Me.on(document,"focusin",(t=>{const n=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===n||(this._focused=!0,this._inputFocused=n,e({focused:!0,inputFocused:n}))})),Me.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){Oe.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const n=Be();this.log(`sendCommand(${n}): name=${e.method}`),this.postMessage({id:n,method:e.method,params:t})}async sendCommandWithCompletion(e,t,n){const o=Be();this.log(`sendCommandWithCompletion(${o}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const i=[Me.on(window,"message",(t=>{d(n,t.data,(n=>{t.data.completionId===o&&(i.forEach((e=>e.dispose())),queueMicrotask((()=>e(n))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,i.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:o,method:e.method,params:t,completionId:o}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var je=o(7507),Ve=o.n(je);const Ze=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===Ze.trustedTypes&&(Ze.trustedTypes={createPolicy:(e,t)=>t});const qe={configurable:!1,enumerable:!1,writable:!1};void 0===Ze.FAST&&Reflect.defineProperty(Ze,"FAST",Object.assign({value:Object.create(null)},qe));const Ke=Ze.FAST;if(void 0===Ke.getById){const e=Object.create(null);Reflect.defineProperty(Ke,"getById",Object.assign({value(t,n){let o=e[t];return void 0===o&&(o=n?e[t]=n():null),o}},qe))}const Ye=Object.freeze([]);function Xe(){const e=new WeakMap;return function(t){let n=e.get(t);if(void 0===n){let o=Reflect.getPrototypeOf(t);for(;void 0===n&&null!==o;)n=e.get(o),o=Reflect.getPrototypeOf(o);n=void 0===n?[]:n.slice(0),e.set(t,n)}return n}}const Qe=Ze.FAST.getById(1,(()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(n,0)}}function r(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let n=0,o=e.length-t;n<o;n++)e[n]=e[n+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&Ze.requestAnimationFrame(r),e.push(t)},process:r})})),Je=Ze.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let et=Je;const tt=`fast-${Math.random().toString(36).substring(2,8)}`,nt=`${tt}{`,ot=`}${tt}`,rt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(et!==Je)throw new Error("The HTML policy can only be set once.");et=e},createHTML:e=>et.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(tt),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${tt}:`,"")),createInterpolationPlaceholder:e=>`${nt}${e}${ot}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${tt}:${e}--\x3e`,queueUpdate:Qe.enqueue,processUpdates:Qe.process,nextUpdate:()=>new Promise(Qe.enqueue),setAttribute(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class it{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}notify(e){const t=this.spillover,n=this.source;if(void 0===t){const t=this.sub1,o=this.sub2;void 0!==t&&t.handleChange(n,e),void 0!==o&&o.handleChange(n,e)}else for(let o=0,r=t.length;o<r;++o)t[o].handleChange(n,e)}}class st{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];void 0!==n&&n.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var n;if(t){let n=this.subscribers[t];void 0===n&&(this.subscribers[t]=n=new it(this.source)),n.subscribe(e)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new it(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const n=this.subscribers[t];void 0!==n&&n.unsubscribe(e)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(e)}}const at=Ke.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,n=rt.queueUpdate;let o,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let n=e.$fastController||t.get(e);return void 0===n&&(Array.isArray(e)?n=r(e):t.set(e,n=new st(e))),n}const s=Xe();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==o&&o.watch(e,this.name),e[this.field]}setValue(e,t){const n=this.field,o=e[n];if(o!==t){e[n]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,o,t),i(e).notify(this.name)}}}class l extends it{constructor(e,t,n=!1){super(e,t),this.binding=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return o=n,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const n=this.last,r=i(e),s=null===n?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=r,r.subscribe(this,t),null!==n){if(!this.needsRefresh){let t;o=void 0,t=n.propertySource[n.propertyName],o=this,e===t&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:i,track(e,t){void 0!==o&&o.watch(e,t)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,n=this.isVolatileBinding(e)){return new l(e,t,n)},isVolatileBinding:t=>e.test(t.toString())})}));function lt(e,t){at.defineProperty(e,t)}function ct(e,t,n){return Object.assign({},n,{get:function(){return at.trackVolatile(),n.get.apply(this)}})}const dt=Ke.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class ht{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return dt.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){dt.set(e)}}at.defineProperty(ht.prototype,"index"),at.defineProperty(ht.prototype,"length");const ut=Object.seal(new ht);class pt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function ft(e){return e.map((e=>e instanceof pt?ft(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function mt(e){return e.map((e=>e instanceof pt?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}pt.create=(()=>{if(rt.supportsAdoptedStyleSheets){const e=new Map;return t=>new vt(t,e)}return e=>new wt(e)})();let gt=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},bt=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(rt.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),gt=(e,t)=>{e.adoptedStyleSheets.push(...t)},bt=(e,t)=>{for(const n of t){const t=e.adoptedStyleSheets.indexOf(n);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class vt extends pt{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=mt(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=ft(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let n=t.get(e);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(e),t.set(e,n)),n}))}return this._styleSheets}addStylesTo(e){gt(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){bt(e,this.styleSheets),super.removeStylesFrom(e)}}let yt=0;class wt extends pt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=mt(e),this.styleSheets=ft(e),this.styleClass="fast-style-class-"+ ++yt}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const r=document.createElement("style");r.innerHTML=t[o],r.className=n,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let n=0,o=t.length;n<o;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Ct=Object.freeze({locate:Xe()}),xt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},St={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class _t{constructor(e,t,n=t.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=o,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===r&&(this.converter=xt)}setValue(e,t){const n=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return at.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||"fromView"===t||rt.queueUpdate((()=>{n.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;rt.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":rt.setBooleanAttribute(e,this.attribute,o)}n.delete(e)}))}static collect(e,...t){const n=[];t.push(Ct.locate(e));for(let o=0,r=t.length;o<r;++o){const r=t[o];if(void 0!==r)for(let t=0,o=r.length;t<o;++t){const o=r[t];"string"==typeof o?n.push(new _t(e,o)):n.push(new _t(e,o.property,o.attribute,o.mode,o.converter))}}return n}}function Tt(e,t){let n;function o(e,t){arguments.length>1&&(n.property=t),Ct.locate(e.constructor).push(n)}return arguments.length>1?(n={},void o(e,t)):(n=void 0===e?{}:e,o)}const kt={mode:"open"},Rt={},Et=Ke.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class Ot{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=_t.collect(e,t.attributes),o=new Array(n.length),r={},i={};for(let e=0,t=n.length;e<t;++e){const t=n[e];o[e]=t.attribute,r[t.name]=t,i[t.attribute]=t}this.attributes=n,this.observedAttributes=o,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?kt:null===t.shadowOptions?void 0:Object.assign(Object.assign({},kt),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Rt:Object.assign(Object.assign({},Rt),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?pt.create(t.styles):t.styles instanceof pt?t.styles:pt.create([t.styles])}get isDefined(){return!!Et.getByType(this.type)}define(e=customElements){const t=this.type;if(Et.register(this)){const e=this.attributes,n=t.prototype;for(let t=0,o=e.length;t<o;++t)at.defineProperty(n,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Ot.forType=Et.getByType;function It(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const Mt=new WeakMap,$t={bubbles:!0,composed:!0,cancelable:!0};function At(e){return e.shadowRoot||Mt.get(e)||null}class Nt extends st{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const t=e.attachShadow(n);"closed"===n.mode&&Mt.set(e,t)}const o=at.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let n=0,r=o.length;n<r;++n){const r=o[n].name,i=e[r];void 0!==i&&(delete e[r],t[r]=i)}}}get isConnected(){return at.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,at.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=At(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(e){const t=At(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,o=[];for(let r=0;r<n;++r){const n=e[r];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),o.push(n))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,ut)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(null===n)return;const o=e.length,r=[];for(let i=0;i<o;++i){const o=e[i];if(n.has(o)){const e=n.get(o)-1;0===e||t?n.delete(o)&&r.push(o):n.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,ut);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(e,ut);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[n]of t)n.unbind(e)}}onAttributeChangedCallback(e,t,n){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},$t),n)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const r=n[o];e[r]=t[r]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=At(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||rt.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const n=Ot.forType(e.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return e.$fastController=new Nt(e,n)}}function Pt(e){return class extends e{constructor(){super(),Nt.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const Dt=Object.assign(Pt(HTMLElement),{from:e=>Pt(e),define:(e,t)=>new Ot(e,t).define().type});function zt(e){return function(t){new Ot(t,e).define()}}const Ht=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let o=Ht.get(n);void 0===o&&Ht.set(n,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=Ht.get(t);if(void 0!==n)return n.get(e)});class Lt{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,un(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:o}=this;return this.container=this.key=void 0,n.registerResolver(o,new Jt(o,e,t))}}function Gt(e){const t=e.slice(),n=Object.keys(e),o=n.length;let r;for(let i=0;i<o;++i)r=n[i],wn(r)||(t[r]=e[r]);return t}const Ft=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new Jt(e,1,e),transient:e=>new Jt(e,2,e)}),Wt=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ft.singleton})}),Bt=new Map;function Ut(e){return t=>Reflect.getOwnMetadata(e,t)}let jt=null;const Vt=Object.freeze({createContainer:e=>new dn(null,Object.assign({},Wt.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Vt.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ln,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Vt.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new dn(e,Object.assign({},Wt.default,t,{parentLocator:Vt.findParentContainer})):jt||(jt=new dn(null,Object.assign({},Wt.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Ut("design:paramtypes"),getAnnotationParamtypes:Ut("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Bt.get(e);if(void 0===t){const n=e.inject;if(void 0===n){const n=Vt.getDesignParamtypes(e),o=Vt.getAnnotationParamtypes(e);if(void 0===n)if(void 0===o){const n=Object.getPrototypeOf(e);t="function"==typeof n&&n!==Function.prototype?Gt(Vt.getDependencies(n)):[]}else t=Gt(o);else if(void 0===o)t=Gt(n);else{t=Gt(n);let e,r=o.length;for(let n=0;n<r;++n)e=o[n],void 0!==e&&(t[n]=e);const i=Object.keys(o);let s;r=i.length;for(let e=0;e<r;++e)s=i[e],wn(s)||(t[s]=o[s])}}else t=Gt(n);Bt.set(e,t)}return t},defineProperty(e,t,n,o=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const i=this instanceof HTMLElement?Vt.findResponsibleContainer(this):Vt.getOrCreateDOMContainer();if(e=i.get(n),this[r]=e,o&&this instanceof Dt){const o=this.$fastController,i=()=>{Vt.findResponsibleContainer(this).get(n)!==this[r]&&(this[r]=e,o.notify(t))};o.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const n="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||gn,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(t)Vt.defineProperty(e,t,i,r);else{Vt.getOrCreateAnnotationParamTypes(e)[n]=i}};return i.$isInterface=!0,i.friendlyName=o??"(anonymous)",null!=n&&(i.register=function(e,t){return n(new Lt(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,n,o){if("number"==typeof o){const n=Vt.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(n[o]=r)}else if(n)Vt.defineProperty(t,n,e[0]);else{const n=o?Vt.getOrCreateAnnotationParamTypes(o.value):Vt.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(n[t]=r)}},transient:e=>(e.register=function(t){return pn.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=Kt)=>(e.register=function(t){return pn.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),Zt=Vt.createInterface("Container");function qt(e){return function(t){const n=function(e,t,o){Vt.inject(n)(e,t,o)};return n.$isResolver=!0,n.resolve=function(n,o){return e(t,n,o)},n}}Vt.inject;const Kt={scoped:!1};Yt=(e,t,n,o)=>n.getAll(e,o);var Yt;qt(((e,t,n)=>()=>n.get(e))),qt(((e,t,n)=>n.has(e,!0)?n.get(e):void 0));function Xt(e,t,n){Vt.inject(Xt)(e,t,n)}Xt.$isResolver=!0,Xt.resolve=()=>{};qt(((e,t,n)=>{const o=Qt(e,t),r=new Jt(e,0,o);return n.registerResolver(e,r),o})),qt(((e,t,n)=>Qt(e,t)));function Qt(e,t){return t.getFactory(e).construct(t)}class Jt{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=e.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(n=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,e))&&void 0!==o?o:null;default:return null}}}function en(e){return this.get(e)}function tn(e,t){return t(e)}class nn{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(en,e)):new this.Type(...this.dependencies.map(en,e),...t),null==this.transformers?n:this.transformers.reduce(tn,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const on={$isResolver:!0,resolve:(e,t)=>t};function rn(e){return"function"==typeof e.register}function sn(e){return function(e){return rn(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const an=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ln="__DI_LOCATE_PARENT__",cn=new Map;class dn{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Zt,on),e instanceof Node&&e.addEventListener(ln,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,o,r,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],bn(t))if(rn(t))t.register(this,s);else if(void 0!==t.prototype)pn.singleton(t,t).register(this);else for(n=Object.keys(t),r=0,i=n.length;r<i;++r)o=t[n[r]],bn(o)&&(rn(o)?o.register(this,s):this.register(o));return--this.registerDepth,this}registerResolver(e,t){fn(e);const n=this.resolvers,o=n.get(e);return null==o?n.set(e,t):o instanceof Jt&&4===o.strategy?o.state.push(t):n.set(e,new Jt(e,4,[o,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(null==n)return!1;if(n.getFactory){const e=n.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(fn(e),void 0!==e.resolve)return e;let n,o=this;for(;null!=o;){if(n=o.resolvers.get(e),null!=n)return n;if(null==o.parent){const n=sn(e)?this:o;return t?this.jitRegister(e,n):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(fn(e),e.$isResolver)return e.resolve(this,this);let t,n=this;for(;null!=n;){if(t=n.resolvers.get(e),null!=t)return t.resolve(n,this);if(null==n.parent){const o=sn(e)?this:n;return t=this.jitRegister(e,o),t.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){fn(e);const n=this;let o,r=n;if(t){let t=Ye;for(;null!=r;)o=r.resolvers.get(e),null!=o&&(t=t.concat(mn(o,r,n))),r=r.parent;return t}for(;null!=r;){if(o=r.resolvers.get(e),null!=o)return mn(o,r,n);if(r=r.parent,null==r)return Ye}return Ye}getFactory(e){let t=cn.get(e);if(void 0===t){if(vn(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);cn.set(e,t=new nn(e,Vt.getDependencies(e)))}return t}registerFactory(e,t){cn.set(e,t)}createChild(e){return new dn(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(an.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(rn(e)){const n=e.register(t);if(!(n instanceof Object)||null==n.resolve){const n=t.resolvers.get(e);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}const hn=new WeakMap;function un(e){return function(t,n,o){if(hn.has(o))return hn.get(o);const r=e(t,n,o);return hn.set(o,r),r}}const pn=Object.freeze({instance:(e,t)=>new Jt(e,0,t),singleton:(e,t)=>new Jt(e,1,t),transient:(e,t)=>new Jt(e,2,t),callback:(e,t)=>new Jt(e,3,t),cachedCallback:(e,t)=>new Jt(e,3,un(t)),aliasTo:(e,t)=>new Jt(t,5,e)});function fn(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function mn(e,t,n){if(e instanceof Jt&&4===e.strategy){const o=e.state;let r=o.length;const i=new Array(r);for(;r--;)i[r]=o[r].resolve(t,n);return i}return[e.resolve(t,n)]}const gn="(anonymous)";function bn(e){return"object"==typeof e&&null!==e||"function"==typeof e}const vn=function(){const e=new WeakMap;let t=!1,n="",o=0;return function(r){return t=e.get(r),void 0===t&&(n=r.toString(),o=n.length,t=o>=29&&o<=100&&125===n.charCodeAt(o-1)&&n.charCodeAt(o-2)<=32&&93===n.charCodeAt(o-3)&&101===n.charCodeAt(o-4)&&100===n.charCodeAt(o-5)&&111===n.charCodeAt(o-6)&&99===n.charCodeAt(o-7)&&32===n.charCodeAt(o-8)&&101===n.charCodeAt(o-9)&&118===n.charCodeAt(o-10)&&105===n.charCodeAt(o-11)&&116===n.charCodeAt(o-12)&&97===n.charCodeAt(o-13)&&110===n.charCodeAt(o-14)&&88===n.charCodeAt(o-15),e.set(r,t)),t}}(),yn={};function wn(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=yn[e];if(void 0!==t)return t;const n=e.length;if(0===n)return yn[e]=!1;let o=0;for(let t=0;t<n;++t)if(o=e.charCodeAt(t),0===t&&48===o&&n>1||o<48||o>57)return yn[e]=!1;return yn[e]=!0}default:return!1}}function Cn(e){return`${e.toLowerCase()}:presentation`}const xn=new Map,Sn=Object.freeze({define(e,t,n){const o=Cn(e);void 0===xn.get(o)?xn.set(o,t):xn.set(o,!1),n.register(pn.instance(o,t))},forTag(e,t){const n=Cn(e),o=xn.get(n);if(!1===o){return Vt.findResponsibleContainer(t).get(n)}return o||null}});class _n{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?pt.create(t):t instanceof pt?t:pt.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Tn extends Dt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Sn.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Rn(this===Tn?class extends Tn{}:this,e,t)}}function kn(e,t,n){return"function"==typeof e?e(t,n):e}It([lt],Tn.prototype,"template",void 0),It([lt],Tn.prototype,"styles",void 0);class Rn{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,o=this.overrideDefinition,r=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new _n(kn(n.template,e,n),kn(n.styles,e,n));e.definePresentation(t);let r=kn(n.shadowOptions,e,n);e.shadowRootMode&&(r?o.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:kn(n.elementOptions,e,n),shadowOptions:r,attributes:kn(n.attributes,e,n)})}})}}const En=new Set(["children","localName","ref","style","className"]),On=Object.freeze(Object.create(null)),In="_default",Mn=new Map;function $n(e){return e.events||(e.events={})}function An(e,t,n){return!En.has(n)}function Nn(e,t){let n=[];const o={register(e,...t){n.forEach((n=>n.register(e,...t))),n=[]}};return{wrap:function(o,r={}){var i,s;o instanceof Rn&&(t?t.register(o):n.push(o),o=o.type);const a=Mn.get(o);if(a){const e=a.get(null!==(i=r.name)&&void 0!==i?i:In);if(e)return e}class l extends e.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){const t=this._element;if(null===t)return;const n=this.props,o=e||On,i=$n(r);for(const e in this._elementProps){const r=n[e],s=i[e];if(void 0===s)t[e]=r;else{const n=o[e];if(r===n)continue;void 0!==n&&t.removeEventListener(s,n),void 0!==r&&t.addEventListener(s,r)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;void 0!==this._ref&&this._userRef===t||(this._ref=e=>{null===this._element&&(this._element=e),null!==t&&function(e,t){"function"==typeof e?e(t):e.current=t}(t,e),this._userRef=t});const n={ref:this._ref},i=this._elementProps={},s=function(e,t){if(!t.keys)if(t.properties)t.keys=new Set(t.properties.concat(Object.keys($n(t))));else{const n=new Set(Object.keys($n(t))),o=at.getAccessors(e.prototype);if(o.length>0)for(const e of o)An(0,0,e.name)&&n.add(e.name);else for(const t in e.prototype)!(t in HTMLElement.prototype)&&An(0,0,t)&&n.add(t);t.keys=n}return t.keys}(o,r),a=this.props;for(const e in a){const t=a[e];s.has(e)?i[e]=t:n["className"===e?"class":e]=t}return e.createElement(function(e,t){if(!t.name){const n=Ot.forType(e);if(!n)throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");t.name=n.name}return t.name}(o,r),n)}}const c=e.forwardRef(((t,n)=>e.createElement(l,Object.assign(Object.assign({},t),{__forwardedRef:n}),null==t?void 0:t.children)));return Mn.has(o)||Mn.set(o,new Map),Mn.get(o).set(null!==(s=r.name)&&void 0!==s?s:In,c),c},registry:o}}class Pn extends Tn{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}It([Tt({attribute:"fill"})],Pn.prototype,"fill",void 0),It([Tt({attribute:"color"})],Pn.prototype,"color",void 0),It([Tt({mode:"boolean"})],Pn.prototype,"circular",void 0);class Dn{constructor(){this.targetIndex=0}}class zn extends Dn{constructor(){super(...arguments),this.createPlaceholder=rt.createInterpolationPlaceholder}}class Hn extends Dn{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return rt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Ln(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=at.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Gn(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Fn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Wn(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Bn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Un(e){rt.setAttribute(this.target,this.targetName,e)}function jn(e){rt.setBooleanAttribute(this.target,this.targetName,e)}function Vn(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Zn(e){this.target[this.targetName]=e}function qn(e){const t=this.classVersions||Object.create(null),n=this.target;let o=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,i=r.length;e<i;++e){const i=r[e];""!==i&&(t[i]=o,n.classList.add(i))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&n.classList.remove(e)}}class Kn extends zn{constructor(e){super(),this.binding=e,this.bind=Ln,this.unbind=Fn,this.updateTarget=Un,this.isBindingVolatile=at.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Zn,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,n)=>rt.createHTML(e(t,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=jn;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Gn,this.unbind=Bn;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=qn)}}targetAtContent(){this.updateTarget=Vn,this.unbind=Wn}createBehavior(e){return new Yn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Yn{constructor(e,t,n,o,r,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=o,this.unbind=r,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){ht.setEvent(e);const t=this.binding(this.source,this.context);ht.setEvent(null),!0!==t&&e.preventDefault()}}let Xn=null;class Qn{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Xn=this}static borrow(e){const t=Xn||new Qn;return t.directives=e,t.reset(),Xn=null,t}}function Jn(e){if(1===e.length)return e[0];let t;const n=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new Kn(((e,t)=>{let r="";for(let i=0;i<n;++i)r+=o[i](e,t);return r}));return r.targetName=t,r}const eo=ot.length;function to(e,t){const n=t.split(nt);if(1===n.length)return null;const o=[];for(let t=0,r=n.length;t<r;++t){const r=n[t],i=r.indexOf(ot);let s;if(-1===i)s=r;else{const t=parseInt(r.substring(0,i));o.push(e.directives[t]),s=r.substring(i+eo)}""!==s&&o.push(s)}return o}function no(e,t,n=!1){const o=t.attributes;for(let r=0,i=o.length;r<i;++r){const s=o[r],a=s.value,l=to(e,a);let c=null;null===l?n&&(c=new Kn((()=>a)),c.targetName=s.name):c=Jn(l),null!==c&&(t.removeAttributeNode(s),r--,i--,e.addFactory(c))}}function oo(e,t,n){const o=to(e,t.textContent);if(null!==o){let r=t;for(let i=0,s=o.length;i<s;++i){const s=o[i],a=0===i?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),r=a,e.targetIndex++,a!==t&&n.nextNode()}e.targetIndex--}}const ro=document.createRange();class io{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const n=e.parentNode;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,n.insertBefore(r,e),r=o;n.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.appendChild(o),o=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.removeChild(o),o=n;e.removeChild(t);const r=this.behaviors,i=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let r=0,i=n.length;r<i;++r){const i=n[r];i.unbind(o),i.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,r=n.length;o<r;++o)n[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let n=0,o=e.length;n<o;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){ro.setStartBefore(e[0].firstChild),ro.setEndAfter(e[e.length-1].lastChild),ro.deleteContents();for(let t=0,n=e.length;t<n;++t){const n=e[t],o=n.behaviors,r=n.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(r)}}}}class so{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=rt.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=function(e,t){const n=e.content;document.adoptNode(n);const o=Qn.borrow(t);no(o,e,!0);const r=o.behaviorFactories;o.reset();const i=rt.createTemplateWalker(n);let s;for(;s=i.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:no(o,s);break;case 3:oo(o,s,i);break;case 8:rt.isMarker(s)&&o.addFactory(t[rt.extractDirectiveIndexFromMarker(s)])}let a=0;(rt.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,o=new Array(this.behaviorCount),r=rt.createTemplateWalker(t);let i=0,s=this.targetOffset,a=r.nextNode();for(let e=n.length;i<e;++i){const e=n[i],t=e.targetIndex;for(;null!==a;){if(s===t){o[i]=e.createBehavior(a);break}a=r.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,r=t.length;n<r;++n,++i)o[i]=t[n].createBehavior(e)}return new io(t,o)}render(e,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const o=this.create(n);return o.bind(e,ut),o.appendTo(t),o}}const ao=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function lo(e,...t){const n=[];let o="";for(let r=0,i=e.length-1;r<i;++r){const i=e[r];let s=t[r];if(o+=i,s instanceof so){const e=s;s=()=>e}if("function"==typeof s&&(s=new Kn(s)),s instanceof zn){const e=ao.exec(i);null!==e&&(s.targetName=e[2])}s instanceof Dn?(o+=s.createPlaceholder(n.length),n.push(s)):o+=s}return o+=e[e.length-1],new so(o,n)}const co=(e,t)=>lo`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class ho{createCSS(){return""}createBehavior(){}}function uo(e,t){const n=[];let o="";const r=[];for(let i=0,s=e.length-1;i<s;++i){o+=e[i];let s=t[i];if(s instanceof ho){const e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof pt||s instanceof CSSStyleSheet?(""!==o.trim()&&(n.push(o),o=""),n.push(s)):o+=s}return o+=e[e.length-1],""!==o.trim()&&n.push(o),{styles:n,behaviors:r}}function po(e,...t){const{styles:n,behaviors:o}=uo(e,t),r=pt.create(n);return o.length&&r.withBehaviors(...o),r}function fo(e){return`:host([hidden]){display:none}:host{display:${e}}`}function mo(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const go=document.createElement("div");class bo{setProperty(e,t){rt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){rt.queueUpdate((()=>this.target.removeProperty(e)))}}class vo extends bo{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class yo extends bo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class wo{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),at.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),rt.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),rt.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:n}=this.style;if(n){const e=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[e].style}else this.target=null}}It([lt],wo.prototype,"target",void 0);class Co{constructor(e){this.target=e.style}setProperty(e,t){rt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){rt.queueUpdate((()=>this.target.removeProperty(e)))}}class xo{setProperty(e,t){xo.properties[e]=t;for(const n of xo.roots.values())To.getOrCreate(xo.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete xo.properties[e];for(const t of xo.roots.values())To.getOrCreate(xo.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=xo;if(!t.has(e)){t.add(e);const n=To.getOrCreate(this.normalizeRoot(e));for(const e in xo.properties)n.setProperty(e,xo.properties[e])}}static unregisterRoot(e){const{roots:t}=xo;if(t.has(e)){t.delete(e);const n=To.getOrCreate(xo.normalizeRoot(e));for(const e in xo.properties)n.removeProperty(e)}}static normalizeRoot(e){return e===go?document:e}}xo.roots=new Set,xo.properties={};const So=new WeakMap,_o=rt.supportsAdoptedStyleSheets?class extends bo{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(pt.create([t]))}}:wo,To=Object.freeze({getOrCreate(e){if(So.has(e))return So.get(e);let t;return e===go?t=new xo:e instanceof Document?t=rt.supportsAdoptedStyleSheets?new vo:new yo:t=e instanceof Dt?new _o(e):new Co(e),So.set(e,t),t}});class ko extends ho{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ko.uniqueId(),ko.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ko({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return ko.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Mo.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ko&&(t=this.alias(t)),Mo.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Mo.existsFor(e)&&Mo.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(go,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!Mo.existsFor(t)&&Mo.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}ko.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),ko.tokensById=new Map;class Ro{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=at.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ut))}}class Eo{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),at.getNotifier(this).notify(e.id))}get(e){return at.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Oo=new WeakMap,Io=new WeakMap;class Mo{constructor(e){this.target=e,this.store=new Eo,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const n=ko.getTokenById(t);if(n&&(n.notify(this.target),ko.isCSSDesignToken(n))){const t=this.parent,o=this.isReflecting(n);if(t){const r=t.get(n),i=e.get(n);r===i||o?r===i&&o&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else o||this.reflectToCSS(n)}}},Oo.set(e,this),at.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Dt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Oo.get(e)||new Mo(e)}static existsFor(e){return Oo.has(e)}static findParent(e){if(go!==e.target){let t=mo(e.target);for(;null!==t;){if(Oo.has(t))return Oo.get(t);t=mo(t)}return Mo.getOrCreate(go)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==go?Mo.getOrCreate(go):null}while(null!==n);return null}get parent(){return Io.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const n=this.getRaw(e);return void 0!==n?(this.hydrate(e,n),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Mo.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){ko.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ko.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Mo.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Io.get(this).removeChild(this)}}appendChild(e){e.parent&&Io.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Io.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),at.getNotifier(this.store).subscribe(e);for(const[t,n]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):n)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),at.getNotifier(this.store).unsubscribe(e),e.parent===this&&Io.delete(e)}contains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=mo(n)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Mo.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Mo.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=ko.getTokenById(t);n&&this.hydrate(n,this.getRaw(n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);ko.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new Ro(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Mo.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){To.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Mo.getOrCreate(t).get(e)))}remove(e,t){To.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},It([lt],Mo.prototype,"children",void 0);const $o=Object.freeze({create:function(e){return ko.from(e)},notifyConnection:e=>!(!e.isConnected||!Mo.existsFor(e))&&(Mo.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!Mo.existsFor(e))&&(Mo.getOrCreate(e).unbind(),!0),registerRoot(e=go){xo.registerRoot(e)},unregisterRoot(e=go){xo.unregisterRoot(e)}});function Ao(e){const t=getComputedStyle(document.body),n=document.querySelector("body");if(n){const o=n.getAttribute("data-vscode-theme-kind");for(const[r,i]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===o)0===e.length&&i.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===i.name&&(e="transparent");else if("vscode-high-contrast-light"===o){if(0===e.length&&i.name.includes("background"))switch(i.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===i.name&&(e="transparent");i.setValueFor(n,e)}}}const No=new Map;let Po=!1;function Do(e,t){const n=$o.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}No.set(t,n)}return Po||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{Ao(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ao(e)}))}(No),Po=!0),n}const zo=Do("background","--vscode-editor-background").withDefault("#1e1e1e"),Ho=Do("border-width").withDefault(1),Lo=Do("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Go=(Do("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Do("corner-radius").withDefault(0)),Fo=Do("design-unit").withDefault(4),Wo=Do("disabled-opacity").withDefault(.4),Bo=Do("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Uo=Do("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),jo=(Do("font-weight","--vscode-font-weight").withDefault("400"),Do("foreground","--vscode-foreground").withDefault("#cccccc")),Vo=Do("input-height").withDefault("26"),Zo=Do("input-min-width").withDefault("100px"),qo=Do("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Ko=Do("type-ramp-base-line-height").withDefault("normal"),Yo=Do("type-ramp-minus1-font-size").withDefault("11px"),Xo=Do("type-ramp-minus1-line-height").withDefault("16px"),Qo=(Do("type-ramp-minus2-font-size").withDefault("9px"),Do("type-ramp-minus2-line-height").withDefault("16px"),Do("type-ramp-plus1-font-size").withDefault("16px"),Do("type-ramp-plus1-line-height").withDefault("24px"),Do("scrollbarWidth").withDefault("10px")),Jo=Do("scrollbarHeight").withDefault("10px"),er=Do("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),tr=Do("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),nr=Do("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),or=Do("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),rr=Do("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),ir=Do("button-border","--vscode-button-border").withDefault("transparent"),sr=Do("button-icon-background").withDefault("transparent"),ar=Do("button-icon-corner-radius").withDefault("5px"),lr=Do("button-icon-outline-offset").withDefault(0),cr=Do("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),dr=Do("button-icon-padding").withDefault("3px"),hr=Do("button-primary-background","--vscode-button-background").withDefault("#0e639c"),ur=Do("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),pr=Do("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),fr=Do("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),mr=Do("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),gr=Do("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),br=Do("button-padding-horizontal").withDefault("11px"),vr=Do("button-padding-vertical").withDefault("4px"),yr=Do("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),wr=Do("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Cr=Do("checkbox-corner-radius").withDefault(3),xr=(Do("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Do("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Sr=Do("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),_r=Do("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Tr=Do("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),kr=Do("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Rr=Do("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Er=(Do("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Do("dropdown-list-max-height").withDefault("200px")),Or=Do("input-background","--vscode-input-background").withDefault("#3c3c3c"),Ir=Do("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Mr=(Do("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Do("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),$r=Do("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Ar=Do("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Nr=Do("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Pr=Do("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Dr=Do("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),zr=(Do("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Do("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Do("tag-corner-radius").withDefault("2px"));const Hr=class extends Pn{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:co,styles:(e,t)=>po`
	${fo("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Uo};
		font-size: ${Yo};
		line-height: ${Xo};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${or};
		border: calc(${Ho} * 1px) solid ${ir};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${rr};
		display: flex;
		height: calc(${Fo} * 4px);
		justify-content: center;
		min-width: calc(${Fo} * 4px + 2px);
		min-height: calc(${Fo} * 4px + 2px);
		padding: 3px 6px;
	}
`});class Lr{}It([Tt({attribute:"aria-atomic"})],Lr.prototype,"ariaAtomic",void 0),It([Tt({attribute:"aria-busy"})],Lr.prototype,"ariaBusy",void 0),It([Tt({attribute:"aria-controls"})],Lr.prototype,"ariaControls",void 0),It([Tt({attribute:"aria-current"})],Lr.prototype,"ariaCurrent",void 0),It([Tt({attribute:"aria-describedby"})],Lr.prototype,"ariaDescribedby",void 0),It([Tt({attribute:"aria-details"})],Lr.prototype,"ariaDetails",void 0),It([Tt({attribute:"aria-disabled"})],Lr.prototype,"ariaDisabled",void 0),It([Tt({attribute:"aria-errormessage"})],Lr.prototype,"ariaErrormessage",void 0),It([Tt({attribute:"aria-flowto"})],Lr.prototype,"ariaFlowto",void 0),It([Tt({attribute:"aria-haspopup"})],Lr.prototype,"ariaHaspopup",void 0),It([Tt({attribute:"aria-hidden"})],Lr.prototype,"ariaHidden",void 0),It([Tt({attribute:"aria-invalid"})],Lr.prototype,"ariaInvalid",void 0),It([Tt({attribute:"aria-keyshortcuts"})],Lr.prototype,"ariaKeyshortcuts",void 0),It([Tt({attribute:"aria-label"})],Lr.prototype,"ariaLabel",void 0),It([Tt({attribute:"aria-labelledby"})],Lr.prototype,"ariaLabelledby",void 0),It([Tt({attribute:"aria-live"})],Lr.prototype,"ariaLive",void 0),It([Tt({attribute:"aria-owns"})],Lr.prototype,"ariaOwns",void 0),It([Tt({attribute:"aria-relevant"})],Lr.prototype,"ariaRelevant",void 0),It([Tt({attribute:"aria-roledescription"})],Lr.prototype,"ariaRoledescription",void 0);class Gr{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Fr(e){return new Hn("fast-ref",Gr,e)}class Wr{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Br=(e,t)=>lo`
    <span
        part="end"
        ${Fr("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Fr("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Ur=(e,t)=>lo`
    <span
        part="start"
        ${Fr("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Fr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;lo`
    <span part="end" ${Fr("endContainer")}>
        <slot
            name="end"
            ${Fr("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,lo`
    <span part="start" ${Fr("startContainer")}>
        <slot
            name="start"
            ${Fr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function jr(e,...t){const n=Ct.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));Ct.locate(t).forEach((e=>n.push(e)))}))}var Vr;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Vr||(Vr={}));const Zr="ArrowDown",qr="ArrowLeft",Kr="ArrowRight",Yr="ArrowUp",Xr="Enter",Qr="Escape",Jr="Home",ei="End",ti=" ",ni="Tab",oi={ArrowDown:Zr,ArrowLeft:qr,ArrowRight:Kr,ArrowUp:Yr},ri="form-associated-proxy",ii="ElementInternals",si=ii in window&&"setFormValue"in window[ii].prototype,ai=new WeakMap;function li(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return si}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return Ye}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),rt.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),rt.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!si)return null;let e=ai.get(this);return e||(e=this.attachInternals(),ai.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ri),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ri)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Xr)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return Tt({mode:"boolean"})(t.prototype,"disabled"),Tt({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),Tt({attribute:"current-value"})(t.prototype,"currentValue"),Tt(t.prototype,"name"),Tt({mode:"boolean"})(t.prototype,"required"),lt(t.prototype,"value"),t}function ci(e){class t extends(li(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return Tt({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),Tt({attribute:"current-checked",converter:xt})(n.prototype,"currentChecked"),lt(n.prototype,"defaultChecked"),lt(n.prototype,"checked"),n}class di extends Tn{}class hi extends(li(di)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ui extends hi{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}It([Tt({mode:"boolean"})],ui.prototype,"autofocus",void 0),It([Tt({attribute:"form"})],ui.prototype,"formId",void 0),It([Tt],ui.prototype,"formaction",void 0),It([Tt],ui.prototype,"formenctype",void 0),It([Tt],ui.prototype,"formmethod",void 0),It([Tt({mode:"boolean"})],ui.prototype,"formnovalidate",void 0),It([Tt],ui.prototype,"formtarget",void 0),It([Tt],ui.prototype,"type",void 0),It([lt],ui.prototype,"defaultSlottedContent",void 0);class pi{}function fi(e){return e?function(t,n,o){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}It([Tt({attribute:"aria-expanded"})],pi.prototype,"ariaExpanded",void 0),It([Tt({attribute:"aria-pressed"})],pi.prototype,"ariaPressed",void 0),jr(pi,Lr),jr(ui,Wr,pi);class mi{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=at.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ye),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class gi extends mi{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function bi(e){return"string"==typeof e&&(e={property:e}),new Hn("fast-slotted",gi,e)}function vi(...e){return e.every((e=>e instanceof HTMLElement))}let yi;const wi=function(){if("boolean"==typeof yi)return yi;if("undefined"==typeof window||!window.document||!window.document.createElement)return yi=!1,yi;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),yi=!0}catch(e){yi=!1}finally{document.head.removeChild(e)}return yi}()?"focus-visible":"focus",Ci="not-allowed",xi=po`
	${fo("inline-flex")} :host {
		outline: none;
		font-family: ${Uo};
		font-size: ${qo};
		line-height: ${Ko};
		color: ${ur};
		background: ${hr};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${vr} ${br};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Ho} * 1px) solid ${ir};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${pr};
	}
	:host(:active) {
		background: ${hr};
	}
	.control:${wi} {
		outline: calc(${Ho} * 1px) solid ${Bo};
		outline-offset: calc(${Ho} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Wo};
		background: ${hr};
		cursor: ${Ci};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Fo} * 4px);
		height: calc(${Fo} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Si=po`
	:host([appearance='primary']) {
		background: ${hr};
		color: ${ur};
	}
	:host([appearance='primary']:hover) {
		background: ${pr};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${hr};
	}
	:host([appearance='primary']) .control:${wi} {
		outline: calc(${Ho} * 1px) solid ${Bo};
		outline-offset: calc(${Ho} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${hr};
	}
`,_i=po`
	:host([appearance='secondary']) {
		background: ${fr};
		color: ${mr};
	}
	:host([appearance='secondary']:hover) {
		background: ${gr};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${fr};
	}
	:host([appearance='secondary']) .control:${wi} {
		outline: calc(${Ho} * 1px) solid ${Bo};
		outline-offset: calc(${Ho} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${fr};
	}
`,Ti=po`
	:host([appearance='icon']) {
		background: ${sr};
		border-radius: ${ar};
		color: ${jo};
	}
	:host([appearance='icon']:hover) {
		background: ${cr};
		outline: 1px dotted ${Lo};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${dr};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${cr};
	}
	:host([appearance='icon']) .control:${wi} {
		outline: calc(${Ho} * 1px) solid ${Bo};
		outline-offset: ${lr};
	}
	:host([appearance='icon'][disabled]) {
		background: ${sr};
	}
`;class ki extends ui{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,n){if("appearance"===e&&"icon"===n){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=n),"disabled"===e&&(this.disabled=null!==n)}}It([Tt],ki.prototype,"appearance",void 0);const Ri=ki.compose({baseName:"button",template:(e,t)=>lo`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Fr("control")}
    >
        ${Ur(0,t)}
        <span class="content" part="content">
            <slot ${bi("defaultSlottedContent")}></slot>
        </span>
        ${Br(0,t)}
    </button>
`,styles:(e,t)=>po`
	${xi}
	${Si}
	${_i}
	${Ti}
`,shadowOptions:{delegatesFocus:!0}});class Ei extends Tn{}class Oi extends(ci(Ei)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ii extends Oi{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===ti)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}It([Tt({attribute:"readonly",mode:"boolean"})],Ii.prototype,"readOnly",void 0),It([lt],Ii.prototype,"defaultSlottedNodes",void 0),It([lt],Ii.prototype,"indeterminate",void 0);const Mi=class extends Ii{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>lo`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${bi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Fo} * 1px) 0;
		user-select: none;
		font-size: ${qo};
		line-height: ${Ko};
	}
	.control {
		position: relative;
		width: calc(${Fo} * 4px + 2px);
		height: calc(${Fo} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Cr} * 1px);
		border: calc(${Ho} * 1px) solid ${wr};
		background: ${yr};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Uo};
		color: ${jo};
		padding-inline-start: calc(${Fo} * 2px + 2px);
		margin-inline-end: calc(${Fo} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${jo};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${jo};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${yr};
		border-color: ${wr};
	}
	:host(:enabled) .control:active {
		background: ${yr};
		border-color: ${Bo};
	}
	:host(:${wi}) .control {
		border: calc(${Ho} * 1px) solid ${Bo};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Ci};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Wo};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function $i(e,t,n){return{index:e,removed:t,addedCount:n}}const Ai=0,Ni=1,Pi=2,Di=3;function zi(e,t,n,o,r,i){let s=0,a=0;const l=Math.min(n-t,i-r);if(0===t&&0===r&&(s=function(e,t,n){for(let o=0;o<n;++o)if(e[o]!==t[o])return o;return n}(e,o,l)),n===e.length&&i===o.length&&(a=function(e,t,n){let o=e.length,r=t.length,i=0;for(;i<n&&e[--o]===t[--r];)i++;return i}(e,o,l-s)),r+=s,i-=a,(n-=a)-(t+=s)==0&&i-r==0)return Ye;if(t===n){const e=$i(t,[],0);for(;r<i;)e.removed.push(o[r++]);return[e]}if(r===i)return[$i(t,[],n-t)];const c=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n];const r=[];for(;t>0||n>0;){if(0===t){r.push(Pi),n--;continue}if(0===n){r.push(Di),t--;continue}const i=e[t-1][n-1],s=e[t-1][n],a=e[t][n-1];let l;l=s<a?s<i?s:i:a<i?a:i,l===i?(i===o?r.push(Ai):(r.push(Ni),o=i),t--,n--):l===s?(r.push(Di),t--,o=s):(r.push(Pi),n--,o=a)}return r.reverse(),r}(function(e,t,n,o,r,i){const s=i-r+1,a=n-t+1,l=new Array(s);let c,d;for(let e=0;e<s;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let n=1;n<s;++n)for(let i=1;i<a;++i)e[t+i-1]===o[r+n-1]?l[n][i]=l[n-1][i-1]:(c=l[n-1][i]+1,d=l[n][i-1]+1,l[n][i]=c<d?c:d);return l}(e,t,n,o,r,i)),d=[];let h,u=t,p=r;for(let e=0;e<c.length;++e)switch(c[e]){case Ai:void 0!==h&&(d.push(h),h=void 0),u++,p++;break;case Ni:void 0===h&&(h=$i(u,[],0)),h.addedCount++,u++,h.removed.push(o[p]),p++;break;case Pi:void 0===h&&(h=$i(u,[],0)),h.addedCount++,u++;break;case Di:void 0===h&&(h=$i(u,[],0)),h.removed.push(o[p]),p++}return void 0!==h&&d.push(h),d}const Hi=Array.prototype.push;function Li(e,t,n,o){const r=$i(t,n,o);let i=!1,s=0;for(let t=0;t<e.length;t++){const n=e[t];if(n.index+=s,i)continue;const o=(a=r.index,l=r.index+r.removed.length,c=n.index,d=n.index+n.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(o>=0){e.splice(t,1),t--,s-=n.addedCount-n.removed.length,r.addedCount+=n.addedCount-o;const a=r.removed.length+n.removed.length-o;if(r.addedCount||a){let e=n.removed;if(r.index<n.index){const t=r.removed.slice(0,n.index-r.index);Hi.apply(t,e),e=t}if(r.index+r.removed.length>n.index+n.addedCount){const t=r.removed.slice(n.index+n.addedCount-r.index);Hi.apply(e,t)}r.removed=e,n.index<r.index&&(r.index=n.index)}else i=!0}else if(r.index<n.index){i=!0,e.splice(t,0,r),t++;const o=r.addedCount-r.removed.length;n.index+=o,s+=o}}var a,l,c,d;i||e.push(r)}function Gi(e,t){let n=[];const o=function(e){const t=[];for(let n=0,o=e.length;n<o;n++){const o=e[n];Li(t,o.index,o.removed,o.addedCount)}return t}(t);for(let t=0,r=o.length;t<r;++t){const r=o[t];1!==r.addedCount||1!==r.removed.length?n=n.concat(zi(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&n.push(r)}return n}let Fi=!1;function Wi(e,t){let n=e.index;const o=t.length;return n>o?n=o-e.addedCount:n<0&&(n=o+e.removed.length+n-e.addedCount),n<0&&(n=0),e.index=n,e}class Bi extends it{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,rt.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,rt.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===t?Gi(this.source,e):zi(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}Object.freeze({positioning:!1,recycle:!0});function Ui(e,t,n,o){e.bind(t[n],o)}function ji(e,t,n,o){const r=Object.create(o);r.index=n,r.length=t.length,e.bind(t[n],r)}class Vi{constructor(e,t,n,o,r,i){this.location=e,this.itemsBinding=t,this.templateBinding=o,this.options=i,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ui,this.itemsBindingObserver=at.binding(t,this,n),this.templateBindingObserver=at.binding(o,this,r),i.positioning&&(this.bindView=ji)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=Ye);const t=this.itemsObserver,n=this.itemsObserver=at.getNotifier(this.items),o=t!==n;o&&null!==t&&t.unsubscribe(this),(o||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,o=this.bindView,r=this.items,i=this.template,s=this.options.recycle,a=[];let l=0,c=0;for(let d=0,h=e.length;d<h;++d){const h=e[d],u=h.removed;let p=0,f=h.index;const m=f+h.addedCount,g=n.splice(h.index,u.length),b=c=a.length+g.length;for(;f<m;++f){const e=n[f],d=e?e.firstChild:this.location;let h;s&&c>0?(p<=b&&g.length>0?(h=g[p],p++):(h=a[l],l++),c--):h=i.create(),n.splice(f,0,h),o(h,r,f,t),h.insertBefore(d)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=n.length;e<t;++e){const o=n[e].context;o.length=t,o.index=e}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,o=this.template,r=this.location,i=this.bindView;let s=t.length,a=this.views,l=a.length;if(0!==s&&!e&&this.options.recycle||(io.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let e=0;e<s;++e){const s=o.create();i(s,t,e,n),a[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l){i(a[e],t,e,n)}else{const s=o.create();i(s,t,e,n),a.push(s),s.insertBefore(r)}const c=a.splice(e,l-e);for(e=0,s=c.length;e<s;++e)c[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class Zi extends Dn{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=rt.createBlockPlaceholder,function(){if(Fi)return;Fi=!0,at.setArrayObserverFactory((e=>new Bi(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,n=e.push,o=e.reverse,r=e.shift,i=e.sort,s=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,n=t.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice($i(this.length,[n],0)),n},e.push=function(){const e=n.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Wi($i(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=o.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice($i(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=i.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Wi($i(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Wi($i(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=at.isVolatileBinding(e),this.isTemplateBindingVolatile=at.isVolatileBinding(t)}createBehavior(e){return new Vi(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const qi="focus",Ki="focusin",Yi="focusout",Xi="keydown",Qi="none",Ji="default",es="sticky",ts="default",ns="columnheader",os="rowheader",rs="default",is="header",ss="sticky-header";class as extends Tn{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ji,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,n)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const o=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),i=r[Math.max(0,Math.min(r.length-1,t))];n&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&i.scrollIntoView({block:"center",inline:"center"}),i.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,rt.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,n)=>{const o=t;o.rowIndex=n,o.gridTemplateColumns=e,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=as.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=as.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Zi((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(qi,this.handleFocus),this.addEventListener(Xi,this.handleKeydown),this.addEventListener(Yi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),rt.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(qi,this.handleFocus),this.removeEventListener(Xi,this.handleKeydown),this.removeEventListener(Yi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const n=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,r=this.rowElements[n];switch(e.key){case Yr:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Zr:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=n||r.offsetTop+r.offsetHeight<=o)return void this.focusOnCell(n,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=n;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>o){let t=0;this.generateHeader===es&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Jr:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ei:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,rt.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Qi&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===es?ss:is,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}as.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),It([Tt({attribute:"no-tabbing",mode:"boolean"})],as.prototype,"noTabbing",void 0),It([Tt({attribute:"generate-header"})],as.prototype,"generateHeader",void 0),It([Tt({attribute:"grid-template-columns"})],as.prototype,"gridTemplateColumns",void 0),It([lt],as.prototype,"rowsData",void 0),It([lt],as.prototype,"columnDefinitions",void 0),It([lt],as.prototype,"rowItemTemplate",void 0),It([lt],as.prototype,"cellItemTemplate",void 0),It([lt],as.prototype,"headerCellItemTemplate",void 0),It([lt],as.prototype,"focusRowIndex",void 0),It([lt],as.prototype,"focusColumnIndex",void 0),It([lt],as.prototype,"defaultRowItemTemplate",void 0),It([lt],as.prototype,"rowElementTag",void 0),It([lt],as.prototype,"rowElements",void 0);class ls extends mi{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function cs(e){return"string"==typeof e&&(e={property:e}),new Hn("fast-children",ls,e)}class ds extends Tn{constructor(){super(...arguments),this.rowType=rs,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Zi((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Yi,this.handleFocusout),this.addEventListener(Xi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Yi,this.handleFocusout),this.removeEventListener(Xi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case qr:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Kr:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case Jr:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ei:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===rs&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===rs&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}It([Tt({attribute:"grid-template-columns"})],ds.prototype,"gridTemplateColumns",void 0),It([Tt({attribute:"row-type"})],ds.prototype,"rowType",void 0),It([lt],ds.prototype,"rowData",void 0),It([lt],ds.prototype,"columnDefinitions",void 0),It([lt],ds.prototype,"cellItemTemplate",void 0),It([lt],ds.prototype,"headerCellItemTemplate",void 0),It([lt],ds.prototype,"rowIndex",void 0),It([lt],ds.prototype,"isActiveRow",void 0),It([lt],ds.prototype,"activeCellItemTemplate",void 0),It([lt],ds.prototype,"defaultCellItemTemplate",void 0),It([lt],ds.prototype,"defaultHeaderCellItemTemplate",void 0),It([lt],ds.prototype,"cellElements",void 0);const hs=lo`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,us=lo`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class ps extends Tn{constructor(){super(...arguments),this.cellType=ts,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ki,this.handleFocusin),this.addEventListener(Yi,this.handleFocusout),this.addEventListener(Xi,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ki,this.handleFocusin),this.removeEventListener(Yi,this.handleFocusout),this.removeEventListener(Xi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===ns){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===ts&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===ns&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case Xr:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===ns){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case Qr:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case ns:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=us.render(this,this);break;case void 0:case os:case ts:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=hs.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}It([Tt({attribute:"cell-type"})],ps.prototype,"cellType",void 0),It([Tt({attribute:"grid-column"})],ps.prototype,"gridColumn",void 0),It([lt],ps.prototype,"rowData",void 0),It([lt],ps.prototype,"columnDefinition",void 0);const fs=class extends as{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:as,template:(e,t)=>{const n=function(e){const t=e.tagFor(ds);return lo`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),o=e.tagFor(ds);return lo`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${n}"
            ${cs({property:"rowElements",filter:fi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>po`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});const ms=class extends ds{}.compose({baseName:"data-grid-row",baseClass:ds,template:(e,t)=>{const n=function(e){const t=e.tagFor(ps);return lo`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),o=function(e){const t=e.tagFor(ps);return lo`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return lo`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${n}"
            :defaultHeaderCellItemTemplate="${o}"
            ${cs({property:"cellElements",filter:fi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${bi("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>po`
	:host {
		display: grid;
		padding: calc((${Fo} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${zo};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${_r};
		outline: 1px dotted ${Lo};
		outline-offset: -1px;
	}
`});const gs=class extends ps{}.compose({baseName:"data-grid-cell",baseClass:ps,template:(e,t)=>lo`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>po`
	:host {
		padding: calc(${Fo} * 1px) calc(${Fo} * 3px);
		color: ${jo};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Uo};
		font-size: ${qo};
		line-height: ${Ko};
		font-weight: 400;
		border: solid calc(${Ho} * 1px) transparent;
		border-radius: calc(${Go} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${wi}),
	:host(:focus),
	:host(:active) {
		background: ${xr};
		border: solid calc(${Ho} * 1px) ${Bo};
		color: ${Sr};
		outline: none;
	}
	:host(:${wi}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Sr} !important;
	}
`}),bs="horizontal",vs="separator";class ys extends Tn{constructor(){super(...arguments),this.role=vs,this.orientation=bs}}It([Tt],ys.prototype,"role",void 0),It([Tt],ys.prototype,"orientation",void 0);const ws=class extends ys{}.compose({baseName:"divider",template:(e,t)=>lo`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>po`
	${fo("block")} :host {
		border: none;
		border-top: calc(${Ho} * 1px) solid ${Tr};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Fo} * 1px) 0;
		width: 100%;
	}
`});let Cs=0;function xs(e=""){return`${e}${Cs++}`}function Ss(e){return vi(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class _s extends Tn{constructor(e,t,n,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),at.notify(this,"value")}get value(){var e;return at.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}It([lt],_s.prototype,"checked",void 0),It([lt],_s.prototype,"content",void 0),It([lt],_s.prototype,"defaultSelected",void 0),It([Tt({mode:"boolean"})],_s.prototype,"disabled",void 0),It([Tt({attribute:"selected",mode:"boolean"})],_s.prototype,"selectedAttribute",void 0),It([lt],_s.prototype,"selected",void 0),It([Tt({attribute:"value",mode:"fromView"})],_s.prototype,"initialValue",void 0);class Ts{}It([lt],Ts.prototype,"ariaChecked",void 0),It([lt],Ts.prototype,"ariaPosInSet",void 0),It([lt],Ts.prototype,"ariaSelected",void 0),It([lt],Ts.prototype,"ariaSetSize",void 0),jr(Ts,Lr),jr(_s,Wr,Ts);class ks extends Tn{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return at.track(this,"options"),this._options}set options(e){this._options=e,at.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,o=e+n;let r=null;switch(n){case-1:r=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<o?t:e),r);break;case 1:r=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>o?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){if("selected"===t)ks.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),ks.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Jr:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Zr:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Yr:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ei:e.preventDefault(),this.selectLastOption();break;case ni:return this.focusAndScrollOptionIntoView(),!0;case Xr:case Qr:return!0;case ti:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;return this.selectedIndex=o,void(t===o&&this.selectedIndexChanged(t,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const o=t.filter(ks.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=at.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=o.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Ss(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=xs("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}ks.slottedOptionFilter=e=>Ss(e)&&!e.hidden,ks.TYPE_AHEAD_TIMEOUT_MS=1e3,It([Tt({mode:"boolean"})],ks.prototype,"disabled",void 0),It([lt],ks.prototype,"selectedIndex",void 0),It([lt],ks.prototype,"selectedOptions",void 0),It([lt],ks.prototype,"slottedOptions",void 0),It([lt],ks.prototype,"typeaheadBuffer",void 0);class Rs{}function Es(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}It([lt],Rs.prototype,"ariaActiveDescendant",void 0),It([lt],Rs.prototype,"ariaDisabled",void 0),It([lt],Rs.prototype,"ariaExpanded",void 0),It([lt],Rs.prototype,"ariaMultiSelectable",void 0),jr(Rs,Lr),jr(ks,Rs);class Os extends ks{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,o;this.ariaActiveDescendant=null!==(o=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Es(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Es(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Es(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Es(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case Jr:return void this.checkFirstOption(n);case Zr:return void this.checkNextOption(n);case Yr:return void this.checkPreviousOption(n);case ei:return void this.checkLastOption(n);case ni:return this.focusAndScrollOptionIntoView(),!0;case Qr:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ti:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const o=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));o!==t&&rt.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}It([lt],Os.prototype,"activeIndex",void 0),It([Tt({mode:"boolean"})],Os.prototype,"multiple",void 0),It([Tt({converter:St})],Os.prototype,"size",void 0);class Is extends Os{}class Ms extends(li(Is)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const $s="above",As="below";class Ns extends Ms{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=xs("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void rt.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return at.track(this,"value"),this._value}set value(e){var t,n,o,r,i,s,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(o=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==o?o:null,c=null!==(i=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==i?i:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),at.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?$s:As,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$s?~~e.top:~~t}get displayValue(){var e,t;return at.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{at.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{at.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const o=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);o&&(o.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(ks.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case ti:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Jr:case ei:e.preventDefault();break;case Xr:e.preventDefault(),this.open=!this.open;break;case Qr:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case ni:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Zr||t===Yr)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&at.notify(this,"displayValue")}}It([Tt({attribute:"open",mode:"boolean"})],Ns.prototype,"open",void 0),It([ct],Ns.prototype,"collapsible",null),It([lt],Ns.prototype,"control",void 0),It([Tt({attribute:"position"})],Ns.prototype,"positionAttribute",void 0),It([lt],Ns.prototype,"position",void 0),It([lt],Ns.prototype,"maxHeight",void 0);class Ps{}It([lt],Ps.prototype,"ariaControls",void 0),jr(Ps,Rs),jr(Ns,Wr,Ps);const Ds=e=>"function"==typeof e,zs=()=>null;function Hs(e){return void 0===e?zs:Ds(e)?e:()=>e}function Ls(e,t,n){const o=Ds(e)?e:()=>e,r=Hs(t),i=Hs(n);return(e,t)=>o(e,t)?r(e,t):i(e,t)}const Gs=class extends Ns{}.compose({baseName:"dropdown",template:(e,t)=>lo`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Ls((e=>e.collapsible),lo`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Fr("control")}
                >
                    ${Ur(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Br(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Fr("listbox")}
        >
            <slot
                ${bi({filter:ks.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		background: ${kr};
		box-sizing: border-box;
		color: ${jo};
		contain: contents;
		font-family: ${Uo};
		height: calc(${Vo} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Zo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Ho} * 1px) solid ${Rr};
		border-radius: calc(${Go} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${qo};
		line-height: ${Ko};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${kr};
		border: calc(${Ho} * 1px) solid ${Bo};
		border-radius: calc(${Go} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Er};
		padding: 0 0 calc(${Fo} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${wi}) .control {
		border-color: ${Bo};
	}
	:host(:not([disabled]):hover) {
		background: ${kr};
		border-color: ${Rr};
	}
	:host(:${wi}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${xr};
		border: calc(${Ho} * 1px) solid ${Bo};
		color: ${Sr};
	}
	:host([disabled]) {
		cursor: ${Ci};
		opacity: ${Wo};
	}
	:host([disabled]) .control {
		cursor: ${Ci};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${kr};
		color: ${jo};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Bo};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Bo};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Vo} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Vo} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Fo} * 4px);
		min-width: calc(${Fo} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Fs extends Tn{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}It([Tt],Fs.prototype,"download",void 0),It([Tt],Fs.prototype,"href",void 0),It([Tt],Fs.prototype,"hreflang",void 0),It([Tt],Fs.prototype,"ping",void 0),It([Tt],Fs.prototype,"referrerpolicy",void 0),It([Tt],Fs.prototype,"rel",void 0),It([Tt],Fs.prototype,"target",void 0),It([Tt],Fs.prototype,"type",void 0),It([lt],Fs.prototype,"defaultSlottedContent",void 0);class Ws{}It([Tt({attribute:"aria-expanded"})],Ws.prototype,"ariaExpanded",void 0),jr(Ws,Lr),jr(Fs,Wr,Ws);const Bs=class extends Fs{}.compose({baseName:"link",template:(e,t)=>lo`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Fr("control")}
    >
        ${Ur(0,t)}
        <span class="content" part="content">
            <slot ${bi("defaultSlottedContent")}></slot>
        </span>
        ${Br(0,t)}
    </a>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${$r};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Uo};
		font-size: ${qo};
		line-height: ${Ko};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Ho} * 1px) solid transparent;
		border-radius: calc(${Go} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Mr};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Mr};
	}
	:host(:${wi}) .control,
	:host(:focus) .control {
		border: calc(${Ho} * 1px) solid ${Bo};
	}
`,shadowOptions:{delegatesFocus:!0}});const Us=class extends _s{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>lo`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Ur(0,t)}
        <span class="content" part="content">
            <slot ${bi("content")}></slot>
        </span>
        ${Br(0,t)}
    </template>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Go};
		border: calc(${Ho} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${jo};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${qo};
		line-height: ${Ko};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Fo} / 2) * 1px)
			calc((${Fo} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${wi}) {
		border-color: ${Bo};
		background: ${xr};
		color: ${jo};
	}
	:host([aria-selected='true']) {
		background: ${xr};
		border: calc(${Ho} * 1px) solid ${Bo};
		color: ${Sr};
	}
	:host(:active) {
		background: ${xr};
		color: ${Sr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${xr};
		border: calc(${Ho} * 1px) solid ${Bo};
		color: ${Sr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${xr};
		color: ${jo};
	}
	:host([disabled]) {
		cursor: ${Ci};
		opacity: ${Wo};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),js="horizontal";class Vs extends Tn{constructor(){super(...arguments),this.orientation=js,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((o,r)=>{if("tab"===o.slot){const e=this.activeTabIndex===r&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const t=this.tabIds[r],n=this.tabpanelIds[r];o.setAttribute("id",t),o.setAttribute("aria-selected",e?"true":"false"),o.setAttribute("aria-controls",n),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=o)}o.style[e]="",o.style[t]="",o.style[n]=`${r+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",o),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case qr:e.preventDefault(),this.adjustBackward(e);break;case Kr:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Yr:e.preventDefault(),this.adjustBackward(e);break;case Zr:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Jr:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ei:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${xs()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${xs()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===js}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const i=r-o;this.activeIndicatorRef.style.transform=`${t}(${i}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,n,o;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(t=0,n=this.tabs.length-1,(o=this.activeTabIndex+e)<t?n:o>n?t:o),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}It([Tt],Vs.prototype,"orientation",void 0),It([Tt],Vs.prototype,"activeid",void 0),It([lt],Vs.prototype,"tabs",void 0),It([lt],Vs.prototype,"tabpanels",void 0),It([Tt({mode:"boolean"})],Vs.prototype,"activeindicator",void 0),It([lt],Vs.prototype,"activeIndicatorRef",void 0),It([lt],Vs.prototype,"showActiveIndicator",void 0),jr(Vs,Wr);class Zs extends Tn{}It([Tt({mode:"boolean"})],Zs.prototype,"disabled",void 0);class qs extends Tn{}const Ks=class extends Vs{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=js);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>lo`
    <template class="${e=>e.orientation}">
        ${Ur(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${bi("tabs")}></slot>

            ${Ls((e=>e.showActiveIndicator),lo`
                    <div
                        ${Fr("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Br(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${bi("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>po`
	${fo("grid")} :host {
		box-sizing: border-box;
		font-family: ${Uo};
		font-size: ${qo};
		line-height: ${Ko};
		color: ${jo};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Fo} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Fo} * 1px) calc(${Fo} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Fo} / 4) * 1px);
		justify-self: center;
		background: ${Pr};
		margin: 0;
		border-radius: calc(${Go} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});const Ys=class extends Zs{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>lo`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Uo};
		font-size: ${qo};
		line-height: ${Ko};
		height: calc(${Fo} * 7px);
		padding: calc(${Fo} * 1px) 0;
		color: ${Dr};
		fill: currentcolor;
		border-radius: calc(${Go} * 1px);
		border: solid calc(${Ho} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Pr};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Pr};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Pr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Pr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Pr};
		fill: currentcolor;
	}
	:host(:${wi}) {
		outline: none;
		border: solid calc(${Ho} * 1px) ${Nr};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Fo} * 2px);
	}
`});const Xs=class extends qs{}.compose({baseName:"panel-view",template:(e,t)=>lo`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>po`
	${fo("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Ho} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${qo};
		line-height: ${Ko};
		padding: 10px calc((${Fo} + 2) * 1px);
	}
`});class Qs extends Tn{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,o=t-e;this.percentComplete=0===o?0:Math.fround((n-e)/o*100)}}It([Tt({converter:St})],Qs.prototype,"value",void 0),It([Tt({converter:St})],Qs.prototype,"min",void 0),It([Tt({converter:St})],Qs.prototype,"max",void 0),It([Tt({mode:"boolean"})],Qs.prototype,"paused",void 0),It([lt],Qs.prototype,"percentComplete",void 0);const Js=class extends Qs{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,n){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>lo`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Ls((e=>"number"==typeof e.value),lo`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,lo`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>po`
	${fo("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Fo} * 7px);
		width: calc(${Fo} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Fo} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Ar};
		stroke-width: calc(${Fo} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});class ea extends Tn{}class ta extends(ci(ea)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class na extends ta{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==ti)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}It([Tt({attribute:"readonly",mode:"boolean"})],na.prototype,"readOnly",void 0),It([lt],na.prototype,"name",void 0),It([lt],na.prototype,"defaultSlottedNodes",void 0);const oa=class extends na{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>lo`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${bi("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${qo};
		line-height: ${Ko};
		margin: calc(${Fo} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${yr};
		border-radius: 999px;
		border: calc(${Ho} * 1px) solid ${wr};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Fo} * 4px);
		position: relative;
		outline: none;
		width: calc(${Fo} * 4px);
	}
	.label {
		color: ${jo};
		cursor: pointer;
		font-family: ${Uo};
		margin-inline-end: calc(${Fo} * 2px + 2px);
		padding-inline-start: calc(${Fo} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${jo};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Fo} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${yr};
		border-color: ${wr};
	}
	:host(:not([disabled])) .control:active {
		background: ${yr};
		border-color: ${Bo};
	}
	:host(:${wi}) .control {
		border: calc(${Ho} * 1px) solid ${Bo};
	}
	:host([aria-checked='true']) .control {
		background: ${yr};
		border: calc(${Ho} * 1px) solid ${wr};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${yr};
		border: calc(${Ho} * 1px) solid ${wr};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${yr};
		border: calc(${Ho} * 1px) solid ${Bo};
	}
	:host([aria-checked="true"]:${wi}:not([disabled])) .control {
		border: calc(${Ho} * 1px) solid ${Bo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ci};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Wo};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});var ra;!function(e){e.ltr="ltr",e.rtl="rtl"}(ra||(ra={}));class ia extends Tn{constructor(){super(...arguments),this.orientation=bs,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,o=null!==n?t.indexOf(n):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===r&&o===r||r===t.length-1&&r===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Kr,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===qr,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in oi&&this.isInsideFoundationToolbar)return!0;switch(t){case Xr:this.checkFocusedRadio();break;case Kr:case Zr:this.direction===ra.ltr?this.moveRight(e):this.moveLeft(e);break;case qr:case Yr:this.direction===ra.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?ra.rtl:ra.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}It([Tt({attribute:"readonly",mode:"boolean"})],ia.prototype,"readOnly",void 0),It([Tt({attribute:"disabled",mode:"boolean"})],ia.prototype,"disabled",void 0),It([Tt],ia.prototype,"name",void 0),It([Tt],ia.prototype,"value",void 0),It([Tt],ia.prototype,"orientation",void 0),It([lt],ia.prototype,"childItems",void 0),It([lt],ia.prototype,"slottedRadioButtons",void 0);const sa=class extends ia{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>lo`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===bs?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${bi({property:"slottedRadioButtons",filter:fi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>po`
	${fo("flex")} :host {
		align-items: flex-start;
		margin: calc(${Fo} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${jo};
		font-size: ${qo};
		margin: calc(${Fo} * 1px) 0;
	}
`});const aa=class extends Pn{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:co,styles:(e,t)=>po`
	${fo("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Uo};
		font-size: ${Yo};
		line-height: ${Xo};
	}
	.control {
		background-color: ${or};
		border: calc(${Ho} * 1px) solid ${ir};
		border-radius: ${zr};
		color: ${rr};
		padding: calc(${Fo} * 0.5px) calc(${Fo} * 1px);
		text-transform: uppercase;
	}
`});class la extends Tn{}class ca extends(li(la)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const da="text";class ha extends ca{constructor(){super(...arguments),this.type=da}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&rt.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}It([Tt({attribute:"readonly",mode:"boolean"})],ha.prototype,"readOnly",void 0),It([Tt({mode:"boolean"})],ha.prototype,"autofocus",void 0),It([Tt],ha.prototype,"placeholder",void 0),It([Tt],ha.prototype,"type",void 0),It([Tt],ha.prototype,"list",void 0),It([Tt({converter:St})],ha.prototype,"maxlength",void 0),It([Tt({converter:St})],ha.prototype,"minlength",void 0),It([Tt],ha.prototype,"pattern",void 0),It([Tt({converter:St})],ha.prototype,"size",void 0),It([Tt({mode:"boolean"})],ha.prototype,"spellcheck",void 0),It([lt],ha.prototype,"defaultSlottedNodes",void 0);class ua{}jr(ua,Lr),jr(ha,Wr,ua);class pa extends Tn{}class fa extends(li(pa)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const ma="none";class ga extends fa{constructor(){super(...arguments),this.resize=ma,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}It([Tt({mode:"boolean"})],ga.prototype,"readOnly",void 0),It([Tt],ga.prototype,"resize",void 0),It([Tt({mode:"boolean"})],ga.prototype,"autofocus",void 0),It([Tt({attribute:"form"})],ga.prototype,"formId",void 0),It([Tt],ga.prototype,"list",void 0),It([Tt({converter:St})],ga.prototype,"maxlength",void 0),It([Tt({converter:St})],ga.prototype,"minlength",void 0),It([Tt],ga.prototype,"name",void 0),It([Tt],ga.prototype,"placeholder",void 0),It([Tt({converter:St,mode:"fromView"})],ga.prototype,"cols",void 0),It([Tt({converter:St,mode:"fromView"})],ga.prototype,"rows",void 0),It([Tt({mode:"boolean"})],ga.prototype,"spellcheck",void 0),It([lt],ga.prototype,"defaultSlottedNodes",void 0),jr(ga,ua);const ba=class extends ga{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>lo`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==ma?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${bi("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Fr("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-block")} :host {
		font-family: ${Uo};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Ir};
		background: ${Or};
		border-radius: calc(${Go} * 1px);
		border: calc(${Ho} * 1px) solid ${Rr};
		font: inherit;
		font-size: ${qo};
		line-height: ${Ko};
		padding: calc(${Fo} * 2px + 1px);
		width: 100%;
		min-width: ${Zo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Or};
		border-color: ${Rr};
	}
	.control:active:enabled {
		background: ${Or};
		border-color: ${Bo};
	}
	.control:hover,
	.control:${wi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Qo};
		height: ${Jo};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Or};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${er};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${tr};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${nr};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Bo};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${jo};
		cursor: pointer;
		font-size: ${qo};
		line-height: ${Ko};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ci};
	}
	:host([disabled]) {
		opacity: ${Wo};
	}
	:host([disabled]) .control {
		border-color: ${Rr};
	}
`,shadowOptions:{delegatesFocus:!0}});function va(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const ya=class extends ha{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>lo`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${bi({property:"defaultSlottedNodes",filter:va})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Ur(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Fr("control")}
            />
            ${Br(0,t)}
        </div>
    </template>
`,styles:(e,t)=>po`
	${fo("inline-block")} :host {
		font-family: ${Uo};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Ir};
		background: ${Or};
		border-radius: calc(${Go} * 1px);
		border: calc(${Ho} * 1px) solid ${Rr};
		height: calc(${Vo} * 1px);
		min-width: ${Zo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Fo} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Fo} * 2px + 1px);
		font-size: ${qo};
		line-height: ${Ko};
	}
	.control:hover,
	.control:${wi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${jo};
		cursor: pointer;
		font-size: ${qo};
		line-height: ${Ko};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Fo} * 4px);
		height: calc(${Fo} * 4px);
	}
	.start {
		margin-inline-start: calc(${Fo} * 2px);
	}
	.end {
		margin-inline-end: calc(${Fo} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Or};
		border-color: ${Rr};
	}
	:host(:active:not([disabled])) .root {
		background: ${Or};
		border-color: ${Bo};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Bo};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ci};
	}
	:host([disabled]) {
		opacity: ${Wo};
	}
	:host([disabled]) .control {
		border-color: ${Rr};
	}
`,shadowOptions:{delegatesFocus:!0}}),wa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ca=new Map,xa=new Map;let Sa=null;const _a=Vt.createInterface((e=>e.cachedCallback((e=>(null===Sa&&(Sa=new ka(null,e)),Sa))))),Ta=Object.freeze({tagFor:e=>xa.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Vt.findResponsibleContainer(e).get(_a)},getOrCreate(e){if(!e)return null===Sa&&(Sa=Vt.getOrCreateDOMContainer().get(_a)),Sa;const t=e.$$designSystem$$;if(t)return t;const n=Vt.getOrCreateDOMContainer(e);if(n.has(_a,!1))return n.get(_a);{const t=new ka(e,n);return n.register(pn.instance(_a,t)),t}}});class ka{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>wa.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],o=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,n){return"string"==typeof e?{name:e,type:t,callback:n}:e}(e,i,s),{name:l,callback:c,baseClass:d}=a;let{type:h}=a,u=l,p=Ca.get(u),f=!0;for(;p;){const e=o(u,h,p);switch(e){case wa.ignoreDuplicate:return;case wa.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=Ca.get(u)}}f&&((xa.has(h)||h===Tn)&&(h=class extends h{}),Ca.set(u,h),xa.set(h,u),d&&xa.set(d,u)),n.push(new Ra(t,u,h,r,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&$o.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of n)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class Ra{constructor(e,t,n,o,r,i){this.container=e,this.name=t,this.type=n,this.shadowRootMode=o,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(e){Sn.define(this.name,e,this.container)}defineElement(e){this.definition=new Ot(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ta.tagFor(e)}}const{wrap:Ea}=Nn(e,Ta.getOrCreate(Oa).withPrefix("vscode"));var Oa;Ea(Hr(),{name:"vscode-badge"}),Ea(Ri(),{name:"vscode-button"});const Ia=Ea(Mi(),{name:"vscode-checkbox",events:{onChange:"change"}}),Ma=(Ea(fs(),{name:"vscode-data-grid"}),Ea(gs(),{name:"vscode-data-grid-cell"}),Ea(ms(),{name:"vscode-data-grid-row"}),Ea(ws(),{name:"vscode-divider"}),Ea(Gs(),{name:"vscode-dropdown",events:{onChange:"change"}}),Ea(Bs(),{name:"vscode-link"}),Ea(Us(),{name:"vscode-option"}),Ea(Ks(),{name:"vscode-panels",events:{onChange:"change"}}),Ea(Ys(),{name:"vscode-panel-tab"}),Ea(Xs(),{name:"vscode-panel-view"}),Ea(Js(),{name:"vscode-progress-ring"}),Ea(oa(),{name:"vscode-radio",events:{onChange:"change"}})),$a=Ea(sa(),{name:"vscode-radio-group",events:{onChange:"change"}}),Aa=(Ea(aa(),{name:"vscode-tag"}),Ea(ba(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),Ea(ya(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}}),navigator?.userAgentData?.platform),Na=navigator.userAgent,Pa="Linux"===Aa||Na.indexOf("Linux")>=0,Da="macOS"===Aa||Na.indexOf("Macintosh")>=0,za="Windows"===Aa||Na.indexOf("Windows")>=0;var Ha=(e=>(e.Absolute="absolute",e.Relative="relative",e))(Ha||{});function La(e){const t=.001*performance.now();let n=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(n-=e[0],o-=e[1],o<0&&(n--,o+=1e9)),[n,o]}const{fromCharCode:Ga}=String;new TextEncoder;function Fa(e){const[t,n]=La(e);return 1e3*t+Math.floor(n/1e6)}function Wa(e,t,n){if(null==n)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:n.plural??`${e}s`;return n.only?o:`${0===t?n.zero??t:n.format?.(t)??t}${n.infix??" "}${o}`}const{wrap:Ba}=Nn(t()),Ua=po`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var ja=Object.defineProperty,Va=Object.getOwnPropertyDescriptor;const Za=lo`
	<template role="listbox">
		<slot></slot>
	</template>
`,qa=po`
	${Ua}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`;let Ka=class extends Dt{};Ka=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?Va(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&ja(t,n,i),i})([zt({name:"menu-list",template:Za,styles:qa})],Ka);var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Qa=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Xa(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Ya(t,n,i),i};const Ja=lo`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,el=po`
	${Ua}

	:host {
		display: block;
		font-family: inherit;
		border: none;
		padding: 0 0.6rem;
		cursor: pointer;
		color: var(--vscode-menu-foreground);
		background-color: var(--vscode-menu-background);
		text-align: left;
		height: auto;
		line-height: 2.2rem;
	}

	:host([role='option']:hover) {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}

	:host([aria-selected='true']) {
		opacity: 1;
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-background);
	}
`;let tl=class extends Dt{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};Qa([Tt({mode:"boolean"})],tl.prototype,"disabled",2),Qa([Tt],tl.prototype,"role",2),Qa([ct],tl.prototype,"isInteractive",1),tl=Qa([zt({name:"menu-item",template:Ja,styles:el})],tl);var nl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor;const rl=lo`
	<template>
		<slot></slot>
	</template>
`,il=po`
	${Ua}

	:host {
		display: block;
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0px;
		color: var(--vscode-menu-foreground);
		opacity: 0.6;
		user-select: none;
	}
`;let sl=class extends Dt{};sl=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?ol(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&nl(t,n,i),i})([zt({name:"menu-label",template:rl,styles:il})],sl);var al=Object.defineProperty,ll=Object.getOwnPropertyDescriptor;const cl=lo``,dl=po`
	${Ua}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`;let hl=class extends Dt{};hl=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?ll(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&al(t,n,i),i})([zt({name:"menu-divider",template:cl,styles:dl})],hl);const ul=Ba(hl),pl=Ba(tl),fl=Ba(sl),ml=Ba(Ka);function gl(...e){return e.some((e=>(e?.length??0)>0))}function bl(e){return t=>t.nodeType===e}var vl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,wl=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?yl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&vl(t,n,i),i};const Cl=lo`
	<template role="combobox">
		<slot ${bi({property:"triggerNodes",filter:bl(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${bi({property:"contentNodes",filter:bl(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,xl=po`
	${Ua}

	:host {
		position: relative;
	}

	slot[name='content']::slotted(*)::before {
		font: normal normal normal 14px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		vertical-align: middle;
		line-height: 2rem;
		letter-spacing: normal;
		content: '\\ea76';
		position: absolute;
		top: 2px;
		right: 5px;
		cursor: pointer;
		pointer-events: all;
		z-index: 10001;
	}

	slot[name='content']::slotted(*) {
		position: absolute;
		top: 100%;
		z-index: 10000;
	}

	:host([position='left']) slot[name='content']::slotted(*) {
		left: 0;
	}

	:host([position='right']) slot[name='content']::slotted(*) {
		right: 0;
	}

	:host(:not([open])) slot[name='content']::slotted(*) {
		display: none;
	}
`;let Sl=class extends Dt{constructor(){super(...arguments),this.open=!1,this.position="left",this.isTrackingOutside=!1}get triggerNode(){if(gl(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(gl(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.addEventListener("click",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.removeEventListener("click",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}close(){this.open=!1,this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame((()=>{this.contentNode?.focus()})),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;const t=e.composedPath();(!t.includes(this)||"click"===e.type&&'""'===window.getComputedStyle(t[0],"::before").content)&&this.close()}trackOutside(){!this.isTrackingOutside&&this.open&&(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1),null==this._webviewBlurEventHandler&&(this._webviewBlurEventHandler=()=>this.close()),window.addEventListener("webview-blur",this._webviewBlurEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0),null!=this._webviewBlurEventHandler&&(window.removeEventListener("webview-blur",this._webviewBlurEventHandler,!1),this._webviewBlurEventHandler=void 0))}};wl([Tt({mode:"boolean"})],Sl.prototype,"open",2),wl([Tt()],Sl.prototype,"position",2),wl([lt],Sl.prototype,"triggerNodes",2),wl([lt],Sl.prototype,"contentNodes",2),wl([ct],Sl.prototype,"triggerNode",1),wl([ct],Sl.prototype,"contentNode",1),Sl=wl([zt({name:"pop-menu",template:Cl,styles:xl})],Sl);const _l=Ba(Sl);var Tl=Object.defineProperty,kl=Object.getOwnPropertyDescriptor,Rl=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?kl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Tl(t,n,i),i};const El=lo`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${bi("typeNodes")} name="type"></slot>
			<slot ${bi("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${bi("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${Ls((e=>e.caret),lo`<span class="caret"></span>`)}
	</template>
`,Ol=po`
	${Ua}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let Il=class extends Dt{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return gl(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return gl(this.headingNodes)}};Rl([Tt({mode:"boolean"})],Il.prototype,"open",2),Rl([Tt({mode:"boolean"})],Il.prototype,"caret",2),Rl([Tt],Il.prototype,"placement",2),Rl([lt],Il.prototype,"typeNodes",2),Rl([lt],Il.prototype,"actionsNodes",2),Rl([lt],Il.prototype,"headingNodes",2),Rl([ct],Il.prototype,"hasTopNodes",1),Rl([ct],Il.prototype,"hasHeadingNodes",1),Il=Rl([zt({name:"pop-over",template:El,styles:Ol})],Il);const Ml=Ba(Il),$l=window,Al=$l.ShadowRoot&&(void 0===$l.ShadyCSS||$l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nl=Symbol(),Pl=new WeakMap;class Dl{constructor(e,t,n){if(this._$cssResult$=!0,n!==Nl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Al&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=Pl.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Pl.set(t,e))}return e}toString(){return this.cssText}}const zl=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new Dl(n,e,Nl)},Hl=Al?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new Dl("string"==typeof e?e:e+"",void 0,Nl))(t)})(e):e;var Ll;const Gl=window,Fl=Gl.trustedTypes,Wl=Fl?Fl.emptyScript:"",Bl=Gl.reactiveElementPolyfillSupport,Ul={toAttribute(e,t){switch(t){case Boolean:e=e?Wl:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},jl=(e,t)=>t!==e&&(t==t||e==e),Vl={attribute:!0,type:String,converter:Ul,reflect:!1,hasChanged:jl},Zl="finalized";class ql extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const o=this._$Ep(n,t);void 0!==o&&(this._$Ev.set(o,n),e.push(o))})),e}static createProperty(e,t=Vl){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Vl}static finalize(){if(this.hasOwnProperty(Zl))return!1;this[Zl]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Hl(e))}else void 0!==e&&t.push(Hl(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Al?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const n=document.createElement("style"),o=$l.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Vl){var o;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==(null===(o=n.converter)||void 0===o?void 0:o.toAttribute)?n.converter:Ul).toAttribute(t,n.type);this._$El=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(e,t){var n;const o=this.constructor,r=o._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:Ul;this._$El=r,this[r]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let o=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||jl)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Kl;ql[Zl]=!0,ql.elementProperties=new Map,ql.elementStyles=[],ql.shadowRootOptions={mode:"open"},null==Bl||Bl({ReactiveElement:ql}),(null!==(Ll=Gl.reactiveElementVersions)&&void 0!==Ll?Ll:Gl.reactiveElementVersions=[]).push("1.6.2");const Yl=window,Xl=Yl.trustedTypes,Ql=Xl?Xl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jl="$lit$",ec=`lit$${(Math.random()+"").slice(9)}$`,tc="?"+ec,nc=`<${tc}>`,oc=document,rc=()=>oc.createComment(""),ic=e=>null===e||"object"!=typeof e&&"function"!=typeof e,sc=Array.isArray,ac=e=>sc(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),lc="[ \t\n\f\r]",cc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dc=/-->/g,hc=/>/g,uc=RegExp(`>|${lc}(?:([^\\s"'>=/]+)(${lc}*=${lc}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),pc=/'/g,fc=/"/g,mc=/^(?:script|style|textarea|title)$/i,gc=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),bc=gc(1),vc=(gc(2),Symbol.for("lit-noChange")),yc=Symbol.for("lit-nothing"),wc=new WeakMap,Cc=oc.createTreeWalker(oc,129,null,!1);function xc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ql?Ql.createHTML(t):t}const Sc=(e,t)=>{const n=e.length-1,o=[];let r,i=2===t?"<svg>":"",s=cc;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===cc?"!--"===l[1]?s=dc:void 0!==l[1]?s=hc:void 0!==l[2]?(mc.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=uc):void 0!==l[3]&&(s=uc):s===uc?">"===l[0]?(s=null!=r?r:cc,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?uc:'"'===l[3]?fc:pc):s===fc||s===pc?s=uc:s===dc||s===hc?s=cc:(s=uc,r=void 0);const h=s===uc&&e[t+1].startsWith("/>")?" ":"";i+=s===cc?n+nc:c>=0?(o.push(a),n.slice(0,c)+Jl+n.slice(c)+ec+h):n+ec+(-2===c?(o.push(void 0),t):h)}return[xc(e,i+(e[n]||"<?>")+(2===t?"</svg>":"")),o]};class _c{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[l,c]=Sc(e,t);if(this.el=_c.createElement(l,n),Cc.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=Cc.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith(Jl)||t.startsWith(ec)){const n=c[i++];if(e.push(t),void 0!==n){const e=o.getAttribute(n.toLowerCase()+Jl).split(ec),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Oc:"?"===t[1]?Mc:"@"===t[1]?$c:Ec})}else a.push({type:6,index:r})}for(const t of e)o.removeAttribute(t)}if(mc.test(o.tagName)){const e=o.textContent.split(ec),t=e.length-1;if(t>0){o.textContent=Xl?Xl.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],rc()),Cc.nextNode(),a.push({type:2,index:++r});o.append(e[t],rc())}}}else if(8===o.nodeType)if(o.data===tc)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(ec,e+1));)a.push({type:7,index:r}),e+=ec.length-1}r++}}static createElement(e,t){const n=oc.createElement("template");return n.innerHTML=e,n}}function Tc(e,t,n=e,o){var r,i,s,a;if(t===vc)return t;let l=void 0!==o?null===(r=n._$Co)||void 0===r?void 0:r[o]:n._$Cl;const c=ic(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,o)),void 0!==o?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:n._$Cl=l),void 0!==l&&(t=Tc(e,l._$AS(e,t.values),l,o)),t}class kc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:oc).importNode(n,!0);Cc.currentNode=r;let i=Cc.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new Rc(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new Ac(i,this,e)),this._$AV.push(t),l=o[++a]}s!==(null==l?void 0:l.index)&&(i=Cc.nextNode(),s++)}return Cc.currentNode=oc,r}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Rc{constructor(e,t,n,o){var r;this.type=2,this._$AH=yc,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tc(this,e,t),ic(e)?e===yc||null==e||""===e?(this._$AH!==yc&&this._$AR(),this._$AH=yc):e!==this._$AH&&e!==vc&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):ac(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==yc&&ic(this._$AH)?this._$AA.nextSibling.data=e:this.$(oc.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=_c.createElement(xc(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(n);else{const e=new kc(r,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=wc.get(e.strings);return void 0===t&&wc.set(e.strings,t=new _c(e)),t}T(e){sc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new Rc(this.k(rc()),this.k(rc()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Ec{constructor(e,t,n,o,r){this.type=1,this._$AH=yc,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=yc}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const r=this.strings;let i=!1;if(void 0===r)e=Tc(this,e,t,0),i=!ic(e)||e!==this._$AH&&e!==vc,i&&(this._$AH=e);else{const o=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=Tc(this,o[n+s],t,s),a===vc&&(a=this._$AH[s]),i||(i=!ic(a)||a!==this._$AH[s]),a===yc?e=yc:e!==yc&&(e+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(e)}j(e){e===yc?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Oc extends Ec{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===yc?void 0:e}}const Ic=Xl?Xl.emptyScript:"";class Mc extends Ec{constructor(){super(...arguments),this.type=4}j(e){e&&e!==yc?this.element.setAttribute(this.name,Ic):this.element.removeAttribute(this.name)}}class $c extends Ec{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Tc(this,e,t,0))&&void 0!==n?n:yc)===vc)return;const o=this._$AH,r=e===yc&&o!==yc||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==yc&&(o===yc||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class Ac{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Tc(this,e)}}const Nc=Yl.litHtmlPolyfillSupport;null==Nc||Nc(_c,Rc),(null!==(Kl=Yl.litHtmlVersions)&&void 0!==Kl?Kl:Yl.litHtmlVersions=[]).push("2.7.5");var Pc,Dc;class zc extends ql{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var o,r;const i=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:t;let s=i._$litPart$;if(void 0===s){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;i._$litPart$=s=new Rc(t.insertBefore(rc(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return vc}}zc.finalized=!0,zc._$litElement$=!0,null===(Pc=globalThis.litElementHydrateSupport)||void 0===Pc||Pc.call(globalThis,{LitElement:zc});const Hc=globalThis.litElementPolyfillSupport;null==Hc||Hc({LitElement:zc});(null!==(Dc=globalThis.litElementVersions)&&void 0!==Dc?Dc:globalThis.litElementVersions=[]).push("3.3.2");const Lc=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:o}=t;return{kind:n,elements:o,finisher(t){customElements.define(e,t)}}})(e,t),Gc=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Fc(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Gc(e,t)}var Wc;null===(Wc=window.HTMLSlotElement)||void 0===Wc||Wc.prototype.assignedElements;const Bc=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Uc=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,jc=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Vc;const Zc=new Map;let qc,Kc,Yc;const Xc=new Map;function Qc(e,t){const n=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,r,i]of jc){const s=Math.abs(n);if(s>=o||1e3===o){if(t){if(null==Vc&&(null!=Yc?Vc=Yc.resolvedOptions().locale:null!=Kc?Vc=Kc.resolvedOptions().locale:(Yc=new Intl.RelativeTimeFormat(qc,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Vc=Yc.resolvedOptions().locale)),"en"===Vc||Vc?.startsWith("en-")){return`${Math.round(s/r)}${i}`}return null==Yc&&(Yc=new Intl.RelativeTimeFormat(qc,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Yc.format(Math.round(n/r),e)}return null==Kc&&(Kc=new Intl.RelativeTimeFormat(qc,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Kc.format(Math.round(n/r),e)}}return""}function Jc(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=Zc.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Uc.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Bc))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?qc:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&Zc.set(r,i)}if(null==t||Uc.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=Zc.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?qc:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&Zc.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(Bc,((t,n,o,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return td(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const ed=["th","st","nd","rd"];function td(e){const t=e%100;return`${e}${ed[(t-20)%10]??ed[t]??ed[0]}`}function nd(e,t,n){null==t&&(t="decimal");const o=`${n??""}:${t}`;let r=Xc.get(o);if(null==r){const e={localeMatcher:"best fit",style:t};let i;i=null==n?qc:"system"===n?void 0:[n],r=new Intl.NumberFormat(i,e),Xc.set(o,r)}return r.format(e)}var od=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(od||{});function rd(e){switch(e){case"free+":return"GitLens Free";case"pro":return"GitLens Pro";case"teams":return"GitLens Teams";case"enterprise":return"GitLens Enterprise";default:return"GitLens"}}function id(e,t){return sd(e.plan.effective.expiresOn,t)}function sd(e,t){return null!=e?function(e,t,n){const o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(n){case"days":return Math.floor(o/864e5);case"hours":return Math.floor(o/36e5);case"minutes":return Math.floor(o/6e4);case"seconds":return Math.floor(o/1e3);default:return o}}(Date.now(),new Date(e),t):void 0}function ad(e){return null!=e&&(5===e||1===e||3===e)}function ld(e){return null!=e&&(1===e||3===e)}zl`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const cd=zl`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,dd=zl`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;zl`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${cd}
	}
	a:hover {
		text-decoration: underline;
	}
`;var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,pd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?ud(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&hd(t,n,i),i};let fd=class extends zc{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=bc`<slot></slot>`;return null!=this.href?bc`<a href=${this.href}>${e}</a>`:e}};fd.styles=[dd,zl`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${cd}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}
		`],pd([Fc({type:Boolean,reflect:!0})],fd.prototype,"full",2),pd([Fc()],fd.prototype,"href",2),pd([Fc({reflect:!0})],fd.prototype,"role",1),pd([Fc()],fd.prototype,"appearance",2),pd([Fc({type:Number,reflect:!0})],fd.prototype,"tabIndex",2),fd=pd([Lc("gl-button")],fd);const md=zl`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var gd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,vd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?bd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&gd(t,n,i),i};let yd=class extends zc{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":yc;switch(this.state){case od.VerificationRequired:return bc`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case od.Free:return bc`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day Pro trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case od.FreePreviewTrialExpired:return bc`
					<p>
						Your 3-day Pro preview has ended, start a free Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free Pro Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case od.FreePlusTrialExpired:return bc`
					<p>Your Pro trial has ended, please upgrade to continue to use this on privately hosted repos.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};yd.styles=[md,zl`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],vd([Fc({type:String})],yd.prototype,"appearance",2),vd([Fc({attribute:!1,type:Number})],yd.prototype,"state",2),yd=vd([Lc("gk-feature-gate-plus-state")],yd);var wd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,xd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Cd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&wd(t,n,i),i};let Sd=class extends zc{render(){if(!this.visible||null!=this.state&&ad(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,bc`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===od.Free?yc:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};Sd.styles=zl`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,xd([Fc()],Sd.prototype,"appearance",2),xd([Fc({attribute:!1,type:Number})],Sd.prototype,"state",2),xd([Fc({type:Boolean})],Sd.prototype,"visible",2),Sd=xd([Lc("gk-feature-gate")],Sd);const _d=Ba(Sd,{name:"gk-feature-gate",properties:["state","visible"]});var Td=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Rd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?kd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Td(t,n,i),i};let Ed=class extends zc{constructor(){super(...arguments),this.placement="top end"}render(){const e=ad(this.subscription?.state),t=ld(this.subscription?.state);return bc`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?bc`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return rd("free+");case 1:return`${rd("pro")} (Trial)`;case 3:return`${rd(t??"pro")} (Trial)`;case-1:return"GitLens (Unverified)";case 5:return rd(t??"pro");default:return"GitLens"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!ld(this.subscription?.state))return yc;const e=id(this.subscription,"days")??0;return bc`<span class="badge-trial-left">${e<1?"<1 day":Wa("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case od.VerificationRequired:case od.Free:case od.FreePreviewTrialExpired:return bc`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case od.FreePlusTrialExpired:case od.FreeInPreviewTrial:case od.FreePlusInTrial:return bc`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case od.Paid:return bc`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return yc}}};Ed.styles=[dd,zl`
			:host {
				position: relative;
			}

			:host(:focus) {
				${cd}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],Rd([Fc({reflect:!0})],Ed.prototype,"placement",2),Rd([Fc({attribute:!1})],Ed.prototype,"subscription",2),Ed=Rd([Lc("gk-feature-gate-badge")],Ed);const Od=Ba(Ed,{name:"gk-feature-gate-badge",properties:["placement","subscription"]}),Id={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Md=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,Ad=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?$d(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Md(t,n,i),i};let Nd=class extends zc{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Nd.styles=zl`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,Ad([Fc()],Nd.prototype,"icon",2),Ad([Fc()],Nd.prototype,"modifier",2),Ad([Fc({type:Number})],Nd.prototype,"size",2),Nd=Ad([Lc("code-icon")],Nd);var Pd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,zd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Dd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Pd(t,n,i),i};const Hd=lo`
	<template class="${e=>e.mode}${e=>e.active?" active":""}" role="progressbar">
		<div class="progress-bar"></div>
	</template>
`,Ld=po`
	* {
		box-sizing: border-box;
	}

	:host {
		position: absolute;
		left: 0;
		z-index: 5;
		height: 2px;
		width: 100%;
		overflow: hidden;
	}

	:host([position='bottom']) {
		bottom: 0;
	}

	:host([position='top']) {
		top: 0;
	}

	.progress-bar {
		background-color: var(--vscode-progressBar-background);
		display: none;
		position: absolute;
		left: 0;
		width: 2%;
		height: 2px;
	}

	:host(.active) .progress-bar {
		display: inherit;
	}

	:host(.discrete) .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	:host(.discrete.done) .progress-bar {
		width: 100%;
	}

	:host(.infinite) .progress-bar {
		animation-name: progress;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(100);
		transform: translateZ(0);
	}

	@keyframes progress {
		0% {
			transform: translateX(0) scaleX(1);
		}

		50% {
			transform: translateX(2500%) scaleX(3);
		}

		to {
			transform: translateX(4900%) scaleX(1);
		}
	}
`;let Gd=class extends Dt{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}};zd([Tt({mode:"reflect"})],Gd.prototype,"mode",2),zd([Tt({mode:"boolean"})],Gd.prototype,"active",2),zd([Tt()],Gd.prototype,"position",2),Gd=zd([zt({name:"progress-indicator",template:Hd,styles:Ld})],Gd);var Fd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,Bd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Wd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Fd(t,n,i),i};const Ud=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),jd=lo`
	<template role="search">
		<pop-menu ${Fr("popmenu")} style="margin-left: -0.25rem;">
			<button
				type="button"
				class="action-button"
				slot="trigger"
				aria-label="${e=>e.label}"
				title="${e=>e.label}"
			>
				<code-icon icon="search" aria-hidden="true"></code-icon>
				<code-icon class="action-button__more" icon="chevron-down" aria-hidden="true"></code-icon>
			</button>
			<menu-list slot="content">
				<menu-label>Search by</menu-label>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("@me")}">
						My changes <small>@me</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("message:")}">
						Message <small>message: or =:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("author:")}">
						Author <small>author: or @:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("commit:")}">
						Commit SHA <small>commit: or #:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("file:")}">
						File <small>file: or ?:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("change:")}">
						Change <small>change: or ~:</small>
					</button>
				</menu-item>
			</menu-list>
		</pop-menu>
		<div class="field">
			<input
				${Fr("input")}
				id="search"
				part="search"
				type="text"
				spellcheck="false"
				placeholder="${e=>e.placeholder}"
				:value="${e=>e.value}"
				aria-valid="${e=>!e.errorMessage}"
				aria-describedby="${e=>""!==e.errorMessage||null!=e.helpType?"help-text":""}"
				@input="${(e,t)=>e.handleInput(t.event)}"
				@keydown="${(e,t)=>e.handleShortcutKeys(t.event)}"
				@keyup="${(e,t)=>e.handleKeyup(t.event)}"
				@click="${(e,t)=>e.handleInputClick(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			/>
			<div class="message" id="help-text" aria-live="polite">
				${Ls((e=>""!==e.errorMessage),lo`${e=>e.errorMessage}${e=>e.helpType?lo`<br />`:""}`)}
				${Ls((e=>"message:"===e.helpType),lo`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${Ls((e=>"author:"===e.helpType),lo`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${Ls((e=>"commit:"===e.helpType),lo`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${Ls((e=>"file:"===e.helpType),lo`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${Ls((e=>"change:"===e.helpType),lo`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
			</div>
		</div>
		<div class="controls">
			<button
				class="control${e=>e.value?"":" is-hidden"}"
				type="button"
				role="button"
				aria-label="Clear"
				title="Clear"
				@click="${(e,t)=>e.handleClear(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="close"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match All"
				title="Match All"
				aria-checked="${e=>e.matchAll}"
				@click="${(e,t)=>e.handleMatchAll(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="whole-word"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				title="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				?disabled="${e=>!e.matchRegex}"
				aria-checked="${e=>e.matchCaseOverride}"
				@click="${(e,t)=>e.handleMatchCase(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Use Regular Expression"
				title="Use Regular Expression"
				aria-checked="${e=>e.matchRegex}"
				@click="${(e,t)=>e.handleMatchRegex(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="regex"></code-icon>
			</button>
		</div>
	</template>
`,Vd=po`
	* {
		box-sizing: border-box;
	}

	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		position: relative;

		flex: auto 1 1;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		width: 3.2rem;
		height: 2.4rem;
		color: var(--vscode-input-foreground);
		cursor: pointer;
		border-radius: 3px;
	}
	label:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	label:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.icon-small {
		font-size: 1rem;
	}

	.field {
		position: relative;
		flex: auto 1 1;
	}

	input {
		width: 100%;
		height: 2.4rem;
		background-color: var(--vscode-input-background);
		color: var(--vscode-input-foreground);
		border: 1px solid var(--vscode-input-border);
		border-radius: 0.25rem;
		padding: 0 6.6rem 1px 0.4rem;
		font-family: inherit;
		font-size: inherit;
	}
	input:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	input::placeholder {
		color: var(--vscode-input-placeholderForeground);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input[aria-describedby='help-text'] {
		border-color: var(--vscode-inputValidation-infoBorder);
	}
	input[aria-describedby='help-text']:focus {
		outline-color: var(--vscode-inputValidation-infoBorder);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[aria-valid='false'] {
		border-color: var(--vscode-inputValidation-errorBorder);
	}
	input[aria-valid='false']:focus {
		outline-color: var(--vscode-inputValidation-errorBorder);
	}

	.message {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		transform: translateY(-0.1rem);
		z-index: 1000;
		background-color: var(--vscode-inputValidation-infoBackground);
		border: 1px solid var(--vscode-inputValidation-infoBorder);
		color: var(--vscode-input-foreground);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	input[aria-valid='false'] + .message {
		background-color: var(--vscode-inputValidation-errorBackground);
		border-color: var(--vscode-inputValidation-errorBorder);
	}

	input:not([aria-describedby='help-text']:focus) + .message {
		display: none;
	}

	.controls {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.1rem;
	}

	button {
		padding: 0;
		color: var(--vscode-input-foreground);
		border: 1px solid transparent;
		background: none;
	}
	button:focus:not([disabled]) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	button:not([disabled]) {
		cursor: pointer;
	}

	.control {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.control:hover:not([disabled]):not([aria-checked='true']) {
		background-color: var(--vscode-inputOption-hoverBackground);
	}
	.control[disabled] {
		opacity: 0.5;
	}
	.control[disabled][aria-checked='true'] {
		opacity: 0.8;
	}
	.control[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.control.is-hidden {
		display: none;
	}

	.action-button {
		position: relative;
		appearance: none;
		font-family: inherit;
		font-size: 1.2rem;
		line-height: 2.2rem;
		// background-color: var(--color-graph-actionbar-background);
		background-color: transparent;
		border: none;
		color: inherit;
		color: var(--color-foreground);
		padding: 0 0.75rem;
		cursor: pointer;
		border-radius: 3px;
		height: auto;

		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		gap: 0.5rem;
		max-width: fit-content;
	}

	.action-button[disabled] {
		pointer-events: none;
		cursor: default;
		opacity: 1;
	}

	.action-button:hover {
		background-color: var(--color-graph-actionbar-selectedBackground);
		color: var(--color-foreground);
		text-decoration: none;
	}

	.action-button[aria-checked] {
		border: 1px solid transparent;
	}

	.action-button[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.action-button code-icon,
	.action-button .codicon[class*='codicon-'],
	.action-button .glicon[class*='glicon-'] {
		line-height: 2.2rem;
		vertical-align: bottom;
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	.action-button__more::before {
		margin-left: -0.25rem;
	}

	menu-item {
		padding: 0 0.5rem;
	}

	menu-list {
		padding-bottom: 0.5rem;
	}

	.menu-button {
		display: block;
		width: 100%;
		padding: 0.1rem 0.6rem 0 0.6rem;
		line-height: 2.2rem;
		text-align: left;
		color: var(--vscode-menu-foreground);
		border-radius: 3px;
	}

	.menu-button:hover {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}
`;let Zd=class extends Dt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedEmitSearch=fe(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popmenu.close()}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=fe(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){const e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){const n=/(?:^|[\b\s]*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)(?:"[^"]*"?|\w*))(?:$|[\b\s])/gi;let o;for(;;){if(o=n.exec(t),null==o)break;const[,r,i]=o;if(e>o.index&&e<=o.index+r.trim().length)return void(this.helpType=Ud.get(i))}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){const t=e.target?.value;this.value=t,this.updateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){const t="ArrowDown"===e.key?1:-1,n=this.searchHistoryPos+t;if(n>-1&&n<this.searchHistory.length){this.searchHistoryPos=n;const e=this.searchHistory[n];e!==this.value&&(this.value=e,this.updateHelpText(),this.debouncedEmitSearch())}}return!1}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame((()=>{this.updateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()}))}emitSearch(){const e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){const t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};Bd([lt],Zd.prototype,"errorMessage",2),Bd([lt],Zd.prototype,"helpType",2),Bd([Tt],Zd.prototype,"label",2),Bd([Tt],Zd.prototype,"placeholder",2),Bd([Tt],Zd.prototype,"value",2),Bd([Tt({mode:"boolean"})],Zd.prototype,"matchAll",2),Bd([Tt({mode:"boolean"})],Zd.prototype,"matchCase",2),Bd([Tt({mode:"boolean"})],Zd.prototype,"matchRegex",2),Bd([ct],Zd.prototype,"matchCaseOverride",1),Zd=Bd([zt({name:"search-input",template:jd,styles:Vd})],Zd);var qd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,Yd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Kd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&qd(t,n,i),i};const Xd=lo`<template>
	<search-input
		${Fr("searchInput")}
		id="search-input"
		:errorMessage="${e=>e.errorMessage}"
		label="${e=>e.label}"
		placeholder="${e=>e.placeholder}"
		matchAll="${e=>e.matchAll}"
		matchCase="${e=>e.matchCase}"
		matchRegex="${e=>e.matchRegex}"
		value="${e=>e.value}"
		@previous="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("previous")}}"
		@next="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("next")}}"
	></search-input>
	<div class="search-navigation" aria-label="Search navigation">
		<span class="count${e=>e.total<1&&e.valid&&e.resultsLoaded?" error":""}">
			${Ls((e=>e.searching),lo`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${Ls((e=>!e.searching&&e.total<1),lo`${e=>e.formattedLabel}`)}
			${Ls((e=>!e.searching&&e.total>0),lo`<span aria-current="step">${e=>e.step}</span> of
					<span
						class="${e=>e.resultsHidden?"sr-hidden":""}"
						title="${e=>e.resultsHidden?"Some search results are hidden or unable to be shown on the Commit Graph":""}"
						>${e=>e.total}${e=>e.more?"+":""}</span
					><span class="sr-only"> ${e=>e.formattedLabel}</span>`)}
		</span>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handlePrevious(t.event)}"
		>
			<code-icon
				icon="arrow-up"
				aria-label="Previous Match (Shift+Enter)
First Match (Shift+Click)"
				title="Previous Match (Shift+Enter)
First Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleNext(t.event)}"
		>
			<code-icon
				icon="arrow-down"
				aria-label="Next Match (Enter)
Last Match (Shift+Click)"
				title="Next Match (Enter)
Last Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleOpenInView(t.event)}"
		>
			<code-icon
				icon="link-external"
				aria-label="Show Results in Side Bar"
				title="Show Results in Side Bar"
			></code-icon>
		</button>
	</div>
	<progress-indicator active="${e=>e.searching}"></progress-indicator>
</template>`,Qd=po`
	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: var(--color-foreground);
		flex: auto 1 1;
		position: relative;
	}
	:host(:focus) {
		outline: 0;
	}
	progress-indicator {
		top: -4px;
	}

	.search-navigation {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
		color: var(--color-foreground);
	}
	.search-navigation:focus {
		outline: 0;
	}

	.count {
		flex: none;
		margin-right: 0.4rem;
		font-size: 1.2rem;
		min-width: 10ch;
	}

	.count.error {
		color: var(--vscode-errorForeground);
	}

	.button {
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		color: inherit;
		border: none;
		border-radius: 3px;
		background: none;
		text-align: center;
	}
	.button[disabled] {
		color: var(--vscode-disabledForeground);
	}
	.button:focus {
		background-color: var(--vscode-toolbar-activeBackground);
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.button:not([disabled]) {
		cursor: pointer;
	}
	.button:hover:not([disabled]) {
		color: var(--vscode-foreground);
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.button > code-icon[icon='arrow-up'] {
		transform: translateX(-0.1rem);
	}

	.sr-hidden {
		color: var(--vscode-errorForeground);
	}

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;let Jd=class extends Dt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return Wa(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=Me.on(window,"keydown",(e=>this.handleShortcutKeys(e)))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){const t={direction:e};this.$emit("navigate",t)}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey)return"F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&Da?(e.preventDefault(),e.stopImmediatePropagation(),void this.navigate(e.shiftKey?"previous":"next")):void("f"===e.key&&(e.metaKey&&!e.ctrlKey&&Da||e.ctrlKey&&!Da)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus()))}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};Yd([lt],Jd.prototype,"errorMessage",2),Yd([Tt],Jd.prototype,"label",2),Yd([Tt],Jd.prototype,"placeholder",2),Yd([Tt],Jd.prototype,"value",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"matchAll",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"matchCase",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"matchRegex",2),Yd([Tt({converter:Id})],Jd.prototype,"total",2),Yd([Tt({converter:Id})],Jd.prototype,"step",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"more",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"searching",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"valid",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"resultsHidden",2),Yd([Tt],Jd.prototype,"resultsLabel",2),Yd([Tt({mode:"boolean"})],Jd.prototype,"resultsLoaded",2),Yd([ct],Jd.prototype,"formattedLabel",1),Yd([ct],Jd.prototype,"hasResults",1),Jd=Yd([zt({name:"search-box",template:Xd,styles:Qd})],Jd);const eh=Ba(Jd,{events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});const th=2**30,nh=new Map;let oh=0;function rh(e){nh.delete(e)}function ih(){return oh===th&&(oh=0),++oh}const sh="",ah=Symbol("logInstanceNameFn");function lh(e){return function(e,t=!1){let n,o,r,i,s,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:n,condition:o,enter:r,exit:i,prefix:s,sanitize:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e);l>0&&(d=!0,h=!0);h&&(c=!0);const u=t?Oe.debug.bind(Oe):Oe.log.bind(Oe),p=Oe.warn.bind(Oe);return(e,f,m)=>{let g,b;if("function"==typeof m.value?(g=m.value,b="value"):"function"==typeof m.get&&(g=m.get,b="get"),null==g||null==b)throw new Error("Not supported");const v=function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(xe,ge)||t,t=t.slice(0,t.indexOf(ve));let n=t.indexOf(ye),o=t.indexOf(we);n=n>=0?n+1:0,o=o>0?o:t.indexOf(be),t=t.slice(n,o),t=`(${t})`;const r=Ce.exec(t);return null!=r?r[1].split(me).map((e=>e.trim().replace(Se,ge))):[]}(g);m[b]=function(...m){const b=ih();if(!Oe.isDebugging&&!Oe.enabled(Te.Debug)&&(!Oe.enabled(Te.Info)||t)||null!=o&&!o(...m))return g.apply(this,m);let y;null!=this?(y=function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??Ee}else t=e.constructor?.name??Ee;const n=t.indexOf("_");return-1===n?t:t.substr(n+1)}(this),this.constructor?.[ah]&&(y=e.constructor[ah](this,y))):y=sh;let w,C=`${c?`[${b.toString(16).padStart(5)}] `:sh}${y?`${y}.`:sh}${f}`;null!=s&&(C=s({id:b,instance:this,instanceName:y,name:f,prefix:C},...m)),c&&(w={scopeId:b,prefix:C},function(e,t){nh.set(e,t)}(b,w));const x=null!=r?r(...m):sh;let S;if(!1===n||0===m.length)S=sh,d||u(`${C}${x}`);else{let e;S="";let o,r,i,s=-1;for(i of m){if(o=v[++s],e=n?.[s],null!=e){if("boolean"==typeof e)continue;if(S.length>0&&(S+=", "),"string"==typeof e){S+=e;continue}r=String(e(i))}else S.length>0&&(S+=", "),r=Oe.toLoggable(i,a);S+=o?`${o}=${r}`:r}d||u(`${C}${x}${S&&(t||Oe.enabled(Te.Debug)||Oe.isDebugging)?`(${S})`:sh}`)}if(d||h||null!=i){const e=h?La():void 0,n=t=>{const n=void 0!==e?` [${Fa(e)}ms]`:sh;d?Oe.error(t,`${C}${x}${S?`(${S})`:sh}`,`failed${w?.exitDetails?w.exitDetails:sh}${n}`):Oe.error(t,C,`failed${w?.exitDetails?w.exitDetails:sh}${n}`),c&&rh(b)};let o;try{o=g.apply(this,m)}catch(e){throw n(e),e}const r=n=>{let o,r,s,a;if(null!=e?(o=Fa(e),o>_e?(r=p,s=` [*${o}ms] (slow)`):(r=u,s=` [${o}ms]`)):(s=sh,r=u),null!=i)if("function"==typeof i)try{a=i(n)}catch(e){a=`@log.exit error: ${e}`}else!0===i&&(a=`returned ${Oe.toLoggable(n)}`);else a="completed";d?(0===l||o>l)&&r(`${C}${x}${S&&(t||Oe.enabled(Te.Debug)||Oe.isDebugging)?`(${S})`:sh} ${a}${w?.exitDetails?w.exitDetails:sh}${s}`):r(`${C}${S&&(t||Oe.enabled(Te.Debug)||Oe.isDebugging)?`(${S})`:sh} ${a}${w?.exitDetails?w.exitDetails:sh}${s}`),c&&rh(b)};if(null!=o&&((_=o)instanceof Promise||"function"==typeof _?.then)){o.then(r).catch(n)}else r(o);return o}var _;return g.apply(this,m)}}}(e,!0)}function*ch(e,t){for(const n of e)yield*t(n)}function*dh(...e){for(const t of e)for(const e of t)yield e}var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,ph=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?uh(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&hh(t,n,i),i};const fh=lo`<template>
	<div id="spinner" ${Fr("spinner")}><code-icon icon="loading" modifier="spin"></code-icon></div>
	<div id="chart" ${Fr("chart")}></div>
	<div
		class="legend"
		title="${e=>"lines"===e.dataType?"Showing lines changed per day":"Showing commits per day"}"
	>
		<code-icon icon="${e=>"lines"===e.dataType?"request-changes":"git-commit"}"></code-icon>
	</div>
</template>`,mh=po`
	:host {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 24px;
		height: 40px;
		background: var(--color-background);
	}

	#chart {
		height: 100%;
		width: calc(100% - 1rem);
		overflow: hidden;
		position: initial !important;
	}

	#spinner {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	#spinner[aria-hidden='true'] {
		display: none;
	}

	.legend {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		z-index: 1;
		opacity: 0.7;
		cursor: help;
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb-chart {
		width: 100%;
		height: 100%;
	}

	.bb-event-rect {
		height: calc(100% + 2px);
		transform: translateY(-5px);
	}

	/*-- Grid --*/
	.bb-grid {
		pointer-events: none;
	}

	.bb-xgrid-focus line {
		stroke: var(--color-graph-minimap-focusLine);
	}

	/*-- Line --*/
	.bb path,
	.bb line {
		fill: none;
	}

	/*-- Point --*/
	.bb-circle._expanded_ {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 1px;
	}

	.bb-selected-circle {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 2px;
	}

	/*-- Bar --*/
	.bb-bar {
		stroke-width: 0;
	}
	.bb-bar._expanded_ {
		fill-opacity: 0.75;
	}

	/*-- Regions --*/

	.bb-regions {
		pointer-events: none;
	}

	.bb-region > rect:not([x]) {
		display: none;
	}

	.bb-region.visible-area {
		fill: var(--color-graph-minimap-visibleAreaBackground);
		/* transform: translateY(-4px); */
	}
	.bb-region.visible-area > rect {
		height: 100%;
	}

	.bb-region.marker-result {
		fill: var(--color-graph-minimap-marker-highlights);
		transform: translateX(-1px);
		z-index: 10;
	}
	.bb-region.marker-result > rect {
		width: 2px;
		height: 100%;
	}

	.bb-region.marker-head {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translateX(-1px);
	}
	.bb-region.marker-head > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-head-arrow-left {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-5px, -1px) skewX(45deg);
	}
	.bb-region.marker-head-arrow-left > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-head-arrow-right {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(1px, -1px) skewX(-45deg);
	}
	.bb-region.marker-head-arrow-right > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-upstream {
		fill: var(--color-graph-minimap-marker-upstream);
		stroke: var(--color-graph-minimap-marker-upstream);
		transform: translateX(-1px);
	}
	.bb-region.marker-upstream > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-branch {
		fill: var(--color-graph-minimap-marker-local-branches);
		stroke: var(--color-graph-minimap-marker-local-branches);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-branch > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-remote {
		fill: var(--color-graph-minimap-marker-remote-branches);
		stroke: var(--color-graph-minimap-marker-remote-branches);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-remote > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-stash {
		fill: var(--color-graph-minimap-marker-stashes);
		stroke: var(--color-graph-minimap-marker-stashes);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-stash > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-tag {
		fill: var(--color-graph-minimap-marker-tags);
		stroke: var(--color-graph-minimap-marker-tags);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-tag > rect {
		width: 3px;
		height: 3px;
	}

	/*-- Zoom region --*/
	/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

	/*-- Brush --*/
	/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

	/*-- Button --*/
	/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

	/*-- Tooltip --*/
	.bb-tooltip-container {
		top: unset !important;
		z-index: 10;
		user-select: none;
		min-width: 300px;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
	}

	.bb-tooltip .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.bb-tooltip .header--title {
		font-weight: 600;
	}

	.bb-tooltip .header--description {
		font-weight: normal;
		font-style: italic;
	}

	.bb-tooltip .changes {
		margin: 0.5rem 0;
	}

	.bb-tooltip .refs {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}
	.bb-tooltip .refs:empty {
		margin: 0;
	}

	.bb-tooltip .refs .branch {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-branchBackground);
		border: 1px solid var(--color-graph-minimap-tip-branchBorder);
		color: var(--color-graph-minimap-tip-branchForeground);
	}
	.bb-tooltip .refs .branch.current {
		background-color: var(--color-graph-minimap-tip-headBackground);
		border: 1px solid var(--color-graph-minimap-tip-headBorder);
		color: var(--color-graph-minimap-tip-headForeground);
	}
	.bb-tooltip .refs .remote {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-remoteBackground);
		border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
		color: var(--color-graph-minimap-tip-remoteForeground);
	}
	.bb-tooltip .refs .remote.current {
		background-color: var(--color-graph-minimap-tip-upstreamBackground);
		border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
		color: var(--color-graph-minimap-tip-upstreamForeground);
	}
	.bb-tooltip .refs .stash {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-stashBackground);
		border: 1px solid var(--color-graph-minimap-tip-stashBorder);
		color: var(--color-graph-minimap-tip-stashForeground);
	}
	.bb-tooltip .refs .tag {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-tagBackground);
		border: 1px solid var(--color-graph-minimap-tip-tagBorder);
		color: var(--color-graph-minimap-tip-tagForeground);
	}
`,gh=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"];let bh=class extends Dt{constructor(){super(...arguments),this.dataType="commits"}activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,n){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),n&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout((()=>this.loadChart()),150)}dataTypeChanged(){this.dataChanged()}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){try{return this._chart?.internal}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();const n=this.getData(e);if(null==n)return;const o=this.getInternalChart();if(null!=o&&(o.showGridFocus([n]),!t)){const{index:e}=n;this._chart.$.main.selectAll(`.bb-shape-${e}`).each((function(t){o.toggleShape?.(this,t,e)}))}}unselect(e,t=!1){if(t)this.getInternalChart()?.hideGridFocus();else if(null!=e){const t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find((t=>("number"==typeof t.x?t.x:t.x.getTime())===e))}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){const e=ch(this.markers,(([e,t])=>ch(t,(t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]))));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=dh([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=dh(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort(((e,t)=>gh.indexOf(t.class??"")-gh.indexOf(e.class??"")))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(const n of e)yield t(n)}(e.keys(),(e=>({axis:"x",start:e,end:e,class:"marker-result"})))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then((()=>this._loading=void 0)))}async loadChartCore(){if(!this.data?.size)return this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),void(this._chart=void 0);const e="lines"===this.dataType,t=[],n=[],r=this.data.keys(),i=r[Symbol.iterator]().next().value;const s=new Date,a=new Date(i);let l,c,d,h,u,p=0;const f=s;for(;f>=a;)l=vh(f),c=this.data.get(l),t.push(l),e?(d=c?.activity?.additions??0,u=c?.activity?.deletions??0,h=d+u):h=c?.commits??0,p=Math.max(p,h),n.push(h),f.setDate(f.getDate()-1);const m=this.getAllRegions(),g=[];let b=0,v=0;for(const e of n)0!==e&&(g.push(e),b+=e,v+=e**2);g.sort(((e,t)=>e-t));const y=g.length,w=b/y,C=Math.sqrt(v/y-w**2);let x=-1;for(let e=y-1;e>=0;e--)if(Math.abs((g[e]-w)/C)<=3){x=e;break}const S=g[Math.floor(.25*y)],_=g[Math.floor(.75*y)],T=g[y-1],k=_+3*(_-S),R=g[x],E=Math.floor(Math.min(T,k>T-k?R:k+(R-k)/2)+.1*k);if(null==this._chart){const{bb:e,selection:r,spline:i,zoom:s}=await o.e(490).then(o.bind(o,1893));this._chart=e.generate({bindto:this.chart,data:{x:"date",axes:{activity:"y"},columns:[["date",...t],["activity",...n]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;const t=new Date(e.x),n=vh(t),o=this.searchResults?.get(n)?.sha??this.data?.get(n)?.sha;queueMicrotask((()=>{this.$emit("selected",{date:t,sha:o})}))},selection:{enabled:r(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:i()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:E}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:m,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,n,o)=>{const r=new Date(e[0].x),i=this.data?.get(vh(r)),s=this.markers?.get(vh(r));let a;s?.length&&(a=function(e,t){return e.reduce(((e,n)=>{const o=t(n),r=e.get(o);return void 0===r?e.set(o,[n]):r.push(n),e}),new Map)}(s,(e=>e.type)));const l=a?.get("stash")?.length??0,c="lines"===this.dataType;return`<div class="bb-tooltip">\n\t\t\t\t\t\t\t<div class="header">\n\t\t\t\t\t\t\t\t<span class="header--title">${Jc(r,"MMMM Do, YYYY")}</span>\n\t\t\t\t\t\t\t\t<span class="header--description">(${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(Qc(r))})</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="changes">\n\t\t\t\t\t\t\t\t<span>${0===(i?.commits??0)?"No commits":`${Wa("commit",i?.commits??0,{format:e=>nd(e),zero:"No"})}${c?`, ${Wa("file",i?.files??0,{format:e=>nd(e),zero:"No"})}, ${Wa("line",(i?.activity?.additions??0)+(i?.activity?.deletions??0),{format:e=>nd(e),zero:"No"})} changed`:""}`}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t${null!=a?`\n\t\t\t\t\t\t\t<div class="refs">${l?`<span class="stash">${Wa("stash",l,{plural:"stashes"})}</span>`:""}${a?.get("branch")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1))).map((e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`)).join("")??""}</div>\n\t\t\t\t\t\t\t<div class="refs">${a?.get("remote")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1)))?.map((e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`)).join("")??""}${a?.get("tag")?.map((e=>`<span class="tag">${e.name}</span>`)).join("")??""}</div>`:""}\n\t\t\t\t\t\t</div>`},grouped:!0,position:(e,t,n,o,r)=>{let{x:i}=r;const s=o.getBoundingClientRect();return i+t>s.right&&(i=s.right-t),{top:0,left:i}}},transition:{duration:0},zoom:{enabled:s(),rescale:!1,type:"wheel",onzoom:fe((()=>this.activeDayChanged()),250)},onafterinit:function(){const e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();const t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();const n=this.$.main.selectAll(".bb-grid").node();try{n?.removeAttribute("clip-path")}catch{}const o=this.$.main.selectAll(".bb-regions").node(),r=this.$.main.selectAll(".bb-chart").node();null!=o&&null!=r&&r.insertAdjacentElement("afterend",o)}})}else this._chart.load({columns:[["date",...t],["activity",...n]]}),this._chart.axis.max({y:E}),this._chart.regions(m);this.spinner.setAttribute("aria-hidden","true"),this.activeDayChanged()}};function vh(e){return new Date(e).setHours(0,0,0,0)}ph([lt],bh.prototype,"activeDay",2),ph([lt],bh.prototype,"data",2),ph([lh({singleLine:!0})],bh.prototype,"dataChanged",1),ph([lt],bh.prototype,"dataType",2),ph([lt],bh.prototype,"markers",2),ph([lt],bh.prototype,"searchResults",2),ph([lt],bh.prototype,"visibleDays",2),ph([lh({singleLine:!0})],bh.prototype,"loadChartCore",1),bh=ph([zt({name:"graph-minimap",template:fh,styles:mh})],bh);const yh=Ba(bh,{events:{onSelected:"selected"}}),wh=e=>(t,n)=>function(e,t=Ha.Absolute,n="short+short",o){switch(o){case je.CommitDateTimeSources.Tooltip:return`${Jc(e,n)} (${Qc(e)})`;case je.CommitDateTimeSources.RowEntry:default:return t===Ha.Relative?Qc(e):Jc(e,n)}}(t,e?.dateStyle,e?.dateFormat,n),Ch=(()=>{const t={};return["head","remote","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon icon--${n}`})})),["upstream-ahead","upstream-behind"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon mini-icon icon--${n}`})})),t.settings=(0,e.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),t})(),xh=e=>Ch[e],Sh=(()=>{switch(za?"web-windows":Da?"web-macOS":Pa?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function _h({subscriber:n,nonce:o,state:r,onChooseRepository:i,onColumnsChange:s,onDimMergeCommits:a,onDoubleClickRef:l,onDoubleClickRow:c,onEnsureRowPromise:d,onMissingAvatars:h,onMissingRefsMetadata:u,onMoreRows:p,onRefsVisibilityChange:f,onSearch:m,onSearchPromise:g,onSearchOpenInView:b,onSelectionChange:v,onExcludeType:y,onIncludeOnlyRef:w,onUpdateGraphConfiguration:C}){const x=(0,e.useRef)(null),[S,_]=(0,e.useState)(r.rows??[]),[T,k]=(0,e.useState)(r.rowsStats),[R,E]=(0,e.useState)(r.rowsStatsLoading),[O,P]=(0,e.useState)(r.avatars),[D,B]=(0,e.useState)(r.downstreams??{}),[V,Z]=(0,e.useState)(r.refsMetadata),[q,K]=(0,e.useState)(r.repositories??[]),[Y,X]=(0,e.useState)(q.find((e=>e.path===r.selectedRepository))),[Q,J]=(0,e.useState)(r.branchState),[ee,te]=(0,e.useState)(r.selectedRows),[ne,oe]=(0,e.useState)(r.activeRow),[re,ie]=(0,e.useState)(r.activeDay),[se,ae]=(0,e.useState)(r.visibleDays),[le,ce]=(0,e.useState)(r.config),[de,he]=(0,e.useState)(r.columns),[ue,pe]=(0,e.useState)(r.excludeRefs),[fe,me]=(0,e.useState)(r.excludeTypes),[ge,be]=(0,e.useState)(r.includeOnlyRefs),[ve,ye]=(0,e.useState)(r.context),[we,Ce]=(0,e.useState)(r.paging?.hasMore??!1),[xe,Se]=(0,e.useState)(r.loading),[_e,Te]=(0,e.useState)(r.theming),[ke,Re]=(0,e.useState)(r.branchName),[Ee,Oe]=(0,e.useState)(r.lastFetched),[Ie,Me]=(0,e.useState)(r.windowFocused),[$e,Ae]=(0,e.useState)(r.allowed??!1),[Ne,Pe]=(0,e.useState)(r.subscription),De=(0,e.useRef)(null),[ze,He]=(0,e.useState)(void 0),{results:Le,resultsError:Ge}=Oh(r),[Fe,We]=(0,e.useState)(Le),[Be,Ue]=(0,e.useState)(Ge),[Ze,qe]=(0,e.useState)(!1),[Ke,Ye]=(0,e.useState)(!1),[Xe,Qe]=(0,e.useState)(r.workingTreeStats??{added:0,modified:0,deleted:0}),Je=(0,e.useRef)(void 0),et=(0,e.useRef)(new Set),tt=(0,e.useRef)(new Set);function nt(e,t,n){switch(n&&Te(e.theming),t){case"didChangeTheme":n||Te(e.theming);break;case $:P(e.avatars);break;case z:Me(e.windowFocused);break;case A:Z(e.refsMetadata);break;case N:he(e.columns),ye(e.context);break;case L:_(e.rows??[]),k(e.rowsStats),E(e.rowsStatsLoading),te(e.selectedRows),P(e.avatars),B(e.downstreams??{}),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),Se(e.loading);break;case G:k(e.rowsStats),E(e.rowsStatsLoading);break;case U:{const{results:t,resultsError:n}=Oh(e);Ue(n),We(t),te(e.selectedRows),Ye(!1);break}case I:ce(e.config);break;case F:te(e.selectedRows);break;case H:pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs);break;case M:Ae(e.allowed??!1),Pe(e.subscription);break;case W:Qe(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case j:Oe(e.lastFetched);break;default:{Ae(e.allowed??!1),n||Te(e.theming),Re(e.branchName),Oe(e.lastFetched),he(e.columns),_(e.rows??[]),k(e.rowsStats),E(e.rowsStatsLoading),Qe(e.workingTreeStats??{added:0,modified:0,deleted:0}),ce(e.config),te(e.selectedRows),pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs),ye(e.context),P(e.avatars??{}),B(e.downstreams??{}),J(e.branchState),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),K(e.repositories??[]),X(q.find((t=>t.path===e.selectedRepository))),Pe(e.subscription);const{results:t,resultsError:o}=Oh(e);Ue(o),We(t),Se(e.loading);break}}}(0,e.useEffect)((()=>n?.(nt)),[]);const ot=e=>{if("Enter"===e.key||" "===e.key){const t=Eh(ne??r.activeRow)?.id;if(null==t)return;const n=x.current?.graphContainerRef.current;if(!e.composedPath().some((e=>e===n)))return;const o=S.find((e=>e.sha===t));if(null==o)return;c?.(o,"Enter"!==e.key)}};(0,e.useEffect)((()=>(window.addEventListener("keydown",ot),()=>{window.removeEventListener("keydown",ot)})),[ne]);const rt=(0,e.useMemo)((()=>{if(!le?.minimap)return;const e="lines"===(le?.minimapDataType??"commits");if(e&&null==T)return;const t=new Map,n=new Map,o=le?.minimapMarkerTypes??[];let r,i,s,a,l,c,d,h,u,p,f={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let m=S.length-1;m>=0;m--)h=S[m],r=Ih(h.date),r!==i&&(i=r,f={head:void 0,branch:void 0,remote:void 0,tag:void 0}),h.heads?.length&&(o.includes("head")||o.includes("localBranches"))&&(f.branch=h.sha,a=[],h.heads.forEach((e=>{e.isCurrentHead&&(f.head=h.sha),(o.includes("localBranches")||o.includes("head")&&e.isCurrentHead)&&a.push({type:"branch",name:e.name,current:e.isCurrentHead&&o.includes("head")})})),s=n.get(r),null==s?n.set(r,a):s.push(...a)),h.remotes?.length&&(o.includes("upstream")||o.includes("remoteBranches")||o.includes("localBranches"))&&(f.remote=h.sha,l=[],h.remotes.forEach((e=>{let t=!1;const n=D?.[`${e.owner}/${e.name}`]?.length;e.current&&(f.remote=h.sha,t=!0),(o.includes("remoteBranches")||o.includes("upstream")&&t||o.includes("localBranches")&&n)&&l.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&o.includes("upstream")})})),s=n.get(r),null==s?n.set(r,l):s.push(...l)),"stash-node"===h.type&&o.includes("stashes")&&(c={type:"stash",name:h.message},s=n.get(r),null==s?n.set(r,[c]):s.push(c)),h.tags?.length&&o.includes("tags")&&(f.tag=h.sha,d=h.tags.map((e=>({type:"tag",name:e.name}))),s=n.get(r),null==s?n.set(r,d):s.push(...d)),u=t.get(r),null==u?e?(p=T[h.sha],null!=p&&(u={activity:{additions:p.additions,deletions:p.deletions},commits:1,files:p.files,sha:h.sha},t.set(r,u))):(u={commits:1,sha:h.sha},t.set(r,u)):(u.commits++,u.sha=f.head??f.branch??f.remote??f.tag??u.sha,e&&(p=T[h.sha],null!=p&&(null==u.activity?u.activity={additions:p.additions,deletions:p.deletions}:(u.activity.additions+=p.additions,u.activity.deletions+=p.deletions),u.files=(u.files??0)+p.files)));return{stats:t,markers:n}}),[S,T,D,le?.minimap,le?.minimapDataType,le?.minimapMarkerTypes]),it=(0,e.useMemo)((()=>{if(!le?.minimap||!le.minimapMarkerTypes?.includes("highlights"))return;const e=new Map;if(null!=Fe?.ids){let t,n,o,r;for([n,o]of Object.entries(Fe.ids))t=Ih(o.date),r=e.get(t),null==r&&e.set(t,{type:"search-result",sha:n})}return e}),[Fe,le?.minimap,le?.minimapMarkerTypes]),st=e=>{if(null==le?.minimapMarkerTypes)return;const t=e.target,n=t.value;if(t.checked){if(!le.minimapMarkerTypes.includes(n)){const e=[...le.minimapMarkerTypes,n];ce({...le,minimapMarkerTypes:e}),C?.({minimapMarkerTypes:e})}}else{const e=le.minimapMarkerTypes.indexOf(n);if(-1!==e){const t=[...le.minimapMarkerTypes];t.splice(e,1),ce({...le,minimapMarkerTypes:t}),C?.({minimapMarkerTypes:t})}}};(0,e.useEffect)((()=>{null==Be&&null!=Fe&&0!==Fe.count&&null!=ze&&De.current?.logSearch(ze)}),[Fe]);const at=(0,e.useMemo)((()=>{if(null==Fe?.ids||!ze?.query)return 0;const e=Eh(ne)?.id;let t=e?Fe.ids[e]?.i:void 0;return null==t&&([t]=Th(Fe,ze,ne)),t<1?1:t+1}),[ne,Fe]),lt=(0,e.useMemo)((()=>null==ge||0===Object.keys(ge).length),[ge]),ct=(0,e.useMemo)((()=>!lt||(!!le?.dimMergeCommits||null!=fe&&Object.values(fe).includes(!0))),[fe,lt,le?.dimMergeCommits]),dt=async e=>{if(null==d)return e;if(et.current.has(e))return e;if(tt.current.has(e))return;let t=setTimeout((()=>{t=void 0,Se(!0)}),500);const n=await d(e,!1);if(null==t?Se(!1):clearTimeout(t),n?.id===e)return et.current.add(e),e;null!=n&&tt.current.add(e)},ht=e=>{const t=e.target,n=t.value;if(!["branch-all","branch-current"].includes(n)&&!["remotes","stashes","tags","mergeCommits"].includes(n))return;const o=t.checked;if("mergeCommits"===n)return void a?.(o);const r=n,i=fe?.[r];(null==i&&o||null!=i&&i!==o)&&(me({...fe,[r]:o}),y?.(r,o))};return t().createElement(t().Fragment,null,t().createElement("header",{className:"titlebar graph-app__header"},t().createElement("div",{className:"titlebar__row titlebar__row--wrap"+($e?Y&&Q?.provider?.url?"":" no-remote-provider":" disallowed")},Y&&Q?.provider?.url&&t().createElement("a",{href:Q.provider.url,className:"action-button",style:{marginRight:"-0.5rem"},title:`Open Repository on ${Q.provider.name}`,"aria-label":`Open Repository on ${Q.provider.name}`},t().createElement("span",{className:"cloud"===Q.provider.icon?"codicon codicon-cloud action-button__icon":`glicon glicon-provider-${Q.provider.icon} action-button__icon`,"aria-hidden":"true"})),t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...","aria-label":"Switch to Another Repository...",disabled:q.length<2,onClick:()=>{i?.()}},Y?.formattedName??"none selected",q.length>1&&t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),$e&&Y&&t().createElement(t().Fragment,null,t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:"command:gitlens.graph.switchToAnotherBranch",className:"action-button",title:"Switch to Another Branch...","aria-label":"Switch to Another Branch..."},ke,t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),(()=>{const e=Ee&&new Date(Ee),n=e&&0!==e.getTime()?Qc(e):void 0;let o="sync",r="Fetch",i="command:gitlens.graph.fetch",s=!1,a=!1,l="",c="Fetch from",d="remote";if(Q){s=Q.behind>0,a=Q.ahead>0;const e=`Branch ${ke} is`;d=`${Q.upstream}${Q.provider?.name?` on ${Q.provider?.name}`:""}`,s?(i="command:gitlens.graph.pull",o="arrow-down",r="Pull",l=`Pull from ${d}\n${e} ${Wa("commit",Q.behind)} behind of`):a&&(i="command:gitlens.graph.push",o="arrow-up",r="Push",l=`Push to ${d}\n${e} ${Wa("commit",Q.ahead)} ahead of`),l+=` ${d}`,c+=` ${d}`}if(null!=n){const e=`\nLast fetched ${n}`;l+=e,c+=e}return t().createElement("div",{className:"titlebar__group"},(s||a)&&t().createElement("a",{href:i,className:`action-button${s?" is-behind":""}${a?" is-ahead":""}`,title:l},t().createElement("span",{className:`codicon codicon-${o} action-button__icon`}),r,(a||s)&&t().createElement("span",null,t().createElement("span",{className:"pill action-button__pill"},a&&t().createElement("span",null,Q.ahead," ",t().createElement("span",{className:"codicon codicon-arrow-up"})),s&&t().createElement("span",null,Q.behind," ",t().createElement("span",{className:"codicon codicon-arrow-down"}))))),t().createElement("a",{href:"command:gitlens.graph.fetch",className:"action-button",title:c},t().createElement("span",{className:"codicon codicon-sync action-button__icon"}),"Fetch",n&&t().createElement("span",{className:"action-button__small"},"(",n,")")))})()),t().createElement(Od,{subscription:Ne}),t().createElement("div",{className:"popover"},t().createElement("a",{href:"command:gitlens.showFocusPage",className:"action-button popover__trigger"},"Try the Focus Preview"),t().createElement(Ml,{placement:"top end",className:"popover__content"},"Bring all of your GitHub pull requests and issues into a unified actionable to help to you more easily juggle work in progress, pending work, reviews, and more"))),$e&&t().createElement("div",{className:"titlebar__row"},t().createElement("div",{className:"titlebar__group"},t().createElement(_l,null,t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},t().createElement("span",{className:"codicon codicon-filter"+(ct?"-filled":"")}),ct&&t().createElement("span",{className:"action-button__indicator"}),t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(ml,{slot:"content"},t().createElement(fl,null,"Filter options"),t().createElement(pl,{role:"none"},t().createElement($a,{orientation:"vertical",value:lt&&!0!==Y?.isVirtual?"branch-all":"branch-current",readOnly:!0===Y?.isVirtual},!0!==Y?.isVirtual&&t().createElement(Ma,{name:"branching-toggle",value:"branch-all",onChange:e=>{const t=e.target,n=t.value,o=t.checked,r="branch-all"===n&&o;lt!==r&&w?.(r)}},"Show All Branches"),t().createElement(Ma,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),t().createElement(ul,null),!0!==Y?.isVirtual&&t().createElement(t().Fragment,null,t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"remotes",onChange:ht,defaultChecked:fe?.remotes??!1},"Hide Remote-only Branches")),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"stashes",onChange:ht,defaultChecked:fe?.stashes??!1},"Hide Stashes"))),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"tags",onChange:ht,defaultChecked:fe?.tags??!1},"Hide Tags")),t().createElement(ul,null),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"mergeCommits",onChange:ht,defaultChecked:le?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement(eh,{ref:De,label:"Search Commits",step:at,total:Fe?.count??0,valid:Boolean(ze?.query&&ze.query.length>2),more:Fe?.paging?.hasMore??!1,searching:Ke,value:ze?.query??"",errorMessage:Be?.error??"",resultsHidden:Ze,resultsLoaded:null!=Fe,onChange:e=>(e=>{const t=e.detail;He(t);const n=t.query.length>=3;We(void 0),Ue(void 0),qe(!1),Ye(n),m?.(n?t:void 0)})(e),onNavigate:e=>(async e=>{if(null==Fe)return;const t=e.detail?.direction??"next";let n,o,r,i=Fe,s=i.count;"first"===t?(r=!1,n=0):"last"===t?(r=!1,n=-1):(r="next"===t,[n,o]=Th(i,ze,ne,r));let a=0;for(;a<1e3;){if(a++,-1==n)if(r)if(null!=ze&&i?.paging?.hasMore){let e;Ye(!0);try{e=await(g?.(ze,{more:!0}))}finally{Ye(!1)}null==e?.results||"error"in e.results?n=0:s<e.results.count?(i=e.results,n=s,s=i.count):n=0}else n=0;else if("last"===t&&null!=ze&&i?.paging?.hasMore){let e;Ye(!0);try{e=await(g?.(ze,{limit:0,more:!0}))}finally{Ye(!1)}null==e?.results||"error"in e.results||(s<e.results.count&&(i=e.results,s=i.count),n=s)}else n=s-1;if(o=o??Rh(i,n),null!=o&&(o=await dt(o),null!=o))break;qe(!0),n=kh(n,r,i,ze)}null!=o&&queueMicrotask((()=>x.current?.selectCommits([o],!1,!0)))})(e),onOpenInView:()=>{null!=ze&&b?.(ze)}}),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement("span",{className:"button-group"},t().createElement("button",{type:"button",role:"checkbox",className:"action-button",title:"Toggle Minimap","aria-label":"Toggle Minimap","aria-checked":le?.minimap??!1,onClick:e=>{C?.({minimap:!le?.minimap})}},t().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})),t().createElement(_l,{position:"right"},t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Minimap Options"},t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(ml,{slot:"content"},t().createElement(fl,null,"Chart"),t().createElement(pl,{role:"none"},t().createElement($a,{orientation:"vertical",value:le?.minimapDataType??"commits"},t().createElement(Ma,{name:"minimap-datatype",value:"commits",onChange:e=>{if(null==le)return;const t=e.target;if("commits"===t.value){const e=t.checked?"commits":"lines";if(le.minimapDataType===e)return;ce({...le,minimapDataType:e}),C?.({minimapDataType:e})}}},"Commits"),t().createElement(Ma,{name:"minimap-datatype",value:"lines"},"Lines Changed"))),t().createElement(ul,null),t().createElement(fl,null,"Markers"),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"localBranches",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("localBranches")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"localBranches"}),"Local Branches")),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"remoteBranches",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("remoteBranches")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"remoteBranches"}),"Remote Branches")),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"stashes",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("stashes")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"stashes"}),"Stashes")),t().createElement(pl,{role:"none"},t().createElement(Ia,{value:"tags",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("tags")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"tags"}),"Tags"))))))),t().createElement("div",{className:"progress-container infinite"+(xe||R?" active":""),role:"progressbar"},t().createElement("div",{className:"progress-bar"}))),t().createElement(_d,{className:"graph-app__gate",appearance:"alert",state:Ne?.state,visible:!$e},t().createElement("p",{slot:"feature"},"Helps you easily visualize your repository and keep track of all work in progress.",t().createElement("br",null),t().createElement("br",null),"Use the rich commit search to find exactly what you're looking for. It's powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change.")),le?.minimap&&t().createElement(yh,{ref:Je,activeDay:re,data:rt?.stats,dataType:le?.minimapDataType??"commits",markers:rt?.markers,searchResults:it,visibleDays:se,onSelected:e=>(e=>{let{sha:t}=e.detail;if(null==t){const n=e.detail.date?.getTime();if(null==n)return;t=S.reduce(((e,t)=>Math.abs(t.date-n)<Math.abs(e.date-n)?t:e)).sha}x.current?.selectCommits([t],!1,!0)})(e)}),t().createElement("main",{id:"main",className:"graph-app__main","aria-hidden":!$e},void 0!==Y?t().createElement(t().Fragment,null,t().createElement(Ve(),{ref:x,avatarUrlByEmail:O,columnsSettings:de,contexts:ve,cssVariables:_e?.cssVariables,dimMergeCommits:le?.dimMergeCommits,downstreamsByUpstream:D,enabledRefMetadataTypes:le?.enabledRefMetadataTypes,enabledScrollMarkerTypes:le?.scrollMarkerTypes,enableMultiSelection:le?.enableMultiSelection,excludeRefsById:ue,excludeByType:fe,formatCommitDateTime:wh(le),getExternalIcon:xh,graphRows:S,hasMoreCommits:we,highlightedShas:Fe?.ids,highlightRowsOnRefHover:le?.highlightRowsOnRefHover,includeOnlyRefsById:ge,scrollRowPadding:le?.scrollRowPadding,showGhostRefsOnRowHover:le?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:le?.showRemoteNamesOnRefs,isContainerWindowFocused:Ie,isLoadingRows:xe,isSelectedBySha:ee,nonce:o,onColumnResized:(e,t)=>{t.width&&s?.({[e]:{width:t.width,isHidden:t.isHidden,mode:t.mode,order:t.order}})},onDoubleClickGraphRow:(e,t,n)=>{t!==je.refZone&&c?.(n,!0)},onDoubleClickGraphRef:(e,t,n,o)=>{t.length>0&&l?.(t[0],o)},onGraphColumnsReOrdered:e=>{const t={};for(const[n,o]of Object.entries(e))t[n]={...o};s?.(t)},onGraphMouseLeave:Je.current?e=>{Je.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:Je.current?(e,t,n)=>{t!==je.refZone&&null!=Je.current&&Je.current?.select(n.date,!0)}:void 0,onSettingsClick:e=>{const t=e.nativeEvent,n=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(n),t.stopImmediatePropagation()},onSelectGraphRows:e=>{const t=e[0],n=null!=t?`${t.sha}|${t.date}`:void 0;r.activeRow=n,oe(n),ie(t?.date),v?.(e)},onToggleRefsVisibilityClick:(e,t,n)=>{f?.(t,n)},onEmailsMissingAvatarUrls:e=>{h?.(e)},onRefsMissingMetadata:e=>{u?.(e)},onShowMoreCommits:()=>{Se(!0),p?.()},onGraphVisibleRowsChanged:Je.current?(e,t)=>{ae({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:Sh,refMetadataById:V,rowsStats:T,rowsStatsLoading:R,shaLength:le?.idLength,themeOpacityFactor:_e?.themeOpacityFactor,useAuthorInitialsForAvatars:!le?.avatars,workDirStats:Xe})):t().createElement("p",null,"No repository is selected")))}function Th(e,t,n,o=!0){if(null==e.ids)return[0,void 0];const r=Eh(n),i=r?.id;if(null==i)return[0,void 0];let s,a,l;const c=e.ids[i];if(null!=c&&(s=c.i,a=i,l=s),null==s){const t=null!=r?.date?r.date+(o?1:-1):void 0;if(null==t)return[0,void 0];let n,i,c,d;for([i,{date:c,i:n}]of Object.entries(e.ids))o?c<t&&(null==d||c>d)&&(a=i,d=c,l=n):c>t&&(null==d||c<=d)&&(a=i,d=c,l=n);s=null==l?e.count-1:l+(o?-1:1)}return s=kh(s,o,e,t),s===l?[s,a]:[s,void 0]}function kh(e,t,n,o){return t?e<n.count-1?e++:e=null!=o&&n?.paging?.hasMore?-1:0:e>0?e--:e=null!=o&&n?.paging?.hasMore?-1:n.count-1,e}function Rh(e,t){const{ids:n}=e;for(const e in n)if(n[e].i===t)return e}function Eh(e){if(null==e)return;const[t,n]=e.split("|");return{id:t,date:Number(n)}}function Oh(e){let t,n;return null!=e.searchResults&&("error"in e.searchResults?n=e.searchResults:t=e.searchResults),{results:t,resultsError:n}}function Ih(e){return new Date(e).setHours(0,0,0,0)}const Mh=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class $h extends Ue{constructor(){super("GraphApp")}onBind(){const e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);const o=document.getElementById("root");return null!=o&&((0,n.render)(t().createElement(_h,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerEvents(e),onColumnsChange:fe((e=>this.onColumnsChanged(e)),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:fe((()=>this.onChooseRepository()),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:fe(((e,t)=>this.onSearch(e,t)),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:fe((e=>this.onSelectionChanged(e)),250),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),o),e.push({dispose:()=>(0,n.unmountComponentAtNode)(o)})),e}onMessageReceived(e){const t=e.data;switch(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method){case O.method:d(O,t,((e,t)=>{this.setState({...this.state,...e.state},t)}));break;case j.method:d(j,t,((e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)}));break;case $.method:d($,t,((e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)}));break;case D.method:d(D,t,(e=>{window.dispatchEvent(new CustomEvent(e.focused?"webview-focus":"webview-blur"))}));break;case z.method:d(z,t,((e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)}));break;case N.method:d(N,t,((e,t)=>{this.state.columns=e.columns,this.state.context={...this.state.context,header:e.context,settings:e.settingsContext},this.setState(this.state,t)}));break;case H.method:d(H,t,((e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)}));break;case A.method:d(A,t,((e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)}));break;case L.method:d(L,t,((e,n)=>{let o;if(e.rows.length&&null!=e.paging?.startingCursor&&null!=this.state.rows){const n=this.state.rows,r=n[n.length-1]?.sha;let i=n.length;const s=e.rows.length;if(this.log(`onMessageReceived(${t.id}:${t.method}): paging in ${s} rows into existing ${i} rows at ${e.paging.startingCursor} (last existing row: ${r})`),o=[],o.length=i+s,e.paging.startingCursor!==r){this.log(`onMessageReceived(${t.id}:${t.method}): searching for ${e.paging.startingCursor} in existing rows`);let r,a=0;for(r of n)if(o[a++]=r,r.sha===e.paging.startingCursor){this.log(`onMessageReceived(${t.id}:${t.method}): found ${e.paging.startingCursor} in existing rows`),i=a,i!==n.length&&(o.length=i+s);break}}else for(let e=0;e<i;e++)o[e]=n[e];for(let t=0;t<s;t++)o[i+t]=e.rows[t]}else this.log(`onMessageReceived(${t.id}:${t.method}): setting to ${e.rows.length} rows`),o=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,this.state.downstreams=e.downstreams,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=o,this.state.paging=e.paging,null!=e.rowsStats&&(this.state.rowsStats={...this.state.rowsStats,...e.rowsStats}),this.state.rowsStatsLoading=e.rowsStatsLoading,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,n)}));break;case G.method:d(G,t,((e,t)=>{this.state.rowsStats={...this.state.rowsStats,...e.rowsStats},this.state.rowsStatsLoading=e.rowsStatsLoading,this.setState(this.state,t)}));break;case P.method:d(P,t,((e,t)=>{this.state.context={...this.state.context,settings:e.context},this.setState(this.state,t)}));break;case U.method:d(U,t,((e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)}));break;case F.method:d(F,t,((e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)}));break;case I.method:d(I,t,((e,t)=>{this.state.config=e.config,this.setState(this.state,t)}));break;case M.method:d(M,t,((e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)}));break;case W.method:d(W,t,((e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)}));break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){const t=document.documentElement.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?Y(e.colors.background,5):X(e.colors.background,5)),t.setProperty("--color-graph-background",e.isLightTheme?Y(e.colors.background,5):X(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?Y(e.colors.background,10):X(e.colors.background,10));const n=re("--color-graph-text-selected-row",e.computedStyle);t.setProperty("--color-graph-text-dimmed-selected",Q(n,50)),t.setProperty("--color-graph-text-dimmed",Q(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",Q(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",Q(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",Q(e.colors.foreground,50));const o=se.from(e.colors.background),r=se.from(e.colors.foreground),i=o.getRelativeLuminance(),s=r.getRelativeLuminance(),a=e=>{let t,n;s>i?(n=s,t=i):(t=s,n=i);return e/1*(n-t)+t};let l=se.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);t.setProperty("--color-graph-minimap-visibleAreaBackground",l.luminance(a(e.isLightTheme?.6:.1)).toString()),e.isLightTheme||(l=se.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",l.luminance(a(.55)).toString()),l=se.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",l.luminance(a(.55)).toString()),l=se.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=se.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-headForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=se.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-upstreamForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()));const c=a(e.isLightTheme?.72:.064),d=a(e.isLightTheme?.64:.076),h=a(e.isLightTheme?.92:.02);l=se.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",l.luminance(c).toString()),t.setProperty("--branch-status-ahead-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-ahead-pill-background",l.luminance(h).toString()),l=se.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",l.luminance(c).toString()),t.setProperty("--branch-status-behind-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-behind-pill-background",l.luminance(h).toString()),l=se.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",l.luminance(c).toString()),t.setProperty("--branch-status-both-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-both-pill-background",l.luminance(h).toString()),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){this.log("setState()");const n=this.ensureTheming(e);this.state=e,super.setState({timestamp:e.timestamp,selectedRepository:e.selectedRepository}),this.callback?.(this.state,t,n)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){const e=window.getComputedStyle(document.documentElement),t=re("--color-background",e),n={};let o,r=0;for(const[i,s]of Mh){o=re(i,e)||s,n[`--column-${r}-color`]=o,n[`--graph-color-${r}`]=o;for(const e of[15,25,45,50])n[`--graph-color-${r}-bg${e}`]=J(t,o,e);for(const e of[10,50])n[`--graph-color-${r}-f${e}`]=Q(o,e);r++}const i=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":t,"--panel__bg0":re("--color-graph-background",e),"--panel__bg1":re("--color-graph-background2",e),"--section-border":re("--color-graph-background2",e),"--selected-row":re("--color-graph-selected-row",e),"--selected-row-border":i?`1px solid ${re("--color-graph-contrast-border",e)}`:"none","--hover-row":re("--color-graph-hover-row",e),"--hover-row-border":i?`1px dashed ${re("--color-graph-contrast-border",e)}`:"none","--scrollable-scrollbar-thickness":re("--graph-column-scrollbar-thickness",e),"--scroll-thumb-bg":re("--vscode-scrollbarSlider-background",e),"--scroll-marker-head-color":re("--color-graph-scroll-marker-head",e),"--scroll-marker-upstream-color":re("--color-graph-scroll-marker-upstream",e),"--scroll-marker-highlights-color":re("--color-graph-scroll-marker-highlights",e),"--scroll-marker-local-branches-color":re("--color-graph-scroll-marker-local-branches",e),"--scroll-marker-remote-branches-color":re("--color-graph-scroll-marker-remote-branches",e),"--scroll-marker-stashes-color":re("--color-graph-scroll-marker-stashes",e),"--scroll-marker-tags-color":re("--color-graph-scroll-marker-tags",e),"--scroll-marker-selection-color":re("--color-graph-scroll-marker-selection",e),"--stats-added-color":re("--color-graph-stats-added",e),"--stats-deleted-color":re("--color-graph-stats-deleted",e),"--stats-files-color":re("--color-graph-stats-files",e),"--stats-bar-border-radius":re("--graph-stats-bar-border-radius",e),"--stats-bar-height":re("--graph-stats-bar-height",e),"--text-selected":re("--color-graph-text-selected",e),"--text-selected-row":re("--color-graph-text-selected-row",e),"--text-hovered":re("--color-graph-text-hovered",e),"--text-dimmed-selected":re("--color-graph-text-dimmed-selected",e),"--text-dimmed":re("--color-graph-text-dimmed",e),"--text-normal":re("--color-graph-text-normal",e),"--text-secondary":re("--color-graph-text-secondary",e),"--text-disabled":re("--color-graph-text-disabled",e),"--text-accent":re("--color-link-foreground",e),"--text-inverse":re("--vscode-input-background",e),"--text-bright":re("--vscode-input-background",e),...n},themeOpacityFactor:parseInt(re("--graph-theme-opacity-factor",e))||1}}onColumnsChanged(e){this.sendCommand(S,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(_,{refs:e,visible:t})}onChooseRepository(){this.sendCommand(f,void 0)}onDimMergeCommits(e){this.sendCommand(m,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(g,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(g,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(v,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(y,{metadata:e})}onGetMoreRows(e){this.sendCommand(w,{id:e})}onSearch(e,t){null==e&&(this.state.searchResults=void 0),this.sendCommand(C,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(C,{search:e,limit:t?.limit,more:t?.more},U)}catch{return}}onSearchOpenInView(e){this.sendCommand(x,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(b,{id:e,select:t},B)}catch{return}}onExcludeType(e,t){this.sendCommand(T,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(R,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(k,{changes:e})}onSelectionChanged(e){const t=e.filter((e=>null!=e)).map((e=>({id:e.sha,type:e.type})));this.sendCommand(E,{selection:t})}registerEvents(e){return this.callback=e,()=>{this.callback=void 0}}}new $h})();var i=r.q;export{i as GraphApp};