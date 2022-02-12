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
  ImageContainer,
  ProjectBody,
  ProjectColumn,
  ProjectHeading,
  ProjectLinks,
} from "@website-v3/web/components/sections/projects/projects-styled";
import { Separator } from "../../../components/sections/about/about-styles";

type Props = {
  title: string,
  codeLink: string,
  projectLink: string,
  slug: {
    _type: string,
    current: string,
  },
  body: any[],
  imageUrl: string,
};

const Project = ({
  title,
  codeLink,
  projectLink,
  imageUrl,
  body,
}: Props) => {
  const router = useRouter();

  return(
    <>
      <ProjectColumn>
        <ImageContainer>
          <Image
            src={imageUrl}
            width={500}
            height={500}
            priority={true}
            layout="responsive"
          />
        </ImageContainer>
      
        <ProjectBody>
          <ProjectHeading>{title}</ProjectHeading>
          <Separator expand={true} />
          <ProjectLinks>
            <Button onClick={() => router.push(projectLink)}>View Project</Button>
            <Button onClick={() => router.push(codeLink)}>View Code</Button>
          </ProjectLinks>
          <Separator expand={true} />
          
          <PortableText value={body} />
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