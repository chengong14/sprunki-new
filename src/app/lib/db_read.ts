import sql from '@/app/lib/db_connect';
import { Game } from '@/app/lib/types';

export async function getGames(): Promise<Game[]> {
    const rows = await sql`
        SELECT id, game, search_url, img_url, iframe, description 
        FROM game_results
    ` as Game[];
    return rows;
}