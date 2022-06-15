type Tag = {
  title: string;
  path: string;
  description?: string;
  imageUrl?: string;
};

export const blogTags: Tag[] = [
  {
    title: 'Travel',
    path: 'travel',
  },
  {
    title: 'Outings',
    path: 'outings',
  },
  {
    title: 'Beliefs',
    path: 'beliefs',
  },
];
