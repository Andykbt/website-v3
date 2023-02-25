import { StarsBG } from '~/components/common/Stars';
import { Article } from '~/constants/types';

import Image from 'next/image';

import { SanityClient } from '@website-v3/web/lib/sanity';
import { A } from '@website-v3/web/styles';
import { NextPageContext } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
    current: Article;
    prev: Article;
    next: Article;
};

const ArticlePage = ({ current, prev, next }: Props) => {
    return (
        <StarsBG>
            <div className="max-w-5xl m-auto pt-32">
                <h1 className="text-9xl text-center">{current.title}</h1>
            </div>

            <div className="text-left p-6 max-w-4xl m-auto">
                <p className="text-neutral-500 bg-neutral-900 w-fit rounded-lg mb-2 p-2">
                    {new Date(current.publishedAt).toLocaleDateString()}
                </p>

                <ReactMarkdown
                    components={{
                        h1: ({ ...props }: any) => (
                            <h1 className="text-4xl mt-6 mb-6">
                                {props.children}
                            </h1>
                        ),
                        h2: ({ ...props }: any) => (
                            <h2 className="text-2xl mt-6 mb-6">
                                {props.children}
                            </h2>
                        ),
                        a: ({ ...props }: any) => (
                            <A href={props.href}>{props.children}</A>
                        ),
                        img: ({ ...props }: any) => (
                            <Image
                                src={props.src}
                                alt={props.alt}
                                fill={true}
                                className="rounded-lg mb-6"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="/stars.gif"
                            />
                        ),
                    }}
                >
                    {current.body}
                </ReactMarkdown>
            </div>

            <footer className="mt-32 ml-16 mr-16 border-t-1 border-dotted h-64">
                <div className="max-w-4xl bg-night h-full m-auto flex justify-between">
                    <section className="p-8">
                        {prev && (
                            <>
                                <h1 className="text-4xl">Prev</h1>
                                <A href={prev.slug.current}>{prev.title}</A>
                            </>
                        )}
                    </section>

                    <section className="p-8">
                        {next && (
                            <>
                                <h1 className="text-4xl text-right">Next</h1>
                                <A href={next.slug.current}>{next.title}</A>
                            </>
                        )}
                    </section>
                </div>
            </footer>
        </StarsBG>
    );
};

export const getServerSideProps = async (context: NextPageContext) => {
    const slug = context.query.slug;
    const article = await SanityClient.fetch(
        `*[_type == "article" && slug.current == "${slug}"]{
            "current": {
                title,
                slug,
                excerpt,
                body,
                publishedAt,
                "imageUrl": image.asset -> url,
            },
            "prev": *[_type == "article" && ^.publishedAt > publishedAt]|order(publishedAt desc)[0]{
                title,
                slug
            },
            "next": *[_type == "article" && ^.publishedAt < publishedAt]|order(publishedAt asc)[0]{
                title,
                slug
            },
        }[0]`
    );

    if (!article) {
        return {
            destination: '/404',
        };
    }

    return {
        props: { ...article },
    };
};

export default ArticlePage;
