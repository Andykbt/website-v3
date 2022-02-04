import React from "react";
import { Flex } from "..";
import { Url } from "../../constants/types";
import { NavItem, Nav, NavItemCircle } from "./header-styled";

type HeaderProps = {
	navItems: Url[],
}

export const Header = ({
  navItems,
}: HeaderProps) => {

  const renderNavItems = () => {
    return navItems.map((item, index) =>
      <NavItem key={index} href={item.url}>
        {item.name}
      </NavItem>
    );
  };
  
  // todo make loading ring svg
  return (
    <Nav>
      <Flex justifyContent="center">
        <NavItemCircle href={"/"}>N D</NavItemCircle>
      </Flex>
      {renderNavItems()}
    </Nav>
  );
};