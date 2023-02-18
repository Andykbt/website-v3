import { Card, Container } from '@website-v3/web/src/components';
import { StarsBG } from '@website-v3/web/src/components/sections/experience/experience-styled';
import { StickyCenter } from '@website-v3/web/src/components/sections/projects/projects-styled';
import { Project, baseUrl } from '@website-v3/web/src/constants/types';
import { SanityClient } from '@website-v3/web/lib/sanity';
import { H1, fontSizeExtraLarge } from '@website-v3/web/styles';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

type Props = {
    projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
    const renderCards = () => {
        return projects.map((item, index) => (
            <Card
                title={item.title}
                excerpt={item.excerpt}
                key={`project-card-${index}`}
                image={item.imageUrl}
                href={`${baseUrl}projects/${item.slug.current}`}
                canCopy={true}
            />
        ));
    };

    return (
        <StarsBG style={{ height: 'initial' }}>
            <Head>
                <title>Projects | Andy Truong</title>
            </Head>
            <StickyCenter>
                <H1 fontSize={fontSizeExtraLarge}>Projects</H1>
            </StickyCenter>
            <Container size="XL" style={{ padding: '95vh 0 0' }}>
                {renderCards()}
            </Container>
        </StarsBG>
    );
};

export const getServerSideProps = async () => {
    const projects =
        await SanityClient.fetch(`*[ _type == 'project' ] | order(_createdAt desc) {
    "imageUrl": image.asset -> url,
    ...,
    }`);

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
