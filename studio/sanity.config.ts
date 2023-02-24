import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { markdownSchema } from 'sanity-plugin-markdown';

export default defineConfig({
    name: 'default',
    title: 'website-cdn',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,

    plugins: [deskTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});
