import { SanityClient } from '@website-v3/web/lib/sanity';

export const initPages = async () => {
    return {
        featuredContent: await fetchFeaturedContent(),
        algolia: {
            index: process.env.ALGOLIA_INDEX,
            app_id: process.env.ALGOLIA_APP_ID,
            search_key: process.env.ALGOLIA_SEARCH_KEY,
        },
    };
};

export const fetchFeaturedContent = async () => {
    const featured = await SanityClient.fetch(`
    *[ _type in ['article', 'project'] && isFeatured == true] {
      _id,
      _type,
      "slug": slug.current,
      title,
      "imageUrl": image.asset -> url
    }
  `);
    return featured;
};
