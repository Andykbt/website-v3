import { Url } from '@website-v3/web/src/constants/types';
import {
    mouseState,
    showMenuState,
} from '@website-v3/web/src/helpers/state/atoms';
import { colourBlack, fontSizeExtraLarge } from '@website-v3/web/styles';
import { H1 } from '@website-v3/web/styles/typography';

import { useRouter } from 'next/router';

import {
    HeaderItem,
    HeaderSitemap,
    Menu,
    MenuItems,
    NavItem,
    NavLine1,
    NavLine2,
} from './header-styled';

import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useRecoilState, useSetRecoilState } from 'recoil';

type HeaderProps = {
    navItems: Url[];
};

export const Header = ({ navItems }: HeaderProps) => {
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
            >
                <animated.div style={fade}>{item.name}</animated.div>
            </NavItem>
        ));
    };

    return (
        <>
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
        </>
    );
};
