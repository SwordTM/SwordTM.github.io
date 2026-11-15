import { getCollection } from 'astro:content';

/** All posts, newest first. Drafts are visible in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
