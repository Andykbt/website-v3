import React from "react";
import type { NextPage } from "next";
import {
  Projects,
  Skills,
  About,
  Experience,
  Footer,
  Hero
} from "@website-v3/web/components";
import { SanityClient } from "../sanity";

type Props = {
  projects: any[],
  experience: any[]
}

const Home: NextPage<Props> = ({
  projects,
  experience
}: Props) => {
  return (
    <>
      <Hero/>
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
