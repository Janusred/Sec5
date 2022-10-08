
self.addEventListener('fetch', event =>{

    const offlineResp = new Response(`Janus no hay internet`);

    const resp = fetch(event.request).catch(()=> offlineResp);

 event.respondWith(resp);
});

