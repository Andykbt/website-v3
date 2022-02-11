import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../../components/button";
import { Separator } from "../../../components/sections/about/about-styles";
import { Project } from "../../../constants/types";
import { SanityClient } from "../../../sanity";
import {
  ImageContainer,
  ProjectBody,
  ProjectColumn,
  ProjectHeading,
  ProjectLinks
} from "../projects-styled";

const Project = ({
  title,
  codeLink,
  projectLink,
  slug,
  imageUrl,
  body,
  excerpt
}: Project) => {
  const router = useRouter();

  return(
    <>
      <ImageContainer>
        <Image
          src={"https://cdn.sanity.io/images/bw5alwe6/production/714b75e9b625b7cbf4a91b6f20da66d2f742b019-996x1000.png"}
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
    </>      
  );
};

export const getServerSideProps = async (context: any) => {
  const pageSlug = context.query.slug;  
  const project: Project = await SanityClient.fetch(
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