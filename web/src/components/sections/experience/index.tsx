import Image from 'next/legacy/image';

import { Name } from '../projects/projects-styled';

import { PortableText } from '@portabletext/react';
import { ExperienceType } from '@website-v3/web/src/constants/types';
import { formateDate } from '@website-v3/web/src/helpers/sanity';
import { FadeIn, FadeUp } from '@website-v3/web/src/helpers/springs';
import { colourCyan } from '@website-v3/web/styles';
import { A } from '@website-v3/web/styles/typography';
import React, { useState } from 'react';

type Props = {
    experiences: ExperienceType[];
};

export const Experience = ({ experiences }: Props) => {
    const [selected, setSelected] = useState(0);

    const renderLogo = (key: string) => {
        return (
            <div className="rounded-full max-h-48 aspect-square overflow-hidden">
                <FadeIn key={key}>
                    <Image
                        src={experiences[selected].imageUrl}
                        width={256}
                        height={256}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/stars.gif"
                        alt={`${experiences[selected].company} Logo`}
                    />
                </FadeIn>
            </div>
        );
    };

    const renderCompany = (key: string) => {
        return (
            <FadeUp key={key}>
                <h2 className="text-center text-[5vw]">
                    {experiences[selected].role}
                    <A
                        color={colourCyan}
                        href={experiences[selected].companyLink}
                    >
                        &nbsp;@ {experiences[selected].company}
                    </A>
                </h2>
            </FadeUp>
        );
    };

    const renderBody = (key: string) => {
        return (
            <FadeUp key={key}>
                <sub className="underline text-kb-purple">
                    {formateDate(experiences[selected].dateStarted)}
                    {' - '}
                    {experiences[selected].dateFinished
                        ? formateDate(experiences[selected].dateFinished)
                        : 'Now'}
                </sub>

                <PortableText value={experiences[selected].body} />
            </FadeUp>
        );
    };

    return (
        <div className="h-screen grid grid-rows-[1fr_3fr_1fr] sm:grid-rows-3 sm:grid-cols-3">
            <main className="sm:row-span-2 sm:col-span-2 flex justify-center items-center p-4 border-b-1 border-dotted sm:border-0">
                {renderCompany(experiences[selected]._id)}
            </main>
            <aside className="border-pastel-grey p-8 overflow-scroll sm:row-span-2 sm:col-start-3 sm:border-l-1 sm:p-16">
                {renderBody(experiences[selected]._id)}
            </aside>

            <footer className="flex justify-around items-center sm:gap-16 border-dotted border-pastel-grey border-0 sm:col-span-2 sm:row-start-3 sm:border-t-1">
                {experiences.map((_, index) => {
                    return (
                        <Name
                            className={`text-lg transition-colors ${
                                selected === index
                                    ? 'text-pastel-grey'
                                    : 'text-night'
                            }`}
                            onClick={() => {
                                setSelected(index);
                            }}
                            key={index}
                        >
                            {index}
                        </Name>
                    );
                })}
            </footer>
            <aside className="p-8 border-t-1 border-dotted border-pastel-grey items-center justify-center hidden sm:flex sm:row-start-3 sm:col-start-3 sm:border-l-1">
                {renderLogo(experiences[selected]._id)}
            </aside>
        </div>
    );
};
