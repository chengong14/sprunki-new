'use client';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

interface GameLayoutProps {
  gameUrl: string;
  version: string;
  description?: React.ReactNode;
}

const GameLayout = ({ gameUrl, version, description }: GameLayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
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
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                    allowFullScreen
                  />
                </div>
              </motion.div>

              {/* Phase Versions Navigation - Shows after game on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden w-full mt-8"
              >
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-xl">
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Phase Versions
                  </h2>
                  <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {gameVersions.map((gameVersion) => (
                      <Link
                        key={gameVersion.name}
                        href={gameVersion.href}
                        className={`block px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base ${
                          gameVersion.current
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {gameVersion.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </motion.div>

              {/* More Sprunki Games Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-white"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  More Sprunki Games
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                  <Link href="/scratch" className="group">
                    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <div className="relative h-48">
                        <img
                          src="/img/scratch.jpg"
                          alt="Scratch Game"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-purple-400">Scratch</h3>
                        <p className="text-gray-300">It is the most popular Scratch project ever produced.</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/babies" className="group">
                    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <div className="relative h-48">
                        <img
                          src="/img/babies.jpg"
                          alt="Babies Game"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-purple-400">Babies</h3>
                        <p className="text-gray-300">Cute baby characters special to the mode.</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/craft" className="group">
                    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <div className="relative h-48">
                        <img
                          src="/img/craft.jpg"
                          alt="Craft Game"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-purple-400">Craft</h3>
                        <p className="text-gray-300">this version brings together the Cubic Pixel World and the Sprunki Incredibox mode.</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/relish" className="group">
                    <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <div className="relative h-48">
                        <img
                          src="/img/relish.jpg"
                          alt="Relish Game"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-purple-400">Relish</h3>
                        <p className="text-gray-300">Experience the unique blend of relish-themed musical elements in this special mode.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>

              {/* Game Description Section */}
              {description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {description}
                </motion.div>
              )}
            </div>

            {/* Desktop Side Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block lg:w-64 shrink-0"
            >
              <div className="sticky top-24 bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Phase Versions
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

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="w-6 h-6" />
      </motion.button>
    </main>
  );
};

export default GameLayout; 