import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { MardownComponent } from "./MarkdownComponent";

interface BookDetailedViewProps {
  title?: string;
  content?: string;
  bookImage?: string;
  author?: string;
  avatar?: string;
  publishedAt?: string;
  showSkeleton: boolean;
}
const BookDetailedView = ({
  title,
  content,
  bookImage,
  author,
  avatar,
  publishedAt,
  showSkeleton,
}: BookDetailedViewProps) => {
  const formatted = publishedAt ? new Date(publishedAt) : "";
  return (
    <SkeletonTheme highlightColor="#9999">
      <div>
        <div className="pb-2">
          <div className="flex gap-4">
            <div className="flex-grow">
              <div>
                <h5 className="font-medium text-lg">
                  {" "}
                  {showSkeleton ? <Skeleton /> : `By ${author}`}
                </h5>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {showSkeleton ? (
                    <Skeleton />
                  ) : !publishedAt ? (
                    "Unknown"
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
              className="w-full h-96 md:rounded transition duration-300 object-contain bg-slate-100"
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
                  <MardownComponent content={content ?? ""} />
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
