import styled from "styled-components";
import { colourLightBrown } from "@website-v3/web/styles";

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
`;