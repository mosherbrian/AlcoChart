// Bump CACHE_VERSION whenever index.html or manifest changes.
// Network-first for HTML so users see updates promptly when online;
// cache-first for static assets.
const CACHE_VERSION = 'alcochart-v2';
const STATIC_ASSETS = ['/', 'index.html', 'manifest.json', 'icon.png'];

self.addEventListener('install', function (event) {
    self.skipWaiting(); // activate the new SW as soon as it's installed
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function (cache) {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', function (event) {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);

    // Never cache cross-origin (KV sync endpoint etc.)
    if (url.origin !== self.location.origin) return;

    const isHTML =
        req.mode === 'navigate' ||
        url.pathname === '/' ||
        url.pathname.endsWith('.html');

    if (isHTML) {
        // Network-first so new versions appear promptly
        event.respondWith(
            fetch(req).then(resp => {
                const copy = resp.clone();
                caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
                return resp;
            }).catch(() => caches.match(req))
        );
    } else {
        // Cache-first for static assets
        event.respondWith(
            caches.match(req).then(cached => cached || fetch(req))
        );
    }
});

// Allow the page to trigger an immediate check for a new SW
self.addEventListener('message', function (event) {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
