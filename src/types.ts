export type NavItem = {
  title: string;
  path: string;
};

export type Tag = {
  title: string;
  name: string;
  description?: string;
  imageUrl?: string;
};

export type PostFrontmatter = {
  title: string;
  authors: string[];
  description: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
  keywords?: string[];
};

export type MetaTags = {
  title?: string;
  author?: string;
  description?: string;
  keywords?: string[];
  image?: string;
};
