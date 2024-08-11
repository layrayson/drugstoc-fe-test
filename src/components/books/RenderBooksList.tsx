import { BookInterface } from "../../lib/types";
import BookPreview from "./BookPreview";

type Props = {
  books: BookInterface[];
};
export const RenderBooksGrid = ({ books }: Props) => {
  return (
    <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-2">
      {books.map(
        (
          { volumeInfo: { title, imageLinks, authors, publishedDate } },
          index
        ) => (
          <BookPreview
            key={"book-" + index}
            title={title}
            content={""}
            blogImage={
              imageLinks?.thumbnail || "/assets/images/no_image_placeholder.svg"
            }
            author={
              authors && authors.length > 0 ? authors[0] : "Unknown Author"
            }
            updatedAt={publishedDate || ""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )
      )}
    </div>
  );
};
