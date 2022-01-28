import styled from "styled-components";
import { colourLightBrown } from "../../../styles";

export const Separator = styled.div<{expand: boolean}>`
  border: dotted 1px ${colourLightBrown};
  z-index: 1;
  transition: margin 1s ease-in-out;
  margin: ${props => props.expand ? "0%" : "0 50%"};
`;

export const VertSeparator = styled.div<{expand: boolean}>`
  border: dotted 1px ${colourLightBrown};
  z-index: 1;
  transition: height 1s ease-in-out;
  height: ${props => props.expand ? "24vh" : "0vw"};
`;