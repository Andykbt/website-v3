export type Url = {
  name: string,
  url: string,
}

export type Project = {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  title: string,
  codeLink: string,
  projectLink: string,
}

export type ExperienceType = {
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: string,
  _updatedAt: string,
  company: string,
  role: string,
  dateFinished: string,
  dateStarted: string,
  body: any[],
}