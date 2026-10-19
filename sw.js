// Service worker: aplikasi tetap bisa dibuka tanpa internet.
// Naikkan angka VERSI setiap kali file aplikasi diubah agar cache diperbarui.
const VERSI = "uji-teh-v1";
const FILE = ["./", "index.html", "logo.svg", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSI).then(c => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSI).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const sama = new URL(r.url).origin === location.origin;
  if (sama) {
    // Cache dulu, lalu perbarui diam-diam dari jaringan.
    e.respondWith(
      caches.match(r, { ignoreSearch: true }).then(hit => {
        const net = fetch(r).then(res => {
          if (res.ok) caches.open(VERSI).then(c => c.put(r, res.clone()));
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    );
  } else {
    // Font Google: jaringan dulu, cadangan dari cache.
    e.respondWith(
      fetch(r).then(res => {
        if (res.ok) caches.open(VERSI).then(c => c.put(r, res.clone()));
        return res;
      }).catch(() => caches.match(r))
    );
  }
});
