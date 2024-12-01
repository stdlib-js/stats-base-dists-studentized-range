// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,u,f,c,s,l,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(u)?String(t.arg):N(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(j(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function I(r){var e,n;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var x=Object.prototype,F=x.toString,O=x.__defineGetter__,T=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||P.call(r,e)?(t=r.__proto__,r.__proto__=x,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,u="set"in n,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),u&&T&&T.call(r,e,n.set),r};function G(r,e,n){$(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r,e,n){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return"number"==typeof r}var C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return C&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var X=L()?function(r){var e,n,t,i,a;if(null==r)return M.call(r);n=r[q],a=q,e=null!=(i=r)&&R.call(i,a);try{r[q]=void 0}catch(e){return M.call(r)}return t=M.call(r),e?r[q]=n:delete r[q],t}:function(r){return M.call(r)},Y=Number,z=Y.prototype.toString;var B=L();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return W(r)||D(r)}H(J,"isPrimitive",W),H(J,"isObject",D);var K=Number.POSITIVE_INFINITY,Q=Y.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return rr(r)===r}function nr(r){return r<K&&r>Q&&er(r)}function tr(r){return W(r)&&nr(r)}function ir(r){return D(r)&&nr(r.valueOf())}function ar(r){return tr(r)||ir(r)}function ur(r){return tr(r)&&r>0}function or(r){return ir(r)&&r.valueOf()>0}function fr(r){return ur(r)||or(r)}function cr(r){return r!=r}function sr(r){return Math.abs(r)}function lr(r){return er(r/2)}function pr(r){return lr(r>0?r-1:r+1)}function vr(r){return r===K||r===Q}H(ar,"isPrimitive",tr),H(ar,"isObject",ir),H(fr,"isPrimitive",ur),H(fr,"isObject",or);var yr=Math.sqrt,gr="function"==typeof Uint32Array;var dr="function"==typeof Uint32Array?Uint32Array:null;var hr,wr="function"==typeof Uint32Array?Uint32Array:void 0;hr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(gr&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=hr,mr="function"==typeof Float64Array;var Nr="function"==typeof Float64Array?Float64Array:null;var Ar,_r="function"==typeof Float64Array?Float64Array:void 0;Ar=function(){var r,e,n;if("function"!=typeof Nr)return!1;try{e=new Nr([1,3.14,-3.14,NaN]),n=e,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er=Ar,Sr="function"==typeof Uint8Array;var Ur="function"==typeof Uint8Array?Uint8Array:null;var jr,kr="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,e,n;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,256,257]),n=e,r=(Sr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Ir=jr,xr="function"==typeof Uint16Array;var Fr="function"==typeof Uint16Array?Uint16Array:null;var Or,Tr="function"==typeof Uint16Array?Uint16Array:void 0;Or=function(){var r,e,n;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(xr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Vr,Pr={uint16:Or,uint8:Ir};(Vr=new Pr.uint16(1))[0]=4660;var $r,Gr,Hr=52===new Pr.uint8(Vr.buffer)[0];!0===Hr?($r=1,Gr=0):($r=0,Gr=1);var Wr={HIGH:$r,LOW:Gr},Cr=new Er(1),Lr=new br(Cr.buffer),Mr=Wr.HIGH,Rr=Wr.LOW;function Zr(r,e,n,t){return Cr[0]=r,e[t]=Lr[Mr],e[t+n]=Lr[Rr],e}function qr(r){return Zr(r,[0,0],1,0)}H(qr,"assign",Zr);var Xr=!0===Hr?0:1,Yr=new Er(1),zr=new br(Yr.buffer);function Br(r,e){return Yr[0]=r,zr[Xr]=e>>>0,Yr[0]}function Dr(r){return 0|r}var Jr,Kr,Qr=2147483647,re=2147483648,ee=!0===Hr?1:0,ne=new Er(1),te=new br(ne.buffer);function ie(r){return ne[0]=r,te[ee]}!0===Hr?(Jr=1,Kr=0):(Jr=0,Kr=1);var ae={HIGH:Jr,LOW:Kr},ue=new Er(1),oe=new br(ue.buffer),fe=ae.HIGH,ce=ae.LOW;function se(r,e){return oe[fe]=r,oe[ce]=e,ue[0]}var le=[0,0];function pe(r,e){var n,t;return qr.assign(r,le,1,0),n=le[0],n&=Qr,t=ie(e),se(n|=t&=re,le[1])}var ve=1072693247,ye=1e300,ge=1e-300;var de=!0===Hr?1:0,he=new Er(1),we=new br(he.buffer);function be(r,e){return he[0]=r,we[de]=e>>>0,he[0]}var me=1023;var Ne=1048575,Ae=1048576,_e=1072693248,Ee=536870912,Se=524288,Ue=20,je=9007199254740992,ke=.9617966939259756,Ie=.9617967009544373,xe=-7.028461650952758e-9,Fe=[1,1.5],Oe=[0,.5849624872207642],Te=[0,1.350039202129749e-8];var Ve=1.4426950408889634,Pe=1.4426950216293335,$e=1.9259629911266175e-8;var Ge=1023,He=-1023,We=-1074,Ce=22250738585072014e-324,Le=4503599627370496;function Me(r,e,n,t){return cr(r)||vr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&sr(r)<Ce?(e[t]=r*Le,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Me(r,[0,0],1,0)}),"assign",Me);var Re=2146435072;var Ze=2220446049250313e-31,qe=2148532223,Xe=[0,0],Ye=[0,0];function ze(r,e){var n,t;return 0===e||0===r||cr(r)||vr(r)?r:(Me(r,Xe,1,0),r=Xe[0],e+=Xe[1],e+=function(r){var e=ie(r);return(e=(e&Re)>>>20)-me|0}(r),e<We?pe(0,r):e>Ge?r<0?Q:K:(e<=He?(e+=52,t=Ze):t=1,qr.assign(r,Ye,1,0),n=Ye[0],n&=qe,t*se(n|=e+me<<20,Ye[1])))}var Be=.6931471805599453,De=1048575;var Je=1048576,Ke=1071644672,Qe=20,rn=.6931471824645996,en=-1.904654299957768e-9;var nn=1072693247,tn=1105199104,an=1139802112,un=1083179008,on=1072693248,fn=1083231232,cn=3230714880,sn=31,ln=1e300,pn=1e-300,vn=8008566259537294e-32,yn=[0,0],gn=[0,0];function dn(r,e){var n,t,i,a,u,o,f,c,s,l,p,v,y,g;if(cr(r)||cr(e))return NaN;if(qr.assign(e,yn,1,0),u=yn[0],0===yn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return yr(r);if(-.5===e)return 1/yr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(vr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:sr(r)<1==(e===K)?0:K}(r,e)}if(qr.assign(r,yn,1,0),a=yn[0],0===yn[1]){if(0===a)return function(r,e){return e===Q?K:e===K?0:e>0?pr(e)?r:0:pr(e)?pe(K,r):K}(r,e);if(1===r)return 1;if(-1===r&&pr(e))return-1;if(vr(r))return r===Q?dn(-0,-e):e<0?0:K}if(r<0&&!1===er(e))return(r-r)/(r-r);if(i=sr(r),n=a&Qr|0,t=u&Qr|0,f=u>>>sn|0,o=(o=a>>>sn|0)&&pr(e)?-1:1,t>tn){if(t>an)return function(r,e){return(ie(r)&Qr)<=ve?e<0?ye*ye:ge*ge:e>0?ye*ye:ge*ge}(r,e);if(n<nn)return 1===f?o*ln*ln:o*pn*pn;if(n>on)return 0===f?o*ln*ln:o*pn*pn;p=function(r,e){var n,t,i,a,u,o,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(o=i*$e-a*Ve)-((t=Br(t=(u=Pe*i)+o,0))-u),r[0]=t,r[1]=n,r}(gn,i)}else p=function(r,e,n){var t,i,a,u,o,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,n<Ae&&(m-=53,n=ie(e*=je)),m+=(n>>Ue)-me|0,n=(N=n&Ne|0)|_e|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=Ae),u=Br(i=(w=(e=be(e,n))-(c=Fe[A]))*(b=1/(e+c)),0),t=(n>>1|Ee)+Se,f=be(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Br(f=3+(a=u*u)+(h+=(o=b*(w-u*f-u*(e-(f-c))))*(u+i)),0),l=Br(l=(w=u*f)+(b=o*f+(h-(f-3-a))*i),0),p=Ie*l,g=(v=xe*l+(b-(l-w))*ke+Te[A])-((y=Br(y=p+v+(s=Oe[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(gn,i,n);if(v=(l=(e-(c=Br(e,0)))*p[0]+e*p[1])+(s=c*p[0]),qr.assign(v,yn,1,0),y=Dr(yn[0]),g=Dr(yn[1]),y>=un){if(0!=(y-un|g))return o*ln*ln;if(l+vn>v-s)return o*ln*ln}else if((y&Qr)>=fn){if(0!=(y-cn|g))return o*pn*pn;if(l<=v-s)return o*pn*pn}return v=function(r,e,n){var t,i,a,u,o,f,c,s,l,p;return l=((s=r&Qr|0)>>Qe)-me|0,c=0,s>Ke&&(i=be(0,((c=r+(Je>>l+1)>>>0)&~(De>>(l=((c&Qr)>>Qe)-me|0)))>>>0),c=(c&De|Je)>>Qe-l>>>0,r<0&&(c=-c),e-=i),r=Dr(r=ie(f=1-((f=(a=(i=Br(i=n+e,0))*rn)+(u=(n-(i-e))*Be+i*en))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=u-(f-a))+f*o)-f))),(r+=c<<Qe>>>0)>>Qe<=0?ze(f,c):be(f,r)}(y,s,l),o*v}var hn=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],wn=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095];var bn=.6931471803691238,mn=1.9082149292705877e-10,Nn=0x40000000000000,An=.3333333333333333,_n=1048575,En=2146435072,Sn=1048576,Un=1072693248;function jn(r){var e,n,t,i,a,u,o,f,c,s,l,p;return 0===r?Q:cr(r)||r<0?NaN:(a=0,(n=ie(r))<Sn&&(a-=54,n=ie(r*=Nn)),n>=En?r+r:(a+=(n>>20)-me|0,a+=(f=(n&=_n)+614244&1048576|0)>>20|0,o=(r=be(r,n|f^Un))-1,(_n&2+n)<3?0===o?0===a?0:a*bn+a*mn:(u=o*o*(.5-An*o),0===a?o-u:a*bn-(u-a*mn-o)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=t+i,(f|=c)>0?(e=.5*o*o,0===a?o-(e-s*(e+u)):a*bn-(e-(s*(e+u)+a*mn)-o)):0===a?o-s*(o-u):a*bn-(s*(o-u)-a*mn-o))))}var kn=Math.ceil;function In(r){return r<0?kn(r):rr(r)}function xn(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Fn=-.16666666666666632,On=.00833333333332249,Tn=-.0001984126982985795,Vn=27557313707070068e-22,Pn=-2.5050760253406863e-8,$n=1.58969099521155e-10;function Gn(r,e){var n,t,i;return n=On+(i=r*r)*(Tn+i*Vn)+i*(i*i)*(Pn+i*$n),t=i*r,0===e?r+t*(Fn+i*n):r-(i*(.5*e-t*n)-e-t*Fn)}var Hn=!0===Hr?0:1,Wn=new Er(1),Cn=new br(Wn.buffer);function Ln(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Mn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Rn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zn=16777216,qn=5.960464477539063e-8,Xn=Ln(20),Yn=Ln(20),zn=Ln(20),Bn=Ln(20);function Dn(r,e,n,t,i,a,u,o,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=qn*h|0,Bn[v]=h-Zn*s|0,h=t[d-1]+s,d-=1;if(h=ze(h,i),h-=8*rr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Bn[n-1]>>24-i,Bn[n-1]-=v<<24-i,l=Bn[n-1]>>23-i):0===i?l=Bn[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=Bn[v],0===c?0!==d&&(c=1,Bn[v]=16777216-d):Bn[v]=16777215-d;if(i>0)switch(i){case 1:Bn[n-1]&=8388607;break;case 2:Bn[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ze(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Bn[v];if(0===d){for(y=1;0===Bn[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[o+v]=Mn[u+v],s=0,d=0;d<=o;d++)s+=r[d]*f[o+(v-d)];t[v]=s}return Dn(r,e,n+=y,t,i,a,u,o,f)}}if(0===h)for(n-=1,i-=24;0===Bn[n];)n-=1,i-=24;else(h=ze(h,-i))>=Zn?(s=qn*h|0,Bn[n]=h-Zn*s|0,i+=24,Bn[n+=1]=s):Bn[n]=0|h;for(s=ze(1,i),v=n;v>=0;v--)t[v]=s*Bn[v],s*=qn;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Rn[y]*t[v+y];zn[n-v]=s}for(s=0,v=n;v>=0;v--)s+=zn[v];for(e[0]=0===l?s:-s,s=zn[0]-s,v=1;v<=n;v++)s+=zn[v];return e[1]=0===l?s:-s,7&g}function Jn(r,e,n,t){var i,a,u,o,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),o=n-24*(a+1),c=a-(u=t-1),s=u+4,f=0;f<=s;f++)Xn[f]=c<0?0:Mn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Xn[u+(f-c)];Yn[f]=i}return 4,Dn(r,e,4,Yn,o,4,a,u,Xn)}var Kn=Math.round,Qn=.6366197723675814,rt=1.5707963267341256,et=6077100506506192e-26,nt=6077100506303966e-26,tt=20222662487959506e-37,it=20222662487111665e-37,at=84784276603689e-45,ut=2047;function ot(r,e,n){var t,i,a,u,o;return a=r-(t=Kn(r*Qn))*rt,u=t*et,o=e>>20|0,n[0]=a-u,o-(ie(n[0])>>20&ut)>16&&(u=t*tt-((i=a)-(a=i-(u=t*nt))-u),n[0]=a-u,o-(ie(n[0])>>20&ut)>49&&(u=t*at-((i=a)-(a=i-(u=t*it))-u),n[0]=a-u)),n[1]=a-n[0]-u,t}var ft=0,ct=16777216,st=1.5707963267341256,lt=6077100506506192e-26,pt=2*lt,vt=3*lt,yt=4*lt,gt=598523,dt=1072243195,ht=1073928572,wt=1074752122,bt=1074977148,mt=1075183036,Nt=1075388923,At=1075594811,_t=1094263291,Et=[0,0,0],St=[0,0];function Ut(r,e){var n,t,i,a,u,o,f;if((i=ie(r)&Qr|0)<=dt)return e[0]=r,e[1]=0,0;if(i<=wt)return(i&De)===gt?ot(r,i,e):i<=ht?r>0?(f=r-st,e[0]=f-lt,e[1]=f-e[0]-lt,1):(f=r+st,e[0]=f+lt,e[1]=f-e[0]+lt,-1):r>0?(f=r-2*st,e[0]=f-pt,e[1]=f-e[0]-pt,2):(f=r+2*st,e[0]=f+pt,e[1]=f-e[0]+pt,-2);if(i<=At)return i<=mt?i===bt?ot(r,i,e):r>0?(f=r-3*st,e[0]=f-vt,e[1]=f-e[0]-vt,3):(f=r+3*st,e[0]=f+vt,e[1]=f-e[0]+vt,-3):i===Nt?ot(r,i,e):r>0?(f=r-4*st,e[0]=f-yt,e[1]=f-e[0]-yt,4):(f=r+4*st,e[0]=f+yt,e[1]=f-e[0]+yt,-4);if(i<_t)return ot(r,i,e);if(i>=Re)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Wn[0]=r,Cn[Hn]}(r),f=se(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)Et[u]=0|f,f=(f-Et[u])*ct;for(Et[2]=f,a=3;Et[a-1]===ft;)a-=1;return o=Jn(Et,St,t,a),r<0?(e[0]=-St[0],e[1]=-St[1],-o):(e[0]=St[0],e[1]=St[1],o)}var jt=[0,0],kt=2147483647,It=1072243195,xt=1044381696,Ft=2146435072;function Ot(r){var e;if(e=ie(r),(e&=kt)<=It)return e<xt?1:xn(r,0);if(e>=Ft)return NaN;switch(3&Ut(r,jt)){case 0:return xn(jt[0],jt[1]);case 1:return-Gn(jt[0],jt[1]);case 2:return-xn(jt[0],jt[1]);default:return Gn(jt[0],jt[1])}}var Tt=1072243195,Vt=1045430272,Pt=[0,0];function $t(r){var e;if(e=ie(r),(e&=Qr)<=Tt)return e<Vt?r:Gn(r,0);if(e>=Re)return NaN;switch(3&Ut(r,Pt)){case 0:return Gn(Pt[0],Pt[1]);case 1:return xn(Pt[0],Pt[1]);case 2:return-Gn(Pt[0],Pt[1]);default:return-xn(Pt[0],Pt[1])}}var Gt=3.141592653589793;var Ht=.07721566490153287,Wt=.3224670334241136,Ct=1,Lt=-.07721566490153287,Mt=.48383612272381005,Rt=-.1475877229945939,Zt=.06462494023913339,qt=-.07721566490153287,Xt=1,Yt=.4189385332046727,zt=1.4616321449683622,Bt=4503599627370496,Dt=0x400000000000000,Jt=8470329472543003e-37,Kt=1.4616321449683622,Qt=-.12148629053584961,ri=-3638676997039505e-33;function ei(r){var e,n,t,i,a,u,o,f,c,s,l,p,v;if(cr(r)||vr(r))return r;if(0===r)return K;if(r<0?(e=!0,r=-r):e=!1,r<Jt)return-jn(r);if(e){if(r>=Bt)return K;if(c=function(r){var e,n;return cr(r)||vr(r)?NaN:0===(e=sr(n=r%2))||1===e?pe(0,n):e<.25?$t(Gt*n):e<.75?pe(Ot(Gt*(e=.5-e)),n):e<1.25?(n=pe(1,n)-n,$t(Gt*n)):e<1.75?-pe(Ot(Gt*(e-=1.5)),n):(n-=pe(2,n),$t(Gt*n))}(r),0===c)return K;n=jn(Gt/sr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-jn(r),r>=zt-1+.27?(l=1-r,t=0):r>=zt-1-.27?(l=r-(Kt-1),t=1):(l=r,t=2)):(v=0,r>=zt+.27?(l=2-r,t=0):r>=zt-.27?(l=r-Kt,t=1):(l=r-1,t=2)),t){case 0:u=Ht+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Wt+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(o=l*u+a)-.5*l;break;case 1:u=Mt+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Rt+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Zt+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Qt+(o=p*u-(ri-s*(a+l*i)));break;case 2:u=l*(qt+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Xt+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+u/a}else if(r<8)switch(o=(l=r-(t=In(r)))*(Lt+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Ct+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+o/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=jn(p*=l+2)}else r<Dt?(c=jn(r),s=Yt+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(jn(r)-1);return e&&(v=n-v),v}var ni=.6931471803691238,ti=1.9082149292705877e-10,ii=1.4426950408889634,ai=709.782712893384,ui=-745.1332191019411,oi=1/(1<<28),fi=-oi;function ci(r){var e;return cr(r)||r===K?r:r===Q?0:r>ai?K:r<ui?0:r>fi&&r<oi?1+r:function(r,e,n){var t,i,a,u;return ze(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=In(r<0?ii*r-.5:ii*r+.5))*ni,e*ti,e)}var si=Math.round,li=2.5066282746310007,pi=7.071,vi=220.2068679123761,yi=221.2135961699311,gi=112.0792914978709,di=33.912866078383,hi=6.37396220353165,wi=.7003830644436881,bi=.03526249659989109,mi=440.4137358247522,Ni=793.8265125199484,Ai=637.3336333788311,_i=296.5642487796737,Ei=86.78073220294608,Si=16.06417757920695,Ui=1.755667163182642,ji=.08838834764831845;function ki(r){var e,n,t;return(n=sr(r))>37?t=r>0?1:0:(e=ci(-.5*n*n),t=n<pi?e*((((((bi*n+wi)*n+hi)*n+di)*n+gi)*n+yi)*n+vi)/(((((((ji*n+Ui)*n+Si)*n+Ei)*n+_i)*n+Ai)*n+Ni)*n+mi):e/li/(n+1/(n+2/(n+3/(n+4/(n+.65))))),r>=0&&(t=1-t)),t}function Ii(r,e,n,t,i){var a=(t-n)*e+t+n,u=ci(-a*a*.125);return u*=dn(ki(.5*a)-ki(.5*(a-2*r)),i-1)}function xi(r,e,n,t,i,a,u){var o,f=0,c=.5*(a-i),s=.5*(a+i);for(o=0;o<u;o++)0===wn[o]?f+=hn[o]*Ii(r,s,e,n,t):f+=hn[o]*Ii(r,wn[o]*c+s,e,n,t);return c*f}function Fi(r,e){var n,t,i,a,u,o;if(r<=0)return 0;for(t=r/2,a=(r/2*((o=r<=3?3:2)-(i=1))+8*i)/o,n=0,u=1;u<si(o)+1;u++)i=u,n+=(a-t)/2*xi(r,t,a,e,-1,1,20),t=a,a=u+1===si(o)?8:(r/2*(o-i-1)+8*(i+1))/o;return n*=2*e/yr(2*Gt),n+=dn(ci(1),e*jn(2*ki(r/2)-1))}function Oi(r,e,n,t,i,a,u){var o,f,c;return 0===(o=Fi(yr((f=e*u+2*n*u+u)/2)*r,i))&&(o=1e-37),sr(c=t*jn(o)+jn(u)+a/2*jn(a)+-f*a/4+(a/2-1)*jn(f)-(a*Be+ei(a/2)))>=1e30?0:ci(c)}function Ti(r,e,n,t,i,a,u,o,f){var c,s=0,l=(a-i)/2,p=(a+i)/2;for(c=0;c<u;c++)0===wn[c]?s+=hn[c]*Oi(r,p,e,t,n,o,f):s+=hn[c]*Oi(r,wn[c]*l+p,e,t,n,o,f);return l*s}var Vi=1e-10;function Pi(r,e,n,t){var i,a,u,o,f;if(cr(r)||cr(e)||cr(n))return NaN;if(e<2||n<2)return NaN;if(void 0===t)t=1;else if(!ur(t))return NaN;if(o=1===n?e<10?1+1/(2*e+3):e<=100?1.0844+(1.119-1.0844)/90*(e-10):1.119+1/e:2===n?.968:n<=100?1:n<=800?.5:n<=5e3?1/4:1/8,r<0)return 0;if(r===K)return 1;if(n>25e3||0===Ti(r,0,e,t,-1,1,20,n,o))return dn(Fi(r,e),t);for(a=0,u=!1,f=0,i=0;!u;){if((a+=Ti(r,f,e,t,-1,1,20,n,o))>1)return 1;sr(a-i)/a<=Vi?u=!0:i=a,f+=1}return a}function $i(r){return function(){return r}}H(Pi,"factory",(function(r,e,n){var t;if(cr(e)||cr(r)||r<2||e<2)return $i(NaN);if(void 0===n)n=1;else if(!ur(n))return $i(NaN);return t=1===e?r<10?1+1/(2*r+3):r<=100?1.0844+(1.119-1.0844)/90*(r-10):1.119+1/r:2===e?.968:e<=100?1:e<=800?.5:e<=5e3?1/4:1/8,function(i){var a,u,o,f;if(cr(i))return NaN;if(i<0)return 0;if(i===K)return 1;if(e>25e3||0===Ti(i,0,r,n,-1,1,20,e,t))return dn(Fi(i,r),n);u=0,o=!1,f=0,a=0;for(;!o;){if((u+=Ti(i,f,r,n,-1,1,20,e,t))>1)return 1;sr(u-a)/u<=1e-10?o=!0:a=u,f+=1}return u}}));var Gi=3.3871328727963665,Hi=133.14166789178438,Wi=1971.5909503065513,Ci=13731.69376550946,Li=45921.95393154987,Mi=67265.7709270087,Ri=33430.57558358813,Zi=2509.0809287301227,qi=42.31333070160091,Xi=687.1870074920579,Yi=5394.196021424751,zi=21213.794301586597,Bi=39307.89580009271,Di=28729.085735721943,Ji=5226.495278852854,Ki=1.4234371107496835,Qi=4.630337846156546,ra=5.769497221460691,ea=3.6478483247632045,na=1.2704582524523684,ta=.2417807251774506,ia=.022723844989269184,aa=.0007745450142783414,ua=2.053191626637759,oa=1.6763848301838038,fa=.6897673349851,ca=.14810397642748008,sa=.015198666563616457,la=.0005475938084995345,pa=1.0507500716444169e-9,va=6.657904643501103,ya=5.463784911164114,ga=1.7848265399172913,da=.29656057182850487,ha=.026532189526576124,wa=.0012426609473880784,ba=27115555687434876e-21,ma=2.0103343992922881e-7,Na=.599832206555888,Aa=.1369298809227358,_a=.014875361290850615,Ea=.0007868691311456133,Sa=18463183175100548e-21,Ua=1.421511758316446e-7,ja=20442631033899397e-31;var ka=120,Ia=.8843,xa=.2368,Fa=1.214,Oa=1.208,Ta=1.4142;function Va(r,e,n){var t,i=function(r){var e,n,t;return sr(n=r-.5)<=.425?e=n*(((((((Zi*(t=.180625-n*n)+Ri)*t+Mi)*t+Li)*t+Ci)*t+Wi)*t+Hi)*t+Gi)/(((((((Ji*t+Di)*t+Bi)*t+zi)*t+Yi)*t+Xi)*t+qi)*t+1):(t=n<0?r:1-r)<=0?e=0:(e=(t=yr(-jn(t)))<=5?(((((((aa*(t-=1.6)+ia)*t+ta)*t+na)*t+ea)*t+ra)*t+Qi)*t+Ki)/(((((((pa*t+la)*t+sa)*t+ca)*t+fa)*t+oa)*t+ua)*t+1):(((((((ma*(t-=5)+ba)*t+wa)*t+ha)*t+da)*t+ga)*t+ya)*t+va)/(((((((ja*t+Ua)*t+Sa)*t+Ea)*t+_a)*t+Aa)*t+Na)*t+1),n<0&&(e=-e)),e}(.5+.5*r);return e<ka&&(i+=(i*i*i+i)/e/4),t=Ia-xa*i,e<ka&&(t-=Fa/e+Oa*i/e),i*(t*jn(n-1)+Ta)}function Pa(r,e,n,t){var i,a,u,o,f,c,s,l;if(cr(e)||cr(n)||e<2||n<2)return NaN;if(cr(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return K;if(void 0===t)t=1;else if(!ur(t))return NaN;for(o=Va(r,n,e);(c=Pi(o,e,n,t))>r&&(o-=.4),o<0&&(o=.1),!(c<r););if(i=o,sr(c-r)<1e-8)return NaN;for(f=o+.5;(s=Pi(f,e,n,t))<r&&(f+=.4),f<0&&(f=1),!(s>r););for(f<o&&(f=o+.01),l=2;l<=28;)(u=(s=Pi(f,e,n,t))-r)-(a=c-r)!=0&&(i=(u*o-a*f)/(u-a)),sr(a)<sr(u)?(sr(c-r)<5e-8&&(l=30),c=Pi(o=i,e,n,t)):(o=f,c=s,f=i),l+=1;return i}H(Pa,"factory",(function(r,e,n){if(cr(r)||cr(e)||r<2||e<2)return $i(NaN);if(void 0===n)n=1;else if(!ur(n))return NaN;return function(t){var i,a,u,o,f,c,s,l;if(cr(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return K;o=Va(t,e,r);for(;(c=Pi(o,r,e,n))>t&&(o-=.4),o<0&&(o=.1),!(c<t););if(i=o,sr(c-t)<1e-8)return NaN;f=o+.5;for(;(s=Pi(f,r,e,n))<t&&(f+=.4),f<0&&(f=1),!(s>t););f<o&&(f=o+.01);l=2;for(;l<=28;)(u=(s=Pi(f,r,e,n))-t)-(a=c-t)!=0&&(i=(u*o-a*f)/(u-a)),sr(a)<sr(u)?(sr(c-t)<5e-8&&(l=30),c=Pi(o=i,r,e,n)):(o=f,c=s,f=i),l+=1;return i}}));var $a={};G($a,"cdf",Pi),G($a,"quantile",Pa);export{Pi as cdf,$a as default,Pa as quantile};
//# sourceMappingURL=mod.js.map