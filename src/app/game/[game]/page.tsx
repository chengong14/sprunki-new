import GameLayout from '@/app/components/GameLayout';

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
    const games = await response.json();
    return games.map((game: Game) => ({ game: game.game }));
  } catch (error) {
    // 提供默认的游戏列表作为后备方案
    const fallbackGames = [
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
    console.warn('Failed to fetch games during build, using fallback data:', error);
    return fallbackGames;
  }
}

export default async function Page({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const decodedGame = decodeURIComponent(game || '');
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/games`, { cache: 'no-store' });
  const games = await response.json();
  const page = games.find((g: Game) => g.game === decodedGame);
  
  if (!page) {
    throw new Error('Not Found');
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
}