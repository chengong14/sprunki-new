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
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sprunki {version}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
            >
              Back to Home
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default GameLayout; 