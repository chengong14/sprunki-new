import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 4',
  description: 'Experience Sprunki Phase 4, a unique take on the Incredibox formula with its own distinctive style and sound.',
};

export default function Phase4() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12169576/index.html"
      version="Phase 4"
    />
  );
} 