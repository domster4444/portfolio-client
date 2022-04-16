const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: '/home', changefreq: 'daily', priority: 0.9 },
    { url: '/about', changefreq: 'daily', priority: 0.9 },
    { url: '/contact', changefreq: 'daily', priority: 0.9 },
    { url: '/api/auth/login', changefreq: 'daily', priority: 0.8 },
    { url: '/pricing', changefreq: 'daily', priority: 0.9 },
    { url: '/blog', changefreq: 'daily', priority: 0.9 },
    {
      url: '/post/how-to-create-perfect-portfolio-website',
      changefreq: 'daily',
      priority: 0.4,
    },
    {
      url: '/post/benefits-of-havinga-portfolio-website',
      changefreq: 'daily',
      priority: 0.4,
    },
    {
      url: '/post/things-you-should-consider-while-building-your-perfect-portfolio-website',
      changefreq: 'daily',
      priority: 0.4,
    },
    {
      url: '/post/how-to-break-your-interview-process-by-online-presence',
      changefreq: 'daily',
      priority: 0.4,
    },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
