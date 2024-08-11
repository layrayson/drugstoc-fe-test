import { useEffect, useMemo } from "react";
import { useFetchBooks } from "../../lib/hooks";
import { useInView } from "react-intersection-observer";
import { RenderBooksGrid } from "./RenderBooksList";
import BooksLoaderSkeleton from "./BooksLoaderSkelton";
import { LinearProgress } from "../custom/LinearProgress";
import { useSearchParams } from "react-router-dom";

const BooksGridView = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("title") || "";

  const { data, status, fetchNextPage, isFetchingNextPage } = useFetchBooks({
    q: searchQuery,
  });

  const { ref, inView } = useInView();

  const paginatedBooks = useMemo(() => {
    return data?.pages.flatMap((page) => page.items) || [];
  }, [data]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <div>
      {status === "pending" ? (
        <BooksLoaderSkeleton />
      ) : (
        <RenderBooksGrid books={paginatedBooks} />
      )}
      <LinearProgress />
    </div>
  );
};

export default BooksGridView;
