import {
  fontSizeMedium,
  colourLightBrown,
  fontWeightMedium,
  fontSizeLarge,
  fontSizeSmall,
  fontWeightLight,
  fontSizeXSmall,
  colourPurple,
  defaultTransition,
} from "@website-v3/web/styles";
import styled, { css } from "styled-components";

type FontProps = {
  fontSize?: string,
  color?: string,
  fontWeight?: string,
  margin?: string,
  textDirection?: string,
};

export const h1Styles = (props: FontProps) => {
  return css`
    font-weight:${fontWeightMedium};
    font-size:${props.fontSize || fontSizeLarge};
    color: ${props.color || colourLightBrown};
    margin: ${props.margin || "0"};
    text-align: ${props.textDirection || "left"};
  `;
};

export const H1 = styled.h1<FontProps>`
    ${h1Styles}
`;

export const h2Styles = (props: FontProps) => {
  return css`
    font-weight:${fontWeightMedium};
    font-size:${props.fontSize || fontSizeMedium};
    color: ${props.color || colourLightBrown};
    margin: ${props.margin || "0"};
    text-align: ${props.textDirection || "left"};
  `;
};

export const H2 = styled.h2<FontProps>`
    ${h2Styles}
`;

export const h3Styles = (props: FontProps) => {
  return css`
    font-weight:${fontWeightMedium};
    font-size:${props.fontSize || fontSizeSmall};
    color: ${props.color || colourLightBrown};
    margin: ${props.margin || "0"};
    text-align: ${props.textDirection || "left"};
  `;
};

export const H3 = styled.h3<FontProps>`
    ${h3Styles}
`;

export const body1Styles = (props: FontProps) => {
  return css`
    font-weight:${props.fontWeight || fontWeightLight};
    font-size:${props.fontSize || fontSizeSmall};
    color: ${props.color || colourLightBrown};
    margin: ${props.margin || "0"};
    text-align: ${props.textDirection || "left"};
  `;
};

export const Body1 = styled.div<FontProps>`
  ${body1Styles}
`;

export const body2Styles = (props: FontProps) => {
  return css`
    font-weight:${props.fontWeight || fontWeightLight};
    font-size:${props.fontSize || fontSizeXSmall};
    color: ${props.color || colourLightBrown};
    margin: ${props.margin || "0"};
    text-align: ${props.textDirection || "left"};
  `;
};

export const Body2 = styled.div<FontProps>`
  ${body2Styles}
`;

export const AStyles = (props: FontProps) => {
  return css `
    color: ${props.color || colourPurple};
    transition: ${defaultTransition};
    display: inline-block;
    position: relative;

    &:before {
      background-color: ${props.color || colourPurple};
      transition: ${defaultTransition};
      position: absolute;
      content: "";
      height: 0px;
      width: 100%;
      bottom: 0px;
    }

    &:hover:before {
      height: 3px;
    }
  `;
};

export const A = styled.a<FontProps>`
  ${AStyles}
`;
