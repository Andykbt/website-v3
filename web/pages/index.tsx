import React from "react";
import type { NextPage } from "next";
import {
  Projects,
  Skills,
  About,
  Experience,
  Footer,
} from "@website-v3/web/components";
import {
  Body1,
  H1,
} from "@website-v3/web/styles";
import { fontSizeExtraLarge, fontSizeSmall } from "@website-v3/web/styles";
import { TextTrail } from "@website-v3/web/helpers/springs";
import { useInView } from "react-intersection-observer";
import { SanityClient } from "../sanity";
import ArrowSvg from "../styles/svg/Arrow-svg";

type Props = {
  projects: any[],
  experience: any[]
}

const Home: NextPage<Props> = ({
  projects,
  experience
}: Props) => {
  const { ref, inView } = useInView();
  return (
    <>
      <div style={{margin: "5vh auto 0 5vw"}} ref={ref}>
        <TextTrail on={inView}>
          <H1 fontSize={fontSizeExtraLarge}>Andy</H1>
          <br />
          <H1 fontSize={fontSizeExtraLarge}>&nbsp;&nbsp;&nbsp;&nbsp;Truong</H1>
        </TextTrail>
      </div>
      <Body1 fontSize={fontSizeSmall} textDirection="right" margin="7.5vh 20vw">SOFTWARE<br/>ENG</Body1>
      <About/>
      <Experience experiences={experience}/>
      <Skills pages={5} />
      <Projects projects={projects}/>
      <Footer/>
    </>
  );
};

export async function getServerSideProps() {
  const projects = await SanityClient.fetch("*[ _type == 'project' ]");
  const experience = await SanityClient.fetch("*[ _type == 'experience' ]");

  if (!projects.length) {
    return {
      props: {},
    };
  } else {
    return {
      props: { 
        projects,
        experience,
      },
    };
  }
}

export default Home;
