import { render, screen } from "@testing-library/react";
import { FetchingMoreIndicator } from "../FetchingNextPageIndicator";

describe("FetchingMoreIndicator", () => {
  it("renders the FetchingMoreIndicator when both fetching and displayInViewMonitor are true", () => {
    render(
      <FetchingMoreIndicator fetching={true} displayInViewMonitor={true} />
    );
    const indicator = screen.getByTestId("linear-progress");
    expect(indicator).toBeInTheDocument();
  });

  it("renders the Inview mointor when displayInViewMonitor is true", () => {
    render(
      <FetchingMoreIndicator fetching={false} displayInViewMonitor={true} />
    );
    const monitor = screen.queryByTestId("in-view-monitor");
    expect(monitor).toBeInTheDocument();
  });

  it("renders the FetchingMoreIndicator when fetching is true", () => {
    render(
      <FetchingMoreIndicator fetching={true} displayInViewMonitor={false} />
    );
    const indicator = screen.getByTestId("linear-progress");
    expect(indicator).toBeInTheDocument();
  });

  it("does not render the FetchingMoreIndicator or inview monitor when both fetching and displayInViewMonitor are false", () => {
    render(
      <FetchingMoreIndicator fetching={false} displayInViewMonitor={false} />
    );
    const indicator = screen.queryByTestId("fetching-more-indicator");
    const monitor = screen.queryByTestId("in-view-monitor");

    expect(indicator).not.toBeInTheDocument();
    expect(monitor).not.toBeInTheDocument();
  });
});
