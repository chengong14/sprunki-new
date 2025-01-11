'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 5',
};
export default function Phase5() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12276301/index.html"
      version="Phase 5"
    />
  );
} 