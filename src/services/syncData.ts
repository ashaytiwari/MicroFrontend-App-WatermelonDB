import { database } from "../db";

interface ISchemaElement {
  schema: string,
  endpoint: string
}

const globalTimer = 'globalTimer';
const localTimerOneBatchOperation = 'localTimerOneBatchOperation';

export async function syncData() {

  console.log('sync started');

  console.time(globalTimer);

  const schema = [
    {
      schema: 'product',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'product2',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'product3',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'product4',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'product5',
      endpoint: 'getNewProducts'
    },
  ];

  const promiseCollection: any = [];

  schema.forEach((el: ISchemaElement) => {
    promiseCollection.push(
      new Promise(async (resolve, reject) => {
        try {
          await makeRecursiveApiCall(el, 0);
          resolve(true);
        } catch (error) {
          console.log('DB Schema error:', el.schema, error);
          reject(error);
        }
      })
    )
  });

  return Promise.all(promiseCollection)
    .then(async (results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.log('All promises intruded');
    });

}

async function makeRecursiveApiCall(element: ISchemaElement, skipCount: number) {
  try {

    console.log('makeRecursiveApiCall', element.schema);

    const apiResponse = await apiHandler(element.endpoint, skipCount);

    console.log(element.schema, apiResponse.length);

    if (apiResponse && apiResponse.length > 0) {
      await addDataToDB(apiResponse, element, skipCount);
    } else {
      console.timeEnd(globalTimer);
    }

  } catch (error) {
    console.log('Error in MakeRecursiveAPICall fn', element.schema, error);
  }
}

async function apiHandler(endpoint: string, skipCount: number) {
  try {
    const url = `https://daikintechhub-test-api.daikincomfort.com/api/v1/${endpoint}?skip=${skipCount}&lastmod=2000-05-09T22:07:33.000Z`;
    console.log('API URL', url);
    return fetch(url).then((d) =>
      d.json()
    );
  } catch (error) {
    console.log('apiHandler error', error, endpoint);
  }

}

