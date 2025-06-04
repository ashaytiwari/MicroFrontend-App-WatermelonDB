import { appSchema, tableSchema } from '@nozbe/watermelondb';

const productTestSchema = tableSchema({
  name: 'productTest',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'rate', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'is_published', type: 'boolean' },
  ]
});

export const postsAppSchema = appSchema({
  version: 1,
  tables: [
    productTestSchema
  ]
});