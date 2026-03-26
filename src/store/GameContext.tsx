import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CardRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface Card {
  id: string;
  title: string;
  description: string;
  rarity: CardRarity;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  github: string;
  tags: string[];
  color: string;
}

export const CARDS_DB: Card[] = [
  { id: 'c1', title: 'Java Spring Boot', description: 'Arquitectura de microservicios escalables y robustos.', rarity: 'epic', icon: 'Coffee', color: 'from-orange-500 to-red-600' },
  { id: 'c2', title: 'React.js', description: 'Interfaces dinámicas, SPAs y componentes reutilizables.', rarity: 'epic', icon: 'Atom', color: 'from-cyan-400 to-blue-600' },
  { id: 'c3', title: 'Bases de Datos Relacionales', description: 'Optimización de consultas en SQL, SQLite, HSQLDB.', rarity: 'rare', icon: 'Database', color: 'from-emerald-400 to-green-600' },
  { id: 'c4', title: 'Control de Versiones', description: 'Git, Bitbucket, SourceTree. Flujos de trabajo limpios.', rarity: 'common', icon: 'GitBranch', color: 'from-gray-400 to-gray-600' },
  { id: 'c5', title: 'Gestión Ágil', description: 'Jira, metodologías ágiles, trabajo en equipo.', rarity: 'common', icon: 'Kanban', color: 'from-blue-400 to-indigo-600' },
  { id: 'c6', title: 'Desarrollo Frontend', description: 'HTML5, CSS3, Material UI, Tailwind.', rarity: 'rare', icon: 'Layout', color: 'from-pink-400 to-rose-600' },
  { id: 'c7', title: 'Integración API REST', description: 'Conexión fluida entre frontend y backend.', rarity: 'rare', icon: 'Network', color: 'from-violet-400 to-purple-600' },
  { id: 'c8', title: 'Java Swing', description: 'Mantenimiento evolutivo de aplicaciones de escritorio.', rarity: 'common', icon: 'Monitor', color: 'from-stone-400 to-stone-600' },
  { id: 'c9', title: 'Firebase', description: 'Autenticación y bases de datos en tiempo real.', rarity: 'rare', icon: 'Flame', color: 'from-yellow-400 to-orange-500' },
  { id: 'c10', title: 'FullStack Master', description: 'El ciclo completo de desarrollo dominado. ¡Contrátame!', rarity: 'legendary', icon: 'Crown', color: 'from-yellow-300 via-amber-500 to-yellow-600' },
];

export const PROJECTS_DB: Project[] = [
  {
    id: 'p1',
    title: 'ToolChest',
    description: 'Aplicación web gratuita para recortar y reescalar vídeos, eliminar fondos de imagen, convertir formatos, editar metadatos de PDFs y firmarlos.',
    url: 'https://toolchest.site',
    github: 'https://github.com/adrixnSS/file-converter-pro',
    tags: ['React', 'Video Processing', 'PDF Manipulation', 'Image Conversion'],
    color: 'from-emerald-400 to-cyan-500'
  },
  {
    id: 'p2',
    title: 'Nexus Chat',
    description: 'Plataforma de mensajería en tiempo real con encriptación de extremo a extremo, salas de voz y compartición de archivos.',
    url: '#',
    github: '#',
    tags: ['WebSockets', 'Node.js', 'React', 'Cryptography'],
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    id: 'p3',
    title: 'Aura Analytics',
    description: 'Dashboard interactivo para visualización de datos masivos. Permite conectar múltiples fuentes de datos y generar reportes exportables.',
    url: '#',
    github: '#',
    tags: ['D3.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'p4',
    title: 'EcoTrack',
    description: 'App móvil PWA para monitorizar la huella de carbono personal mediante el escaneo de tickets de compra y geolocalización.',
    url: '#',
    github: '#',
    tags: ['PWA', 'Firebase', 'Geolocation', 'React'],
    color: 'from-green-400 to-emerald-600'
  }
];

interface GameContextType {
  coins: number;
  addCoins: (amount: number) => void;
  collectedCards: string[];
  buyPack: () => Card | null;
  hasCollectedAll: boolean;
  unlockedProjects: string[];
  playMachine: () => Project | null;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState(0);
  const [collectedCards, setCollectedCards] = useState<string[]>([]);
  const [unlockedProjects, setUnlockedProjects] = useState<string[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedCoins = localStorage.getItem('portfolio_coins');
    const savedCards = localStorage.getItem('portfolio_cards');
    const savedProjects = localStorage.getItem('portfolio_projects');
    if (savedCoins) setCoins(parseInt(savedCoins, 10));
    if (savedCards) setCollectedCards(JSON.parse(savedCards));
    if (savedProjects) setUnlockedProjects(JSON.parse(savedProjects));
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('portfolio_coins', coins.toString());
    localStorage.setItem('portfolio_cards', JSON.stringify(collectedCards));
    localStorage.setItem('portfolio_projects', JSON.stringify(unlockedProjects));
  }, [coins, collectedCards, unlockedProjects]);

  const addCoins = (amount: number) => {
    setCoins((prev) => prev + amount);
  };

  const buyPack = () => {
    if (coins < 100) return null;
    setCoins((prev) => prev - 100);
    
    const uncollected = CARDS_DB.filter(c => !collectedCards.includes(c.id));
    
    let selectedCard: Card;
    if (uncollected.length > 0 && Math.random() > 0.3) {
      selectedCard = uncollected[Math.floor(Math.random() * uncollected.length)];
    } else {
      selectedCard = CARDS_DB[Math.floor(Math.random() * CARDS_DB.length)];
    }

    if (!collectedCards.includes(selectedCard.id)) {
      setCollectedCards((prev) => [...prev, selectedCard.id]);
    }

    return selectedCard;
  };

  const playMachine = () => {
    if (coins < 50) return null;
    
    const uncollected = PROJECTS_DB.filter(p => !unlockedProjects.includes(p.id));
    if (uncollected.length === 0) return null; // Machine is empty

    setCoins((prev) => prev - 50);
    
    // Pick a random uncollected project
    const selectedProject = uncollected[Math.floor(Math.random() * uncollected.length)];
    
    setUnlockedProjects((prev) => [...prev, selectedProject.id]);
    
    return selectedProject;
  };

  const hasCollectedAll = collectedCards.length === CARDS_DB.length;

  return (
    <GameContext.Provider value={{ coins, addCoins, collectedCards, buyPack, hasCollectedAll, unlockedProjects, playMachine }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};
