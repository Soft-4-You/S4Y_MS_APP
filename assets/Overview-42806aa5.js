import{r as u,d as t,e as m,f as p,i as l,k as n,l as v,j as s}from"./index-0d364d6b.js";const g={class:"grid p-fluid"},_={class:"col-12 md:col-4"},c={class:"card"},f={class:"col-12 text-center"},x={class:"col-12 md:col-8"},y={class:"line-height-3 m-0"},P={__name:"Overview",setup(V){const o=u(50);return(k,e)=>{const a=t("Knob"),i=t("Tag"),r=t("Panel");return m(),p("div",g,[l("div",_,[l("div",c,[l("div",f,[e[1]||(e[1]=l("h5",null,"Progress",-1)),n(a,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=d=>o.value=d),readonly:"",min:0,max:100,valueTemplate:"{value}%"},null,8,["modelValue"])])])]),l("div",x,[n(r,{header:"Information",toggleable:!0},{default:v(()=>[e[3]||(e[3]=l("p",{class:"line-height-3 m-0"},"Category: Management system",-1)),e[4]||(e[4]=l("hr",null,null,-1)),e[5]||(e[5]=l("p",{class:"line-height-3 m-0"},[s("Project manager: "),l("a",{class:"text-primary font-bold"},"Yousif Al-Tikriti")],-1)),e[6]||(e[6]=l("hr",null,null,-1)),e[7]||(e[7]=l("p",{class:"line-height-3 m-0"},"Deadline: 21/12/2024",-1)),e[8]||(e[8]=l("hr",null,null,-1)),l("p",y,[e[2]||(e[2]=s("Status: ")),n(i,{icon:"pi pi-clock",severity:"warning",value:"Pending"})])]),_:1})])])}}};export{P as default};
