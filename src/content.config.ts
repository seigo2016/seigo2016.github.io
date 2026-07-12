import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    category: z.enum(['professional', 'hobby']).optional(),
    challenge: z.string().optional(),
    role: z.string().optional(),
    architecture: z.string().optional(),
    outcome: z.string().optional(),
    detailUrl: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
