import React, { ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { Card, Container } from "@website-v3/web/components";
import { Input } from "@website-v3/web/components/contact/contact-styled";
import { SearchResults } from "@website-v3/web/components/searchResults";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { Article, ArticleSchema, baseUrl } from "@website-v3/web/constants/types";
import { blocksToText } from "@website-v3/web/helpers/sanity";
import { createArticle, getAllArticles } from "@website-v3/web/lib/redis";
import { SanityClient } from "@website-v3/web/sanity";
import { Body1, fontSizeExtraLarge, H1, H2 } from "@website-v3/web/styles";
import { debounce } from "lodash";
import Head from "next/head";

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const SearchContainer = styled.div`
  margin: 25px 10px;
`;

const Blog = ({
  articles
}: { articles: ArticleSchema[] }) => {
  const [hits, setHits] = useState([]);

  const renderArticles = () => {
    return articles.map((item, index) => {
      return (
        <Card
          key={index}
          title={item.title}
          href={`${baseUrl}blog/${item.slug}`}
          excerpt={item.excerpt}
          image={item.imageUrl}
          isSmall
        />
      );
    });
  };

  const search = async (event: ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;

    if (q.length === 0) {
      setHits([]);
    } else if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      setHits(result.articles);
    }
  };

  const debouncedResults = useMemo(() => {
    return debounce(search, 300);
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
          <Input
            style={{ marginBottom: 25 }}
            onChange={debouncedResults}
            placeholder="Search posts"
            type="text"
          />
          <SearchResults hits={hits} />
        </SearchContainer>

        {articles
          ? (
            <ArticleContainer style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
              {renderArticles()}
            </ArticleContainer>
          ) : (
            <H2>Oops! Something went wrong :P</H2>
          )
        }
      </Container>
    </StarsBG>
  );
};

export const getServerSideProps = async () => {
  const articles = await getAllArticles();

  if (articles.length !== 0 ) {
    const tmp = articles.map((item) => {
      return item.entityData;
    });

    return {
      props: { "articles": tmp }
    };
  }

  const data: Article[] = await SanityClient.fetch(`*[ _type == 'article' ] {
    "imageUrl": image.asset -> url,
    ...,
  }`);

  data.forEach((item) => {
    const { title, slug, _updatedAt } = item;

    createArticle({
      title,
      "slug": slug.current,
      "updatedAt": _updatedAt,
      "excerpt": blocksToText(item.excerpt),
      "imageUrl": item.imageUrl,
    });
  });

  return {
    props: { "articles": data }
  };
};

export default Blog;