import React from "react";
import { StarsBG } from "@website-v3/web/components/sections/experience/experience-styled";
import { Article } from "@website-v3/web/constants/types";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { A, colourDarkGrey, H1 } from "@website-v3/web/styles";
import { Container } from "@website-v3/web/components";
import { NextPageContext } from "next";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Image from "next/image";
import { ImageWrapper } from "../../../components/sections/blog/blog-styled";

type Props = {
  article: Article,
}

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
`;

const ArticlePage = ({ article } : Props) => {
  return (
    <StarsBG>  
      <HeadingContainer>
        <H1 textDirection="center">{article.title}</H1>
      </HeadingContainer>

      <Container
        size={"L"}
        style={{
          alignItems: "center",
          padding: "10vh 0",
        }}>

        <div style={{textAlign: "left", background: colourDarkGrey, padding: 25}}>
          <ReactMarkdown
            components={{
              a: ({...props}: any) => <A href={props.href}>{props.children}</A>,
              img: ({...props}: any) =>
                <ImageWrapper>
                  <Image
                    src={props.src}
                    width={160}
                    height={160}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="/stars.gif"
                  />
                </ImageWrapper>
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