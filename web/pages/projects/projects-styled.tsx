import styled from "styled-components";
import { colourBlack } from "../../styles";

export const ImageContainer = styled.div`
  width: 45%;
  padding: 0 25px;
  display: inline-block;
`;

export const ProjectBody = styled.div`
  display: inline-block;
  width: 45%;
  position: absolute;
  padding: 0 50px;
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