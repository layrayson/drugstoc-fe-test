import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input component", () => {
  it("renders the input with the correct placeholder", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("applies the correct class names to the input and outline div", () => {
    render(
      <Input className="custom-input" outlineclassname="custom-outline" />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-input");

    const outlineDiv = screen.getByTestId("input-wrapper");
    expect(outlineDiv).toHaveClass("custom-outline");
  });

  it("allows text input", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "Test input" } });

    expect(input).toHaveValue("Test input");
  });

  it("handles the focus-within state correctly", () => {
    render(<Input placeholder="Enter text" outlineclassname="focus-test" />);
    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.click(input);
    const outlineDiv = screen.getByTestId("input-wrapper");

    expect(outlineDiv).toHaveClass("focus-test");
  });

  it("passes additional props to the input element", () => {
    render(<Input placeholder="Enter text" disabled />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeDisabled();
  });
});
