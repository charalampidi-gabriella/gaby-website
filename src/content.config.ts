import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TOPICS } from './lib/notes';

// The CMS saves untouched optional fields as empty strings; treat those as absent.
const blankAsUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' ? undefined : v), schema);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['article', 'video']).default('article'),
    topic: blankAsUndefined(z.enum(TOPICS).optional()),
    video: blankAsUndefined(z.string().url().optional()),
    image: blankAsUndefined(z.string().optional()),
    description: blankAsUndefined(z.string().optional()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
