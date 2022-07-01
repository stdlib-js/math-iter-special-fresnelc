// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFresnelc=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return t({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,e){var n,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,e.get),y&&a&&a.call(r,t,e.set),r},v=n,y=l,p=e()?v:y;var b=function(r,t,e){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,g=h;var _=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,N=E,S=h;var P=_,F=function(r){var t,e,n;if(null==r)return S.call(r);e=r[N],t=U(r,N);try{r[N]=void 0}catch(t){return S.call(r)}return n=S.call(r),t?r[N]=e:delete r[N],n},T=j()?F:P,I=Boolean.prototype.toString;var x=T,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,er=Int8Array,nr=d,or=tr,ur=er;var ir=function(){return"function"==typeof nr||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=T;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(pr));var br=pr;var sr=T,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,e,n;if(("Object"===(e=sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=dr.exec(n.toString()))return t[1]}return mr(r)?"Buffer":e},jr=wr;var hr=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},_r=function(r){return hr(r).toLowerCase()},Ar=ir()?_r:gr;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Nr=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Fr=T,Tr=Sr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Tr||(xr?Ir(r):"[object Number]"===Fr(r)))},Vr=Nr,Hr=Gr;var Br=s,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Nr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=T,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},et=O,nt=T,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!et(r,"constructor")&&et(t,"constructor")&&rt(t.constructor)&&"[object Function]"===nt(t.constructor)&&et(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!et(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,e,n){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,n)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?e(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),e,o)}},st=bt,dt=T,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},ht=wt;var gt=function(){var r,t;if("function"!=typeof ht)return!1;try{t=new ht(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var _t="function"==typeof Uint32Array?Uint32Array:void 0,At=function(){throw new Error("not implemented")},Ot=gt()?_t:At,Et=T,Ut="function"==typeof Float64Array;var Nt="function"==typeof Float64Array?Float64Array:null,St=function(r){return Ut&&r instanceof Float64Array||"[object Float64Array]"===Et(r)},Pt=Nt;var Ft=function(){var r,t;if("function"!=typeof Pt)return!1;try{t=new Pt([1,3.14,-3.14,NaN]),r=St(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Tt="function"==typeof Float64Array?Float64Array:void 0,It=function(){throw new Error("not implemented")},xt=Ft()?Tt:It,Gt=T,Vt="function"==typeof Uint8Array;var Ht="function"==typeof Uint8Array?Uint8Array:null,Bt=function(r){return Vt&&r instanceof Uint8Array||"[object Uint8Array]"===Gt(r)},Lt=Ht;var Mt=function(){var r,t;if("function"!=typeof Lt)return!1;try{t=new Lt(t=[1,3.14,-3.14,256,257]),r=Bt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Wt=function(){throw new Error("not implemented")},Ct=Mt()?kt:Wt,Rt=T,Xt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null,zt=function(r){return Xt&&r instanceof Uint16Array||"[object Uint16Array]"===Rt(r)},Dt=Yt;var qt=function(){var r,t;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,65536,65537]),r=zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0,Qt=function(){throw new Error("not implemented")},Zt={uint16:qt()?Kt:Qt,uint8:Ct};(Jt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Jt.buffer)[0],re=Ot,te=!0===$t?1:0,ee=new xt(1),ne=new re(ee.buffer);var oe=function(r){return ee[0]=r,ne[te]},ue=Ot,ie=!0===$t?0:1,ae=new xt(1),fe=new ue(ae.buffer);var ce,le,ve=function(r){return ae[0]=r,fe[ie]};!0===$t?(ce=1,le=0):(ce=0,le=1);var ye=Ot,pe={HIGH:ce,LOW:le},be=new xt(1),se=new ye(be.buffer),de=pe.HIGH,me=pe.LOW;var we=function(r,t){return se[de]=r,se[me]=t,be[0]},je=we,he=Math.floor,ge=Number.POSITIVE_INFINITY,_e=Sr.NEGATIVE_INFINITY;var Ae=function(r){return r!=r},Oe=ge,Ee=_e;var Ue,Ne,Se=function(r){return r===Oe||r===Ee};!0===$t?(Ue=1,Ne=0):(Ue=0,Ne=1);var Pe=Ot,Fe={HIGH:Ue,LOW:Ne},Te=new xt(1),Ie=new Pe(Te.buffer),xe=Fe.HIGH,Ge=Fe.LOW;var Ve=function(r,t){return Te[0]=t,r[0]=Ie[xe],r[1]=Ie[Ge],r};var He=function(r,t){return 1===arguments.length?Ve([0,0],r):Ve(r,t)},Be=He,Le=oe,Me=je,ke=[0,0];var We=function(r){return Math.abs(r)},Ce=Se,Re=Ae,Xe=We;var Ye=function(r,t){return Re(t)||Ce(t)?(r[0]=t,r[1]=0,r):0!==t&&Xe(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var ze=function(r,t){return 1===arguments.length?Ye([0,0],r):Ye(r,t)},De=oe;var qe=function(r){var t=De(r);return(t=(2146435072&t)>>>20)-1023|0},Je=ge,Ke=_e,Qe=Ae,Ze=Se,$e=function(r,t){var e,n;return Be(ke,r),e=ke[0],e&=2147483647,n=Le(t),Me(e|=n&=2147483648,ke[1])},rn=ze,tn=qe,en=He,nn=je,on=[0,0],un=[0,0];var an=function(r,t){var e,n;return 0===t||0===r||Qe(r)||Ze(r)?r:(rn(on,r),t+=on[1],(t+=tn(r=on[0]))<-1074?$e(0,r):t>1023?r<0?Ke:Je:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,en(un,r),e=un[0],e&=2148532223,n*nn(e|=t+1023<<20,un[1])))};var fn=function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e};var cn=he,ln=an,vn=function(r){return fn(0,r)},yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],bn=16777216,sn=5.960464477539063e-8,dn=vn(20),mn=vn(20),wn=vn(20),jn=vn(20);function hn(r,t,e,n,o,u,i,a,f){var c,l,v,y,p,b,s,d,m;for(y=u,m=n[e],d=e,p=0;d>0;p++)l=sn*m|0,jn[p]=m-bn*l|0,m=n[d-1]+l,d-=1;if(m=ln(m,o),m-=8*cn(.125*m),m-=s=0|m,v=0,o>0?(s+=p=jn[e-1]>>24-o,jn[e-1]-=p<<24-o,v=jn[e-1]>>23-o):0===o?v=jn[e-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<e;p++)d=jn[p],0===c?0!==d&&(c=1,jn[p]=16777216-d):jn[p]=16777215-d;if(o>0)switch(o){case 1:jn[e-1]&=8388607;break;case 2:jn[e-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=ln(1,o)))}if(0===m){for(d=0,p=e-1;p>=u;p--)d|=jn[p];if(0===d){for(b=1;0===jn[u-b];b++);for(p=e+1;p<=e+b;p++){for(f[a+p]=yn[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];n[p]=l}return hn(r,t,e+=b,n,o,u,i,a,f)}}if(0===m)for(e-=1,o-=24;0===jn[e];)e-=1,o-=24;else(m=ln(m,-o))>=bn?(l=sn*m|0,jn[e]=m-bn*l|0,o+=24,jn[e+=1]=l):jn[e]=0|m;for(l=ln(1,o),p=e;p>=0;p--)n[p]=l*jn[p],l*=sn;for(p=e;p>=0;p--){for(l=0,b=0;b<=y&&b<=e-p;b++)l+=pn[b]*n[p+b];wn[e-p]=l}for(l=0,p=e;p>=0;p--)l+=wn[p];for(t[0]=0===v?l:-l,l=wn[0]-l,p=1;p<=e;p++)l+=wn[p];return t[1]=0===v?l:-l,7&s}var gn=function(r,t,e,n){var o,u,i,a,f,c,l;for(4,(u=(e-3)/24|0)<0&&(u=0),a=e-24*(u+1),c=u-(i=n-1),l=i+4,f=0;f<=l;f++)dn[f]=c<0?0:yn[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*dn[i+(f-c)];mn[f]=o}return 4,hn(r,t,4,mn,a,4,u,i,dn)},_n=Math.round,An=oe;var On=oe,En=ve,Un=je,Nn=gn,Sn=function(r,t,e){var n,o,u,i,a;return u=r-1.5707963267341256*(n=_n(.6366197723675814*r)),i=6077100506506192e-26*n,a=t>>20|0,e[0]=u-i,a-(An(e[0])>>20&2047)>16&&(i=20222662487959506e-37*n-((o=u)-(u=o-(i=6077100506303966e-26*n))-i),e[0]=u-i,a-(An(e[0])>>20&2047)>49&&(i=84784276603689e-45*n-((o=u)-(u=o-(i=20222662487111665e-37*n))-i),e[0]=u-i)),e[1]=u-e[0]-i,n},Pn=1.5707963267341256,Fn=6077100506506192e-26,Tn=2*Fn,In=3*Fn,xn=4*Fn,Gn=[0,0,0],Vn=[0,0];var Hn=function(r,t){var e,n,o,u,i,a,f;if((o=2147483647&On(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Sn(r,o,t):o<=1073928572?r>0?(f=r-Pn,t[0]=f-Fn,t[1]=f-t[0]-Fn,1):(f=r+Pn,t[0]=f+Fn,t[1]=f-t[0]+Fn,-1):r>0?(f=r-2*Pn,t[0]=f-Tn,t[1]=f-t[0]-Tn,2):(f=r+2*Pn,t[0]=f+Tn,t[1]=f-t[0]+Tn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Sn(r,o,t):r>0?(f=r-3*Pn,t[0]=f-In,t[1]=f-t[0]-In,3):(f=r+3*Pn,t[0]=f+In,t[1]=f-t[0]+In,-3):1075388923===o?Sn(r,o,t):r>0?(f=r-4*Pn,t[0]=f-xn,t[1]=f-t[0]-xn,4):(f=r+4*Pn,t[0]=f+xn,t[1]=f-t[0]+xn,-4);if(o<1094263291)return Sn(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(e=En(r),f=Un(o-((n=(o>>20)-1046)<<20|0),e),i=0;i<2;i++)Gn[i]=0|f,f=16777216*(f-Gn[i]);for(Gn[2]=f,u=3;0===Gn[u-1];)u-=1;return a=Nn(Gn,Vn,n,u),r<0?(t[0]=-Vn[0],t[1]=-Vn[1],-a):(t[0]=Vn[0],t[1]=Vn[1],a)},Bn=-.16666666666666632;var Ln=oe,Mn=Hn,kn=function(r,t,e){var n,o,u,i,a;return o=.00833333333332249+(a=t*t)*(27557313707070068e-22*a-.0001984126982985795)+a*(i=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),u=a*t,r[0]=0===e?t+u*(Bn+a*o):t-(a*(.5*e-u*o)-e-u*Bn),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=i*i*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),i=1-(n=.5*a),r[1]=i+(1-i-n+(a*o-t*e)),r},Wn=[0,0];var Cn=function(r,t){var e,n;if(e=Ln(t),(e&=2147483647)<=1072243195)return e<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),kn(r,t,0);if(e>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(n=Mn(t,Wn),kn(r,Wn[0],Wn[1]),3&n){case 1:return e=r[1],r[1]=-r[0],r[0]=e,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return e=-r[1],r[1]=r[0],r[0]=e,r;default:return r}};var Rn=function(r,t){return 1===arguments.length?Cn([0,0],r):Cn(r,t)};var Xn=Rn,Yn=We,zn=3.141592653589793,Dn=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),e=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(t=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),e=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),t/e)},qn=function(r){var t,e;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(t=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),e=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(t=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),e=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),t/e)},Jn=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),e=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(t=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),e=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),t/e)},Kn=[0,0];var Qn=function(r){var t,e,n,o,u,i,a;return(t=(e=Yn(r))*e)<2.5625?n=e*Dn(i=t*t):e>36974?n=.5:(a=1/((i=zn*(t=e*e))*i),i=1/i,o=1-a*qn(a),u=i*Jn(a),Xn(Kn,i=1.5707963267948966*t),n=.5+(o*Kn[0]-u*Kn[1])/(i=zn*e)),r<0&&(n=-n),n},Zn=Qn;return function(r){return st(r,Zn)}}));
//# sourceMappingURL=browser.js.map
