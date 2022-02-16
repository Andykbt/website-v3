import Link from "next/link";
import React from "react";
import { Body1, fontSizeMediumResponsive, fontSizeSmallResponsive, H2 } from "../../../styles";
import { Col0, Col1, Col2, FooterContainer, LinkWrapper, Sitemap } from "./footer-styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <Sitemap>
        <Col0>
          <H2 fontSize={fontSizeMediumResponsive}>Andy Truong</H2>
          <Body1>Software Engineer.</Body1>
        </Col0>

        <Col1>
          <H2 fontSize={fontSizeMediumResponsive}>Contact</H2>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>LinkedIn</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>Github</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>Email</Link></LinkWrapper>
        </Col1>

        <Col2>
          <H2 fontSize={fontSizeMediumResponsive}>asdf</H2>
          <Body1 fontSize={fontSizeSmallResponsive}>Software Engineer. Software Engineer. Software Engineer.</Body1>
        </Col2>
      </Sitemap>
    </FooterContainer>
  );
};
