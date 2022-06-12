import styled from "styled-components";
import { colourDarkGrey, colourLightBrown, colourPurple, defaultTransition, smBreakpoint } from "@website-v3/web/styles";

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 50px;
`;

export const BlogContainer = styled.div`
  display: flex;
  padding: 2vw 5vw;
  justify-content: space-between;

  @media (max-width: ${smBreakpoint}) {
    flex-direction: column;
  }
`;

export const BlogArticle = styled.a<{selected:boolean, progress: number}>`
  cursor: pointer;
  opacity: ${props => props.selected ? 1: 0.5};
  transition: ${defaultTransition};
  font-size: 12px;
  position: relative;
  border-bottom: solid 1px ${colourLightBrown};

  &:hover {
    opacity: 1;
  }  

  ${props => props.selected &&
    `&:after {
      position: absolute;
      content: " ";
      bottom: -1.5px;
      height: 2px;
      left: 0;
      transition: ${defaultTransition};
      width: ${props.progress}%;
      background-color: ${colourPurple};
    `}
`;

export const ExcerptContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colourDarkGrey};
  padding: 15px;
  border-radius: 25px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 500px;
  position: relative;
  cursor: none;

  & img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export const MoreArticlesSoon = styled.div`
  display: inline-block;
`;