import { useSuspenseQuery } from '@tanstack/react-query';
import { Game } from '@/app/lib/types';

async function fetchGames(): Promise<Game[]> {
  // 根据环境构建正确的URL
  const url = typeof window === 'undefined'
    ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/games`
    : '/api/games';

  const response = await fetch(url, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  return response.json();
}

export function useGames() {
  return useSuspenseQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
    staleTime: 1000 * 60 * 60, // Consider data fresh for 1 hour
    gcTime: 1000 * 60 * 60 * 24, // Keep unused data in cache for 24 hours
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
} 