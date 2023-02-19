import { SanityClient } from '@website-v3/web/lib/sanity';
import { Container } from '@website-v3/web/src/components';
import { ImageWrapper } from '@website-v3/web/src/components/sections/blog/blog-styled';
import { StarsBG } from '@website-v3/web/src/components/sections/experience/experience-styled';
import { Article } from '@website-v3/web/src/constants/types';
import { A, H1, colourDarkGrey } from '@website-v3/web/styles';

import Image from 'next/image';

import { NextPageContext } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
    article: Article;
};

const ArticlePage = ({ article }: Props) => {
    return (
        <StarsBG>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <H1 textDirection="center">{article.title}</H1>
            </div>

            <Container
                size={'L'}
                style={{
                    alignItems: 'center',
                    padding: '5vh 0',
                }}
            >
                <div
                    style={{
                        textAlign: 'left',
                        background: colourDarkGrey,
                        padding: 25,
                    }}
                >
                    <ReactMarkdown
                        components={{
                            a: ({ ...props }: any) => (
                                <A href={props.href}>{props.children}</A>
                            ),
                            img: ({ ...props }: any) => (
                                <ImageWrapper>
                                    <Image
                                        src={props.src}
                                        layout="fill"
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL="/stars.gif"
                                    />
                                </ImageWrapper>
                            ),
                        }}
                    >
                        {article.body}
                    </ReactMarkdown>
                </div>
            </Container>
        </StarsBG>
    );
};

export const getServerSideProps = async (context: NextPageContext) => {
    const pageSlug = context.query.slug;
    const article = await SanityClient.fetch(
        `*[ _type == "article" && slug.current == "${pageSlug}"][0] {
        "imageUrl": image.asset -> url,
        ...,
    }`
    );

    if (!article) {
        return {
            props: {},
        };
    } else {
        return {
            props: { article },
        };
    }
};

export default ArticlePage;
