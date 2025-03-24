import{r as d,d as s,e as P,f as S,i,k as t,l as o}from"./index-c8a9da24.js";const T={class:"grid"},N={class:"col-12"},D={class:"card"},B={class:"col-12 md:col-6"},C={class:"card"},E={class:"card"},k={class:"col-12 md:col-6"},A={class:"card"},H={class:"card"},U={class:"flex align-items-center justify-content-between mb-0"},L={class:"col-12"},j={class:"card"},z={class:"grid"},V={class:"col-5 flex align-items-center justify-content-center"},M={class:"p-fluid"},F={class:"field"},O={class:"field"},R={class:"col-2"},G={class:"col-5 align-items-center justify-content-center"},J={class:"col-12"},K={class:"card"},Y={__name:"Panels",setup(Q){const v=d([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]),q=d([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),m=d(null),f=()=>{m.value.toggle(event)};return(W,e)=>{const a=s("Button"),b=s("SplitButton"),g=s("Toolbar"),u=s("AccordionTab"),_=s("Accordion"),l=s("TabPanel"),x=s("TabView"),h=s("Panel"),I=s("Fieldset"),w=s("Menu"),y=s("Card"),c=s("InputText"),r=s("Divider"),n=s("SplitterPanel"),p=s("Splitter");return P(),S("div",T,[i("div",N,[i("div",D,[e[1]||(e[1]=i("h5",null,"Toolbar",-1)),t(g,null,{start:o(()=>[t(a,{label:"New",icon:"pi pi-plus",class:"mr-2"}),t(a,{label:"Open",icon:"pi pi-folder-open",class:"p-button-secondary mr-2"}),e[0]||(e[0]=i("i",{class:"pi pi-bars p-toolbar-separator mr-2"},null,-1)),t(a,{icon:"pi pi-check",class:"p-button-success mr-2"}),t(a,{icon:"pi pi-trash",class:"p-button-warning mr-2"}),t(a,{icon:"pi pi-print",class:"p-button-danger"})]),end:o(()=>[t(b,{label:"Options",model:v.value},null,8,["model"])]),_:1})])]),i("div",B,[i("div",C,[e[5]||(e[5]=i("h5",null,"AccordionPanel",-1)),t(_,{activeIndex:0},{default:o(()=>[t(u,{header:"Header I"},{default:o(()=>e[2]||(e[2]=[i("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),t(u,{header:"Header II"},{default:o(()=>e[3]||(e[3]=[i("p",{class:"line-height-3 m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])),_:1}),t(u,{header:"Header III"},{default:o(()=>e[4]||(e[4]=[i("p",{class:"line-height-3 m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])),_:1})]),_:1})]),i("div",E,[e[9]||(e[9]=i("h5",null,"TabView",-1)),t(x,null,{default:o(()=>[t(l,{header:"Header I"},{default:o(()=>e[6]||(e[6]=[i("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),t(l,{header:"Header II"},{default:o(()=>e[7]||(e[7]=[i("p",{class:"line-height-3 m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])),_:1}),t(l,{header:"Header III"},{default:o(()=>e[8]||(e[8]=[i("p",{class:"line-height-3 m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])),_:1})]),_:1})])]),i("div",k,[i("div",A,[e[11]||(e[11]=i("h5",null,"Panel",-1)),t(h,{header:"Header",toggleable:!0},{default:o(()=>e[10]||(e[10]=[i("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),i("div",H,[e[13]||(e[13]=i("h5",null,"Fieldset",-1)),t(I,{legend:"Legend",toggleable:!0},{default:o(()=>e[12]||(e[12]=[i("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),t(y,null,{title:o(()=>[i("div",U,[e[14]||(e[14]=i("h5",null,"Card",-1)),t(a,{icon:"pi pi-plus",class:"p-button-text",onClick:f})]),t(w,{id:"config_menu",ref_key:"menuRef",ref:m,model:q.value,popup:!0},null,8,["model"])]),content:o(()=>e[15]||(e[15]=[i("p",{class:"line-height-3 m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),i("div",L,[i("div",j,[e[23]||(e[23]=i("h5",null,"Divider",-1)),i("div",z,[i("div",V,[i("div",M,[i("div",F,[e[16]||(e[16]=i("label",{for:"username"},"Username",-1)),t(c,{id:"username",type:"text"})]),i("div",O,[e[17]||(e[17]=i("label",{for:"password"},"Password",-1)),t(c,{id:"password",type:"password"})]),t(a,{label:"Login",class:"mt-2"})])]),i("div",R,[t(r,{layout:"vertical"},{default:o(()=>e[18]||(e[18]=[i("b",null,"OR",-1)])),_:1})]),i("div",G,[e[20]||(e[20]=i("p",{class:"line-height-3 m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),t(r,{layout:"horizontal",align:"center"},{default:o(()=>e[19]||(e[19]=[i("span",{class:"p-tag"},"Badge",-1)])),_:1}),e[21]||(e[21]=i("p",{class:"line-height-3 m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)),t(r,{align:"right"},{default:o(()=>[t(a,{label:"Button",icon:"pi pi-search",class:"p-button-outlined"})]),_:1}),e[22]||(e[22]=i("p",{class:"line-height-3 m-0"}," Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio. ",-1))])])])]),i("div",J,[i("div",K,[e[27]||(e[27]=i("h5",null,"Splitter",-1)),t(p,{style:{height:"300px"},class:"mb-5"},{default:o(()=>[t(n,{size:30,minSize:10},{default:o(()=>e[24]||(e[24]=[i("div",{className:"h-full flex align-items-center justify-content-center"},"Panel 1",-1)])),_:1}),t(n,{size:70},{default:o(()=>[t(p,{layout:"vertical"},{default:o(()=>[t(n,{size:15},{default:o(()=>e[25]||(e[25]=[i("div",{className:"h-full flex align-items-center justify-content-center"},"Panel 2",-1)])),_:1}),t(n,{size:50},{default:o(()=>e[26]||(e[26]=[i("div",{className:"h-full flex align-items-center justify-content-center"},"Panel 3",-1)])),_:1})]),_:1})]),_:1})]),_:1})])])])}}};export{Y as default};
