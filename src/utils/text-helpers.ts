export const getAuthorsText = (authors: string[]): string | null => {
  if (!authors) {
    return null;
  }
  const l = authors.length;
  if (!l) {
    return '';
  } else if (l === 1) {
    return authors[0];
  } else if (l === 2) {
    return `${authors[0]} and ${authors[1]}`;
  } else {
    return `${authors.slice(0, -1).join(', ')}, and ${authors[l - 1]}`;
  }
};
