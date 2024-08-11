import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface BookPreviewProps {
  title: string;
  content: string;
  bookImage: string;
  author: string;
  publishedAt?: string;
  onClick(): void;
  showSkeleton?: boolean;
}
const BookPreview = ({
  title,
  content,
  bookImage,
  author,
  publishedAt,
  onClick,
  showSkeleton = false,
}: BookPreviewProps) => {
  const formatted = publishedAt ? new Date(publishedAt) : "";
  return (
    <SkeletonTheme highlightColor="#9999">
      <a onClick={onClick} className="cursor-pointer">
        <div>
          <div className=" pb-2">
            <div>
              <div className="">
                <h5 className="font-medium text-lg truncate min-w-0">
                  {showSkeleton ? <Skeleton /> : author}
                </h5>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {showSkeleton ? (
                    <Skeleton />
                  ) : showSkeleton ? (
                    ""
                  ) : publishedAt ? (
                    format(formatted, "do 'of' MMMM yyyy")
                  ) : (
                    "Unknown"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div>
            {showSkeleton ? (
              <Skeleton className="w-full h-80 rounded" />
            ) : (
              <img
                alt={title}
                src={bookImage}
                className="w-full h-80 object-contain md:rounded-md hover:opacity-50 transition duration-300 bg-slate-100"
              />
            )}
          </div>
          <div className={showSkeleton ? "p-2 md:p-0" : "p-2"}>
            {/* <div className="h-[3.75rem]"> */}
            <div>
              <h5 className="line-clamp-2 text-lg font-medium">
                {" "}
                {showSkeleton ? <Skeleton /> : title}
              </h5>
            </div>
          </div>
        </div>
      </a>
    </SkeletonTheme>
  );
};

export default BookPreview;
