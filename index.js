// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,f=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),v="get"in a,y="set"in a,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",w=s()?function(r){var n,t,e,u,i;if(null==r)return p.call(r);t=r[N],i=N,n=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[N]=t:delete r[N],e}:function(r){return p.call(r)},d=Number,m=d.prototype.toString,A=s();function h(r){return"object"==typeof r&&(r instanceof d||(A?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function _(r){return v(r)||h(r)}l(_,"isPrimitive",v),l(_,"isObject",h);var g=Number.POSITIVE_INFINITY,j=d.NEGATIVE_INFINITY,U=Math.floor;function O(r){return U(r)===r}function I(r){return r<g&&r>j&&O(r)}function S(r){return v(r)&&I(r)}function E(r){return h(r)&&I(r.valueOf())}function F(r){return S(r)||E(r)}function T(r){return S(r)&&r>0}function P(r){return E(r)&&r.valueOf()>0}function H(r){return T(r)||P(r)}function G(r){return r!=r}function k(r){return Math.abs(r)}function x(r){return O(r/2)}function M(r){return x(r>0?r-1:r+1)}function L(r){return r===g||r===j}l(F,"isPrimitive",S),l(F,"isObject",E),l(H,"isPrimitive",T),l(H,"isObject",P);var V,W=Math.sqrt,q="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,C="function"==typeof Uint32Array?Uint32Array:void 0;V=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(q&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B=V,D="function"==typeof Float64Array,J="function"==typeof Float64Array?Float64Array:null,K="function"==typeof Float64Array?Float64Array:void 0;z=function(){var r,n,t;if("function"!=typeof J)return!1;try{n=new J([1,3.14,-3.14,NaN]),t=n,r=(D&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,R=z,X="function"==typeof Uint8Array,Z="function"==typeof Uint8Array?Uint8Array:null,$="function"==typeof Uint8Array?Uint8Array:void 0;Q=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,256,257]),t=n,r=(X&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var rr,nr=Q,tr="function"==typeof Uint16Array,er="function"==typeof Uint16Array?Uint16Array:null,ur="function"==typeof Uint16Array?Uint16Array:void 0;rr=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,65536,65537]),t=n,r=(tr&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir,fr={uint16:rr,uint8:nr};(ir=new fr.uint16(1))[0]=4660;var or,ar,cr=52===new fr.uint8(ir.buffer)[0];!0===cr?(or=1,ar=0):(or=0,ar=1);var lr={HIGH:or,LOW:ar},vr=new R(1),yr=new B(vr.buffer),sr=lr.HIGH,pr=lr.LOW;function br(r,n,t,e){return vr[0]=r,n[e]=yr[sr],n[e+t]=yr[pr],n}function Nr(r){return br(r,[0,0],1,0)}l(Nr,"assign",br);var wr=!0===cr?0:1,dr=new R(1),mr=new B(dr.buffer);function Ar(r,n){return dr[0]=r,mr[wr]=n>>>0,dr[0]}function hr(r){return 0|r}var _r,gr,jr=2147483647,Ur=!0===cr?1:0,Or=new R(1),Ir=new B(Or.buffer);function Sr(r){return Or[0]=r,Ir[Ur]}!0===cr?(_r=1,gr=0):(_r=0,gr=1);var Er={HIGH:_r,LOW:gr},Fr=new R(1),Tr=new B(Fr.buffer),Pr=Er.HIGH,Hr=Er.LOW;function Gr(r,n){return Tr[Pr]=r,Tr[Hr]=n,Fr[0]}var kr=[0,0];function xr(r,n){var t,e;return Nr.assign(r,kr,1,0),t=kr[0],t&=jr,e=Sr(n),Gr(t|=e&=2147483648,kr[1])}var Mr=!0===cr?1:0,Lr=new R(1),Vr=new B(Lr.buffer);function Wr(r,n){return Lr[0]=r,Vr[Mr]=n>>>0,Lr[0]}var qr=1023,Yr=1048576,Cr=[1,1.5],zr=[0,.5849624872207642],Br=[0,1.350039202129749e-8];function Dr(r,n,t,e){return G(r)||L(r)?(n[e]=r,n[e+t]=0,n):0!==r&&k(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e;return 0===n||0===r||G(r)||L(r)?r:(Dr(r,Jr,1,0),n+=Jr[1],n+=function(r){var n=Sr(r);return(n=(2146435072&n)>>>20)-qr|0}(r=Jr[0]),n<-1074?xr(0,r):n>1023?r<0?j:g:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nr.assign(r,Kr,1,0),t=Kr[0],t&=2148532223,e*Gr(t|=n+qr<<20,Kr[1])))}var Rr=.6931471805599453,Xr=1048575,Zr=1048576,$r=1083179008,rn=1e300,nn=1e-300,tn=[0,0],en=[0,0];function un(r,n){var t,e,u,i,f,o,a,c,l,v,y,s,p,b;if(G(r)||G(n))return NaN;if(Nr.assign(n,tn,1,0),f=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return W(r);if(-.5===n)return 1/W(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(L(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:k(r)<1==(n===g)?0:g}(r,n)}if(Nr.assign(r,tn,1,0),i=tn[0],0===tn[1]){if(0===i)return function(r,n){return n===j?g:n===g?0:n>0?M(n)?r:0:M(n)?xr(g,r):g}(r,n);if(1===r)return 1;if(-1===r&&M(n))return-1;if(L(r))return r===j?un(-0,-n):n<0?0:g}if(r<0&&!1===O(n))return(r-r)/(r-r);if(u=k(r),t=i&jr|0,e=f&jr|0,a=f>>>31|0,o=(o=i>>>31|0)&&M(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Sr(r)&jr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*rn*rn:o*nn*nn;if(t>1072693248)return 0===a?o*rn*rn:o*nn*nn;y=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Ar(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(en,u)}else y=function(r,n,t){var e,u,i,f,o,a,c,l,v,y,s,p,b,N,w,d,m,A,h,_,g;return A=0,t<Yr&&(A-=53,t=Sr(n*=9007199254740992)),A+=(t>>20)-qr|0,t=1072693248|(h=1048575&t|0),h<=235662?_=0:h<767610?_=1:(_=0,A+=1,t-=Yr),f=Ar(u=(d=(n=Wr(n,t))-(c=Cr[_]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Wr(0,e+=_<<18),w=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Ar(a=3+(i=f*f)+(w+=(o=m*(d-f*a-f*(n-(a-c))))*(f+u)),0),b=(s=-7.028461650952758e-9*(v=Ar(v=(d=f*a)+(m=o*a+(w-(a-3-i))*u),0))+.9617966939259756*(m-(v-d))+Br[_])-((p=Ar(p=(y=.9617967009544373*v)+s+(l=zr[_])+(N=A),0))-N-l-y),r[0]=p,r[1]=b,r}(en,u,t);if(s=(v=(n-(c=Ar(n,0)))*y[0]+n*y[1])+(l=c*y[0]),Nr.assign(s,tn,1,0),p=hr(tn[0]),b=hr(tn[1]),p>=$r){if(0!=(p-$r|b))return o*rn*rn;if(v+8008566259537294e-32>s-l)return o*rn*rn}else if((p&jr)>=1083231232){if(0!=(p-3230714880|b))return o*nn*nn;if(v<=s-l)return o*nn*nn}return s=function(r,n,t){var e,u,i,f,o,a,c,l,v,y;return v=((l=r&jr|0)>>20)-qr|0,c=0,l>1071644672&&(u=Wr(0,((c=r+(Zr>>v+1)>>>0)&~(Xr>>(v=((c&jr)>>20)-qr|0)))>>>0),c=(c&Xr|Zr)>>20-v>>>0,r<0&&(c=-c),n-=u),r=hr(r=Sr(a=1-((a=(i=.6931471824645996*(u=Ar(u=t+n,0)))+(f=(t-(u-n))*Rr+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Qr(a,c):Wr(a,r)}(p,l,v),o*s}var fn=[.0176140071391521,.0406014298003869,.0626720483341091,.0832767415767048,.10193011981724,.118194531961518,.131688638449177,.142096109318382,.149172986472604,.152753387130726,.152753387130726,.149172986472604,.142096109318382,.131688638449177,.118194531961518,.10193011981724,.0832767415767048,.0626720483341091,.0406014298003869,.0176140071391521],on=[.993128599185095,.963971927277914,.912234428251326,.839116971822219,.746331906460151,.636053680726515,.510867001950827,.37370608871542,.227785851141645,.0765265211334973,-.0765265211334973,-.227785851141645,-.37370608871542,-.510867001950827,-.636053680726515,-.746331906460151,-.839116971822219,-.912234428251326,-.963971927277914,-.993128599185095],an=.6931471803691238,cn=1.9082149292705877e-10,ln=1048575;function vn(r){var n,t,e,u,i,f,o,a,c,l,v,y;return 0===r?j:G(r)||r<0?NaN:(i=0,(t=Sr(r))<1048576&&(i-=54,t=Sr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-qr|0,i+=(a=614244+(t&=ln)&1048576|0)>>20|0,o=(r=Wr(r,t|1072693248^a))-1,(ln&2+t)<3?0===o?0===i?0:i*an+i*cn:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*an-(f-i*cn-o)):(a=t-398458|0,c=440401-t|0,u=(v=(y=(l=o/(2+o))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-l*(n+f)):i*an-(n-(l*(n+f)+i*cn)-o)):0===i?o-l*(o-f):i*an-(l*(o-f)-i*cn-o))))}var yn=Math.ceil;function sn(r){return r<0?yn(r):U(r)}function pn(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var bn=-.16666666666666632;function Nn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(bn+u*t):r-(u*(.5*n-e*t)-n-e*bn)}var wn=!0===cr?0:1,dn=new R(1),mn=new B(dn.buffer);function An(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var hn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_n=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gn=16777216,jn=5.960464477539063e-8,Un=An(20),On=An(20),In=An(20),Sn=An(20);function En(r,n,t,e,u,i,f,o,a){var c,l,v,y,s,p,b,N,w;for(y=i,w=e[t],N=t,s=0;N>0;s++)l=jn*w|0,Sn[s]=w-gn*l|0,w=e[N-1]+l,N-=1;if(w=Qr(w,u),w-=8*U(.125*w),w-=b=0|w,v=0,u>0?(b+=s=Sn[t-1]>>24-u,Sn[t-1]-=s<<24-u,v=Sn[t-1]>>23-u):0===u?v=Sn[t-1]>>23:w>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<t;s++)N=Sn[s],0===c?0!==N&&(c=1,Sn[s]=16777216-N):Sn[s]=16777215-N;if(u>0)switch(u){case 1:Sn[t-1]&=8388607;break;case 2:Sn[t-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=Qr(1,u)))}if(0===w){for(N=0,s=t-1;s>=i;s--)N|=Sn[s];if(0===N){for(p=1;0===Sn[i-p];p++);for(s=t+1;s<=t+p;s++){for(a[o+s]=hn[f+s],l=0,N=0;N<=o;N++)l+=r[N]*a[o+(s-N)];e[s]=l}return En(r,n,t+=p,e,u,i,f,o,a)}}if(0===w)for(t-=1,u-=24;0===Sn[t];)t-=1,u-=24;else(w=Qr(w,-u))>=gn?(l=jn*w|0,Sn[t]=w-gn*l|0,u+=24,Sn[t+=1]=l):Sn[t]=0|w;for(l=Qr(1,u),s=t;s>=0;s--)e[s]=l*Sn[s],l*=jn;for(s=t;s>=0;s--){for(l=0,p=0;p<=y&&p<=t-s;p++)l+=_n[p]*e[s+p];In[t-s]=l}for(l=0,s=t;s>=0;s--)l+=In[s];for(n[0]=0===v?l:-l,l=In[0]-l,s=1;s<=t;s++)l+=In[s];return n[1]=0===v?l:-l,7&b}function Fn(r,n,t,e){var u,i,f,o,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),o=t-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)Un[a]=c<0?0:hn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Un[f+(a-c)];On[a]=u}return En(r,n,4,On,o,4,i,f,Un)}var Tn=Math.round;function Pn(r,n,t){var e,u,i,f,o;return i=r-1.5707963267341256*(e=Tn(.6366197723675814*r)),f=6077100506506192e-26*e,o=n>>20|0,t[0]=i-f,o-(Sr(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=i)-(i=u-(f=6077100506303966e-26*e))-f),t[0]=i-f,o-(Sr(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=i)-(i=u-(f=20222662487111665e-37*e))-f),t[0]=i-f)),t[1]=i-t[0]-f,e}var Hn=1.5707963267341256,Gn=6077100506506192e-26,kn=2*Gn,xn=3*Gn,Mn=4*Gn,Ln=[0,0,0],Vn=[0,0];function Wn(r,n){var t,e,u,i,f,o,a;if((u=2147483647&Sr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pn(r,u,n):u<=1073928572?r>0?(a=r-Hn,n[0]=a-Gn,n[1]=a-n[0]-Gn,1):(a=r+Hn,n[0]=a+Gn,n[1]=a-n[0]+Gn,-1):r>0?(a=r-2*Hn,n[0]=a-kn,n[1]=a-n[0]-kn,2):(a=r+2*Hn,n[0]=a+kn,n[1]=a-n[0]+kn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pn(r,u,n):r>0?(a=r-3*Hn,n[0]=a-xn,n[1]=a-n[0]-xn,3):(a=r+3*Hn,n[0]=a+xn,n[1]=a-n[0]+xn,-3):1075388923===u?Pn(r,u,n):r>0?(a=r-4*Hn,n[0]=a-Mn,n[1]=a-n[0]-Mn,4):(a=r+4*Hn,n[0]=a+Mn,n[1]=a-n[0]+Mn,-4);if(u<1094263291)return Pn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return dn[0]=r,mn[wn]}(r),a=Gr(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Ln[f]=0|a,a=16777216*(a-Ln[f]);for(Ln[2]=a,i=3;0===Ln[i-1];)i-=1;return o=Fn(Ln,Vn,e,i),r<0?(n[0]=-Vn[0],n[1]=-Vn[1],-o):(n[0]=Vn[0],n[1]=Vn[1],o)}var qn=[0,0];function Yn(r){var n;if(n=Sr(r),(n&=2147483647)<=1072243195)return n<1044381696?1:pn(r,0);if(n>=2146435072)return NaN;switch(3&Wn(r,qn)){case 0:return pn(qn[0],qn[1]);case 1:return-Nn(qn[0],qn[1]);case 2:return-pn(qn[0],qn[1]);default:return Nn(qn[0],qn[1])}}var Cn=[0,0];function zn(r){var n;if(n=Sr(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Nn(r,0);if(n>=2146435072)return NaN;switch(3&Wn(r,Cn)){case 0:return Nn(Cn[0],Cn[1]);case 1:return pn(Cn[0],Cn[1]);case 2:return-Nn(Cn[0],Cn[1]);default:return-pn(Cn[0],Cn[1])}}var Bn=3.141592653589793,Dn=1.4616321449683622,Jn=1.4616321449683622;function Kn(r){var n,t,e,u,i,f,o,a,c,l,v,y,s;if(G(r)||L(r))return r;if(0===r)return g;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-vn(r);if(n){if(r>=4503599627370496)return g;if(c=function(r){var n,t;return G(r)||L(r)?NaN:0===(n=k(t=r%2))||1===n?xr(0,t):n<.25?zn(Bn*t):n<.75?xr(Yn(Bn*(n=.5-n)),t):n<1.25?(t=xr(1,t)-t,zn(Bn*t)):n<1.75?-xr(Yn(Bn*(n-=1.5)),t):(t-=xr(2,t),zn(Bn*t))}(r),0===c)return g;t=vn(Bn/k(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-vn(r),r>=Dn-1+.27?(v=1-r,e=0):r>=Dn-1-.27?(v=r-(Jn-1),e=1):(v=r,e=2)):(s=0,r>=Dn+.27?(v=2-r,e=0):r>=Dn-.27?(v=r-Jn,e=1):(v=r-1,e=2)),e){case 0:f=.07721566490153287+(y=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(y),i=y*(.3224670334241136+y*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(y)),s+=(o=v*f+i)-.5*v;break;case 1:f=.48383612272381005+(l=(y=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),i=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(o=y*f-(-3638676997039505e-33-l*(i+v*u)))-.12148629053584961;break;case 2:f=v*(v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)-.07721566490153287),i=1+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),s+=-.5*v+f/i}else if(r<8)switch(o=(v=r-(e=sn(r)))*(v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)-.07721566490153287),a=1+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),s=.5*v+o/a,y=1,e){case 7:y*=v+6;case 6:y*=v+5;case 5:y*=v+4;case 4:y*=v+3;case 3:s+=vn(y*=v+2)}else r<0x400000000000000?(c=vn(r),l=.4189385332046727+(y=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=y*y),s=(r-.5)*(c-1)+l):s=r*(vn(r)-1);return n&&(s=t-s),s}var Qn=1.4426950408889634,Rn=1/(1<<28);function Xn(r){var n;return G(r)||r===g?r:r===j?0:r>709.782712893384?g:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Rn?1+r:function(r,n,t){var e,u,i,f;return Qr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=sn(r<0?Qn*r-.5:Qn*r+.5)),1.9082149292705877e-10*n,n)}function Zn(r){var n,t,e;return(t=k(r))>37?e=r>0?1:0:(n=Xn(-.5*t*t),e=t<7.071?n*((((((.03526249659989109*t+.7003830644436881)*t+6.37396220353165)*t+33.912866078383)*t+112.0792914978709)*t+221.2135961699311)*t+220.2068679123761)/(((((((.08838834764831845*t+1.755667163182642)*t+16.06417757920695)*t+86.78073220294608)*t+296.5642487796737)*t+637.3336333788311)*t+793.8265125199484)*t+440.4137358247522):n/2.5066282746310007/(t+1/(t+2/(t+3/(t+4/(t+.65))))),r>=0&&(e=1-e)),e}function $n(r,n,t,e,u){var i=(e-t)*n+e+t,f=Xn(-i*i*.125);return f*=un(Zn(.5*i)-Zn(.5*(i-2*r)),u-1)}function rt(r,n,t,e,u,i,f){var o,a=0,c=.5*(i-u),l=.5*(i+u);for(o=0;o<f;o++)a+=0===on[o]?fn[o]*$n(r,l,n,t,e):fn[o]*$n(r,on[o]*c+l,n,t,e);return c*a}function nt(r,n){var t,e,u,i,f,o;if(r<=0)return 0;for(e=r/2,i=(r/2*((o=r<=3?3:2)-(u=1))+8*u)/o,t=0,f=1;f<Tn(o)+1;f++)u=f,t+=(i-e)/2*rt(r,e,i,n,-1,1,20),e=i,i=f+1===Tn(o)?8:(r/2*(o-u-1)+8*(u+1))/o;return t*=2*n/W(2*Bn),t+=un(Xn(1),n*vn(2*Zn(r/2)-1))}function tt(r,n,t,e,u,i,f){var o,a,c;return 0===(o=nt(W((a=n*f+2*t*f+f)/2)*r,u))&&(o=1e-37),k(c=e*vn(o)+vn(f)+i/2*vn(i)+-a*i/4+(i/2-1)*vn(a)-(i*Rr+Kn(i/2)))>=1e30?0:Xn(c)}function et(r,n,t,e,u,i,f,o,a){var c,l=0,v=(i-u)/2,y=(i+u)/2;for(c=0;c<f;c++)l+=0===on[c]?fn[c]*tt(r,y,n,e,t,o,a):fn[c]*tt(r,on[c]*v+y,n,e,t,o,a);return v*l}function ut(r,n,t,e){var u,i,f,o,a;if(G(r)||G(n)||G(t))return NaN;if(n<2||t<2)return NaN;if(void 0===e)e=1;else if(!T(e))return NaN;if(o=1===t?n<10?1+1/(2*n+3):n<=100?1.0844+(1.119-1.0844)/90*(n-10):1.119+1/n:2===t?.968:t<=100?1:t<=800?.5:t<=5e3?1/4:1/8,r<0)return 0;if(r===g)return 1;if(t>25e3||0===et(r,0,n,e,-1,1,20,t,o))return un(nt(r,n),e);for(i=0,f=!1,a=0,u=0;!f;){if((i+=et(r,a,n,e,-1,1,20,t,o))>1)return 1;k(i-u)/i<=1e-10?f=!0:u=i,a+=1}return i}function it(r){return function(){return r}}function ft(r,n,t){var e,u=function(r){var n,t,e;return k(t=r-.5)<=.425?n=t*(((((((2509.0809287301227*(e=.180625-t*t)+33430.57558358813)*e+67265.7709270087)*e+45921.95393154987)*e+13731.69376550946)*e+1971.5909503065513)*e+133.14166789178438)*e+3.3871328727963665)/(((((((5226.495278852854*e+28729.085735721943)*e+39307.89580009271)*e+21213.794301586597)*e+5394.196021424751)*e+687.1870074920579)*e+42.31333070160091)*e+1):(e=t<0?r:1-r)<=0?n=0:(n=(e=W(-vn(e)))<=5?(((((((.0007745450142783414*(e-=1.6)+.022723844989269184)*e+.2417807251774506)*e+1.2704582524523684)*e+3.6478483247632045)*e+5.769497221460691)*e+4.630337846156546)*e+1.4234371107496835)/(((((((1.0507500716444169e-9*e+.0005475938084995345)*e+.015198666563616457)*e+.14810397642748008)*e+.6897673349851)*e+1.6763848301838038)*e+2.053191626637759)*e+1):(((((((2.0103343992922881e-7*(e-=5)+27115555687434876e-21)*e+.0012426609473880784)*e+.026532189526576124)*e+.29656057182850487)*e+1.7848265399172913)*e+5.463784911164114)*e+6.657904643501103)/(((((((20442631033899397e-31*e+1.421511758316446e-7)*e+18463183175100548e-21)*e+.0007868691311456133)*e+.014875361290850615)*e+.1369298809227358)*e+.599832206555888)*e+1),t<0&&(n=-n)),n}(.5+.5*r);return n<120&&(u+=(u*u*u+u)/n/4),e=.8843-.2368*u,n<120&&(e-=1.214/n+1.208*u/n),u*(e*vn(t-1)+1.4142)}function ot(r,n,t,e){var u,i,f,o,a,c,l,v;if(G(n)||G(t)||n<2||t<2)return NaN;if(G(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return g;if(void 0===e)e=1;else if(!T(e))return NaN;for(o=ft(r,t,n);(c=ut(o,n,t,e))>r&&(o-=.4),o<0&&(o=.1),!(c<r););if(u=o,k(c-r)<1e-8)return NaN;for(a=o+.5;(l=ut(a,n,t,e))<r&&(a+=.4),a<0&&(a=1),!(l>r););for(a<o&&(a=o+.01),v=2;v<=28;)(f=(l=ut(a,n,t,e))-r)-(i=c-r)!=0&&(u=(f*o-i*a)/(f-i)),k(i)<k(f)?(k(c-r)<5e-8&&(v=30),c=ut(o=u,n,t,e)):(o=a,c=l,a=u),v+=1;return u}l(ut,"factory",(function(r,n,t){var e;if(G(n)||G(r)||r<2||n<2)return it(NaN);if(void 0===t)t=1;else if(!T(t))return it(NaN);return e=1===n?r<10?1+1/(2*r+3):r<=100?1.0844+(1.119-1.0844)/90*(r-10):1.119+1/r:2===n?.968:n<=100?1:n<=800?.5:n<=5e3?1/4:1/8,function(u){var i,f,o,a;if(G(u))return NaN;if(u<0)return 0;if(u===g)return 1;if(n>25e3||0===et(u,0,r,t,-1,1,20,n,e))return un(nt(u,r),t);for(f=0,o=!1,a=0,i=0;!o;){if((f+=et(u,a,r,t,-1,1,20,n,e))>1)return 1;k(f-i)/f<=1e-10?o=!0:i=f,a+=1}return f}})),l(ot,"factory",(function(r,n,t){if(G(r)||G(n)||r<2||n<2)return it(NaN);if(void 0===t)t=1;else if(!T(t))return NaN;return function(e){var u,i,f,o,a,c,l,v;if(G(e)||e<0||e>1)return NaN;if(0===e)return 0;if(1===e)return g;for(o=ft(e,n,r);(c=ut(o,r,n,t))>e&&(o-=.4),o<0&&(o=.1),!(c<e););if(u=o,k(c-e)<1e-8)return NaN;for(a=o+.5;(l=ut(a,r,n,t))<e&&(a+=.4),a<0&&(a=1),!(l>e););for(a<o&&(a=o+.01),v=2;v<=28;)l=ut(a,r,n,t),(f=l-e)-(i=c-e)!=0&&(u=(f*o-i*a)/(f-i)),k(i)<k(f)?(k(c-e)<5e-8&&(v=30),c=ut(o=u,r,n,t)):(o=a,c=l,a=u),v+=1;return u}}));var at={};return c(at,"cdf",ut),c(at,"quantile",ot),at},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).tukey=n();
//# sourceMappingURL=index.js.map
