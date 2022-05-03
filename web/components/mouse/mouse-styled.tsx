import styled from "styled-components";
import { colourLightBrown, colourDarkGrey } from "@website-v3/web/styles";

export const Circle = styled.div<{show: boolean, path: string, isDrag: boolean}>`
  ${props => props.path === "" ? `
    width: ${props.show ? 100 : 0}px;
    height: ${props.show ? 100 : 0}px;

    background: ${colourDarkGrey};
    overflow: hidden;
    border-radius: 50%;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    z-index: 10;
    position: fixed;

    pointer-events: none;

    &:after {
      content: "${props.isDrag ? "Drag" : "Explore"}";
      color: ${colourLightBrown};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }` : `
    width: 22.22vh;
    height: 22.22vh;

    z-index: 10;
    border-radius: 50%;
    position: fixed;

    transition-duration: 200ms;
    transition-timing-function: ease-out;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url(${props.path});
    pointer-events: none;
  `
}`;