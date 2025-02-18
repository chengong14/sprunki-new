import GameLayout from '@/app/components/GameLayout';
import { notFound } from 'next/navigation';
import { Game } from '@/app/lib/types';
import { Metadata } from 'next';
import { getGames } from '@/app/lib/db_read';

export async function generateStaticParams() {
  try {
    const games = await getGames();
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
  
  try {
    const games = await getGames();
    const page = games.find((g: Game) => g.game === decodedGame);

    if (!page) {
      return {
        title: 'Game Not Found',
        description: 'The requested game could not be found.'
      };
    }

    return {
      title: page.metadata?.title || `${page.game} - Sprunki`,
      description: page.metadata?.description || page.description,
      keywords: page.metadata?.keywords || [page.game, 'sprunki', 'game'],
      openGraph: {
        title: page.metadata?.title || `${page.game} - Sprunki`,
        description: page.metadata?.description || page.description,
        images: [
          {
            url: page.img_url,
            width: 1200,
            height: 630,
            alt: `${page.game} preview image`
          }
        ]
      }
    };
  } catch (error) {
    console.log(error)
    return {
      title: 'Error',
      description: 'Failed to load game metadata'
    };
  }
}

export default async function Page(props: PageProps) {
  const { params, searchParams } = props;
  void await searchParams;
  const { game } = await params;
  const decodedGame = decodeURIComponent(game || '');
  
  try {
    const games = await getGames();
    const page = games.find((g: Game) => g.game === decodedGame);

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
    throw new Error(`Failed to fetch game data: ${error}`);
  }
}