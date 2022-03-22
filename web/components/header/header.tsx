import React from "react";
import { baseUrl, Url } from "@website-v3/web/constants/types";
import {
  NavItem,
  NavLine1,
  NavLine2,
  Menu,
  HeaderSitemap,
  StyledHeader,
  HeaderItem, 
  MenuItems,
  FeaturedContent,
  FeaturedCard,
  FeaturedCardWrapper,
  FeaturedContentWrapper
} from "./header-styled";
import { useRouter } from "next/router";
import { fontSizeExtraLarge, colourBlack } from "@website-v3/web/styles";
import { H1, H3, Body2 } from "@website-v3/web/styles/typography";
import { animated, config, useSpring } from "react-spring";
import { useRecoilState, useRecoilValue } from "recoil";
import { featuredContentState, showMenuState } from "@website-v3/web/helpers/state/atoms";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
	navItems: Url[],
}

export const Header = ({
  navItems,
}: HeaderProps) => {
  const featuredContent = useRecoilValue(featuredContentState);
  const [toggleMenu, setToggle] = useRecoilState(showMenuState);
  const router = useRouter();
  
  const fade = useSpring({
    opacity: toggleMenu ? 1 : 0,
    config: config.stiff,
  });

  const renderNavItems = () => {
    return navItems.map((item, index) =>
      <NavItem
        key={index}
        onClick={() => {
          router.push(item.url);
          setToggle(false);
        }}
        role="header.navItems"
      >
        <animated.div style={fade}>
          {item.name}
        </animated.div>
      </NavItem>
    );
  };

  const renderFeaturedContent = () => {
    return featuredContent.map((item) => {
      const type = item._type == "project" ? "projects" : "blog";
      const url = `${baseUrl}${type}/${item.slug}`;
      return (
        <Link key={item._id} href={url}>
          <FeaturedCardWrapper onClick={() => setToggle(false)}>
            <animated.div style={fade}>
              <FeaturedCard>
                <Image src={item.imageUrl} width={200} height={200}/>
              </FeaturedCard>
              <Body2 color="inherit" textDirection="center" margin="15px 0 0 0">{item.title}</Body2>
            </animated.div>
          </FeaturedCardWrapper>
        </Link>
      );
    });
  };


  return (
    <StyledHeader>
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

        <MenuItems>
          <HeaderSitemap>
            {renderNavItems()}
          </HeaderSitemap>

          <div/>

          {featuredContent.length !== 0 &&
            <FeaturedContentWrapper>
              <H3 color="inherit" textDirection="center" margin="0 0 15px 0">Featured Content</H3>
              <FeaturedContent>
                {renderFeaturedContent()}
              </FeaturedContent>
            </FeaturedContentWrapper>
          }
        </MenuItems>
      </Menu>
      <HeaderItem
        toggled={toggleMenu}

        onMouseDown={() => setToggle(!toggleMenu)}>
        <NavLine1 toggled={toggleMenu} />
        <NavLine2 toggled={toggleMenu} />
      </HeaderItem>
    </StyledHeader>
  );
};