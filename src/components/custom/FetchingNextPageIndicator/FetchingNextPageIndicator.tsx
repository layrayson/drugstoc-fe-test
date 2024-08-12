import { ReactNode, forwardRef } from "react";
import { LinearProgress } from "../LinearProgress";

type Props = {
  fetching: boolean;
  displayInViewMonitor: boolean;
};
export const FetchingMoreIndicator = forwardRef<HTMLDivElement, Props>(
  ({ fetching, displayInViewMonitor }: Props, ref) => {
    return displayInViewMonitor && fetching ? (
      <div data-testid="fetching-more-indicator">
        <div style={{ height: "1px" }} ref={ref}></div>
        <div
          className="fixed bottom-0 left-0 right-0"
          style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <LinearProgress data-testid="linear-progess" />
        </div>
      </div>
    ) : null;
  }
);
FetchingMoreIndicator.displayName = "FetchingMoreIndicator";
