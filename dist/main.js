!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){(function(t,n){var i=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(o(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,s=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=s)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),c=n[r];r<s;c=n[++r])f(c)||!b(c)?a+=" "+c:a+=" "+o(c);return a},e.deprecate=function(r,i){if(w(t.process))return function(){return e.deprecate(r,i).apply(this,arguments)};if(!0===n.noDeprecation)return r;var s=!1;return function(){if(!s){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),s=!0}return r.apply(this,arguments)}};var s,a={};function o(t,r){var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(r)?n.showHidden=r:r&&e._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),l(n,t,n.depth)}function c(t,e){var r=o.styles[e];return r?"["+o.colors[r][0]+"m"+t+"["+o.colors[r][1]+"m":t}function u(t,e){return t}function l(t,r,n){if(t.customInspect&&r&&S(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return g(i)||(i=l(t,i,n)),i}var s=function(t,e){if(w(e))return t.stylize("undefined","undefined");if(g(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(m(e))return t.stylize(""+e,"number");if(y(e))return t.stylize(""+e,"boolean");if(f(e))return t.stylize("null","null")}(t,r);if(s)return s;var a=Object.keys(r),o=function(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),A(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return d(r);if(0===a.length){if(S(r)){var c=r.name?": "+r.name:"";return t.stylize("[Function"+c+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(x(r))return t.stylize(Date.prototype.toString.call(r),"date");if(A(r))return d(r)}var u,b="",E=!1,R=["{","}"];(p(r)&&(E=!0,R=["[","]"]),S(r))&&(b=" [Function"+(r.name?": "+r.name:"")+"]");return v(r)&&(b=" "+RegExp.prototype.toString.call(r)),x(r)&&(b=" "+Date.prototype.toUTCString.call(r)),A(r)&&(b=" "+d(r)),0!==a.length||E&&0!=r.length?n<0?v(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),u=E?function(t,e,r,n,i){for(var s=[],a=0,o=e.length;a<o;++a)N(e,String(a))?s.push(h(t,e,r,n,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(h(t,e,r,n,i,!0))}),s}(t,r,n,o,a):a.map(function(e){return h(t,r,n,o,e,E)}),t.seen.pop(),function(t,e,r){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(u,b,R)):R[0]+b+R[1]}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,i,s){var a,o,c;if((c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?o=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(o=t.stylize("[Setter]","special")),N(n,i)||(a="["+i+"]"),o||(t.seen.indexOf(c.value)<0?(o=f(r)?l(t,c.value,null):l(t,c.value,r-1)).indexOf("\n")>-1&&(o=s?o.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+o.split("\n").map(function(t){return"   "+t}).join("\n")):o=t.stylize("[Circular]","special")),w(a)){if(s&&i.match(/^\d+$/))return o;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+o}function p(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function f(t){return null===t}function m(t){return"number"==typeof t}function g(t){return"string"==typeof t}function w(t){return void 0===t}function v(t){return b(t)&&"[object RegExp]"===E(t)}function b(t){return"object"==typeof t&&null!==t}function x(t){return b(t)&&"[object Date]"===E(t)}function A(t){return b(t)&&("[object Error]"===E(t)||t instanceof Error)}function S(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function R(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(w(s)&&(s=n.env.NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(s)){var r=n.pid;a[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else a[t]=function(){};return a[t]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=y,e.isNull=f,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=w,e.isRegExp=v,e.isObject=b,e.isDate=x,e.isError=A,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(3);var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",function(){var t=new Date,e=[R(t.getHours()),R(t.getMinutes()),R(t.getSeconds())].join(":");return[t.getDate(),P[t.getMonth()],e].join(" ")}(),e.format.apply(e,arguments))},e.inherits=r(4),e._extend=function(t,e){if(!e||!b(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t}}).call(this,r(1),r(2))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){var r,n,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var t=o(h);l=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function f(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new y(t,e)),1!==u.length||l||o(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";r.r(e);class n{constructor(t){this.scene=t.scene,this.isPressed=t.isPressed,this.scene.canvas.addEventListener("mousedown",this.clickDown.bind(this)),this.scene.canvas.addEventListener("mouseup",this.clickUp.bind(this)),this.scene.canvas.addEventListener("mousemove",this.move.bind(this))}clickDown(t){console.log(t)}clickUp(t){this.isPressed=!1,this.selectedPod=!1}move(t){this.selectedPod&&this.selectedPod.move(t)}}class i{constructor(t){this.scene=t.scene,this.pressedKeys=new Set,window.addEventListener("keyup",this.keyU.bind(this)),window.addEventListener("keydown",this.keyD.bind(this))}a(t){t.rotate(Math.PI/32,"x")}s(t){t.rotate(Math.PI/32,"y")}d(t){t.rotate(Math.PI/32,"z")}ArrowLeft(t){t.translate(-10,0,0,0)}ArrowRight(t){t.translate(10,0,0,0)}ArrowUp(t){t.translate(0,-10,0,0)}ArrowDown(t){t.translate(0,10,0,0)}keyD(t){this.pressedKeys.add(t.key)}keyU(t){this.pressedKeys=new Set}run(t){return Array.from(this.pressedKeys).map(e=>this[e](t))}}class s{static randInt(t,e){return Math.floor(t+Math.random()*e)}}class a{static add(t,e){return t+e}static multiply(t,e){return t*e}static divide(t,e){return t/e}static subtract(t,e){return t-e}static min(t,e){return Math.min(t,e)}static max(t,e){return Math.max(t,e)}static square(t){return t*t}}var o={ND_SLICE_CHARACTER:":",ND_PRINT_PRECISION:5,ND_NUMBER_REGEX:new RegExp(/-?\d+\.?(\d+)?/g),NUMBER:"number"};class c{static compareManyTypes(t){return t.map(function(t){return void 0===t.type?Float64Array:t.type}).reduce(this.compareTypes)}static compareTypes(t,e){return c.TYPE_RANKINGS[t]>c.TYPE_RANKINGS[e]?t:e}}c.TYPE_MAP={uint8:Uint8ClampedArray,int8:Int8Array,uint16:Uint16Array,int16:Int16Array,uint32:Uint32Array,int32:Int32Array,float32:Float32Array,float64:Float64Array},c.TYPE_RANKINGS={uint8:0,int8:1,uint16:2,int16:3,uint32:4,int32:5,float32:6,float64:7,undefined:7};var u={math:class{static*getIntegerRange(t,e,r){for(;t<e;)yield t,t+=r}static isNumber(t){return!isNaN(parseFloat(t))&&isFinite(t)}},array:{header:class{static getStride(t,e=1){return t.reduceRight(function(t,e){return[e*t[0]].concat(t)},[e]).slice(1)}static isContiguousSlice(t){const e=[...t.keys()].filter(function(e){return!(t[e]>=0)});if(!e.length)return!0;for(let t=0,r=1;r<e.length;t++,r++)if(e[t]+1!==e[r])return!1;return!0}static smartReshape(t,e,r){return t>0?t:this.size/-d.multiply(r)}},format:class{static formatNumber(t){return t.toPrecision(o.ND_PRINT_PRECISION).substring(0,o.ND_PRINT_PRECISION)}static likeNumpy(t){return t.map(function(t){return Array.isArray(t)?this.likeNumpy(t):this.formatNumber(t)},this)}},nd:class{static broadcast(t,e){return t.constructor===Number?t:t.header.shape.length!==e.length?this.read(t,e.slice(-t.header.shape.length)):this.read(t,e)}static lookup(t,e){return t.header.offset+e.reduce(function(e,r,n){return e+r*t.header.stride[n]},0)}static write(t,e,r){t.data[this.lookup(t,e)]=r}static read(t,e){return t.data[this.lookup(t,e)]}static readMany(t,e){return t.map(function(t){return this.broadcast(t,e)},this)}static*indices(t,e=[]){void 0===t[0]&&(yield e),t[0]===o.ND_SLICE_CHARACTER&&(yield*this.indices(t.slice(1),e.concat(o.ND_SLICE_CHARACTER)));for(let r=0;r<t[0];r++)yield*this.indices(t.slice(1),e.concat(r))}},raw:class{static*flatten(t){for(let e=0;e<t.length;e++)Array.isArray(t[e])?yield*this.flatten(t[e]):yield t[e]}static createRawArray(t,e=function(){return 0}){return t.length?new Array(t[0]).fill(null).map(function(){return this.createRawArray(t.slice(1),e)},this):e()}static cycle(t,e){const r=[...t];return r.splice(-e%r.length).concat(r)}static getShape(t,e=[]){return t.length?this.getShape(t[0],e.concat(t.length)):e}},type:c}};class l{constructor(t){this.shape=t.shape,this.size=d.multiply(this.shape),this.stride=void 0!==t.stride?t.stride:u.array.header.getStride(this.shape),this.offset=void 0!==t.offset?t.offset:0,this.contig=void 0===t.contig||t.contig}copy(){return new l(JSON.parse(JSON.stringify(this)))}sliceByAxis(t){return t.sort(a.subtract),this.shape.map(function(e,r){return t[0]!==r?":":(t.shift(),e)})}slice(t){const e=this.copy();for(let r=0,n=0;r<this.shape.length;r++){if(void 0===t[r])continue;let[i,s]=t[r].split(":").map(Number);0===s&&0===i||(s<=0&&(s+=this.shape[r]),e.shape[r-n]=s-i,e.offset+=this.stride[r]*i,void 0===s&&(e.stride.splice(r-n,1),e.shape.splice(r-n,1),n++))}return e.contig=u.array.header.isContiguousSlice(t),e.size=d.multiply(e.shape),e}reshape(t){const e=this.copy(),r=e.stride.slice(-1).pop();return e.shape=t.map(u.array.header.smartReshape.bind(this)),e.stride=u.array.header.getStride(e.shape,r),e}transpose(){const t=this.copy();return t.stride.reverse(),t.shape.reverse(),t.contig=!1,t}}class d{static add(t){return t.reduce(a.add)}static multiply(t){return t.reduce(a.multiply,1)}static divide(t){return t.reduce(a.divide)}static subtract(t){return t.reduce(a.subtract)}static min(t){return t.reduce(a.min)}static max(t){return t.reduce(a.max)}static square(t){return t.map(a.square)}static mean(t){return d.add(t)/t.length}static norm(t){return Math.sqrt(d.add(d.square(t)))}static elementwise(t,e){const r=u.array.type.compareManyTypes(e),n=new r(e[0].data.length),i=new l({shape:e[0].header.shape});let s=0;for(const r of u.array.nd.indices(i.shape))n[s++]=t(u.array.nd.readMany(e,r));return[n,i,r]}}class h{static multiply(t,e){const r=u.array.type.compareTypes(t.type,e.type),n=new l({shape:[t.header.shape[0],e.header.shape[1]]}),i=new r(t.header.shape[0]*e.header.shape[1]);for(let r=0,s=0;r<n.shape[0];r++)for(let a=0;a<n.shape[1];a++,s++)for(let n=0;n<t.header.shape[1];n++)i[s]+=u.array.nd.read(t,[r,n])*u.array.nd.read(e,[n,a]);return[i,n,r]}}var p=r(0);class y{c1(t,e="float64"){const r=u.array.raw.flatten(t),n=u.array.raw.getShape(t);return this.type=u.array.type.TYPE_MAP[e],this.data=new this.type(r),this.header=new l({shape:n}),this}c2(t,e,r){return this.data=t,this.header=e,this.type=r,this.header.shape.length?this:this.data[this.header.offset]}static array(t,e="float64"){return(new y).c1(t,e)}static zeros(...t){return(new y).c1(u.array.raw.createRawArray(t))}static arange(...t){return 1===t.length?(new y).c1([...u.math.getIntegerRange(0,t[0],1)]):2===t.length?(new y).c1([...u.math.getIntegerRange(t[0],t[1],1)]):3===t.length?(new y).c1([...u.math.getIntegerRange(t[0],t[1],t[2])]):void 0}*[Symbol.iterator](t=[0]){for(const e of u.array.nd.indices(this.header.sliceByAxis(t)))yield this.slice(...e)}axisFn(t,e){return t.length?(new y).c2(...d.elementwise(e,[...this[Symbol.iterator](t)])):e(this.data)}min(...t){return this.axisFn(t,d.min)}max(...t){return this.axisFn(t,d.max)}mean(...t){return this.axisFn(t,d.mean)}norm(...t){return this.axisFn(t,d.norm)}elementFn(t,e){return t.constructor===Array&&(t=y.array(t)),(new y).c2(...d.elementwise(e,[this,t]))}add(t){return this.elementFn(t,d.add)}subtract(t){return this.elementFn(t,d.subtract)}multiply(t){return this.elementFn(t,d.multiply)}divide(t){return this.elementFn(t,d.divide)}static dot(...t){return t.reduce(function(t,e){return t.dot(e)})}dot(t){return t.constructor===Array&&(t=y.array(t)),(new y).c2(...h.multiply(this,t))}set(...t){return function(e){e.constructor===Array&&(e=y.array(e));const r=this.slice(...t);if(r.constructor===Number)return u.array.nd.write(this,t,e),this;for(const t of u.array.nd.indices(r.header.shape))u.array.nd.write(r,t,u.array.nd.broadcast(e,t));return this}.bind(this)}slice(...t){return(new y).c2(this.data,this.header.slice(t.map(String)),this.type)}T(){return(new y).c2(this.data,this.header.transpose(),this.type)}reshape(...t){return this.header.contig?(new y).c2(this.data,this.header.reshape(t),this.type):(new y).c2(new this.type(this.toRawFlat()),new l({shape:t}),this.type)}toRawArray(){return[...this].map(function(t){return t instanceof y?t.toRawArray():t})}toRawFlat(){return[...this[Symbol.iterator](...this.header.shape.keys())]}toString(){return u.array.format.likeNumpy(this.toRawArray())}[p.inspect.custom](){return this.toString()}}y.random=class{static randint(t,e,r){return y.array(u.array.raw.createRawArray(r,function(){return s.randInt(t,e)}))}};var f={image:class{constructor(t){this.media=t}createBitmap(){const[t,e]=this.media.header.shape;return createImageBitmap(new ImageData(this.media.data,e,t))}async render(t,e,r){const n=e.origin.slice(0),i=e.origin.slice(1);t.context.drawImage(await this.createBitmap(),n,i)}static matches(t){return t.data instanceof Uint8ClampedArray}},scatter:class{constructor(t){this.originalMedia=t.reshape(-1,4)}async render(t,e,r,n){this.displayMedia||(this.displayMedia=e.reposition(this.originalMedia));for(let e=0;e<this.displayMedia.header.shape[0];e++){const[r,n,i,s]=this.displayMedia.slice(e),[a,o,c,u]=this.originalMedia.slice(e);t.context.fillStyle=`rgb(${a}, ${o}, ${c})`,t.context.fillRect(r,n,10,10)}}}};class m{static getMediaSource(t){return new f.scatter(t)}}class g{constructor(t){this.origin=t.origin,this.size=t.size,this.shape=t.shape(this.size,this.origin)}reposition(t){return t.dot(g.translate(...t.mean(0).multiply(-1))).dot(g.scale(...this.size.multiply(2).divide(t.norm(1).max()).set(3)(1))).dot(g.translate(...this.origin))}static translate(t,e,r){return y.array([[1,0,0,0],[0,1,0,0],[0,0,1,0],[t,e,r,1]])}static scale(t,e,r){return y.array([[t,0,0,0],[0,e,0,0],[0,0,r,0],[0,0,0,1]])}static rotate(t,e){const r=Math.cos(t),n=Math.sin(t);return"x"===e?y.array([[1,0,0,0],[0,r,n,0],[0,-n,r,0],[0,0,0,1]]):"y"===e?y.array([[r,0,n,0],[0,1,0,0],[-n,0,r,0],[0,0,0,1]]):"z"===e?y.array([[r,n,0,0],[-n,r,0,0],[0,0,1,0],[0,0,0,1]]):void 0}}class w{constructor(t){this.display=t,this.getExecutorAndBind=this.getExecutorAndBind.bind(this)}getExecutorAndBind(t){return function(e,r){setTimeout(e,this.display.animationPause,t)}}step(t){return new Promise(this.getExecutorAndBind(t))}}class v{constructor(t){this.hasBorder=t.border}}class b{constructor(t,e){this.vertices=t,this.edges=e}static cuboid(t,e){const[r,n,i,s]=t.toRawArray(),a=y.array([[...e.add([0,0,0,0])],[...e.add([0,0,i,0])],[...e.add([0,n,0,0])],[...e.add([0,n,i,0])],[...e.add([r,0,0,0])],[...e.add([r,0,i,0])],[...e.add([r,n,0,0])],[...e.add([r,n,i,0])]]).subtract([r/2,n/2,i/2,0]),o=y.array([[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]]);return new b(a,o)}render(t){t.context.beginPath();for(const[e,r]of this.edges)t.context.moveTo(...this.vertices.slice(e)),t.context.lineTo(...this.vertices.slice(r));t.context.stroke()}}new class{constructor(t){this.scene=t.scene,this.camera=t.camera,this.fileDrop=t.fileDrop,this.socket=t.socket,this.fileDrop.onData=this.addPodFromFileDrop.bind(this),this.socket.onData=this.addPodFromSocket.bind(this),window.setInterval(this.render.bind(this))}addPodFromFileDrop(t){console.log(t)}addPodFromSocket(t){console.log(t)}render(){}}({socket:new class{constructor(t){this.port=t.port||3e3,this.host=t.host||"localhost",this.socket=new WebSocket(`ws://${this.host}:${this.port}/`),this.socket.addEventListener("message",this.read.bind(this)),this.data=null}read(t){}onData(t){}}({port:3e3,host:"localhost"}),fileDrop:new class{constructor(t){this.zone=t.zone,this.onData=t.onData,this.reader=new FileReader,this.reader.onloadend=this.expose.bind(this),this.zone.addEventListener("drop",this.read.bind(this),!1),this.zone.addEventListener("dragover",this.noop,!1)}expose(){this.onData(this.reader.result)}read(t){t.stopPropagation(),t.preventDefault(),Array.from(t.dataTransfer.files).forEach(this.reader.readAsArrayBuffer.bind(this.reader))}noop(t){t.stopPropagation(),t.preventDefault()}}({zone:document.getElementById("canvas")}),camera:new class{constructor(t){this.screen=t.screen,this.stream=t.stream,navigator.mediaDevices.getUserMedia({video:!0}).then(this.connect.bind(this))}connect(t){this.stream=t,this.screen.srcObject=this.stream,this.screen.play()}}({screen:document.getElementById("video")}),scene:new class{constructor(t){this.canvas=t.canvas||document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.mouse=t.mouse||new n({scene:this,isPressed:!1}),this.keyboard=t.keyboard||new i({scene:this}),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.pods=t.pods||[],this.selectedPod=this.pods[0]}render(){this.pods[0].render(this)}}({canvas:document.getElementById("canvas"),pods:[new class{constructor(t){this.data=m.getMediaSource(t.data),this.layout=new g(t.layout),this.playback=new w(t.playback),this.display=new v(t.display),this.first=!0}rotate(t,e){const r=this.layout.shape.vertices.mean(0),n=g.translate(...r.multiply(-1)),i=g.rotate(t,e),s=g.translate(...r),a=y.dot(n,i,s),o=this.data.displayMedia.mean(0),c=g.translate(...o.multiply(-1)),u=g.rotate(t,e),l=g.translate(...o),d=y.dot(c,u,l);this.data.displayMedia=this.data.displayMedia.dot(d),this.layout.shape.vertices=this.layout.shape.vertices.dot(a)}translate(t,e,r,n){this.layout.shape.vertices=this.layout.shape.vertices.dot(g.translate(t,e,r,n))}render(t){(t.keyboard.run(t.selectedPod).length||this.first)&&(t.context.clearRect(0,0,t.width,t.height),this.layout.shape.render(t),this.data.render(t,this.layout,this.playback,this.display),this.first=!1)}subsumes(t){return this.layoutManager.checkBounds(t)}}({data:y.random.randint(0,256,[100,30,4]).set(":",":",3)(1),layout:{origin:y.array([600,400,0,1]),size:y.array([500,500,500,1]),shape:b.cuboid},playback:{animate:!0,repeat:!1,alive:!0,animationPause:0},display:{border:!0}})]})})}]);