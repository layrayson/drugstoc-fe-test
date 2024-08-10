export const checkIfHasNextPage = ({
  count,
  currentPage,
  limit,
}: {
  count: number;
  currentPage: number;
  limit: number;
}) => count > currentPage * limit;
