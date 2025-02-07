import pool from '@/app/lib/db_connect';
import { Game } from '@/app/lib/types';


export async function getGames(): Promise<Game[]> {
    const { rows } = await pool.query('SELECT game FROM games');
    return rows;
}