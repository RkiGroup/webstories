(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[7418],{52417:(e,t,n)=>{"use strict";n.d(t,{DATA_VERSION:()=>Dt,migrate:()=>zt});const r=function(e){return{pages:e}},a=1080/412,o=1920/732;function i(e){let{elements:t,...n}=e;return{elements:t.map(s),...n}}function s(e){let{x:t,y:n,width:r,height:i,...s}=e;const c={x:u(t*a),y:u(n*o),width:u(r*a),height:u(i*o),...s};return"fontSize"in c&&"number"==typeof c.fontSize&&(c.fontSize=u(c.fontSize*o)),c}function u(e){return Number(e.toFixed(0))}const c=function(e){let{pages:t,...n}=e;return{pages:t.map(i),...n}};function l(e){let{elements:t,...n}=e;return{elements:t.map(d),...n}}function d(e){if("isFullbleed"in e){const{isFullbleed:t,...n}=e;return{isFill:t,...n}}return e}const p=function(e){let{pages:t,...n}=e;return{pages:t.map(l),...n}};function m(e){let{elements:t,...n}=e;return{elements:t.map(g),...n}}function g(e){const{type:t,...n}=e;return"square"===t?{type:"shape",...n}:e}const f=function(e){let{pages:t,...n}=e;return{pages:t.map(m),...n}};function h(e){let{elements:t,...n}=e;return{elements:t.map(y),...n}}function y(e){if("mimeType"in e){if("videoId"in e){const{src:t,origRatio:n,poster:r,posterId:a,videoId:o,mimeType:i,width:s,height:u,...c}=e;return{resource:{type:"video",src:t,width:s,height:u,poster:r,posterId:a,videoId:o,mimeType:i},width:s,height:u,...c}}if("image"===e.type){const{src:t,origRatio:n,width:r,height:a,mimeType:o,...i}=e;return{resource:{type:"image",src:t,width:r,height:a,mimeType:o},width:r,height:a,...i}}}return e}const b=function(e){let{pages:t,...n}=e;return{pages:t.map(h),...n}};function k(e){let{elements:t,...n}=e;return{elements:t.map(v),...n}}function v(e){return"opacity"in e&&e.opacity?e:{opacity:100,...e}}const x=function(e){let{pages:t,...n}=e;return{pages:t.map(k),...n}};var w=n(84967);function D(e){let{elements:t,backgroundColor:n,...r}=e;return{elements:t.map(z),backgroundColor:A(n),...r}}function z(e){const t={};return"color"in e&&(t.color=A(e.color)),"backgroundColor"in e&&(t.backgroundColor=A(e.backgroundColor)),{...e,...t}}function A(e){if(!e||"transparent"===e)return null;const t=(0,w.parseToRgb)(e),{red:n,green:r,blue:a}=t;if("alpha"in t&&1!==t.alpha){const{alpha:e}=t;return{color:{r:n,g:r,b:a,a:e}}}return{color:{r:n,g:r,b:a}}}const _=function(e){let{pages:t,...n}=e;return{pages:t.map(D),...n}};function E(e){let{elements:t,...n}=e;return{elements:t.map(S),...n}}function S(e){return"content"in e||"flip"in e?e:{...e,flip:{horizontal:!1,vertical:!1}}}const T=function(e){let{pages:t,...n}=e;return{pages:t.map(E),...n}};function C(e){let{elements:t,...n}=e;return{elements:t.map(O),...n}}function O(e){if(!("content"in e))return e;const{padding:t}=e;if(t&&Object.prototype.hasOwnProperty.call(e.padding,"vertical")&&Object.prototype.hasOwnProperty.call(e.padding,"horizontal"))return e;const n=t||0;return{...e,padding:{horizontal:n,vertical:n}}}const N=function(e){let{pages:t,...n}=e;return{pages:t.map(C),...n}};n(30541);var B=n(19112);const I=1080,M=I/3;function P(e){let{backgroundColor:t,...n}=e;if(!("backgroundElementId"in n)){const{elements:e}=n,r={type:"shape",x:I/4*Math.random(),y:I/4*Math.random(),width:M,height:M,rotationAngle:0,mask:{type:"rectangle"},flip:{vertical:!1,horizontal:!1},isBackground:!0,backgroundColor:t||{color:{r:255,g:255,b:255,a:1}},id:(0,B.default)(),opacity:100};return e.unshift(r),{...n,elements:e,backgroundElementId:r.id}}return n}const $=function(e){let{pages:t,...n}=e;return{pages:t.map(P),...n}},F=Math.min(440/1080,.34375);function R(e){let{elements:t,...n}=e;return{elements:t.map(L),...n}}function L(e){let{x:t,y:n,width:r,height:a,...o}=e;const i={x:j(t*F),y:j(n*F),width:j(r*F),height:j(a*F),...o};if("fontSize"in i){const{fontSize:e}=i;"number"==typeof e&&(i.fontSize=j(e*F))}if("padding"in i&&i.padding){const{padding:e}=i,{horizontal:t,vertical:n}=e;i.padding={horizontal:j(t*F),vertical:j(n*F)}}return i}function j(e){return Number(e.toFixed(0))}const W=function(e){let{pages:t,...n}=e;return{pages:t.map(R),...n}};const q=function(e){return"autoAdvance"in e&&"defaultPageDuration"in e?e:{autoAdvance:!0,defaultPageDuration:7,...e}};function U(e){let{elements:t,...n}=e;return{elements:t.map(G),...n}}function G(e){if("content"in e){let t=!1;return"backgroundColor"in e&&(t=Boolean(e.backgroundColor)),{backgroundTextMode:t?"FILL":"NONE",...e}}return e}const V=function(e){let{pages:t,...n}=e;return{pages:t.map(U),...n}};function H(e){let{elements:t,...n}=e;return{elements:t.map(X),...n}}function X(e){if("resource"in e&&"videoId"in e.resource){const{resource:t}=e,{videoId:n,...r}=t,a={...r,id:n};return{...e,resource:a}}return e}const Y=function(e){let{pages:t,...n}=e;return{pages:t.map(H),...n}};function J(e){let{elements:t,...n}=e;return{elements:t.map(K),...n}}function K(e){return e.link?.type&&delete e.link.type,e}const Q=function(e){let{pages:t,...n}=e;return{pages:t.map(J),...n}};function Z(e){let{elements:t,...n}=e;return{elements:t.map(te),...n}}const ee=["Arial","Arial Black","Arial Narrow","Baskerville","Brush Script MT","Copperplate","Courier New","Century Gothic","Garamond","Georgia","Gill Sans","Lucida Bright","Lucida Sans Typewriter","Palatino","Papyrus","Tahoma","Times New Roman","Trebuchet MS","Verdana"];function te(e){if(!("fontFamily"in e))return e;const{fontFamily:t,fontFallback:n,...r}=e;return{font:{service:ee.includes(t)?"system":"fonts.google.com",family:t,fallbacks:n},...r}}const ne=function(e){let{pages:t,...n}=e;return{pages:t.map(Z),...n}};function re(e){let{elements:t,...n}=e;return{elements:t.map(ae),...n}}function ae(e){return"isFullbleedBackground"in e&&delete e.isFullbleedBackground,e}const oe=function(e){let{pages:t,...n}=e;return{pages:t.map(re),...n}};function ie(e){let{elements:t,...n}=e;return{elements:t.map(se),...n}}function se(e){return"content"in e?function(e){let{bold:t,fontWeight:n,fontStyle:r,textDecoration:a,letterSpacing:o,color:i,content:s,...u}=e;const c=[s].map((e=>function(e,t,n){const r="number"==typeof n&&400!==n?n:t?700:null;if(r){return le(ue(e,"strong"),`font-weight: ${r}`)}return ce(e,"strong","font-weight: 700")}(e,t,n))).map((e=>function(e,t){const n="italic"===t?t:null,r="font-style: italic";if(n){return le(ue(e,"em"),r)}return ce(e,"em",r)}(e,r))).map((e=>function(e,t){const n="underline"===t?t:null,r="text-decoration: underline";if(n){return le(ue(e,"u"),r)}return ce(e,"u",r)}(e,a))).map((e=>function(e,t){if(!t)return e;if("color"in t){const{color:{r:n,g:r,b:a,a:o=1}}=t;return le(e,`color: rgba(${n}, ${r}, ${a}, ${o})`)}return e}(e,i))).map((e=>function(e,t){if(!t)return e;return le(e,`letter-spacing: ${t/100}em`)}(e,o))).pop();return{...u,content:c}}(e):e}function ue(e,t){return e.replace(new RegExp(`</?${t}>`,"gi"),"")}function ce(e,t,n){return e.replace(new RegExp(`<${t}>`,"gi"),`<span style="${n}">`).replace(new RegExp(`</${t}>`,"gi"),"</span>")}function le(e,t){return`<span style="${t}">${e}</span>`}const de=function(e){let{pages:t,...n}=e;return{pages:t.map(ie),...n}};function pe(e){let{elements:t,backgroundElementId:n,...r}=e;const a=t[0];let o={};const i={...t};return"shape"===a.type?i[0].isDefaultBackground=!0:o={defaultBackgroundElement:{type:"shape",x:1,y:1,width:1,height:1,rotationAngle:0,mask:{type:"rectangle"},backgroundColor:{color:{r:255,g:255,b:255,a:1}},isBackground:!0,isDefaultBackground:!0,id:(0,B.default)()}},{elements:i,...r,...o}}const me=function(e){let{pages:t,...n}=e;return{pages:t.map(pe),...n}};function ge(e){let{elements:t,defaultBackgroundElement:n,...r}=e;const a=n?fe(n):null;return{elements:t.map(fe),...a?{defaultBackgroundElement:a}:null,...r}}function fe(e){if("backgroundColor"in e){const{backgroundColor:t,...n}=e;return t?"conic"===t.type?{...e,backgroundColor:{...t,type:"linear"}}:e:{...n,backgroundColor:{color:{r:196,g:196,b:196}}}}return e}const he=function(e){let{pages:t,...n}=e;return{pages:t.map(ge),...n}},ye=440,be=9/16,ke=(ye/be-660)/2;function ve(e){let{elements:t,...n}=e;return{elements:t.map(xe),...n}}function xe(e){if("isFill"in e){const{isFill:t,...n}=e;return t?{...n,x:0,y:-ke,width:ye,height:ye/be,rotationAngle:0}:n}return e}const we=function(e){let{pages:t,...n}=e;return{pages:t.map(ve),...n}};function De(e){const{elements:t,defaultBackgroundElement:n}=e;let r;return r=t[0]&&"isDefaultBackground"in t[0]&&t[0].isDefaultBackground&&t[0].backgroundColor?t[0].backgroundColor:n?.backgroundColor,{...e,backgroundColor:r||{type:"solid",color:{r:255,g:255,b:255}}}}const ze=function(e){let{pages:t,...n}=e;return{pages:t.map(De),...n}},Ae=Math.min(412/440,618/660);function _e(e){let{elements:t,...n}=e;return{elements:t.map(Ee),...n}}function Ee(e){const{x:t,y:n,width:r,height:a,...o}=e,i={x:Se(t*Ae),y:Se(n*Ae),width:Se(r*Ae),height:Se(a*Ae),...o};if("fontSize"in i&&"number"==typeof i.fontSize&&(i.fontSize=Se(i.fontSize*Ae)),"padding"in i&&i.padding){const{horizontal:e,vertical:t}=i.padding;i.padding={horizontal:Se(e*Ae),vertical:Se(t*Ae)}}return i}function Se(e){return Number(e.toFixed(0))}const Te=function(e){let{pages:t,...n}=e;return{pages:t.map(_e),...n}};function Ce(e){let{elements:t,backgroundOverlay:n,...r}=e;const a=n&&["solid","linear","radial"].includes(n),o=t[0],i=["image","video"].includes(o?.type);return a&&i?{elements:[{...o,backgroundOverlay:Oe(n)},...t.slice(1)],...r}:{elements:t,...r}}function Oe(e){switch(e){case"solid":return{color:{r:0,g:0,b:0,a:.3}};case"linear":return{type:"linear",rotation:0,stops:[{color:{r:0,g:0,b:0,a:0},position:.4},{color:{r:0,g:0,b:0,a:1},position:1}],alpha:.9};case"radial":return{type:"radial",size:{w:.8,h:.5},stops:[{color:{r:0,g:0,b:0,a:0},position:.25},{color:{r:0,g:0,b:0,a:1},position:1}],alpha:.6};default:return null}}const Ne=function(e){let{pages:t,...n}=e;return{pages:t.map(Ce),...n}};function Be(e){let{elements:t,...n}=e;return{elements:t.map(Ie),...n}}function Ie(e){return e?.mask?.type&&e?.mask?.type.startsWith("blob-")&&(e.mask.type="blob"),e}const Me=function(e){let{pages:t,...n}=e;return{pages:t.map(Be),...n}};n(57658);function Pe(e){let{animations:t,...n}=e;return{animations:(t||[]).reduce($e,[]),...n}}function $e(e,t){const{targets:n,id:r,...a}=t;return n.forEach(((t,n)=>{e.push({id:0===n?r:(0,B.default)(),targets:[t],...a})})),e}function Fe(e){let{elements:t,...n}=e;return{elements:t.map(Re),...n}}function Re(e){if("backgroundOverlay"in e){const{backgroundOverlay:t,...n}=e;return{...n,overlay:t}}return e}function Le(e){let{elements:t,...n}=e;return{elements:t.map(je),...n}}function je(e){if("resource"in e&&"video"===e.resource.type&&e.resource&&e.resource.lengthFormatted){let t=0;const n=e.resource.lengthFormatted.split(":").map(Number);if(2===n.length){const[e,r]=n;t=60*e+r}else if(3===n.length){const[e,r,a]=n;t=3600*e+60*r+a}const{resource:r}=e;return{...e,resource:{...r,length:t}}}return e}function We(e){let{elements:t,...n}=e;return{elements:t.map(qe),...n}}function qe(e){if("resource"in e&&"video"===e.resource.type&&e.resource?.id){if(e.resource.id.toString().startsWith("media/coverr"))return{...e,resource:{...e.resource,isOptimized:!0}}}return e}function Ue(e){let{elements:t,...n}=e;return{elements:t.map(Ge),...n}}function Ge(e){if(!("resource"in e))return e;if("gif"!==e.resource.type)return e;if("id"in e.resource&&"posterId"in e.resource)return e;const{sizes:t,poster:n,...r}=e.resource.output;return{...e,resource:{...e.resource,id:e.resource.alt,posterId:e.resource.alt,poster:e.resource.output?.poster?e.resource.output.poster:void 0,isOptimized:!0,output:r}}}function Ve(e){let{elements:t,...n}=e;return{elements:t.map(He),...n}}function He(e){if("resource"in e&&"id"in e.resource&&"video"===e.type&&e.resource?.id){if(e.resource.id.toString().startsWith("media/coverr"))return{...e,resource:{...e.resource,isMuted:!0}}}return e}function v0031_normalizeResourceSizes_reducePage(e){let{elements:t,...n}=e;return{elements:t.map(v0031_normalizeResourceSizes_updateElement),...n}}function v0031_normalizeResourceSizes_updateElement(e){if("resource"in e&&(e.resource.width=Number(e.resource.width),e.resource.height=Number(e.resource.height),"sizes"in e.resource&&e.resource.sizes))for(const t of Object.keys(e.resource.sizes)){const n=e.resource.sizes[t];e.resource.sizes[t]={...n,width:Number(n.width),height:Number(n.height)}}return e}function Xe(e){const{pageAttachment:t}=e;return t?"theme"in t?e:{...e,pageAttachment:{...t,theme:"light"}}:e}function Ye(e){let{elements:t,...n}=e;return{elements:t.map(Je),...n}}function Je(e){return"resource"in e&&e.resource?.title&&delete e.resource?.title,e}function Ke(e){let{elements:t,overlay:n,...r}=e;return{elements:t.map(Qe),...r}}function Qe(e){if("isDefaultBackground"in e&&e.isDefaultBackground){const{backgroundColor:t,...n}=e;return n}return e}function Ze(e){let{elements:t,...n}=e;return{elements:t.map(et),...n}}function et(e){if("resource"in e){if("id"in e.resource&&e.resource.id){const t=e.resource.id.toString().startsWith("media/");return{...e,resource:{...e.resource,isExternal:t}}}return{...e,resource:{...e.resource,isExternal:!0}}}return e}function tt(e){let{elements:t,...n}=e;return{elements:t.map(nt),...n}}function nt(e){return"resource"in e&&"baseColor"in e.resource&&Array.isArray(e.resource.baseColor)?{...e,resource:{...e.resource,baseColor:(t=e?.resource?.baseColor,`#${t.map((e=>e.toString(16))).map((e=>e.padStart(2,"0"))).join("")}`)}}:e;var t}function rt(e){let{elements:t,...n}=e;return{elements:t.map(at),...n}}function at(e){return"resource"in e?(delete e.resource.local,delete e.resource.isTrimming,delete e.resource.isTranscoding,delete e.resource.isMuting,e):e}function ot(e){let{elements:t,...n}=e;return{elements:t.map(it),...n}}function it(e){if("resource"in e&&"sizes"in e.resource&&e.resource.sizes){const n={};for(const[r,a]of Object.entries(e.resource.sizes))n[r]=(t=a,Object.entries(t).reduce(((e,t)=>{let[n,r]=t;return e[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.includes("_")||e.includes("-")?e.toLowerCase().replace(/([a-z])([_|-][a-z])/g,((e,t,n)=>t+n.toUpperCase().replace("_","").replace("-",""))):e}(n)]=r,e}),{}));return{...e,resource:{...e.resource,sizes:n}}}var t;return e}function st(e){const{backgroundAudio:t}=e;return void 0!==t?{...e,backgroundAudio:{resource:e.backgroundAudio,loop:!0,tracks:[]}}:e}function ut(e){let{elements:t,...n}=e;return{elements:t.map(lt),...n}}const ct={family:"Andada Pro",fallbacks:["serif"],weights:[400,500,600,700,800],styles:["regular","italic"],variants:[[0,400],[0,500],[0,600],[0,700],[0,800],[1,400],[1,500],[1,600],[1,700],[1,800]],service:"fonts.google.com",metrics:{upm:1e3,asc:942,des:-235,tAsc:942,tDes:-235,tLGap:0,wAsc:1100,wDes:390,xH:494,capH:705,yMin:-382,yMax:1068,hAsc:942,hDes:-235,lGap:0}};function lt(e){return"font"in e&&"Andada"===e.font?.family&&(e.font={...e.font,...ct}),e}function dt(e){let{elements:t,...n}=e;return{elements:t.map(pt),...n}}function pt(e){if("font"in e){const{id:t,name:n,value:r,...a}=e.font;e.font=a}return e}function mt(e){if("backgroundAudio"in e&&e.backgroundAudio&&"tracks"in e.backgroundAudio&&e.backgroundAudio.tracks){const t=e.backgroundAudio.tracks.map((e=>{const{trackName:t,...n}=e;return n}));return{...e,backgroundAudio:{...e.backgroundAudio,tracks:t}}}return e}function gt(e){let{elements:t,...n}=e;return{elements:t.map(ft),...n}}function ft(e){if("tagName"in e){const{tagName:t,...n}=e;return n}return e}function ht(e){let{elements:t,...n}=e;return{elements:t.map(yt),...n}}function yt(e){return"fontWeight"in e&&delete e.fontWeight,"backgroundOverlay"in e&&delete e.backgroundOverlay,e}function bt(e){let{elements:t,...n}=e;return{elements:t.map(kt),...n}}function kt(e){return"resource"in e||(delete e.focalX,delete e.focalY,delete e.scale),e}function vt(e){let{elements:t,animations:n,...r}=e;const a=t.map((e=>{let{id:t}=e;return t}));return{elements:xt(t.concat()),...n?{animations:n.filter((e=>function(e,t){return t.includes(e.targets[0])}(e,a)))}:{},...r}}function xt(e){const t=[];for(;e.length;){const n=e.shift();if(t.push(n),!n.groupId)continue;const{groupId:r}=n,a=e=>e.groupId===r;for(;e.some(a);){const n=e.findIndex(a);t.push(...e.splice(n,1))}}return t}const wt={1:[r],2:[c],3:[p],4:[f,b],5:[x],6:[_],7:[T],8:[N],9:[$],10:[W],11:[q],12:[V],13:[Y],14:[Q],15:[ne],16:[oe],17:[de],18:[me],19:[he],20:[we],21:[ze],22:[Te],23:[Ne],24:[Me],25:[function(e){let{pages:t,...n}=e;return{pages:t.map(Pe),...n}}],26:[function(e){let{pages:t,...n}=e;return{pages:t.map(Fe),...n}}],27:[function(e){let{pages:t,...n}=e;return{pages:t.map(Le),...n}}],28:[function(e){let{pages:t,...n}=e;return{pages:t.map(We),...n}}],29:[function(e){let{pages:t,...n}=e;return{pages:t.map(Ue),...n}}],30:[function(e){let{pages:t,...n}=e;return{pages:t.map(Ve),...n}}],31:[function(e){let{pages:t,...n}=e;return{pages:t.map(v0031_normalizeResourceSizes_reducePage),...n}}],32:[function(e){let{pages:t,...n}=e;return{pages:t.map(Xe),...n}}],33:[function(e){let{pages:t,...n}=e;return{pages:t.map(Ye),...n}}],34:[function(e){let{pages:t,...n}=e;return{pages:t.map(Ke),...n}}],35:[function(e){let{pages:t,...n}=e;return{pages:t.map(Ze),...n}}],36:[function(e){let{pages:t,...n}=e;return{pages:t.map(tt),...n}}],37:[function(e){let{pages:t,...n}=e;return{pages:t.map(rt),...n}}],38:[function(e){let{pages:t,...n}=e;return{pages:t.map(ot),...n}}],39:[function(e){const{pages:t,backgroundAudio:n,...r}=e;return{pages:t.map(st),...n?{backgroundAudio:{resource:n}}:null,...r}}],40:[function(e){let{pages:t,...n}=e;return{pages:t.map(ut),...n}}],41:[function(e){let{pages:t,...n}=e;return{pages:t.map(dt),...n}}],42:[function(e){const{pages:t,...n}=e;return{pages:t.map(mt),...n}}],43:[function(e){let{pages:t,...n}=e;return{pages:t.map(gt),...n}}],44:[function(e){let{pages:t,...n}=e;return{pages:t.map(ht),...n}}],45:[function(e){const{autoAdvance:t,defaultPageDuration:n,...r}=e;return t&&7===n?r:e}],46:[function(e){let{pages:t,...n}=e;return{pages:t.map(bt),...n}}],47:[function(e){let{pages:t,...n}=e;return{pages:t.map(vt),...n}}]},Dt=Math.max.apply(null,Object.keys(wt).map(Number));function zt(e,t){let n=e;for(let e=t;e<Dt;e++){const t=wt[e+1];if(t)for(let e=0;e<t.length;e++)Object.prototype.hasOwnProperty.call(t,e)&&(n=t[e](n))}return n}},83045:(e,t,n)=>{"use strict";n.d(t,{TEMPLATE_NAMES:()=>r});const r=["fresh-and-bright","food-and-stuff","doers-get-more-done","weekly-entertainment","fashion-on-the-go","no-days-off","experience-thailand","sleep","baking-bread-guide","sangria-artichoke","ways-to-eat-avocado","kitchen-stories","album-releases","almodos-films","pizzas-in-nyc","12-hours-in-barcelona","ultimate-comparison","fitness-apps-ranked","street-style-on-the-go","plant-based-dyes","indoor-garden-oasis","belly-fat-workout","tv-show-recap","pride-month-watchlist","honeymooning-in-italy","ace-hotel-kyoto-review","how-video-calls-saved-the-day","laptop-buying-guide","diy-home-office","kitchen-makeover","self-care-guide","rock-music-festival","celebrity-q-and-a","los-angeles-city-guide","hawaii-travel-packing-list","google-music-studio-tour","how-contact-tracing-works","summer-fashion-collection","buying-art-on-the-internet","house-hunting","new-york-party-round-up","a-day-in-the-life","elegant-travel-itinerary","modernist-travel-guide","simple-tech-tutorial","magazine-article","fashion-inspiration","skin-care-at-home","art-books-gift-guide","vintage-chairs-buying-guide","celebrity-life-story","series-best-of","summer-adventure-guide","one-day-city-itinerary","technology-advice","sustainability-tips","an-artists-legacy","tips-for-throwing-an-outdoor-luau","all-about-cars"]},96035:(e,t,n)=>{"use strict";n.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=n(36382),a=n(14848),o=n(83045);const __WEBPACK_DEFAULT_EXPORT__=async function(e){const t=(0,r.getTimeTracker)("load_templates"),i=await Promise.all(o.TEMPLATE_NAMES.map((t=>async function(e,t){const r=await n(86820)(`./${e}/index.ts`),o={...r.default,pages:(r.default.pages||[]).map((e=>({...e,elements:e.elements?.map((e=>("resource"in e&&e.resource&&("sizes"in e.resource&&e.resource.sizes&&(e.resource.sizes={}),e.resource.src&&(e.resource.src=e.resource.src.replace("__WEB_STORIES_TEMPLATE_BASE_URL__/",t)),"poster"in e.resource&&e.resource.poster&&(e.resource.poster=e.resource.poster.replace("__WEB_STORIES_TEMPLATE_BASE_URL__/",t))),e)))}))),postersByPage:r.default.pages.map(((e,n)=>{const a=`${t}images/templates/${r.default.slug}/posters/${n+1}`;return{webp:`${a}.webp`,png:`${a}.png`,type:r.default.pages[n].pageTemplateType}}))};return{...(0,a.migrate)(o,o.version),version:a.DATA_VERSION}}(t,e))));return t(),i}},46538:(e,t,n)=>{"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e.join("-");const n=new Map;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];const i=t(a);if(!n.has(i)){const t=e(...a);return n.set(i,t),t}return n.get(i)}}n.d(t,{default:()=>r})},86820:(e,t,n)=>{var r={"./12-hours-in-barcelona/index.ts":[2165,6500],"./a-day-in-the-life/index.ts":[12324,1858],"./ace-hotel-kyoto-review/index.ts":[87344,9607],"./album-releases/index.ts":[76351,7799],"./all-about-cars/index.ts":[96177,6406],"./almodos-films/index.ts":[11728,8],"./an-artists-legacy/index.ts":[63172,2454],"./art-books-gift-guide/index.ts":[96569,7346],"./baking-bread-guide/index.ts":[7898,2880],"./beauty-quiz/index.ts":[10659,3969],"./belly-fat-workout/index.ts":[52867,8344],"./buying-art-on-the-internet/index.ts":[58177,9700],"./celebrity-life-story/index.ts":[55693,1231],"./celebrity-q-and-a/index.ts":[48444,6428],"./diy-home-office/index.ts":[80392,5312],"./doers-get-more-done/index.ts":[41370,5535],"./elegant-travel-itinerary/index.ts":[80484,5040],"./experience-thailand/index.ts":[25283,9603],"./fashion-inspiration/index.ts":[32212,8551],"./fashion-on-the-go/index.ts":[82890,354],"./fitness-apps-ranked/index.ts":[73654,7131],"./food-and-stuff/index.ts":[52543,9811],"./fresh-and-bright/index.ts":[55025,8257],"./google-music-studio-tour/index.ts":[37027,7502],"./hawaii-travel-packing-list/index.ts":[70209,410],"./honeymooning-in-italy/index.ts":[36073,2338],"./house-hunting/index.ts":[3842,5432],"./how-contact-tracing-works/index.ts":[68303,6852],"./how-video-calls-saved-the-day/index.ts":[71274,3245],"./indoor-garden-oasis/index.ts":[40881,4142],"./kitchen-makeover/index.ts":[50279,5835],"./kitchen-stories/index.ts":[62230,5543],"./laptop-buying-guide/index.ts":[95192,1738],"./los-angeles-city-guide/index.ts":[59397,5157],"./magazine-article/index.ts":[33695,3777],"./modernist-travel-guide/index.ts":[36103,3710],"./new-york-party-round-up/index.ts":[7879,824],"./no-days-off/index.ts":[24146,1049],"./one-day-city-itinerary/index.ts":[24583,7399],"./pizzas-in-nyc/index.ts":[29579,3529],"./plant-based-dyes/index.ts":[72312,7586],"./pride-month-watchlist/index.ts":[39173,4386],"./rock-music-festival/index.ts":[37239,6188],"./sangria-artichoke/index.ts":[67355,1789],"./self-care-guide/index.ts":[93445,8203],"./series-best-of/index.ts":[18101,3441],"./simple-tech-tutorial/index.ts":[30683,2068],"./skin-care-at-home/index.ts":[79080,7343],"./sleep/index.ts":[13868,7441],"./sports-quiz/index.ts":[72834,3304],"./street-style-on-the-go/index.ts":[27036,9591],"./summer-adventure-guide/index.ts":[88204,6592],"./summer-fashion-collection/index.ts":[67459,6517],"./sustainability-tips/index.ts":[2954,9233],"./technology-advice/index.ts":[22117,5748],"./tips-for-throwing-an-outdoor-luau/index.ts":[35418,9288],"./tv-show-recap/index.ts":[34508,274],"./ultimate-comparison/index.ts":[62274,907],"./vintage-chairs-buying-guide/index.ts":[67697,6841],"./ways-to-eat-avocado/index.ts":[29450,7685],"./weekly-entertainment/index.ts":[73805,3772]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=86820,e.exports=a},51974:(e,t,n)=>{var r={"./12-hours-in-barcelona/metaData.ts":[54085,6204],"./a-day-in-the-life/metaData.ts":[95245,6353],"./ace-hotel-kyoto-review/metaData.ts":[91573,2374],"./album-releases/metaData.ts":[53653,7952],"./all-about-cars/metaData.ts":[76397,3864],"./almodos-films/metaData.ts":[92318,6305],"./an-artists-legacy/metaData.ts":[4970,5372],"./art-books-gift-guide/metaData.ts":[48107,9074],"./baking-bread-guide/metaData.ts":[33665,5397],"./beauty-quiz/metaData.ts":[87209,2776],"./belly-fat-workout/metaData.ts":[13084,1813],"./buying-art-on-the-internet/metaData.ts":[71563,8768],"./celebrity-life-story/metaData.ts":[67108,1847],"./celebrity-q-and-a/metaData.ts":[16984,9557],"./diy-home-office/metaData.ts":[29671,7528],"./doers-get-more-done/metaData.ts":[92486,3041],"./elegant-travel-itinerary/metaData.ts":[50706,6053],"./experience-thailand/metaData.ts":[78686,9302],"./fashion-inspiration/metaData.ts":[90762,884],"./fashion-on-the-go/metaData.ts":[41034,6766],"./fitness-apps-ranked/metaData.ts":[33715,5553],"./food-and-stuff/metaData.ts":[40338,5016],"./fresh-and-bright/metaData.ts":[70124,1970],"./google-music-studio-tour/metaData.ts":[5459,6311],"./hawaii-travel-packing-list/metaData.ts":[62636,4178],"./honeymooning-in-italy/metaData.ts":[61299,7314],"./house-hunting/metaData.ts":[21824,8022],"./how-contact-tracing-works/metaData.ts":[28743,827],"./how-video-calls-saved-the-day/metaData.ts":[89187,6641],"./indoor-garden-oasis/metaData.ts":[476,3194],"./kitchen-makeover/metaData.ts":[36584,1340],"./kitchen-stories/metaData.ts":[31284,2319],"./laptop-buying-guide/metaData.ts":[63207,2167],"./los-angeles-city-guide/metaData.ts":[27447,1380],"./magazine-article/metaData.ts":[49885,2894],"./modernist-travel-guide/metaData.ts":[22413,4874],"./new-york-party-round-up/metaData.ts":[38480,2830],"./no-days-off/metaData.ts":[45785,1403],"./one-day-city-itinerary/metaData.ts":[35115,4585],"./pizzas-in-nyc/metaData.ts":[32159,6271],"./plant-based-dyes/metaData.ts":[20613,4051],"./pride-month-watchlist/metaData.ts":[39984,8422],"./rock-music-festival/metaData.ts":[42965,533],"./sangria-artichoke/metaData.ts":[94463,3289],"./self-care-guide/metaData.ts":[29261,1066],"./series-best-of/metaData.ts":[99402,2246],"./simple-tech-tutorial/metaData.ts":[88317,9738],"./skin-care-at-home/metaData.ts":[77602,7863],"./sleep/metaData.ts":[37176,8856],"./sports-quiz/metaData.ts":[40727,2191],"./street-style-on-the-go/metaData.ts":[27688,7798],"./summer-adventure-guide/metaData.ts":[39386,2235],"./summer-fashion-collection/metaData.ts":[3176,5573],"./sustainability-tips/metaData.ts":[3849,2558],"./technology-advice/metaData.ts":[57103,5570],"./tips-for-throwing-an-outdoor-luau/metaData.ts":[89590,7588],"./tv-show-recap/metaData.ts":[55011,8189],"./ultimate-comparison/metaData.ts":[72459,9375],"./vintage-chairs-buying-guide/metaData.ts":[58682,6539],"./ways-to-eat-avocado/metaData.ts":[33728,9393],"./weekly-entertainment/metaData.ts":[15223,69]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=51974,e.exports=a}}]);