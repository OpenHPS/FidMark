"use strict";(globalThis["webpackChunkeswc2024"]=globalThis["webpackChunkeswc2024"]||[]).push([[576],{576:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>X});const r=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),c=e=>{const t=[];let s=0;e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}));const r=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),c={content:r,placeholders:t};return c},o=(e,t)=>t.replace(/__ph-(\d+)__/g,((t,s)=>e[+s])),n="-shadowcsshost",l="-shadowcssslotted",p="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+n+a,"gim"),h=new RegExp("("+p+a,"gim"),u=new RegExp("("+l+a,"gim"),g=n+"-no-combinator",d=/-shadowcsshost-no-combinator([^\s]*)/,m=[/::shadow/g,/::content/g],$="([>\\s~+[.,{:][\\s\\S]*)?$",x=/-shadowcsshost/gim,f=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),w=f("::slotted"),_=f(":host"),S=f(":host-context"),b=/\/\*\s*[\s\S]*?\*\//g,E=e=>e.replace(b,""),W=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,k=e=>e.match(W)||[],O=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,R=/([{}])/g,j=/(^.*?[^\\])??((:+)(.*)|$)/,T="{",C="}",L="%BLOCK%",B=(e,t)=>{const s=I(e);let r=0;return s.escapedString.replace(O,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+L)&&(o=s.blocks[r++],n=n.substring(L.length+1),l="{");const p={selector:c,content:o},a=t(p);return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`}))},I=e=>{const t=e.split(R),s=[],r=[];let c=0,o=[];for(let l=0;l<t.length;l++){const e=t[l];e===C&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(L),o=[]),s.push(e)),e===T&&c++}o.length>0&&(r.push(o.join("")),s.push(L));const n={escapedString:s.join(""),blocks:r};return n},K=e=>(e=e.replace(S,`$1${p}`).replace(_,`$1${n}`).replace(w,`$1${l}`),e),M=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(g,o,e[3]))}return r.join(",")}return g+e[3]})),U=(e,t,s)=>e+t.replace(n,"")+s,q=e=>M(e,i,U),v=(e,t,s)=>t.indexOf(n)>-1?U(e,t,s):e+t+s+", "+t+" "+e+s,y=(e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(u,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=(n+o).trim(),p=`${n.trimEnd()}${o.trim()}`.trim();if(l!==p){const e=`${p}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return g+e[3]})),{selectors:r,cssText:e}},z=e=>M(e,h,v),A=e=>m.reduce(((e,t)=>e.replace(t," ")),e),D=e=>{const t=/\[/g,s=/\]/g;return e=e.replace(t,"\\[").replace(s,"\\]"),new RegExp("^("+e+")"+$,"m")},F=(e,t)=>{const s=D(t);return!s.test(e)},G=(e,t)=>e.replace(j,((e,s="",r,c="",o="")=>s+t+c+o)),H=(e,t,s)=>{if(x.lastIndex=0,x.test(e)){const t=`.${s}`;return e.replace(d,((e,s)=>G(s,t))).replace(x,t+" ")}return t+" "+e},J=(e,t,s)=>{const r=/\[is=([^\]]*)\]/g;t=t.replace(r,((e,...t)=>t[0]));const n="."+t,l=e=>{let r=e.trim();if(!r)return"";if(e.indexOf(g)>-1)r=H(e,t,s);else{const t=e.replace(x,"");t.length>0&&(r=G(t,n))}return r},p=c(e);e=p.content;let a,i="",h=0;const u=/( |>|\+|~(?!=))\s*/g,d=e.indexOf(g)>-1;let m=!d;while(null!==(a=u.exec(e))){const t=a[1],s=e.slice(h,a.index).trim();m=m||s.indexOf(g)>-1;const r=m?l(s):s;i+=`${r} ${t} `,h=u.lastIndex}const $=e.substring(h);return m=m||$.indexOf(g)>-1,i+=m?l($):$,o(p.placeholders,i)},N=(e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():F(e,t)?J(e,t,s).trim():e.trim())).join(", "),P=(e,t,s,r,c)=>B(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=N(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=P(e.content,t,s,r));const n={selector:c.replace(/\s{2,}/g," ").trim(),content:o};return n})),Q=(e,t,s,r,c)=>{e=K(e),e=q(e),e=z(e);const o=y(e,r);return e=o.cssText,e=A(e),t&&(e=P(e,t,s,r)),e=V(e,s),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:o.selectors.map((e=>({orgSelector:V(e.orgSelector,s),updatedSelector:V(e.updatedSelector,s)})))}},V=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),X=(e,t,s)=>{const c=t+"-h",o=t+"-s",n=k(e);e=E(e);const l=[];if(s){const t=e=>{const t=`/*!@___${l.length}___*/`,s=`/*!@${e.selector}*/`;return l.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=B(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=B(e.content,t),e):e))}const p=Q(e,t,c,o);return e=[p.cssText,...n].join("\n"),s&&l.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),p.slottedSelectors.forEach((t=>{const s=new RegExp(r(t.orgSelector),"g");e=e.replace(s,t.updatedSelector)})),e};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from `webcomponents.js` to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);
//# sourceMappingURL=576.15fd608d.js.map