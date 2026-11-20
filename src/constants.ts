import { Game, Tournament } from './types';

export interface GameMode {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export const GAME_MODES_DATA: Record<string, GameMode[]> = {
  freefire: [
    { id: 'br_solo', title: 'BR SOLO', subtitle: 'Battle Royale', category: 'Battle Royale', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'br_duo', title: 'BR DUO', subtitle: 'Battle Royale', category: 'Battle Royale', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'br_squad', title: 'BR SQUAD', subtitle: 'Battle Royale', category: 'Battle Royale', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'cs_solo', title: 'CS SOLO', subtitle: 'Clash Squad', category: 'Clash Squad', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'cs_duo', title: 'CS DUO', subtitle: 'Clash Squad', category: 'Clash Squad', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'cs_squad', title: 'CS SQUAD', subtitle: 'Clash Squad', category: 'Clash Squad', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'lone_wolf_solo', title: 'LONE WOLF SOLO', subtitle: 'Lone Wolf', category: 'Lone Wolf', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
    { id: 'lone_wolf_duo', title: 'LONE WOLF DUO', subtitle: 'Lone Wolf', category: 'Lone Wolf', image: '/src/assets/images/freefire_india_banner_1795181028683.jpg' },
  ]
};

export const GAMES: Game[] = [
  {
    id: 'freefire',
    title: 'Free Fire India',
    image: '/src/assets/images/freefire_india_logo_1795181027583.jpg',
    players: 850,
  }
];

export const ADMIN_EMAILS = [
  'namdevramkesh397@gmail.com',
  'qupagaming@gmail.com',
  'mahendrathakur9009@gmail.com',
  'mahendrar9009@gmail.com',
];

export const ADMIN_UIDS = [
  'XoXyXcnrlzOaMIKKolXnU3mT9xn1',
];

export function isAdminAccount(email?: string | null, uid?: string | null): boolean {
  const normalizedEmail = (email || '').trim().toLowerCase();
  return Boolean(
    (normalizedEmail && ADMIN_EMAILS.includes(normalizedEmail)) ||
    (uid && ADMIN_UIDS.includes(uid))
  );
}


