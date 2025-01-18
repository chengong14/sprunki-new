import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Relish',
  description: 'Experience Sprunki Relish, a unique and flavorful twist on the Sprunki universe featuring relish-themed characters and vibrant soundscapes.',
};

export default function Relish() {
  return (
    <GameLayout
      gameUrl="https://sprunki-games.com/sprunki-but-relish.embed"
      version="Relish"
      description={
        <div className="space-y-8 max-w-3xl mx-auto mt-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sprunki Relish: A Zesty Twist on Music Creation
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Dive into the vibrant and playful world of Sprunki Relish, a delightful mod that adds a quirky and flavorful twist to the Sprunki universe. This unique mod infuses the game with a relish-inspired theme, featuring fresh character designs, distinctive animations, and lively soundscapes. Sprunki Relish is perfect for fans seeking a lighthearted and imaginative music-creation experience.
          </p>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">What is Sprunki Relish?</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sprunki Relish is a mod that reimagines the Sprunki experience with a focus on a &quot;relish&quot; theme. This translates into:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-purple-400">Fresh Designs:</span>{' '}
                New character designs inspired by the concept of relish, offering a visually refreshing experience.
              </li>
              <li>
                <span className="font-bold text-purple-400">Distinctive Animations:</span>{' '}
                Unique animations that complement the relish theme, adding visual flair to the music creation process.
              </li>
              <li>
                <span className="font-bold text-purple-400">Lively Soundscapes:</span>{' '}
                New sound effects and melodies that create a vibrant and energetic atmosphere.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Why Play Sprunki Relish?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="font-bold text-purple-400">Lighthearted Fun:</span>{' '}
                Offers a fun and playful take on the Sprunki formula.
              </li>
              <li>
                <span className="font-bold text-purple-400">Creative Music Creation:</span>{' '}
                Provides new tools and elements for creating unique and imaginative music.
              </li>
              <li>
                <span className="font-bold text-purple-400">Complements Other Mods:</span>{' '}
                Pairs well with other popular Sprunki mods like Sprunki Mustard and Sprunki Ketchup, expanding the overall gameplay experience.
              </li>
              <li>
                <span className="font-bold text-purple-400">Unique Theme:</span>{' '}
                Stands out with its distinctive relish theme, offering a fresh perspective within the Sprunki universe.
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
} 