'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 6',
};
export default function Phase6() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-phase-6"
      version="Phase 6"
    />
  );
} 