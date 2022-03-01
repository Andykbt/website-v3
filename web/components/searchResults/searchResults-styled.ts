import styled from "styled-components";
import { colourBlack, colourDarkGrey, colourLightBrown, defaultTransition } from "../../styles";

export const Container = styled.div`
  background-color: ${colourDarkGrey};
  border-radius: 50px;
  padding: 25px;
`;

export const Hit = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 25px;
  transition: ${defaultTransition};
  padding: 20px;
  border-radius: 25px;

  &:hover {
    box-shadow: 0 0 0 4px ${colourBlack}, 0 0 0 6px ${colourLightBrown}, 0 0 ${colourLightBrown}, 0 0 ${colourLightBrown};
  }
`;

export const HitBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;