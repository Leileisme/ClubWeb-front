import{p as k,a as h,f as ne,e as U,g as le,h as T,q as se,af as oe,o,r as K,t as E,s as I,v as a,ag as M,ae as L,ah as ie,ai as q,aj as ce,ak as de,al as $,am as ue,j as H,an as re,M as pe,c as ve,ao as xe,d as fe,ap as me,l as _e,n as ye,a3 as ge,y as Ee,z as be,x as Ve,R as Pe,A as Ce,B as g,D as Se,E as ke,F as n,a6 as he,a7 as Te,L as z,G as v,Q as C,a8 as O,aa as S,Y as j,P as G,O as F,Z as Ie}from"./index-2c84da56.js";import{_ as we}from"./EventInfo-6cb905e3.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";import{V as N}from"./VContainer-890da109.js";import{V as D,a as c}from"./VRow-f6d3c515.js";import"./BlankLine-f4bb729f.js";import"./VDivider-44f7bf0d.js";const b=Symbol.for("vuetify:v-expansion-panel"),Ae=["default","accordion","inset","popout"],Re=k({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>Ae.includes(e)},readonly:Boolean,...h(),...ne(),...U(),...le()},"VExpansionPanels"),ze=T()({name:"VExpansionPanels",props:Re(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:l}=r;se(e,b);const{themeClasses:t}=oe(e),d=o(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return K({VExpansionPanel:{color:E(e,"color"),readonly:E(e,"readonly"),static:E(e,"static")}}),I(()=>a(e.tag,{class:["v-expansion-panels",t.value,d.value,e.class],style:e.style},l)),{}}}),De=k({...h(),...M()},"VExpansionPanelText"),Q=T()({name:"VExpansionPanelText",props:De(),setup(e,r){let{slots:l}=r;const t=L(b);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:p}=ie(e,t.isSelected);return I(()=>a(de,{onAfterLeave:p},{default:()=>{var i;return[q(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&d.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(i=l.default)==null?void 0:i.call(l)])]),[[ce,t.isSelected.value]])]}})),{}}}),X=k({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...h()},"VExpansionPanelTitle"),Y=T()({name:"VExpansionPanelTitle",directives:{Ripple:ue},props:X(),setup(e,r){let{slots:l}=r;const t=L(b);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:d,backgroundColorStyles:p}=H(e,"color"),i=o(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return I(()=>{var f;return q(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},d.value,e.class],style:[p.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(f=l.default)==null?void 0:f.call(l,i.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[l.actions?l.actions(i.value):a(pe,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[re("ripple"),e.ripple]])}),{}}}),Le=k({title:String,text:String,bgColor:String,...h(),...ve(),...xe(),...M(),...fe(),...U(),...X()},"VExpansionPanel"),$e=T()({name:"VExpansionPanel",props:Le(),emits:{"group:selected":e=>!0},setup(e,r){let{slots:l}=r;const t=me(e,b),{backgroundColorClasses:d,backgroundColorStyles:p}=H(e,"bgColor"),{elevationClasses:i}=_e(e),{roundedClasses:f}=ye(e),V=o(()=>(t==null?void 0:t.disabled.value)||e.disabled),m=o(()=>t.group.items.value.reduce((u,s,y)=>(t.group.selected.value.includes(s.id)&&u.push(y),u),[])),_=o(()=>{const u=t.group.items.value.findIndex(s=>s.id===t.id);return!t.isSelected.value&&m.value.some(s=>s-u===1)}),w=o(()=>{const u=t.group.items.value.findIndex(s=>s.id===t.id);return!t.isSelected.value&&m.value.some(s=>s-u===-1)});return ge(b,t),K({VExpansionPanelText:{eager:E(e,"eager")},VExpansionPanelTitle:{readonly:E(e,"readonly")}}),I(()=>{const u=!!(l.text||e.text),s=!!(l.title||e.title);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":_.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":V.value},f.value,d.value,e.class],style:[p.value,e.style]},{default:()=>{var y;return[a("div",{class:["v-expansion-panel__shadow",...i.value]},null),s&&a(Y,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[l.title?l.title():e.title]}),u&&a(Q,{key:"text"},{default:()=>[l.text?l.text():e.text]}),(y=l.default)==null?void 0:y.call(l)]}})}),{}}});const Oe={class:"me-4",style:{"font-size":"1.5rem"}},je={__name:"TicketView",setup(e){const r=Ee(),l=be(),t=L("routeEvent"),d=Ve(),{apiAuth:p}=Ie(),i=Pe(),{xs:f}=Ce(),V=o(()=>f.value),m=g(0),_=g(!0),w=o(()=>V.value?3:2),u=o(()=>V.value?"margin-bottom:5px;":"margin-bottom:15px;"),s=o(()=>_.value?"mdi-plus":"mdi-minus"),y=()=>{_.value=!_.value,m.value=_.value?0:1},P=g(!1),Z=()=>{P.value=!P.value},J=o(()=>P.value?"less":"more"),W=o(()=>P.value?"color: #aaa;":" color:#FF3333;"),ee=o(()=>m.value===0);g(!1);const ae=g(!1);console.log(t);const te=async()=>{var B,A;if(d.SCORES<t.SCORE_VALUES)ae.value=!0;else try{const x=await p.get(`/events/${l.params.id}`);if(x.data.result.PRE_SALE-x.data.result.TICKET.length===0){i({text:"票券已售完",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}});return}const R=[{USER:d._id,USED:!1}];await p.patch(`/events/${l.params.id}`,{TICKET:R}),i({text:"取票成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),r.push(`/event/${l.params.id}`)}catch(x){console.log(x);const R=((A=(B=x==null?void 0:x.response)==null?void 0:B.data)==null?void 0:A.message)||"發生錯誤，請稍後再試";i({text:R,showCloseButton:!1,snackbarProps:{timeout:2e3,console:"red",location:"bottom"}})}};return(B,A)=>(Se(),ke(N,{style:{padding:"0","max-width":"800px"}},{default:n(()=>[a(N,null,{default:n(()=>[a(D,null,{default:n(()=>[a(c,{cols:w.value,class:"d-flex justify-center",style:{"background-color":""}},{default:n(()=>[a(he,{size:"96%"},{default:n(()=>[a(Te,{src:z(t).HOST.IMAGE},null,8,["src"])]),_:1})]),_:1},8,["cols"]),a(c,{cols:"9",style:{"font-size":"1.5rem","font-weight":"900"},class:"d-flex align-center"},{default:n(()=>[v(C(z(t).TITLE),1)]),_:1}),a(we),a(c,{cols:"12"},{default:n(()=>[a(O,{class:"rounded-lg"},{default:n(()=>[a(S,{style:{color:"#25ECE0","padding-bottom":"0"}},{default:n(()=>[v("購票須知")]),_:1}),a(S,null,{default:n(()=>[v("此票券只限本人使用，活動當天請攜帶本票券，供主辦單位掃描入場。若取票後無故未使用，會影響個人「名譽」。當日刷票後即會將活動紀錄於「個人檔案」，即可PO當日活動文。")]),_:1})]),_:1})]),_:1}),a(c,{cols:"12"},{default:n(()=>[a(O,{class:"rounded-lg"},{default:n(()=>[a(D,null,{default:n(()=>[a(c,{cols:"8",style:{"padding-bottom":"0"}},{default:n(()=>[a(S,{style:{color:"#25ECE0","padding-bottom":"0"}},{default:n(()=>[v("單人票")]),_:1}),a(S,{style:{"font-size":"1.6rem"}},{default:n(()=>[v("免費票")]),_:1})]),_:1}),a(c,{cols:"3",class:"d-flex align-center",style:{"padding-bottom":"0"}},{default:n(()=>[j("div",Oe,C(m.value),1),a(G,{density:"compact",size:"large",icon:s.value,color:"#25ECE0",onClick:y},null,8,["icon"])]),_:1}),a(c,{cols:"12",style:{"padding-top":"0"}},{default:n(()=>[a(ze,null,{default:n(()=>[a($e,{onClick:Z},{default:n(()=>[a(Y,{"expand-icon":"mdi-menu-down"},{default:n(()=>[j("span",{style:F([W.value,{"font-weight":"bolder","font-size":"1.1rem"}])},C(J.value),5)]),_:1}),a(Q,null,{default:n(()=>[a(D,{style:{"padding-top":"5px"}},{default:n(()=>[a(c,{cols:"12",style:{color:"#25ECE0","font-size":"0.9rem","font-weight":"bold","padding-bottom":"0px"}},{default:n(()=>[v("活動介紹")]),_:1}),a(c,{cols:"12"},{default:n(()=>[v(C(z(t).DESCRIPTION),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(c,{cols:"12",class:"d-flex justify-end"},{default:n(()=>[a(G,{color:"#1BBCA9",class:"okBtn",style:{"font-weight":"900"},onClick:te,disabled:ee.value},{default:n(()=>[v("確定取票")]),_:1},8,["disabled"])]),_:1}),a(c,{style:F(u.value)},null,8,["style"])]),_:1})]),_:1})]),_:1}))}},He=Be(je,[["__scopeId","data-v-9e98dc2d"]]);export{He as default};
