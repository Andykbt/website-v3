export const blog = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Article title",
      description: "What is the name of your article",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description: "Write a short description about your post",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "body",
      title: "Body",
      description: "Write anything you want for your post",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "image",
      title: "Article Image",
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
      ],
    }
  ]
};