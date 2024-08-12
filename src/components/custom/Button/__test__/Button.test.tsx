import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("renders the button with the correct text", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("applies the correct class names", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass(
      "flex items-center justify-center rounded-md h-9 custom-class"
    );
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("sets the button type correctly", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("sets the button as disabled when the disabled prop is true", () => {
    render(<Button disabled={true}>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it("does not call onClick when the button is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Disabled
      </Button>
    );
    const button = screen.getByRole("button", { name: /disabled/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
