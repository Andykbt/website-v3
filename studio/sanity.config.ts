import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { markdownSchema } from 'sanity-plugin-markdown';

export default defineConfig({
    name: 'default',
    title: 'website-cdn',

    projectId: 'bw5alwe6',
    dataset: 'production',

    plugins: [deskTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});
