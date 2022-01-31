import React from "react";
import { Url } from "../../constants/types";
import { NavItemContainer, Nav } from "./header-styled";

type HeaderProps = {
	navItems: Url[],
}

export const Header = ({
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