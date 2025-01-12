import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sprunki-new.org';
  
  // 所有游戏版本的路径
  const gameVersions = [
    '',  // 主页 (Phase 8)
    '/glitch',
    '/phase9',
    '/phase7',
    '/phase6',
    '/phase5',
    '/phase4',
    '/phase3',
    '/phase2',
    '/phase1',
  ];

  const currentDate = new Date();
  
  // 为每个路径创建站点地图条目
  const routes = gameVersions.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8, // 主页优先级最高
  }));

  return routes;
} 