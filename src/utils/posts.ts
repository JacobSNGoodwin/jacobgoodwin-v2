import { MarkdownInstance } from 'astro';
import lodash from 'lodash';
import { PostFrontmatter } from 'src/types';

const { orderBy, filter, includes } = lodash;

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
