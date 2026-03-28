import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import type { StructureBuilder } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './schemas';

const singletonTypes = new Set(['siteSettings']);

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId()!)
      ),
    ]);

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio CMS',
  projectId: 'as7ecbt7',
  dataset: 'production',
  plugins: [structureTool({ structure }), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
