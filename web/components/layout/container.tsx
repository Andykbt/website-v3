import styled, { css } from "styled-components";
import {
  widthExtraExtraLarge,
  widthExtraLarge,
  widthLarge,
  widthMedium,
  widthSmall,
  widthExtraSmall,
} from "@website-v3/web/styles";

type ContainerProps = {
  size?: string,
  width?: string,
  margin?: string,
  height?: string,
};

export const containerStyles = (props:ContainerProps) => {
  let size: string;

  switch (props.size) {
  case "xxl":
    size = widthExtraExtraLarge;
    break;
  case "xl":
    size = widthExtraLarge;
    break;
  case "L":
    size = widthLarge;
    break;
  case "M":
    size = widthMedium;
    break;
  case "S":
    size = widthSmall;
    break;
  case "XS":
    size = widthExtraSmall;
    break;
  default:
    size = widthExtraExtraLarge;
    break;
  }

  return css`
    max-width: ${props.width || size };
    max-height: ${props.height || "auto"};
    margin: ${props.margin || "auto"};
  `;
};

export const Container = styled.div<ContainerProps>`
  ${containerStyles}
`;