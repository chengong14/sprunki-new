import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 10',
  description: 'Experience Sprunki Phase 10, a horror-themed fan-made Incredibox mod featuring unique soundscapes and redesigned characters.',
};

export default function Phase10() {
  return (
    <GameLayout
      gameUrl="https://imager.sprunkiphase3.com/game/sprunki-phase-10.html"
      version="Phase 10"
      description={
        <div className="space-y-8 max-w-3xl mx-auto mt-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sprunki Phase 10: A Deep Dive into Horror-Themed Music Creation
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Sprunki Phase 10 marks a significant evolution in the Sprunki Incredibox fan mod series. As the tenth installment, it delivers a dramatically different experience with completely redesigned characters, sounds, and animations, all within a dedicated horror theme. Prepare for a unique journey into dark and immersive soundscapes.
          </p>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">What is Sprunki Phase 10?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 10 represents the culmination of the Sprunki series&apos; evolution. Each phase has introduced changes, but Phase 10 takes it to a new level, offering a distinct Sprunki universe with a consistent horror theme. It&apos;s a testament to the creativity and dedication of the fan community.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">How to Play Sprunki Phase 10</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Creating music in Sprunki Phase 10 is intuitive and engaging:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-purple-400">Character Selection:</span>{' '}
                Choose from 20 unique Sprunki characters.
              </li>
              <li>
                <span className="font-bold text-purple-400">Add to Choir:</span>{' '}
                Incorporate selected characters into your musical arrangement.
              </li>
              <li>
                <span className="font-bold text-purple-400">Individual Control:</span>{' '}
                Play and stop each character independently to fine-tune your composition.
              </li>
              <li>
                <span className="font-bold text-purple-400">Dynamic Combinations:</span>{' '}
                Experiment with character placement to discover how different combinations alter the overall sound.
              </li>
              <li>
                <span className="font-bold text-purple-400">Theme Customization:</span>{' '}
                Adjust theme colors in the Settings menu for an optimized user interface.
              </li>
              <li>
                <span className="font-bold text-purple-400">Intuitive Controls:</span>{' '}
                Use your mouse or touch controls for seamless interaction.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Sprunki Phase 10 Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-purple-400">Redesigned Characters:</span>{' '}
                Experience completely new Sprunki character designs.
              </li>
              <li>
                <span className="font-bold text-purple-400">Unique Sounds and Animations:</span>{' '}
                Immerse yourself in a distinct Sprunki universe with original sounds and animations.
              </li>
              <li>
                <span className="font-bold text-purple-400">Music Creation Focus:</span>{' '}
                Enhance your musical creativity with powerful tools and features.
              </li>
              <li>
                <span className="font-bold text-purple-400">Cross-Platform Compatibility:</span>{' '}
                Play on both PC and mobile devices (phones, tablets, etc.).
              </li>
              <li>
                <span className="font-bold text-purple-400">Free and Offline Playable:</span>{' '}
                Enjoy the game anytime, anywhere, without needing an internet connection.
              </li>
              <li>
                <span className="font-bold text-purple-400">Popularity:</span>{' '}
                Recognized as one of the most popular phases, alongside Phase 4.
              </li>
              <li>
                <span className="font-bold text-purple-400">Horror Theme Only:</span>{' '}
                Dedicated to a chilling horror atmosphere.
              </li>
              <li>
                <span className="font-bold text-purple-400">Low System Requirements:</span>{' '}
                Optimized for performance on a wide range of devices.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Why is Sprunki Phase 10 So Popular?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 10&apos;s popularity stems from its unique sound loops and melodies, which distinguish it from previous phases. This distinct sonic landscape offers a fresh and compelling experience for players.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">What is Sprunki Phase 10 Scratch?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 10 is often developed as a fan-made project using Scratch. These independent productions reflect the individual visions of their creators. For more information on specific Scratch versions, search on the Scratch platform or YouTube.
            </p>
          </div>
        </div>
      }
    />
  );
} 