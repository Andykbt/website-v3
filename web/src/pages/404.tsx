import { Container } from '~/components';
import { StarsBG } from '~/components/common/Stars';
import { Mouse } from '~/components/mouse';
import { LinkWrapper } from '~/components/sections/footer/footer-styled';
import { H1, H2, fontSizeExtraLarge } from '~/styles/index';

import Head from 'next/head';
import Link from 'next/link';

import React from 'react';

const Custom404 = () => {
    return (
        <StarsBG>
            <Head>
                <title>Oops! Something went wrong...</title>
            </Head>
            <Mouse />
            <Container>
                <H1 textDirection="center" fontSize={fontSizeExtraLarge}>
                    Oops!
                </H1>
                <H2 textDirection="center">
                    Click{' '}
                    <LinkWrapper style={{ display: 'inline-block' }}>
                        <Link href="/">here</Link>
                    </LinkWrapper>{' '}
                    to go home
                </H2>
            </Container>
        </StarsBG>
    );
};

export default Custom404;
