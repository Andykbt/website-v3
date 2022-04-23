import { NextApiRequest, NextApiResponse } from "next";
import { SanityClient } from "@website-v3/web/lib/sanity";
import { algoliaIndex } from "@website-v3/web/lib/algolia";
import indexer from "sanity-algolia";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sanityAlgolia = indexer(
    {
      article: {
        index: algoliaIndex,
        projection: `{
          title,
          _type,
          _createdAt,
          "imageUrl": image.asset -> url,
          projectLink,
          "slug": slug.current,
          category,
        }`,
      },
      project: {
        index: algoliaIndex,
        projection: `{
          title,
          _type,
          _createdAt,
          "imageUrl": image.asset -> url,
          projectLink,
          "slug": slug.current
        }`,
      },
    },
    // Serializer function to manipulate documents
    (document) => document,
    // Visibility function to determine which documents to be included
  );
  return sanityAlgolia
    .webhookSync(SanityClient, req.body as any)
    .then(() => {
      res.status(200).json("Success");
    })
    .catch(() => {
      res.status(500).json("Something went wrong");
    });
}