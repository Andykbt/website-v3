import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Card } from "./";
import { createMockRouter } from "../../helpers/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("project card", () => {
  const mockProps = {
    title: "card",
    href:"mockSlug",
    excerpt: [],
  };

  it("displays the correct information", () => {
    const router = createMockRouter({});
    const { getByText, getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Card {...mockProps} />
      </RouterContext.Provider>
    );

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByTestId("card.redirect-link")).toBeInTheDocument();
  });

  it("goes to the correct link", () => {
    const router = createMockRouter({});
    const { getByTestId } = render(
      <RouterContext.Provider value={router}>
        <Card {...mockProps} />
      </RouterContext.Provider>
    );

    const card = getByTestId("card.redirect-link");
    expect(card).toBeInTheDocument();
    
    fireEvent.click(card);
    expect(router.push)
      .toHaveBeenCalledWith(`/projects/${mockProps.href}`);
  });

  it("displays copy url button", () => {
    const { getByTestId } = render(
      <Card {...mockProps} canCopy={true} />
    );
    
    expect(getByTestId("card.copy-url"))
      .toBeInTheDocument();
  });
});