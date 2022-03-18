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
import { ProjectTextHover } from "@website-v3/web/helpers/springs";
import { useRouter } from "next/router";
import ArrowSvg from "@website-v3/web/styles/svg/Arrow-svg";
import { useSetRecoilState } from "recoil";
import { hoveredProjectState } from "@website-v3/web/helpers/state/atoms";

type ProjectsProps = {
  projects: Project[],
}

type ProjectProps = {
  index: number,
  title: string,
  url: string,
  image: string,
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
        image={project.imageUrl || ""}
      />
    );
  };

  return (
    <ProjectsContainer>
      {renderProjects()}
      <ProjectComponent
        title={"View all"}
        index={projects.length + 1}
        image={""}
        url={""}
      />
    </ProjectsContainer>
  );
};

export const ProjectComponent = ({
  index,
  title,
  url,
  image
}: ProjectProps) => {
  const setProject = useSetRecoilState(hoveredProjectState);
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <ProjectContainer
      onClick={() => router.push(`/projects/${url}`)} data-testid={"projects.redirect-link"}
      onMouseOver={() => { setProject(image); console.log(image); }}  
      onMouseLeave={() => setProject("")}
    >
      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>

        <IndexContainer>
          <Body1 fontSize="12px">Ø{index}</Body1>
        </IndexContainer>

        <ProjectTextHover on={isHovered}>
          <Name>{title}</Name>
        </ProjectTextHover>

        <ArrowContainer>
          <ArrowSvg width={"5vw"} height={"5vw"} isHovered={isHovered} />
        </ArrowContainer>
      </div>
    </ProjectContainer>
  );
};