import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 3',
  description: 'Play Sprunki Phase 3, one of the early versions of this creative fan-made Incredibox mod series.',
};

export default function Phase3() {
  return (
    <GameLayout
      gameUrl="https://wowtbc.net/sprunki/phase-3/index.html"
      version="Phase 3"
      description={
        <div className="space-y-8 max-w-3xl mx-auto mt-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sprunki Phase 3: A Revolutionary Incredibox Mod
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Sprunki Phase 3 is a groundbreaking fan-made modification of Incredibox that reimagines the game's musical landscape. This latest installment in the popular sprunki series introduces fresh styles, contemporary soundscapes, and a host of innovative features that have captivated both seasoned Incredibox players and newcomers alike.
          </p>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Key Features:</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Visual Enhancements:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Unique, custom-designed characters with striking visual aesthetics.</li>
                  <li>Fluid animations that bring the interface to life.</li>
                  <li>Modern, refined visual elements that complement the music.</li>
                  <li>Thoughtfully crafted color schemes and captivating visual effects.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Musical Innovation:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>An expanded library of original sounds and beats.</li>
                  <li>A diverse range of musical genres and styles to explore.</li>
                  <li>Enhanced mixing capabilities for creating complex and sophisticated compositions.</li>
                  <li>Carefully balanced audio elements that deliver professional-quality output.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-2">User-Friendly Experience:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>An intuitive interface that maintains the accessibility of the original Incredibox.</li>
                  <li>A smooth learning curve suitable for players of all skill levels.</li>
                  <li>Quick and easy access to essential features and controls.</li>
                  <li>Responsive feedback systems for seamless user interaction.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Unleash Your Creativity:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Unlimited possibilities for musical experimentation.</li>
                  <li>Flexible mixing and matching of sound elements.</li>
                  <li>Support for a wide variety of musical styles and preferences.</li>
                  <li>Powerful tools for creating unique and personalized compositions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Experience the Evolution of Incredibox</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 3 seamlessly blends the beloved essence of Incredibox with innovative features that push the boundaries of musical creativity. This mod provides a platform for players to freely explore their musical inclinations, experiment with different combinations, and develop their own unique artistic voice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">A Testament to Fan Creativity</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sprunki Phase 3 serves as a powerful testament to the creative potential within the Incredibox community. This fan-made creation demonstrates how passionate players can meaningfully expand upon and enrich the original game experience while preserving its core appeal.
            </p>
          </div>
        </div>
      }
    />
  );
} 