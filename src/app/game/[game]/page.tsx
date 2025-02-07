import GameLayout from '@/app/components/GameLayout';

interface Game {
  game: string;
  iframe: string;
  description: string;
}

// 替代 getStaticPaths 的写法
export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/games`, { cache: 'no-store' });
  const games = await response.json();
  return games.map((game: Game) => ({ game: game.game }));
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