const staticCacheName = 'static-cache-v0';
const staticAssets = ['./bundle.js', './manifest.json', './icon-512x512.png'];

self.addEventListener('install', () => {
  // const cache = await caches.open(staticCacheName);

  // await cache.addAll(staticAssets);
  // console.log('service worker installed');

  caches.open(staticCacheName).then((cache) => {
    cache.addAll(['./bundle.js']);
  });

  console.log('service worker installed');
});

self.addEventListener('activate', async () => {
  console.log('service worker activated');
});

self.addEventListener('fetch', async (event) => {
  console.log('fetch urls: ', event.request.url);
});
