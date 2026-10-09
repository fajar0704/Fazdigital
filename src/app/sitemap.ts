import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/layanan',
    '/layanan/website-umkm',
    '/layanan/undangan-digital',
    '/layanan/landing-page',
    '/portofolio',
    '/harga',
    '/tentang',
    '/kontak',
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
