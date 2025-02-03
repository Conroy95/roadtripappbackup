const CACHE_NAME = 'roadtrip-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/days/dag1.html',
  '/days/dag2.html',
  '/days/dag3.html',
  '/days/dag4.html',
  '/days/dag5.html',
  '/days/dag6.html',
  '/days/dag7.html',
  '/days/dag8.html',
  '/days/dag9.html',
  '/days/dag10.html',
  '/days/dag11.html',
  '/days/dag12.html',
  '/days/dag13.html',
  '/days/dag14.html',
  '/days/dag15.html',
  '/days/dag16.html',
  '/days/dag17.html',
  '/days/dag18.html',
  '/days/dag19.html',
  '/days/dag20.html',
  '/days/dag21.html',
  '/days/dag22.html',
  '/app.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
