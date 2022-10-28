import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  Projects,
  Skills,
  About,
  Experience,
  Footer,
  Hero,
  Blog,
} from "@website-v3/web/components";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { FeaturedContent, SkillType } from "@website-v3/web/constants/types";
import Head from "next/head";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { algoliaState, featuredContentState, mouseState } from "../helpers/state/atoms";
import { initPages } from "../helpers/initPage";
import { Mouse } from "../components/mouse";

type Props = {
  projects: any[],
  experience: any[],
  skills: SkillType[],
  featuredContent: FeaturedContent[],
  articles: any[],
  algolia: any,
}

const Home: NextPage<Props> = ({
  projects,
  experience,
  skills,
  featuredContent,
  algolia,
  articles,
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
      {/* <Mouse/> */}
      <Hero/>
      <About/>
      <Experience experiences={experience}/>
      <Skills pages={5} skills={skills}/>
      <Projects projects={projects}/>
      <Blog articles={articles}/>
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
  const articles = await SanityClient.fetch(`* [_type == 'article' ] {
    "imageUrl": image.asset -> url,
    ...
  }`);
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
        algolia,
        articles
      },
    };
  }
}

export default Home;
