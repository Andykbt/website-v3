import Image from "next/legacy/image";
import Link from 'next/link';

import {
    ArrowContainer,
    IndexContainer,
    Name,
    ProjectContainer,
    ProjectsContainer,
} from './projects-styled';

import { Project, baseUrl } from '@website-v3/web/src/constants/types';
import { FadeIn, ProjectTextHover } from '@website-v3/web/src/helpers/springs';
import ArrowSvg from '@website-v3/web/styles/svg/Arrow-svg';
import { Body1, H2 } from '@website-v3/web/styles/typography';
import React, { useEffect, useRef, useState } from 'react';

type ProjectsProps = {
    projects: Project[];
};

type ProjectProps = {
    index: number;
    title: string;
    url: string;
    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
};

export const Projects = ({ projects }: ProjectsProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [image, setImage] = useState<string>('');

    const renderProjects = () => {
        return projects.map((project: Project, index: number) => (
            <ProjectComponent
                key={project._id}
                title={project.title}
                index={index + 1}
                url={`${baseUrl}projects/${project.slug.current}`}
                image={project.imageUrl || ''}
                setImage={setImage}
            />
        ));
    };

    useEffect(() => {
        const update = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            const mouseX = clientX - ref.current!.clientWidth / 2;
            const mouseY = clientY - ref.current!.clientHeight / 2;

            ref.current!.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        document.addEventListener('mousemove', update);

        return () => document.removeEventListener('mousemove', update);
    }, []);

    return (
        <>
            <div
                className="rounded-3xl w-36 h-36 fixed overflow-hidden top-0 left-0 pointer-events-none"
                ref={ref}
            >
                {image && (
                    <FadeIn key={image}>
                        {image ? (
                            <Image src={image} width={150} height={150} />
                        ) : (
                            <div className="w-36 h-36 bg-red-500" />
                        )}
                    </FadeIn>
                )}
            </div>
            <ProjectsContainer>
                <H2 margin="0 0 10vh">{'<Projects>'}</H2>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {renderProjects()}
                    <ProjectComponent
                        title={'View all'}
                        index={projects.length + 1}
                        url={''}
                        image={''}
                        setImage={setImage}
                    />
                </div>
                <H2 margin="10vh 0 0">{'</Projects>'}</H2>
            </ProjectsContainer>
        </>
    );
};

export const ProjectComponent = ({
    index,
    title,
    url,
    image,
    setImage,
}: ProjectProps) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <Link href={url}>
            <ProjectContainer
                onMouseOver={() => {
                    setImage(image);
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setImage('');
                    setHovered(false);
                }}
            >
                <IndexContainer>
                    <Body1 fontSize="12px">Ø{index}</Body1>
                </IndexContainer>

                <ProjectTextHover on={isHovered}>
                    <Name>{title}</Name>
                </ProjectTextHover>

                <ArrowContainer>
                    <ArrowSvg
                        width={'5vw'}
                        height={'5vw'}
                        isHovered={isHovered}
                    />
                </ArrowContainer>
            </ProjectContainer>
        </Link>
    );
};
