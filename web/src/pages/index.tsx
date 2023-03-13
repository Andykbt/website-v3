import Head from 'next/head';

import { SanityClient } from '@website-v3/web/lib/sanity';
import {
    About,
    Blog,
    Experience,
    Footer,
    Hero,
    Projects,
} from '@website-v3/web/src/components/sections';
import type { NextPage } from 'next';
import React from 'react';

type Props = {
    projects: any[];
    experience: any[];
    articles: any[];
};

const Home: NextPage<Props> = ({ projects, experience, articles }: Props) => {
    return (
        <>
            <Head>
                <title>Andy Truong</title>
                <meta name="title" content="Andy Truong" key="title" />
                <meta
                    name="description"
                    content="Andy Truong is a software engineer who specialises in building (and occasionally designing) digital products."
                />
            </Head>
            <Hero />
            <About />
            <Experience experiences={experience} />
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
        `*[ _type == "experience" ] | order(dateStarted desc) {
            "imageUrl": companyLogo.asset -> url,
            ...    
        }`
    );
    const articles =
        await SanityClient.fetch(`* [_type == 'article' ] | order(publishedAt desc) {
        "imageUrl": image.asset -> url,
        ...
        }`);

    return {
        props: {
            projects,
            experience,
            articles,
        },
    };
}

export default Home;
