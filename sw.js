// Minimal service worker — required by Android Chrome to treat this
// site as a fully installable app (standalone, no address bar).
// It does no caching; it simply lets normal network requests through.
self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  // pass-through
});
