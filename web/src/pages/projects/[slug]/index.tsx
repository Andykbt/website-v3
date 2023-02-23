import Head from 'next/head';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SanityClient } from '@website-v3/web/lib/sanity';
import { Button, Footer } from '@website-v3/web/src/components';
import { Separator } from '@website-v3/web/src/components/sections/about/about-styles';
import {
    BackButton,
    ImageContainer,
    NextProject,
    ProjectBody,
    ProjectHeading,
    ProjectLinks,
    ProjectWrapper,
    TechItem,
    Technologies,
} from '@website-v3/web/src/components/sections/projects/projects-styled';
import { Project as ProjectType } from '@website-v3/web/src/constants/types';
import { ExpandBorder, TextTrail } from '@website-v3/web/src/helpers/springs';
import { mouseState } from '@website-v3/web/src/helpers/state/atoms';
import { Body1 } from '@website-v3/web/styles';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import { useSetRecoilState } from 'recoil';

type Props = {
    project: ProjectType;
    nextProject: ProjectType;
};

const TechItemWrapper = ({
    url,
    name,
    link,
}: {
    url: string;
    name: string;
    link: string;
}) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div style={{ width: 'fit-content' }}>
            <ExpandBorder on={hover} borderRadius="9999px">
                <TechItem
                    href={link}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Image width={32} height={32} src={url} />
                    <Body1>{name}</Body1>
                </TechItem>
            </ExpandBorder>
        </div>
    );
};

const Project = ({ project, nextProject }: Props) => {
    const router = useRouter();
    const [ref, inView] = useInView();
    const setMouseState = useSetRecoilState(mouseState);

    const renderTechUsed = () => {
        if (!project.technologies) {
            return;
        }

        return project.technologies.map((item, index) => {
            return (
                <TechItemWrapper
                    key={`${item.name}-${index}`}
                    name={item.name}
                    url={item.url}
                    link={item.link}
                />
            );
        });
    };

    return (
        <>
            <Head>
                <title>{project.title} | Andy Truong</title>
            </Head>
            <ProjectWrapper ref={ref}>
                <ImageContainer>
                    <BackButton
                        onClick={() => router.back()}
                        onMouseOver={() => setMouseState('hidden')}
                        onMouseLeave={() => setMouseState('default')}
                    />
                    <Image
                        src={project.imageUrl || '/stars.gif'}
                        layout="fill"
                        sizes="100w"
                        priority={true}
                        objectFit="cover"
                        className="imageScale"
                    />
                </ImageContainer>

                <ProjectBody>
                    <TextTrail on={inView}>
                        <ProjectHeading
                            style={{
                                fontSize:
                                    project.slug.current === 'ishouldstudy'
                                        ? '10vw'
                                        : '',
                            }}
                        >
                            {project.title}
                        </ProjectHeading>
                    </TextTrail>

                    <TextTrail on={inView}>
                        <Separator expand={true} />
                        <ProjectLinks>
                            <Button
                                onClick={() => router.push(project.projectLink)}
                            >
                                View Project
                            </Button>
                            <Button
                                onClick={() => router.push(project.codeLink)}
                            >
                                View Code
                            </Button>
                        </ProjectLinks>
                        <Separator expand={true} />
                        <Technologies>{renderTechUsed()}</Technologies>
                        <ReactMarkdown>{project.body}</ReactMarkdown>
                    </TextTrail>
                </ProjectBody>
            </ProjectWrapper>

            <Link href={`/projects/${nextProject.slug.current}`}>
                <NextProject background={nextProject.colour}>
                    <Image
                        src={nextProject.imageUrl || '/stars.gif'}
                        width={250}
                        height={250}
                    />
                </NextProject>
            </Link>
            <Footer />
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const pageSlug = context.query.slug;
    const project: ProjectType = await SanityClient.fetch(
        `*[ _type == 'project' && slug.current == '${pageSlug}' ][0] {
            "imageUrl": image.asset -> url,
            technologies[] {
                name,
                link,
                "url": asset -> url,
            },
            ...,
        }`
    );

    const nextProject: ProjectType = await SanityClient.fetch(
        `*[ _id == '${project.nextProject._ref}' ][0] {
            slug,
            colour,
            "imageUrl": image.asset -> url,
        }`
    );

    if (!project) {
        return {
            props: {},
        };
    } else {
        return {
            props: {
                project,
                nextProject,
            },
        };
    }
};

export default Project;
