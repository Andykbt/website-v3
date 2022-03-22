import React, { useRef, useState } from "react";
import { Project } from "@website-v3/web/constants/types";
import { Body1, H2 } from "@website-v3/web/styles/typography";
import {
  ArrowContainer,
  ImageSlider,
  IndexContainer,
  Name,
  ProjectContainer,
  ProjectsContainer
} from "./projects-styled";
import { ProjectTextHover } from "@website-v3/web/helpers/springs";
import { useRouter } from "next/router";
import ArrowSvg from "@website-v3/web/styles/svg/Arrow-svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoveredProjectState } from "@website-v3/web/helpers/state/atoms";
import useMouse from "@react-hook/mouse-position";

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
  const image = useRecoilValue(hoveredProjectState);
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMouse(ref, {
    fps: 60,
  });

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
    <ProjectsContainer ref={ref}>
      <H2 margin="0 0 10vh">{"<Projects>"}</H2>
      <ImageSlider image={image} x={mouse.clientX} y={mouse.clientY} />
      <div style={{position: "relative", zIndex: 1}}>
        {renderProjects()}
        <ProjectComponent
          title={"View all"}
          index={projects.length + 1}
          image={""}
          url={""}
        />
      </div>
      <H2 margin="10vh 0 0">{"</Projects>"}</H2>
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
      onMouseOver={() => {
        setProject(image);
        setHovered(true);
      }}  
      onMouseLeave={() => {
        setProject("");
        setHovered(false);
      }}
    >
      <IndexContainer>
        <Body1 fontSize="12px">Ø{index}</Body1>
      </IndexContainer>

      <ProjectTextHover on={isHovered}>
        <Name>{title}</Name>
      </ProjectTextHover>

      <ArrowContainer>
        <ArrowSvg width={"5vw"} height={"5vw"} isHovered={isHovered} />
      </ArrowContainer>
    </ProjectContainer>
  );
};