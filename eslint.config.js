import firebaseRulesPlugin from '@firebase/eslint-plugin-security-rules';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/**/*']
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
  })),
  firebaseRulesPlugin.configs['flat/recommended'],
];
