import { Client, Entity, Schema } from "redis-om";
import { DEFAULT_TTL } from "../constants/types";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Article extends Entity {}
const schema = new Schema(
  Article,
  {
    title: { type: "string" },
    slug: { type: "string" },
    updatedAt: { type: "string" },
    excerpt: { type: "text" },
    imageUrl: { type: "string" },
  },
  {
    dataStructure: "JSON",
  },
);

export async function createArticle(data: any) {
  await connect();

  const repository = client.fetchRepository(schema);

  const article = repository.createEntity(data);

  const id = await repository.save(article);
  await repository.expire(id, DEFAULT_TTL);

  return id;
}

export const getAllArticles = async () => {
  await connect();

  const repository = client.fetchRepository(schema);
  
  const articles = await repository.search().return.all();

  return articles;
};

export const searchArticles = async (q: string) => {
  await connect();

  const repository = client.fetchRepository(schema);

  const articles = await repository.search()
    .where("excerpt").matches(q)
    .or("title").eq(q)
    .return.all();

  return articles;
};