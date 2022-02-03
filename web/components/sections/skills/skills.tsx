import React, { useState, useRef, useEffect } from "react";
import { Container } from "@website-v3/web/components/layout";
import { animated } from "react-spring";
import { 
  SkillsContainer,
  Card,
  Separator,
  StickyContainer,
  CardContainer,
  CardHeader
} from "./skills-styled";
import { useSpring, config } from "react-spring";
import { H2, H3 } from "@website-v3/web/styles/typography";
import { colourCyan, colourDarkGrey, colourPink, colourYellow } from "@website-v3/web/styles";

type SkillsProps = {
  pages: number,
}

type CardProps = {
  colour: string,
  title: string,
  items?: string[],
}

const CardComponent = ({
  colour,
  title
}: CardProps) => {
  const [hovered, setHovered] = useState(false);

  const styles = useSpring({
    transform: hovered ? "translateY(2vh)" : "translateY(20vh)",
    config: config.default,
  });

  return (
    <animated.div style={{...styles}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Card>
        <CardHeader colour={colour}>
          <H3 color={colourDarkGrey}>{title}</H3>
        </CardHeader>
      </Card>
    </animated.div>
  );
};


export const Skills = ({
  pages
}: SkillsProps) => {
  const skillContainerRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleScroll = () => {
    const top:number | undefined = skillContainerRef.current?.getBoundingClientRect().top;
    if (!top) {
      return;
    }

    if (top < 150) {
      setExpand(true);
    } else {
      setExpand(false);
    }
    if (top < 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (() => window.removeEventListener("scroll", handleScroll));
  }, []);

  return (
    <SkillsContainer pages={pages} ref={skillContainerRef}>
      <StickyContainer sticky expand={expand}>
        <Container size={"xxl"} style={{ padding: "15vh 0" }}>
          <H2 textDirection="center">{"Here are some of the things I've learnt"}</H2>
        </Container>
        <CardContainer>
          <CardComponent
            title={"Front End"}
            colour={colourCyan}
          />
          <CardComponent
            title={"Back End"}
            colour={colourYellow}
          />
          <CardComponent
            title={"Other Tools"}
            colour={colourPink}
          />
        </CardContainer>
        <Separator expand={sticky}/>
      </StickyContainer>
    </SkillsContainer>
  );
};