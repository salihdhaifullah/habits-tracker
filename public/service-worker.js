const CACHE_NAME = 'habitup-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/index.css',
    '/index.js',
    '/service-worker.js',
    '/logo.svg',
    '/manifest.webmanifest',
    '/fonts/google-icons.woff2',
    '/fonts/Roboto-Bold.ttf',
    '/fonts/Roboto-Medium.ttf',
    '/fonts/Roboto-Regular.ttf',
    '/icons/favicon.ico',
    '/icons/icon-144x144.png',
    '/icons/icon-150x150.png',
    '/icons/icon-192x192.png',
    '/icons/icon-310x150.png',
    '/icons/icon-310x310.png',
    '/icons/icon-512x512.png',
    '/icons/icon-70x70.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) return response;
                return fetch(event.request);
            })
    )
});