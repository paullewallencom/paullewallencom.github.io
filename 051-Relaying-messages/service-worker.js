'use strict';

self.addEventListener('message', function(event) {

  var promise = self.clients.matchAll()
  .then(function(clientList) {
    var senderID = event.source ? event.source.id : 'unknown';

    if (!event.source) {
      console.log('Unsure about the sender');
    }

    clientList.forEach(function(client) {
      if (client.id === senderID) {
        return;
      }
      client.postMessage({
        client: senderID,
        message: event.data
      });
    });
  });

  if (event.waitUntil) {
    event.waitUntil(promise);
  }
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});