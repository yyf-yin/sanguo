import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const factionIds = ['han', 'wei', 'shu', 'wu', 'qun', 'jin'] as const;

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    courtesy: z.string().optional(), // 字
    born: z.number().optional(), // 公元年，未知则省略
    died: z.number().optional(),
    faction: z.enum(factionIds),
    title: z.string(), // 一句话身份
    hometown: z.string().optional(),
    summary: z.string(),
    novelNote: z.string().optional(), // 《三国演义》与史实的差异
    order: z.number().default(100),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    endYear: z.number().optional(),
    era: z.string(), // 年号，如“建安五年”
    kind: z.enum(['战役', '政治', '人物']),
    location: z.string().optional(),
    factions: z.array(z.enum(factionIds)).default([]),
    people: z.array(reference('people')).default([]),
    summary: z.string(),
    outcome: z.string().optional(),
  }),
});

export const collections = { people, events };
