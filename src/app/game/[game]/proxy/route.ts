export async function GET(request: Request) {
    // Get the game parameter from the URL
    const gameParam = request.url.split('/game/')[1].split('/proxy')[0];
    const decodedGame = decodeURIComponent(gameParam);
    
    // Get the game URL from the API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/games`, { cache: 'no-store' });
    const games = await response.json();
    const game = games.find((g: { game: string, iframe: string }) => g.game === decodedGame);

    if (!game) {
        return new Response('Game not found', { status: 404 });
    }
    
    const targetUrl = game.iframe;
    console.log("targeturl:", targetUrl);
    
    try {
        const response = await fetch(targetUrl, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
            }
        });
        
        const data = await response.text();
        
        // // 注入必要的脚本
        // const scriptInjection = `
        //     <script>
        //         console.log('Script injection started');
        //         window.addEventListener('DOMContentLoaded', function() {
        //             console.log('DOM Content Loaded');
                    
        //             function ScaffoldingClass() {
        //                 console.log('ScaffoldingClass constructor called');
        //                 this.addons = {};
        //                 this.options = {};
        //                 this.features = {};
        //                 this.initialize();
        //             }

        //             ScaffoldingClass.prototype.initialize = function() {
        //                 console.log('Scaffolding initialized');
        //                 // 添加基本功能
        //                 this.addons = {};
        //                 this.options = {
        //                     debug: true,
        //                     fullscreen: true,
        //                     frameRate: 60
        //                 };
        //                 this.features = {
        //                     sound: true,
        //                     graphics: true
        //                 };
        //             };

        //             ScaffoldingClass.prototype.addAddon = function(name, addon) {
        //                 console.log('Adding addon:', name);
        //                 this.addons[name] = addon;
        //             };

        //             // 创建全局 Scaffolding 对象
        //             window.Scaffolding = {
        //                 Scaffolding: ScaffoldingClass,
        //                 initialize: function() {
        //                     console.log('Root Scaffolding initialized');
        //                     return new ScaffoldingClass();
        //                 },
        //                 addons: {},
        //                 options: {},
        //                 features: {}
        //             };

        //             console.log('Scaffolding object created:', window.Scaffolding);
                    
        //             // 立即初始化一个实例
        //             const instance = new window.Scaffolding.Scaffolding();
        //             console.log('Scaffolding instance created:', instance);
        //         });
        //     </script>
        // `;
        
        // // 在 </body> 标签前注入脚本，确保 DOM 已经加载
        // if (data.includes('</body>')) {
        //     data = data.replace('</body>', `${scriptInjection}</body>`);
        // } else {
        //     // 如果没有找到 </body>，就放在 </head> 前
        //     data = data.replace('</head>', `${scriptInjection}</head>`);
        // }
        
        return new Response(data, {
            status: 200,    
            headers: {
                "Content-Type": "text/html",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Origin, Accept, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "86400",
                "Content-Security-Policy": "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
                "X-Frame-Options": "SAMEORIGIN"
            },
        });
    } catch (error) {
        console.error('Proxy fetch error:', error);
        return new Response('Error fetching game content', { status: 500 });
    }
}
