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
import { SkillType } from "../constants/types";

type Props = {
  projects: any[],
  experience: any[],
  skills: any[],
}

const Home: NextPage<Props> = ({
  projects,
  experience,
  skills
}: Props) => {
  console.warn(skills);
  return (
    <>
      <Hero/>
      <About/>
      <Experience experiences={experience}/>
      {/* <Skills pages={5} skills={skills[0]}/> */}
      <Projects projects={projects}/>
      <Footer/>
    </>
  );
};

export async function getServerSideProps() {
  const projects = await SanityClient.fetch("*[ _type == 'project' ]");
  const experience = await SanityClient.fetch("*[ _type == 'experience' ]");
  const skills = await SanityClient.fetch("* [ _type == 'skills' ]");

  if (!projects.length) {
    return {
      props: {},
    };
  } else {
    return {
      props: { 
        projects,
        experience,
        skills,
      },
    };
  }
}

export default Home;
