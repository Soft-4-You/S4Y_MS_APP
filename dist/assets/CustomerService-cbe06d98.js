class a{getCustomersSmall(){return fetch("/demo/data/customers-small.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}getCustomersMedium(){return fetch("/demo/data/customers-medium.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}getCustomersLarge(){return fetch("/demo/data/customers-large.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}}export{a as C};
