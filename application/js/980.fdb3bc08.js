"use strict";(globalThis["webpackChunkeswc2024"]=globalThis["webpackChunkeswc2024"]||[]).push([[980],{5980:(e,t,n)=>{n.d(t,{c:()=>y});var o=n(9461),i=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let a;const r=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const o="animation-timing-function";e[o]=n,delete e[t]}else{const o=s(t);o!==t&&(e[o]=n,delete e[t])}}})),e),s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},c=(e,t,n)=>{const o=t.startsWith("animation")?l(e):"";e.style.setProperty(o+t,n)},f=(e,t)=>{const n=t.startsWith("animation")?l(e):"";e.style.removeProperty(n+t)},d=(e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},a=n=>{e===n.target&&(i(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)}),i},m=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const o in e)e.hasOwnProperty(o)&&"offset"!==o&&n.push(`${o}: ${e[o]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),h=[],u=e=>{let t=h.indexOf(e);return t<0&&(t=h.push(e)-1),`ion-animation-${t}`},p=e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t},g=(e,t,n)=>{var o;const i=p(n),a=l(n),r=i.querySelector("#"+e);if(r)return r;const s=(null!==(o=n.ownerDocument)&&void 0!==o?o:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,i.appendChild(s),s},v=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,a,s,l,h,p,y,E,b,$,A,w,C=[],k=[],T=[],S=!1,D={},L=[],P=[],R={},F=0,N=!1,O=!1,W=!0,x=!1,I=!0,K=!1;const j=e,M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U=[],V=[],X="function"===typeof AnimationEffect||void 0!==o.w&&"function"===typeof o.w.AnimationEffect,Y="function"===typeof Element&&"function"===typeof Element.prototype.animate&&X,_=100,ee=()=>V,te=e=>(B.forEach((t=>{t.destroy(e)})),ne(e),Z.length=0,B.length=0,C.length=0,le(),S=!1,I=!0,w),ne=e=>{ce(),e&&fe()},oe=()=>{N=!1,O=!1,I=!0,E=void 0,b=void 0,$=void 0,F=0,x=!1,W=!0,K=!1},ie=()=>0!==F&&!K,ae=(e,t)=>{const n=t.findIndex((t=>t.c===e));n>-1&&t.splice(n,1)},re=(e,t)=>(z.push({c:e,o:t}),w),se=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?q:M;return n.push({c:e,o:t}),w},le=()=>(M.length=0,q.length=0,w),ce=()=>{if(Y)V.forEach((e=>{e.cancel()})),V.length=0;else{const e=Z.slice();(0,i.r)((()=>{e.forEach((e=>{f(e,"animation-name"),f(e,"animation-duration"),f(e,"animation-timing-function"),f(e,"animation-iteration-count"),f(e,"animation-delay"),f(e,"animation-play-state"),f(e,"animation-fill-mode"),f(e,"animation-direction")}))}))}},fe=()=>{G.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),G.length=0},de=e=>(H.push(e),w),me=e=>(J.push(e),w),he=e=>(Q.push(e),w),ue=e=>(U.push(e),w),pe=e=>(k=v(k,e),w),ge=e=>(T=v(T,e),w),ve=(e={})=>(D=e,w),ye=(e=[])=>{for(const t of e)D[t]="";return w},Ee=e=>(L=v(L,e),w),be=e=>(P=v(P,e),w),$e=(e={})=>(R=e,w),Ae=(e=[])=>{for(const t of e)R[t]="";return w},we=()=>void 0!==l?l:p?p.getFill():"both",Ce=()=>void 0!==E?E:void 0!==h?h:p?p.getDirection():"normal",ke=()=>N?"linear":void 0!==a?a:p?p.getEasing():"linear",Te=()=>O?0:void 0!==b?b:void 0!==n?n:p?p.getDuration():0,Se=()=>void 0!==s?s:p?p.getIterations():1,De=()=>void 0!==$?$:void 0!==t?t:p?p.getDelay():0,Le=()=>C,Pe=e=>(h=e,Ve(!0),w),Re=e=>(l=e,Ve(!0),w),Fe=e=>(t=e,Ve(!0),w),Ne=e=>(a=e,Ve(!0),w),Oe=e=>(Y||0!==e||(e=1),n=e,Ve(!0),w),We=e=>(s=e,Ve(!0),w),xe=e=>(p=e,w),Ie=e=>{if(null!=e)if(1===e.nodeType)Z.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)Z.push(e[t]);else console.error("Invalid addElement value");return w},Ke=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(w),B.push(t);else e.parent(w),B.push(e);return w},je=e=>{const t=C!==e;return C=e,t&&Me(C),w},Me=e=>{Y?ee().forEach((t=>{const n=t.effect;if(n.setKeyframes)n.setKeyframes(e);else{const o=new KeyframeEffect(n.target,e,n.getTiming());t.effect=o}})):Be()},qe=()=>{H.forEach((e=>e())),J.forEach((e=>e()));const e=k,t=T,n=D;Z.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&c(o,e,n[e])}))},ze=()=>{ot(),Q.forEach((e=>e())),U.forEach((e=>e()));const e=W?1:0,t=L,n=P,o=R;Z.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&c(e,t,o[t])})),M.forEach((t=>t.c(e,w))),q.forEach((t=>t.c(e,w))),q.length=0,I=!0,W&&(x=!0),W=!0},Ze=()=>{0!==F&&(F--,0===F&&(ze(),p&&p.animationFinish()))},Be=(t=!0)=>{fe();const n=r(C);Z.forEach((o=>{if(n.length>0){const a=m(n);A=void 0!==e?e:u(a);const r=g(A,a,o);G.push(r),c(o,"animation-duration",`${Te()}ms`),c(o,"animation-timing-function",ke()),c(o,"animation-delay",`${De()}ms`),c(o,"animation-fill-mode",we()),c(o,"animation-direction",Ce());const s=Se()===1/0?"infinite":Se().toString();c(o,"animation-iteration-count",s),c(o,"animation-play-state","paused"),t&&c(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{c(o,"animation-name",r.id||null)}))}}))},Ge=()=>{Z.forEach((e=>{const t=e.animate(C,{id:j,delay:De(),duration:Te(),easing:ke(),iterations:Se(),fill:we(),direction:Ce()});t.pause(),V.push(t)})),V.length>0&&(V[0].onfinish=()=>{Ze()})},He=(e=!0)=>{qe(),C.length>0&&(Y?Ge():Be(e)),S=!0},Je=e=>{if(e=Math.min(Math.max(e,0),.9999),Y)V.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+Te()*e,t.pause()}));else{const t=`-${Te()*e}ms`;Z.forEach((e=>{C.length>0&&(c(e,"animation-delay",t),c(e,"animation-play-state","paused"))}))}},Qe=e=>{V.forEach((e=>{e.effect.updateTiming({delay:De(),duration:Te(),easing:ke(),iterations:Se(),fill:we(),direction:Ce()})})),void 0!==e&&Je(e)},Ue=(e=!0,t)=>{(0,i.r)((()=>{Z.forEach((n=>{c(n,"animation-name",A||null),c(n,"animation-duration",`${Te()}ms`),c(n,"animation-timing-function",ke()),c(n,"animation-delay",void 0!==t?`-${t*Te()}ms`:`${De()}ms`),c(n,"animation-fill-mode",we()||null),c(n,"animation-direction",Ce()||null);const o=Se()===1/0?"infinite":Se().toString();c(n,"animation-iteration-count",o),e&&c(n,"animation-name",`${A}-alt`),(0,i.r)((()=>{c(n,"animation-name",A||null)}))}))}))},Ve=(e=!1,t=!0,n)=>(e&&B.forEach((o=>{o.update(e,t,n)})),Y?Qe(n):Ue(t,n),w),Xe=(e=!1,t)=>(B.forEach((n=>{n.progressStart(e,t)})),et(),N=e,S||He(),Ve(!1,!0,t),w),Ye=e=>(B.forEach((t=>{t.progressStep(e)})),Je(e),w),_e=(e,t,n)=>(N=!1,B.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&(b=n),x=!1,W=!0,0===e?(E="reverse"===Ce()?"normal":"reverse","reverse"===E&&(W=!1),Y?(Ve(),Je(1-t)):($=(1-t)*Te()*-1,Ve(!1,!1))):1===e&&(Y?(Ve(),Je(t)):($=t*Te()*-1,Ve(!1,!1))),void 0!==e&&(se((()=>{b=void 0,E=void 0,$=void 0}),{oneTimeCallback:!0}),p||lt()),w),et=()=>{S&&(Y?V.forEach((e=>{e.pause()})):Z.forEach((e=>{c(e,"animation-play-state","paused")})),K=!0)},tt=()=>(B.forEach((e=>{e.pause()})),et(),w),nt=()=>{y=void 0,Ze()},ot=()=>{y&&clearTimeout(y)},it=()=>{if(ot(),(0,i.r)((()=>{Z.forEach((e=>{C.length>0&&c(e,"animation-play-state","running")}))})),0===C.length||0===Z.length)Ze();else{const e=De()||0,t=Te()||0,n=Se()||1;isFinite(n)&&(y=setTimeout(nt,e+t*n+_)),d(Z[0],(()=>{ot(),(0,i.r)((()=>{at(),(0,i.r)(Ze)}))}))}},at=()=>{Z.forEach((e=>{f(e,"animation-duration"),f(e,"animation-delay"),f(e,"animation-play-state")}))},rt=()=>{V.forEach((e=>{e.play()})),0!==C.length&&0!==Z.length||Ze()},st=()=>{Y?(Je(0),Qe()):Ue()},lt=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(O=!0,se((()=>O=!1),{oneTimeCallback:!0})),S||He(),x&&(st(),x=!1),I&&(F=B.length+1,I=!1);const n=()=>{ae(o,q),t()},o=()=>{ae(n,z),t()};se(o,{oneTimeCallback:!0}),re(n,{oneTimeCallback:!0}),B.forEach((e=>{e.play()})),Y?rt():it(),K=!1})),ct=()=>{B.forEach((e=>{e.stop()})),S&&(ce(),S=!1),oe(),z.forEach((e=>e.c(0,w))),z.length=0},ft=(e,t)=>{const n=C[0];return void 0===n||void 0!==n.offset&&0!==n.offset?C=[{offset:0,[e]:t},...C]:n[e]=t,w},dt=(e,t)=>{const n=C[C.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?C=[...C,{offset:1,[e]:t}]:n[e]=t,w},mt=(e,t,n)=>ft(e,t).to(e,n);return w={parentAnimation:p,elements:Z,childAnimations:B,id:j,animationFinish:Ze,from:ft,to:dt,fromTo:mt,parent:xe,play:lt,pause:tt,stop:ct,destroy:te,keyframes:je,addAnimation:Ke,addElement:Ie,update:Ve,fill:Re,direction:Pe,iterations:We,duration:Oe,easing:Ne,delay:Fe,getWebAnimations:ee,getKeyframes:Le,getFill:we,getDirection:Ce,getDelay:De,getIterations:Se,getEasing:ke,getDuration:Te,afterAddRead:he,afterAddWrite:ue,afterClearStyles:Ae,afterStyles:$e,afterRemoveClass:be,afterAddClass:Ee,beforeAddRead:de,beforeAddWrite:me,beforeClearStyles:ye,beforeStyles:ve,beforeRemoveClass:ge,beforeAddClass:pe,onFinish:se,isRunning:ie,progressStart:Xe,progressStep:Ye,progressEnd:_e}}}}]);
//# sourceMappingURL=980.fdb3bc08.js.map