import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = 'https://www.innonsh.com';
  const pages = ['/', '/about-us', '/contact-us', '/solutions', '/privacy-policy', '/terms-of-services'];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `<url>
          <loc>${siteUrl}${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
