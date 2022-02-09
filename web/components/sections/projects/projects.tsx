import React from "react";
import { Project as ProjectComponent } from "./project";
import { ProjectsContainer } from "./projects-styled";
import { Project } from "@website-v3/web/constants/types";

type Props = {
  projects: Project[],
}

export const Projects = ({
  projects
}: Props) => {
  const renderProjects = () => {
    return projects.map((project: Project, index: number) => 
      <ProjectComponent
        key={project._id}
        title={project.title}
        index={index + 1}
        url={project.codeLink}
      />
    );
  };

  return (
    <ProjectsContainer>
      {renderProjects()}
      <ProjectComponent
        title={"View all"}
        index={projects.length + 1}
        url={"/projects"}
      />
    </ProjectsContainer>
  );
};