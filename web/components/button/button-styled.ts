import styled from "styled-components";
import { colourDarkGrey } from "../../styles";

export const ButtonContainer = styled.button`
  padding: 25px;
  outline: none;
  border: none;
  border-radius: 9999px;
  border: solid 2px ${colourDarkGrey};
  background: transparent;
  cursor: pointer;
`;