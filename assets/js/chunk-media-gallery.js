"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[6736],{42607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});var a=n(67294),r=n(69845),i=n(90083),o=n(21530),l=n(12788),s=n(84967),c=n(36823),d=n(84705),u=n(55571),p=n(3961),m=n(46315),g=n(12161),h=n(59470),f=n(28395),y=n(80852),b=n(28154),E=n(4063),w=n(60641),_=n(36382),C=n(71028),x=n(6992),k=n(72165),v=n(60770),T=n(74515),I=n(69812),D=n(30540);const M=function DeleteDialog(e){let{mediaId:t,type:n,onClose:i}=e;const{actions:{deleteMedia:o}}=(0,v.useAPI)(),{showSnackbar:l}=(0,C.useSnackbar)(),{deleteMediaElement:s}=(0,T.useLocalMedia)((e=>{let{actions:{deleteMediaElement:t}}=e;return{deleteMediaElement:t}})),{deleteElementsByResourceId:d}=(0,I.useStory)((e=>({deleteElementsByResourceId:e.actions.deleteElementsByResourceId}))),u=(0,r.useCallback)((async()=>{i();try{await o(t),s({id:t}),d({id:t})}catch(e){(0,_.trackError)("local_media_deletion",e.message),l({message:(0,c.__)("Failed to delete media item.","web-stories"),dismissible:!0})}}),[o,s,d,t,i,l]),p=(0,c.__)("Delete Image?","web-stories"),m=(0,c.__)("Delete Video?","web-stories"),g=(0,c.__)("You are about to permanently delete this image from your site. The image will appear broken in any content that uses it.","web-stories"),h=(0,c.__)("You are about to permanently delete this video from your site. The video will appear broken in any content that uses it.","web-stories");return a.createElement(D.default,{isOpen:!0,onClose:i,title:"image"===n?p:m,secondaryText:(0,c.__)("Cancel","web-stories"),onPrimary:u,primaryText:(0,c.__)("Delete","web-stories"),maxWidth:512},a.createElement(x.Text.Paragraph,{size:k.TextSize.Small},"image"===n?g:h),a.createElement(x.Text.Paragraph,{size:k.TextSize.Small,isBold:!0},(0,c.__)("This action can not be undone.","web-stories")))};var S=n(36313),R=n(83057),P=n(10693),N=n(13070);const O=152,j=(0,l.css)(["display:flex;width:","px;margin-right:28px;"],O),B=l.default.img.withConfig({displayName:"mediaEditDialog__Image",componentId:"sc-ctku7j-0"})(["",""],j),A=l.default.video.withConfig({displayName:"mediaEditDialog__Video",componentId:"sc-ctku7j-1"})(["",""],j),L=l.default.div.withConfig({displayName:"mediaEditDialog__DialogBody",componentId:"sc-ctku7j-2"})(["display:flex;justify-content:left;align-items:flex-start;"]),z=l.default.div.withConfig({displayName:"mediaEditDialog__MetadataTextContainer",componentId:"sc-ctku7j-3"})(["display:flex;flex-direction:column;margin:0 4px;"]),$=(0,l.default)(x.Text.Span).withConfig({displayName:"mediaEditDialog__DateText",componentId:"sc-ctku7j-4"})(["margin-bottom:8px;"]),U=(0,l.default)(N.default).withConfig({displayName:"mediaEditDialog__AssistiveTextArea",componentId:"sc-ctku7j-5"})(["margin:20px 0 4px;"]),V=(0,c.__)("Edit Image","web-stories"),q=(0,c.__)("Edit Video","web-stories"),G=(0,c.__)("Assistive text","web-stories"),F=(0,c.__)("Video description","web-stories"),W=(0,c.__)("Describe the appearance and function of the image. Leave empty if the image is purely decorative.","web-stories"),K=(0,c.__)("For indexability and accessibility. Include any burned-in text inside the video.","web-stories");const X=function MediaEditDialog(e){let{resource:t,onClose:n}=e;const{id:i,src:o,creationDate:l,width:s,height:d,type:u,alt:p,poster:m,mimeType:g}=t,{actions:{updateMedia:h}}=(0,v.useAPI)(),{updateMediaElement:f}=(0,T.useLocalMedia)((e=>{let{actions:{updateMediaElement:t}}=e;return{updateMediaElement:t}})),{showSnackbar:y}=(0,C.useSnackbar)(),[b,E]=(0,r.useState)(p),w=(0,S.toDate)(l),I=(0,r.useCallback)((e=>{E(e.target.value)}),[]),M=(0,r.useCallback)((async()=>{try{await h(i,{altText:b}),f({id:i,data:{alt:b}}),n()}catch(e){(0,_.trackError)("local_media_edit",e.message),y({message:(0,c.__)("Failed to update, please try again.","web-stories"),dismissible:!0})}}),[b,i,n,y,h,f]),N="image"===u;return a.createElement(D.default,{isOpen:!0,onClose:n,title:N?V:q,secondaryText:(0,c.__)("Cancel","web-stories"),onPrimary:M,primaryText:(0,c.__)("Save","web-stories")},a.createElement(L,null,"image"===u?a.createElement(B,{src:(0,P.default)(O,t),alt:p,loading:"lazy",crossOrigin:"anonymous",decoding:"async"}):a.createElement(A,{key:o,crossOrigin:"anonymous",poster:m,preload:"metadata",muted:!0},a.createElement("source",{src:o,type:g})),a.createElement(z,null,(0,S.isValid)(w)&&a.createElement($,{size:k.TextSize.XSmall},(0,R.default)(/* translators: %s: upload date of media item. */
(0,c.__)("Uploaded: %s","web-stories"),(0,S.formatDate)(l))),a.createElement(x.Text.Span,{size:k.TextSize.Small},(0,R.default)(/* translators: 1: image width. 2: image height. */
(0,c.__)("%1$d x %2$d pixels","web-stories"),s,d)),a.createElement(U,{value:b,"aria-label":N?G:F,type:"text",placeholder:N?G:F,onChange:I}),a.createElement(x.Text.Paragraph,{size:k.TextSize.Small},N?W:K))))},H=(0,l.default)(E.ActionButton).withConfig({displayName:"dropDownMenu__MoreButton",componentId:"sc-1eq0xdj-0"})(["top:4px;right:4px;"]),Y=l.default.div.withConfig({displayName:"dropDownMenu__DropDownContainer",componentId:"sc-1eq0xdj-1"})(["margin-top:10px;"]),J=l.default.div.withConfig({displayName:"dropDownMenu__MenuContainer",componentId:"sc-1eq0xdj-2"})(["z-index:1;"]),Q=(0,l.css)(["min-width:160px;margin-top:0;li{display:block;}"]),Z={EDIT:"edit",DELETE:"delete"};const ee=function DropDownMenu(e){let{resource:t,display:n,isMenuOpen:i,onMenuOpen:o,onMenuCancelled:l,onMenuSelected:s,setParentActive:d=m.noop}=e;const u=[{options:[{label:(0,c.__)("Edit meta data","web-stories"),value:Z.EDIT},{label:(0,c.__)("Delete from library","web-stories"),value:Z.DELETE}]}],[E,_]=(0,r.useState)(!1),[C,x]=(0,r.useState)(!1),k=(0,r.useRef)(),v=(0,r.useCallback)((()=>{l(),k.current?.focus(),d()}),[l,d]),{canTranscodeResource:T}=(0,b.useLocalMedia)((e=>{let{state:{canTranscodeResource:t}}=e;return{canTranscodeResource:t}})),I=(0,r.useCallback)((()=>{_(!1),v()}),[_,v]),D=(0,r.useCallback)((()=>{x(!1),v()}),[x,v]),S=(0,r.useMemo)((()=>`list-${(0,p.default)()}`),[]),R=(0,r.useMemo)((()=>`button-${(0,p.default)()}`),[]);return T(t)&&a.createElement(J,null,k.current&&a.createElement(w.default,{target:k.current}),a.createElement(H,{ref:k,onClick:o,"aria-label":(0,c.__)("More","web-stories"),"aria-pressed":i,"aria-haspopup":!0,"aria-expanded":i,"aria-owns":i?S:null,id:R,$display:n,tabIndex:n||i?0:-1},a.createElement(g.default,null)),(n||i)&&a.createElement(h.default,{anchor:k,placement:f.Placement.BottomStart,isOpen:i},a.createElement(Y,null,a.createElement(y.default,{parentId:R,listId:S,handleMenuItemSelect:(e,t)=>{switch(s(),t){case Z.EDIT:x(!0);break;case Z.DELETE:_(!0)}},groups:u,onDismissMenu:v,hasMenuRole:!0,menuStylesOverride:Q}))),E&&a.createElement(M,{mediaId:t.id,type:t.type,onClose:I}),C&&a.createElement(X,{resource:t,onClose:D}))};var te=n(37257),ne=n(91960);const ae=(0,l.default)(x.Text.Span).withConfig({displayName:"attribution__StyledText",componentId:"sc-dg18hp-0"})(["color:",";"],(e=>{let{theme:t,active:n}=e;return(0,s.rgba)(t.colors.standard.white,n?1:.6)})),re=l.default.a.withConfig({displayName:"attribution__Link",componentId:"sc-dg18hp-1"})(["display:block;position:absolute;left:0;bottom:0;width:100%;padding:8px;background-color:",";text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-decoration:none;"],(e=>{let{theme:t,active:n}=e;return(0,s.rgba)(t.colors.bg.primary,n?.8:.6)})),ie=e=>{let{author:t,url:n}=e;const[i,o]=(0,r.useState)(!1),l=()=>o(!0),s=()=>o(!1);return a.createElement(re,{title:t,active:i,onPointerEnter:l,onFocus:l,onPointerLeave:s,onBlur:s,href:n,target:"_blank",rel:"noreferrer"},a.createElement(ae,{size:k.TextSize.XSmall},t))};var oe=n(5101),le=n(65742),se=n(39604),ce=n(37945),de=n(17989);function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ue.apply(this,arguments)}const pe=(0,l.css)(["width:100%;cursor:pointer;transition:0.2s transform,0.15s opacity;border-radius:4px;opacity:0;object-fit:cover;"]),me=l.default.img.withConfig({displayName:"innerElement__Image",componentId:"sc-qkk7ov-0"})(["",""],pe),ge=l.default.video.withConfig({displayName:"innerElement__Video",componentId:"sc-qkk7ov-1"})([""," ",""],pe,(e=>{let{showWithoutDelay:t}=e;return t?"opacity: 1;":""})),he=l.default.div.withConfig({displayName:"innerElement__DurationWrapper",componentId:"sc-qkk7ov-2"})(["position:absolute;bottom:8px;left:8px;background:",";border-radius:100px;height:18px;padding:0 6px;"],(e=>{let{theme:t}=e;return t.colors.opacity.black64})),fe=l.default.div.withConfig({displayName:"innerElement__MuteWrapper",componentId:"sc-qkk7ov-3"})(["position:absolute;bottom:8px;right:8px;height:24px;width:24px;background:",";color:",";border-radius:100px;"],(e=>{let{theme:t}=e;return t.colors.opacity.black64}),(e=>{let{theme:t}=e;return t.colors.fg.primary})),ye=(0,l.default)(x.Text.Span).attrs({size:k.TextSize.XSmall}).withConfig({displayName:"innerElement__Duration",componentId:"sc-qkk7ov-4"})(["color:",";display:block;"],(e=>{let{theme:t}=e;return t.colors.fg.primary})),be=l.default.img.withConfig({displayName:"innerElement__CloneImg",componentId:"sc-qkk7ov-5"})(["opacity:0;width:",";height:",";position:absolute;"],(e=>{let{width:t}=e;return`${t}px`}),(e=>{let{height:t}=e;return`${t}px`}));const Ee=(0,r.memo)((function InnerElement(e){let{type:t,src:n,resource:i,alt:o,width:l,height:s,onClick:c,onLoad:d=m.noop,showVideoDetail:u,mediaElement:p,active:g,isMuted:h}=e;const f=(0,r.useRef)(null),y=(0,r.useRef)(null),{handleDrag:b,handleDrop:E}=(0,ce.useDropTargets)((e=>{let{state:t,actions:n}=e;return{handleDrag:n.handleDrag,handleDrop:n.handleDrop,dropTargets:t.dropTargets,activeDropTargetId:t.activeDropTargetId}}),((e,t)=>{if(y.current)return!1;if(null===y.current)return y.current=!1,!1;if(e?.dropTargets&&t?.dropTargets){const n=Object.keys(e.dropTargets),a=Object.keys(t.dropTargets);if(n.join()!==a.join())return!1}return e?.activeDropTargetId===t?.activeDropTargetId})),{setDraggingResource:w}=(0,ce.useDropTargets)((e=>{let{actions:{setDraggingResource:t}}=e;return{setDraggingResource:t}}));let _;(0,r.useEffect)((()=>{i.poster&&(f.current=i.poster)}),[i.poster]);const{lengthFormatted:C,poster:x,mimeType:k}=i,v=x??f.current,I=v||(0,P.default)(l,i),D={width:l,height:s,alt:o,crossOrigin:"anonymous"},M={...D,onLoad:()=>{p.current&&(p.current.style.opacity=1),d()},loading:"lazy",decoding:"async",draggable:!1},S={...M,onLoad:void 0},R={...M,src:I},N={...D,title:o,alt:null,loop:t===T.ContentType.Gif,muted:!0,preload:"metadata",poster:v,showWithoutDelay:g};if(t===T.ContentType.Image||t===T.ContentType.Sticker?(_=a.createElement(me,ue({key:n},R,{ref:p})),S.src=I):[T.ContentType.Video,T.ContentType.Gif].includes(t)&&(_=a.createElement(a.Fragment,null,x&&!g?a.createElement(me,ue({key:n},R,{ref:p})):a.createElement(ge,ue({key:n},N,{ref:p}),t===T.ContentType.Gif?i.output.src&&a.createElement("source",{src:i.output.src,type:i.output.mimeType}):a.createElement("source",{src:(0,P.default)(l,i),type:k})),t===T.ContentType.Video&&u&&C&&a.createElement(he,null,a.createElement(ye,null,C)),t===T.ContentType.Video&&u&&h&&a.createElement(fe,null,a.createElement(le.default,null))),S.src=x),!_)throw new Error("Invalid media element type.");const O=t===T.ContentType.Image?I:x;return a.createElement(a.Fragment,null,_,g&&a.createElement(de.default,{showIcon:!1}),a.createElement(se.default,{active:g,handleDrag:e=>{y.current||(oe.default.set(i.id,{url:I,type:"cached"}),w(i),y.current=!0),b(i,e.clientX,e.clientY)},handleDragEnd:()=>{E(i),y.current=!1},type:i.type,elementProps:{resource:i},onClick:c(O),cloneElement:be,cloneProps:S}))}));var we=n(58979),_e=n(25941),Ce=n(88348),xe=n(37075),ke=n(8092),ve=n(51093);const Te=l.default.div.withConfig({displayName:"insertionMenu__DropDownContainer",componentId:"sc-xjd4tf-0"})(["margin-top:10px;min-width:160px;"]),Ie=l.default.div.withConfig({displayName:"insertionMenu__MenuContainer",componentId:"sc-xjd4tf-1"})(["z-index:1;"]),De=(0,l.css)(["min-width:160px;margin-top:0;li{display:block;}"]),Me=3,Se={INSERT:"insert",ADD_BACKGROUND:"addBackground"};const Re=function InsertionMenu(e){let{resource:t,display:n,onInsert:i,width:o,index:l,isLocal:s=!1,setParentActive:d=m.noop,setParentInactive:u=m.noop}=e;const g=(0,r.useRef)(),[b,w]=(0,r.useState)(!1),_=(0,r.useCallback)((e=>{e.stopPropagation(),w(!0)}),[]),C=(0,r.useCallback)((()=>{w(!1),g.current?.focus(),d()}),[d]),{currentBackgroundId:x,combineElements:k}=(0,xe.default)((e=>({currentBackgroundId:e.state.currentPage?.elements?.[0]?.id,combineElements:e.actions.combineElements}))),{type:v,poster:T}=t,I=[{options:[{label:["image","gif"].includes(v)?(0,c.__)("Insert image","web-stories"):(0,c.__)("Insert video","web-stories"),value:Se.INSERT},{label:(0,c.__)("Add as background","web-stories"),value:Se.ADD_BACKGROUND}]}];(0,ke.default)({ref:g},[],Me);const D=(0,ve.default)();(0,we.useKeyDownEffect)(s?null:g,"tab",D,[D]);const M=(0,r.useMemo)((()=>`list-${(0,p.default)()}`),[]),S=(0,r.useMemo)((()=>`button-${(0,p.default)()}`),[]);return a.createElement(Ie,null,a.createElement(E.ActionButton,{ref:g,onClick:_,"aria-label":(0,c.__)("Open insertion menu","web-stories"),"aria-pressed":b,"aria-haspopup":!0,"aria-expanded":b,"aria-owns":b?M:null,id:S,$display:n,tabIndex:0===l?0:-1},a.createElement(_e.default,null)),b&&a.createElement(h.default,{anchor:g,placement:f.Placement.BottomStart,isOpen:b},a.createElement(Te,null,a.createElement(y.default,{parentId:S,listId:M,handleMenuItemSelect:(e,n)=>{const a=T||(0,P.default)(o,t),r=(0,Ce.default)(t.type,{resource:t});switch(w(!1),n){case Se.INSERT:i(t,a);break;case Se.ADD_BACKGROUND:k({firstElement:r,secondId:x})}u()},groups:I,onDismissMenu:C,hasMenuRole:!0,menuStylesOverride:De}))))};function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Pe.apply(this,arguments)}const Ne=600,Oe=l.default.div.attrs((e=>({style:{width:e.width+"px",height:e.height+"px",margin:e.margin,backgroundColor:"transparent",color:"inherit",border:"none",padding:0}}))).withConfig({displayName:"mediaElement__Container",componentId:"sc-n7038j-0"})([""]),je=l.default.div.withConfig({displayName:"mediaElement__InnerContainer",componentId:"sc-n7038j-1"})(["position:relative;display:flex;margin-bottom:10px;background-color:",";"],(e=>{let{theme:t,$baseColor:n}=e;return n||(0,s.rgba)(t.colors.standard.black,.3)})),Be=(0,l.default)(u.Blurhash).withConfig({displayName:"mediaElement__BlurhashContainer",componentId:"sc-n7038j-2"})(["position:absolute !important;top:0;left:0;"]);function Element(e){let{index:t,resource:n,width:i,height:o,margin:l,onInsert:s,providerType:u,canEditMedia:p}=e;const{id:m,src:g,type:h,width:f,height:y,alt:b,isMuted:E,baseColor:w,blurHash:_}=n,{isCurrentResourceProcessing:C,isCurrentResourceUploading:x}=(0,T.useLocalMedia)((e=>{let{state:t}=e;return{isCurrentResourceProcessing:t.isCurrentResourceProcessing,isCurrentResourceUploading:t.isCurrentResourceUploading}})),k=f&&y?f/y:1,v=i||o/k,I=o||v/k,D=(0,r.useRef)(),[M,S]=(0,r.useState)(!0),[R,P]=(0,r.useState)(!1),[N,O]=(0,r.useState)(!1),[j,B]=(0,r.useState)(!1),A=(0,r.useCallback)((()=>P(!0)),[]),L=(0,r.useCallback)((()=>P(!1)),[]),z=(0,r.useCallback)((()=>O(!0)),[]),$=(0,r.useCallback)((()=>O(!1)),[]),U=(0,r.useCallback)((()=>{O(!1),P(!1)}),[]),[V,q]=(0,r.useState)(null),G=(0,r.useRef)(R);G.current=R,(0,r.useEffect)((()=>{if(![T.ContentType.Video,T.ContentType.Gif].includes(h))return;const e=()=>{null!==V&&(clearTimeout(V),q(null))};if(!N)if(R){if(S(!1),D.current&&null===V){const e=setTimeout((()=>{G.current&&g&&D.current.play().catch(ne.noop)}),Ne);q(e)}}else S(!0),e(),D.current&&D.current?.pause&&g&&(D.current.pause(),D.current.currentTime=0);return e}),[N,R,h,g,V,q,G]);const F=(0,r.useCallback)((e=>()=>{s(n,e)}),[s,n]),W=R&&n.attribution?.author?.displayName&&n.attribution?.author?.url&&a.createElement(ie,{author:n.attribution.author.displayName,url:n.attribution.author.url}),K=(0,r.useRef)(),X=(0,r.useCallback)((()=>B(!0)),[]),H=!j&&!R;return a.createElement(Oe,{ref:K,"data-testid":`mediaElement-${h}`,"data-id":m,className:"mediaElement",width:v,height:I,margin:l,onPointerEnter:A,onFocus:A,onPointerLeave:L,onBlur:L,tabIndex:"-1"},a.createElement(je,{$baseColor:H&&w},a.createElement(Ee,{type:h,src:g,mediaElement:D,resource:n,alt:b,isMuted:E,width:v,height:I,onClick:F,onLoad:X,showVideoDetail:M,active:R}),W,H&&_&&a.createElement(Be,{hash:_,width:v,height:I,punch:1}),(!g||C(m)||x(m))&&a.createElement(d.LoadingBar,{loadingMessage:(0,c.__)("Uploading media…","web-stories")}),a.createElement(Re,{resource:n,display:R,onInsert:s,width:v,index:t,isLocal:"local"===u,setParentActive:A,setParentInactive:L}),"local"===u&&p&&a.createElement(ee,{resource:n,display:R,isMenuOpen:N,onMenuOpen:z,onMenuCancelled:$,onMenuSelected:U,setParentActive:A})))}const Ae=(0,r.memo)((function MediaElement(e){let{providerType:t="local",canEditMedia:n=!1,...r}=e;const{isCurrentResourceProcessing:i,isCurrentResourceUploading:o}=(0,T.useLocalMedia)((e=>{let{state:t}=e;return{isCurrentResourceProcessing:t.isCurrentResourceProcessing,isCurrentResourceUploading:t.isCurrentResourceUploading}})),{id:l}=r.resource;return i(l)||o(l)?a.createElement(te.default,{title:(0,c.__)("Uploading media…","web-stories")},a.createElement(Element,Pe({},r,{providerType:t,canEditMedia:n}))):a.createElement(Element,Pe({},r,{providerType:t,canEditMedia:n}))}));var Le=n(81024);const ze=8,$e=110,Ue={maxPhotos:2},ContainerRenderer=e=>{let{children:t,containerRef:n}=e;return a.createElement(Le.GalleryContainer,{ref:n},t)},RowRenderer=e=>{let{children:t}=e;return t};const Ve=function MediaGallery(e){let{resources:t,uploadingResources:n=[],onInsert:l,providerType:s,canEditMedia:c=!1}=e;const d=[...n.map((e=>({key:`uploading-${e.id}`,src:e.src,width:e.width,height:e.height,resource:e}))),...t.map((e=>({key:e.id,src:e.src,width:e.width,height:e.height,resource:e})))].map(((e,t)=>({...e,index:t}))),u=(0,r.useCallback)((e=>{let{photo:t,layout:n}=e;return a.createElement(Ae,{key:t.key,index:t.index,margin:`0px 0px ${ze}px 0px`,resource:t.resource,width:n.width,height:n.height,onInsert:l,providerType:s,canEditMedia:c})}),[s,l,c]);return a.createElement("div",null,a.createElement(i.default,{layout:"rows",photos:d,renderPhoto:u,renderRowContainer:RowRenderer,renderContainer:ContainerRenderer,targetRowHeight:$e,rowConstraints:Ue,spacing:ze,defaultContainerWidth:o.SIDEBAR_WIDTH}))}}}]);