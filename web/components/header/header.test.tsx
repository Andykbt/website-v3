import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Url } from "@website-v3/web/constants/types";
import { Header } from "@website-v3/web/components";
import { createMockRouter } from "../../helpers/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("header", () => {
  const mockItems: Url[] = [
    {
      name: "mockNavItem",
      url: "/mock"
    },
    {
      name: "mockNavItem1",
      url: "/mock1",
    }
  ];

  it("displays the correct nav items", () => {
    const router = createMockRouter({});
    const { getByText, getAllByRole } = render(
      <RouterContext.Provider value={router}>
        <Header navItems={mockItems} />
      </RouterContext.Provider>  
    );
    const nav1 = getByText("mockNavItem");
    const nav2 = getByText("mockNavItem1");

    expect(getAllByRole("header.navItems").length).toBe(2);
    expect(getByText("mockNavItem")).toBeInTheDocument();
    expect(getByText("mockNavItem1")).toBeInTheDocument();

    fireEvent.click(nav1);
    fireEvent.click(nav2);

    expect(router.push).toHaveBeenCalledWith(mockItems[0].url);
    expect(router.push).toHaveBeenCalledWith(mockItems[1].url);
  });
});