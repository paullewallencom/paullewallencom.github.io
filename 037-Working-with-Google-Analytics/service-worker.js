var version = 1,
  currentCaches = {
    'google-analytics': 'google-analytics-v' + version
  };

self.addEventListener('activate', function(event) {
  var cacheNamesExpected = Object.keys(currentCaches).map(function(key) {
    return currentCaches[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheNamesExpected.indexOf(cacheName) === -1) {
            console.log('DELETE: Out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

event.respondWith(
    caches.open(currentCaches['google-analytics']).then(function(cache) {
      return cache.match(event.request).then(function(res) {
        if (res) {
          console.log(
            '%c ✓ RESPONSE: %c Found in cache: %s',
            'color: #5EBD00', 'color: #000000', res
          );

          return res;
        }

 return fetch(event.request.clone()).then(function(res) {
          console.log('%c ✓ RESPONSE: %c For %s from network: %O',
            'color: #5EBD00', 'color: #000000',
            event.request.url, res);

          if (res.status < 400) {
            cache.put(event.request, res.clone());
          } 

promises = promises.map(function(promise) {
      return Promise.resolve(promise);
    });

if (res.status < 400) {
    cache.put(event.request, res.clone());
}