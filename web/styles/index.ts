export * from "./typography";
import { css } from "styled-components";

/* Font Sizes */
export const fontSizeBase = "1rem";
export const fontSizeExtraLarge = "13.5vw";
export const fontSizeLarge = "10vw";
export const fontSizeMedium = "2.5rem";
export const fontSizeSmall = "1.5rem";
export const fontSizeXSmall = "1rem";

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
export const widthSmall = "540px";
export const widthExtraSmall = "100%";

/* Viewport breakpoints */
export const xsBreakpoint = "360px";
export const smBreakpoint = "768px";
export const mdBreakpoint = "1024px";
export const lgBreakpoint = "1280px";

/* Transitions */
export const defaultTransition = "all 0.25s cubic-bezier(0.645,0.045,0.355,1)";

export const disableSelect = () => {
  return css`user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */`;
};