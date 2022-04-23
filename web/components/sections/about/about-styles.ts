import styled from "styled-components";
import { colourLightBrown, smBreakpoint } from "@website-v3/web/styles";

export const Separator = styled.div<{expand: boolean}>`
  border: dotted 1px ${colourLightBrown};
  z-index: 1;
  transition: margin 1s ease-in-out;
  margin: ${props => props.expand ? "0%" : "0 50%"};
`;

export const VertSeparator = styled.div<{expand: boolean}>`
  border: dotted 1px ${colourLightBrown};
  z-index: 1;
  width: 1px;
  transition: height 1s ease-in-out;
  height: ${props => props.expand ? "30vh" : "0vh"};

  @media (max-width: ${smBreakpoint}) {
    width: 100%;
    height: 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px;

  @media (max-width: ${smBreakpoint}) {
    flex-direction: column;
    margin: 25px 0;
    gap: 25px;
  }
`;

export const AboutBody = styled.div`
  padding: 25px;
  width: 50vw;
  font-size: calc(1em + 0.25vw);
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${smBreakpoint}) {
    padding: 0;
    height: initial;
  }
`;