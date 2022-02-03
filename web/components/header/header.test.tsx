import React from "react";
import { render } from "@testing-library/react";
import { Url } from "@website-v3/web/constants/types";
import { Header } from "./header";

describe("header", () => {
  it("displays the correct nav items", () => {
    const mockItems: Url[] = [
      {
        name: "mockNavItem",
        url: ""
      }
    ];

    const { getByText } = render(<Header navItems={mockItems} />);
    expect(getByText("mockNavItem")).toBeInTheDocument();
  });

  // it("goes to the correct url", () => {
      
  // });
});