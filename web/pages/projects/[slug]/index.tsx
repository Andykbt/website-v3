import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Footer,
  Button
} from "@website-v3/web/components";
import { Project as ProjectType} from "@website-v3/web/constants/types";
import { SanityClient } from "@website-v3/web/sanity";
import {
  BackButton,
  ImageContainer,
  ProjectBody,
  ProjectWrapper,
  ProjectHeading,
  ProjectLinks,
  NextProject,
  TechItem,
  Technologies,
} from "@website-v3/web/components/sections/projects/projects-styled";
import { Separator } from "@website-v3/web/components/sections/about/about-styles";
import { ExpandBorder, TextTrail } from "@website-v3/web/helpers/springs";
import { useInView } from "react-intersection-observer";
import { Body1 } from "../../../styles";
import Head from "next/head";

type Props = {
  project: ProjectType,
  nextProject: ProjectType,
};

const TechItemWrapper = ({
  url,
  name,
  link
}: {
  url: string,
  name: string,
  link: string,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <ExpandBorder on={hover} borderRadius="9999px">
      <TechItem
        href={link}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          width={32}
          height={32}
          src={url}
        />
        <Body1>{name}</Body1>
      </TechItem>
    </ExpandBorder>
  );
};

const Project = ({
  project,
  nextProject
}: Props) => {
  const router = useRouter(); 
  const [ref, inView] = useInView();

  const renderTechUsed = () => {    
    if (!project.technologies) {
      return;
    }

    return project.technologies.map((item, index) => {
      return (
        <TechItemWrapper
          key={`${item.name}-${index}`}
          name={item.name}
          url={item.url}
          link={item.link}
        />
      );
    });
  };

  return (
    <>
      <Head>
        <title>{project.title} | Andy Truong</title>
      </Head>
      <ProjectWrapper ref={ref}>
        <ImageContainer>
          <BackButton onClick={() => router.back()} />
          <Image
            src={project.imageUrl || "/stars.gif"}
            layout="fill"
            sizes="100w"
            priority={true}
            objectFit="cover"
            className="imageScale"
          />
        </ImageContainer>
      
        <ProjectBody>
          <TextTrail on={inView}>
            <ProjectHeading style={{fontSize: project.slug.current === "ishouldstudy" ? "10vw" : ""}}>
              {project.title}
            </ProjectHeading>
          </TextTrail>

          <TextTrail on={inView}>
            <Separator expand={true} />
            <ProjectLinks>
              <Button onClick={() => router.push(project.projectLink)}>View Project</Button>
              <Button onClick={() => router.push(project.codeLink)}>View Code</Button>
            </ProjectLinks>
            <Separator expand={true} />
            <Technologies>
              {renderTechUsed()}
            </Technologies>
            <PortableText value={project.body} />

          </TextTrail>
        </ProjectBody>
      </ProjectWrapper>

      <NextProject
        onClick={() => router.push(`/projects/${nextProject.slug.current}`)}
        background={nextProject.colour}
      >
        <Image
          src={nextProject.imageUrl || "/stars.gif"}
          width={250}
          height={250}
        />
      </NextProject>
      <Footer/>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const pageSlug = context.query.slug;
  const project: ProjectType = await SanityClient.fetch(
    `*[ _type == 'project' && slug.current == '${pageSlug}' ][0] {
      "imageUrl": image.asset -> url,
      technologies[] {
        name,
        link,
        "url": asset -> url,
      },
      ...,
    }`
  );

  const nextProject: ProjectType = await SanityClient.fetch(
    `*[ _id == '${project.nextProject._ref}' ][0] {
      slug,
      colour,
      "imageUrl": image.asset -> url,
    }`
  );

  if (!project) {
    return {
      props: {},
    };
  } else {
    return {
      props: {
        project,
        nextProject,
      }
    };
  }
};

export default Project;