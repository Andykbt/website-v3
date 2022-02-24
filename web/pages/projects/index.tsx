import React from "react";
import { NextPage } from "next";
import { Container, Card } from "@website-v3/web/components";
import { Project } from "@website-v3/web/constants/types";
import { fontSizeExtraLarge, H1 } from "@website-v3/web/styles";
import { SanityClient } from "@website-v3/web/sanity";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { StickyCenter } from "@website-v3/web/components/sections/projects/projects-styled";

type Props = {
  projects: Project[],
}

const Projects: NextPage<Props> = ({
  projects,
}: Props) => {
  const renderCards = () => {
    return projects.map((item, index) =>
      <Card
        title={item.title}
        excerpt={item.excerpt}
        key={`project-card-${index}`}
        image={item.imageUrl}
        href={item.slug.current}
        canCopy={true}
      />
    );
  };

  return (
    <StarsBG style={{height: "initial"}}>
      <StickyCenter>
        <H1 fontSize={fontSizeExtraLarge}>Projects</H1>
      </StickyCenter>
      <Container size="XL" style={{padding: "95vh 0 0"}}>
        {renderCards()}
      </Container>
    </StarsBG>
  );
};

export const getServerSideProps = async () => {
  const projects = await SanityClient.fetch(`*[ _type == 'project' ] {
    "imageUrl": image.asset -> url,
    ...,
    }`
  );

  if (!projects.length) {
    return {
      props: {},
    };
  } else {
    return {
      props: { 
        projects,
      },
    };
  }
};

export default Projects;