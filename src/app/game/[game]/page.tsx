import GameLayout from '@/app/components/GameLayout';
import { notFound } from 'next/navigation';
import { Game } from '@/app/lib/types';
import { Metadata } from 'next';

// 替代 getStaticPaths 的写法
export async function generateStaticParams() {
  try {
    // Get the protocol and host from the environment or use a default
    const baseUrl = 'https://www.sprunki-new.org'
    // const baseUrl = typeof window === 'undefined'
    //         ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`
    //         : '';
    const response = await fetch(`${baseUrl}/api/games`, { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

type PageProps = {
  params: Promise<{ game: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game } = await params;
  const decodedGame = decodeURIComponent(game || '');
  
  const baseUrl = 'https://www.sprunki-new.org'
  // const baseUrl = typeof window === 'undefined'
  //           ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`
  //           : '';
  const response = await fetch(`${baseUrl}/api/games`, { 
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.'
    };
  }
  
  const games = await response.json();
  const page = games.find((g: Game) => g.game === decodedGame);

  if (!page) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.'
    };
  }
  // console.log('metadata', page.metadata)
  return {
    title: page.metadata?.title || `${page.game} - Sprunki`,
    description: page.metadata?.description || page.description,
    keywords: page.metadata?.keywords || [page.game, 'sprunki', 'game'],
    openGraph: {
      title: page.metadata?.title || `${page.game} - Sprunki`,
      description: page.metadata?.description || page.description,
      images: [
        {
          url: page.metadata?.image || page.img_url,
          width: 1200,
          height: 630,
          alt: `${page.game} preview image`
        }
      ]
    }
  };
}

export default async function Page(props: PageProps) {
  const { params, searchParams } = props;
  void await searchParams;
  const { game } = await params;
  const decodedGame = decodeURIComponent(game || '');
  
  const baseUrl = 'https://www.sprunki-new.org'
  // const baseUrl = typeof window === 'undefined'
  //           ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`
  //           : '';
  const response = await fetch(`${baseUrl}/api/games`, { 
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch game data: ${response.status}`);
  }
  
  const games = await response.json();
  const page = games.find(
    (g: Game) => g.game === decodedGame
  );

  if (!page) {
    return notFound();
  }
  
  return (
    <GameLayout
      // gameUrl={`/game/${decodeURIComponent(page.game)}/proxy?game=${page.game}`}
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