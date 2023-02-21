import Image from 'next/image';

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
        <div className="h-screen grid grid-cols-3 grid-rows-3 border-t-1 border-dotted border-pastel-grey">
            <main className="row-span-2 col-span-2 flex justify-center items-center p-4">
                {renderCompany(experiences[selected]._id)}
            </main>
            <aside className="row-span-2 col-start-3 border-l-1 border-pastel-grey p-16 overflow-scroll">
                {renderBody(experiences[selected]._id)}
            </aside>

            <footer className="flex justify-around items-center gap-16 col-span-2 row-start-3 border-t-1 border-dotted border-pastel-grey">
                {experiences.map((_, index) => {
                    return (
                        <Name
                            className={`transition-colors ${
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
            <aside className="p-8 col-start-3 row-start-3 border-l-1 border-t-1 border-dotted border-pastel-grey flex items-center justify-center">
                {renderLogo(experiences[selected]._id)}
            </aside>
        </div>
    );
};
