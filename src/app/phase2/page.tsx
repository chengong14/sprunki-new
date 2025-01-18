import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 2',
  description: 'Experience Sprunki Phase 2, an early version of the fan-made Incredibox mod that started the journey.',
};

export default function Phase2() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/12105356/index.html"
      version="Phase 2"
      description={
        <div className="space-y-8 max-w-3xl mx-auto mt-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sprunki Phase 2: Dive into a Horror-Themed Incredibox Fan Mod
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            The Incredibox fan mod Sprunki has gained immense popularity, inspiring the creation of even more unique and immersive experiences. Sprunki Phase 2 takes the series in a darker direction, offering a compelling horror theme with surprising sounds, captivating animations, and a truly chilling atmosphere. If you enjoyed the original Sprunki, Phase 2 is a must-try.
          </p>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">What is Sprunki Phase?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase is the sequel series to the original Sprunki Incredibox mod. It distinguishes itself with more creative and intense horror themes. Each installment in the Sprunki Phase series features its own distinct sounds, animations, and rhythms, showcasing a clear evolution of the Sprunki characters and universe.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">How to Play Sprunki Phase 2</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Creating chilling soundscapes in Sprunki Phase 2 is simple and engaging:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-purple-400">Character Selection:</span>{' '}
                Begin by choosing one of the available characters. Each character boasts unique sounds and animations.
              </li>
              <li>
                <span className="font-bold text-purple-400">Drag and Mix:</span>{' '}
                Drag your chosen character to the designated area above to start creating beats. Experiment with different combinations to discover unique sounds and rhythms.
              </li>
              <li>
                <span className="font-bold text-purple-400">Unlock Hidden Features:</span>{' '}
                Explore and experiment within the game to uncover hidden features and surprises.
              </li>
              <li>
                <span className="font-bold text-purple-400">Activate Horror Theme:</span>{' '}
                Easily switch to the full horror theme using the half-moon icon located at the top of the screen.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Who Developed Sprunki Phase 2?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 2 is an independent project developed by dedicated fans of Incredibox. No official affiliation or credit is given.
            </p>
          </div>
        </div>
      }
    />
  );
} 