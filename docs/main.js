!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!w(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(o(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,s=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=s)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),u=n[r];r<s;u=n[++r])g(u)||!v(u)?a+=" "+u:a+=" "+o(u);return a},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var s,a={};function o(t,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),p(r)?n.showHidden=r:r&&e._extend(n,r),y(n.showHidden)&&(n.showHidden=!1),y(n.depth)&&(n.depth=2),y(n.colors)&&(n.colors=!1),y(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),l(n,t,n.depth)}function u(t,e){var r=o.styles[e];return r?"["+o.colors[r][0]+"m"+t+"["+o.colors[r][1]+"m":t}function c(t,e){return t}function l(t,r,n){if(t.customInspect&&r&&x(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return w(i)||(i=l(t,i,n)),i}var s=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(w(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(m(e))return t.stylize(""+e,"number");if(p(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,r);if(s)return s;var a=Object.keys(r),o=function(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),z(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(r);if(0===a.length){if(x(r)){var u=r.name?": "+r.name:"";return t.stylize("[Function"+u+"]","special")}if(b(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if($(r))return t.stylize(Date.prototype.toString.call(r),"date");if(z(r))return f(r)}var c,v="",j=!1,O=["{","}"];(d(r)&&(j=!0,O=["[","]"]),x(r))&&(v=" [Function"+(r.name?": "+r.name:"")+"]");return b(r)&&(v=" "+RegExp.prototype.toString.call(r)),$(r)&&(v=" "+Date.prototype.toUTCString.call(r)),z(r)&&(v=" "+f(r)),0!==a.length||j&&0!=r.length?n<0?b(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=j?function(t,e,r,n,i){for(var s=[],a=0,o=e.length;a<o;++a)S(e,String(a))?s.push(h(t,e,r,n,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(h(t,e,r,n,i,!0))}),s}(t,r,n,o,a):a.map(function(e){return h(t,r,n,o,e,j)}),t.seen.pop(),function(t,e,r){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(c,v,O)):O[0]+v+O[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,i,s){var a,o,u;if((u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?o=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(o=t.stylize("[Setter]","special")),S(n,i)||(a="["+i+"]"),o||(t.seen.indexOf(u.value)<0?(o=g(r)?l(t,u.value,null):l(t,u.value,r-1)).indexOf("\n")>-1&&(o=s?o.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+o.split("\n").map(function(t){return"   "+t}).join("\n")):o=t.stylize("[Circular]","special")),y(a)){if(s&&i.match(/^\d+$/))return o;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+o}function d(t){return Array.isArray(t)}function p(t){return"boolean"==typeof t}function g(t){return null===t}function m(t){return"number"==typeof t}function w(t){return"string"==typeof t}function y(t){return void 0===t}function b(t){return v(t)&&"[object RegExp]"===j(t)}function v(t){return"object"==typeof t&&null!==t}function $(t){return v(t)&&"[object Date]"===j(t)}function z(t){return v(t)&&("[object Error]"===j(t)||t instanceof Error)}function x(t){return"function"==typeof t}function j(t){return Object.prototype.toString.call(t)}function O(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(y(s)&&(s=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(s)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=p,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=w,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=v,e.isDate=$,e.isError=z,e.isFunction=x,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(2);var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,r;console.log("%s - %s",(t=new Date,r=[O(t.getHours()),O(t.getMinutes()),O(t.getSeconds())].join(":"),[t.getDate(),I[t.getMonth()],r].join(" ")),e.format.apply(e,arguments))},e.inherits=r(3),e._extend=function(t,e){if(!e||!v(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var E="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function F(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(E&&t[E]){var e;if("function"!=typeof(e=t[E]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),i=[],s=0;s<arguments.length;s++)i.push(arguments[s]);i.push(function(t,n){t?r(t):e(n)});try{t.apply(this,i)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),E&&Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=E,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var s=this,a=function(){return i.apply(s,arguments)};e.apply(this,r).then(function(e){t.nextTick(a,null,e)},function(e){t.nextTick(F,e,a)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}}).call(this,r(1))},function(t,e){var r,n,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=o(h);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||l||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";r.r(e);class n{constructor(t){this.dom=t.dom,this.isPressed=!1,this.dom.livefeed.addEventListener("mousedown",this.clickDown.bind(this)),this.dom.livefeed.addEventListener("mouseup",this.clickUp.bind(this)),this.dom.livefeed.addEventListener("mousemove",this.move.bind(this))}move(t){}clickUp(t){this.isPressed=!1,console.log(t)}clickDown(t){this.isPressed=!0,console.log(t)}}class s{constructor(t){this.dom=t.dom,this.handler=t.handler,this.dom.livefeed.addEventListener("drop",this.read.bind(this),!1),this.dom.livefeed.addEventListener("dragover",this.ignore,!1)}ignore(t){t.stopPropagation(),t.preventDefault()}read(t){this.ignore(t);for(const e of t.dataTransfer.files){const t=new FileReader;t.onloadend=function(){this.handler({meta:e,data:t.result})}.bind(this),t.readAsArrayBuffer(e)}}}class a{constructor(t){this.elements=t.elements,this.pressedKeys=new Set,window.addEventListener("keyup",this.keyu.bind(this)),window.addEventListener("keydown",this.keyd.bind(this))}keyd(t){this.pressedKeys.add(t.key)}keyu(t){this.pressedKeys=new Set}}class o{constructor(t){this.dom=t.dom,this.size=t.size,this.media=t.media,this.handler=t.handler,this.region=[0,0,...this.size],this.npixels=this.size[0]*this.size[1],this.take=null,this.frames=[],this.tape=this.dom.backfeed.getContext("2d"),this.dom.video.addEventListener("play",this.play.bind(this)),this.dom.video.addEventListener("pause",this.pause.bind(this)),navigator.mediaDevices.getUserMedia(this.media).then(this.connect.bind(this))}record(){this.tape.drawImage(this.dom.video,...this.region),this.frames.push(this.tape.getImageData(...this.region).data)}play(){this.take=setInterval(this.record.bind(this))}pause(){clearInterval(this.take),this.handler(this.save()),this.frames.length=0}save(){const t=new Uint8ClampedArray(4*this.npixels*this.frames.length);for(let e=0;e<this.frames.length;e++)t.set(this.frames[e],4*this.npixels*e);return t}connect(t){this.dom.video.srcObject=t}}class u{constructor(t){this.dom=t.dom,this.media=t.media,this.handler=t.handler,this.samples=[],this.recording=null,this.reader=new FileReader,this.reader.onloadend=this.save.bind(this),this.dom.audio.addEventListener("play",this.play.bind(this)),this.dom.audio.addEventListener("pause",this.pause.bind(this)),navigator.mediaDevices.getUserMedia(this.media).then(this.connect.bind(this))}play(){this.recording.start()}pause(){this.recording.stop()}save(){(new window.AudioContext).decodeAudioData(this.reader.result).then(this.send.bind(this))}send(t){this.handler(t.getChannelData(0))}record(t){this.reader.readAsArrayBuffer(t.data)}connect(t){this.dom.audio.srcObject=t,this.recording=new MediaRecorder(t),this.recording.ondataavailable=this.record.bind(this)}}const c=":",l="-",f="*",h="of",d="max",p="min",g="add",m="sum",w="mean",y="norm",b="round",v="assign",$="divide",z="default",x="subtract",O="multiply",I="shape",S="offset",E="contig",F="strides",N=function(t){return new Function("args",`\n        const i0 = this.suite[${t[0]}] || (this.suite[${t[0]}] = {})\n\n        ${t.map(function(t,e){return e?`const i${e} = i${e-1}[${t}] || (i${e-1}[${t}] = {})`:""}).join("\n")}\n        \n        return i${t.length-1}[args.method] || i${t.length-1}\n    `)},A=function(t){return new Function("args",`\n        let func = this.route(args)\n\n        if (func.constructor === Object)\n            ${T(t)}   \n\n        return func(args)\n    `)},T=function(t){return`switch(args.method){\n        ${Object.entries(t).map(function([t,e]){return`case '${t}': ${Object.keys(e).map(function(e,r){return(r?"else ":"")+`if(${e}){ \n                    func = \n                    func[args.method] = \n                    this.methods['${t}']['${e}'].call(null, args) \n                }`}).join("\n")} break`}).join("\n")}\n    }`};class k{constructor({hash:t,...e}){this.suite={},this.hash=t,this.methods=e,this.call=A(this.methods).bind(this),this.route=N(this.hash).bind(this)}static suite(t){return new k(t)}}const M=function(t){return t.join("\n")},P=function(t){const e=[],r=[],n=[...t.keys()];for(let n=0;n<t.length;n++)t[n]===l?r.push(n):e.push(n);return[e,r,n]},D=function(t,e,r,n){let i=r+e.offset,s=1;for(const r of t.slice().reverse()){const t=e.shape[r],a=e.strides[r],o=Math.floor(n/s)%t;s*=t,i+=o*a}return i},L=function({count:t,map:e,reduce:r,metaindices:n}){const i=new Array(t);for(let t=0;t<i.length;t++)i[t]=e(...n.map(function(e){return D(...e,t)}));return r(i)},_=function(t,e,r=0){return`args.${e}.offset + ${t.map(function(t,e){return function(r,n){return`a${r+e} * args.${t}.strides[${n}]`}}(e,r)).join(" + ")||0}`},U=function(t,e,r){return`${t.map(function(t){return function(e,r){return`for(let a${e} = 0; a${e} < args.${t}.shape[${e}]; a${e}++){`}}(e)).join("\n")} \n                ${r} \n            ${"}".repeat(t.length)}`};var q=function(t){const[e,r,n]=P(Array.from(this.axes));return`\n        ${t.global}\n        \n        ${U(e,h,`\n            const ri = ${_(e,"result")}\n            ${t.init}\n            \n            ${U(r,h,`\n                const ai = ${_(n,h)}\n                ${t.reduce}\n            `)}\n            \n            args.result.data[ri] = ${t.assign}\n        `)}\n            \n        return args.result\n    `},C={argmax:function(t){return new Function("args",q.call(t,{init:"let valmax = Number.POSITIVE_INFINITY, argmax = 0",reduce:"if(args.of.data[ai] > valmax) { valmax = args.of.data[ai]; argmax = a0 }",assign:"argmax"}))},argmin:function(t){return new Function("args",q.call(t,{init:"let valmin = Number.POSITIVE_INFINITY, argmin = 0",reduce:"if(args.of.data[ai] < valmin) { valmin = args.of.data[ai]; argmin = a0 }",assign:"argmin"}))},min:function(t){return new Function("args",q.call(t,{init:"let min = Number.POSITIVE_INFINITY",reduce:"min = Math.min(min, args.of.data[ai])",assign:"min"}))},max:function(t){return new Function("args",q.call(t,{init:"let max = Number.NEGATIVE_INFINITY",reduce:"max = Math.max(max, args.of.data[ai])",assign:"max"}))},mean:function(t){return new Function("args",q.call(t,{global:`const sizeOfInnerAxes = ${t.of.size/t.result.size}`,init:"let sum = 0",reduce:"sum += args.of.data[ai]",assign:"sum / sizeOfInnerAxes"}))},norm:function(t){return new Function("args",q.call(t,{init:"let sumSquares = 0",reduce:"sumSquares += args.of.data[ai] * args.of.data[ai]",assign:"Math.sqrt(sumSquares)"}))},prod:function(t){return new Function("args",q.call(t,{init:"let prod = 1",reduce:"prod *= args.of.data[ai]",assign:"prod"}))},round:function(t){return new Function("args",q.call(t,{assign:"args.of.data[ai].toFixed(args.precision)"}))},sum:function(t){return new Function("args",q.call(t,{init:"let sum = 0",reduce:"sum += args.of.data[ai]",assign:"sum"}))},cumsum:function(t){return new Function("args",q.call(t,{init:`let cumsum = 0, av = a${axis}`,reduce:`if(a${axis} <= av) cumsum += args.of.data[ai]`,assign:"cumsum"}))},cumprod:function(t){return new Function("args",q.call(t,{init:`let cumprod = 1, av = a${axis}`,reduce:`if(a${axis} <= av) cumprod *= args.of.data[ai]`,assign:"cumprod"}))}},R=function(t){const[e,r,n]=P(Array.from(this.axes)),i=[...e.keys()];return`\n        ${t.global}\n        \n        ${L({count:this.result.size,metaindices:[[i,this.result,0],[e,this.of,0]],reduce:M,map:function(e,n){return`\n                    ${t.init}\n                        \n                    ${L({count:this.of.size/this.result.size,metaindices:[[r,this.of,n]],map:function(e){return t.map(`args.of.data[${e}]`)},reduce:t.reduce})}\n\n                    args.result.data[${e}] = ${t.assign}\n                `}.bind(this)})}\n            \n        return args.result\n    `},V={argmax:function(t){return new Function("args",R.call(t,{global:"let argmax, valmax",init:"argmax = 0, valmax = Number.NEGATIVE_INFINITY",map:function(t){return`if(${t} > valmax) valmax = ${t}, argmax = ${i}`},reduce:M,assign:"argmax"}))},argmin:function(t){return new Function("args",R.call(t,{global:"let argmin, valmin",init:"argmin = 0, valmin = Number.POSITIVE_INFINITY",map:function(t){return`if(${t} > valmin) valmin = ${t}, argmin = ${i}`},reduce:M,assign:"argmin"}))},max:function(t){return new Function("args",R.call(t,{global:"let max",init:"max = Number.NEGATIVE_INFINITY",map:function(t){return`if(${t} > max) max = ${t}`},reduce:M,assign:"max"}))},min:function(t){return new Function("args",R.call(t,{global:"let min",init:"min = Number.POSITIVE_INFINITY",map:function(t){return`if(${t} < min) min = ${t}`},reduce:M,assign:"min"}))},mean:function(t){return new Function("args",R.call(t,{global:`let mean; const innerSize = ${t.of.size/t.result.size}`,map:function(t){return t},reduce:function(t){return`mean = (${t.join("+")}) / innerSize`},assign:"mean"}))},norm:function(t){return new Function("args",R.call(t,{global:"let norm",map:function(t){return`${t} * ${t}`},reduce:function(t){return`norm = Math.sqrt(${t.join("+")})`},assign:"norm"}))},prod:function(t){return new Function("args",R.call(t,{global:"let prod",map:function(t){return t},reduce:function(t){return`prod = ${t.join("*")}`},assign:"prod"}))},round:function(t){return new Function("args",R.call(t,{global:"let rounded",map:function(t){return`${t}.toFixed(args.precision)`},reduce:function(t){return`rounded = ${t.toString()}`},assign:"rounded"}))},sum:function(t){return new Function("args",R.call(t,{global:"let sum",map:function(t){return t},reduce:function(t){return`sum = ${t.join("+")}`},assign:"sum"}))},cumsum:function(t){let e=-1;return new Function("args",R.call(t,{global:"cumsum",map:function(t){return t},reduce:function(t){return e++,`cumsum = ${t.filter(function(t,r){return r<=e}).join("+")}`},assign:"cumsum"}))},cumprod:function(t){let e=-1;return new Function("args",R.call(t,{global:"cumprod",map:function(t){return t},reduce:function(t){return e++,`cumprod = ${t.filter(function(t,r){return r<=e}).join("*")}`},assign:"cumprod"}))}},Y=k.suite({argmax:{"args.of.size / args.result.size <= 40":V.argmax,"args.of.size / args.result.size > 40":C.argmax},argmin:{"args.of.size / args.result.size <= 40":V.argmin,"args.of.size / args.result.size > 40":C.argmin},min:{"args.of.size / args.result.size <= 40":V.min,"args.of.size / args.result.size > 40":C.min},max:{"args.of.size / args.result.size <= 40":V.max,"args.of.size / args.result.size > 40":C.max},mean:{"args.of.size / args.result.size <= 40":V.mean,"args.of.size / args.result.size > 40":C.mean},norm:{"args.of.size / args.result.size <= 15":V.norm,"args.of.size / args.result.size > 15":C.norm},prod:{"args.of.size / args.result.size <= 40":V.prod,"args.of.size / args.result.size > 40":C.prod},round:{true:C.round},sum:{"args.of.size / args.result.size <= 40":V.sum,"args.of.size / args.result.size > 40":C.sum},cumsum:{"args.of.size / args.result.size <= 40":V.cumsum,"args.of.size / args.result.size > 40":C.cumsum},cumprod:{"args.of.size / args.result.size <= 40":V.cumprod,"args.of.size / args.result.size > 40":C.cumprod},hash:["args.of.id","args.result.id"]}),J=function(t){const e=[...this.of.shape.keys()],r=[...this.with.shape.keys()],n=[...this.result.shape.keys()],i=this.of.shape.length-this.with.shape.length;return`\n        ${U(e,h,`\n            const ai = ${_(e,h)}\n            const bi = ${_(r,"with",i)}\n            const ri = ${_(n,"result")}\n\n            args.result.data[ri] = ${t.reduce("args.of.data[ai]","args.with.data[bi]")}\n        `)}\n        \n        return args.result\n    `},H=function(t){const e=[...this.of.shape.keys()],r=[...this.with.shape.keys()],n=[...this.result.shape.keys()];return`\n        ${L({count:this.result.size,metaindices:[[e,this.of,0],[r,this.with,0],[n,this.result,0]],reduce:M,map:function(e,r,n){return`args.result.data[${n}] = ${t.reduce(`args.of.data[${e}]`,`args.with.data[${r}]`)}`}})}\n        \n        return args.result\n    `},G=function(t,e){return function(r){return new Function("args",e.call(r,{reduce:function(e,r){return`${e}${t}${r}`}}))}},B=k.suite({add:{"args.with.size <= 40":G.call(null,"+",H),"args.with.size > 40":G.call(null,"+",J)},subtract:{"args.with.size <= 40":G.call(null,"-",H),"args.with.size > 40":G.call(null,"-",J)},multiply:{"args.with.size <= 40":G.call(null,"*",H),"args.with.size > 40":G.call(null,"*",J)},divide:{"args.with.size <= 40":G.call(null,"/",H),"args.with.size > 40":G.call(null,"/",J)},assign:{"args.with.size <= 40":G.call(null,"=",H),"args.with.size > 40":G.call(null,"=",J)},hash:["args.of.id","args.with.id","args.result.id"]});const K=function(t,e){return void 0===e&&([t,e]=W.call(this,t)),this.offset+t*this.strides[0]+e*this.strides[1]},W=function(t){const e=this.shape[0];return[Math.floor(t/e)%this.shape[0],Math.floor(t/1)%this.shape[1]]},Z=function(t,e,r){const n=Math.round(Math.sqrt(t.length));return t.filter(function(t,i){return i%n!==r&&Math.floor(i/n)!==e})};var Q=k.suite({default:{"args.result.size > 25":function(t){const e=Math.floor(Math.sqrt(t.result.data.length)),r=t.of.copy();for(let n=0;n<e;n+=1){let i=r.data[r.offset+n*r.strides[0]+n];if(0==i){for(ii=n+1;ii<e;ii+=1)if(0!=r.data[r.offset+ii*r.strides[0]+n]){for(j=0;j<e;j++)i=r.data[r.offset+n*r.strides[0]+j],r.data[r.offset+n*r.strides[0]+j]=r.data[r.offset+ii*r.strides[0]+j],r.data[r.offset+ii*r.strides[0]+j]=i,i=t.result.data[n*e+j],t.result.data[n*e+j]=t.result.data[ii*e+j],t.result.data[ii*e+j]=i;break}if(0==(i=r.data[r.offset+n*r.strides[0]+n]))return}for(let s=0;s<e;s++)r.data[r.offset+n*r.strides[0]+s]=r.data[r.offset+n*r.strides[0]+s]/i,t.result.data[n*e+s]=t.result.data[n*e+s]/i;for(let s=0;s<e;s++)if(s!=n){i=r.data[r.offset+s*r.strides[0]+n];for(let a=0;a<e;a++)r.data[r.offset+s*r.strides[0]+a]-=i*r.data[r.offset+n*r.strides[0]+a],t.result.data[s*e+a]-=i*t.result.data[n*e+a]}}return t.result},"args.result.size <= 25":function(t){const e=Math.round(Math.sqrt(t.of.size)),r=[...new Array(t.of.size).keys()];return new Function("args",`\n        ${new Array(t.result.size).fill(null).map(function(n,i){const s=Math.floor(i/e),a=i%e;return`args.result.data[${K.call(t.result,s,a)}] = ${Math.pow(-1,(s+a)%2)} * (${function t(e){const r=Math.round(Math.sqrt(e.length));if(1===r)return`args.of.data[${K.call(this,e[0])}]`;if(2===r){const t=K.call(this,e[0]),r=K.call(this,e[1]),n=K.call(this,e[2]);return`args.of.data[${t}] * args.of.data[${K.call(this,e[3])}] - args.of.data[${n}] * args.of.data[${r}]`}const n=[];for(let i=0;i<r;i++){const r=Math.pow(-1,i%2),s=`args.of.data[${K.call(this,e[i])}]`,a=t.call(this,Z(e,0,i));n.push(`${r} * ${s} * (${a})`)}return n.join(" + ")}.call(t.of,Z(r,a,s))})`}).join("\n")}\n\n        const det = ${new Array(e).fill(null).map(function(e,r){return`args.of.data[${K.call(t.of,0,r)}] * args.result.data[${K.call(t.result,r,0)}]`}).join(" + ")}\n\n        ${new Array(t.result.size).fill(null).map(function(r,n){const i=Math.floor(n/e),s=n%e;return`args.result.data[${K.call(t.result,i,s)}] /= det`}).join("\n")}\n\n        return args.result\n    `)}},hash:["args.of.id","args.result.id"]}),X=k.suite({default:{"args.result.size > 500":function(){return function(t){for(let e=0;e<t.of.shape[0];e++)for(let r=0;r<t.with.shape[1];r++)for(let n=0;n<t.of.shape[1];n++)t.result.data[e*t.with.shape[1]+r]+=t.of.data[e*t.of.strides[0]+n*t.of.strides[1]+t.of.offset]*t.with.data[r*t.with.strides[1]+n*t.with.strides[0]+t.with.offset];return t.result}},"args.result.size <= 500":function(t){const e=t.of.shape[0],r=t.with.shape[1],n=t.of.shape[1];return new Function("args",`\n        ${new Array(e*r).fill(null).map(function(i,s){const[a,o]=[Math.floor(s/r)%e,Math.floor(s/1)%r];return`args.result.data[${t.result.offset+a*t.result.strides[0]+o*t.result.strides[1]}] = ${new Array(n).fill(null).map(function(e,r){return`args.of.data[${a*t.of.strides[0]+r*t.of.strides[1]+t.of.offset}] * args.with.data[${o*t.with.strides[1]+r*t.with.strides[0]+t.with.offset}]`}).join("+")}`}).join("\n")}\n        \n        return args.result\n    `)}},hash:["args.of.id","args.with.id","args.result.id"]}),tt=k.suite({default:{true:function(t){const e=3===t.of.shape[0]?t.of.strides[0]:t.of.strides[1],r=3===t.with.shape[0]?t.with.strides[0]:t.with.strides[1],n=3===t.result.shape[0]?t.result.strides[0]:t.result.strides[1];return new Function("args",`\n                args.result.data[${t.result.offset+0*n}] =\n                    args.of.data[${1*e+t.of.offset}] * args.with.data[${2*r+t.with.offset}] -\n                    args.of.data[${2*e+t.of.offset}] * args.with.data[${1*r+t.with.offset}]\n        \n                args.result.data[${t.result.offset+1*n}] =\n                    args.of.data[${2*e+t.of.offset}] * args.with.data[${0*r+t.with.offset}] -\n                    args.of.data[${0*e+t.of.offset}] * args.with.data[${2*r+t.with.offset}]\n        \n                args.result.data[${t.result.offset+2*n}] =\n                    args.of.data[${0*e+t.of.offset}] * args.with.data[${1*r+t.with.offset}] -\n                    args.of.data[${1*e+t.of.offset}] * args.with.data[${0*r+t.with.offset}]\n        \n                return args.result\n            `)}},hash:["args.of.id","args.with.id","args.result.id"]});const et=function(t,e){return t+Math.floor(Math.random()*(e-t))},rt=Object.assign(Math,{add:function(t,e){return t+e},subtract:function(t,e){return t-e},divide:function(t,e){return t/e},multiply:function(t,e){return t*e}}),nt=function t(e,r=[]){return e.constructor===Number?r:t(e[0],r.concat(e.length))},it=function(){const t=function t(e=this.offset,r=0){if(r===this.shape.length)return n=`${this.data[e]}`,n.indexOf(".")>=0?n:n+".0";var n;return["[","]"].join(new Array(this.shape[r]).fill(null).map(function(n,i){return t.call(this,i*this.strides[r]+e,r+1)},this).join(","+"\n".repeat(this.shape.length-1-r)))}.call(this),e=function(t){return t.match(/-*\d*\./g).reduce(st,0)-1}(t),r=function(t){return t.match(/\.\d+(e-*\d+)*/g).reduce(st,0)-1}(t);return t.replace(/-*\d*\.*\d+(e-*\d+)*/g,function(t){return function(t,e,r){let[n,i]=t.split(".");return n=n.padStart(e," "),i=i.padEnd(r," "),`${n}.${i}`}(t,e,r)})};function st(t,e){return Math.max(t,e.length)}var at=r(0);const ot=function(t){let e=-1;for(let r=0;r<t.length;r++){if(e>=0&&t[r].constructor===String&&r-e>1)return!1;t[r].constructor===String&&(e=r)}return!0},ut=function(t,e){const r=new Array(t.length);let n=e||1;r[r.length-1]=n;for(let e=t.length-1;e>0;e--)r[e-1]=n*=t[e];return r},ct=function(t,e){const r=new Array(t.length),n=t.reduce(rt.multiply);for(let i=0;i<t.length;i++)r[i]=t[i]<0?-e/n:t[i];return r};class lt{constructor(t){this.shape=I in t?t.shape:[],this.offset=S in t?t.offset:0,this.contig=!(E in t)||t.contig,this.strides=F in t?t.strides:ut(this.shape),this.id=`${this.shape}|${this.strides}|${this.offset}`,this.size=this.shape.reduce(rt.multiply,1),this.lastStride=this.strides[this.strides.length-1],this.axes={ALL:f.repeat(this.shape.length),NONE:l.repeat(this.shape.length)}}copy(){return new lt(JSON.parse(JSON.stringify(this)))}slice(t){const e=new Array,r=new Array,n=ot(t);let i=this.offset;for(let n=0;n<this.shape.length;n++)if(t[n]===c||void 0===t[n])e.push(this.shape[n]),r.push(this.strides[n]);else if(t[n].constructor===Number)i+=this.strides[n]*t[n];else if(t[n].constructor===String){let[s,a]=t[n].split(c).map(Number);i+=this.strides[n]*s,e.push(a-s),r.push(this.strides[n])}return new lt({shape:e,strides:r,offset:i,contig:n})}axisSlice(t){return new lt({shape:this.shape.filter(function(e,r){return t[r]!==l})})}transpose(){return new lt({shape:this.shape.slice().reverse(),strides:this.strides.slice().reverse(),offset:this.offset,contig:!1})}reshape(t){const e=ct(t,this.size);return new lt({shape:e,strides:ut(e,this.lastStride)})}}class ft{constructor({header:t,type:e,init:r=function(){return new this.type(this.size)}}){this.header=t;for(const t in this.header)this[t]=this.header[t];this.type=e||Float64Array,this.data=r.call(this)}static sanitize(t){void 0!==t.of&&t.of.constructor!==ft&&(t.of=ft.array({from:t.of})),void 0!==t.with&&t.with.constructor!==ft&&(t.with=ft.array({from:t.with})),void 0!==t.result&&t.result.constructor!==ft&&(t.result=ft.array({from:t.result}))}static array(t){return new ft({type:t.type,header:new lt({shape:nt(t.from)}),init:function(){return t.from.constructor===Array?new this.type(t.from.flat(Number.POSITIVE_INFINITY)):t.from.constructor===Number?new this.type(this.size).fill(t.from):t.from.constructor===Int8Array||t.from.constructor===Uint8Array||t.from.constructor===Uint8ClampedArray||t.from.constructor===Int16Array||t.from.constructor===Uint16Array||t.from.constructor===Int32Array||t.from.constructor===Uint32Array||t.from.constructor===Float32Array||t.from.constructor===Float64Array?t.from:void 0}})}static zeros(t){return new ft({type:t.type,header:new lt({shape:t.shape})})}static ones(t){return new ft({type:t.type,header:new lt({shape:t.shape}),init:function(){return new this.type(this.size).fill(1)}})}static arange(t){return new ft({type:t.type,header:new lt({shape:[rt.round((t.stop-(t.start||0))/(t.step||1))]}),init:function(){const e=new this.type(this.size);for(let r=t.start||0,n=0;r<t.stop;r+=t.step||1,n++)e[n]=r;return e}})}static rand(t){return new ft({type:t.type,header:new lt({shape:t.shape}),init:function(){const t=new this.type(this.size);for(let e=0;e<t.length;e++)t[e]=rt.random();return t}})}static randint(t){return new ft({type:t.type||Int32Array,header:new lt({shape:t.shape}),init:function(){const e=new this.type(this.size);for(let r=0;r<e.length;r++)e[r]=et(t.low,t.high);return e}})}static dot(t){return ft.sanitize(t),X.call({of:t.of,with:t.with,method:z,result:t.result||new ft({type:t.type,header:new lt({shape:[t.of.shape[0],t.with.shape[1]]})})})}static cross(t){return ft.sanitize(t),tt.call({of:t.of,with:t.with,method:z,result:t.result||new ft({type:t.type,header:new lt({shape:[3]})})})}static inv(t){return ft.sanitize(t),Q.call({of:t.of,method:z,result:t.result||this.eye({shape:t.of.shape})})}static eye(t){return new ft({type:t.type,header:new lt({shape:t.shape}),init:function(){const t=new this.type(this.size),e=this.strides.reduce(rt.add),r=rt.min(...this.shape);for(let n=0;n<r*e;n+=e)t[n]=1;return t}})}copy(t=this){return new ft({type:this.type,header:this.header,init:function(){return t.data.slice()}})}gpair(t,e){return ft.sanitize(t),B.call({of:this,with:t.with,method:e,result:t.result||new ft({type:this.type,header:new lt({shape:this.shape})})})}gaxis(t,e){return Y.call({of:this,method:e,axes:t.axes||this.axes.NONE,result:t.result||new ft({type:this.type,header:this.header.axisSlice(t.axes||this.axes.NONE)})})}norm(t={}){return this.gaxis(t,y)}mean(t={}){return this.gaxis(t,w)}sum(t={}){return this.gaxis(t,m)}max(t={}){return this.gaxis(t,d)}min(t={}){return this.gaxis(t,p)}add(t){return this.gpair(t,g)}divide(t){return this.gpair(t,$)}subtract(t){return this.gpair(t,x)}multiply(t){return this.gpair(t,O)}inv(t={}){return ft.inv({of:this,result:t.result})}dot(t){return ft.dot({of:this,with:t.with,result:t.result})}cross(t){return ft.cross({of:this,with:t.with,result:t.result})}round(t){return Y.call({of:this,method:b,axes:this.axes.ALL,precision:t.precision,result:t.result||new ft({type:this.type,header:new lt({shape:this.shape})})})}slice(t,e=this){return new ft({type:this.type,header:this.header.slice(t.with),init:function(){return e.data}})}T(t=this){return new ft({type:this.type,header:this.header.transpose(),init:function(){return t.data}})}reshape(t,e=this){return this.contig?new ft({type:this.type,header:this.header.reshape(t.shape),init:function(){return e.data}}):Y.call({of:this,axes:this.axes.ALL,method:v,result:new ft({type:this.type,header:new lt({shape:t.shape}),init:function(){return e.data}})})}set(t){return ft.sanitize(t),B.call({of:this,with:t.with,method:v,result:this})}valueOf(){return this.data[this.offset]}toString(){return it.call(this)}[at.inspect.custom](){return this.toString()}}window.bb=ft,window.app=new class{constructor(t){this.boxes=[],this.dom=t.dom,this.mouse=new n({dom:this.dom}),this.keyboard=new a({dom:this.dom}),this.microphone=new u({dom:this.dom,media:{audio:!0},handler:this.loadfeed.bind(this)}),this.camcorder=new o({dom:this.dom,size:[20,20],media:{video:!0},handler:this.loadfeed.bind(this)}),this.fileDrop=new s({dom:this.dom,handler:this.loadfeed.bind(this)})}loadfeed(t){this.boxes.push(t)}}({dom:document.all}),window.app.dom.livefeed.width=window.innerWidth,window.app.dom.livefeed.height=window.innerHeight,window.addEventListener("resize",function(){window.app.dom.livefeed.width=window.innerWidth,window.app.dom.livefeed.height=window.innerHeight}),window.app.dom.media.hidden=!0,window.app.dom.curtain.addEventListener("click",function(){window.app.dom.media.hidden=!window.app.dom.media.hidden})}]);