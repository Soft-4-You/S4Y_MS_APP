import{r as s,a as G,p as J,q as g,s as h,d as n,e as x,f as U,i as o,k as t,l as a,j as c,t as I,h as X}from"./index-c8a9da24.js";import{C as Y}from"./CustomerService-cbe06d98.js";const Z={class:"grid"},ee={class:"col-12"},le={class:"card"},te={class:"flex justify-content-between flex-column sm:flex-row mb-2"},oe={class:"flex gap-2"},ae={class:"flex align-items-center gap-2"},ne=["alt","src"],se={key:0},ie={class:"field grid"},de={class:"col-12"},ue={class:"field grid"},re={class:"col-12"},pe={key:1},ce={class:"field grid"},me={class:"col-12"},ve={class:"field grid"},ye={class:"col-12"},fe={class:"field grid"},be={class:"col-12"},_e={class:"mt-3"},xe={__name:"Expenses",setup(ge){const V=s(null),m=s(null),S=s(null),F=s(null),N=G(),y=s(!1),k=new Y,A=()=>{N.add({severity:"success",summary:"Success",detail:"File Uploaded",life:3e3})};J(()=>{k.getCustomersLarge().then(p=>{V.value=p,S.value=!1,V.value.forEach(e=>e.date=new Date(e.date))}),F.value=!1,D()});const D=()=>{m.value={global:{value:null,matchMode:g.CONTAINS},name:{operator:h.AND,constraints:[{value:null,matchMode:g.STARTS_WITH}]},date:{operator:h.AND,constraints:[{value:null,matchMode:g.DATE_IS}]},status:{operator:h.OR,constraints:[{value:null,matchMode:g.EQUALS}]}}},E=()=>{D()},B=p=>p.toLocaleDateString("en-UK",{day:"2-digit",month:"2-digit",year:"numeric"});s([{label:"Edit",icon:"pi pi-pencil"}]);const v=s(""),w=s(["Income","Expense"]),L=s([{label:"Invoice"},{label:v}]),i=s(0),f=s("Next"),b=s(!1),P=()=>{i.value=0,f.value="Next",b.value=!0,y.value=!0},R=()=>{y.value=!1},$=()=>{i.value<1&&(i.value++,b.value=!1),i.value===1&&(f.value="Add")},j=()=>{i.value!==0&&i.value--,i.value===0&&(b.value=!0,f.value="Next")};return(p,e)=>{const u=n("Button"),K=n("InputIcon"),_=n("InputText"),O=n("IconField"),r=n("Column"),C=n("InputNumber"),z=n("Calendar"),H=n("DataTable"),M=n("Steps"),T=n("Dropdown"),q=n("FileUpload"),Q=n("Textarea"),W=n("Dialog");return x(),U("div",Z,[o("div",ee,[o("div",le,[e[19]||(e[19]=o("h5",null,"Expenses",-1)),t(H,{value:V.value,paginator:!0,rows:15,dataKey:"id",rowHover:!0,filters:m.value,"onUpdate:filters":e[2]||(e[2]=l=>m.value=l),filterDisplay:"menu",loading:S.value,globalFilterFields:["name","status"]},{header:a(()=>[o("div",te,[o("div",oe,[t(u,{type:"button",icon:"pi pi-upload",label:"Upload",onClick:P}),t(u,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:"",onClick:e[0]||(e[0]=l=>E())})]),t(O,{iconPosition:"left"},{default:a(()=>[t(K,{class:"pi pi-search"}),t(_,{modelValue:m.value.global.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value.global.value=l),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])]),_:1})])]),empty:a(()=>e[8]||(e[8]=[c(" No invoices found. ")])),loading:a(()=>e[9]||(e[9]=[c(" Loading invoices data. Please wait. ")])),default:a(()=>[t(r,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:a(({data:l})=>[o("div",ae,[o("img",{alt:l.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${l.representative.image}`,style:{width:"32px"}},null,8,ne),o("span",null,I(l.name),1)])]),filter:a(({filterModel:l})=>[t(_,{type:"text",modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(r,{field:"name",header:"Type",style:{"min-width":"12rem"}},{body:a(({data:l})=>e[10]||(e[10]=[c(" Domain/Package/employee payment ")])),filter:a(({filterModel:l})=>[t(_,{type:"text",modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(r,{header:"Amount",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:a(({data:l})=>e[11]||(e[11]=[c(" $70,663.00 ")])),filter:a(({filterModel:l})=>[t(C,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(r,{field:"name",header:"Related",style:{"min-width":"12rem"}},{body:a(({data:l})=>e[12]||(e[12]=[c(" Related to: project link ")])),filter:a(({filterModel:l})=>[t(_,{type:"text",modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(r,{header:"Date",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:a(({data:l})=>[c(I(B(l.date)),1)]),filter:a(({filterModel:l})=>[t(z,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(r,{field:"status",header:"Document",style:{"min-width":"8rem"}},{body:a(()=>[t(u,{label:"View",outlined:""})]),_:1}),t(r,{field:"status",header:"Actions",style:{"min-width":"8rem"}},{body:a(()=>[t(u,{icon:"pi pi-pencil",severity:"warning",class:"mr-2"}),t(u,{icon:"pi pi-trash",severity:"danger"})]),_:1})]),_:1},8,["value","filters","loading"]),t(W,{header:"Add Invoice",visible:y.value,"onUpdate:visible":e[7]||(e[7]=l=>y.value=l),modal:!0,style:{"max-height":"500px"},class:"add-product-dialog"},{footer:a(()=>[o("div",_e,[t(u,{label:"cancel",icon:"pi pi-times",onClick:R,class:"p-button-text",severity:"danger"}),t(u,{label:"previous",disabled:b.value,icon:"pi pi-chevron-left",onClick:j,class:"p-button-text"},null,8,["disabled"]),t(u,{label:f.value,icon:"pi pi-chevron-right",onClick:$,class:"p-button-text"},null,8,["label"])])]),default:a(()=>[t(M,{activeStep:i.value,"onUpdate:activeStep":e[3]||(e[3]=l=>i.value=l),readonly:!1,model:L.value,class:"mb-6"},null,8,["activeStep","model"]),i.value===0?(x(),U("div",se,[o("div",ie,[e[13]||(e[13]=o("label",{for:"type",class:"col-12 mb-2"},"Type",-1)),o("div",de,[t(T,{id:"type",modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=l=>v.value=l),options:w.value,placeholder:"Select type ..."},null,8,["modelValue","options"])])]),o("div",ue,[e[15]||(e[15]=o("label",{for:"price",class:"col-12 mb-2"},"Contract file",-1)),o("div",re,[t(q,{name:"demo[]",onUpload:A,multiple:!0,accept:"image/*",maxFileSize:1e6},{empty:a(()=>e[14]||(e[14]=[o("p",null,"Drag and drop files to here to upload.",-1)])),_:1})])])])):i.value===1?(x(),U("div",pe,[o("div",ce,[e[16]||(e[16]=o("label",{for:"type",class:"col-12 mb-2"},"Category (payment/product)",-1)),o("div",me,[t(T,{id:"type",modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=l=>v.value=l),options:w.value,placeholder:"Select type ..."},null,8,["modelValue","options"])])]),o("div",ve,[e[17]||(e[17]=o("label",{class:"col-12 mb-2"},"Amount",-1)),o("div",ye,[t(C,{modelValue:p.packagePrice1,"onUpdate:modelValue":e[6]||(e[6]=l=>p.packagePrice1=l),inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US",placeholder:"$#,##"},null,8,["modelValue"])])]),o("div",fe,[e[18]||(e[18]=o("label",{for:"details",class:"col-12 mb-2"},"Details",-1)),o("div",be,[t(Q,{id:"details",placeholder:"details ...",autoResize:!0,rows:"3"})])])])):X("",!0)]),_:1},8,["visible"])])])])}}};export{xe as default};
