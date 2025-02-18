import { NextResponse } from 'next/server';
import { getGames } from '@/app/lib/db_read';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const games = await getGames();
    
    // Set cache control headers
    const response = NextResponse.json(games);
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    
    return response;
  } catch (error) {
    console.error('Error in /api/games route:', error);
    
    // 提供更详细的错误信息
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Unknown error occurred';
      
    return NextResponse.json(
      { 
        error: 'Failed to fetch games',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}