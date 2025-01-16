import GameLayout from '../components/GameLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sprunki Relish',
  description: 'Welcome to Sprunki But Relish, a whimsical fan-made mod that puts a flavorful twist on the beloved Sprunki universe.  This reimagined version transforms the classic gameplay with a quirky relish-inspired theme, blending vibrant characters, dynamic visuals, and playful sounds to create a lively and immersive musical experience.',
};

export default function Relish() {
  return (
    <GameLayout
      gameUrl="https://sprunki-games.com/sprunki-but-relish.embed"
      version="relish"
    />
  );
} 