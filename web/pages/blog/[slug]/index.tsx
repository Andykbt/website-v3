import Image from "next/image";
import React from "react";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { Article } from "@website-v3/web/constants/types";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { H2 } from "@website-v3/web/styles";
import { Container } from "@website-v3/web/components";
import { NextPageContext } from "next";
import ReactMarkdown from "react-markdown";

type Props = {
  article: Article,
}

const ArticlePage = ({ article } : Props) => {
  console.log(article.body);
  return (
    <StarsBG>
      <Container
        size={"xxl"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10vh",
        }}>
        
        <Image
          src={article.imageUrl || "/stars.gif"}
          width={500}
          height={500}
        />

        <H2 textDirection="center">{article.title}</H2>
        <ReactMarkdown>{article.body}</ReactMarkdown>
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
      props: {}
    };
  } else {
    return {
      props: { article }
    };
  }
};

export default ArticlePage;