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

