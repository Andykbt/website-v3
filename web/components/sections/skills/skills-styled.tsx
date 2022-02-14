import styled from "styled-components";
import {  
  colourDarkGrey,
  colourLightBrown,
  lgBreakpoint,
} from "@website-v3/web/styles";

type SkillsContainerProps = {
  pages: number,
}

type StickyContainerProps = {
  sticky: boolean,
  expand: boolean,
}

type CardHeaderProps = {
  colour: string,
}

export const SkillsContainer = styled.div<SkillsContainerProps>`
  height: ${props => props.pages * 100}vh;
`;

export const Separator = styled.div<{expand: boolean}>`
  border: dotted 1px ${colourLightBrown};
  z-index: 1;
  transition: margin 1s ease-in-out;
  margin: ${props => props.expand ? "0 15%" : "0 50%"};

  @media (max-width: ${lgBreakpoint}) {
    display: none;
  };
`;

export const StickyContainer = styled.div<StickyContainerProps>`
  ${props => props.sticky && "position: sticky; top: 0;"}
  margin: auto;
  width: ${props => props.expand ? 100 : 85}%;
  background: ${colourDarkGrey};
  transition: width 2s, height 2s;
  height: ${props => props.expand ? 100 : 85}vh;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${lgBreakpoint}) {
    width: 75vw;
    margin: auto;
  };
`;

export const Card = styled.div`
  border-radius: 25px;
  background-color: ${colourDarkGrey};
  width: 15vw;
  height: 25vh;
  margin: 0 5px;
  border: solid 1px black;

  
  @media (max-width: ${lgBreakpoint}) {
    width: 20vw;
    border-radius: 0;
  };
`;

export const CardHeader = styled.div<CardHeaderProps>`
  padding: 1.75vh;
  background-color: ${props => props.colour};
  border-radius: 25px 25px 0 0;

  @media (max-width: ${lgBreakpoint}) {
    border-radius: 0;
  };
`;