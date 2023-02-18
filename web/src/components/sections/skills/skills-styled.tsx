import {
    colourBlack,
    colourDarkGrey,
    defaultTransition,
    lgBreakpoint,
    smBreakpoint,
} from '@website-v3/web/styles';
import styled from 'styled-components';

type SkillsContainerProps = {
    pages: number;
};

type StickyContainerProps = {
    sticky: boolean;
    expand: boolean;
};

type CardHeaderProps = {
    colour: string;
};

export const SkillsContainer = styled.div<SkillsContainerProps>`
    min-height: ${(props) => props.pages * 100}vh;

    @media (max-width: ${smBreakpoint}) {
        min-height: initial;
    }
`;

export const Separator = styled.div`
    border: dotted 1px ${colourBlack};
    transition: ${defaultTransition};
`;

export const StickyContainer = styled.div<StickyContainerProps>`
    ${(props) => props.sticky && 'position: sticky; top: 0;'}
    margin: auto;
    width: ${(props) => (props.expand ? 100 : 85)}%;
    background: ${colourDarkGrey};
    transition: width 2s, height 2s;
    height: ${(props) => (props.expand ? 100 : 85)}vh;

    @media (max-width: ${smBreakpoint}) {
        position: initial;
        height: initial;
        padding: 0 0 2.5vh;
    }
`;

export const CardWrapper = styled.div`
    width: fit-content;
    margin: auto;
    display: flex;
`;

export const SkillWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 10px;
    gap: 25px;
`;

export const CardContainer = styled.div<{
    colour: string;
    left: number;
    focus: boolean;
    selected: boolean | undefined;
}>`
    background-color: ${(props) => props.colour};
    transform: translate(-50%)
        ${(props) => (props.focus ? 'scale(1)' : 'scale(0.9)')};
    ${(props) => props.focus && 'z-index: 1;'}
    left: ${(props) => props.left}%;
    transition: ${defaultTransition};
    position: absolute;
    width: ${(props) => (props.selected ? '500px' : '350px')};
    height: 350px;
    padding: 25px;
    margin: 0;
    border-radius: 25px;

    @media (max-width: ${smBreakpoint}) {
        transform: translate(0);
        position: initial;
        left: initial;
        margin: 10vh auto;
        width: ${(props) => (props.selected ? '310px' : '250px')};
        height: fit-content;
    }
`;

export const CardHeader = styled.div<CardHeaderProps>`
    padding: 1.75vh;
    background-color: ${(props) => props.colour};
    border-radius: 25px 25px 0 0;

    @media (max-width: ${lgBreakpoint}) {
        border-radius: 0;
    }
`;
