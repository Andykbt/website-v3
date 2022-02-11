import React, { useState } from "react";
import { Project } from "@website-v3/web/constants/types";
import { Body1 } from "@website-v3/web/styles/typography";
import {
  ArrowContainer,
  IndexContainer,
  Name,
  ProjectContainer,
  ProjectsContainer
} from "./projects-styled";
import Image from "next/image";
import { FadeIn, ProjectTextHover } from "@website-v3/web/helpers/springs";
import { useRouter } from "next/router";
import ArrowSvg from "../../../styles/svg/Arrow-svg";

type ProjectsProps = {
  projects: Project[],
}

type ProjectProps = {
  index: number,
  title: string,
  url: string
};

export const Projects = ({
  projects
}: ProjectsProps) => {
  const renderProjects = () => {
    return projects.map((project: Project, index: number) => 
      <ProjectComponent
        key={project._id}
        title={project.title}
        index={index + 1}
        url={project.slug.current}
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

export const ProjectComponent = ({
  index,
  title,
  url
}: ProjectProps) => {
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <ProjectContainer onClick={() => router.push(`/projects/${url}`)} data-testid={"projects.redirect-link"}>
      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{cursor: "pointer"}}>
        <IndexContainer>
          <Body1 fontSize="12px">Ø{index}</Body1>
        </IndexContainer>

        <ProjectTextHover on={isHovered}>
          <Name>{title}</Name>
        </ProjectTextHover>

        <ArrowContainer>
          <ArrowSvg width={100} height={100} isHovered={isHovered} />
        </ArrowContainer>
      </div>
    </ProjectContainer>
  );
};