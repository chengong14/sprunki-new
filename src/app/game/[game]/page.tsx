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

interface PageProps {
  params: Promise<{ game: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page(props: PageProps) {
  try {
    const { params, searchParams } = props;
    void await searchParams;
    const { game } = await params;
    const decodedGame = decodeURIComponent(game || '');

    console.log("Fetching game data for:", decodedGame);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    console.log("Using baseUrl:", baseUrl);
    
    const response = await fetch(`${baseUrl}/api/games`, { 
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 }, // Disable cache in production
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error(`API response error: ${response.status}`);
      throw new Error(`Failed to fetch game data: ${response.status}`);
    }
    
    const games = await response.json();
    if (!Array.isArray(games)) {
      console.error('Invalid games data format:', games);
      throw new Error('Invalid games data format');
    }
    
    console.log("Total games fetched:", games.length);
    
    const page = games.find((g: Game) => g.game === decodedGame);
    console.log("Found game:", page ? "yes" : "no");
    if (page) {
      console.log("Game details:", { game: page.game, hasIframe: !!page.iframe });
    }

    if (!page) {
      console.log("Game not found:", decodedGame);
      return notFound();
    }
    
    if (!page.iframe) {
      throw new Error(`Game ${decodedGame} found but has no iframe URL`);
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
    console.error("Error in game page:", error);
    throw new Error(`Failed to render game page: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}