import styled from 'styled-components';

import { colourDarkGrey, smBreakpoint } from '../../styles';

export const CardContainer = styled.div<{ isSmall: boolean }>`
    position: relative;
    width: ${(props) => (props.isSmall ? '320px' : '60%')};
    margin: auto;
    padding: 25px;
    border-radius: 25px;

    background-color: ${colourDarkGrey};
    margin-bottom: 25px;

    @media (max-width: ${smBreakpoint}) {
        width: 80%;
    }
`;

export const ToolsContainer = styled.div`
    position: absolute;
    top: 35px;
    left: 35px;

    @media (max-width: ${smBreakpoint}) {
        display: none;
    }
`;
