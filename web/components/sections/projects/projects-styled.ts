import styled from "styled-components";
import { colourLightBrown } from "../../../styles";

export const ProjectsContainer = styled.div`
  margin: 5vh 5vw;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IndexContainer = styled.div`
  width: 16.666vw;
  display: inline-block;
  margin-left: 5.555vw;
`;

export const Name = styled.div<{hover?: boolean}>`
  display: inline-block;
  font-size: 3.5vw;
  text-shadow: 0 -1px 1px ${colourLightBrown}, -1px 0 1px ${colourLightBrown}, 0 1px 1px ${colourLightBrown}, 1px 0 1px ${colourLightBrown};
`; 

export const ArrowContainer = styled.div`
  display: inline-block;
  width: 2.5vw;
  float: right;
`;