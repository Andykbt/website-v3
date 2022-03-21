import React from "react";
import { Container, Flex } from "@website-v3/web/components/layout";
import {
  VertSeparator,
  Separator,
  AboutContainer,
  AboutBody
} from "./about-styles";
import { A, H2 } from "@website-v3/web/styles/typography";
import { useInView } from "react-intersection-observer";
import { TextTrail } from "@website-v3/web/helpers/springs";

export const About = () => {
  const [ref, inView] = useInView({
  });

  return (
    <Container size="XS">
      <Separator expand={inView}/>
      <AboutContainer>
        <Flex ref={ref} >
          <TextTrail on={inView}>
            <H2 fontSize="5vw">ABOUT</H2>
            <H2 fontSize="5vw">ME</H2>
          </TextTrail>
        </Flex>
        <VertSeparator expand={inView}/>
        <AboutBody>
          <TextTrail on={inView}>
            <div>
              {"Currently in my final year of Computer Science."}
              {"You can find me on "} <A href="https://www.linkedin.com/in/andy-truong-591449216/">LinkedIn</A>,
              {", throw me a follow on "} <A href="https://github.com/Andykbt">Github</A> {" or "} 
              {"come look at what I've been working on"} <A href="https://github.com/Andykbt">here</A>.
            </div>
          </TextTrail>
        </AboutBody>
      </AboutContainer>
      <Separator expand={inView}/>
    </Container>
  );
};
