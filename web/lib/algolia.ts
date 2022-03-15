import algoliasearch from "algoliasearch";

export const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP_ID || "",
  process.env.ALGOLIA_ADMIN_ID || "",
);

export const algoliaIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX || "");
export const algoliaIndexName = process.env.ALGOLIA_INDEX || "";