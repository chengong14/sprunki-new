import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 5',
  description: 'Discover Sprunki Phase 5, an innovative fan-made Incredibox mod featuring unique sounds and characters.',
};

export default function Phase5() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12276301/index.html"
      version="Phase 5"
    />
  );
} 