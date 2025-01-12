import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Glitch',
  description: 'Experience the Glitch version of Sprunki, a unique take on the Incredibox formula with special glitch effects and sounds.',
};

export default function Glitch() {
  return (
    <GameLayout
      gameUrl="https://www.cocrea.world/player/1877844066407403521"
      version="Glitch"
    />
  );
} 