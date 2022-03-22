import styled from "styled-components";
import { colourLightBrown, colourBlack, smBreakpoint, defaultTransition, colourDarkGrey } from "@website-v3/web/styles";

export const ProjectsContainer = styled.div`
  padding: 5vh 5vw;
  position: relative;
  border-top: solid 1px ${colourLightBrown};
`;

export const ImageSlider = styled.div<{
  image: string,
  x: number | null,
  y: number | null,
}>`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  z-index: 0;
  width: 22.22vh;
  height: 22.22vh;
  cursor: pointer;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

export const ProjectContainer = styled.div`
  cursor: pointer;
  z-index: 1;
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

  @media (max-width: ${smBreakpoint}) {
    text-shadow: none;
  }
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

  @media (max-width: ${smBreakpoint}) {
    width: inherit;
    height: inherit;
    min-height: 360px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  max-width: 90vw;
  min-height: 90vh;
  margin: 5vh auto;

  @media (max-width: ${smBreakpoint}) {
    padding-top: 2.5vh;
    flex-direction: column;
  }
`;

export const ProjectBody = styled.div`
  width: 50%;
  display: inline-block;
  padding: 0 50px 0 25px;

  @media (max-width: ${smBreakpoint}) {
    padding: 0;
    flex-direction: column;
    width: initial;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0;
  gap: 25px;
  
  @media (max-width: ${smBreakpoint}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ProjectHeading = styled.div`
  color: ${colourBlack};
  font-size: 17.5vw;
  transform: translateX(-40%);
  width: fit-content;
  text-shadow: 0 -2px 2px #d5cdc4, -2px 0 2px #d5cdc4, 0 2px 2px #d5cdc4, 2px 0 2px #d5cdc4;

  @media (max-width: ${smBreakpoint}) {
    transform: translateX(0);
  }
`;

export const StickyCenter = styled.div`
  width: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BackButton = styled.div`
  color: black;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  font-size: 25px;
  padding: 10px 19.25px;
  text-align: center;
  border-radius: 0%;
  cursor: pointer;
  color: ${colourLightBrown};
  
  background-color: ${colourBlack};
  transition: ${defaultTransition};

  &:hover {
    border-radius: 50%;
  }

  &:before {
    content: "<";
  }
`;

export const NextProject = styled.div<{background: string}>`
  background-color: ${props => props.background || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5vh auto 0;
  width: 90vw;
  cursor: pointer;
  transition: ${defaultTransition};

  &:hover {
    width: 100%;
  }
`;

export const Technologies = styled.div`
  margin-top: 15px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
`;

export const TechItem = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  width: fit-content;
  background: ${colourDarkGrey};
  border-radius: 50px;
  padding: 10px;
`;