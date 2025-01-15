import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Craft',
  description: 'Experience the Craft version of Sprunki, special sounds, animations, and rhythms make Sprunki Craft unique and provide a fun experience.',
};

export default function Craft() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-craft"
      version="Craft"
    />
  );
} 