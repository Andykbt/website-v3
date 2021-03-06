import { NextApiRequest, NextApiResponse } from "next";
import { searchArticles } from "@website-v3/web/lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = req.query.q as string;
  const articles = await searchArticles(q);

  res.status(200).json({ articles });
}