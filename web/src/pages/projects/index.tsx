import { Footer } from '~/components';
import { StarsBG } from '~/components/common/Stars';
import { Project, baseUrl } from '~/constants/types';
import { fontSizeExtraLarge } from '~/styles/index';
import ArrowSvg from '~/styles/svg/Arrow-svg';
import { H1 } from '~/styles/typography';

import Head from 'next/head';
import Link from 'next/link';

import { PortableText } from '@portabletext/react';
import { SanityClient } from '@website-v3/web/lib/sanity';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

type Props = {
    projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
    const [mouseMovementY, setMouseMovementY] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouseMovementY(event.movementY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Projects | Andy Truong</title>
            </Head>

            <div className="fixed top-[25%] left-1/2 -translate-x-1/2 z-[1]">
                <H1 fontSize={fontSizeExtraLarge}>Projects</H1>
            </div>
            <StarsBG className="pt-1">
                <div className="m-auto mt-[95vh] bg-night border-t-1 relative z-[1]">
                    {projects &&
                        projects.map((project) => {
                            return (
                                <Link
                                    href={`${baseUrl}projects/${project.slug.current}`}
                                    key={project._id}
                                    onMouseEnter={(event) => {
                                        const target =
                                            event.target as HTMLDivElement;

                                        if (mouseMovementY > 0) {
                                            target.classList.remove(
                                                'before:origin-bottom'
                                            );
                                            target.classList.add(
                                                'before:origin-top'
                                            );
                                        } else if (mouseMovementY < 0) {
                                            target.classList.remove(
                                                'before:origin-top'
                                            );
                                            target.classList.add(
                                                'before:origin-bottom'
                                            );
                                        }
                                    }}
                                    className="group grid grid-cols-3 md:grid-cols-[1fr_1fr_1fr_1fr_50px] transition-colors z-10 relative items-center p-4 gap-4 text-lg border-b-1 hover:text-night before:z-[-10] before:absolute before:transition-transform before:top-0 before:bottom-0 before:bg-pastel-grey before:w-full before:scale-y-0 hover:before:scale-y-100"
                                >
                                    <div className="text-sm sm:text-2xl md:col-span-2">
                                        {project.title}
                                    </div>

                                    <div className="hidden md:block">
                                        <PortableText value={project.excerpt} />
                                    </div>

                                    <div className="font-light text-center">
                                        {new Date(project.date).getFullYear()}
                                    </div>

                                    <div className="transition-all duration-500 opacity-0 group-hover:opacity-100 justify-self-end">
                                        <ArrowSvg
                                            width={'25px'}
                                            height={'25px'}
                                            isHovered={true}
                                        />
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            </StarsBG>
            <Footer />
        </>
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
