
import { Discipline, ShopItem, RankingEntry, Mission, StudentRecord, Submission } from './types';

export const COLORS = {
  purple: '#6D28D9',
  deepPurple: '#4C1D95',
  neonBlue: '#06B6D4',
  digitalGreen: '#10B981',
  vibrantYellow: '#FACC15',
  bgDark: '#020617'
};

export const MISSIONS: Mission[] = [
  {
    id: '1',
    title: 'Explorador Digital',
    objective: 'Complete sua primeira aula de Robótica',
    reward: 250,
    rewardType: 'xp',
    progress: 0,
    maxProgress: 1,
    completed: false
  },
  {
    id: '2',
    title: 'Mestre da Lógica',
    objective: 'Acerte 5 desafios seguidos em Matemática',
    reward: 100,
    rewardType: 'coins',
    progress: 3,
    maxProgress: 5,
    completed: false
  },
  {
    id: '3',
    title: 'Social Player',
    objective: 'Compartilhe seu progresso com a turma',
    reward: 50,
    rewardType: 'coins',
    progress: 1,
    maxProgress: 1,
    completed: true
  }
];

export const MOCK_STUDENTS: StudentRecord[] = [
  { id: '1', name: 'Ana Luiza', email: 'ana@ceitec.edu', class: '9º Ano A', level: 12, xp: 4500, coins: 2100, missionsCompleted: 45, lastActive: '2 min atrás', avatar: '👩' },
  { id: '2', name: 'Alexia Mirella', email: 'alexia@ceitec.edu', class: '9º Ano A', level: 15, xp: 8200, coins: 3500, missionsCompleted: 62, lastActive: '10 min atrás', avatar: '👧' },
  { id: '3', name: 'André Anuzzi', email: 'andre@ceitec.edu', class: '1º EM', level: 10, xp: 3100, coins: 1200, missionsCompleted: 30, lastActive: '1 hora atrás', avatar: '👦' },
  { id: '4', name: 'Sandra C.', email: 'sandra@ceitec.edu', class: '8º Ano B', level: 8, xp: 2200, coins: 950, missionsCompleted: 15, lastActive: 'Ontem', avatar: '👩' },
];

export const MOCK_SUBMISSIONS: Submission[] = [
  { id: 'sub1', studentName: 'Ana Luiza', missionTitle: 'Circuito de LEDs', evidenceType: 'image', timestamp: '10:45 AM', status: 'pending' },
  { id: 'sub2', studentName: 'André Anuzzi', missionTitle: 'Lógica Python', evidenceType: 'text', timestamp: '11:20 AM', status: 'pending' },
  { id: 'sub3', studentName: 'Alexia Mirella', missionTitle: 'Protótipo Maker', evidenceType: 'video', timestamp: 'Ontem', status: 'approved' },
];

export const DISCIPLINES: Discipline[] = [
  { id: 'mat', name: 'Matemática', icon: '📐', color: 'from-blue-500 to-indigo-600', progress: 65, level: 12 },
  { id: 'por', name: 'Português', icon: '📚', color: 'from-pink-500 to-rose-600', progress: 40, level: 8 },
  { id: 'mak', name: 'Cultura Maker', icon: '🛠️', color: 'from-orange-500 to-amber-600', progress: 90, level: 15 },
  { id: 'com', name: 'Ciência da Computação', icon: '💻', color: 'from-cyan-500 to-blue-600', progress: 30, level: 5 },
  { id: 'emp', name: 'Empreendedorismo Digital', icon: '🚀', color: 'from-emerald-500 to-teal-600', progress: 55, level: 10 },
  { id: 'rob', name: 'Robótica', icon: '🤖', color: 'from-purple-500 to-violet-600', progress: 75, level: 14 },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: 's1', name: 'Skin Robô Dourado', description: 'Um visual épico para seu avatar', price: 1500, icon: '👑', category: 'avatar' },
  { id: 's2', name: 'XP em Dobro (1h)', description: 'Suba de nível 2x mais rápido', price: 500, icon: '⚡', category: 'powerup' },
  { id: 's3', name: 'Adesivo CEITEC', description: 'Adesivo físico para seu tablet', price: 300, icon: '🏷️', category: 'real' },
  { id: 's4', name: 'Cupom Cantina', description: 'Vale lanche na escola', price: 2000, icon: '🍎', category: 'real' },
];

export const RANKING: RankingEntry[] = [
  { rank: 1, name: 'Alexia Mirella', score: 21922, avatar: '👧' },
  { rank: 2, name: 'Ana Luiza', score: 10996, avatar: '👩', isCurrentUser: true },
  { rank: 3, name: 'André Anuzzi', score: 8130, avatar: '👦' },
  { rank: 4, name: 'Afonso Nunes', score: 5862, avatar: '👨' },
  { rank: 5, name: 'Alexandre Yudi', score: 4250, avatar: '👦' },
  { rank: 6, name: 'Sandra C.', score: 3160, avatar: '👩' },
];
