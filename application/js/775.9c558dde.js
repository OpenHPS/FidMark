"use strict";(globalThis["webpackChunkeswc2024"]=globalThis["webpackChunkeswc2024"]||[]).push([[775],{8775:(e,t,o)=>{o.r(t),o.d(t,{startInputShims:()=>startInputShims});var n=o(8487),i=o(6587),r=o(9420),s=o(9461);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=new WeakMap,relocateInput=(e,t,o,n=0,i=!1)=>{a.has(e)!==o&&(o?addClone(e,t,n,i):removeClone(e,t))},isFocused=e=>e===e.getRootNode().activeElement,addClone=(e,t,o,n=!1)=>{const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),a.set(e,r);const s=e.ownerDocument,d="rtl"===s.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${o}px,0) scale(0)`},removeClone=(e,t)=>{const o=a.get(e);o&&(a.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},d=50,enableHideCaretOnScroll=(e,t,o)=>{if(!o||!t)return()=>{};const scrollHideCaret=o=>{isFocused(t)&&relocateInput(e,t,o)},onBlur=()=>relocateInput(e,t,!1),hideCaret=()=>scrollHideCaret(!0),showCaret=()=>scrollHideCaret(!1);return(0,i.a)(o,"ionScrollStart",hideCaret),(0,i.a)(o,"ionScrollEnd",showCaret),t.addEventListener("blur",onBlur),()=>{(0,i.b)(o,"ionScrollStart",hideCaret),(0,i.b)(o,"ionScrollEnd",showCaret),t.removeEventListener("blur",onBlur)}},l="input, textarea, [no-blur], [contenteditable]",enableInputBlurring=()=>{let e=!0,t=!1;const o=document,onScroll=()=>{t=!0},onFocusin=()=>{e=!0},onTouchend=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(l))return;const r=n.target;r!==i&&(r.matches(l)||r.closest(l)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};return(0,i.a)(o,"ionScrollStart",onScroll),o.addEventListener("focusin",onFocusin,!0),o.addEventListener("touchend",onTouchend,!1),()=>{(0,i.b)(o,"ionScrollStart",onScroll,!0),o.removeEventListener("focusin",onFocusin,!0),o.removeEventListener("touchend",onTouchend,!1)}},c=.3,getScrollData=(e,t,o,n)=>{var i;const r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return calcScrollData(r.getBoundingClientRect(),t.getBoundingClientRect(),o,n)},calcScrollData=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,a=Math.min(t.bottom,n-o),l=s+15,u=a-d,v=u-r,m=l-i,w=Math.round(v<0?-v:m>0?-m:0),f=Math.min(w,i-s),h=Math.abs(f),p=h/c,b=Math.min(400,Math.max(150,p));return{scrollAmount:f,scrollDuration:b,scrollPadding:o,inputSafeY:4-(i-l)}},u="$ionPaddingTimer",setScrollPadding=(e,t,o)=>{const n=e[u];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[u]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},setClearScrollPaddingListener=(e,t,o)=>{const clearScrollPadding=()=>{t&&setScrollPadding(t,0,o)};e.addEventListener("focusout",clearScrollPadding,{once:!0})};let v=0;const m="data-ionic-skip-scroll-assist",enableScrollAssist=(e,t,o,n,i,a,d,l=!1)=>{const c=a&&(void 0===d||d.mode===r.a.None);let u=!1;const v=void 0!==s.w?s.w.innerHeight:0,keyboardShow=i=>{!1!==u?jsSetFocus(e,t,o,n,i.detail.keyboardHeight,c,l,v,!1):u=!0},focusOut=()=>{u=!1,null===s.w||void 0===s.w||s.w.removeEventListener("ionKeyboardDidShow",keyboardShow),e.removeEventListener("focusout",focusOut,!0)},focusIn=async()=>{t.hasAttribute(m)?t.removeAttribute(m):(jsSetFocus(e,t,o,n,i,c,l,v),null===s.w||void 0===s.w||s.w.addEventListener("ionKeyboardDidShow",keyboardShow),e.addEventListener("focusout",focusOut,!0))};return e.addEventListener("focusin",focusIn,!0),()=>{e.removeEventListener("focusin",focusIn,!0),null===s.w||void 0===s.w||s.w.removeEventListener("ionKeyboardDidShow",keyboardShow),e.removeEventListener("focusout",focusOut,!0)}},setManualFocus=e=>{document.activeElement!==e&&(e.setAttribute(m,"true"),e.focus())},jsSetFocus=async(e,t,o,r,s,a,l=!1,c=0,u=!0)=>{if(!o&&!r)return;const m=getScrollData(e,o||r,s,c);if(o&&Math.abs(m.scrollAmount)<4)return setManualFocus(t),void(a&&null!==o&&(setScrollPadding(o,v),setClearScrollPaddingListener(t,o,(()=>v=0))));if(relocateInput(e,t,!0,m.inputSafeY,l),setManualFocus(t),(0,i.r)((()=>e.click())),a&&o&&(v=m.scrollPadding,setScrollPadding(o,v)),"undefined"!==typeof window){let i;const scrollContent=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.removeEventListener("ionKeyboardDidShow",scrollContent),o&&await(0,n.c)(o,0,m.scrollAmount,m.scrollDuration),relocateInput(e,t,!1,m.inputSafeY),setManualFocus(t),a&&setClearScrollPaddingListener(t,o,(()=>v=0))},doubleKeyboardEventListener=()=>{window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.addEventListener("ionKeyboardDidShow",scrollContent)};if(o){const e=await(0,n.g)(o),r=e.scrollHeight-e.clientHeight;if(u&&m.scrollAmount>r-e.scrollTop)return"password"===t.type?(m.scrollAmount+=d,window.addEventListener("ionKeyboardDidShow",doubleKeyboardEventListener)):window.addEventListener("ionKeyboardDidShow",scrollContent),void(i=setTimeout(scrollContent,1e3))}scrollContent()}},w=!0,startInputShims=async(e,t)=>{const o=document,s="ios"===t,a="android"===t,d=e.getNumber("keyboardHeight",290),l=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",s),u=e.getBoolean("inputBlurring",s),v=e.getBoolean("scrollPadding",!0),m=Array.from(o.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,h=new WeakMap,p=await r.K.getResizeMode(),registerInput=async e=>{await new Promise((t=>(0,i.c)(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),r=(0,n.a)(e),s=r?null:e.closest("ion-footer");if(!o)return;if(r&&c&&!f.has(e)){const t=enableHideCaretOnScroll(e,o,r);f.set(e,t)}const u="date"===o.type||"datetime-local"===o.type;if(!u&&(r||s)&&l&&!h.has(e)){const t=enableScrollAssist(e,o,r,s,d,v,p,a);h.set(e,t)}},unregisterInput=e=>{if(c){const t=f.get(e);t&&t(),f.delete(e)}if(l){const t=h.get(e);t&&t(),h.delete(e)}};u&&w&&enableInputBlurring();for(const n of m)registerInput(n);o.addEventListener("ionInputDidLoad",(e=>{registerInput(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{unregisterInput(e.detail)}))}}}]);
//# sourceMappingURL=775.9c558dde.js.map