import{C as F}from"./CountryService-74a64663.js";import{r as u,o as B,d,e as R,f as q,i as e,k as o,l as a}from"./index-c8a9da24.js";const P={class:"card"},Y={class:"grid p-fluid mt-3"},E={class:"field col-12 md:col-4"},O={class:"field col-12 md:col-4"},j={class:"field col-12 md:col-4"},z={class:"field col-12 md:col-4"},H={class:"field col-12 md:col-4"},J={class:"field col-12 md:col-4"},K={class:"field col-12 md:col-4"},Q={class:"field col-12 md:col-4"},W={class:"field col-12 md:col-4"},X={class:"field col-12 md:col-4"},ll={__name:"FloatLabel",setup(Z){const m=u([]),r=u([{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]),v=u(null),f=u(null),V=u(null),c=u(null),b=u(null),_=u(null),C=u(null),I=u(null),x=u(null),w=u(null),k=u(null),L=new F;B(()=>{L.getCountries().then(s=>m.value=s)});const U=s=>{const l=[],i=s.query;for(let n=0;n<m.value.length;n++){const p=m.value[n];p.name.toLowerCase().indexOf(i.toLowerCase())==0&&l.push(p)}v.value=l};return(s,l)=>{const i=d("InputText"),n=d("FloatLabel",!0),p=d("AutoComplete"),g=d("Calendar"),y=d("Chips"),M=d("InputMask"),N=d("InputNumber"),S=d("InputGroupAddon"),T=d("InputGroup"),A=d("Dropdown"),G=d("MultiSelect"),D=d("Textarea");return R(),q("div",P,[l[22]||(l[22]=e("h5",null,"Float Label",-1)),e("div",Y,[e("div",E,[o(n,null,{default:a(()=>[o(i,{type:"text",id:"inputtext",modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=t=>f.value=t)},null,8,["modelValue"]),l[11]||(l[11]=e("label",{for:"inputtext"},"InputText",-1))]),_:1})]),e("div",O,[o(n,null,{default:a(()=>[o(p,{id:"autocomplete",modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=t=>V.value=t),suggestions:v.value,onComplete:l[2]||(l[2]=t=>U(t)),field:"name"},null,8,["modelValue","suggestions"]),l[12]||(l[12]=e("label",{for:"autocomplete"},"AutoComplete",-1))]),_:1})]),e("div",j,[o(n,null,{default:a(()=>[o(g,{inputId:"calendar",modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=t=>c.value=t)},null,8,["modelValue"]),l[13]||(l[13]=e("label",{for:"calendar"},"Calendar",-1))]),_:1})]),e("div",z,[o(n,null,{default:a(()=>[o(y,{inputId:"chips",modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=t=>b.value=t)},null,8,["modelValue"]),l[14]||(l[14]=e("label",{for:"chips"},"Chips",-1))]),_:1})]),e("div",H,[o(n,null,{default:a(()=>[o(M,{id:"inputmask",mask:"99/99/9999",modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=t=>_.value=t)},null,8,["modelValue"]),l[15]||(l[15]=e("label",{for:"inputmask"},"InputMask",-1))]),_:1})]),e("div",J,[o(n,null,{default:a(()=>[o(N,{id:"inputnumber",modelValue:C.value,"onUpdate:modelValue":l[6]||(l[6]=t=>C.value=t)},null,8,["modelValue"]),l[16]||(l[16]=e("label",{for:"inputnumber"},"InputNumber",-1))]),_:1})]),e("div",K,[o(T,null,{default:a(()=>[o(S,null,{default:a(()=>l[17]||(l[17]=[e("i",{class:"pi pi-user"},null,-1)])),_:1}),o(n,null,{default:a(()=>[o(i,{type:"text",id:"inputgroup",modelValue:I.value,"onUpdate:modelValue":l[7]||(l[7]=t=>I.value=t)},null,8,["modelValue"]),l[18]||(l[18]=e("label",{for:"inputgroup"},"InputGroup",-1))]),_:1})]),_:1})]),e("div",Q,[o(n,null,{default:a(()=>[o(A,{id:"dropdown",options:r.value,modelValue:x.value,"onUpdate:modelValue":l[8]||(l[8]=t=>x.value=t),optionLabel:"name"},null,8,["options","modelValue"]),l[19]||(l[19]=e("label",{for:"dropdown"},"Dropdown",-1))]),_:1})]),e("div",W,[o(n,null,{default:a(()=>[o(G,{id:"multiselect",options:r.value,modelValue:w.value,"onUpdate:modelValue":l[9]||(l[9]=t=>w.value=t),optionLabel:"name",filter:!1},null,8,["options","modelValue"]),l[20]||(l[20]=e("label",{for:"multiselect"},"MultiSelect",-1))]),_:1})]),e("div",X,[o(n,null,{default:a(()=>[o(D,{inputId:"textarea",rows:"3",cols:"30",modelValue:k.value,"onUpdate:modelValue":l[10]||(l[10]=t=>k.value=t)},null,8,["modelValue"]),l[21]||(l[21]=e("label",{for:"textarea"},"Textarea",-1))]),_:1})])])])}}};export{ll as default};
