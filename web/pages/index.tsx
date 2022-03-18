import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  Projects,
  Skills,
  About,
  Experience,
  Footer,
  Hero
} from "@website-v3/web/components";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { FeaturedContent, SkillType } from "@website-v3/web/constants/types";
import Head from "next/head";
import { useSetRecoilState } from "recoil";
import { algoliaState, featuredContentState } from "../helpers/state/atoms";
import { initPages } from "../helpers/initPage";

type Props = {
  projects: any[],
  experience: any[],
  skills: SkillType[],
  featuredContent: FeaturedContent[],
  algolia: any,
}

const Home: NextPage<Props> = ({
  projects,
  experience,
  skills,
  featuredContent,
  algolia
}: Props) => {
  const setFeatured = useSetRecoilState(featuredContentState);
  const setAlgolia = useSetRecoilState(algoliaState);

  useEffect(() => {
    setFeatured(featuredContent);
    setAlgolia(algolia);
  }, []);

  return (
    <>
      <Head>
        <title>Andy Truong</title>
      </Head>
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
  const projects = await SanityClient.fetch(`*[ _type == 'project' ] | order(_createdAt desc) {
    "imageUrl": image.asset -> url,
    ...
  }`);
  const experience = await SanityClient.fetch("*[ _type == 'experience' ] | order(dateFinished desc)");
  const skills = await SanityClient.fetch("* [ _type == 'skills' ]");
  const { featuredContent, algolia } = await initPages();

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
        featuredContent,
        algolia
      },
    };
  }
}

export default Home;
