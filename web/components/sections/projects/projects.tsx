import React from "react";
import { Project } from "./project";
import { ProjectsContainer } from "./projects-styled";

type Props = {
  projects: any,
}

export const Projects = ({
  projects
}: Props) => {
  const renderProjects = () => {
    return projects.map((project: any, index: number) => 
      <Project
        key={project}
        title={project.title}
        index={index + 1}
        url={project.codeLink}
      />
    );
  };

  return (
    <ProjectsContainer>
      {renderProjects()}
    </ProjectsContainer>
  );
};