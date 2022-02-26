import React, { ReactNode } from "react";
import styled from "styled-components";
import { useSpring, animated as a, config } from "react-spring";
import { colourBlack, colourDarkGrey, colourLightBrown, defaultTransition, fontSizeSmall, fontWeightBold, smBreakpoint } from "../../styles";

export const Nav = styled.header<{toggled: boolean}>`
  padding: 20px 13.5px;
  position: sticky;
  top: 50px;
  right: 50px;
  width: fit-content;
  float: right;
  border-radius: 25px;
  transition: ${defaultTransition};
  z-index: 2;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.toggled ? "" : colourDarkGrey};
  }

  @media (max-width: ${smBreakpoint}) {
    top: 25px;
    right: 25px;
  }
`;
export type LineProps = {
  hovered: boolean,
}

export const HeaderSitemap = styled.div`
  position: absolute;
  bottom: 25%;
  left: 25%;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.a`
  padding: 5px;
  margin: 5px;
  width: fit-content;
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightBold};
  position: relative;

  &::after {
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: ${colourBlack};
    transition: width 0.15s ease 0s, left 0.15s ease 0s;
    width: 0px;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const NavLine1 = ({
  toggled
}: {toggled: boolean}) => {
  const props = useSpring({
    width: 24,
    height: 2,
    marginBottom: 6,
    transform: toggled
      ? "translate(0px, 4px) rotateZ(45deg)"
      : "translate(0px, 0px) rotateZ(0deg)",
    backgroundColor: toggled ? colourBlack : colourLightBrown,
    config: config.default,
  });

  return (
    <a.div style={props} />
  );
};

export const NavLine2 = ({
  toggled
}: {toggled: boolean}) => {
  const props = useSpring({
    height: 2,
    width: toggled ? "24px" : "16px",
    transform: toggled
      ? "translate(0px, -4px) rotateZ(-45deg)"
      : "translate(0px, 0px) rotateZ(0deg)",
    backgroundColor: toggled ? colourBlack : colourLightBrown,
    config: config.default,
  });

  return (
    <a.div style={props} />
  );
};

export const Menu = ({
  toggled,
  children
}: {toggled: boolean, children: ReactNode}) => {
  const Menu = styled.div`
    background-color: ${colourLightBrown};
    overflow: hidden;
    position: fixed;
    z-index: 2;
    width: 1000vw;
    top: 0;
    left: 0;

    & > * {
      z-index: 2;
      color: ${colourBlack};
      position: absolute;
      left: 0.5%;
    }
  `;

  const props = useSpring({
    height: toggled ? "100vh" : "0vh",
    config: config.slow,
  });
  
  return (
    <Menu as={a.div} style={props}>
      {children}
    </Menu>
  );
};