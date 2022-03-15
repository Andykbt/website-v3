import { atom } from "recoil";
import { FeaturedContent } from "@website-v3/web/constants/types";

export const featuredContentState = atom({
  key: "featuredContent",
  default: [] as FeaturedContent[]
});

export const algoliaState = atom({
  key: "algolia",
  default: {}
});