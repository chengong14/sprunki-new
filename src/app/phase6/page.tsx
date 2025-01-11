import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 6',
  description: 'Explore Sprunki Phase 6, a creative fan-made Incredibox mod that brings a dark twist to the rhythm game experience.',
};

export default function Phase6() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-phase-6"
      version="Phase 6"
    />
  );
} 