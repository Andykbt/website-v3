import Link from "next/link";
import React, { useState } from "react";
import { Url } from "../../constants/types";
import { CircleSvg } from "../../styles/svg/Circle-svg";
import { NavItem, Nav } from "./header-styled";

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
  
  const [progress, setProgress] = useState(0);

  return (
    <Nav>
      <a
        href={"/"}
        onMouseEnter={() => setProgress(100)}
        onMouseLeave={() => setProgress(0)}>
        <CircleSvg radius={25} stroke={1} progress={progress}>{"N D"}</CircleSvg>
      </a>
      {renderNavItems()}
    </Nav>
  );
};