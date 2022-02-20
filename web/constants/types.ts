export type Url = {
  name: string,
  url: string,
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
  body: any[],
  excerpt: any[],
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
  dateStarted: string,
  body: any[],
}