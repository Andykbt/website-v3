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
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, "-")
          .slice(0, 200)
      }
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description: "Write a short description about your post",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "body",
      title: "Body",
      description: "Write anything you want for your post",
      type: "markdown",
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