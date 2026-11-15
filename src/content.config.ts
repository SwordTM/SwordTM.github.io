import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    categories: z.array(z.string()).default([]),
    // Optional preview image shown when hovering the post in a list, e.g. /images/my-post.png.
    // Without it, the preview is a live miniature of the post itself.
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    toc: z.boolean().default(true),
  }),
});

export const collections = { posts };
