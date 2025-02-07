import pool from '@/app/lib/db_connect';

export async function GET(request: Request) {
    // Get the game parameter from the URL
    const gameParam = request.url.split('/game/')[1].split('/proxy')[0];
    const decodedGame = decodeURIComponent(gameParam);
    
    // Get the game URL from the database
    const { rows } = await pool.query('SELECT iframe FROM games WHERE game = $1', [decodedGame]);
    if (rows.length === 0) {
        return new Response('Game not found', { status: 404 });
    }
    
    const targetUrl = rows[0].iframe;
    console.log("targeturl:", targetUrl);
    
    // Instead of fetching and returning content, redirect to the actual game URL
    return Response.redirect(targetUrl, 302);
}