import { css } from "styled-components";

/* Font Sizes */
export const fontSizeBase = "";
export const fontSizeExtraLarge = "13.5vw";
export const fontSizeLarge = "10vw";
export const fontSizeMedium = "5vw";
export const fontSizeSmall = "1.5rem";

/* Colours */
export const colourBlack = "#232025";
export const colourLightBrown = "#D5CDC4";
export const colourDarkGrey = "#302B30";
export const colourYellow = "#FED600";
export const colourCyan = "#3ECAB5";
export const colourPink = "#FA2B7B";

/* FontWeight */
export const fontWeightLight = "";
export const fontWeightMedium = "";
export const fontWeightBold = "";

/* Container constants */
export const widthExtraExtraLarge = "1320px";
export const widthExtraLarge = "1140px";
export const widthLarge = "960px";
export const widthMedium = "720px";
export const widthSmall = "540";
export const widthExtraSmall = "100%";

export const disableSelect = () => {
  return css`user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */`;
};