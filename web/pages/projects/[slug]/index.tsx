import React from "react";
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
  ProjectColumn,
  ProjectHeading,
  ProjectLinks,
} from "@website-v3/web/components/sections/projects/projects-styled";
import { Separator } from "@website-v3/web/components/sections/about/about-styles";
import { TextTrail } from "@website-v3/web/helpers/springs";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string,
  codeLink: string,
  projectLink: string,
  slug: {
    _type: string,
    current: string,
  },
  body: any[],
  image: any[],
  imageUrl: string,
};

const Project = ({
  title,
  codeLink,
  projectLink,
  imageUrl,
  body,
  slug,
}: Props) => {
  const router = useRouter();
  const [ref, inView] = useInView();

  return(
    <>
      <ProjectColumn ref={ref}>
        <ImageContainer>
          <BackButton onClick={() => router.back()} />
          <Image
            src={imageUrl}
            priority={true}
            layout="fill"
            sizes="100w"
            objectFit="cover"
            className="imageScale"
          />
        </ImageContainer>
      
        <ProjectBody>
          <TextTrail on={inView}>
            <ProjectHeading style={{fontSize: slug.current === "ishouldstudy" ? "10vw" : ""}}>{title}</ProjectHeading>
          </TextTrail>

          <TextTrail on={inView}>
            <Separator expand={true} />
            <ProjectLinks>
              <Button onClick={() => router.push(projectLink)}>View Project</Button>
              <Button onClick={() => router.push(codeLink)}>View Code</Button>
            </ProjectLinks>
            <Separator expand={true} />
            
            <PortableText value={body} />
          </TextTrail>
        </ProjectBody>
      </ProjectColumn>
      <Footer/>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const pageSlug = context.query.slug;  
  const project: ProjectType = await SanityClient.fetch(
    `*[ _type == 'project' && slug.current == '${pageSlug}' ][0] {
      "imageUrl": image.asset -> url,
      ...,
    }`
  );

  if (!project) {
    return {
      props: {},
    };
  } else {
    return {
      props: project,
    };
  }
};

export default Project;