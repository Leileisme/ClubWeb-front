import{o as T,D as s,E as d,F as t,v as e,bN as c,a9 as f,T as m,Q as u,bO as V,aa as I,P as y,G as i,Z as B,a8 as C,K as g}from"./index-c900e51a.js";import{V as h}from"./VCol-d7b65e68.js";const v={__name:"InfoAll",props:{InfoText:{type:String,required:!0},closeInfo:{type:Function,required:!0},InfoSwitch:{type:Boolean,required:!0},isBack:{type:Boolean,default:!1},InfoTitle:{type:String}},emits:["update:InfoSwitch"],setup(a,{emit:x}){const k=a,w=x,l=T({get:()=>k.InfoSwitch,set:r=>w("update:InfoSwitch",r)});return(r,o)=>a.isBack?(s(),d(C,{key:0,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"max-width":"290"},{default:t(()=>[e(B,{class:"rounded-lg"},{default:t(()=>[e(c),e(f,{class:"headline text-center",style:{"font-size":"1.2rem"}},{default:t(()=>[m("span",null,u(a.InfoText),1)]),_:1}),e(V,null,{default:t(()=>[e(I),e(y,{color:"#1BBCA9",style:{"font-weight":"900"},onClick:a.closeInfo},{default:t(()=>[i("關閉")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):(s(),d(C,{key:1,modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=n=>l.value=n),"max-width":"290"},{default:t(()=>[e(B,{class:"rounded-lg"},{default:t(()=>[e(c),e(f,{class:"headline text-center",style:{"font-size":"1.2rem"}},{default:t(()=>[a.InfoTitle?(s(),d(h,{key:0,style:{color:"#1BBCA9"}},{default:t(()=>[i(u(a.InfoTitle),1)]),_:1})):g("",!0),m("span",null,u(a.InfoText),1)]),_:1}),e(V,null,{default:t(()=>[e(I),e(y,{color:"#1BBCA9",style:{"font-weight":"900"},onClick:a.closeInfo},{default:t(()=>[i("關閉")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};export{v as _};
