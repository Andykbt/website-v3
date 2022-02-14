import styled from "styled-components";
import { colourBlack, colourCyan, colourDarkGrey, defaultTransition, smBreakpoint } from "../../styles";

export const Nav = styled.header`
  grid-template-columns: 0.75fr repeat(3, minmax(0, 1fr));
  background: ${colourDarkGrey};
  margin: 0 25px 0 auto;
  border-radius: 25px;
  position: sticky;
  display: grid;
  padding: 2.5vh;
  width: 400px;
  z-index: 10;
  top: 25px;
  border: solid 1px ${colourBlack};

  @media (max-width: ${smBreakpoint}) {
    width: 100%;
    top: 0;
    border-radius: 0px;
  }
`;

export const NavItem = styled.a`
  padding: 15px;
  text-align: center;
  opacity: 0.5;
  transition: ${defaultTransition};
  position: relative;

  &:hover {
    opacity: 1;
  }

  &::after {
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

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const NavItemHome = styled.a`
  cursor: pointer;
`;