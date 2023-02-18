import { SanityClient } from '@website-v3/web/lib/sanity';
import { Mouse } from '@website-v3/web/src/components/mouse';
import {
    About,
    Blog,
    Experience,
    Footer,
    Hero,
    Projects,
    Skills,
} from '@website-v3/web/src/components/sections';
import {
    FeaturedContent,
    SkillType,
} from '@website-v3/web/src/constants/types';
import { initPages } from '@website-v3/web/src/helpers/initPage';
import {
    algoliaState,
    featuredContentState,
} from '@website-v3/web/src/helpers/state/atoms';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {
    projects: any[];
    experience: any[];
    skills: SkillType[];
    featuredContent: FeaturedContent[];
    articles: any[];
    algolia: any;
};

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
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Mouse />
            <Hero />
            <About />
            <Experience experiences={experience} />
            <Skills pages={5} skills={skills} />
            <Projects projects={projects} />
            <Blog articles={articles} />
            <Footer />
        </>
    );
};

export async function getServerSideProps() {
    const projects =
        await SanityClient.fetch(`*[ _type == 'project' ] | order(_createdAt desc) {
    "imageUrl": image.asset -> url,
    ...
    }`);
    const experience = await SanityClient.fetch(
        '*[ _type == "experience" ] | order(dateFinished desc)'
    );
    const skills = await SanityClient.fetch('* [ _type == "skills" ]');
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
                articles,
            },
        };
    }
}

export default Home;
