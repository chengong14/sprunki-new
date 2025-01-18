'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const GameSection = () => {
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
    { name: 'Glitch', href: '/glitch', current: false },
    { name: 'Phase 9', href: '/phase9', current: false },
    { name: 'Phase 8', href: '/', current: true },
    { name: 'Phase 7', href: '/phase7', current: false },
    { name: 'Phase 6', href: '/phase6', current: false },
    { name: 'Phase 5', href: '/phase5', current: false },
    { name: 'Phase 4', href: '/phase4', current: false },
    { name: 'Phase 3', href: '/phase3', current: false },
    { name: 'Phase 2', href: '/phase2', current: false },
    { name: 'Phase 1', href: '/phase1', current: false },
  ];

  return (
    <section className="pt-24 pb-12 bg-gray-900">
      {/* Game Section */}
      <div id="game" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Main Content and Desktop Navigation */}
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
                  Welcome to Sprunki Phase
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://html-classic.itch.zone/html/12179361/index.html"
                    className="w-full h-[430px] sm:h-[500px] lg:h-[600px]"
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
                    {gameVersions.map((version) => (
                      <Link
                        key={version.name}
                        href={version.href}
                        className={`block px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors duration-200 text-center text-sm sm:text-base ${
                          version.current
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {version.name}
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

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                id="about"
                className="mt-12 text-white"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Introducing Sprunki Phase 8: A Chilling Addition to the Incredibox Universe
                </h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Sprunki Phase 8 is the eighth installment in the popular Sprunki Phase series, a collection of fan-made modifications for the rhythm game Incredibox. Developed on the Scratch platform, these mods add unique sounds, animations, and visuals to the game, taking it far beyond its original concept.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">What Makes Sprunki Phase 8 Special?</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="font-bold text-purple-400 mr-2">Horror-Themed Experience:</span>
                        Immerse yourself in a chilling atmosphere with special horror-themed versions of the iconic Incredibox characters.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-400 mr-2">Enhanced Sound Design:</span>
                        Explore a vast array of sound layers, including eerie rhythms, spooky melodies, and chilling ghostly effects, allowing for the creation of truly unique and spine-tingling musical compositions.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-400 mr-2">Unleash Hidden Animations:</span>
                        Discover special bonus animations that unlock when you combine sounds in unexpected ways, adding an extra layer of surprise and delight to the gameplay.
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-purple-400 mr-2">Dark and Atmospheric Visuals:</span>
                        Experience the horror theme visually with dark backgrounds and spooky character animations that enhance the game's immersive atmosphere.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">The Evolution of Sprunki Phase</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      The Sprunki Phase series began as a simple modification for Incredibox, but it has since evolved into a unique and captivating experience. Each phase introduces new elements, pushing the boundaries of creativity and offering players a fresh and exciting way to enjoy the game.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Guide Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                id="guide"
                className="mt-16 text-white"
              >
                <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  How to Play
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-purple-400">Explore Sounds</h3>
                    <p className="text-gray-300">Browse through a collection of beats, effects, melodies, and vocals to find the perfect elements for your track.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-purple-400">Assemble Your Track</h3>
                    <p className="text-gray-300">Drag and place the selected sounds onto characters to bring your musical ideas to life.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-purple-400">Experiment</h3>
                    <p className="text-gray-300">Mix and rearrange the sounds to discover interesting blends and create your signature music style.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-purple-400">Share or Save</h3>
                    <p className="text-gray-300">Proud of your creation? Save it to enjoy later or share it with your friends to spread the fun!</p>
                  </div>
                </div>
              </motion.div>
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
                  {gameVersions.map((version) => (
                    <Link
                      key={version.name}
                      href={version.href}
                      className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                        version.current
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {version.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-gray-400 mb-4">Quick Links</h4>
                  <nav className="space-y-2">
                    <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      About
                    </a>
                    <a href="#guide" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      How to Play
                    </a>
                    <a href="#videos" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      Videos
                    </a>
                    <a href="#reviews" className="block text-gray-300 hover:text-white transition-colors duration-200">
                      Reviews
                    </a>
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default GameSection; 