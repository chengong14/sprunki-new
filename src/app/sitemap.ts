import { MetadataRoute } from 'next';
import { getGames } from '@/app/lib/db_read';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sprunki-new.org';
  
  // 所有游戏版本的路径
  const gameVersions = [
    '',  // 主页 (Phase 8)
    '/glitch',
    '/phase10',
    '/phase9',
    '/phase7',
    '/phase6',
    '/phase5',
    '/phase4',
    '/phase3',
    '/phase2',
    '/phase1',
    '/craft',
    '/scratch',
    '/babies',
    '/relish',
  ];

  const currentDate = new Date();
  
  // 直接从数据库获取游戏列表
  const games = await getGames();
  
  // 为每个路径创建站点地图条目
  const staticRoutes = gameVersions.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9, // 主页优先级最高
  }));

  // 为动态游戏页面创建站点地图条目
  const dynamicRoutes = games.map((game) => ({
    url: `${baseUrl}/game/${encodeURIComponent(game.game)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9, // 动态游戏页面优先级稍低
  }));

  // 合并静态和动态路由
  return [...staticRoutes, ...dynamicRoutes];
} 