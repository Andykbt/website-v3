import { searchArticles } from "../../lib/redis";

export default async function handler(req: any, res: any) {
  const q = req.query.q;
  const articles = await searchArticles(q);

  res.status(200).json({ articles });
}