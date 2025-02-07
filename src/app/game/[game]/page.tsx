import pool from '@/app/lib/db_connect';
import GameLayout from '@/app/components/GameLayout';

interface Game {
  game: string;
}

interface PageParams {
  params: {
    game: string;
  };
}

interface PageProps {
  params: {
    game: string | string[] | undefined;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// 替代 getStaticPaths 的写法
export async function generateStaticParams() {
  // console.log('[DEBUG] generateStaticParams called');
  const { rows } = await pool.query('SELECT game FROM games');
  // console.log('[DEBUG] games fetched:', rows);
  return rows.map((row: Game) => ({ game: row.game }));
}

export default async function Page({ params, searchParams }: PageProps) {
  const { game } = await params;
  const decodedGame = decodeURIComponent(game?.toString() || '');
  const { rows } = await pool.query('SELECT * FROM games WHERE game = $1', [decodedGame]);
  if (rows.length === 0) {
      throw new Error('Not Found');
  }
  const page = rows[0];
  return (
    <GameLayout
      gameUrl={`/game/${encodeURIComponent(page.game)}/proxy`}
      version={page.game}
    />
  );
}