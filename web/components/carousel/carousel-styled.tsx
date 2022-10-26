import styled from "styled-components";
import { smBreakpoint } from "@website-v3/web/styles";

export const Carousel = styled.div<{elements: number}>`
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 10px;
  width: ${props => props.elements * 60}%;

  @media (max-width: ${smBreakpoint}) {
    width: 100% !important;
  }
`;

export const Inner = styled.div`
  transition: transform 0.3s;
`;

export const CarouselItem = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-right: 6.6666%;
  
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: ${smBreakpoint}) {
    width: 100%;
    margin-right: 5%;
  }

  & p {
    white-space: normal;
  }
`;