import Image from 'next/legacy/image';
import Link from 'next/link';

import {
    ArticleContainer,
    ArticleInfo,
    BlogArticle,
    BlogContainer,
    ImageWrapper,
    Titles,
} from './blog-styled';

import { PortableText } from '@portabletext/react';
import Badge from '@website-v3/web/src/components/badge';
import Carousel from '@website-v3/web/src/components/carousel';
import { CarouselItem } from '@website-v3/web/src/components/carousel/carousel-styled';
import { baseUrl } from '@website-v3/web/src/constants/types';
import { ExpandBorder } from '@website-v3/web/src/helpers/springs';
import { mouseState } from '@website-v3/web/src/helpers/state/atoms';
import { Body1, H1 } from '@website-v3/web/styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

type BlogProps = {
    articles: any[];
};

export const Blog = ({ articles }: BlogProps) => {
    const [selected, setSelected] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => prev + 10);
            if (progress === 100) {
                setProgress(0);
                setSelected((prev) => prev + 1);
                if (selected === articles.length - 1) {
                    setSelected(0);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [progress]);

    const renderTitles = () => {
        return articles.map((item, index) => (
            <BlogArticle
                key={index}
                progress={progress}
                onClick={() => {
                    setProgress(0);
                    setSelected(index);
                }}
                selected={selected === index}
            >
                {item.title}
            </BlogArticle>
        ));
    };

    const renderExcerpts = () => {
        return articles.map((item, index) => (
            <BlogCard
                key={index}
                slug={item.slug.current}
                imageUrl={item.imageUrl}
                title={item.title}
                portableText={item.excerpt}
                category={item.category}
            />
        ));
    };

    return (
        <>
            <H1 textDirection="center">Blog</H1>
            <Body1 textDirection="center">
                A personal diary and log of things i find interesting
            </Body1>

            <BlogContainer>
                <Titles>
                    {renderTitles()}
                    {/* <BlogArticle selected={false} progress={0} href={'/blog'}>
                        Read more...
                    </BlogArticle> */}
                </Titles>
                <Carousel index={selected}>{renderExcerpts()}</Carousel>
            </BlogContainer>
        </>
    );
};

const BlogCard = ({
    slug,
    imageUrl,
    title,
    portableText,
    category,
}: {
    slug: string;
    imageUrl: string;
    title: string;
    portableText: any[];
    category: string;
}) => {
    const url = `${baseUrl}blog/${slug}`;
    const [hover, setHover] = useState(false);
    const setMouseState = useSetRecoilState(mouseState);

    return (
        <CarouselItem
            onMouseEnter={() => {
                setHover(true);
                setMouseState('inspect');
            }}
            onMouseLeave={() => {
                setHover(false);
                setMouseState('default');
            }}
        >
            <Link href={url}>
                <ArticleContainer>
                    <ExpandBorder on={hover}>
                        {/* (Wrapper for image)*/}
                        <ImageWrapper>
                            <Image
                                src={imageUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={`${title} Image`}
                            />
                        </ImageWrapper>

                        {/* (Contains title and excerpt for article)*/}
                        <ArticleInfo>
                            <h1 className="whitespace-nowrap overflow-hidden text-ellipsis">
                                {title}
                            </h1>
                            <PortableText value={portableText} />
                        </ArticleInfo>

                        <Badge label={category} hover={hover} />
                    </ExpandBorder>
                </ArticleContainer>
            </Link>
        </CarouselItem>
    );
};
