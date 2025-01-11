'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 4',
};
export default function Phase4() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12169576/index.html"
      version="Phase 4"
    />
  );
} 