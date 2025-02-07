export async function GET(request: Request) {
  const targetUrl = "https://imager.sprunkiphase3.com/game/sprunki-phase-10.html"; // 替换成实际 iframe 链接
  const response = await fetch(targetUrl);
  const data = await response.text();

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}