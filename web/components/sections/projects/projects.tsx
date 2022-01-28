import React, { useState } from "react";
import { TextTrail } from "@website-v3/web/helpers/springs";
import { Project } from "./project";
import { Container } from "../../layout";
import { ProjectsContainer } from "./projects-styled";

type Props = {

};

export const Projects = (props: Props) => {
  return (
    <ProjectsContainer>
      <Project index={1} />
      <Project index={2} />
      <Project index={3} />
    </ProjectsContainer>
  );
};
