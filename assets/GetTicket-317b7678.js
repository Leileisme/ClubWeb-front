import{p as R,a as B,f as xe,e as Z,g as me,h as U,q as Ie,ad as Se,o as d,r as W,t as _,s as z,v as a,ae as ee,ac as K,af as Te,ag as ae,ah as Ee,ai as ye,aj as H,ak as ge,j as te,al as _e,M as Ce,c as Ve,am as he,d as ke,an as Pe,l as be,n as we,a3 as Ae,y as Re,z as Be,x as Ue,A as ze,B as u,D as Ne,H as De,F as n,J as Oe,aa as Le,ab as $e,L as $,G as I,Q as w,a6 as M,a7 as A,Y as q,P as J,O as Q,Z as Ge}from"./index-b2b635a8.js";import{_ as Ke}from"./EventInfo-df9a2da6.js";import{_ as g}from"./InfoAll-b519c9df.js";import{T as X}from"./TicketUseState-e7a697a0.js";import{V as Y}from"./VContainer-2abc6ac8.js";import{V as G}from"./VRow-52b84734.js";import{V as r}from"./VCol-c740c829.js";import"./BlankLine-122a157e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDivider-6035405a.js";const C=Symbol.for("vuetify:v-expansion-panel"),je=["default","accordion","inset","popout"],Fe=R({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>je.includes(e)},readonly:Boolean,...B(),...xe(),...Z(),...me()},"VExpansionPanels"),He=U()({name:"VExpansionPanels",props:Fe(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:l}=v;Ie(e,C);const{themeClasses:t}=Se(e),o=d(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return W({VExpansionPanel:{color:_(e,"color"),readonly:_(e,"readonly"),static:_(e,"static")}}),z(()=>a(e.tag,{class:["v-expansion-panels",t.value,o.value,e.class],style:e.style},l)),{}}}),Me=R({...B(),...ee()},"VExpansionPanelText"),ne=U()({name:"VExpansionPanelText",props:Me(),setup(e,v){let{slots:l}=v;const t=K(C);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:m}=Te(e,t.isSelected);return z(()=>a(ye,{onAfterLeave:m},{default:()=>{var p;return[ae(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&o.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(p=l.default)==null?void 0:p.call(l)])]),[[Ee,t.isSelected.value]])]}})),{}}}),le=R({color:String,expandIcon:{type:H,default:"$expand"},collapseIcon:{type:H,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...B()},"VExpansionPanelTitle"),se=U()({name:"VExpansionPanelTitle",directives:{Ripple:ge},props:le(),setup(e,v){let{slots:l}=v;const t=K(C);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:m}=te(e,"color"),p=d(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return z(()=>{var S;return ae(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[m.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(S=l.default)==null?void 0:S.call(l,p.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[l.actions?l.actions(p.value):a(Ce,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[_e("ripple"),e.ripple]])}),{}}}),qe=R({title:String,text:String,bgColor:String,...B(),...Ve(),...he(),...ee(),...ke(),...Z(),...le()},"VExpansionPanel"),Je=U()({name:"VExpansionPanel",props:qe(),emits:{"group:selected":e=>!0},setup(e,v){let{slots:l}=v;const t=Pe(e,C),{backgroundColorClasses:o,backgroundColorStyles:m}=te(e,"bgColor"),{elevationClasses:p}=be(e),{roundedClasses:S}=we(e),E=d(()=>(t==null?void 0:t.disabled.value)||e.disabled),T=d(()=>t.group.items.value.reduce((f,i,x)=>(t.group.selected.value.includes(i.id)&&f.push(x),f),[])),N=d(()=>{const f=t.group.items.value.findIndex(i=>i.id===t.id);return!t.isSelected.value&&T.value.some(i=>i-f===1)}),D=d(()=>{const f=t.group.items.value.findIndex(i=>i.id===t.id);return!t.isSelected.value&&T.value.some(i=>i-f===-1)});return Ae(C,t),W({VExpansionPanelText:{eager:_(e,"eager")},VExpansionPanelTitle:{readonly:_(e,"readonly")}}),z(()=>{const f=!!(l.text||e.text),i=!!(l.title||e.title);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":N.value,"v-expansion-panel--after-active":D.value,"v-expansion-panel--disabled":E.value},S.value,o.value,e.class],style:[m.value,e.style]},{default:()=>{var x;return[a("div",{class:["v-expansion-panel__shadow",...p.value]},null),i&&a(se,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[l.title?l.title():e.title]}),f&&a(ne,{key:"text"},{default:()=>[l.text?l.text():e.text]}),(x=l.default)==null?void 0:x.call(l)]}})}),{}}}),Qe={class:"me-4",style:{"font-size":"1.5rem"}},oa={__name:"GetTicket",setup(e){const v=Re(),l=Be(),t=K("routeEvent"),o=Ue(),{apiAuth:m}=Ge(),{xs:p}=ze(),S=d(()=>p.value),E=u(0),T=u(!0),N=d(()=>S.value?3:2),D=d(()=>S.value?"margin-bottom:5px;":"margin-bottom:15px;"),f=d(()=>T.value?"mdi-plus":"mdi-minus"),i=()=>{T.value=!T.value,E.value=T.value?0:1},x=u(!1),oe=()=>{x.value=!x.value},ie=d(()=>x.value?"less":"more"),ce=d(()=>x.value?"color: #aaa;":" color:#FF3333;"),ue=d(()=>E.value===0),V=u(!1),de=u("已經取過票溜！"),O=u(!1),j=u("Sorry！榮譽積分不足～快參加活動賺積分(-`д´-)"),h=u(!1),re=u("ㄚ！晚了一步，預售票沒有啦～"),k=u(!1),F=u(""),P=u(!1),fe=u("取票成功！"),y=()=>{V.value=!1,O.value=!1,k.value=!1,h.value=!1,P.value=!1,v.push(`/event/${l.params.id}`)},ve=async()=>{var L,c;if(t.value.HOST._id===o._id){console.log("這邊要跳出 取票狀態表單");return}if(o.SCORES<t.value.SCORE_VALUES)O.value=!0;else if(t.value.PRE_SALE-t.value.TICKET.length===0)h.value=!0;else if(t.value.TICKET.some(s=>s.USER===o._id))V.value=!0;else try{const s=[{USER:o._id,USED:X.N_USE}],b=await m.patch(`/events/${l.params.id}`,{TICKET:s});console.log(b);const pe=b.data.ticketId;o.TICKET_CART.push({EVENT:l.params.id,TICKET:pe,USED:X.N_USE}),await m.patch("/users/edit",{USER_NAME:o.USER_NAME,TICKET_CART:o.TICKET_CART}),await o.getProfile(),P.value=!0}catch(s){console.log(s);const b=((c=(L=s==null?void 0:s.response)==null?void 0:L.data)==null?void 0:c.message)||"發生錯誤，請稍後再試";F.value=b,k.value=!0}};return(L,c)=>(Ne(),De(Oe,null,[a(Y,{style:{padding:"0","max-width":"800px"}},{default:n(()=>[a(Y,null,{default:n(()=>[a(G,null,{default:n(()=>[a(r,{cols:N.value,class:"d-flex justify-center",style:{"background-color":""}},{default:n(()=>[a(Le,{size:"96%"},{default:n(()=>[a($e,{src:$(t).HOST.IMAGE},null,8,["src"])]),_:1})]),_:1},8,["cols"]),a(r,{cols:"9",style:{"font-size":"1.5rem","font-weight":"900"},class:"d-flex align-center"},{default:n(()=>[I(w($(t).TITLE),1)]),_:1}),a(Ke),a(r,{cols:"12"},{default:n(()=>[a(M,{class:"rounded-lg"},{default:n(()=>[a(A,{style:{color:"#25ECE0","padding-bottom":"0"}},{default:n(()=>[I("購票須知")]),_:1}),a(A,null,{default:n(()=>[I("此票券只限本人使用，活動當天請攜帶本票券，供主辦單位掃描入場。若取票後無故未使用，會影響個人「名譽」。當日刷票後即會將活動紀錄於「個人檔案」，即可PO當日活動文。")]),_:1})]),_:1})]),_:1}),a(r,{cols:"12"},{default:n(()=>[a(M,{class:"rounded-lg"},{default:n(()=>[a(G,null,{default:n(()=>[a(r,{cols:"8",style:{"padding-bottom":"0"}},{default:n(()=>[a(A,{style:{color:"#25ECE0","padding-bottom":"0"}},{default:n(()=>[I("單人票")]),_:1}),a(A,{style:{"font-size":"1.6rem"}},{default:n(()=>[I("免費票")]),_:1})]),_:1}),a(r,{cols:"3",class:"d-flex align-center",style:{"padding-bottom":"0"}},{default:n(()=>[q("div",Qe,w(E.value),1),a(J,{density:"compact",size:"large",icon:f.value,color:"#25ECE0",onClick:i},null,8,["icon"])]),_:1}),a(r,{cols:"12",style:{"padding-top":"0"}},{default:n(()=>[a(He,null,{default:n(()=>[a(Je,{onClick:oe},{default:n(()=>[a(se,{"expand-icon":"mdi-menu-down"},{default:n(()=>[q("span",{style:Q([ce.value,{"font-weight":"bolder","font-size":"1.1rem"}])},w(ie.value),5)]),_:1}),a(ne,null,{default:n(()=>[a(G,{style:{"padding-top":"5px"}},{default:n(()=>[a(r,{cols:"12",style:{color:"#25ECE0","font-size":"0.9rem","font-weight":"bold","padding-bottom":"0px"}},{default:n(()=>[I("活動介紹")]),_:1}),a(r,{cols:"12"},{default:n(()=>[I(w($(t).DESCRIPTION),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(r,{cols:"12",class:"d-flex justify-end"},{default:n(()=>[a(J,{color:"#1BBCA9",class:"okBtn",style:{"font-weight":"900"},onClick:ve,disabled:ue.value},{default:n(()=>[I("確定取票")]),_:1},8,["disabled"])]),_:1}),a(r,{style:Q(D.value)},null,8,["style"])]),_:1})]),_:1})]),_:1}),a(g,{InfoSwitch:O.value,InfoText:j.value,closeInfo:y,"onUpdate:InfoSwitch":c[0]||(c[0]=s=>j.value=s)},null,8,["InfoSwitch","InfoText"]),a(g,{InfoSwitch:V.value,InfoText:de.value,closeInfo:y,"onUpdate:InfoSwitch":c[1]||(c[1]=s=>V.value=s)},null,8,["InfoSwitch","InfoText"]),a(g,{InfoSwitch:h.value,InfoText:re.value,closeInfo:y,"onUpdate:InfoSwitch":c[2]||(c[2]=s=>h.value=s)},null,8,["InfoSwitch","InfoText"]),a(g,{InfoSwitch:k.value,InfoText:F.value,closeInfo:y,"onUpdate:InfoSwitch":c[3]||(c[3]=s=>k.value=s)},null,8,["InfoSwitch","InfoText"]),a(g,{InfoSwitch:P.value,InfoText:fe.value,closeInfo:y,"onUpdate:InfoSwitch":c[4]||(c[4]=s=>P.value=s)},null,8,["InfoSwitch","InfoText"])],64))}};export{oa as default};
