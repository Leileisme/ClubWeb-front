import{A as K,o as c,D as n,E as f,F as t,v as e,G as o,Q as C,K as x,y as $,x as j,B as b,a9 as J,aa as Q,ab as q,Y as F,M as R,O as z,a6 as Z,z as ee,H as g,J as _,L as i,I as U}from"./index-b2b635a8.js";import{_ as te}from"./TicketAppBar-5e0d667f.js";import{_ as ae}from"./InfoAll-b519c9df.js";import{V as p}from"./VRow-52b84734.js";import{V as l}from"./VCol-c740c829.js";import{T as E}from"./TicketUseState-e7a697a0.js";import{V as M}from"./VDivider-6035405a.js";import{V as v}from"./VContainer-2abc6ac8.js";import{V as le,a as B}from"./VTabs-c7362d00.js";import{V as se,a as L}from"./VWindowItem-029391ca.js";import"./VAppBarTitle-24bb658d.js";import"./ssrBoot-cf84261e.js";const O={__name:"TicketDate",props:{item:{type:Object},isStart:{type:Boolean},isEnd:{type:Boolean}},setup(s){const{xs:d,sm:V}=K(),T=c(()=>d.value),m=c(()=>V.value),u=I=>{const r=I.split(" "),a=r[0].split("/"),w=r[1].split(" "),h=r[2].split(" "),D=a[0],y=a[1].padStart(2,"0")+"."+a[2].padStart(2,"0"),k=w[0].slice(0,2)+":"+w[0].slice(2),P=h[0].slice(0,2)+":"+h[0].slice(2),W=A=>A.replace(/\//g,"-"),G=A=>{const Y=new Date(A);return["日","一","二","三","四","五","六"][Y.getDay()]},H=W(r[0]),X=G(H);return{year:D,monthDay:y,week:X,startTime:k,endTime:P}},S=c(()=>T.value?5:m.value?4:3);return(I,r)=>(n(),f(l,{cols:S.value,style:{}},{default:t(()=>[e(p,{style:{"background-color":""}},{default:t(()=>[e(l,{cols:"12",style:{padding:"0","padding-left":"12px","font-size":"0.8rem",color:"#aaa"}},{default:t(()=>[o(C(u(s.item.EVENT.DATE).year),1)]),_:1}),e(l,{cols:"8",style:{"background-color":"","font-size":"1.55rem","padding-right":"0","padding-top":"0px"}},{default:t(()=>[o(C(u(s.item.EVENT.DATE).monthDay),1)]),_:1}),e(l,{cols:"4",class:"d-flex align-center",style:{"padding-top":"0px","padding-bottom":"0"}},{default:t(()=>[e(p,{style:{color:"#aaa","margin-top":"-20px"}},{default:t(()=>[s.isStart?(n(),f(l,{key:0,cols:"12",style:{padding:"0","font-size":"0.7rem"}},{default:t(()=>[o(C(u(s.item.EVENT.DATE).week),1)]),_:1})):x("",!0),s.isEnd?(n(),f(l,{key:1,cols:"12",style:{padding:"0","font-size":"0.85rem","margin-top":"-3px"}},{default:t(()=>[o(C(u(s.item.EVENT.DATE).endTime),1)]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["cols"]))}},oe=F("span",{class:"me-3"},"票券編號　/ ",-1),ne={style:{border:"0px solid #1BBCA9","padding-right":"4px","padding-left":"0.5px","padding-bottom":"0px","font-size":"0.9rem",color:"#1BBCA9"}},N={__name:"IsTicket",props:{item:Object},setup(s){$(),j();const{xs:d,sm:V}=K(),T=c(()=>d.value),m=c(()=>V.value),u=b(!1),S=b("使用票券"),I=()=>{u.value=!1},r=D=>{D.USED===E.USED||D.USED===E.CANCEL?u.value=!1:u.value=!0},a=c(()=>T.value?"0.5rem":"2rem"),w=c(()=>T.value?2:1),h=c(()=>T.value?"140%":m.value?"180%":"160%");return(D,y)=>(n(),f(Z,{width:"100%",class:"rounded-lg mt-1"},{default:t(()=>[e(J,{style:{"padding-right":"0"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:"9",style:{position:"relative"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:w.value,class:"d-flex",style:{"max-height":"60px"}},{default:t(()=>[e(Q,{size:h.value,style:{cursor:"pointer"}},{default:t(()=>[e(q,{src:s.item.EVENT.HOST.IMAGE},null,8,["src"])]),_:1},8,["size"])]),_:1},8,["cols"]),e(l,{cols:"10",style:{"font-size":"0.9rem",color:"#aaa","padding-right":"0","padding-left":"0","padding-bottom":"5px"}},{default:t(()=>[e(l,{cols:"12",style:{"padding-top":"0","padding-bottom":"0"},class:"d-flex align-center"},{default:t(()=>[oe,F("span",ne,[e(R,{style:{"font-size":"0.8rem","margin-top":"-2px"}},{default:t(()=>[o("mdi-map-marker")]),_:1}),o(" "+C(s.item.EVENT.CITY),1)])]),_:1}),e(l,{cols:"12",style:{"padding-top":"7px","padding-bottom":"0"}},{default:t(()=>[o(C(s.item.TICKET),1)]),_:1})]),_:1}),e(l,{cols:"12",style:{"font-size":"1.3rem","font-weight":"900","padding-top":"12px"},class:"d-flex align-center"},{default:t(()=>[o(C(s.item.EVENT.TITLE),1)]),_:1}),e(l,{cols:"12",style:{"padding-top":"12px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(O,{item:s.item,isStart:""},null,8,["item"]),e(l,{cols:"2",class:"d-flex align-center",style:{"padding-top":"18px"}},{default:t(()=>[e(M,{color:"#aaa",thickness:"2px",style:{opacity:"1"}})]),_:1}),e(O,{item:s.item,isEnd:""},null,8,["item"])]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"2",style:{"border-left":"2px dashed #999","margin-left":"5px",padding:"0"},class:"d-flex align-center"},{default:t(()=>[e(p,{style:z([{color:"#aaa"},{"margin-left":a.value}])},{default:t(()=>[e(l,{cols:"12",style:{"padding-bottom":"5px","font-size":"1.2rem","padding-top":"10px"},class:"d-flex justify-center"},{default:t(()=>[e(R,{onClick:y[0]||(y[0]=k=>r(s.item))},{default:t(()=>[o("mdi-eye")]),_:1})]),_:1}),e(l,{cols:"12",style:{"padding-top":"0","font-size":"0.8rem"},class:"d-flex justify-center",onClick:y[1]||(y[1]=k=>r(s.item))},{default:t(()=>[o("查看")]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}),e(ae,{InfoSwitch:u.value,InfoText:s.item.TICKET,InfoTitle:S.value,closeInfo:I,"onUpdate:InfoSwitch":y[2]||(y[2]=k=>u.value=k)},null,8,["InfoSwitch","InfoText","InfoTitle"])]),_:1}))}},xe={__name:"TicketView",setup(s){$(),ee();const d=j(),{xs:V,sm:T}=K();c(()=>V.value),c(()=>T.value),b(!1),b("使用票券");const m=b("one"),u=c(()=>m.value==="one"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;"),S=c(()=>m.value==="two"?"color:#25ECE0; border:1.8px #25ECE0 solid;":"color:#fff; border:1.8px rgba(204,204,204,0.5) solid;");return(I,r)=>(n(),g(_,null,[e(te),e(v,{style:{"margin-top":"1rem","max-width":"800px"}},{default:t(()=>[e(p,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(le,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=a=>m.value=a),"align-tabs":"start"},{default:t(()=>[e(B,{value:"one",class:"rounded-ts-xl me-2",style:z([{"min-width":"80px"},u.value])},{default:t(()=>[o("報名完成")]),_:1},8,["style"]),e(B,{value:"two",class:"rounded-ts-xl me-2",style:z([{"min-width":"80px"},S.value])},{default:t(()=>[o("已取消")]),_:1},8,["style"])]),_:1},8,["modelValue"]),e(M,{color:"#fff",class:"border-opacity-50"})]),_:1}),e(se,{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=a=>m.value=a),style:{width:"100%"}},{default:t(()=>[e(L,{value:"one"},{default:t(()=>[e(v,null,{default:t(()=>[e(p,null,{default:t(()=>[!i(d).TICKET_CART.some(a=>a.USED!==i(E).N_USE)&!i(d).TICKET_CART.some(a=>a.USED!==i(E).USED)?(n(),f(l,{key:0,style:{color:"#aaa"}},{default:t(()=>[o("目前沒有任何票券")]),_:1})):x("",!0),i(d).TICKET_CART.some(a=>a.USED===i(E).N_USE)?(n(),g(_,{key:1},[e(v,{style:{"padding-bottom":"0"}},{default:t(()=>[o("未使用票券")]),_:1}),(n(!0),g(_,null,U(i(d).TICKET_CART.filter(a=>a.USED===0),a=>(n(),f(l,{cols:"12",key:a._id},{default:t(()=>[e(N,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):x("",!0),i(d).TICKET_CART.some(a=>a.USED===i(E).USED)?(n(),g(_,{key:2},[e(v,{style:{"padding-bottom":"0","margin-top":"1rem",opacity:"0.6"}},{default:t(()=>[o("已使用票券")]),_:1}),(n(!0),g(_,null,U(i(d).TICKET_CART.filter(a=>a.USED===1),a=>(n(),f(l,{cols:"12",key:a._id,style:{opacity:"0.6"}},{default:t(()=>[e(N,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):x("",!0)]),_:1})]),_:1})]),_:1}),e(L,{value:"two"},{default:t(()=>[e(v,null,{default:t(()=>[e(p,null,{default:t(()=>[i(d).TICKET_CART.some(a=>a.USED!==i(E).CANCEL)?x("",!0):(n(),f(l,{key:0,style:{color:"#aaa"}},{default:t(()=>[o("目前沒有任何票券")]),_:1})),i(d).TICKET_CART.some(a=>a.USED===i(E).CANCEL)?(n(),g(_,{key:1},[e(v,{style:{"padding-bottom":"0","margin-top":"1rem",opacity:"0.6"}},{default:t(()=>[o("已使用票券")]),_:1}),(n(!0),g(_,null,U(i(d).TICKET_CART.filter(a=>a.USED===1),a=>(n(),f(l,{cols:"12",key:a._id,style:{opacity:"0.6"}},{default:t(()=>[e(N,{item:a},null,8,["item"])]),_:2},1024))),128))],64)):x("",!0)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}};export{xe as default};
