import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface BookPreviewProps {
  title: string;
  content: string;
  bookImage: string;
  author: string;
  updatedAt: string;
  onClick(): void;
  showSkeleton?: boolean;
}
const BookPreview = ({
  title,
  content,
  bookImage,
  author,
  updatedAt,
  onClick,
  showSkeleton = false,
}: BookPreviewProps) => {
  const formatted = new Date(updatedAt);
  return (
    <SkeletonTheme highlightColor="#9999">
      <a onClick={onClick} className="cursor-pointer">
        <div>
          <div className="p-2">
            <div className="flex gap-4">
              <div className="flex-grow">
                <div>
                  <h5 className="font-medium text-lg">
                    {showSkeleton ? <Skeleton /> : author}
                  </h5>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {showSkeleton ? (
                      <Skeleton />
                    ) : showSkeleton ? (
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
            <div className="mb-2">
              <h5 className="line-clamp-1 text-2xl font-bold">
                {" "}
                {showSkeleton ? <Skeleton /> : title}
              </h5>
            </div>
            <div className="">
              <p className="line-clamp-2 text-md font-normal ">
                {showSkeleton ? <Skeleton /> : content}
              </p>
            </div>
          </div>
        </div>
      </a>
    </SkeletonTheme>
  );
};

export default BookPreview;
