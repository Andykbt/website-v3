import { defineField, defineType } from 'sanity';

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'Company name',
            type: 'string',
            description: 'What was the company that you worked at?',
        }),
        defineField({
            name: 'role',
            title: 'Job role',
            type: 'string',
            description: 'What was your position at this company?',
        }),
        defineField({
            name: 'companyLink',
            title: 'Company Link',
            type: 'url',
            description: 'What is the link to the company that you worked at?',
        }),
        defineField({
            name: 'companyLogo',
            title: 'Company Logo',
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
            name: 'dateStarted',
            title: 'Date started',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            },
        }),
        defineField({
            name: 'dateFinished',
            title: 'Date finished',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
});
