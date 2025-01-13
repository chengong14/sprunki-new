'use client';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface GameLayoutProps {
  gameUrl: string;
  version: string;
}

const GameLayout = ({ gameUrl, version }: GameLayoutProps) => {
  const gameVersions = [
    { name: 'Glitch', href: '/glitch', current: version === 'Glitch' },
    { name: 'Phase 9', href: '/phase9', current: version === 'Phase 9' },
    { name: 'Phase 8', href: '/', current: version === 'Phase 8' },
    { name: 'Phase 7', href: '/phase7', current: version === 'Phase 7' },
    { name: 'Phase 6', href: '/phase6', current: version === 'Phase 6' },
    { name: 'Phase 5', href: '/phase5', current: version === 'Phase 5' },
    { name: 'Phase 4', href: '/phase4', current: version === 'Phase 4' },
    { name: 'Phase 3', href: '/phase3', current: version === 'Phase 3' },
    { name: 'Phase 2', href: '/phase2', current: version === 'Phase 2' },
    { name: 'Phase 1', href: '/phase1', current: version === 'Phase 1' },
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  {version === 'Glitch' ? 'Sprunki Glitch - A Unique Musical Experience' : `Sprunki ${version} - A Creative Music Gaming Experience`}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-1"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <iframe
                    src={gameUrl}
                    className="w-full h-[700px]"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>

            {/* Side Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-64 shrink-0"
            >
              <div className="sticky top-24 bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Game Versions
                </h2>
                <nav className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                  {gameVersions.map((gameVersion) => (
                    <Link
                      key={gameVersion.name}
                      href={gameVersion.href}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                        gameVersion.current
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {gameVersion.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-gray-400 mb-4">Quick Links</h4>
                  <nav className="space-y-2">
                    <Link href="/#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      About
                    </Link>
                    <Link href="/#guide" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      How to Play
                    </Link>
                    <Link href="/#videos" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      Videos
                    </Link>
                    <Link href="/#reviews" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      Reviews
                    </Link>
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GameLayout; 