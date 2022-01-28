import styled, { css } from "styled-components";
import {  
  colourBlack,
  colourCyan,
  colourDarkGrey,
  colourLightBrown,
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
`;

export const StickyContainer = styled.div<StickyContainerProps>`
  ${props => props.sticky && "position: sticky; top: 0;"}
  margin: auto;
  width: ${props => props.expand ? 100 : 85}%;
  background: ${colourDarkGrey};
  transition: width 2s;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Card = styled.div`
  border-radius: 25px;
  background-color: ${colourDarkGrey};
  width: 15vw;
  height: 25vh;
  margin: 0 5px;
  border: solid 1px black;
`;

export const CardHeader = styled.div<CardHeaderProps>`
  padding: 1.75vh;
  background-color: ${props => props.colour};
  border-radius: 25px 25px 0 0;
`;