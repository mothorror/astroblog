import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章内容验证
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: () => z.object({
    title: z.string().min(1).max(100),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string().min(1).max(200),
    category: z.string().max(50).optional(),
    tags: z.array(z.string().max(30)).max(10).optional(),
    backgroundImage: z.string().url().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

// 资源下载内容验证
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: () => z.object({
    name: z.string().min(1).max(100),
    version: z.string().max(20).optional(),
    description: z.string().min(1).max(200),
    downloadUrl: z.string().url(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  blog,
  resources,
};
