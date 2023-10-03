import type { MDXInstance } from 'astro';
import lodash from 'lodash';
import type { PostFrontmatter } from 'src/types';

const { orderBy, filter, includes } = lodash;

export const queryPosts = (
  posts: MDXInstance<PostFrontmatter>[],
  filters?: {
    tag?: string;
  }
) => {
  const filteredPosts = filter(posts, (post) => {
    return includes(post.frontmatter.tags, filters?.tag);
  });

  return orderBy(
    !!filters?.tag ? filteredPosts : posts,
    ['frontmatter.date'],
    ['desc']
  );
};
