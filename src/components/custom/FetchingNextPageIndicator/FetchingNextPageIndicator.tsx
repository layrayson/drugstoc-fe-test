import { ReactNode, forwardRef } from "react";
import { LinearProgress } from "../LinearProgress";

type Props = {
  fetching: boolean;
  displayInViewMonitor: boolean;
};
export const FetchingMoreIndicator = forwardRef<HTMLDivElement, Props>(
  ({ fetching, displayInViewMonitor }: Props, ref) => {
    return (
      <>
        {displayInViewMonitor && (
          <div
            style={{ height: "1px" }}
            ref={ref}
            data-testid="in-view-monitor"
          ></div>
        )}
        {fetching ? (
          <div
            className="fixed bottom-0 left-0 right-0"
            style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            data-testid="linear-progress"
          >
            <LinearProgress />
          </div>
        ) : null}
      </>
    );
  }
);
FetchingMoreIndicator.displayName = "FetchingMoreIndicator";
