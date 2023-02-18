import { SanityClient } from '@website-v3/web/lib/sanity';
import { Container } from '@website-v3/web/src/components';
import { ImageWrapper } from '@website-v3/web/src/components/sections/blog/blog-styled';
import { StarsBG } from '@website-v3/web/src/components/sections/experience/experience-styled';
import { Article } from '@website-v3/web/src/constants/types';
import { A, H1, colourDarkGrey } from '@website-v3/web/styles';
import { NextPageContext } from 'next';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

type Props = {
    article: Article;
};

const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100%;
`;

const ArticlePage = ({ article }: Props) => {
    return (
        <StarsBG>
            <HeadingContainer>
                <H1 textDirection="center">{article.title}</H1>
            </HeadingContainer>

            <Container
                size={'L'}
                style={{
                    alignItems: 'center',
                    padding: '10vh 0',
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
                                        width={160}
                                        height={160}
                                        layout="fill"
                                        objectFit="contain"
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
