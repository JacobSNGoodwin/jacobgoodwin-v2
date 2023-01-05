import { PostsFolder, Tag } from 'src/types';

// TODO - Add descriptions
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

// TODO - filter tags for Post templates
const isValidTag = (tag: string, tagType: PostsFolder) =>
  tags[tagType].findIndex((tagsOfType) => (tagsOfType.name = tag)) !== -1;
