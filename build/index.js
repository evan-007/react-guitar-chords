!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(t,n){t.exports=e},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function i(){y&&h&&(y=!1,h.length?d=h.concat(d):v=-1,d.length&&u())}function u(){if(!y){var e=o(i);y=!0;for(var t=d.length;t;){for(h=d,d=[];++v<t;)h&&h[v].run();v=-1,t=d.length}h=null,y=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"===typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"===typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,d=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new s(e,t)),1!==d.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,a,i,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,a,i,u,s],l=0;c=new Error(t.replace(/%s/g,function(){return f[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r={REAL_Y_MAX:130,X_BASE:20,X_MAX:120,Y_BASE:40,Y_MAX:90};t.a=r},function(e,t,n){"use strict";(function(t){var r=n(2),o=r;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];a.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(1))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8);t.default=r.a},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(0),s=n.n(u),c=n(9),f=n.n(c),l=n(14),p=n(15),h=n(16),d=n(17),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),y(t,[{key:"render",value:function(){var e={stroke:"rgb(0,0,0)",strokeWidth:.2},t=this.props.frets.filter(function(e){return"number"===typeof e}),n=Math.min.apply(Math,r(t)),o=Math.max.apply(Math,r(t)),a=o-n,i=a>4?a:4,u={stroke:"rgb(0,0,0)",strokeWidth:.5},c=this.props.frets.length-1,f=this.props.inline?{display:"inline-block"}:{};return s.a.createElement("div",{style:f},s.a.createElement("svg",{width:"150",height:"150"},s.a.createElement("text",{x:"5",y:"15"},this.props.chordName),s.a.createElement(p.a,{lineStyles:u,stringCount:c}),s.a.createElement(l.a,{fretStyles:e,numberFretsToRender:i}),s.a.createElement(h.a,{fingering:this.props.fingering,frets:this.props.frets,lowestFret:n,numberFretsToRender:i})),this.props.music&&s.a.createElement(d.a,{buttonClasses:this.props.buttonClasses,frets:this.props.frets}))}}]),t}(u.Component);v.propTypes={chordName:f.a.string,frets:f.a.arrayOf(f.a.oneOfType([f.a.string,f.a.number])),fingering:f.a.arrayOf(f.a.oneOfType([f.a.string,f.a.number])),inline:f.a.bool,buttonClasses:f.a.string},v.defaultProps={music:!0},t.a=v},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r};e.exports=n(10)(o,!0)}else e.exports=n(13)()}).call(t,n(1))},function(e,t,n){"use strict";(function(t){var r=n(2),o=n(3),a=n(6),i=n(11),u=n(4),s=n(12);e.exports=function(e,n){function c(e){var t=e&&(T&&e[T]||e[j]);if("function"===typeof t)return t}function f(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function p(e){function r(r,c,f,p,h,d,y){if(p=p||S,d=d||f,y!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var v=p+":"+f;!i[v]&&s<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",d,p),i[v]=!0,s++)}return null==c[f]?r?new l(null===c[f]?"The "+h+" `"+d+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+h+" `"+d+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(c,f,p,h,d)}if("production"!==t.env.NODE_ENV)var i={},s=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function h(e){function t(t,n,r,o,a,i){var u=t[n];if(O(u)!==e)return new l("Invalid "+o+" `"+a+"` of type `"+x(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function d(e){function t(t,n,r,o,a){if("function"!==typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){return new l("Invalid "+o+" `"+a+"` of type `"+O(i)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<i.length;s++){var c=e(i,s,r,o,a+"["+s+"]",u);if(c instanceof Error)return c}return null}return p(t)}function y(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||S;return new l("Invalid "+o+" `"+a+"` of type `"+M(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return p(t)}function v(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(f(i,e[u]))return null;return new l("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function m(e){function t(t,n,r,o,a){if("function"!==typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=O(i);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in i)if(i.hasOwnProperty(c)){var f=e(i,c,r,o,a+"."+c,u);if(f instanceof Error)return f}return null}return p(t)}function b(e){function n(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,u))return null}return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var i=e[o];if("function"!==typeof i)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",A(i),o),r.thatReturnsNull}return p(n)}function _(e){function t(t,n,r,o,a){var i=t[n],s=O(i);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var p=f(i,c,r,o,a+"."+c,u);if(p)return p}}return null}return p(t)}function g(e){function t(t,n,r,o,a){var s=t[n],c=O(s);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var h=e[p];if(!h)return new l("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=h(s,p,r,o,a+"."+p,u);if(d)return d}return null}return p(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!w(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!w(a[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function x(e){if("undefined"===typeof e||null===e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function A(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function M(e){return e.constructor&&e.constructor.name?e.constructor.name:S}var T="function"===typeof Symbol&&Symbol.iterator,j="@@iterator",S="<<anonymous>>",k={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:function(){return p(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new l("Invalid "+o+" `"+a+"` of type `"+O(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:m,oneOf:v,oneOfType:b,shape:_,exact:g};return l.prototype=Error.prototype,k.checkPropTypes=s,k.PropTypes=k,k}}).call(t,n(1))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)a.call(n,f)&&(s[f]=n[f]);if(o){u=o(n);for(var l=0;l<u.length;l++)i.call(n,u[l])&&(s[u[l]]=n[u[l]])}}return s}},function(e,t,n){"use strict";(function(t){function r(e,n,r,s,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var l;try{o("function"===typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",r,f,typeof e[f]),l=e[f](n,f,s,r,null,i)}catch(e){l=e}if(a(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,f,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var p=c?c():"";a(!1,"Failed %s type: %s%s",r,l.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(3),a=n(6),i=n(4),u={};e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";var r=n(2),o=n(3),a=n(4);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=function(e){var t=e.numberFretsToRender,n=e.fretStyles,r=a.a.Y_MAX/t,i=t+2;return Array.from(new Array(i)).map(function(e,t){if(0===t)return o.a.createElement("line",{key:t,style:n,x1:a.a.X_BASE,x2:a.a.X_MAX,y1:a.a.Y_BASE,y2:a.a.Y_BASE});var i=a.a.Y_BASE+r*(t-1);return o.a.createElement("line",{key:t,style:n,x1:a.a.X_BASE,x2:a.a.X_MAX,y1:i,y2:i})})};t.a=i},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=function(e){var t=e.stringCount,n=e.lineStyles;return Array.from(new Array(t+1)).map(function(e,r){var i=a.a.X_MAX-a.a.X_BASE,u=i/t,s=a.a.X_BASE+u*r;return o.a.createElement("line",{key:r,style:n,x1:s,x2:s,y1:a.a.Y_BASE,y2:a.a.REAL_Y_MAX})})};t.a=i},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(5),i=function(e){var t=e.frets,n=e.fingering,r=e.numberFretsToRender,i=e.lowestFret,u=[],s=a.a.X_MAX-a.a.X_BASE,c=s/5,f=t.includes(0),l=a.a.Y_MAX/r;return f||u.push(o.a.createElement("text",{key:"open-chord-fret-label",x:a.a.X_MAX+10,y:a.a.Y_BASE,fill:"black"},i)),t.forEach(function(e,t){if("x"===e||0===e){var r=a.a.X_BASE+c*t-4;return u.push(o.a.createElement("text",{key:"zero-fret-"+t,x:r,y:a.a.Y_BASE-3},e))}var s=a.a.X_BASE+c*t,p=void 0;if(p=f?a.a.Y_BASE+l*e-l/2:a.a.Y_BASE+l*(e-i+1)-l/2,u.push(o.a.createElement("circle",{cx:s,cy:p,fill:"black",key:"fingering-"+t,r:"8"})),n){var h=n[t];u.push(o.a.createElement("text",{fill:"white",key:"fingering-text-"+t,textAnchor:"middle",x:s,y:p+5},h))}}),u};t.a=i},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(18),i=function(e){var t=e.frets,n=e.buttonClasses,r=function(){var e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],n=["E","A","D","G","B","E"],r=[2,2,3,3,3,4],o=t,i=n.map(function(t,n){if("x"===o[n])return"x";var a=parseInt(e.indexOf(t)),i=parseInt(o[n]),u=a+i;return u>=12&&(r[n]++,u=parseInt(u)-12),e[u]}),u=a.a.createInstrument("acoustic"),s=0;i.forEach(function(e,t){"x"!==e&&(s++,setTimeout(function(){u.play(e,r[t],2)},500*s))})};return o.a.createElement("button",{onClick:r,className:n},"hi")};t.a=i},function(e,t,n){"use strict";var r,o,a;!function(){var e=window.URL||window.webkitURL,t=window.Blob;if(!e||!t)throw new Error("This browser does not support AudioSynth");var n=!1,i=null,u=function(e,t){return[new Uint8Array([t,t>>8]),new Uint8Array([t,t>>8,t>>16,t>>24])][e]},s=function(e,t,n,r){Object.defineProperty(this,e,{value:t,writable:!!n,enumerable:!!r})},c=function(e,t,n){s.call(this,e,t,n,!0)};a=function(){this.__init__.apply(this,arguments)};var f=s.bind(a.prototype),l=c.bind(a.prototype);f("__init__",function(e,t,r){if(!n)throw new Error("AudioSynthInstrument can only be instantiated from the createInstrument method of the AudioSynth object.");s.call(this,"_parent",e),c.call(this,"name",t),s.call(this,"_soundID",r)}),l("play",function(e,t,n){return this._parent.play(this._soundID,e,t,n)}),l("generate",function(e,t,n){return this._parent.generate(this._soundID,e,t,n)}),o=function e(){return i instanceof e?i:(this.__init__(),this)},f=s.bind(o.prototype),l=c.bind(o.prototype),f("_debug",!1,!0),f("_bitsPerSample",16),f("_channels",1),f("_sampleRate",44100,!0),l("setSampleRate",function(e){return this._sampleRate=Math.max(Math.min(0|e,44100),4e3),this._clearCache(),this._sampleRate}),l("getSampleRate",function(){return this._sampleRate}),f("_volume",32768,!0),l("setVolume",function(e){return e=parseFloat(e),isNaN(e)&&(e=0),e=Math.round(32768*e),this._volume=Math.max(Math.min(0|e,32768),0),this._clearCache(),this._volume}),l("getVolume",function(){return Math.round(this._volume/32768*1e4)/1e4}),f("_notes",{C:261.63,"C#":277.18,D:293.66,"D#":311.13,E:329.63,F:346.23,"F#":369.99,G:392,"G#":415.3,A:440,"A#":466.16,B:493.88}),f("_fileCache",[],!0),f("_temp",{},!0),f("_sounds",[],!0),f("_mod",[function(e,t,n,r){return Math.sin(2*Math.PI*(e/t)*n+r)}]),f("_resizeCache",function(){for(var e=this._fileCache,t=this._sounds.length;e.length<t;){for(var n=[],r=0;r<8;r++){var o={};for(var a in this._notes)o[a]={};n.push(o)}e.push(n)}}),f("_clearCache",function(){this._fileCache=[],this._resizeCache()}),l("generate",function(n,r,o,a){var i=this._sounds[n];if(!i)for(var s=0;s<this._sounds.length;s++)if(this._sounds[s].name==n){i=this._sounds[s],n=s;break}if(!i)throw new Error("Invalid sound or sound ID: "+n);var c=(new Date).valueOf();this._temp={},o|=0,o=Math.min(8,Math.max(1,o));var f=a?parseFloat(a):2;if("undefined"==typeof this._notes[r])throw new Error(r+" is not a valid note.");if("undefined"!=typeof this._fileCache[n][o-1][r][f])return this._debug&&console.log((new Date).valueOf()-c,"ms to retrieve (cached)"),this._fileCache[n][o-1][r][f];for(var l=this._notes[r]*Math.pow(2,o-4),p=this._sampleRate,h=this._volume,d=this._channels,y=this._bitsPerSample,v=i.attack(p,l,h),m=i.dampen(p,l,h),b=i.wave,_={modulate:this._mod,vars:this._temp},g=0,w=new Uint8Array(new ArrayBuffer(Math.ceil(p*f*2))),E=p*v|0,O=p*f|0,s=0;s!==E;s++)g=h*(s/(p*v))*b.call(_,s,p,l,h),w[s<<1]=g,w[1+(s<<1)]=g>>8;for(;s!==O;s++)g=h*Math.pow(1-(s-p*v)/(p*(f-v)),m)*b.call(_,s,p,l,h),w[s<<1]=g,w[1+(s<<1)]=g>>8;var x=["RIFF",u(1,52),"WAVE","fmt ",u(1,16),u(0,1),u(0,d),u(1,p),u(1,p*d*y/8),u(0,d*y/8),u(0,y),"data",u(1,w.length*d*y/8),w],A=new t(x,{type:"audio/wav"}),M=e.createObjectURL(A);return this._fileCache[n][o-1][r][f]=M,this._debug&&console.log((new Date).valueOf()-c,"ms to generate"),M}),l("play",function(e,t,n,r){var o=this.generate(e,t,n,r);return new Audio(o).play(),!0}),l("debug",function(){this._debug=!0}),l("createInstrument",function(e){var t=0,r=!1;if("string"==typeof e){for(var o=0;o<this._sounds.length;o++)if(this._sounds[o].name==e){r=!0,t=o;break}}else this._sounds[e]&&(t=e,e=this._sounds[t].name,r=!0);if(!r)throw new Error("Invalid sound or sound ID: "+e);n=!0;var i=new a(this,e,t);return n=!1,i}),l("listSounds",function(){for(var e=[],t=0;t<this._sounds.length;t++)e.push(this._sounds[t].name);return e}),f("__init__",function(){this._resizeCache()}),l("loadSoundProfile",function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(!(n instanceof Object))throw new Error("Invalid sound profile.");this._sounds.push(n)}return this._resizeCache(),!0}),l("loadModulationFunction",function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if("function"!=typeof n)throw new Error("Invalid modulation function.");this._mod.push(n)}return!0}),i=new o,r=i}(),r.loadModulationFunction(function(e,t,n,r){return 1*Math.sin(2*Math.PI*(e/t*n)+r)},function(e,t,n,r){return 1*Math.sin(4*Math.PI*(e/t*n)+r)},function(e,t,n,r){return 1*Math.sin(8*Math.PI*(e/t*n)+r)},function(e,t,n,r){return 1*Math.sin(.5*Math.PI*(e/t*n)+r)},function(e,t,n,r){return 1*Math.sin(.25*Math.PI*(e/t*n)+r)},function(e,t,n,r){return.5*Math.sin(2*Math.PI*(e/t*n)+r)},function(e,t,n,r){return.5*Math.sin(4*Math.PI*(e/t*n)+r)},function(e,t,n,r){return.5*Math.sin(8*Math.PI*(e/t*n)+r)},function(e,t,n,r){return.5*Math.sin(.5*Math.PI*(e/t*n)+r)},function(e,t,n,r){return.5*Math.sin(.25*Math.PI*(e/t*n)+r)}),r.loadSoundProfile({name:"piano",attack:function(){return.002},dampen:function(e,t,n){return Math.pow(.5*Math.log(t*n/e),2)},wave:function(e,t,n,r){var o=this.modulate[0];return this.modulate[1](e,t,n,Math.pow(o(e,t,n,0),2)+.75*o(e,t,n,.25)+.1*o(e,t,n,.5))}},{name:"organ",attack:function(){return.3},dampen:function(e,t){return 1+.01*t},wave:function(e,t,n){var r=this.modulate[0];return this.modulate[1](e,t,n,r(e,t,n,0)+.5*r(e,t,n,.25)+.25*r(e,t,n,.5))}},{name:"acoustic",attack:function(){return.002},dampen:function(){return 1},wave:function(e,t,n){var r=this.vars;r.valueTable=r.valueTable?r.valueTable:[],"undefined"==typeof r.playVal&&(r.playVal=0),"undefined"==typeof r.periodCount&&(r.periodCount=0);var o=r.valueTable,a=r.playVal,i=r.periodCount,u=t/n,s=Math.floor(100*(u-Math.floor(u))),c=!1;if(o.length<=Math.ceil(u))return o.push(2*Math.round(Math.random())-1),o[o.length-1];o[a]=.5*(o[a>=o.length-1?0:a+1]+o[a]),a>=Math.floor(u)&&(a<Math.ceil(u)?i%100>=s&&(c=!0,o[a+1]=.5*(o[0]+o[a+1]),r.periodCount++):c=!0);var f=o[a];return c?r.playVal=0:r.playVal++,f}},{name:"edm",attack:function(){return.002},dampen:function(){return 1},wave:function(e,t,n){var r=this.modulate[0],o=this.modulate.slice(1);return o[0](e,t,n,o[9](e,t,n,o[2](e,t,n,Math.pow(r(e,t,n,0),3)+Math.pow(r(e,t,n,.5),5)+Math.pow(r(e,t,n,1),7)))+o[8](e,t,n,r(e,t,n,1.75)))}}),t.a=r}])});