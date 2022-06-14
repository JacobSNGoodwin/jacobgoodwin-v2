import { filter, includes, memoize, orderBy } from 'lodash';
import { AstroGlobal } from 'astro';
import { PostFrontmatter } from 'src/types';

const mdPostsFn = async (path: string, Astro: AstroGlobal) => {
  const allPosts = await Astro.glob<PostFrontmatter>(path);

  const all = orderBy(allPosts, ['date'], ['desc']);
  const getByTag = (tag: string) =>
    filter(all, (post) => includes(post.tags ?? [], tag));

  return {
    all,
    getByTag,
  };
};

export const createMarkdownPostManager = memoize(mdPostsFn);
