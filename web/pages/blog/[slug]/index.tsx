import Image from "next/image";
import React from "react";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { Article } from "@website-v3/web/constants/types";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { H1 } from "@website-v3/web/styles";
import { PortableText } from "@portabletext/react";
import { Container } from "@website-v3/web/components";
import { NextPageContext } from "next";

type Props = {
  article: Article,
}

const ArticlePage = ({ article } : Props) => {
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

        <H1>{article.title}</H1>
        {/* <PortableText value={article.body} /> */}
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