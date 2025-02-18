export async function GET(request: Request) {
    try {
        // Get the game parameter from the URL using URL API for better performance
        const url = new URL(request.url);
        const gameParam = url.pathname.split('/game/')[1].split('/proxy')[0];
        const decodedGame = decodeURIComponent(gameParam);
        
        // Get the game URL from the API
        const baseUrl = typeof window === 'undefined'
            ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`
            : '';
            
        const response = await fetch(`${baseUrl}/api/games`, {
            cache: 'no-store',
            headers: {
                'Accept': 'application/json'
            }
        });
        const games = await response.json();
        const game = games.find((g: { game: string, iframe: string }) => g.game === decodedGame);

        if (!game) {
            return new Response('Game not found', { status: 404 });
        }
        
        const targetUrl = game.iframe;
        
        // Prepare URLs once
        const baseUrlFromTarget = new URL(targetUrl).origin;
        const pathFromTarget = new URL(targetUrl).pathname.split('/').slice(0, -1).join('/');
        const basePath = `${baseUrlFromTarget}${pathFromTarget}/`;
        
        // Fetch the script.js content
        const scriptUrl = `${basePath}script.js`;
        let scriptContent = '';
        try {
            const scriptResponse = await fetch(scriptUrl, {
                headers: {
                    'Accept': '*/*',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
                }
            });
            scriptContent = await scriptResponse.text();
        } catch (error) {
            console.error('Error fetching script.js:', error);
        }

        const gameResponse = await fetch(targetUrl, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
            }
        });

        
        
        const html = await gameResponse.text();
        
        // Replace the script.js reference with the actual content
        const modifiedHtml = scriptContent 
            ? html.replace(
                /<script src=["'](?:\.\/)?script\.js["']><\/script>/,
                `<script>${scriptContent}</script>`
              )
            : html;
        
        return new Response(modifiedHtml, {
            status: 200,    
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Origin, Accept, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Max-Age": "86400",
                "Content-Security-Policy": "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
                "X-Frame-Options": "SAMEORIGIN",
                "Cache-Control": "public, max-age=3600",
                "Link": `<${baseUrl}/img/sprunki.jpg>; rel=preload; as=image`
            },
        });
    } catch (error) {
        console.error('Proxy fetch error:', error);
        return new Response('Error fetching game content', { status: 500 });
    }
}
