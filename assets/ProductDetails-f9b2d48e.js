import{_ as O}from"./hero-1-43d5106b.js";import{u as L,r,w as A,p as F,d as u,e as P,f as I,i as s,k as i,l,g as j,t as m,v as U,H as Y,n as z,h as G,j as d}from"./index-0d364d6b.js";import{C as H}from"./CustomerService-cbe06d98.js";import{P as K}from"./ProductService-74c45874.js";const W={class:"grid p-fluid"},J={class:"col-12"},Q={class:"card card-w-title"},X=["href","onClick"],Z={class:"text-primary font-semibold"},ee={class:"text-surface-700 dark:text-surface-0"},se={class:"col-12"},te={class:"card flex flex-column align-items-center"},le={class:"col-12"},ae={class:"card"},ie={class:"p-3"},pe={__name:"ProductDetails",setup(re){const{layoutConfig:k}=L();let a=getComputedStyle(document.documentElement),v=a.getPropertyValue("--text-color");a.getPropertyValue("--text-color-secondary"),a.getPropertyValue("--surface-border");const _=r({icon:"pi pi-box",route:{name:"products"}}),w=r([{label:"Product Details"}]),p=r(null),f=r(null),C=()=>{a=getComputedStyle(document.documentElement),v=a.getPropertyValue("--text-color"),a.getPropertyValue("--text-color-secondary"),a.getPropertyValue("--surface-border")},S=()=>{p.value={labels:["Basic","Premium","Enterprise"],datasets:[{data:[540,325,702],backgroundColor:[a.getPropertyValue("--indigo-500"),a.getPropertyValue("--purple-500"),a.getPropertyValue("--teal-500")],hoverBackgroundColor:[a.getPropertyValue("--indigo-400"),a.getPropertyValue("--purple-400"),a.getPropertyValue("--teal-400")]}]},f.value={plugins:{legend:{labels:{usePointStyle:!0,color:v}}}}};A(k.theme,()=>{C(),S()},{immediate:!0});const b=r(null),V=r(null),D=r(null),B=r(null),N=r(null),g=r(null),y=r([]),x=new H,E=new K;return F(()=>{E.getProductsWithOrdersSmall().then(n=>g.value=n),x.getCustomersLarge().then(n=>{b.value=n,B.value=!1,b.value.forEach(e=>e.date=new Date(e.date))}),x.getCustomersLarge().then(n=>V.value=n),x.getCustomersMedium().then(n=>D.value=n),N.value=!1}),(n,e)=>{const M=u("router-link"),$=u("Breadcrumb"),T=u("Chart"),o=u("Column"),h=u("DataTable");return P(),I("div",W,[s("div",J,[s("div",Q,[e[1]||(e[1]=s("h5",null,"Product name",-1)),i($,{home:_.value,model:w.value},{item:l(({item:t,props:c})=>[t.route?(P(),U(M,{key:0,to:t.route,custom:""},{default:l(({href:q,navigate:R})=>[s("a",Y({href:q},c.action,{onClick:R}),[s("span",{class:z([t.icon,"text-color"])},null,2),s("span",Z,m(t.label),1)],16,X)]),_:2},1032,["to"])):G("",!0),s("p",null,[s("span",ee,m(t.label),1)])]),_:1},8,["home","model"])])]),e[12]||(e[12]=j('<div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"><section><span class="block text-6xl font-bold mb-1">Soft 4 You Restaurant Menu</span><div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div><p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></section></div><div class="col-12 md:col-6 overflow-hidden"><img src="'+O+'" alt="Image" class="md:ml-auto block md:h-full" style="clip-path:polygon(8% 0, 100% 0%, 100% 100%, 0 100%);"></div><div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center"><div class="mb-3 font-bold text-2xl mb-6"><span class="text-900">Software </span><span class="text-primary-600">Features</span></div><div class="grid"><div class="col-12 md:col-4 mb-4 px-5"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">Built for Developers</div><span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></div><div class="col-12 md:col-4 mb-4 px-5"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">End-to-End Encryption</div><span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span></div><div class="col-12 md:col-4 mb-4 px-5"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">Easy to Use</div><span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span></div><div class="col-12 md:col-4 mb-4 px-5"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">Fast &amp; Global Support</div><span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span></div><div class="col-12 md:col-4 mb-4 px-5"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">Open Source</div><span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span></div><div class="col-12 md:col-4 md:mb-4 mb-0 px-3"><span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius:10px;"><i class="pi pi-star-fill text-4xl text-primary-500"></i></span><div class="text-900 mb-3 font-medium">Trusted Securitty</div><span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span></div></div></div><div class="col-12"><div class="surface-ground px-4 py-8 md:px-6 lg:px-8"><div class="text-900 font-bold text-6xl mb-4 mb-6 text-center">Packages Prices</div><div class="grid"><div class="col-12 lg:col-4"><div class="p-3 h-full"><div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius:6px;"><div class="text-900 font-medium text-xl">Basic</div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><div class="flex flex-column gap-3"><div><span class="font-bold text-2xl text-900">$9</span><span class="ml-2 font-medium text-600">per month</span></div><div><span class="font-bold text-2xl text-900">$90</span><span class="ml-2 font-medium text-600">per half year</span></div><div><span class="font-bold text-2xl text-900">$900</span><span class="ml-2 font-medium text-600">per year</span></div></div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><ul class="list-none p-0 m-0 flex-grow-1"><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Arcu vitae elementum</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Dui faucibus in ornare</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Morbi tincidunt augue</span></li></ul></div></div></div><div class="col-12 lg:col-4"><div class="p-3 h-full"><div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius:6px;"><div class="text-900 font-medium text-xl">Premium</div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><div class="flex flex-column gap-3"><div><span class="font-bold text-2xl text-900">$9</span><span class="ml-2 font-medium text-600">per month</span></div><div><span class="font-bold text-2xl text-900">$90</span><span class="ml-2 font-medium text-600">per half year</span></div><div><span class="font-bold text-2xl text-900">$900</span><span class="ml-2 font-medium text-600">per year</span></div></div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><ul class="list-none p-0 m-0 flex-grow-1"><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Arcu vitae elementum</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Dui faucibus in ornare</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Morbi tincidunt augue</span></li></ul></div></div></div><div class="col-12 lg:col-4"><div class="p-3 h-full"><div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius:6px;"><div class="text-900 font-medium text-xl">Enterprise</div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><div class="flex flex-column gap-3"><div><span class="font-bold text-2xl text-900">$9</span><span class="ml-2 font-medium text-600">per month</span></div><div><span class="font-bold text-2xl text-900">$90</span><span class="ml-2 font-medium text-600">per half year</span></div><div><span class="font-bold text-2xl text-900">$900</span><span class="ml-2 font-medium text-600">per year</span></div></div><hr class="my-3 mx-0 border-top-1 border-none surface-border"><ul class="list-none p-0 m-0 flex-grow-1"><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Arcu vitae elementum</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Dui faucibus in ornare</span></li><li class="flex align-items-center mb-3"><i class="pi pi-check-circle text-primary-500 mr-2"></i><span>Morbi tincidunt augue</span></li></ul></div></div></div></div></div></div>',4)),s("div",se,[s("div",te,[e[2]||(e[2]=s("h5",{class:"text-left w-full"},"Packages sales distribution",-1)),i(T,{type:"doughnut",data:p.value,options:f.value},null,8,["data","options"]),s("h4",null,"Total Number of Sales: "+m(p.value.datasets[0].data[0]+p.value.datasets[0].data[1]+p.value.datasets[0].data[2]),1)])]),s("div",le,[s("div",ae,[e[11]||(e[11]=s("h5",null,"Packages Sales Details",-1)),i(h,{value:g.value,expandedRows:y.value,"onUpdate:expandedRows":e[0]||(e[0]=t=>y.value=t),dataKey:"id",tableStyle:"min-width: 60rem"},{header:l(()=>e[3]||(e[3]=[])),expansion:l(t=>[s("div",ie,[e[10]||(e[10]=s("h5",null,"Basic",-1)),i(h,{value:t.data.orders},{default:l(()=>[i(o,{field:"id",header:"Subs Type"},{body:l(c=>e[7]||(e[7]=[d(" Yearly ")])),_:2},1024),i(o,{field:"id",header:"No. subs"},{body:l(c=>[d(m(c.data.id),1)]),_:2},1024),i(o,{field:"customer",header:"No. active subs"},{body:l(c=>e[8]||(e[8]=[d(" 3 ")])),_:2},1024),i(o,{field:"amount",header:"Total subs duration"},{body:l(c=>e[9]||(e[9]=[d(" 12 Months ")])),_:2},1024)]),_:2},1032,["value"])])]),default:l(()=>[i(o,{expander:!0,headerStyle:"width: 3rem"}),i(o,{field:"name",header:"Package"},{body:l(t=>[d(m(t.data.name),1)]),_:1}),i(o,{field:"category",header:"No. subs"},{body:l(t=>e[4]||(e[4]=[d(" 43 ")])),_:1}),i(o,{field:"rating",header:"No. active subs"},{body:l(t=>e[5]||(e[5]=[d(" 12 ")])),_:1}),i(o,{field:"inventoryStatus",header:"Total subs duration"},{body:l(t=>e[6]||(e[6]=[d(" 345 Months ")])),_:1})]),_:1},8,["value","expandedRows"])])])])}}};export{pe as default};
