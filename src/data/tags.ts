import { PostsFolder, Tag } from 'src/types';

export const tags: Record<PostsFolder, Tag[]> = {
  blog: [
    {
      title: 'Travel',
      name: 'travel',
    },
    {
      title: 'Outings',
      name: 'outings',
    },
    {
      title: 'Thoughts',
      name: 'thoughts',
    },
  ],
  notes: [],
  professional: [],
};

// TODO - filter tags for POST templates
const isValidTag = (tag: string, tagType: PostsFolder) =>
  tags[tagType].findIndex((tagsOfType) => (tagsOfType.name = tag)) !== -1;
