var version = 1;
var cacheName = 'stale- ' + version;

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }
});

self.addEventListener('fetch', function(event) {
  
    event.respondWith(
        fetch(event.request).then(function(response) {
            caches.open(cacheName).then(function(cache) {
                
                if(response.status >= 500) {
                    cache.match(event.request).
					then(function(response) {
                        
                        return response;
                    }).catch(function() {
                     
                        return response;
                    });
                } else {
                      cache.put(event.request, response.clone());
                    return response;
                }
            });
        })
    );
});