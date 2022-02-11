import styled, { css } from "styled-components";

type GridProps = {
  noOfColumns: number,
  gap: string,
}

export const gridStyles = ({
  noOfColumns,
  gap,
}: GridProps) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${noOfColumns}, 1fr);
    grid-gap: ${gap};
  `;
};

export const Grid = styled.div<GridProps>`
  ${gridStyles}
`;
