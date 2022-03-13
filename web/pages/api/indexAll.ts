import { algoliaClient } from "@website-v3/web/algolia";
import { SanityClient } from "../../sanity";

const query = `
  *[ _type in ['article', 'project']] {
    "objectID": _id,
    title,
    _type,
    _createdAt,
    "imageUrl": image.asset -> url,
    projectLink,
    "slug": slug.current
  }`;

export default async function handler(req: any, res: any) {
  const documents = await SanityClient.fetch(query);

  const index = algoliaClient.initIndex(process.env.ALGOLIA_INDEX || "");

  try {
    console.time(`Saving ${documents.length} documents to index: `);
    await index.saveObjects(documents);
    console.timeEnd(`Saving ${documents.length} documents to index: `);

    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
}