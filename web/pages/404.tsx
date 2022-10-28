import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Container } from "../components";
import { Mouse } from "../components/mouse";
import { StarsBG } from "../components/sections/experience/experience-styled";
import { LinkWrapper } from "../components/sections/footer/footer-styled";
import { fontSizeExtraLarge, H1, H2 } from "../styles";

const Custom404 = () => {
  return (
    <StarsBG>
      <Head>
        <title>Oops! Something went wrong...</title>
      </Head>
      <Mouse/>
      <Container>
        <H1 textDirection="center" fontSize={fontSizeExtraLarge}>Oops!</H1>
        <H2 textDirection="center">Click <LinkWrapper style={{ display: "inline-block" }}><Link href="/">here</Link></LinkWrapper> to go home</H2>
      </Container>
    </StarsBG>
  );
};

export default Custom404;