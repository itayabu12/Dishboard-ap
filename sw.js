self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // נדרש כדי לעבור בדיקות התקנה של הדפדפן
});