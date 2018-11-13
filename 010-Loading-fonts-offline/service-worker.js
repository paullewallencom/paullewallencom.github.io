'use strict';

var version = 1;
var cacheName = 'static-' + version;

self.addEventListener('install', installHandler);
self.addEventListener('fetch', fetchHandler);

function installHandler(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                'index.html',
                'AllertaStencil-Regular.ttf'
            ]);
        })
    );
}

function fetchHandler(event) {
    event.respondWith(caches.match(event.request));
}