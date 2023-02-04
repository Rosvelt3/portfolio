import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    title: z.string().max(60, 'Title must be less than 60 characters'),
    description: z.string().max(160, 'Description must be less than 155 characters'),
    category: z.enum(['React']),
    tags: z.array(z.string()),
    preview: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    date: z.date(),
    draft: z.boolean().default(false),
    author: z.enum(['Isaias De Leon Reyes'])
  }),
});

export const collections = {
  'blog': blogCollection,
};