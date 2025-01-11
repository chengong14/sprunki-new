'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 3',
};
export default function Phase3() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12421891/index.html"
      version="Phase 3"
    />
  );
} 