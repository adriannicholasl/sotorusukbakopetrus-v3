const CACHE_NAME = 'Ko Petrus';
const urlsToCache = [
  'index.html',
  'game.html',
  'css/style.css',
  'js/game.js',
  'manifest.json',
  'offline.html',
  'camera.html',
  'admin.html',
  'data.html',
  

  // FONT
  'assets/font/MANGOLD.ttf',
  'assets/font/Wonder\ Boys\ -\ Personal\ Use.ttf',
  'assets/font/JungleAdventurer.otf',

  // GAMBAR
  'assets/images/background-lanscape.jpg',
  'assets/images/background-potrait.jpg',
  'assets/images/frame.png',
  'assets/images/logo.png',
  'assets/images/target-area1.png',
  'assets/images/target-area3.png',
  'assets/images/fotoo.png',
  'assets/images/winner.png',

  // SOUNDS
  'assets/sounds/bgm.mp3',
  'assets/sounds/win.mp3',
  'assets/sounds/lose.mp3',
  'assets/sounds/countdown.mp3',
  'assets/sounds/tap.mp3'
  
];

// Install: cache semua resource
self.addEventListener('install', event => {
  self.skipWaiting(); // aktifkan langsung
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async cache => {
        console.log('Mulai caching semua file game...');
        await Promise.all(
          urlsToCache.map(url =>
            fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`Gagal fetch ${url}`);
                }
                return cache.put(url, response.clone());
              })
              .catch(err => {
                console.warn('❌ Gagal cache:', url, err);
              })
          )
        );
        console.log('✅ Semua file selesai dicoba cache.');
      })
  );
});
// Fetch: ambil dari cache, fallback ke offline.html jika gagal
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request).catch(() => caches.match('offline.html')))
  );
});

// Activate: bersihkan cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim(); // ambil alih kontrol
});
