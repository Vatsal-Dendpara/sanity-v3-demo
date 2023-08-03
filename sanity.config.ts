import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { SEOPane} from 'sanity-plugin-seo-pane'

export default defineConfig({
  name: 'default',
  title: 'seo-tools-poc',

  projectId: '76gjmmfa',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
