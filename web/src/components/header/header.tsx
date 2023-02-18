import { Url, baseUrl } from '@website-v3/web/constants/types';
import {
    featuredContentState,
    mouseState,
    showMenuState,
} from '@website-v3/web/helpers/state/atoms';
import { colourBlack, fontSizeExtraLarge } from '@website-v3/web/styles';
import { Body2, H1, H3 } from '@website-v3/web/styles/typography';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
    FeaturedCard,
    FeaturedCardWrapper,
    FeaturedContent,
    FeaturedContentWrapper,
    HeaderItem,
    HeaderSitemap,
    Menu,
    MenuItems,
    NavItem,
    NavLine1,
    NavLine2,
    StyledHeader,
} from './header-styled';

type HeaderProps = {
    navItems: Url[];
};

export const Header = ({ navItems }: HeaderProps) => {
    const featuredContent = useRecoilValue(featuredContentState);
    const [toggleMenu, setToggle] = useRecoilState(showMenuState);
    const setMouseState = useSetRecoilState(mouseState);
    const router = useRouter();

    const fade = useSpring({
        opacity: toggleMenu ? 1 : 0,
        config: config.stiff,
    });

    const renderNavItems = () => {
        return navItems.map((item, index) => (
            <NavItem
                key={index}
                onClick={() => {
                    router.push(item.url);
                    setToggle(false);
                }}
                role="header.navItems"
            >
                <animated.div style={fade}>{item.name}</animated.div>
            </NavItem>
        ));
    };

    const renderFeaturedContent = () => {
        return featuredContent.map((item) => {
            const type = item._type == 'project' ? 'projects' : 'blog';
            const url = `${baseUrl}${type}/${item.slug}`;
            return (
                <Link key={item._id} href={url}>
                    <FeaturedCardWrapper onClick={() => setToggle(false)}>
                        <FeaturedCard>
                            <Image
                                src={item.imageUrl}
                                width={200}
                                height={200}
                            />
                        </FeaturedCard>
                        <Body2
                            color="inherit"
                            textDirection="center"
                            margin="15px 0 0 0"
                        >
                            {item.title}
                        </Body2>
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
                    style={{
                        top: '7.5%',
                    }}
                >
                    <animated.div style={fade}>MENU</animated.div>
                </H1>

                <MenuItems>
                    <HeaderSitemap>{renderNavItems()}</HeaderSitemap>

                    <div />

                    {featuredContent.length !== 0 && (
                        <animated.div style={fade}>
                            <FeaturedContentWrapper>
                                <H3
                                    color="inherit"
                                    textDirection="center"
                                    margin="0 0 15px 0"
                                >
                                    Featured Content
                                </H3>
                                <FeaturedContent>
                                    {renderFeaturedContent()}
                                </FeaturedContent>
                            </FeaturedContentWrapper>
                        </animated.div>
                    )}
                </MenuItems>
            </Menu>
            <HeaderItem
                toggled={toggleMenu}
                onMouseOver={() => setMouseState('hidden')}
                onMouseLeave={() => setMouseState('default')}
                onMouseDown={() => setToggle(!toggleMenu)}
            >
                <NavLine1 toggled={toggleMenu} />
                <NavLine2 toggled={toggleMenu} />
            </HeaderItem>
        </StyledHeader>
    );
};
