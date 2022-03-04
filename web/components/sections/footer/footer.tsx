import Link from "next/link";
import React from "react";
import { 
  Body1, 
  fontSizeMediumResponsive,
  H2 } from "@website-v3/web/styles";
import {
  Col0,
  Col1,
  FooterContainer,
  LinkWrapper,
  Sitemap
} from "./footer-styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <Sitemap>
        <Col0>
          <H2 fontSize={`calc(15px + ${fontSizeMediumResponsive})`}>
            Andy Truong
          </H2>
          <Body1>Software Engineer.</Body1>
        </Col0>

        <Col1>
          <H2 fontSize={`calc(15px + ${fontSizeMediumResponsive})`}>
            <LinkWrapper><Link href={"/contact"}>Contact</Link></LinkWrapper>
          </H2>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>LinkedIn</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://github.com/Andykbt"}>Github</Link></LinkWrapper>
          <LinkWrapper><Link href={"https://www.linkedin.com/in/andy-truong-591449216/"}>Email</Link></LinkWrapper>
        </Col1>
      </Sitemap>
    </FooterContainer>
  );
};
