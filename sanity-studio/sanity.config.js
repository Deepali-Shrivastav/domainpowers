import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'Domain Powers Blog',

  projectId: 'x67zxoli',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
