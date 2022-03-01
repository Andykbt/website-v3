/* MISC */
export const DEFAULT_TTL = 3600;

/* TYPES */
export type Url = {
  name: string,
  url: string,
}

export type Block = {
  children: any[],
  markDefs: any[],
  style: "string",
  _key: "string",
  _type: "string",
}

export type imageUrl = {
  imageUrl?: string,
};

export type Project = {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
  codeLink: string,
  projectLink: string,
  slug: {
    _type: string,
    current: string,
  },
  technologies: [{
    name: string,
    url: string,
    link: string,
  }],
  colour: string,
  nextProject: {
    _ref: string,
    _type: string,
  },
  body: any[],
  excerpt: any[],
  imageUrl?: string,
}

export type ExperienceType = {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  company: string,
  companyLink: string,
  role: string,
  dateFinished: string,
  datestarted: string,
  body: any[],
};

export type SkillType = {
  category: "string",
  svg: any[],
  skills: [{
    alt: "string",
    caption: "string",
    colour: "string",
    svg: any[],
    _key: "string",
    _type: "string",
  }],
  colour: "string",
  _createdAt: "string",
  _id: "string",
  _rev: "string",
  _type: "skills",
  _updatedAt: "string",
};

export type Article = {
  body: any[],
  excerpt: any,
  slug: {
    _type: string,
    current: string,
  },
  title: "string",
  _createdAt: "string",
  _id: "string",
  _rev: "string",
  _type: "string",
  _updatedAt: "string",
  imageUrl?: string,
}

export type ArticleSchema = {
  title: "string",
  slug: "string",
  updatedAt: "string",
  excerpt: "string",
  imageUrl: "string",
}