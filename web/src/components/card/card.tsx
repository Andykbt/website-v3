import Image from "next/legacy/image";
import Link from 'next/link';

import { Button } from '../button';
import { CardContainer, ToolsContainer } from './card-styled';

import { PortableText } from '@portabletext/react';
import { ExpandBorder } from '@website-v3/web/src/helpers/springs';
import { colourBlack, fontSizeSmall } from '@website-v3/web/styles';
import { Body2, H3 } from '@website-v3/web/styles/typography';
import React, { useState } from 'react';

type CardProps = {
    title: string;
    excerpt?: any[] | string;
    href: string;
    canCopy?: boolean;
    image?: string;
    isSmall?: boolean;
    badgeText?: string;
};

export const Card: React.FC<CardProps> = ({
    title,
    excerpt,
    href,
    canCopy,
    image,
    isSmall,
}) => {
    const [hover, setHover] = useState(false);

    return (
        <CardContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            isSmall={isSmall || false}
        >
            <Link href={href}>
                <ExpandBorder on={hover}>
                    <Image
                        src={image || '/stars.gif'}
                        width={750}
                        height={750}
                        objectFit={'cover'}
                    />
                </ExpandBorder>
            </Link>

            <div style={{ margin: '0.75em 0' }}>
                <H3 fontSize={fontSizeSmall}>{title}</H3>
                {excerpt && (
                    <Body2>
                        <PortableText value={excerpt} />
                    </Body2>
                )}
            </div>

            {canCopy && (
                <ToolsContainer data-testid={'card.copy-url'}>
                    <Button
                        label="Click to copy url"
                        background={colourBlack}
                        onClick={() => navigator.clipboard.writeText(href)}
                    />
                </ToolsContainer>
            )}
        </CardContainer>
    );
};
