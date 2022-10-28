import { atom } from "recoil";
import { AlgoliaConfig, FeaturedContent } from "@website-v3/web/constants/types";

export const showMenuState = atom({
  key: "showMenu",
  default: false as boolean,
});

export const featuredContentState = atom({
  key: "featuredContent",
  default: [] as FeaturedContent[]
});

export const algoliaState = atom({
  key: "algolia",
  default: {} as AlgoliaConfig
});

export const mouseImageState = atom({
  key: "mouseImage",
  default: "" as string,
});

export const mouseColorState = atom({
  key: "mouseColor",
  default: "" as string,
});

export const mouseState = atom({
  key: "mouseState",
  default: "default" as "default" | "image" | "inspect" | "hidden",
});