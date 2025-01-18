import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Phase 1',
  description: 'Play Sprunki Phase 1, the first version of this creative fan-made Incredibox mod series.',
};

export default function Phase1() {
  return (
    <GameLayout
      gameUrl="https://html-classic.itch.zone/html/11407110/index.html"
      version="Phase 1"
      description={
        <div className="space-y-8 max-w-3xl mx-auto mt-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sprunki Phase 1: A Revolutionary Incredibox Mod
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Embark on a captivating journey with Sprunki Phase 1, a unique gaming experience that seamlessly blends adventure and puzzle-solving. Explore vibrant and dynamic environments filled with challenges, obstacles, and enemies. Sprunki Phase 1 encourages creativity and strategic thinking, inviting players to "think outside the box" to progress through its engaging levels.
          </p>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">History of Sprunki Phase 1</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              As the first installment in the Sprunki franchise, Phase 1 set the stage for engaging gameplay and a distinctive aesthetic. Since its release, it has attracted a dedicated following thanks to its innovative mechanics and charming design. Early player feedback played a crucial role in shaping the game, leading to updates that further enhanced the overall experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Gameplay Overview</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              In Sprunki Phase 1, players control a character navigating diverse levels, each with unique themes and challenges. The core gameplay revolves around:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Exploration and Navigation: Traverse varied environments, discovering hidden areas and secrets.</li>
              <li>Puzzle Solving: Solve intricate puzzles that require logical thinking and creative solutions.</li>
              <li>Obstacle Avoidance: Overcome a variety of obstacles that test your reflexes and strategic planning.</li>
              <li>Combat Encounters: Engage in combat with enemies, utilizing your skills and collected items.</li>
              <li>Item Collection and Power-Ups: Gather items and power-ups that enhance your abilities and aid in overcoming challenges.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Controls</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sprunki Phase 1 offers intuitive controls for both mouse and keyboard:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Mouse Controls:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Left Click: Interact with objects, select items, attack enemies.</li>
                  <li>Right Click: Use special abilities or perform context-sensitive actions.</li>
                  <li>Scroll Wheel: Zoom in/out on the map or character.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-purple-400 mb-2">Keyboard Controls:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>W/A/S/D: Movement (Up, Left, Down, Right).</li>
                  <li>Spacebar: Jump/Action.</li>
                  <li>E: Use/Pick up items.</li>
                  <li>Esc: Game Menu/Pause.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
} 