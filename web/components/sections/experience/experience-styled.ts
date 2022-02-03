import styled from "styled-components";
import { colourBlack, colourCyan, colourDarkGrey, colourLightBrown } from "@website-v3/web/styles/";

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
`;
    
export const TableHeader = styled.div`
    border: dotted 1px;
    text-align: center;
    padding: 10px;
`;

export const TableBody = styled.div<{show: boolean}>`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: dotted 1px;
    overflow: hidden;
    transition: max-height 5s;
    padding: 7.5px;
    max-height: ${props => props.show ? "100vh" : "0vh"};
`;

export const TableItems = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
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

export const Slider = styled.div<{height: number}>`
    background: ${colourCyan};
    height: 48px;
    width: 5px;
    position: absolute;
    top: ${props => props.height}px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
`;