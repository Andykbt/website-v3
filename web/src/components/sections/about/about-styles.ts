import { colourLightBrown, smBreakpoint } from '@website-v3/web/styles';

import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const Separator = styled.div<{ expand: boolean }>`
    border: dotted 1px ${colourLightBrown};
    z-index: 1;
    transition: margin 1s ease-in-out;
    margin: ${(props) => (props.expand ? '0%' : '0 50%')};
`;

export const VertSeparator = styled.div<{ expand: boolean }>`
    border: dotted 1px ${colourLightBrown};
    z-index: 1;
    width: 1px;
    transition: height 1s ease-in-out;
    height: ${(props) => (props.expand ? '30vh' : '0vh')};

    @media (max-width: ${smBreakpoint}) {
        width: 100%;
        height: 0;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;

    @media (max-width: ${smBreakpoint}) {
        flex-direction: column;
        margin: 25px 0;
        gap: 25px;
    }
`;

const textScroll = keyframes`
    from   { transform: translateX(0%); }
    to { transform: translateX(-100%); }
`;

export const AboutBody = styled.div`
    height: 30vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    & h2 {
        padding-left: 5vw;
        animation: ${textScroll} 33s infinite;
    }

    @media (max-width: ${smBreakpoint}) {
        padding: 0;
        height: initial;
    }
`;
