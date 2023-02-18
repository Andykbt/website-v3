import { Container } from '@website-v3/web/components/layout';
import { SkillType } from '@website-v3/web/constants/types';
import { colourBlack, defaultTransition } from '@website-v3/web/styles';
import { H2, H3 } from '@website-v3/web/styles/typography';
import React, { useEffect, useRef, useState } from 'react';

import {
    CardContainer,
    Separator,
    SkillWrapper,
    SkillsContainer,
    StickyContainer,
} from './skills-styled';

type SkillsProps = {
    pages: number;
    skills: SkillType[];
};

type CardProps = {
    hoveredCard: number;
    setHovered: (v: number) => void;
    isSelected: boolean | undefined;
    svg: any[];
    index: number;
    title: string;
    background: string;
    items: any[];
};

const Card = ({
    hoveredCard,
    setHovered,
    isSelected,
    index,
    title,
    svg,
    background,
    items,
}: CardProps) => {
    const [selected, setSelected] = useState(false);
    const isFocused = hoveredCard === index;
    const leftOffset = 40 + index * 10;

    useEffect(() => {
        if (isSelected) {
            setSelected(isSelected);
        } else {
            setSelected(false);
        }
    }, [isSelected]);

    const renderIcons = () => {
        return items.map((item, index) => {
            return (
                <div
                    key={index}
                    onMouseEnter={(e) => {
                        const element = e.target as HTMLElement;
                        element.style.transform = 'scale(1.1)';
                        element.style.fill = item.colour;
                    }}
                    onMouseLeave={(e) => {
                        const element = e.target as HTMLElement;
                        element.style.transform = 'scale(1)';
                        element.style.fill = 'black';
                    }}
                    style={{
                        transition: defaultTransition,
                    }}
                    dangerouslySetInnerHTML={{
                        __html: item.svg[0].children[0].text,
                    }}
                />
            );
        });
    };

    return (
        <CardContainer
            onMouseEnter={() => setHovered(index)}
            onMouseDown={() => setSelected(!selected)}
            left={leftOffset}
            focus={isFocused}
            selected={selected}
            colour={background}
        >
            <>
                <H3 color={colourBlack}>{title}</H3>
                <Separator />
            </>
            {selected ? (
                <SkillWrapper>{renderIcons()}</SkillWrapper>
            ) : (
                <div
                    style={{ width: '85%', margin: 'auto' }}
                    dangerouslySetInnerHTML={{
                        __html: svg[0].children[0].text,
                    }}
                />
            )}
        </CardContainer>
    );
};

export const Skills = ({ pages, skills }: SkillsProps) => {
    const skillContainerRef = useRef<HTMLDivElement | null>(null);
    const [expand, setExpand] = useState<boolean>(false);
    const [hovered, setHovered] = useState<number>(1);
    const [bottom, setBottom] = useState(0);
    const [gap, setGap] = useState(0);

    const handleScroll = () => {
        const rect: DOMRect | undefined =
            skillContainerRef.current?.getBoundingClientRect();

        if (!rect) {
            return;
        }

        if (rect.top < 150) {
            setExpand(true);
        } else {
            setExpand(false);
        }

        setBottom(rect.height - rect.bottom);
        setGap(rect.height / (skills.length + 2));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const renderItems = () => {
        return skills.map((item, index) => {
            return (
                <Card
                    key={`skills-${index}`}
                    index={index}
                    title={item.category}
                    background={item.colour}
                    hoveredCard={hovered}
                    setHovered={setHovered}
                    isSelected={bottom > gap * (index + 1)}
                    items={item.skills}
                    svg={item.svg}
                />
            );
        });
    };

    return (
        <SkillsContainer pages={pages} ref={skillContainerRef}>
            <StickyContainer sticky expand={expand}>
                <Container
                    size={'xxl'}
                    style={{ padding: '15vh 0 5vh', width: '80vw' }}
                >
                    <H2 fontSize="5vw" textDirection="center">
                        {"Here are some of the things I've learnt"}
                    </H2>
                </Container>
                {renderItems()}
            </StickyContainer>
        </SkillsContainer>
    );
};
