import { colourDarkGrey } from '@website-v3/web/styles';
import styled from 'styled-components';

export const ButtonContainer = styled.button<{
    background: string | undefined;
}>`
    padding: 25px;
    outline: none;
    border: none;
    border-radius: 9999px;
    border: solid 2px ${colourDarkGrey};
    background: ${(props) =>
        props.background ? props.background : 'transparent'};
`;
