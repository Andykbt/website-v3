import Link from "next/link";
import React from "react";
import { Contact } from "@website-v3/web/components/contact";
import { 
  Body1, 
  fontSizeMediumResponsive,
  H2 } from "../../../styles";
import {
  Col0,
  Col1,
  Col2,
  FooterContainer,
  LinkWrapper,
  Sitemap
} from "./footer-styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <Sitemap>
        <Col0>
          <H2 fontSize={fontSizeMediumResponsive}>Andy Truong</H2>
          <Body1>Software Engineer.</Body1>
        </Col0>

        <Col1>
          <LinkWrapper><Link href={"/contact"}>Contact</Link></LinkWrapper>
          <H2 fontSize={fontSizeMediumResponsive}>Contact</H2>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>LinkedIn</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://github.com/Andykbt"}>Github</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>Email</Link></LinkWrapper>
        </Col1>
      </Sitemap>
    </FooterContainer>
  );
};
