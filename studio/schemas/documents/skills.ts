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
      name: "name",
      title: "Skill name",
      type: "string",
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
      name: "frontend",
      title: "Frontend Skills",
      description: "Show off your FE Skills",
      type: "array",
      of: [skill],
    },
    {
      name: "backend",
      title: "Backend Skills",
      description: "Show off your BE Skills",
      type: "array",
      of: [skill]
    },
    {
      name: "other",
      title: "Tools and languages",
      description: "Show off your other skills",
      type: "array",
      of: [skill]
    }
  ]
};