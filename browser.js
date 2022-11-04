// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFresnelc=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,v="set"in e,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),v&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,e,n;if(null==r)return b.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[w]=e:delete r[w],n}:function(r){return b.call(r)},g=Boolean.prototype.toString;var h=s();function A(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||A(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",A);var U="object"==typeof self?self:null,N="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(N)return N;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=F.document&&F.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,e,n,o;if(("Object"===(e=j(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!x(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof I||"function"==typeof T?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,e){var n,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(n={invalid:NaN},arguments.length>2&&(u=Z(n,e)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var e;return i?{done:!0}:(e=r.next()).done?(i=!0,e):{value:k(e.value)?t(e.value):n.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),t,n)}}var rr="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var er,nr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,e;if("function"!=typeof tr)return!1;try{t=new tr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(rr&&e instanceof Uint32Array||"[object Uint32Array]"===j(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var or=er,ur="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var fr,ar="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,e;if("function"!=typeof ir)return!1;try{t=new ir([1,3.14,-3.14,NaN]),e=t,r=(ur&&e instanceof Float64Array||"[object Float64Array]"===j(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var cr=fr,lr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,pr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,e;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),e=t,r=(lr&&e instanceof Uint8Array||"[object Uint8Array]"===j(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var mr,wr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,e;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===j(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var jr,gr={uint16:mr,uint8:sr};(jr=new gr.uint16(1))[0]=4660;var hr=52===new gr.uint8(jr.buffer)[0],Ar=!0===hr?1:0,_r=new cr(1),Or=new or(_r.buffer);function Ur(r){return _r[0]=r,Or[Ar]}var Nr,Sr,Er=!0===hr?0:1,Fr=new cr(1),Tr=new or(Fr.buffer);!0===hr?(Nr=1,Sr=0):(Nr=0,Sr=1);var Ir={HIGH:Nr,LOW:Sr},Pr=new cr(1),Vr=new or(Pr.buffer),xr=Ir.HIGH,Gr=Ir.LOW;function Hr(r,t){return Vr[xr]=r,Vr[Gr]=t,Pr[0]}var Br,Lr,Mr=Math.floor,kr=Number.POSITIVE_INFINITY,Wr=W.NEGATIVE_INFINITY;function Cr(r){return r!=r}function Yr(r){return r===kr||r===Wr}!0===hr?(Br=1,Lr=0):(Br=0,Lr=1);var Rr={HIGH:Br,LOW:Lr},Xr=new cr(1),qr=new or(Xr.buffer),zr=Rr.HIGH,Dr=Rr.LOW;function Jr(r,t){return Xr[0]=t,r[0]=qr[zr],r[1]=qr[Dr],r}function Kr(r,t){return 1===arguments.length?Jr([0,0],r):Jr(r,t)}var Qr=[0,0];function Zr(r){return Math.abs(r)}function $r(r,t,e,n){return Cr(r)||Yr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&Zr(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}l((function(r){return $r(r,[0,0],1,0)}),"assign",$r);var rt=[0,0],tt=[0,0];function et(r,t){var e,n,o,u,i;return 0===t||0===r||Cr(r)||Yr(r)?r:($r(r,rt,1,0),t+=rt[1],t+=function(r){var t=Ur(r);return(t=(2146435072&t)>>>20)-1023|0}(r=rt[0]),t<-1074?(o=r,Kr(Qr,0),u=Qr[0],u&=2147483647,i=Ur(o),Hr(u|=i&=2147483648,Qr[1])):t>1023?r<0?Wr:kr:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,Kr(tt,r),e=tt[0],e&=2148532223,n*Hr(e|=t+1023<<20,tt[1])))}function nt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var ot=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ut=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],it=16777216,ft=5.960464477539063e-8,at=nt(20),ct=nt(20),lt=nt(20),yt=nt(20);function vt(r,t,e,n,o,u,i,f,a){var c,l,y,v,p,s,b,d,m;for(v=u,m=n[e],d=e,p=0;d>0;p++)l=ft*m|0,yt[p]=m-it*l|0,m=n[d-1]+l,d-=1;if(m=et(m,o),m-=8*Mr(.125*m),m-=b=0|m,y=0,o>0?(b+=p=yt[e-1]>>24-o,yt[e-1]-=p<<24-o,y=yt[e-1]>>23-o):0===o?y=yt[e-1]>>23:m>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<e;p++)d=yt[p],0===c?0!==d&&(c=1,yt[p]=16777216-d):yt[p]=16777215-d;if(o>0)switch(o){case 1:yt[e-1]&=8388607;break;case 2:yt[e-1]&=4194303}2===y&&(m=1-m,0!==c&&(m-=et(1,o)))}if(0===m){for(d=0,p=e-1;p>=u;p--)d|=yt[p];if(0===d){for(s=1;0===yt[u-s];s++);for(p=e+1;p<=e+s;p++){for(a[f+p]=ot[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];n[p]=l}return vt(r,t,e+=s,n,o,u,i,f,a)}}if(0===m)for(e-=1,o-=24;0===yt[e];)e-=1,o-=24;else(m=et(m,-o))>=it?(l=ft*m|0,yt[e]=m-it*l|0,o+=24,yt[e+=1]=l):yt[e]=0|m;for(l=et(1,o),p=e;p>=0;p--)n[p]=l*yt[p],l*=ft;for(p=e;p>=0;p--){for(l=0,s=0;s<=v&&s<=e-p;s++)l+=ut[s]*n[p+s];lt[e-p]=l}for(l=0,p=e;p>=0;p--)l+=lt[p];for(t[0]=0===y?l:-l,l=lt[0]-l,p=1;p<=e;p++)l+=lt[p];return t[1]=0===y?l:-l,7&b}function pt(r,t,e,n){var o,u,i,f,a,c,l;for(4,(u=(e-3)/24|0)<0&&(u=0),f=e-24*(u+1),c=u-(i=n-1),l=i+4,a=0;a<=l;a++)at[a]=c<0?0:ot[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*at[i+(a-c)];ct[a]=o}return 4,vt(r,t,4,ct,f,4,u,i,at)}var st=Math.round;function bt(r,t,e){var n,o,u,i,f;return u=r-1.5707963267341256*(n=st(.6366197723675814*r)),i=6077100506506192e-26*n,f=t>>20|0,e[0]=u-i,f-(Ur(e[0])>>20&2047)>16&&(i=20222662487959506e-37*n-((o=u)-(u=o-(i=6077100506303966e-26*n))-i),e[0]=u-i,f-(Ur(e[0])>>20&2047)>49&&(i=84784276603689e-45*n-((o=u)-(u=o-(i=20222662487111665e-37*n))-i),e[0]=u-i)),e[1]=u-e[0]-i,n}var dt=1.5707963267341256,mt=6077100506506192e-26,wt=2*mt,jt=3*mt,gt=4*mt,ht=[0,0,0],At=[0,0];function _t(r,t){var e,n,o,u,i,f,a;if((o=2147483647&Ur(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?bt(r,o,t):o<=1073928572?r>0?(a=r-dt,t[0]=a-mt,t[1]=a-t[0]-mt,1):(a=r+dt,t[0]=a+mt,t[1]=a-t[0]+mt,-1):r>0?(a=r-2*dt,t[0]=a-wt,t[1]=a-t[0]-wt,2):(a=r+2*dt,t[0]=a+wt,t[1]=a-t[0]+wt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?bt(r,o,t):r>0?(a=r-3*dt,t[0]=a-jt,t[1]=a-t[0]-jt,3):(a=r+3*dt,t[0]=a+jt,t[1]=a-t[0]+jt,-3):1075388923===o?bt(r,o,t):r>0?(a=r-4*dt,t[0]=a-gt,t[1]=a-t[0]-gt,4):(a=r+4*dt,t[0]=a+gt,t[1]=a-t[0]+gt,-4);if(o<1094263291)return bt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Fr[0]=r,Tr[Er]}(r),a=Hr(o-((n=(o>>20)-1046)<<20|0),e),i=0;i<2;i++)ht[i]=0|a,a=16777216*(a-ht[i]);for(ht[2]=a,u=3;0===ht[u-1];)u-=1;return f=pt(ht,At,n,u),r<0?(t[0]=-At[0],t[1]=-At[1],-f):(t[0]=At[0],t[1]=At[1],f)}var Ot=-.16666666666666632;function Ut(r,t,e,n,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,e[o]=0===t?r+f*(Ot+c*i):r-(c*(.5*t-f*i)-t-f*Ot),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),e[o+n]=a+(1-a-u+(c*i-r*t)),e}var Nt=[0,0];function St(r,t,e,n){var o,u;if(o=Ur(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[n]=r,t[n+e]=0),Ut(r,0,t,e,n);if(o>=2146435072)return t[n]=NaN,t[n+e]=NaN,t;switch(u=_t(r,Nt),Ut(Nt[0],Nt[1],t,e,n),3&u){case 1:return o=t[n+e],t[n+e]=-t[n],t[n]=o,t;case 2:return t[n]*=-1,t[n+e]*=-1,t;case 3:return o=-t[n+e],t[n+e]=t[n],t[n]=o,t;default:return t}}function Et(r){return St(r,[0,0],1,0)}l(Et,"assign",St);var Ft=3.141592653589793;var Tt=[0,0];function It(r){var t,e,n,o,u,i,f;return(t=(e=Zr(r))*e)<2.5625?n=e*function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),e=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(t=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),e=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),t/e)}(i=t*t):e>36974?n=.5:(f=1/((i=Ft*(t=e*e))*i),i=1/i,o=1-f*function(r){var t,e;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(t=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),e=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(t=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),e=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),t/e)}(f),u=i*function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),e=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(t=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),e=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),t/e)}(f),i=1.5707963267948966*t,Et(Tt),n=.5+(o*Tt[0]-u*Tt[1])/(i=Ft*e)),r<0&&(n=-n),n}return function(r){return $(r,It)}}));
//# sourceMappingURL=browser.js.map
