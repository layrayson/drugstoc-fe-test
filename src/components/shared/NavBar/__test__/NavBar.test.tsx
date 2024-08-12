import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { useNavBarScroll } from "../../../../lib/hooks/useNavBarScroll";

jest.mock("../../../../lib/hooks/useNavBarScroll", () => ({
  useNavBarScroll: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("NavBar component", () => {
  const mockNavigate = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("renders the NavBar with the search input", () => {
    (useNavBarScroll as jest.Mock).mockReturnValue({ showNavBar: true });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Search for books");
    expect(input).toBeInTheDocument();
  });

  it("hides the NavBar when showNavBar is false", () => {
    (useNavBarScroll as jest.Mock).mockReturnValue({ showNavBar: false });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navBar = screen.getByRole("navigation");
    expect(navBar).toHaveClass("-translate-y-full");
  });

  it("shows the NavBar when showNavBar is true", () => {
    (useNavBarScroll as jest.Mock).mockReturnValue({ showNavBar: true });

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const navBar = screen.getByRole("navigation");
    expect(navBar).toHaveClass("translate-y-0");
  });

  it("updates the search input value and URL when typing", () => {
    (useNavBarScroll as jest.Mock).mockReturnValue({ showNavBar: true });

    render(
      <MemoryRouter initialEntries={["/?title=initial"]}>
        <NavBar />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("Search for books");

    fireEvent.change(input, { target: { value: "new search" } });

    expect(input).toHaveValue("new search");
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("navigates to the homepage if title is empty on mount", () => {
    (useNavBarScroll as jest.Mock).mockReturnValue({ showNavBar: true });

    render(
      <MemoryRouter initialEntries={["/?title="]}>
        <NavBar />
      </MemoryRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
