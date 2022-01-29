import styled, { css } from "styled-components";

type FlexProps = {
  direction?: string,
  center?: boolean,
  alignItems?: string,
  justifyContent?: string,
}

export const flexStyles = (props:FlexProps) => {
  return css`
    display: flex;
    align-items: ${props.center ? "center" : props.alignItems};
    justify-content: ${props.center ? "center" : props.justifyContent};
    flex-direction: ${props.direction};
  `;
};

export const Flex = styled.div<FlexProps>`
  ${flexStyles}
`;