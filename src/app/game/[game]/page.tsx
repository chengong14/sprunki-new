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

export default async function Page(props: any) {
  const { params, searchParams} = props as {
    params: { game: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  void searchParams;
  // 即使实际传入的是一个普通对象，用 Promise.resolve 安全地支持 thenable 调用
  const { game } = await Promise.resolve(params);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const response = await fetch(`${baseUrl}/api/games`, { 
    cache: 'no-store',
    next: { revalidate: 60 }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch game data: ${response.status}`);
  }
  
  const games = await response.json();
  const page = games.find(
    (g: { game: string; iframe: string; description: string }) => g.game === game
  );
  
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
}