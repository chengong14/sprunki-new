import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Babies',
  description: 'Experience the Babies version of Sprunki, Special sounds, animations and themes for Babies mode are available in this version.',
};

export default function Babies() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-babies"
      version="Babies"
    />
  );
} 