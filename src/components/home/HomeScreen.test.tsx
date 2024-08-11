import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  it("renders the input and button", () => {
    render(
      <Router>
        <HomeScreen />
      </Router>
    );

    expect(
      screen.getByPlaceholderText("Search for books here")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("navigates to the correct URL when searching", () => {
    const view = render(
      <Router>
        <HomeScreen />
      </Router>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = view.getByPlaceholderText("Search for books here");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = view.getByRole("button");

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.click(button);

    expect(window.location.pathname).toBe("/books");
    expect(window.location.search).toBe("?title=React");
  });

  it("triggers search on pressing Enter key", () => {
    const view = render(
      <Router>
        <HomeScreen />
      </Router>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = view.getByPlaceholderText("Search for books here");

    fireEvent.change(input, { target: { value: "React" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(window.location.pathname).toBe("/books");
    expect(window.location.search).toBe("?title=React");
  });
});
