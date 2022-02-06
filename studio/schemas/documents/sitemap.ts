export const sitemap = {
  name: "sitemap",
  title: "Sitemap",
  type: "document",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string"
    },
    {
      title: "Url",
      name: "href",
      type: "url",
      validation: Rule => Rule.uri({
        scheme: ["http", "https", "mailto", "tel"]
      })
    },
  ]
};