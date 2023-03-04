import Head from 'next/head';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SanityClient } from '@website-v3/web/lib/sanity';
import { Footer } from '@website-v3/web/src/components';
import {
    BackButton,
    ImageContainer,
    NextProject,
    ProjectBody,
    ProjectHeading,
    ProjectWrapper,
} from '@website-v3/web/src/components/sections/projects/projects-styled';
import { Project as ProjectType } from '@website-v3/web/src/constants/types';
import { TextTrail } from '@website-v3/web/src/helpers/springs';
import { mouseState } from '@website-v3/web/src/helpers/state/atoms';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ReactMarkdown from 'react-markdown';
import { useSetRecoilState } from 'recoil';

type Props = {
    project: ProjectType;
    nextProject: ProjectType;
};

const Project = ({ project, nextProject }: Props) => {
    const router = useRouter();
    const [ref, inView] = useInView();
    const setMouseState = useSetRecoilState(mouseState);

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
                        <div className="flex gap-8 mb-8">
                            <Link
                                href={project.projectLink}
                                className="transition-all duration-[250ms] border-solid border-pastel-grey border-1 rounded-sm flex items-center justify-center p-4 hover:rounded-xl"
                            >
                                View Project
                            </Link>
                            <Link
                                href={project.codeLink}
                                className="transition-all duration-[250ms] border-solid border-pastel-grey border-1 rounded-sm flex items-center justify-center p-4 hover:rounded-xl"
                            >
                                View Code
                            </Link>
                        </div>

                        <ReactMarkdown>{project.body}</ReactMarkdown>
                        {project.technologies !== null && (
                            <>
                                <h1 className="underline mt-8">
                                    Technologies Used:
                                </h1>
                                <ul className="pl-8">
                                    {project.technologies.map((item, index) => {
                                        return <li key={index}>{item.name}</li>;
                                    })}
                                </ul>
                            </>
                        )}
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
