self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch{d={title:'BGB Health',body:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.title||'BGB Health',{body:d.body||'',icon:'../bgb-192.png',badge:'../bgb-192.png',data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws)return w.focus();return clients.openWindow('./')}))});
