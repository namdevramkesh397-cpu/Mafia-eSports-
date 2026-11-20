// Service Worker for Mafia eSports Mobile Notifications

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from web application to display mobile status bar notification
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, icon, badge, data, tag } = event.data;
    
    const options = {
      body: body || 'You have a new update from Mafia eSports',
      icon: icon || '/ff-india-logo.jpg',
      badge: badge || '/ff-india-logo.jpg',
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

// Handle push events (for background push notifications)
self.addEventListener('push', (event) => {
  let notifData = {
    title: 'Mafia eSports Notification',
    body: 'New match update available',
    icon: '/ff-india-logo.jpg',
    badge: '/ff-india-logo.jpg',
    data: {}
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      notifData = { ...notifData, ...parsed };
    } catch (e) {
      notifData.body = event.data.text();
    }
  }

  event.waitUntil(
    self.registration.showNotification(notifData.title, {
      body: notifData.body,
      icon: notifData.icon || '/ff-india-logo.jpg',
      badge: notifData.badge || '/ff-india-logo.jpg',
      vibrate: [200, 100, 200],
      tag: notifData.tag || 'mafia-esports-push',
      renotify: true,
      data: notifData.data || {}
    })
  );
});

// When user taps the notification in mobile notification bar
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a window is already open, focus it
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
      // Otherwise open a new window
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
