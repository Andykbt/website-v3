import React from "react";
import { NextPage } from "next";
import { Container } from "../../components";
import { Card } from "../../components/card";
import { Project } from "@website-v3/web/constants/types";
import { H2 } from "../../styles";
import { SanityClient } from "@website-v3/web/sanity";
import { Grid } from "../../components/layout/grid";

type Props = {
  projects: Project[],
}

const Projects: NextPage<Props> = ({
  projects
}: Props) => {
  const renderCards = () => {
    return projects.map((item, index) =>
      <Card
        title={item.title}
        excerpt={item.excerpt}
        key={`project-card-${index}`}
        href={item.slug.current}
        canCopy={true}
      />
    );
  };

  return (
    <Container size="XL">
      <H2>Projects</H2>
      <Grid noOfColumns={3} gap="50px">
        {renderCards()}
      </Grid>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const projects = await SanityClient.fetch("*[ _type == 'project' ]");

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