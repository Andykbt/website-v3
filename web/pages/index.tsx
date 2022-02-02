import React from "react";
import type { NextPage } from "next";
import { Url } from "@website-v3/web/constants/types";
import {
  Header,
  Projects,
  Skills,
  About,
  Experience,
  Body1,
  H1,
} from "@website-v3/web/components";

import { fontSizeExtraLarge, fontSizeSmall } from "@website-v3/web/styles";
import { TextTrail } from "@website-v3/web/helpers/springs";
import { useInView } from "react-intersection-observer";
import { SanityClient } from "../sanity";

const navItems: Url[] = [
  {
    name: "Work",
    url: "mock",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "",
  }
];

type Props = {
  projects: any[],
}

const Home: NextPage<Props> = ({
  projects,
}: Props) => {
  const { ref, inView } = useInView();

  return (
    <>
      <Header navItems={navItems}/>
      <div style={{margin: "5vh auto 0 5vw"}} ref={ref}>
        <TextTrail on={inView}>
          <H1 fontSize={fontSizeExtraLarge}>Andy</H1>
          <br />
          <H1 fontSize={fontSizeExtraLarge}>&nbsp;&nbsp;&nbsp;&nbsp;Truong</H1>
        </TextTrail>
      </div>
      <Body1 fontSize={fontSizeSmall} textDirection="right" margin="7.5vh 20vw">SOFTWARE<br/>ENG</Body1>
      <About/>
      <Experience/>
      <Skills pages={3} />
      <Projects projects={projects}/>
    </>
  );
};

export async function getServerSideProps() {
  const query = "*[ _type == 'project' ]";
  const projects = await SanityClient.fetch(query);

  console.warn(projects);
  if (!projects.length) {
    return {
      props: [],
    };
  } else {
    return {
      props: { 
        projects
      },
    };
  }
}

export default Home;
