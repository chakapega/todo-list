const cacheName = 'version-1';
const urlsToCache = ['../', '../bundle.js', '../manifest.json', '../images/logo_192x192.png'];

self.addEventListener('install', () => {
  caches.open(cacheName).then((cache) => {
    cache.addAll(urlsToCache);
  });
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
