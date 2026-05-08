import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    backgroundImage: z.string().optional(),
  }),
});

const resources = defineCollection({
  schema: z.object({
    name: z.string(),
    version: z.string().optional(),
    description: z.string(),
    downloadUrl: z.string(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  posts,
  resources,
};
