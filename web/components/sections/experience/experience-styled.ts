import styled from "styled-components";
import { colourBlack } from "../../../styles";

export const StarsBG = styled.div`
    height: 100vh;
    background-image: url("/stars.gif");
    position: relative;
`;

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colourBlack};
`;

export const TableHeader = styled.div`
    border: dotted 1px;
    text-align: center;
    padding: 10px;
`;

export const TableBody = styled.div<{show: boolean}>`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: dotted 1px;
    overflow: hidden;
    transition: all 5s;
    max-height: ${props => props.show ? "100vh" : "0vh"};
`;

export const TableItems = styled.div`
    display: flex;
    flex-direction: column;
`;