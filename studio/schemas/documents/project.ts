export const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      description: "Write when your project was published",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "nextProject",
      title: "Next project",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
        }
      ]
    },
    {
      name: "codeLink",
      title:"Code Link",
      type: "url",
    },
    {
      name: "projectLink",
      title:"Project Link",
      type: "url",
    },
    {
      name: "colour",
      title: "Colour",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "technologies",
      title: "Technologies used",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            }
          ]
        },
      ],
    },
  ]
};