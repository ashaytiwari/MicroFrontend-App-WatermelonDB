import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { postsAppSchema } from "./schemas/schema";
import ProductTest from "./models/productTest.model";
import Product from "./models/product.model";
import CMSDocuments from "./models/cmsDocument.model";
import Category from "./models/category.model";

const adapter = new SQLiteAdapter({
  schema: postsAppSchema,
  jsi: true
});

export const database = new Database({
  adapter,
  modelClasses: [ProductTest, Product, CMSDocuments, Category],
  // actionsEnabled: true,
});