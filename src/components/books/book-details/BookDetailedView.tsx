import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface BookDetailedViewProps {
  title?: string;
  content?: string;
  bookImage?: string;
  author?: string;
  avatar?: string;
  updatedAt?: string;
  showSkeleton: boolean;
}
const BookDetailedView = ({
  title,
  content,
  bookImage,
  author,
  avatar,
  updatedAt,
  showSkeleton,
}: BookDetailedViewProps) => {
  const formatted = new Date(updatedAt ?? "");
  return (
    <SkeletonTheme highlightColor="#9999">
      <div>
        <div className="p-2">
          <div className="flex gap-4">
            <div className="flex-grow">
              <div>
                <h5 className="font-medium text-lg">
                  {" "}
                  {showSkeleton ? <Skeleton /> : author}
                </h5>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {showSkeleton ? (
                    <Skeleton />
                  ) : !updatedAt ? (
                    ""
                  ) : (
                    format(formatted, "do 'of' MMMM yyyy")
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {showSkeleton ? (
            <Skeleton className="w-full h-96 rounded" />
          ) : (
            <img
              alt={title ?? ""}
              src={bookImage ?? ""}
              className="w-full h-96 md:rounded transition duration-300 object-cover"
            />
          )}
        </div>
        <div className="py-2">
          <div className={showSkeleton ? "px-2 md:px-0" : "px-2"}>
            <div className="mb-2">
              <h5 className="text-5xl font-bold">
                {showSkeleton ? <Skeleton /> : title}
              </h5>
            </div>
            <div>
              <p className="text-xl font-normal">
                {showSkeleton ? (
                  <Skeleton />
                ) : (
                  <MarkdownPreview
                    source={content}
                    className="!bg-transparent !font-nunito !text-inherit"
                  />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default BookDetailedView;
