import styled from "styled-components";
import { colourLightBrown, colourBlack } from "@website-v3/web/styles";

export const ProjectsContainer = styled.div`
  margin: 5vh 5vw;
`;

export const ProjectContainer = styled.a`
`;

export const IndexContainer = styled.div`
  width: 16.666vw;
  display: inline-block;
  margin-left: 5.555vw;
`;

export const Name = styled.div<{hover?: boolean}>`
  display: inline-block;
  font-size: 5vw;
  text-shadow: 0 -1px 1px ${colourLightBrown}, -1px 0 1px ${colourLightBrown}, 0 1px 1px ${colourLightBrown}, 1px 0 1px ${colourLightBrown};
`; 

export const ArrowContainer = styled.div`
  display: inline-block;
  width: 3.5vw;
  float: right;
`;

export const ImageContainer = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
`;

export const ProjectColumn = styled.div`
  display: flex;
  max-width: 90vw;
  height: 85vh;
  margin: 0 auto 17vh;
`;

export const ProjectBody = styled.div`
  width: 50%;
  display: inline-block;
  padding: 0 50px 0 25px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0;
  gap: 25px;
`;

export const ProjectHeading = styled.div`
  color: ${colourBlack};
  font-size: 17.5vw;
  transform: translateX(-40%);
  width: fit-content;
  text-shadow: 0 -2px 2px #d5cdc4, -2px 0 2px #d5cdc4, 0 2px 2px #d5cdc4, 2px 0 2px #d5cdc4;
`;