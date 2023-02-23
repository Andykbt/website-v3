import { defineField, defineType } from 'sanity';

export const project = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project name',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            description: 'Write when your project was published',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            },
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        }),
        defineField({
            name: 'nextProject',
            title: 'Next project',
            type: 'reference',
            to: [{ type: 'project' }],
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                },
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
        }),

        defineField({
            name: 'codeLink',
            title: 'Code Link',
            type: 'url',
        }),
        defineField({
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
        }),
        defineField({
            name: 'colour',
            title: 'Colour',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'markdown',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies used',
            type: 'array',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'link',
                            title: 'Link',
                            type: 'string',
                        },
                    ],
                },
            ],
        }),
    ],
});
