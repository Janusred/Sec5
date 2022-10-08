

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

if ( window.caches){
    caches.open('Janus-1');
    caches.open('Janus-2');
    caches.has('prueba-3').then( existe => console.log);
    caches.open('cache-v1-1').then(caches=>{
 //caches.add('/index.html');
caches.addAll([
    '/indexedDB.html',
    '/css/style.css',
    '/img/main.jpg'
]).then(()=>{
  //  caches.delete('/css/style.css');
caches.put('index.html', new Response('hola Janus'));

});
/*caches.match('/index.html').then(res=>{
res.text().then(console.log);
});*/ 
});
caches.keys().then(keys => { console.log(keys); });
}