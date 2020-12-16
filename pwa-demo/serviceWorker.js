const cacheName = "pwa-first-v1";
const filesToCache = [
    '/index.html',
    '/js/main.js',
    '/manifest.json',
    '/serviceWorker.js'
];

//'http://127.0.0.1:5500/pwa-demo/index.html',
//'http://127.0.0.1:5500/pwa-demo/js/main.js'

self.addEventListener ('install', function(e) {
    console.log('install');
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('fetch');
    e.respondWith(caches.match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
    );
});