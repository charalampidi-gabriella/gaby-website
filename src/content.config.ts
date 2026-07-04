import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TOPICS } from './lib/notes';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['article', 'video']).default('article'),
    topic: z.enum(TOPICS).optional(),
    video: z.string().url().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
