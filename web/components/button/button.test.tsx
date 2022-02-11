import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./";

describe("button", () => {
  const mockProps = {
    label: "label",
    onClick: jest.fn(),
  };

  it("displays correctly", () => {
    const { getByTestId } = render(
      <Button {...mockProps} />);

    expect(getByTestId("button.button")).toBeInTheDocument();
    expect(getByTestId("button.button-label")).toBeInTheDocument();
    expect(getByTestId("button.button-label")).toHaveTextContent(mockProps.label);
  });

  it("executes onClick function when clicked", () => {
    const { getByTestId } = render(
      <Button {...mockProps} />
    );

    const button = getByTestId("button.button");
    fireEvent.click(button);

    expect(mockProps.onClick).toBeCalled();
  });
});