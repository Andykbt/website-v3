import {
    colorGrey,
    colourBlack,
    colourLightBrown,
    defaultTransition,
    fontSizeSmall,
    fontWeightBold,
    smBreakpoint,
} from '@website-v3/web/styles';
import React, { ReactNode } from 'react';
import { animated as a, config, useSpring } from 'react-spring';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    float: right;
    display: flex;
    justify-content: end;
    align-items: center;
    top: 50px;
    right: 50px;
    z-index: 2;

    @media (max-width ${smBreakpoint}) {
        top: 25px;
        right: 5px;
    }
`;

export const HeaderItem = styled.div<{ toggled: boolean }>`
    padding: 20px 13.5px;
    width: fit-content;
    z-index: 2;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        border-radius: 25px;
        width: 0px;
        height: 0px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition-property: width, height;
        transition-duration: 0.25s;
        transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        background: ${(props) => (props.toggled ? colorGrey : colorGrey)};
    }

    &:hover:before {
        width: 50px;
        height: 50px;
    }
`;

export type LineProps = {
    hovered: boolean;
};

export const HeaderSitemap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavItem = styled.div`
    padding: 5px;
    margin: 5px;
    width: fit-content;
    font-size: ${fontSizeSmall};
    font-weight: ${fontWeightBold};
    position: relative;

    &::after {
        bottom: 0;
        content: '';
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

export const NavLine1 = ({ toggled }: { toggled: boolean }) => {
    const props = useSpring({
        width: 24,
        height: 2,
        marginBottom: 6,
        transform: toggled
            ? 'translate(0px, 4px) rotateZ(45deg)'
            : 'translate(0px, 0px) rotateZ(0deg)',
        backgroundColor: toggled ? colourBlack : colourLightBrown,
        config: config.default,
    });

    return <a.div style={props} />;
};

export const NavLine2 = ({ toggled }: { toggled: boolean }) => {
    const props = useSpring({
        height: 2,
        width: toggled ? '24px' : '16px',
        transform: toggled
            ? 'translate(0px, -4px) rotateZ(-45deg)'
            : 'translate(0px, 0px) rotateZ(0deg)',
        backgroundColor: toggled ? colourBlack : colourLightBrown,
        config: config.default,
    });

    return <a.div style={props} />;
};

export const SearchMenu = ({
    toggled,
    children,
}: {
    toggled: boolean;
    children: ReactNode;
}) => {
    const Menu = styled.div`
        background-color: ${colourLightBrown};
        overflow: hidden;
        position: fixed;
        z-index: 2;
        height: 100%;
        top: 0;
        left: 0;
    `;

    const props = useSpring({
        width: toggled ? '100vw' : '0vw',
        config: config.slow,
    });

    return (
        <Menu as={a.div} style={props}>
            {children}
        </Menu>
    );
};

export const Menu = ({
    toggled,
    children,
}: {
    toggled: boolean;
    children: ReactNode;
}) => {
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
        }

        & > h1 {
            position: absolute;
            left: 0.5%;
        }
    `;

    const props = useSpring({
        height: toggled ? '100vh' : '0vh',
        config: config.slow,
    });

    return (
        <Menu as={a.div} style={props}>
            {children}
        </Menu>
    );
};

export const MenuItems = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    position: absolute;
    bottom: 15%;
    width: 100%;
    width: 89.25vw;
    margin: 0 0.5%;
`;

export const FeaturedContent = styled.div`
    display: flex;
    gap: 25px;
    justify-content: space-around;
`;

export const FeaturedCardWrapper = styled.a`
    width: 200px;

    &:hover div {
        border-radius: 25px;
    }
`;

export const FeaturedContentWrapper = styled.div`
    background: ${colourBlack};
    color: ${colourLightBrown};
    border-radius: 25px;
    padding: 15px;

    @media (max-width: ${smBreakpoint}) {
        display: none;
    }
`;

export const FeaturedCard = styled.div`
    overflow: hidden;
    background: ${colourLightBrown};
    transition: ${defaultTransition};

    & > span {
        vertical-align: bottom;
    }
`;
