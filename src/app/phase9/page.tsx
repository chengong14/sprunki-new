'use client';
import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 9',
};
export default function Phase7() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12042371/index.html"
      version="Phase 9"
    />
  );
} 