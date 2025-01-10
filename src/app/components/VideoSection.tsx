'use client';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const VideoSection = () => {
  const videos = [
    'https://www.youtube.com/watch?v=b5AURwxKrmY',
    'https://www.youtube.com/watch?v=ezdLTJOTwY0',
  ];

  return (
    <section id="videos" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Watch and Learn
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out these gameplay videos to see Sprunki-Newest in action and discover the amazing music you can create!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {videos.map((url, index) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-1">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <div className="relative pt-[56.25%]">
                    <div className="absolute inset-0">
                      <ReactPlayer
                        url={url}
                        width="100%"
                        height="100%"
                        controls
                        light
                        playing={false}
                        className="!absolute !top-0 !left-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#game"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
          >
            Try It Yourself
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection; 