import React, { useState } from "react";
import { Url } from "../../constants/types";
import { CircleSvg } from "../../styles/svg/Circle-svg";
import { NavItem, Nav, NavItemHome } from "./header-styled";
import { useRouter } from "next/router";

type HeaderProps = {
	navItems: Url[],
}

export const Header = ({
  navItems,
}: HeaderProps) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const renderNavItems = () => {
    return navItems.map((item, index) =>
      <NavItem
        key={index}
        href={item.url}
        onClick={() => router.push(item.url)}
        role="header.navItems"
      >
        {item.name}
      </NavItem>
    );
  };

  return (
    <Nav>
      <NavItemHome
        onMouseEnter={() => setProgress(100)}
        onMouseLeave={() => setProgress(0)}
        onClick={() => router.push("/")}
        data-testid="header.home-button">
        <CircleSvg radius={25} stroke={2} progress={progress}>{"N D"}</CircleSvg>
      </NavItemHome>
      {renderNavItems()}
    </Nav>
  );
};