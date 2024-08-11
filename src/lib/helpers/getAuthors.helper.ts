export const getAuthors = ({
  authors,
  detailed,
}: {
  authors?: string[];
  detailed?: boolean;
}) => {
  if (!authors || authors.length === 0) return "Unknown author";

  if (!detailed) {
    if (authors.length === 1) {
      return authors[0];
    }
    return `${authors[0]} and ${authors.length - 1} other${
      authors.length - 1 > 1 ? "s" : ""
    }`;
  }

  if (detailed) {
    if (authors.length === 1) {
      return authors[0];
    }
    const lastAuthor = authors.pop();
    return `${authors.join(", ")} and ${lastAuthor}`;
  }
  return "Unknown Authors";
};
