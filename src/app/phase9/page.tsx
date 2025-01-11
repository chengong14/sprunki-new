import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 9',
  description: 'Experience Sprunki Phase 9, the latest version of the fan-made Incredibox mod. Featuring new characters, sounds, and a unique dark theme.',
};

export default function Phase9() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12042371/index.html"
      version="Phase 9"
    />
  );
} 