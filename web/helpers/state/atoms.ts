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