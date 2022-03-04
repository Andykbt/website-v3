import styled from "styled-components";
import { colourBlack, colourCyan, colourDarkGrey, colourLightBrown, mdBreakpoint, smBreakpoint, xsBreakpoint } from "@website-v3/web/styles/";

export const StarsBG = styled.div`
    height: 100vh;
    background-image: url("/stars.gif");
    position: relative;
`;

export const Center = styled.div`
    transform: translateY(25vh);
    margin: auto;
    background-color: ${colourBlack};
    width: 50vw;

    @media (max-width: ${smBreakpoint}) {
        width: 75vw;
        transform: translateY(10vh);
    };

    @media (max-width: ${xsBreakpoint}) {
        width: 100vw;
    }
`;
    
export const TableHeader = styled.div`
    border: dotted 1px;
    text-align: center;
    padding: 10px;
`;

export const TableBody = styled.div<{show: boolean}>`
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    border: dotted 1px;
    overflow: hidden;
    transition: max-height 5s;
    padding: 7.5px;
    max-height: ${props => props.show ? "100vh" : "0vh"};
`;

export const TableItemsWrapper = styled.div`
    flex: 1;
    display: flex;
    overflow: auto;

    @media (max-width: ${mdBreakpoint}) {
        grid-column: 1/3;
        justify-content: flex-start;
        x-overflow: scroll;
        padding-bottom: 5px;
    };

    ::-webkit-scrollbar {
        height: 0.75em;
    };

    ::-webkit-scrollbar-thumb {
        background-color: ${colourLightBrown};
        border-radius: 5px;
    }
`;

export const TableItems = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width: ${mdBreakpoint}) {
        flex-direction: row;
    }
`;

export const Button = styled.button`
    background: transparent;
    font-size: 1.5rem;
    border: none;
    text-align: left;
    border-left: solid 5px ${colourDarkGrey};
    padding: 10px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    color: ${colourLightBrown};

    &:hover {
        color: ${colourCyan};
    }
`;

export const TableContent = styled.div`
    padding: 10px 25px;
    @media (max-width: ${mdBreakpoint}) {
        grid-column: 1/3;
    };
`;

export const Slider = styled.div<{height: number}>`
    background: ${colourCyan};
    height: 48px;
    width: 5px;
    position: absolute;
    top: ${props => props.height}px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    @media (max-width: ${mdBreakpoint}) {
        display: none;
    };
`;