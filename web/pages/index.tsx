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
  skills: SkillType[],
}

const Home: NextPage<Props> = ({
  projects,
  experience,
  skills
}: Props) => {
  return (
    <>
      <Hero/>
      <About/>
      <Experience experiences={experience}/>
      <Skills pages={5} skills={skills}/>
      <Projects projects={projects}/>
      <Footer/>
    </>
  );
};

export async function getServerSideProps() {
  const projects = await SanityClient.fetch("*[ _type == 'project' ] | order(_createdAt desc)");
  const experience = await SanityClient.fetch("*[ _type == 'experience' ] | order(dateFinished desc)");
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
