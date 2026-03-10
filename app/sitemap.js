// app/sitemap.js

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://semtechsoluciones.com.ar';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },

  ];
}