import BookPreview from "./BookPreview";

const BooksLoaderSkeleton = () => {
  return (
    <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-2">
      {[1, 2, 3].map((el, index) => (
        <BookPreview
          key={"post-skeleton" + index}
          title={""}
          content={""}
          bookImage={""}
          author={""}
          updatedAt={""}
          onClick={() => {}}
          showSkeleton={true}
        />
      ))}{" "}
    </div>
  );
};

export default BooksLoaderSkeleton;
