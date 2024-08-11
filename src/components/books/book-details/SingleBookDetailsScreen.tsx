import { useParams } from "react-router-dom";
import { useFetchSingleBook } from "../../../lib/hooks";
import BookDetailedView from "./BookDetailedView";
import { getAuthors } from "../../../lib/helpers/getAuthors.helper";

const SingleBookDetailsScreen = () => {
  const { bookId = "" } = useParams();
  const { data: bookDetails, isLoading } = useFetchSingleBook({ bookId });

  return (
    <div>
      <BookDetailedView
        title={bookDetails?.volumeInfo.title.substring(0, 30)}
        content={bookDetails?.volumeInfo.description}
        bookImage={bookDetails?.volumeInfo.imageLinks?.thumbnail ?? ""}
        author={getAuthors({
          authors: bookDetails?.volumeInfo.authors,
          detailed: true,
        })}
        updatedAt={bookDetails?.volumeInfo.publishedDate}
        showSkeleton={isLoading || !bookDetails}
      />
    </div>
  );
};

export default SingleBookDetailsScreen;
