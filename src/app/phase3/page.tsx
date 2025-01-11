import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 3',
  description: 'Play Sprunki Phase 3, one of the early versions of this creative fan-made Incredibox mod series.',
};

export default function Phase3() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12421891/index.html"
      version="Phase 3"
    />
  );
} 