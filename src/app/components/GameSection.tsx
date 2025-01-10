'use client';
import { motion } from 'framer-motion';

const GameSection = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-900">
      {/* Game Section */}
      <div id="game" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.twoplayergames.org/gameframe/sprunki-phase-8"
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
            If you&apos;re a fan of Incredibox, get ready to be amazed by <span className="font-bold text-purple-400">Sprunki Incredibox</span>—a fan-made mod that elevates the original game&apos;s creativity and music-mixing fun to a whole new level. At <span className="font-bold text-purple-400">sprunki-new.org</span>, we&apos;re thrilled to present this dynamic and vibrant experience, packed with fresh features and unique elements that make it a must-play for music enthusiasts and gamers alike.
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
    </section>
  );
};

export default GameSection; 