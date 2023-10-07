// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,n,t,a,u,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(u)?String(t.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){return"string"==typeof r}function O(r){var e,n,t;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return j.apply(null,n)}var T=Object.prototype,V=T.toString,P=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,H=T.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,u="set"in n,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,n.get),u&&$&&$.call(r,e,n.set),r};function C(r,e,n){W(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function L(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function M(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var B=Z()?function(r){var e,n,t,i,a;if(null==r)return q.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return q.call(r)}return t=q.call(r),e?r[z]=n:delete r[z],t}:function(r){return q.call(r)},D=Number,J=D.prototype.toString;var K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return M(r)||Q(r)}L(rr,"isPrimitive",M),L(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,tr=Math.floor;function ir(r){return tr(r)===r}function ar(r){return r<er&&r>nr&&ir(r)}function ur(r){return M(r)&&ar(r)}function or(r){return Q(r)&&ar(r.valueOf())}function fr(r){return ur(r)||or(r)}function cr(r){return ur(r)&&r>0}function sr(r){return or(r)&&r.valueOf()>0}function lr(r){return cr(r)||sr(r)}function pr(r){return r!=r}function vr(r){return Math.abs(r)}function yr(r){return ir(r/2)}function gr(r){return yr(r>0?r-1:r+1)}function dr(r){return r===er||r===nr}L(fr,"isPrimitive",ur),L(fr,"isObject",or),L(lr,"isPrimitive",cr),L(lr,"isObject",sr);var hr=Math.sqrt,wr="function"==typeof Uint32Array;var br="function"==typeof Uint32Array?Uint32Array:null;var mr,Nr="function"==typeof Uint32Array?Uint32Array:void 0;mr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(wr&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar=mr,_r="function"==typeof Float64Array;var Er="function"==typeof Float64Array?Float64Array:null;var Ur,Sr="function"==typeof Float64Array?Float64Array:void 0;Ur=function(){var r,e,n;if("function"!=typeof Er)return!1;try{e=new Er([1,3.14,-3.14,NaN]),n=e,r=(_r&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var jr=Ur,kr="function"==typeof Uint8Array;var Ir="function"==typeof Uint8Array?Uint8Array:null;var xr,Fr="function"==typeof Uint8Array?Uint8Array:void 0;xr=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,256,257]),n=e,r=(kr&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Or=xr,Tr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null;var Pr,$r="function"==typeof Uint16Array?Uint16Array:void 0;Pr=function(){var r,e,n;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Tr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Gr,Hr={uint16:Pr,uint8:Or};(Gr=new Hr.uint16(1))[0]=4660;var Wr,Cr,Lr=52===new Hr.uint8(Gr.buffer)[0];!0===Lr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Mr={HIGH:Wr,LOW:Cr},Rr=new jr(1),Zr=new Ar(Rr.buffer),qr=Mr.HIGH,Xr=Mr.LOW;function Yr(r,e,n,t){return Rr[0]=r,e[t]=Zr[qr],e[t+n]=Zr[Xr],e}function zr(r){return Yr(r,[0,0],1,0)}L(zr,"assign",Yr);var Br=!0===Lr?0:1,Dr=new jr(1),Jr=new Ar(Dr.buffer);function Kr(r,e){return Dr[0]=r,Jr[Br]=e>>>0,Dr[0]}function Qr(r){return 0|r}var re,ee,ne=!0===Lr?1:0,te=new jr(1),ie=new Ar(te.buffer);function ae(r){return te[0]=r,ie[ne]}!0===Lr?(re=1,ee=0):(re=0,ee=1);var ue={HIGH:re,LOW:ee},oe=new jr(1),fe=new Ar(oe.buffer),ce=ue.HIGH,se=ue.LOW;function le(r,e){return fe[ce]=r,fe[se]=e,oe[0]}var pe=[0,0];function ve(r,e){var n,t;return zr.assign(r,pe,1,0),n=pe[0],n&=2147483647,t=ae(e),le(n|=t&=2147483648,pe[1])}var ye=!0===Lr?1:0,ge=new jr(1),de=new Ar(ge.buffer);function he(r,e){return ge[0]=r,de[ye]=e>>>0,ge[0]}var we=[1,1.5],be=[0,.5849624872207642],me=[0,1.350039202129749e-8];function Ne(r,e,n,t){return pr(r)||dr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&vr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return Ne(r,[0,0],1,0)}),"assign",Ne);var Ae=[0,0],_e=[0,0];function Ee(r,e){var n,t;return 0===e||0===r||pr(r)||dr(r)?r:(Ne(r,Ae,1,0),e+=Ae[1],e+=function(r){var e=ae(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Ae[0]),e<-1074?ve(0,r):e>1023?r<0?nr:er:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,zr.assign(r,_e,1,0),n=_e[0],n&=2148532223,t*le(n|=e+1023<<20,_e[1])))}var Ue=.6931471805599453;var Se=1e300,je=[0,0],ke=[0,0];function Ie(r,e){var n,t,i,a,u,o,f,c,s,l,p,v,y,g;if(pr(r)||pr(e))return NaN;if(zr.assign(e,je,1,0),u=je[0],0===je[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return hr(r);if(-.5===e)return 1/hr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(dr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:vr(r)<1==(e===er)?0:er}(r,e)}if(zr.assign(r,je,1,0),a=je[0],0===je[1]){if(0===a)return function(r,e){return e===nr?er:e===er?0:e>0?gr(e)?r:0:gr(e)?ve(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&gr(e))return-1;if(dr(r))return r===nr?Ie(-0,-e):e<0?0:er}if(r<0&&!1===ir(e))return(r-r)/(r-r);if(i=vr(r),n=2147483647&a|0,t=2147483647&u|0,f=u>>>31|0,o=(o=a>>>31|0)&&gr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&ae(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?o*Se*Se:1e-300*o*1e-300;if(n>1072693248)return 0===f?o*Se*Se:1e-300*o*1e-300;p=function(r,e){var n,t,i,a,u,o;return n=(u=1.9259629911266175e-8*(i=e-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Kr(t=(a=1.4426950216293335*i)+u,0))-a),r[0]=t,r[1]=n,r}(ke,i)}else p=function(r,e,n){var t,i,a,u,o,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,n<1048576&&(m-=53,n=ae(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=1048576),u=Kr(i=(w=(e=he(e,n))-(c=we[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=he(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Kr(f=3+(a=u*u)+(h+=(o=b*(w-u*f-u*(e-(f-c))))*(u+i)),0),g=(v=-7.028461650952758e-9*(l=Kr(l=(w=u*f)+(b=o*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+me[A])-((y=Kr(y=(p=.9617967009544373*l)+v+(s=be[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(ke,i,n);if(v=(l=(e-(c=Kr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),zr.assign(v,je,1,0),y=Qr(je[0]),g=Qr(je[1]),y>=1083179008){if(0!=(y-1083179008|g))return o*Se*Se;if(l+8008566259537294e-32>v-s)return o*Se*Se}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return 1e-300*o*1e-300;if(l<=v-s)return 1e-300*o*1e-300}return v=function(r,e,n){var t,i,a,u,o,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=he(0,t)),r=Qr(r=ae(c=1-((c=(u=.6931471824645996*(a=Kr(a=n+e,0)))+(o=(n-(a-e))*Ue+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-u))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Ee(c,s):he(c,r)}(y,s,l),o*v}var xe=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],Fe=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095];var Oe=.6931471803691238,Te=1.9082149292705877e-10;function Ve(r){var e,n,t,i,a,u,o,f,c,s,l,p;return 0===r?nr:pr(r)||r<0?NaN:(a=0,(n=ae(r))<1048576&&(a-=54,n=ae(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,o=(r=he(r,n|1072693248^f))-1,(1048575&2+n)<3?0===o?0===a?0:a*Oe+a*Te:(u=o*o*(.5-.3333333333333333*o),0===a?o-u:a*Oe-(u-a*Te-o)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=t+i,(f|=c)>0?(e=.5*o*o,0===a?o-(e-s*(e+u)):a*Oe-(e-(s*(e+u)+a*Te)-o)):0===a?o-s*(o-u):a*Oe-(s*(o-u)-a*Te-o))))}var Pe=Math.ceil;function $e(r){return r<0?Pe(r):tr(r)}function Ge(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var He=-.16666666666666632;function We(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(He+i*n):r-(i*(.5*e-t*n)-e-t*He)}var Ce=!0===Lr?0:1,Le=new jr(1),Me=new Ar(Le.buffer);function Re(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Ze=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xe=5.960464477539063e-8,Ye=Re(20),ze=Re(20),Be=Re(20),De=Re(20);function Je(r,e,n,t,i,a,u,o,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Xe*h|0,De[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=Ee(h,i),h-=8*tr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=De[n-1]>>24-i,De[n-1]-=v<<24-i,l=De[n-1]>>23-i):0===i?l=De[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=De[v],0===c?0!==d&&(c=1,De[v]=16777216-d):De[v]=16777215-d;if(i>0)switch(i){case 1:De[n-1]&=8388607;break;case 2:De[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Ee(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=De[v];if(0===d){for(y=1;0===De[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[o+v]=Ze[u+v],s=0,d=0;d<=o;d++)s+=r[d]*f[o+(v-d)];t[v]=s}return Je(r,e,n+=y,t,i,a,u,o,f)}}if(0===h)for(n-=1,i-=24;0===De[n];)n-=1,i-=24;else(h=Ee(h,-i))>=16777216?(s=Xe*h|0,De[n]=h-16777216*s|0,i+=24,De[n+=1]=s):De[n]=0|h;for(s=Ee(1,i),v=n;v>=0;v--)t[v]=s*De[v],s*=Xe;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=qe[y]*t[v+y];Be[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Be[v];for(e[0]=0===l?s:-s,s=Be[0]-s,v=1;v<=n;v++)s+=Be[v];return e[1]=0===l?s:-s,7&g}function Ke(r,e,n,t){var i,a,u,o,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),o=n-24*(a+1),c=a-(u=t-1),s=u+4,f=0;f<=s;f++)Ye[f]=c<0?0:Ze[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Ye[u+(f-c)];ze[f]=i}return 4,Je(r,e,4,ze,o,4,a,u,Ye)}var Qe=Math.round;function rn(r,e,n){var t,i,a,u,o;return a=r-1.5707963267341256*(t=Qe(.6366197723675814*r)),u=6077100506506192e-26*t,o=e>>20|0,n[0]=a-u,o-(ae(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((i=a)-(a=i-(u=6077100506303966e-26*t))-u),n[0]=a-u,o-(ae(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((i=a)-(a=i-(u=20222662487111665e-37*t))-u),n[0]=a-u)),n[1]=a-n[0]-u,t}var en=1.5707963267341256,nn=6077100506506192e-26,tn=2*nn,an=4*nn,un=[0,0,0],on=[0,0];function fn(r,e){var n,t,i,a,u,o,f;if((i=2147483647&ae(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?rn(r,i,e):i<=1073928572?r>0?(f=r-en,e[0]=f-nn,e[1]=f-e[0]-nn,1):(f=r+en,e[0]=f+nn,e[1]=f-e[0]+nn,-1):r>0?(f=r-2*en,e[0]=f-tn,e[1]=f-e[0]-tn,2):(f=r+2*en,e[0]=f+tn,e[1]=f-e[0]+tn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?rn(r,i,e):r>0?(f=r-3*en,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*en,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?rn(r,i,e):r>0?(f=r-4*en,e[0]=f-an,e[1]=f-e[0]-an,4):(f=r+4*en,e[0]=f+an,e[1]=f-e[0]+an,-4);if(i<1094263291)return rn(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Le[0]=r,Me[Ce]}(r),f=le(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)un[u]=0|f,f=16777216*(f-un[u]);for(un[2]=f,a=3;0===un[a-1];)a-=1;return o=Ke(un,on,t,a),r<0?(e[0]=-on[0],e[1]=-on[1],-o):(e[0]=on[0],e[1]=on[1],o)}var cn=[0,0];function sn(r){var e;if(e=ae(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Ge(r,0);if(e>=2146435072)return NaN;switch(3&fn(r,cn)){case 0:return Ge(cn[0],cn[1]);case 1:return-We(cn[0],cn[1]);case 2:return-Ge(cn[0],cn[1]);default:return We(cn[0],cn[1])}}var ln=[0,0];function pn(r){var e;if(e=ae(r),(e&=2147483647)<=1072243195)return e<1045430272?r:We(r,0);if(e>=2146435072)return NaN;switch(3&fn(r,ln)){case 0:return We(ln[0],ln[1]);case 1:return Ge(ln[0],ln[1]);case 2:return-We(ln[0],ln[1]);default:return-Ge(ln[0],ln[1])}}var vn=3.141592653589793;var yn=1.4616321449683622,gn=1.4616321449683622;function dn(r){var e,n,t,i,a,u,o,f,c,s,l,p,v;if(pr(r)||dr(r))return r;if(0===r)return er;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Ve(r);if(e){if(r>=4503599627370496)return er;if(c=function(r){var e,n;return pr(r)||dr(r)?NaN:0===(e=vr(n=r%2))||1===e?ve(0,n):e<.25?pn(vn*n):e<.75?ve(sn(vn*(e=.5-e)),n):e<1.25?(n=ve(1,n)-n,pn(vn*n)):e<1.75?-ve(sn(vn*(e-=1.5)),n):(n-=ve(2,n),pn(vn*n))}(r),0===c)return er;n=Ve(vn/vr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Ve(r),r>=yn-1+.27?(l=1-r,t=0):r>=yn-1-.27?(l=r-(gn-1),t=1):(l=r,t=2)):(v=0,r>=yn+.27?(l=2-r,t=0):r>=yn-.27?(l=r-gn,t=1):(l=r-1,t=2)),t){case 0:u=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(o=l*u+a)-.5*l;break;case 1:u=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(o=p*u-(-3638676997039505e-33-s*(a+l*i)));break;case 2:u=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+u/a}else if(r<8)switch(o=(l=r-(t=$e(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+o/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Ve(p*=l+2)}else r<0x400000000000000?(c=Ve(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Ve(r)-1);return e&&(v=n-v),v}function hn(r){var e;return pr(r)||r===er?r:r===nr?0:r>709.782712893384?er:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,u;return Ee(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=$e(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function wn(r){var e,n,t;return(n=vr(r))>37?t=r>0?1:0:(e=hn(-.5*n*n),t=n<7.071?e*((((((.03526249659989109*n+.7003830644436881)*n+6.37396220353165)*n+33.912866078383)*n+112.0792914978709)*n+221.2135961699311)*n+220.2068679123761)/(((((((.08838834764831845*n+1.755667163182642)*n+16.06417757920695)*n+86.78073220294608)*n+296.5642487796737)*n+637.3336333788311)*n+793.8265125199484)*n+440.4137358247522):e/2.5066282746310007/(n+1/(n+2/(n+3/(n+4/(n+.65))))),r>=0&&(t=1-t)),t}function bn(r,e,n,t,i){var a=(t-n)*e+t+n,u=hn(-a*a*.125);return u*=Ie(wn(.5*a)-wn(.5*(a-2*r)),i-1)}function mn(r,e,n,t,i,a,u){var o,f=0,c=.5*(a-i),s=.5*(a+i);for(o=0;o<u;o++)f+=0===Fe[o]?xe[o]*bn(r,s,e,n,t):xe[o]*bn(r,Fe[o]*c+s,e,n,t);return c*f}function Nn(r,e){var n,t,i,a,u,o;if(r<=0)return 0;for(t=r/2,a=(r/2*((o=r<=3?3:2)-(i=1))+8*i)/o,n=0,u=1;u<Qe(o)+1;u++)i=u,n+=(a-t)/2*mn(r,t,a,e,-1,1,20),t=a,a=u+1===Qe(o)?8:(r/2*(o-i-1)+8*(i+1))/o;return n*=2*e/hr(2*vn),n+=Ie(hn(1),e*Ve(2*wn(r/2)-1))}function An(r,e,n,t,i,a,u){var o,f,c;return 0===(o=Nn(hr((f=e*u+2*n*u+u)/2)*r,i))&&(o=1e-37),vr(c=t*Ve(o)+Ve(u)+a/2*Ve(a)+-f*a/4+(a/2-1)*Ve(f)-(a*Ue+dn(a/2)))>=1e30?0:hn(c)}function _n(r,e,n,t,i,a,u,o,f){var c,s=0,l=(a-i)/2,p=(a+i)/2;for(c=0;c<u;c++)s+=0===Fe[c]?xe[c]*An(r,p,e,t,n,o,f):xe[c]*An(r,Fe[c]*l+p,e,t,n,o,f);return l*s}function En(r,e,n,t){var i,a,u,o,f;if(pr(r)||pr(e)||pr(n))return NaN;if(e<2||n<2)return NaN;if(void 0===t)t=1;else if(!cr(t))return NaN;if(o=1===n?e<10?1+1/(2*e+3):e<=100?1.0844+(1.119-1.0844)/90*(e-10):1.119+1/e:2===n?.968:n<=100?1:n<=800?.5:n<=5e3?1/4:1/8,r<0)return 0;if(r===er)return 1;if(n>25e3||0===_n(r,0,e,t,-1,1,20,n,o))return Ie(Nn(r,e),t);for(a=0,u=!1,f=0,i=0;!u;){if((a+=_n(r,f,e,t,-1,1,20,n,o))>1)return 1;vr(a-i)/a<=1e-10?u=!0:i=a,f+=1}return a}function Un(r){return function(){return r}}L(En,"factory",(function(r,e,n){var t;if(pr(e)||pr(r)||r<2||e<2)return Un(NaN);if(void 0===n)n=1;else if(!cr(n))return Un(NaN);return t=1===e?r<10?1+1/(2*r+3):r<=100?1.0844+(1.119-1.0844)/90*(r-10):1.119+1/r:2===e?.968:e<=100?1:e<=800?.5:e<=5e3?1/4:1/8,function(i){var a,u,o,f;if(pr(i))return NaN;if(i<0)return 0;if(i===er)return 1;if(e>25e3||0===_n(i,0,r,n,-1,1,20,e,t))return Ie(Nn(i,r),n);u=0,o=!1,f=0,a=0;for(;!o;){if((u+=_n(i,f,r,n,-1,1,20,e,t))>1)return 1;vr(u-a)/u<=1e-10?o=!0:a=u,f+=1}return u}}));function Sn(r,e,n){var t,i=function(r){var e,n,t;return vr(n=r-.5)<=.425?e=n*(((((((2509.0809287301227*(t=.180625-n*n)+33430.57558358813)*t+67265.7709270087)*t+45921.95393154987)*t+13731.69376550946)*t+1971.5909503065513)*t+133.14166789178438)*t+3.3871328727963665)/(((((((5226.495278852854*t+28729.085735721943)*t+39307.89580009271)*t+21213.794301586597)*t+5394.196021424751)*t+687.1870074920579)*t+42.31333070160091)*t+1):(t=n<0?r:1-r)<=0?e=0:(e=(t=hr(-Ve(t)))<=5?(((((((.0007745450142783414*(t-=1.6)+.022723844989269184)*t+.2417807251774506)*t+1.2704582524523684)*t+3.6478483247632045)*t+5.769497221460691)*t+4.630337846156546)*t+1.4234371107496835)/(((((((1.0507500716444169e-9*t+.0005475938084995345)*t+.015198666563616457)*t+.14810397642748008)*t+.6897673349851)*t+1.6763848301838038)*t+2.053191626637759)*t+1):(((((((2.0103343992922881e-7*(t-=5)+27115555687434876e-21)*t+.0012426609473880784)*t+.026532189526576124)*t+.29656057182850487)*t+1.7848265399172913)*t+5.463784911164114)*t+6.657904643501103)/(((((((20442631033899397e-31*t+1.421511758316446e-7)*t+18463183175100548e-21)*t+.0007868691311456133)*t+.014875361290850615)*t+.1369298809227358)*t+.599832206555888)*t+1),n<0&&(e=-e)),e}(.5+.5*r);return e<120&&(i+=(i*i*i+i)/e/4),t=.8843-.2368*i,e<120&&(t-=1.214/e+1.208*i/e),i*(t*Ve(n-1)+1.4142)}function jn(r,e,n,t){var i,a,u,o,f,c,s,l;if(pr(e)||pr(n)||e<2||n<2)return NaN;if(pr(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return er;if(void 0===t)t=1;else if(!cr(t))return NaN;for(o=Sn(r,n,e);(c=En(o,e,n,t))>r&&(o-=.4),o<0&&(o=.1),!(c<r););if(i=o,vr(c-r)<1e-8)return NaN;for(f=o+.5;(s=En(f,e,n,t))<r&&(f+=.4),f<0&&(f=1),!(s>r););for(f<o&&(f=o+.01),l=2;l<=28;)(u=(s=En(f,e,n,t))-r)-(a=c-r)!=0&&(i=(u*o-a*f)/(u-a)),vr(a)<vr(u)?(vr(c-r)<5e-8&&(l=30),c=En(o=i,e,n,t)):(o=f,c=s,f=i),l+=1;return i}L(jn,"factory",(function(r,e,n){if(pr(r)||pr(e)||r<2||e<2)return Un(NaN);if(void 0===n)n=1;else if(!cr(n))return NaN;return function(t){var i,a,u,o,f,c,s,l;if(pr(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return er;o=Sn(t,e,r);for(;(c=En(o,r,e,n))>t&&(o-=.4),o<0&&(o=.1),!(c<t););if(i=o,vr(c-t)<1e-8)return NaN;f=o+.5;for(;(s=En(f,r,e,n))<t&&(f+=.4),f<0&&(f=1),!(s>t););f<o&&(f=o+.01);l=2;for(;l<=28;)s=En(f,r,e,n),(u=s-t)-(a=c-t)!=0&&(i=(u*o-a*f)/(u-a)),vr(a)<vr(u)?(vr(c-t)<5e-8&&(l=30),c=En(o=i,r,e,n)):(o=f,c=s,f=i),l+=1;return i}}));var kn={};C(kn,"cdf",En),C(kn,"quantile",jn);export{En as cdf,kn as default,jn as quantile};
//# sourceMappingURL=mod.js.map
