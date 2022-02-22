import React, { useState } from "react";
import { Url } from "../../constants/types";
import { NavItem, Nav, NavLine1, NavLine2, Menu, HeaderSitemap } from "./header-styled";
import { useRouter } from "next/router";
import { fontSizeExtraLarge, colourBlack } from "@website-v3/web/styles";
import { H1 } from "@website-v3/web/styles/typography";
import { animated, config, useSpring } from "react-spring";

type HeaderProps = {
	navItems: Url[],
}

export const Header = ({
  navItems,
}: HeaderProps) => {
  const [toggleMenu, setToggle] = useState(false);
  const router = useRouter();
  
  const fade = useSpring({
    opacity: toggleMenu ? 1 : 0,
    config: config.stiff,
  });

  const renderNavItems = () => {
    return navItems.map((item, index) =>
      <NavItem
        key={index}
        href={item.url}
        onClick={() => router.push(item.url)}
        role="header.navItems"
      >
        <animated.div style={fade}>
          {item.name}
        </animated.div>
      </NavItem>
    );
  };


  return (
    <>
      <Menu toggled={toggleMenu}>
        <H1
          color={colourBlack}
          fontSize={fontSizeExtraLarge}
          style ={{
            top: "7.5%",
          }}>
          <animated.div style={fade}>
            MENU
          </animated.div>
        </H1>

        <HeaderSitemap>
          {renderNavItems()}
        </HeaderSitemap>
      </Menu>
      <Nav
        toggled={toggleMenu}
        onMouseDown={() => setToggle(!toggleMenu)}>
        <NavLine1 toggled={toggleMenu} />
        <NavLine2 toggled={toggleMenu} />
      </Nav>
    </>
  );
};