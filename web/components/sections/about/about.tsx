import React from "react";
import { Container, Flex } from "@website-v3/web/components/layout";
import {
  VertSeparator,
  Separator
} from "./about-styles";
import { H2, Body1 } from "@website-v3/web/components/typography";
import { useInView } from "react-intersection-observer";
import { TextTrail } from "@website-v3/web/helpers/springs";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <Container size="XS">
      <Separator expand={inView}/>
      <Flex justifyContent="space-around" alignItems="center" ref={ref}>
        <Flex direction="column" alignItems={"flex-start"}>
          <TextTrail on={inView}>
            <H2>ABOUT</H2>
            <H2>ME</H2>
          </TextTrail>
        </Flex>
        <VertSeparator expand={inView}/>
        <Body1 fontWeight="bold" style={{textTransform: "uppercase"}}>
          <TextTrail on={inView}>
            {"Currently in my final year studying Computer Science."}<br/>
            {"You can find me on LinkedIn, throw me a follow on Github"}<br />
            {"or come look at what I've been working on here."}
          </TextTrail>
        </Body1>
      </Flex>
      <Separator expand={inView}/>
    </Container>
  );
};
