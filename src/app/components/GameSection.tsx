'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GameSection = () => {
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
                Welcome to Sprunki Phase 8 - A Creative Music Gaming Experience
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
                  className="w-full h-[600px]"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="about"
              className="mt-12 text-white"
            >
              <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About the Game
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
                If you&apos;re a fan of Incredibox, get ready to be amazed by <span className="font-bold text-purple-400">Sprunki Incredibox</span>—a fan-made mod that elevates the original game&apos;s creativity and music-mixing fun to a whole new level. At <span className="font-bold text-purple-400">sprunki-new.org</span>, we&apos;re thrilled to present this dynamic and vibrant experience, packed with fresh features and unique elements that make it a must-play for music enthusiasts and gamers alike. This website contains all versions of sprunki phase.
              </p>
            </motion.div>

            {/* Guide Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
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
    </section>
  );
};

export default GameSection; 