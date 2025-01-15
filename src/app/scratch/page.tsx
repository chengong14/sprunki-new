import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Scratch',
  description: 'Experience the Scratch version of Sprunki, it is the most popular Scratch project ever produced.',
};

export default function Scratch() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-scratch"
      version="Scratch"
    />
  );
} 