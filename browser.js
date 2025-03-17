// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,I=Object.prototype,N=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString,gr=B();function br(r){return"object"==typeof r&&(r instanceof vr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}var xr,Ur=2147483647,Fr=2146435072,Tr="function"==typeof Uint32Array,Ir="function"==typeof Uint32Array?Uint32Array:null,Nr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Tr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var kr,Vr=xr,Pr="function"==typeof Float64Array,Gr="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,e,t;if("function"!=typeof Gr)return!1;try{e=new Gr([1,3.14,-3.14,NaN]),t=e,r=(Pr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r,Cr=kr,Hr="function"==typeof Uint8Array,Wr="function"==typeof Uint8Array?Uint8Array:null,Br="function"==typeof Uint8Array?Uint8Array:void 0;$r=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,256,257]),t=e,r=(Hr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr,Mr=$r,Zr="function"==typeof Uint16Array,Xr="function"==typeof Uint16Array?Uint16Array:null,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Zr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr={uint16:Rr,uint8:Mr};(zr=new qr.uint16(1))[0]=4660;var Dr=52===new qr.uint8(zr.buffer)[0],Jr=!0===Dr?1:0,Kr=new Cr(1),Qr=new Vr(Kr.buffer);function re(r){return Kr[0]=r,Qr[Jr]}var ee,te,ne=1048575,oe=!0===Dr?0:1,ie=new Cr(1),ae=new Vr(ie.buffer);!0===Dr?(ee=1,te=0):(ee=0,te=1);var ue={HIGH:ee,LOW:te},ce=new Cr(1),fe=new Vr(ce.buffer),le=ue.HIGH,se=ue.LOW;function pe(r,e){return fe[le]=r,fe[se]=e,ce[0]}var ye=Math.floor,ve=Number.POSITIVE_INFINITY,de=vr.NEGATIVE_INFINITY,ge=1023,be=1023,he=-1023,we=-1074;function me(r){return r!=r}function je(r){return r===ve||r===de}var Ae,_e,Ee=2147483648;!0===Dr?(Ae=1,_e=0):(Ae=0,_e=1);var Oe={HIGH:Ae,LOW:_e},Se=new Cr(1),xe=new Vr(Se.buffer),Ue=Oe.HIGH,Fe=Oe.LOW;function Te(r,e,t,n){return Se[0]=r,e[n]=xe[Ue],e[n+t]=xe[Fe],e}function Ie(r){return Te(r,[0,0],1,0)}$(Ie,"assign",Te);var Ne=[0,0],ke=22250738585072014e-324;function Ve(r){return Math.abs(r)}var Pe=4503599627370496;function Ge(r,e,t,n){return me(r)||je(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Ve(r)<ke?(e[n]=r*Pe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Ge(r,[0,0],1,0)}),"assign",Ge);var Le=2220446049250313e-31,$e=2148532223,Ce=[0,0],He=[0,0];function We(r,e){var t,n,o,i,a,u;return 0===e||0===r||me(r)||je(r)?r:(Ge(r,Ce,1,0),r=Ce[0],e+=Ce[1],e+=function(r){var e=re(r);return(e=(e&Fr)>>>20)-ge|0}(r),e<we?(o=0,i=r,Ie.assign(o,Ne,1,0),a=Ne[0],a&=Ur,u=re(i),pe(a|=u&=Ee,Ne[1])):e>be?r<0?de:ve:(e<=he?(e+=52,n=Le):n=1,Ie.assign(r,He,1,0),t=He[0],t&=$e,n*pe(t|=e+ge<<20,He[1])))}function Be(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Re=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ze=16777216,Xe=5.960464477539063e-8,Ye=Be(20),ze=Be(20),qe=Be(20),De=Be(20);function Je(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Xe*b|0,De[y]=b-Ze*l|0,b=n[g-1]+l,g-=1;if(b=We(b,o),b-=8*ye(.125*b),b-=d=0|b,s=0,o>0?(d+=y=De[t-1]>>24-o,De[t-1]-=y<<24-o,s=De[t-1]>>23-o):0===o?s=De[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=De[y],0===f?0!==g&&(f=1,De[y]=16777216-g):De[y]=16777215-g;if(o>0)switch(o){case 1:De[t-1]&=8388607;break;case 2:De[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=We(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=De[y];if(0===g){for(v=1;0===De[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Re[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Je(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===De[t];)t-=1,o-=24;else(b=We(b,-o))>=Ze?(l=Xe*b|0,De[t]=b-Ze*l|0,o+=24,De[t+=1]=l):De[t]=0|b;for(l=We(1,o),y=t;y>=0;y--)n[y]=l*De[y],l*=Xe;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Me[v]*n[y+v];qe[t-y]=l}for(l=0,y=t;y>=0;y--)l+=qe[y];for(e[0]=0===s?l:-l,l=qe[0]-l,y=1;y<=t;y++)l+=qe[y];return e[1]=0===s?l:-l,7&d}function Ke(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Ye[c]=f<0?0:Re[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Ye[a+(c-f)];ze[c]=o}return Je(r,e,4,ze,u,4,i,a,Ye)}var Qe=Math.round,rt=.6366197723675814,et=1.5707963267341256,tt=6077100506506192e-26,nt=6077100506303966e-26,ot=20222662487959506e-37,it=20222662487111665e-37,at=84784276603689e-45,ut=2047;function ct(r,e,t){var n,o,i,a,u;return i=r-(n=Qe(r*rt))*et,a=n*tt,u=e>>20|0,t[0]=i-a,u-(re(t[0])>>20&ut)>16&&(a=n*ot-((o=i)-(i=o-(a=n*nt))-a),t[0]=i-a,u-(re(t[0])>>20&ut)>49&&(a=n*at-((o=i)-(i=o-(a=n*it))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var ft=0,lt=16777216,st=1.5707963267341256,pt=6077100506506192e-26,yt=2*pt,vt=3*pt,dt=4*pt,gt=598523,bt=1072243195,ht=1073928572,wt=1074752122,mt=1074977148,jt=1075183036,At=1075388923,_t=1075594811,Et=1094263291,Ot=[0,0,0],St=[0,0];function xt(r,e){var t,n,o,i,a,u,c;if((o=re(r)&Ur|0)<=bt)return e[0]=r,e[1]=0,0;if(o<=wt)return(o&ne)===gt?ct(r,o,e):o<=ht?r>0?(c=r-st,e[0]=c-pt,e[1]=c-e[0]-pt,1):(c=r+st,e[0]=c+pt,e[1]=c-e[0]+pt,-1):r>0?(c=r-2*st,e[0]=c-yt,e[1]=c-e[0]-yt,2):(c=r+2*st,e[0]=c+yt,e[1]=c-e[0]+yt,-2);if(o<=_t)return o<=jt?o===mt?ct(r,o,e):r>0?(c=r-3*st,e[0]=c-vt,e[1]=c-e[0]-vt,3):(c=r+3*st,e[0]=c+vt,e[1]=c-e[0]+vt,-3):o===At?ct(r,o,e):r>0?(c=r-4*st,e[0]=c-dt,e[1]=c-e[0]-dt,4):(c=r+4*st,e[0]=c+dt,e[1]=c-e[0]+dt,-4);if(o<Et)return ct(r,o,e);if(o>=Fr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ie[0]=r,ae[oe]}(r),c=pe(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Ot[a]=0|c,c=(c-Ot[a])*lt;for(Ot[2]=c,i=3;Ot[i-1]===ft;)i-=1;return u=Ke(Ot,St,n,i),r<0?(e[0]=-St[0],e[1]=-St[1],-u):(e[0]=St[0],e[1]=St[1],u)}var Ut=-.16666666666666632,Ft=.00833333333332249,Tt=-.0001984126982985795,It=27557313707070068e-22,Nt=-2.5050760253406863e-8,kt=1.58969099521155e-10,Vt=.0416666666666666,Pt=-.001388888888887411,Gt=2480158728947673e-20,Lt=-2.7557314351390663e-7,$t=2.087572321298175e-9,Ct=-11359647557788195e-27;function Ht(r,e,t,n,o){var i,a,u,c,f;return a=Ft+(f=r*r)*(Tt+f*It)+f*(c=f*f)*(Nt+f*kt),u=f*r,t[o]=0===e?r+u*(Ut+f*a):r-(f*(.5*e-u*a)-e-u*Ut),a=f*(Vt+f*(Pt+f*Gt)),a+=c*c*(Lt+f*($t+f*Ct)),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var Wt=1072243195,Bt=1044381696,Rt=[0,0];function Mt(r,e,t,n){var o,i;if(o=re(r),(o&=Ur)<=Wt)return o<Bt&&0==(0|r)&&(e[n]=r,e[n+t]=0),Ht(r,0,e,t,n);if(o>=Fr)return e[n]=NaN,e[n+t]=NaN,e;switch(i=xt(r,Rt),Ht(Rt[0],Rt[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}$((function(r){return Mt(r,[0,0],1,0)}),"assign",Mt);var Zt=1.5707963267948966,Xt=3.141592653589793,Yt=[0,0];function zt(r){var e,t,n,o,i,a,u;return(e=(t=Ve(r))*t)<2.5625?n=t*function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),t=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(e=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),t=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),e/t)}(a=e*e):t>36974?n=.5:(u=1/((a=Xt*(e=t*t))*a),a=1/a,o=1-u*function(r){var e,t;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(e=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),t=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(e=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),t=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),e/t)}(u),i=a*function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),t=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(e=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),t=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),e/t)}(u),Mt(a=Zt*e,Yt,1,0),a=Xt*t,n=.5+(o*Yt[0]-i*Yt[1])/a),r<0&&(n=-n),n}return function(r){return Sr(r,zt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFresnelc=e();
//# sourceMappingURL=browser.js.map
