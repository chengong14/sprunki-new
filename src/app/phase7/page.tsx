import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 7',
  description: 'Play Sprunki Phase 7, a unique version of the fan-made Incredibox mod with its own special characters and musical elements.',
};

export default function Phase7() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-phase-7"
      version="Phase 7"
    />
  );
} 