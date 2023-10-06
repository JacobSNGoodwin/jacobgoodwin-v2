import type { MDXInstance } from 'astro';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import type { PostFrontmatter } from 'src/types';

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
