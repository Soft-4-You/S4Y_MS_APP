import{P as y}from"./ProductService-74c45874.js";import{r as l,o as k,d as o,e as w,f as O,i as e,k as i,l as c,t as u}from"./index-c8a9da24.js";class V{getImages(){return fetch("/demo/data/photos.json",{headers:{"Cache-Control":"no-cache"}}).then(s=>s.json()).then(s=>s.data)}}const C={class:"grid p-fluid"},I={class:"col-12"},T={class:"card"},j={class:"border-1 surface-border border-round m-2 p-3"},B={class:"mb-3"},G={class:"relative mx-auto"},K=["src","alt"],N={class:"mb-3 font-medium"},M={class:"flex justify-content-between align-items-center"},R={class:"mt-0 font-semibold text-xl"},D={class:"col-12"},E={class:"card"},F={class:"flex justify-content-center"},L={class:"col-12"},U={class:"card"},W=["src","alt"],$=["src","alt"],A={__name:"Media",setup(m){const s=l([]),r=l([]),p=l([{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]),_=l([{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]),v=new y,h=new V;k(()=>{v.getProductsSmall().then(a=>s.value=a),h.getImages().then(a=>r.value=a)});const g=a=>{switch(a){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}};return(a,n)=>{const b=o("Tag"),d=o("Button"),x=o("Carousel"),S=o("Image"),f=o("Galleria");return w(),O("div",C,[e("div",I,[e("div",T,[n[0]||(n[0]=e("h5",null,"Carousel",-1)),i(x,{value:s.value,numVisible:3,numScroll:3,responsiveOptions:_.value},{item:c(t=>[e("div",j,[e("div",B,[e("div",G,[e("img",{src:"/demo/images/product/"+t.data.image,alt:t.data.name,class:"w-full border-round"},null,8,K),i(b,{value:t.data.inventoryStatus,severity:g(t.data.inventoryStatus),class:"absolute",style:{left:"5px",top:"5px"}},null,8,["value","severity"])])]),e("div",N,u(t.data.name),1),e("div",M,[e("div",R,"$"+u(t.data.price),1),e("span",null,[i(d,{icon:"pi pi-heart",severity:"secondary",outlined:""}),i(d,{icon:"pi pi-shopping-cart",class:"ml-2"})])])])]),_:1},8,["value","responsiveOptions"])])]),e("div",D,[e("div",E,[n[1]||(n[1]=e("h5",null,"Image",-1)),e("div",F,[i(S,{src:"/demo/images/galleria/galleria11.jpg",alt:"Image",width:"250",preview:""})])])]),e("div",L,[e("div",U,[n[2]||(n[2]=e("h5",null,"Galleria",-1)),i(f,{value:r.value,responsiveOptions:p.value,numVisible:7,circular:!0,containerStyle:"max-width: 800px; margin: auto"},{item:c(t=>[e("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,W)]),thumbnail:c(t=>[e("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,tyle:"width: 100%; display: block;"},null,8,$)]),_:1},8,["value","responsiveOptions"])])])])}}};export{A as default};
