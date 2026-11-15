import rss from '@astrojs/rss';
import { site } from '../site.config';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/posts/${p.id}/`,
    })),
  });
}
