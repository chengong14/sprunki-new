'use client';
import Header from './components/Header';
import GameSection from './components/GameSection';
import VideoSection from './components/VideoSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sprunki phase 8',
};
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <GameSection />
      <VideoSection />
      <ReviewSection />
      <Footer />
    </main>
  );
}
