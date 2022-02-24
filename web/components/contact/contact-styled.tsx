import styled from "styled-components";
import { colourDarkGrey, colourPink, defaultTransition, fontSizeMedium } from "@website-v3/web/styles";

export const ContactPageWrapper = styled.div`
  background-image: url("/stars.gif");
  margin: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 80vw;
  margin: auto;
  padding-bottom: 100px;
`;

export const Input = styled.input`
  background: ${colourDarkGrey};
  border-radius: 50px;
  font-size: ${fontSizeMedium};
  outline: none;
  border: none;
  border-bottom: dotted 2px;
  height: 150px;
  width: 100%;
  padding: 0 50px;
  color: white;
  transition: ${defaultTransition};

  &:focus {
    border-color: ${colourPink};
  }
`;

export const Loading = styled.div`
  background-color: ${colourDarkGrey};
  border-radius: 9999px;
  padding: 25px;
  width: fit-content;
`;