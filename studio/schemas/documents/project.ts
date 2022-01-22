export default {
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
            name: "slug",
            title: "Slug",
            type: "slug",
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
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            name: "keywords",
            title: "Keywords",
            type: "array",
            of: [{ type: "string" }],
        }
    ]
};