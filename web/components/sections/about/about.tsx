import React from "react";
import { Container, Flex } from "@website-v3/web/components/layout";
import {
  VertSeparator,
  Separator
} from "./about-styles";
import { H2, Body1 } from "@website-v3/web/styles/typography";
import { useInView } from "react-intersection-observer";
import { TextTrail } from "@website-v3/web/helpers/springs";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <Container size="XS">
      <Separator expand={inView}/>
      <Flex alignItems="center" justifyContent="space-between" style={{height: "30vh", padding: 50}}>
        <Flex ref={ref} >
          <TextTrail on={inView}>
            <H2 fontSize="5vw">ABOUT</H2>
            <H2 fontSize="5vw">ME</H2>
          </TextTrail>
        </Flex>
        <VertSeparator expand={inView}/>
        <Body1
          fontSize={"calc(1em + 0.25vw);"}
          fontWeight="bold"
          style={{
            textTransform: "uppercase",
            padding: 25,
            width: "50vw",
            display: "inline-block",
          }}>
          <TextTrail on={inView}>
            {`Currently in my final year of Computer Science.
              You can find me on LinkedIn, throw me a follow on Github
              or come look at what I've been working on here.
            `}
          </TextTrail>
        </Body1>
      </Flex>
      <Separator expand={inView}/>
    </Container>
  );
};
