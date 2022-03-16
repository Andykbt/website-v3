import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "@website-v3/web/components";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { AlgoliaConfig } from "@website-v3/web/constants/types";
import { fontSizeExtraLarge, H1, Body1 } from "@website-v3/web/styles";
import Head from "next/head";
import { initPages } from "../../helpers/initPage";
import { Search } from "../../components/search";
import { useSetRecoilState } from "recoil";
import { algoliaState } from "../../helpers/state/atoms";

const SearchContainer = styled.div`
  margin: 25px 10px;
`;

const Blog = ({
  algolia,
}: {
  algolia: AlgoliaConfig,
}) => {
  const setAlgolia = useSetRecoilState(algoliaState);

  useEffect(() => {
    setAlgolia(algolia);
  }, []);

  return (
    <StarsBG style={{ minHeight: "100vh", height: "initial" }}>
      <Head>
        <title>Blog | Andy Truong</title>
      </Head>

      <Container>
        <H1 textDirection="center" fontSize={fontSizeExtraLarge}>Blog</H1>
        <Body1 textDirection="center">A personal diary and log of things i find interesting</Body1>
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
    }
  };
};

export default Blog;