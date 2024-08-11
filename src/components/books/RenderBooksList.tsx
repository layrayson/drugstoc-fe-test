import { useNavigate } from "react-router-dom";
import { BookInterface } from "../../lib/types";
import BookPreview from "./BookPreview";
import { getAuthors } from "../../lib/helpers/getAuthors.helper";

type Props = {
  books: BookInterface[];
};
export const RenderBooksGrid = ({ books }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-2">
      {books.map(
        (
          { id, volumeInfo: { title, imageLinks, authors, publishedDate } },
          index
        ) => (
          <BookPreview
            key={"book-" + index}
            title={title}
            content={""}
            bookImage={
              imageLinks?.thumbnail || "/assets/images/no_image_placeholder.svg"
            }
            author={getAuthors({ authors })}
            publishedAt={publishedDate}
            onClick={() => navigate("/books/" + id)}
          />
        )
      )}
    </div>
  );
};
