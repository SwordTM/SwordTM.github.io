import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../site.config';
import type { Item } from '../components/PostList.astro';

/** All posts, newest first. Drafts are visible in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const shortDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });

/** A post as a list row. The hover preview is the post's `image`, or a live miniature of the post. */
export const postItem = (p: CollectionEntry<'posts'>): Item => ({
  title: p.data.title,
  href: `/posts/${p.id}/`,
  when: shortDate(p.data.date),
  description: p.data.description,
  tags: p.data.categories,
  featured: p.data.featured,
  preview: p.data.image ?? `/posts/${p.id}/`,
  previewKind: p.data.image ? 'image' : 'page',
});

/** Projects as list rows, newest first. The hover preview is the project's `image`, if it has one. */
export const projectItems = (): Item[] =>
  [...site.projects]
    .sort((a, b) => b.year - a.year)
    .map((p) => ({
      title: p.name,
      href: p.url,
      when: String(p.year),
      description: p.description,
      external: /^https?:/.test(p.url),
      preview: p.image || undefined,
      previewKind: 'image',
    }));
