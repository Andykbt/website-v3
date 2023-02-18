import { Container } from '@website-v3/web/src/components';
import { Search } from '@website-v3/web/src/components/search';
import { StarsBG } from '@website-v3/web/src/components/sections/experience/experience-styled';
import { AlgoliaConfig } from '@website-v3/web/src/constants/types';
import { initPages } from '@website-v3/web/src/helpers/initPage';
import { algoliaState } from '@website-v3/web/src/helpers/state/atoms';
import { Body1, H1, fontSizeExtraLarge } from '@website-v3/web/styles';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const SearchContainer = styled.div`
    margin: 25px 10px;
`;

const Blog = ({ algolia }: { algolia: AlgoliaConfig }) => {
    const setAlgolia = useSetRecoilState(algoliaState);

    useEffect(() => {
        setAlgolia(algolia);
    }, []);

    return (
        <StarsBG style={{ minHeight: '100vh', height: 'initial' }}>
            <Head>
                <title>Blog | Andy Truong</title>
            </Head>

            <Container>
                <H1 textDirection="center" fontSize={fontSizeExtraLarge}>
                    Blog
                </H1>
                <Body1 textDirection="center">
                    A personal diary and log of things i find interesting
                </Body1>
                <SearchContainer>
                    <Search />
                </SearchContainer>
            </Container>
        </StarsBG>
    );
};

export const getServerSideProps = async () => {
    const { algolia } = await initPages();

    return {
        props: {
            algolia,
        },
    };
};

export default Blog;
