import { fetchFeaturedContent } from "../sanity";

export const initPages = async () => {
  return {
    featuredContent: await fetchFeaturedContent(),
    algolia: {
      "index:": process.env.ALGOLIA_INDEX,
      "app_id": process.env.ALGOLIA_APP_ID,
      "admin_id": process.env.ALGOLIA_ADMIN_ID,
    }
  };
};