import{y as $,D as c,E as S,F as t,v as e,_ as oe,ab as P,Y as k,T as R,Q as d,P as Z,G as a,Z as se,z as ae,ac as ne,x as re,o as f,A as ue,B as i,H as h,J as V,L as r,I as M,M as I,K as N,O as b}from"./index-c900e51a.js";import{_ as ie}from"./EventInfo-8c991427.js";import{V as U}from"./VRow-ca5c1dc4.js";import{V as s}from"./VCol-d7b65e68.js";import{_ as O}from"./InfoAll-ef789c08.js";import{_ as ce}from"./EventSetList-047654fb.js";import{V as z}from"./VContainer-ed086487.js";import{V as de}from"./VMenu-e7f72d79.js";import{V as fe}from"./VList-bfd4aeb5.js";import{V as me,a as G}from"./VTabs-8ded3504.js";import{V as _e}from"./VDivider-39d1c077.js";import{V as pe,a as K}from"./VWindowItem-63b569b0.js";import{V as Ee}from"./VChip-edbe1a05.js";import"./BlankLine-1933b586.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./mitt-43e253ae.js";import"./VListItem-d03d4fd1.js";import"./ssrBoot-d49a2ba6.js";import"./VSlideGroup-64e7ced6.js";const ve={class:"me-2",style:{"font-size":"1.1rem"}},Ie={class:"",style:{"font-size":"1rem"}},D={__name:"EventHostCard",props:{item:{type:Object,default:()=>({EMAIL:"",ROLE:"",SCHOOL_NAME:"",SCHOOL_CITY:"",USER_NAME:"",NICK_NAME:"",CLUB_TH:"",CLUB_CATEGORY:"",IMAGE:"",TICKET_CART:[],SCORES:"",NOTIFY:[],KEEP_POST:[],KEEP_EVENT:[],FANS:[],FOLLOW:[],IS_STUDENT:"",IS_ABLE:"",IS_ADMIN:"",DESCRIBE:""})}},setup(_){const E=$(),v=_,l=()=>{v.item.USER_NAME?E.push(`/${v.item.USER_NAME}`):console.error("props.item.USER_NAME is not defined or empty")};return(u,L)=>(c(),S(se,{class:"rounded-lg",style:{"max-width":"400px"}},{default:t(()=>[e(oe,null,{default:t(()=>[e(U,{style:{"padding-top":"3px","padding-bottom":"3px"},class:"d-flex align-center"},{default:t(()=>[e(s,{cols:"3"},{default:t(()=>[e(P,{size:"80%",onClick:l,style:{cursor:"pointer"}},{default:t(()=>[e(k,{src:_.item.IMAGE},null,8,["src"])]),_:1})]),_:1}),e(s,{cols:"9",style:{}},{default:t(()=>[e(U,null,{default:t(()=>[e(s,{cols:"8",class:"d-flex align-center",onClick:l,style:{cursor:"pointer",color:"#25ECE0"}},{default:t(()=>[R("span",ve,d(_.item.NICK_NAME),1),R("span",Ie,"第"+d(_.item.CLUB_TH)+"屆",1)]),_:1}),e(s,{cols:"4",class:"d-flex align-center"},{default:t(()=>[e(Z,{color:"#1BBCA9",style:{height:"30px"}},{default:t(()=>[a("追蹤")]),_:1})]),_:1}),e(s,{cols:"10",style:{"padding-top":"0"}},{default:t(()=>[a(d(_.item.DESCRIBE),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Se={class:"me-5"},Te={class:"me-5"},Ge={__name:"EventIdHome",setup(_){const E=$(),v=ae(),l=ne("routeEvent"),u=re(),L=()=>{l.value.HOST.USER_NAME?E.push(`/${l.value.HOST.USER_NAME}`):console.error("goUserName is error")},j=f(()=>l.value.HOST._id===u._id||l.value.CO_ORGANIZER.some(m=>m._id===u._id)?!1:l.value.PRE_SALE-l.value.TICKET.length===0),F=f(()=>l.value.HOST._id===u._id||l.value.CO_ORGANIZER.some(m=>m._id===u._id)?"取票狀態":l.value.PRE_SALE-l.value.TICKET.length===0?"預售票掃空":"馬上取票"),{xs:Y}=ue(),T=f(()=>Y.value),W=f(()=>T.value?16/9:8/3),J=f(()=>T.value?3:2),Q=f(()=>T.value?"margin-bottom:5px;":"margin-bottom:15px;"),p=i("one"),X=f(()=>p.value==="one"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;"),q=f(()=>p.value==="two"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;"),y=i(!1),ee=i("已經取過票溜！"),w=i(!1),B=i("Sorry！榮譽積分不足～快參加活動賺積分(-`д´-)"),C=i(!1),te=i("ㄚ！晚了一步，預售票沒有啦～"),g=i(!1),H=i(""),x=()=>{y.value=!1,w.value=!1,g.value=!1,C.value=!1,E.push(`/event/${v.params.id}`)},le=async()=>{var m,n;if(l.value.HOST._id===u._id||l.value.CO_ORGANIZER.some(o=>o._id===u._id)){console.log("這邊要跳出 取票狀態表單");return}if(u.SCORES<l.value.SCORE_VALUES)w.value=!0;else if(l.value.PRE_SALE-l.value.TICKET.length===0)C.value=!0;else if(l.value.TICKET.some(o=>o.USER===u._id))y.value=!0;else try{E.push(`/event/${v.params.id}/ticket`)}catch(o){console.log(o);const A=((n=(m=o==null?void 0:o.response)==null?void 0:m.data)==null?void 0:n.message)||"發生錯誤，請稍後再試";H.value=A,g.value=!0}};return(m,n)=>(c(),h(V,null,[e(z,{style:{padding:"0","max-width":"800px"}},{default:t(()=>[e(s,{cols:"12",style:{padding:"0","padding-bottom":"12px"}},{default:t(()=>[e(k,{"aspect-ratio":W.value,cover:"",src:r(l).IMAGE,style:{display:""}},null,8,["aspect-ratio","src"])]),_:1}),e(z,null,{default:t(()=>[e(U,null,{default:t(()=>[e(s,{cols:"10",style:{}},{default:t(()=>[(c(!0),h(V,null,M(r(l).CATEGORY,(o,A)=>(c(),S(Ee,{key:A,class:"me-2 custom-chip",color:"#25ECE0",label:"",small:""},{default:t(()=>[a(d(o),1)]),_:2},1024))),128))]),_:1}),e(s,{cols:"2",class:"d-flex justify-end"},{default:t(()=>[e(I,{style:{color:"#999"},class:"me-5"},{default:t(()=>[a("mdi-bookmark-multiple-outline")]),_:1}),e(I,{style:{color:"#999"}},{default:t(()=>[a("mdi-cards-heart-outline")]),_:1}),T.value?N("",!0):(c(),h(V,{key:0},[e(I,{class:"ms-5",style:{cursor:"pointer"},id:"setting"},{default:t(()=>[a("mdi-menu")]),_:1}),e(de,{activator:"#setting",width:"150",style:{"text-align":"center"}},{default:t(()=>[e(fe,null,{default:t(()=>[e(ce)]),_:1})]),_:1})],64))]),_:1}),e(s,{cols:J.value,class:"d-flex justify-center",style:{"background-color":""}},{default:t(()=>[e(P,{size:"96%",onClick:L,style:{cursor:"pointer"}},{default:t(()=>[e(k,{src:r(l).HOST.IMAGE},null,8,["src"])]),_:1})]),_:1},8,["cols"]),e(s,{cols:"9",style:{"font-size":"1.5rem","font-weight":"900"},class:"d-flex align-center"},{default:t(()=>[a(d(r(l).TITLE),1)]),_:1}),e(s,{cols:"12",style:{color:"#999","padding-top":"0","padding-bottom":"0","font-size":"1rem"},class:"d-flex align-center justify-end"},{default:t(()=>[e(I,{style:{"font-size":"1.1rem"},class:"me-1"},{default:t(()=>[a("mdi-eye-outline ")]),_:1}),R("span",Se,d(r(l).REACH),1),e(I,{style:{"font-size":"1.1rem"},class:"me-1"},{default:t(()=>[a("mdi-cards-heart-outline")]),_:1}),R("span",Te,d(r(l).LIKES.length),1),e(Z,{color:"#1BBCA9",style:{"font-weight":"900"},onClick:le,disabled:j.value,class:"okBtn"},{default:t(()=>[a(d(F.value),1)]),_:1},8,["disabled"])]),_:1}),e(ie),e(s,{cols:"12"},{default:t(()=>[e(me,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=o=>p.value=o),"align-tabs":"start"},{default:t(()=>[e(G,{value:"one",class:"rounded-ts-xl me-2",style:b([{"min-width":"80px"},X.value])},{default:t(()=>[a("活動內容")]),_:1},8,["style"]),e(G,{value:"two",class:"rounded-ts-xl me-2",style:b([{"min-width":"80px"},q.value])},{default:t(()=>[a("直播/動態")]),_:1},8,["style"])]),_:1},8,["modelValue"]),e(_e,{color:"#fff",class:"border-opacity-50"})]),_:1}),e(pe,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=o=>p.value=o),style:{width:"100%"}},{default:t(()=>[e(K,{value:"one"},{default:t(()=>[e(s,{cols:"12",style:{color:"#25ECE0","font-size":"0.9rem","font-weight":"bold","padding-bottom":"0px"}},{default:t(()=>[a("活動介紹")]),_:1}),e(s,{cols:"12"},{default:t(()=>[a(d(r(l).DESCRIPTION),1)]),_:1}),e(s,{cols:"12",style:{color:"#25ECE0","font-size":"0.9rem","font-weight":"bold","padding-bottom":"0px"}},{default:t(()=>[a("主辦單位")]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(D,{item:r(l).HOST},null,8,["item"])]),_:1}),r(l).CO_ORGANIZER.length>0?(c(),S(s,{key:0,cols:"12"})):N("",!0),r(l).CO_ORGANIZER.length>0?(c(),S(s,{key:1,cols:"12",style:{color:"#25ECE0","font-size":"0.9rem","font-weight":"bold","padding-bottom":"0px"}},{default:t(()=>[a("協辦單位")]),_:1})):N("",!0),e(s,{cols:"12"},{default:t(()=>[(c(!0),h(V,null,M(r(l).CO_ORGANIZER,o=>(c(),S(D,{key:o._id,item:o},null,8,["item"]))),128))]),_:1})]),_:1}),e(K,{value:"two"})]),_:1},8,["modelValue"]),e(s,{style:b(Q.value)},null,8,["style"])]),_:1})]),_:1})]),_:1}),e(O,{InfoSwitch:w.value,InfoText:B.value,closeInfo:x,"onUpdate:InfoSwitch":n[2]||(n[2]=o=>B.value=o)},null,8,["InfoSwitch","InfoText"]),e(O,{InfoSwitch:y.value,InfoText:ee.value,closeInfo:x,"onUpdate:InfoSwitch":n[3]||(n[3]=o=>y.value=o)},null,8,["InfoSwitch","InfoText"]),e(O,{InfoSwitch:C.value,InfoText:te.value,closeInfo:x,"onUpdate:InfoSwitch":n[4]||(n[4]=o=>C.value=o)},null,8,["InfoSwitch","InfoText"]),e(O,{InfoSwitch:g.value,InfoText:H.value,closeInfo:x,"onUpdate:InfoSwitch":n[5]||(n[5]=o=>g.value=o)},null,8,["InfoSwitch","InfoText"])],64))}};export{Ge as default};
