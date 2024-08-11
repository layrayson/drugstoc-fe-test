import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  BOOKS_PAGE_LIMIT,
  FetchBooksRequestInput,
  FetchSingleBookRequestInput,
} from "../types";
import BookService from "../services";
import { checkIfHasNextPage } from "../helpers/index.helper";

const bookService = new BookService();

export const useFetchBooks = (
  params: Omit<FetchBooksRequestInput, "batch" | "limit">
) => {
  return useInfiniteQuery({
    queryKey: ["fetch-books", params],
    queryFn: ({ pageParam }) =>
      bookService.fetchBooks({
        batch: pageParam,
        limit: BOOKS_PAGE_LIMIT,
        ...params,
      }),
    getNextPageParam: (lastPage, allPages) => {
      return checkIfHasNextPage({
        count: lastPage.totalItems,
        currentPage: allPages.length,
        limit: BOOKS_PAGE_LIMIT,
      })
        ? allPages.length + 1
        : undefined;
    },
    initialPageParam: 1,
  });
};

export const useFetchSingleBook = (params: FetchSingleBookRequestInput) => {
  return useQuery({
    queryKey: ["fetch-single-book", params.bookId],
    queryFn: () => bookService.fetchSingleBook(params),
  });
};
