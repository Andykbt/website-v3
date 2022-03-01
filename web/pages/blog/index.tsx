import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Card, Container } from "../../components";
import { Input } from "../../components/contact/contact-styled";
import { SearchResults } from "../../components/searchResults";
import { StarsBG } from "../../components/sections/experience/experience-styled";
import { Article, ArticleSchema } from "../../constants/types";
import { blocksToText } from "../../helpers/sanity";
import { createArticle, getAllArticles } from "../../lib/redis";
import { SanityClient } from "../../sanity";
import { fontSizeExtraLarge, H1, H2 } from "../../styles";

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
          href={item.slug}
          excerpt={item.excerpt}
          image={item.imageUrl}
          isSmall
        />
      );
    });
  };

  const search = async (event: ChangeEvent<HTMLInputElement>) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      setHits(result.articles);
    }
  };

  return (
    <StarsBG style={{ minHeight: "100vh", height: "initial" }}>
      <Container>
        <H1 textDirection="center" fontSize={fontSizeExtraLarge}>Blog</H1>
        <SearchContainer>
          <Input
            style={{ marginBottom: 25 }}
            onChange={search}
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