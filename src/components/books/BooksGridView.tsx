import { useEffect, useMemo } from "react";
import { useFetchBooks } from "../../lib/hooks";
import { useInView } from "react-intersection-observer";

const BooksGridView = () => {
  const { data, status, fetchNextPage, isFetchingNextPage } = useFetchBooks({
    search: "",
  });

  const { ref, inView } = useInView();

  const paginatedBooks = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.result) || [];
  }, [data]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return <div>{}</div>;
};

export default BooksGridView;
