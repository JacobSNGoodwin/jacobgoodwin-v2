import { MarkdownInstance } from 'astro';
import { orderBy, filter, includes } from 'lodash';
import { PostFrontmatter } from 'src/types';

export const queryPosts = (
  posts: MarkdownInstance<PostFrontmatter>[],
  filters: {
    tag?: string;
  }
) => {
  const filteredPosts = filter(posts, (post) => {
    return includes(post.frontmatter.tags, filters.tag || null);
  });
  return orderBy(filteredPosts, ['frontmatter.date'], ['desc']);
};
