import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
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

const worksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    companyName: z.string(),
    dateRanges: z.array(z.object({
      since: z.date(),
      until: z.date().optional(),
    })),
    role: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  works: worksCollection,
};
