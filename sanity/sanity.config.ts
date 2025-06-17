import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'



export default defineConfig({
  projectId: 'u6n1g2ya',
  dataset: 'production',
  title: 'KeyHouse',
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool()]
})