import Header from './components/Header';
import GameSection from './components/GameSection';
import VideoSection from './components/VideoSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';

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
