import styled from "styled-components";
import { colourBlack, colourDarkGrey, colourLightBrown, defaultTransition } from "@website-v3/web/styles";


export const Hit = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  transition: ${defaultTransition};
  background: ${colourDarkGrey};
  padding: 20px;
  margin: 10px 0;
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