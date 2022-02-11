import styled from "styled-components";
import { colourLightBrown, defaultTransition } from "@website-v3/web/styles";

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
  transition: ${defaultTransition};
`;