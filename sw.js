// Vozcalizador: guarda la app en el teléfono para que abra sin internet.
const CACHE = 'vozcalizador-15a7b56e47';
const APP = ['./', 'index.html', 'manifest.webmanifest', 'icono-192.png', 'icono-512.png'];
const FUENTES = 'vozcalizador-fuentes';
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FUENTES).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Tipografías: se guardan la primera vez; sin internet se usan las guardadas (o las del sistema si nunca se descargaron).
    e.respondWith(caches.open(FUENTES).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { if (n.ok || n.type === 'opaque') c.put(e.request, n.clone()); return n; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  // La app: primero la red (para recibir la versión nueva) y, sin internet, la guardada.
  e.respondWith(fetch(e.request).then(n => { if (n.ok) { const copia = n.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); } return n; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
