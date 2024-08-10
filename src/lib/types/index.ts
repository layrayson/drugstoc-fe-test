export type FetchBooksRequestInput = {
  search: string;
  batch: number;
  limit: number;
};

export type FetchBooksResponse = {};

export const BOOKS_PAGE_LIMIT = 20;
