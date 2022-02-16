export const skill = {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "svg",
      title: "SVG",
      type: "array",
      of: [{ type: "block" }],
      description: "Write your svg code here"
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
    },
    {
      name: "colour",
      title: "Colour",
      type: "string",
    }
  ],
};

export const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "programmingLanguages",
      title: "Programming Languages",
      description: "Write the languages you know!",
      type: "array",
      of: [skill],
    },
    {
      name: "librariesAndFrameworks",
      title: "Libraries & Frameworks",
      description: "Write the libraries & frameworks that you know!",
      type: "array",
      of: [skill]
    },
    {
      name: "toolsAndPlatforms",
      title: "Tools & Platforms",
      description: "Write the tools & platforms that you know!",
      type: "array",
      of: [skill]
    }
  ]
};