import React from "react";
import { Url } from "../../constants/types";
import { Flex } from "../layout";
import { NavItemContainer, NavItem, Nav } from "./header-styled";

type HeaderProps = {
	navItems: Url[],
}

const Header = ({
  navItems,
}: HeaderProps) => {

  const renderNavItems = () => {
    return (
      <NavItemContainer>
        {navItems.map((item, index) => <a key={index} href={item.url}>{item.name}</a>)}
      </NavItemContainer>
    );
  };

  return (
    <Nav>
      {renderNavItems()}
    </Nav>
  );
};

export default Header;