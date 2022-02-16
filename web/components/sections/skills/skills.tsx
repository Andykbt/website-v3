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
import { useIsTablet } from "../../../helpers/hooks/useWindowDims";

type SkillsProps = {
  pages: number,
}

type CardProps = {
  colour: string,
  title: string,
  isSelected?: boolean,
  isTablet?: boolean,
}

const CardComponent = ({
  colour,
  title,
  isSelected,
  isTablet,
}: CardProps) => {
  const [hovered, setHovered] = useState(false);

  const styles = useSpring({
    transform: isTablet
      ? "translateY(0)"
      : (hovered || isSelected)
        ? "translateY(2vh)"
        : "translateY(20vh)",
    config: config.default,
  });

  return (
    <animated.div
      style={{...styles}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      <Card>
        <CardHeader colour={colour}>
          <H3 color={colourDarkGrey}>{title}</H3>
        </CardHeader>
      </Card>
    </animated.div>
  );
};


export const Skills = ({
  pages,
}: SkillsProps) => {
  const skillContainerRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState(false);
  const [expand, setExpand] = useState(false);
  const [bottom, setBottom] = useState(0);
  const [gap, setGap] = useState(0);
  const isTablet = useIsTablet();

  const skills = [
    {
      title: "frontend",
      color: colourCyan
    },
    {
      title: "backend",
      color: colourYellow
    },
    {
      title: "other",
      color: colourPink
    }
  ];

  const renderSkills = () => {
    return skills.map((item, index) => {
      return (
        <CardComponent
          key={index}
          title={item.title}
          colour={item.color}
          isSelected={bottom > gap * (index + 1) && bottom < gap * (index + 2)}
          isTablet={isTablet}
        />
      );
    });
  };

  const handleScroll = () => {
    const rect: DOMRect | undefined = skillContainerRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    if (rect.top < 150) {
      setExpand(true);
    } else {
      setExpand(false);
    }
    if (rect.top < 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }

    setBottom(rect.height - rect.bottom);
    setGap(rect.height/(skills.length + 2));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (() => window.removeEventListener("scroll", handleScroll));
  }, []);

  return (
    <SkillsContainer pages={pages} ref={skillContainerRef}>
      <StickyContainer sticky expand={expand}>
        <Container size={"xxl"} style={{ padding: "15vh 0", width: "80vw" }}>
          <H2 fontSize="5vw" textDirection="center">{"Here are some of the things I've learnt"}</H2>
        </Container>
        <CardContainer>
          {renderSkills()}
        </CardContainer>
        <Separator expand={sticky}/>
      </StickyContainer>
    </SkillsContainer>
  );
};