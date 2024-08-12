import { render, screen } from "@testing-library/react";
import { FetchingMoreIndicator } from "../FetchingNextPageIndicator";

describe("FetchingMoreIndicator", () => {
  it("renders the FetchingMoreIndicator when both fetching and displayInViewMonitor are true", () => {
    render(
      <FetchingMoreIndicator fetching={true} displayInViewMonitor={true} />
    );
    const indicator = screen.getByTestId("fetching-more-indicator");
    expect(indicator).toBeInTheDocument();
  });

  it("does not render the FetchingMoreIndicator when fetching is false", () => {
    render(
      <FetchingMoreIndicator fetching={false} displayInViewMonitor={true} />
    );
    const indicator = screen.queryByTestId("fetching-more-indicator");
    expect(indicator).not.toBeInTheDocument();
  });

  it("does not render the FetchingMoreIndicator when displayInViewMonitor is false", () => {
    render(
      <FetchingMoreIndicator fetching={true} displayInViewMonitor={false} />
    );
    const indicator = screen.queryByTestId("fetching-more-indicator");
    expect(indicator).not.toBeInTheDocument();
  });

  it("does not render the FetchingMoreIndicator when both fetching and displayInViewMonitor are false", () => {
    render(
      <FetchingMoreIndicator fetching={false} displayInViewMonitor={false} />
    );
    const indicator = screen.queryByTestId("fetching-more-indicator");
    expect(indicator).not.toBeInTheDocument();
  });
});
