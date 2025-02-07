import GameLayout from '@/app/components/GameLayout';
import { notFound } from 'next/navigation';

interface Game {
  game: string;
  iframe: string;
  description: string;
}

// 替代 getStaticPaths 的写法
export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/games`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch games: ${response.status}`);
    }
    const games = await response.json();
    return games.map((game: Game) => ({ game: game.game }));
  } catch (error) {
    console.warn('Failed to fetch games during build, using fallback data:', error);
    return [
      { game: 'phase1' },
      { game: 'phase2' },
      { game: 'phase3' },
      { game: 'phase4' },
      { game: 'phase5' },
      { game: 'phase6' },
      { game: 'phase7' },
      { game: 'phase8' },
      { game: 'phase9' },
      { game: 'phase10' },
      { game: 'glitch' }
    ];
  }
}

export default async function Page({ params, searchParams }: any) {
  // 如果 searchParams 未使用，可在下一行消耗它
  void searchParams;

  try {
    const decodedGame = decodeURIComponent(params.game || '');
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/games`, { 
      cache: 'no-store',
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch game data: ${response.status}`);
    }

    const games = await response.json();
    const page = games.find((g: { game: string; iframe: string; description: string }) => g.game === decodedGame);
    
    if (!page) {
      return notFound();
    }

    return (
      <GameLayout
        gameUrl={page.iframe}
        version={page.game}
        description={
          <div 
            className="game-description"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />
        }
      />
    );
  } catch (error) {
    console.error('Error in game page:', error);
    throw error;
  }
}