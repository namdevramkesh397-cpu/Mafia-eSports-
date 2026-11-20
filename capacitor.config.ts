import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mafiaesports.app',
  appName: 'Mafia eSports',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: [
      '*.firebaseapp.com',
      '*.googleapis.com',
      'accounts.google.com',
      '*.cashfree.com',
      '*.zapupi.com',
    ],
  },
  android: {
    allowMixedContent: true,
  },
};

export default config;
