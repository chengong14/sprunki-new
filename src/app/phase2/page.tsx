import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 2',
  description: 'Experience Sprunki Phase 2, an early version of the fan-made Incredibox mod that started the journey.',
};

export default function Phase2() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12105356/index.html"
      version="Phase 2"
    />
  );
} 