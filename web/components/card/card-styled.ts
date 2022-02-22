import styled from "styled-components";
import { colourDarkGrey } from "../../styles";

export const CardContainer = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
  padding: 25px;
  border-radius: 25px;

  background-color: ${colourDarkGrey};
  margin-bottom: 25px;
`;

export const ToolsContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
`;