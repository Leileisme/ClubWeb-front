import{y as O,z as V,x as A,ac as E,o as U,B as v,C as z,D as y,H as I,L as c,J as x,v as e,O as s,F as n,G as r,Z as R}from"./index-b2b635a8.js";import"./mitt-43e253ae.js";import{V as l}from"./VDivider-6035405a.js";import{V as u}from"./VListItem-eb960b4e.js";const H={__name:"EventSetList",props:{isMobile:{type:Boolean,default:!1,required:!1}},setup(h){const T=O(),p=V(),g=A(),{apiAuth:w}=R(),_=E("routeEvent"),B=h,L=()=>{T.push(`/event/${p.params.id}/ticketUsed`)},t=U(()=>B.isMobile?{dividerFirst:{marginTop:"30px",marginBottom:"15px"},divider:{marginTop:"15px",marginBottom:"15px"},dividerLast:{marginTop:"15px",marginBottom:"30px"},listItem:{fontSize:"1.2rem"}}:{dividerFirst:{marginTop:"0px",marginBottom:"0px"},divider:{marginTop:"0px",marginBottom:"0px"},dividerLast:{marginTop:"0px",marginBottom:"0px"},listItem:{fontSize:"1rem"}}),d=v(!1),S=v(""),m=v(!1),C=v("刪除成功！"),k=()=>{d.value=!1,m.value=!1},F=async()=>{var f,o;try{console.log(p.params.id),await w.delete(`/events/${p.params.id}`),T.push("/"),m.value=!0}catch(a){const i=((o=(f=a==null?void 0:a.response)==null?void 0:f.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";S.value=i,d.value=!0}};return(f,o)=>{const a=z("InfoAll");return y(),I(x,null,[c(_).HOST._id===c(g)._id||c(_).CO_ORGANIZER.some(i=>i._id===c(g)._id)?(y(),I(x,{key:0},[e(l,{style:s(t.value.dividerFirst)},null,8,["style"]),e(u,{style:s(t.value.listItem)},{default:n(()=>[r("編輯")]),_:1},8,["style"]),e(l,{style:s(t.value.divider)},null,8,["style"]),e(u,{style:s(t.value.listItem)},{default:n(()=>[r("分享")]),_:1},8,["style"]),e(l,{style:s(t.value.divider)},null,8,["style"]),e(u,{style:s(t.value.listItem),onClick:L},{default:n(()=>[r("登記票券")]),_:1},8,["style"]),e(l,{style:s(t.value.divider)},null,8,["style"]),e(u,{style:s(t.value.listItem),onClick:F},{default:n(()=>[r("刪除")]),_:1},8,["style"]),e(l,{style:s(t.value.dividerLast)},null,8,["style"])],64)):(y(),I(x,{key:1},[e(l,{style:s(t.value.dividerFirst)},null,8,["style"]),e(u,{style:s(t.value.listItem)},{default:n(()=>[r("檢舉")]),_:1},8,["style"]),e(l,{style:s(t.value.divider)},null,8,["style"]),e(u,{style:s(t.value.listItem)},{default:n(()=>[r("分享")]),_:1},8,["style"]),e(l,{style:s(t.value.dividerLast)},null,8,["style"])],64)),e(a,{InfoSwitch:d.value,InfoText:S.value,closeInfo:k,"onUpdate:InfoSwitch":o[0]||(o[0]=i=>d.value=i)},null,8,["InfoSwitch","InfoText"]),e(a,{InfoSwitch:m.value,InfoText:C.value,closeInfo:k,"onUpdate:InfoSwitch":o[1]||(o[1]=i=>m.value=i)},null,8,["InfoSwitch","InfoText"])],64)}}};export{H as _};