async function addDataToDB(apiResponse: Array<any>, element: ISchemaElement, skipCount: number) {

  try {

    console.log('addDataToDb called', element.schema);

    console.time(localTimerOneBatchOperation);

    const productCollection = database.get(element.schema);
    const cmsCollection = database.get('cmsDocuments');
    const categoryCollection = database.get('category');

    const batchActions: Array<any> = [];

    for (let index = 0; index <= apiResponse.length - 1; index++) {

      const _product = apiResponse[index];

      // 1. Create product instance (not saved yet)
      const newProduct = productCollection.prepareCreate((prod: any) => {
        prod.ProductId = _product.Id;
        prod.AccessoriesName = _product.AccessoriesName;
        prod.AccessoryType = _product.AccessoryType;
        prod.AdditionalRefrigerantCharge = _product.AdditionalRefrigerantCharge;
        prod.Afue = _product.Afue;
        prod.AhriReferenceNumber = _product.AhriReferenceNumber;
        prod.AirFlowRateHighCooling = _product.AirFlowRateHighCooling;
        prod.AirFlowRateHighHeating = _product.AirFlowRateHighHeating;
        prod.AirFlowRateLowCooling = _product.AirFlowRateLowCooling;
        prod.AirFlowRateLowHeating = _product.AirFlowRateLowHeating;
        prod.AirFlowRateMediumCooling = _product.AirFlowRateMediumCooling;
        prod.AirFlowRateMediumHeating = _product.AirFlowRateMediumHeating;
        prod.AirFlowRateSuperHighCooling = _product.AirFlowRateSuperHighCooling;
        prod.AirFlowRateSuperHighHeating = _product.AirFlowRateSuperHighHeating;
        prod.AirFlowRateSuperLowCooling = _product.AirFlowRateSuperLowCooling;
        prod.AirFlowRateSuperLowHeating = _product.AirFlowRateSuperLowHeating;
        prod.AirWaterIndicator = _product.AirWaterIndicator;
        prod.ApplicationGuideName1 = _product.ApplicationGuideName1;
        prod.ApprovalWorkflowState = _product.ApprovalWorkflowState;
        prod.Areyourproductslabeledwithage = _product.Areyourproductslabeledwithage;
        prod.BlowerAvailableAcTonnageHigh = _product.BlowerAvailableAcTonnageHigh;
        prod.BlowerAvailableAcTonnageLow = _product.BlowerAvailableAcTonnageLow;
        prod.Brand = _product.Brand;
        prod.CapacityControlRangeMax = _product.CapacityControlRangeMax;
        prod.CapacityControlRangeMin = _product.CapacityControlRangeMin;
        prod.FamilyDescription = _product.FamilyDescription;
        prod.FunctionCategory = _product.FunctionCategory;
        prod.FunctionCategoryId = _product.FunctionCategoryId;
        prod.OrderMarketItemNumber = _product.OrderMarketItemNumber;
        prod.PipeSizeGas = _product.PipeSizeGas;
        prod.ProductDescriptionPim = _product.ProductDescriptionPim;
        prod.ProductFamily = _product.ProductFamily;
        prod.ShippingVolumeUnit = _product.ShippingVolumeUnit;
        prod.ShortDescription = _product.ShortDescription;
        prod.SystemFamily = _product.SystemFamily;
        prod.Title = _product.Title;
        prod.Tonnage = _product.Tonnage;
        prod.UshtsCode = _product.UshtsCode;
        prod.productModelTypeDescription = _product.productModelTypeDescription;
      });

      batchActions.push(newProduct);

      // 2. Add related categories
      if (Array.isArray(_product.CategoryName) && _product.CategoryName.length > 0) {

        for (let catIndex = 0; catIndex <= _product.CategoryName.length - 1; catIndex++) {

          const _categoryItem = _product.CategoryName[catIndex];

          const newCat = categoryCollection.prepareCreate((c: any) => {
            c.CategoryId = _categoryItem.Id;
            c.Title = _categoryItem.Title;
            c.Url = _categoryItem.Url;
            c.Description = _categoryItem.Description;
            c.LastModified = _categoryItem.LastModified || '';
            c.PublicationDate = _categoryItem.PublicationDate || '';
            c.DateCreated = _categoryItem.DateCreated || '';
            c.ProductId = newProduct.id;
          });

          batchActions.push(newCat);

        }

      }

      // 3. Add related images
      if (Array.isArray(_product.Image) && _product.Image.length > 0) {

        for (let imgIndex = 0; imgIndex <= _product.Image.length - 1; imgIndex++) {

          const _imageItem = _product.Image[imgIndex];

          const newImg = cmsCollection.prepareCreate((d: any) => {
            d.DocumentId = _imageItem.Id;
            d.Title = _imageItem.Title;
            d.Url = _imageItem.Url;
            d.AlternativeText = _imageItem.AlternativeText || '';
            d.LastModified = _imageItem.LastModified || '';
            d.PublicationDate = _imageItem.PublicationDate || '';
            d.DateCreated = _imageItem.DateCreated || '';
            d.Ordinal = _imageItem.Ordinal || '';
            d.MimeType = _imageItem.MimeType || '';
            d.Extension = _imageItem.Extension || '';
            d.TotalSize = _imageItem.TotalSize || '';
            d.ParentId = _imageItem.ParentId || '';
            d.ThumbnailUrl = _imageItem.ThumbnailUrl || '';
            d.DocumentHeading = _imageItem.DocumentHeading || '';
            d.ProductId = newProduct.id;
          });

          batchActions.push(newImg);

        }

      }

    }

    await database.write(async () => {
      await database.batch(...batchActions);
    });

    const _skipCount = skipCount === 0 || !skipCount ? 200 : skipCount + 200;

    makeRecursiveApiCall(element, _skipCount);

    console.log('Bulk insert successful', element.schema, apiResponse.length);
    console.timeEnd(localTimerOneBatchOperation);

  } catch (error) {
    console.log('Error in addDataToDB', error, element.schema);
  }

}