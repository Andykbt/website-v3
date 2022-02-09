import React from "react";
import { Project } from "@website-v3/web/constants/types";
import { Projects } from ".";
import { fireEvent, render } from "@testing-library/react";
import { createMockRouter } from "../../../helpers/test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("project in homepage", () => {
  const mockItems: Project[] = [
    {
      _createdAt: "09/02/2022",
      _id: "project_id",
      _rev: "project_rev",
      _type: "project_type",
      _updatedAt: "updateAt",
      title: "title",
      codeLink: "codeLink",
      projectLink: "projectLink",
      slug: {
        _type: "slugtype",
        current: "slug",
      },
    },
  ];

  it("displays the correct items", () => {
    const router = createMockRouter({});
    const { getByText, getAllByTestId } = render(
      <RouterContext.Provider value={router}>
        <Projects projects={mockItems} />
      </RouterContext.Provider>
    );

    fireEvent.click(getAllByTestId("projects.redirect-link")[0]);
    expect(getByText(mockItems[0].title)).toBeInTheDocument();  
    expect(router.push)
      .toHaveBeenCalledWith(`/projects/${mockItems[0].slug.current}`);
  });
});