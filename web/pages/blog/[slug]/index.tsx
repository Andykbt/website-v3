import React from "react";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { Article } from "@website-v3/web/constants/types";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { A, colourDarkGrey, H1 } from "@website-v3/web/styles";
import { Container } from "@website-v3/web/components";
import { NextPageContext } from "next";
import ReactMarkdown from "react-markdown";

type Props = {
  article: Article,
}

const ArticlePage = ({ article } : Props) => {
  return (
    <StarsBG>
      <Container
        size={"xxl"}
        style={{
          alignItems: "center",
          padding: "10vh 0",
        }}>
        
        <H1 textDirection="center">{article.title}</H1>

        <div style={{textAlign: "left", background: colourDarkGrey, padding: 25}}>
          <ReactMarkdown
            components={{
              a: ({...props}: any) => <A href={props.href}>{props.children}</A>
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
      props: {}
    };
  } else {
    return {
      props: { article }
    };
  }
};

export default ArticlePage;