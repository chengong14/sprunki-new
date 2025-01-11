'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 7',
};
export default function Phase7() {
  return (
    <GameLayout
      gameUrl="https://www.twoplayergames.org/gameframe/sprunki-phase-7"
      version="Phase 7"
    />
  );
} 