import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 1',
  description: 'Discover where it all began with Sprunki Phase 1, the original version of this creative fan-made Incredibox mod.',
};

export default function Phase1() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/11407110/index.html"
      version="Phase 1"
    />
  );
} 