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
      name: "category",
      title: "Skills Category",
      description: "Write what group of skills are these",
      type: "string",
    },
    {
      name: "svg",
      title: "SVG",
      type: "array",
      of: [{ type: "block" }],
      description: "Write your svg code here"
    },
    {
      name: "colour",
      title: "Colour",
      description: "What is the main colour for this category",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [skill],
    }
  ]
};