import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fediland.in.ua',
      lastModified: new Date(),
    },
    {
      url: 'https://fediland.in.ua/contacts',
      lastModified: new Date(),
    },
  ]
}