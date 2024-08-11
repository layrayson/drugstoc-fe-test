import { axiosClient } from "../axios";
import { constructQueryFromParams } from "../helpers/connstructQuery.helper";
import { FetchBooksRequestInput, FetchBooksResponse } from "../types";

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
}
