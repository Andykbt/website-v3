import styled, { css } from 'styled-components';

import {
    colourCyan,
    colourLightBrown,
    defaultTransition,
    mdBreakpoint,
} from '../../../styles';

export const FooterContainer = styled.footer`
    border-top: solid 1px ${colourLightBrown};
    padding: 10vh 10vw;
`;

export const Sitemap = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto;

    @media (max-width: ${mdBreakpoint}) {
        width: 95%;
    }
`;

const colStyles = () => {
    return css`
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 1.25rem;
    `;
};

export const Col0 = styled.div`
  grid-column 1 / span 3;
  ${colStyles}
`;

export const Col1 = styled.div`
  grid-column 5 / span 3;
  ${colStyles}
`;

export const Col2 = styled.div`
  grid-column 9 / span 3;
  ${colStyles}
`;

export const Col3 = styled.div`
    // grid-column-start: 8;
    ${colStyles}
`;

export const LinkWrapper = styled.div`
    & > a {
        transition: ${defaultTransition};
        position: relative;
    }

    & > a::after {
        bottom: 0;
        content: '';
        display: block;
        height: 3px;
        left: 50%;
        position: absolute;
        background: ${colourCyan};
        transition: width 0.15s ease 0s, left 0.15s ease 0s;
        width: 0px;
    }

    & > a:hover:after {
        width: 100%;
        left: 0;
    }
`;
