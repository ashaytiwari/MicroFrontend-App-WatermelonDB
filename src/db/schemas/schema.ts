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

const productSchema = tableSchema({
  name: 'product',
  columns: [
    { name: 'ProductId', type: 'string', isIndexed: true },
    { name: 'AccessoriesName', type: 'string' },
    { name: 'AccessoryType', type: 'string' },
    { name: 'AdditionalRefrigerantCharge', type: 'string' },
    { name: 'Afue', type: 'string' },
    { name: 'AhriReferenceNumber', type: 'string' },
    { name: 'AirFlowRateHighCooling', type: 'string' },
    { name: 'AirFlowRateHighHeating', type: 'string' },
    { name: 'AirFlowRateLowCooling', type: 'string' },
    { name: 'AirFlowRateLowHeating', type: 'string' },
    { name: 'AirFlowRateMediumCooling', type: 'string' },
    { name: 'AirFlowRateMediumHeating', type: 'string' },
    { name: 'AirFlowRateSuperHighCooling', type: 'string' },
    { name: 'AirFlowRateSuperHighHeating', type: 'string' },
    { name: 'AirFlowRateSuperLowCooling', type: 'string' },
    { name: 'AirFlowRateSuperLowHeating', type: 'string' },
    { name: 'AirWaterIndicator', type: 'string' },
    { name: 'ApplicationGuideName1', type: 'string' },
    { name: 'ApprovalWorkflowState', type: 'string' },
    { name: 'Areyourproductslabeledwithage', type: 'string' },
    { name: 'BlowerAvailableAcTonnageHigh', type: 'string' },
    { name: 'BlowerAvailableAcTonnageLow', type: 'string' },
    { name: 'Brand', type: 'string' },
    { name: 'CapacityControlRangeMax', type: 'string' },
    { name: 'CapacityControlRangeMin', type: 'string' },
    { name: 'FamilyDescription', type: 'string' },
    { name: 'FunctionCategory', type: 'string' },
    { name: 'FunctionCategoryId', type: 'string' },
    { name: 'OrderMarketItemNumber', type: 'string' },
    { name: 'PipeSizeGas', type: 'string' },
    { name: 'ProductDescriptionPim', type: 'string' },
    { name: 'ProductFamily', type: 'string' },
    { name: 'ShippingVolumeUnit', type: 'string' },
    { name: 'ShortDescription', type: 'string' },
    { name: 'SystemFamily', type: 'string' },
    { name: 'Title', type: 'string', isIndexed: true },
    { name: 'Tonnage', type: 'string' },
    { name: 'UshtsCode', type: 'string' },
    { name: 'productModelTypeDescription', type: 'string' },
  ]
});

const categorySchema = tableSchema({
  name: 'category',
  columns: [
    { name: 'ProductId', type: 'string', isIndexed: true },
    { name: 'CategoryId', type: 'string', isIndexed: true },
    { name: 'Title', type: 'string' },
    { name: 'Url', type: 'string' },
    { name: 'Description', type: 'string' },
    { name: 'LastModified', type: 'string' },
    { name: 'PublicationDate', type: 'string' },
    { name: 'DateCreated', type: 'string' },
  ]
});

const cmsDocumentsSchema = tableSchema({
  name: 'cmsDocuments',
  columns: [
    { name: 'ProductId', type: 'string', isIndexed: true },
    { name: 'DocumentId', type: 'string', isIndexed: true },
    { name: 'Title', type: 'string' },
    { name: 'Url', type: 'string' },
    { name: 'AlternativeText', type: 'string' },
    { name: 'LastModified', type: 'string' },
    { name: 'PublicationDate', type: 'string' },
    { name: 'DateCreated', type: 'string' },
    { name: 'Ordinal', type: 'string' },
    { name: 'MimeType', type: 'string' },
    { name: 'Extension', type: 'string' },
    { name: 'TotalSize', type: 'string' },
    { name: 'ParentId', type: 'string' },
    { name: 'ThumbnailUrl', type: 'string' },
    { name: 'DocumentHeading', type: 'string' },
  ]
});

export const postsAppSchema = appSchema({
  version: 1,
  tables: [
    productTestSchema,
    productSchema,
    categorySchema,
    cmsDocumentsSchema
  ]
});