import styled, { css } from "styled-components";
import { colourCyan, colourLightBrown, defaultTransition } from "../../../styles";

export const FooterContainer = styled.footer`
  border-top: solid 1px ${colourLightBrown};
  padding: 10vh 10vw;
`;

export const Sitemap = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  width: 66.666%;
  margin: auto;
  column-gap: 1rem;
`;

const colStyles = () => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1.25rem;
  `;
};

export const Col0 = styled.div`
  grid-column: span 3 / span 3;
  ${colStyles}
`;

export const Col1 = styled.div`
grid-column: span 2 / span 2;
grid-column-start: 5;
  ${colStyles}
`;

export const Col2 = styled.div`
  grid-column: span 2 / span 2;
  grid-column-start: 7;
  ${colStyles}
`;

export const Col3 = styled.div`
  grid-column: span 3 / span 3;
  grid-column-start: 10;
  ${colStyles}
`;

export const LinkWrapper = styled.div`
  & > a {
    transition: ${defaultTransition};
    position: relative;
  }

  & > a::after {
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: ${colourCyan};
    transition: width 0.15s ease 0s, left 0.15s ease 0s;
    width: 0px;
  }

  & > a:hover:after {
    width: 100%;
    left: 0;
  }
`;