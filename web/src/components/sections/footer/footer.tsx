import Link from 'next/link';

import { Col0, Col1, LinkWrapper, Sitemap } from './footer-styled';

import { Body1, H2, fontSizeMediumResponsive } from '@website-v3/web/styles';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-night p-16">
            <Sitemap>
                <Col0>
                    <H2 fontSize={`calc(15px + ${fontSizeMediumResponsive})`}>
                        Andy Truong
                    </H2>
                    <Body1>Software Engineer.</Body1>
                </Col0>

                <Col1>
                    <H2 fontSize={`calc(15px + ${fontSizeMediumResponsive})`}>
                        <LinkWrapper>
                            <Link href={'/contact'}>Contact</Link>
                        </LinkWrapper>
                    </H2>
                    <LinkWrapper>
                        <Link
                            href={
                                'https://www.linkedin.com/in/andy-truong-591449216/'
                            }
                        >
                            LinkedIn
                        </Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link href={'https://github.com/Andykbt'}>Github</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link href={'mailto:andy.truong2001@gmail.com'}>
                            Email
                        </Link>
                    </LinkWrapper>
                </Col1>
            </Sitemap>
        </footer>
    );
};
