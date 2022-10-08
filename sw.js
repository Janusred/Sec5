


self.addEventListener('install', e =>{
 caches.open('caches-1').then(cache =>{
    cache.addAll([
        '/indexedDB.html',
    '/css/style.css',
    '/img/main.jpg',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    '/js/app.js'
    ])
 })
});