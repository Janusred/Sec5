//const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';

const CACHE_INMUTABLE_NAME = 'inmutable-v1';
const CACHE_DYNAMIC_LIMIT = 50;


function limpiarCache (cache_Name, numeroItem ){

    caches.open(cacheNAme).then(cache=>{
        return cache.keys()
        .then(keys=>{
            //console.log(keys);
            if(keys.length > numeroItems){
                cache.delete(keys[0]).then(limpiarCache(cache_Name, numeroItem));
            }
        });
    });
}

self.addEventListener('install', e =>{
 caches.open('caches-1').then(CACHE_STATIC_NAME =>{
    return cache.addAll([
        '/indexedDB.html',
    '/css/style.css',
    '/img/main.jpg',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    '/js/app.js'
    ]);
 });

 const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
 .then(caches=>{
   return cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
 });

 e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});

self.addEventListener('fetch', e=>{

e.repondWith(caches.match( ))


//----4

if(e.request.url.includes('boottrap')){
   return e.repondWith(caches.match(e.request));
}

 const respuesta = caches.open(CACHE_STATIC_NAME).then(cache=>{
    fetch(e.request).then(newRes=>
        cache.put(e.request,newRes));

        return cache.match(e.request);
 });
 e.repondWith();


/*
// 3
 const resquesta = fetch(e.request).then(res=>{
  if(!res) return caches,match(e.request);
  
   // console.log('Fetch',res);
caches.open(CACHE_DYNAMIC_NAME).then(cache =>{
    cache.put(e.req, res);
    limpiarCache(CACHE_INMUTABLE_NAME, CACHE_DYNAMIC_LIMIT);
});
return res.clone();
}).catch(err =>{
    return caches.match(e.request);
});

e.repondWith(resquesta );



});

const respuesta = caches.match(e.request).then(res=>{

if( res) return res;

console.log('No existe',e.request.url);

return fetch( e.request).then(newResp=>{
    caches.open(CACHE_DYNAMIC_NAME =>{
        cache.put(e.request, newResp);
        limpiarCache(CACHE_DYNAMIC_NAME, 5);
    });
    return newResp.clone();
   

}); 
  e.repondWith(respuesta);
*/
});
