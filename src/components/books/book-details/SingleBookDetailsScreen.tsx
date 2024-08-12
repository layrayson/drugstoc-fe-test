import { useParams } from "react-router-dom";
import { useFetchSingleBook } from "../../../lib/hooks";
import BookDetailedView from "./BookDetailedView";
import { getAuthors } from "../../../lib/helpers/getAuthors.helper";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SingleBookDetailsScreen = () => {
  const { bookId = "" } = useParams();
  const {
    data: bookDetails,
    isLoading,
    error,
  } = useFetchSingleBook({ bookId });

  useEffect(() => {
    if (!error) return;
    toast.error("Something went wrong");
  }, [error]);

  return (
    <div>
      <BookDetailedView
        title={bookDetails?.volumeInfo.title.substring(0, 30)}
        content={bookDetails?.volumeInfo.description}
        bookImage={
          bookDetails?.volumeInfo.imageLinks?.small ??
          bookDetails?.volumeInfo.imageLinks?.thumbnail ??
          "/assets/images/no_image_placeholder.svg"
        }
        author={getAuthors({
          authors: bookDetails?.volumeInfo.authors,
          detailed: true,
        })}
        publishedAt={bookDetails?.volumeInfo.publishedDate}
        showSkeleton={isLoading || !bookDetails}
      />
    </div>
  );
};

export default SingleBookDetailsScreen;
