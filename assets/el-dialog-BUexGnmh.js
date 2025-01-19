import{G as Q,aQ as ae,J as N,aq as se,K as j,bw as te,c as k,bx as ne,o as D,b as K,d as O,a4 as w,Q as b,f as e,t as re,e as M,w as p,n as _,aO as ie,Z as de,s as q,R as Y,S as W,by as ue,bz as ce,H as G,a6 as X,aE as fe,bA as ve,aY as J,r as E,bB as ye,bC as be,bv as pe,bD as ge,m as Z,bE as me,N as Ce,X as he,T as we,bF as H,b6 as Ee,aa as ke,aW as De,M as Ie,a3 as Be,bG as Te,ad as Ae,bH as Fe,bI as Se,bJ as Pe,ax as $e,ae as Le,bK as Re,bL as Oe,af as Me}from"./index-B2sUpHKW.js";const x=Symbol("dialogInjectionKey"),ee=Q({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=N({name:"ElDialogContent"}),Ve=N({...ze,props:ee,emits:Ne,setup(o,{expose:d}){const t=o,{t:S}=se(),{Close:n}=ue,{dialogRef:f,headerRef:g,bodyId:m,ns:a,style:r}=j(x),{focusTrapRef:v}=j(te),y=k(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center}]),C=ce(v,f),u=k(()=>t.draggable),c=k(()=>t.overflow),{resetPosition:I}=ne(f,g,u,c);return d({resetPosition:I}),(s,P)=>(D(),K("div",{ref:e(C),class:b(e(y)),style:Y(e(r)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:g,class:b([e(a).e("header"),{"show-close":s.showClose}])},[w(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:b(e(a).e("title"))},re(s.title),11,["aria-level"])]),s.showClose?(D(),K("button",{key:0,"aria-label":e(S)("el.dialog.close"),class:b(e(a).e("headerbtn")),type:"button",onClick:B=>s.$emit("close")},[M(e(de),{class:b(e(a).e("close"))},{default:p(()=>[(D(),_(ie(s.closeIcon||e(n))))]),_:1},8,["class"])],10,["aria-label","onClick"])):q("v-if",!0)],2),O("div",{id:e(m),class:b(e(a).e("body"))},[w(s.$slots,"default")],10,["id"]),s.$slots.footer?(D(),K("footer",{key:0,class:b(e(a).e("footer"))},[w(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var Ke=W(Ve,[["__file","dialog-content.vue"]]);const _e=Q({...ee,appendToBody:Boolean,appendTo:{type:G([String,Object]),default:"body"},beforeClose:{type:G(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ue=(o,d)=>{var t;const n=we().emit,{nextZIndex:f}=ve();let g="";const m=J(),a=J(),r=E(!1),v=E(!1),y=E(!1),C=E((t=o.zIndex)!=null?t:f());let u,c;const I=ye("namespace",be),s=k(()=>{const i={},h=`--${I.value}-dialog`;return o.fullscreen||(o.top&&(i[`${h}-margin-top`]=o.top),o.width&&(i[`${h}-width`]=pe(o.width))),i}),P=k(()=>o.alignCenter?{display:"flex"}:{});function B(){n("opened")}function z(){n("closed"),n(X,!1),o.destroyOnClose&&(y.value=!1)}function V(){n("close")}function $(){c==null||c(),u==null||u(),o.openDelay&&o.openDelay>0?{stop:u}=H(()=>L(),o.openDelay):L()}function T(){u==null||u(),c==null||c(),o.closeDelay&&o.closeDelay>0?{stop:c}=H(()=>R(),o.closeDelay):R()}function A(){function i(h){h||(v.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(i):T()}function F(){o.closeOnClickModal&&A()}function L(){Ee&&(r.value=!0)}function R(){r.value=!1}function l(){n("openAutoFocus")}function U(){n("closeAutoFocus")}function oe(i){var h;((h=i.detail)==null?void 0:h.focusReason)==="pointer"&&i.preventDefault()}o.lockScroll&&ge(r);function le(){o.closeOnPressEscape&&A()}return Z(()=>o.modelValue,i=>{i?(v.value=!1,$(),y.value=!0,C.value=me(o.zIndex)?f():C.value++,Ce(()=>{n("open"),d.value&&(d.value.scrollTop=0)})):r.value&&T()}),Z(()=>o.fullscreen,i=>{d.value&&(i?(g=d.value.style.transform,d.value.style.transform=""):d.value.style.transform=g)}),he(()=>{o.modelValue&&(r.value=!0,y.value=!0,$())}),{afterEnter:B,afterLeave:z,beforeLeave:V,handleClose:A,onModalClick:F,close:T,doClose:R,onOpenAutoFocus:l,onCloseAutoFocus:U,onCloseRequested:le,onFocusoutPrevented:oe,titleId:m,bodyId:a,closed:v,style:s,overlayDialogStyle:P,rendered:y,visible:r,zIndex:C}},je=N({name:"ElDialog",inheritAttrs:!1}),Ge=N({...je,props:_e,emits:qe,setup(o,{expose:d}){const t=o,S=ke();De({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!S.title));const n=Ie("dialog"),f=E(),g=E(),m=E(),{visible:a,titleId:r,bodyId:v,style:y,overlayDialogStyle:C,rendered:u,zIndex:c,afterEnter:I,afterLeave:s,beforeLeave:P,handleClose:B,onModalClick:z,onOpenAutoFocus:V,onCloseAutoFocus:$,onCloseRequested:T,onFocusoutPrevented:A}=Ue(t,f);Be(x,{dialogRef:f,headerRef:g,bodyId:v,ns:n,rendered:u,style:y});const F=Oe(z),L=k(()=>t.draggable&&!t.fullscreen);return d({visible:a,dialogContentRef:m,resetPosition:()=>{var l;(l=m.value)==null||l.resetPosition()}}),(l,U)=>(D(),_(e(Re),{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},{default:p(()=>[M(Te,{name:"dialog-fade",onAfterEnter:e(I),onAfterLeave:e(s),onBeforeLeave:e(P),persisted:""},{default:p(()=>[Ae(M(e(Fe),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(c)},{default:p(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(v),class:b(`${e(n).namespace.value}-overlay-dialog`),style:Y(e(C)),onClick:e(F).onClick,onMousedown:e(F).onMousedown,onMouseup:e(F).onMouseup},[M(e(Se),{loop:"",trapped:e(a),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e($),onFocusoutPrevented:e(A),onReleaseRequested:e(T)},{default:p(()=>[e(u)?(D(),_(Ke,Pe({key:0,ref_key:"dialogContentRef",ref:m},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(L),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(B)}),$e({header:p(()=>[l.$slots.title?w(l.$slots,"title",{key:1}):w(l.$slots,"header",{key:0,close:e(B),titleId:e(r),titleClass:e(n).e("title")})]),default:p(()=>[w(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:p(()=>[w(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Le,e(a)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Je=W(Ge,[["__file","dialog.vue"]]);const He=Me(Je);export{He as E};
