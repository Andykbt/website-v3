import React from "react";
import { Project } from "./project";
import { ProjectsContainer } from "./projects-styled";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Project index={1} />
      <Project index={2} />
      <Project index={3} />
    </ProjectsContainer>
  );
};
