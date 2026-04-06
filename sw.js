const CACHE_NAME = 'snake-game-v1';
const urlsToCache = [
  'index.html',
  'replay.html',
  'favicon.ico',
  'manifest.json',
  'icon/icon-192x192.png',
  'icon/icon-512x512.png',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
