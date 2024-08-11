import { axiosClient } from "../axios";
import { constructQueryFromParams } from "../helpers/connstructQuery.helper";
import {
  FetchBooksRequestInput,
  FetchBooksResponse,
  FetchSingleBookRequestInput,
  FetchSingleBookResponse,
} from "../types";

export default class BookService {
  fetchBooks = async (params: FetchBooksRequestInput) =>
    await axiosClient
      .get<any, FetchBooksResponse>(
        `/volumes${constructQueryFromParams(params)}`
      )
      .then((response) => response)
      .catch((error) => {
        throw error;
      });

  fetchSingleBook = async (params: FetchSingleBookRequestInput) =>
    await axiosClient
      .get<any, FetchSingleBookResponse>(`/volumes/${params.bookId}`)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
}
