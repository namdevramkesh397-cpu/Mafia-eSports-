// Service Worker Notification Handlers for Mafia eSports (imported by Workbox PWA SW)

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, icon, badge, data, tag } = event.data;

    const options = {
      body: body || 'You have a new update from Mafia eSports',
      icon: icon || '/pwa-192x192.png',
      badge: badge || '/pwa-192x192.png',
      vibrate: [200, 100, 200, 100, 200],
      tag: tag || 'mafia-esports-' + Date.now(),
      renotify: true,
      requireInteraction: false,
      data: data || {},
      actions: [
        { action: 'open', title: 'Open App' },
        { action: 'dismiss', title: 'Dismiss' }
      ]
    };

    self.registration.showNotification(title || 'Mafia eSports Alert', options);
  }
});

self.addEventListener('push', (event) => {
  let notifData = {
    title: 'Mafia eSports Notification',
    body: 'New match update available',
    icon: '/pwa-192x192.png',
    badge: '/pwa-192x192.png',
    data: {}
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      notifData = { ...notifData, ...parsed };
    } catch {
      notifData.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(notifData.title, {
      body: notifData.body,
      icon: notifData.icon || '/pwa-192x192.png',
      badge: notifData.badge || '/pwa-192x192.png',
      vibrate: [200, 100, 200],
      tag: notifData.tag || 'mafia-esports-push',
      renotify: true,
      data: notifData.data || {}
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          if (event.notification.data && event.notification.data.actionPage) {
            client.postMessage({
              type: 'NAVIGATE_FROM_NOTIFICATION',
              actionPage: event.notification.data.actionPage,
              targetMatchId: event.notification.data.targetMatchId
            });
          }
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
