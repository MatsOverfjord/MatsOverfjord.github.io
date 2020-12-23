const cacheName = "prov-pwa-v1";
const VERSION = "v1";
const filesToCache = [
        '/index.html',
        '/manifest.json',
        '/gallery.html',
        '/inc/header.html',
        '/css/bulma.min.css',
        '/js/bulma.js',
        '/images/beach.jpg',
        '/images/shenzhen.jpg'
];



self.addEventListener ('install', function(e) {
    console.log('install');
    //self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            //console.log(cache);
            return cache.addAll(filesToCache);
        })
        
        .then(function() {
          console.log('skip');
          self.skipWaiting();
        })
        
    );
});

self.addEventListener('activate', function (event) { 
  //on activate 
  console.log('activate');


  
  event.waitUntil( 

    caches.keys().then(function (cacheNames) { 
              cacheNames.forEach(function (value) { 
              //if (value.indexOf(VERSION) < 0) { 
                console.log(value);
              if (value.indexOf(VERSION) < 0) { 
                  caches.delete(value); 
              } 
          }); 
          return; 
      }) 
  );
  
}); 



self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) { //entry found in cache
          return response
        }
        return fetch(event.request)
      }
    )
  )
})



// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and use the payload
    // as the body.
    self.registration.showNotification('Mitt Pus-upp medeland', {
      body: payload,
    })
  );
});