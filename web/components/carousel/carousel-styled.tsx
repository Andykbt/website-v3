import styled from "styled-components";
import { smBreakpoint } from "@website-v3/web/styles";

export const Carousel = styled.div`
  overflow: hidden;
`;

export const Inner = styled.div<{translateX: number}>`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: translateX(-${props => props.translateX}%);
`;

export const CarouselItem = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-right: 6.6666%;

  @media (max-width: ${smBreakpoint}) {
    width: 100%;
    margin-right: 0;
  }
`;