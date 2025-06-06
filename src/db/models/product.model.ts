import { Model } from '@nozbe/watermelondb'
import { children, field } from '@nozbe/watermelondb/decorators'

export class Product extends Model {

  static table: string = 'product'

  @field('ProductId') ProductId!: string
  @field('AccessoriesName') AccessoriesName!: string
  @field('AccessoryType') AccessoryType!: string
  @field('AdditionalRefrigerantCharge') AdditionalRefrigerantCharge!: string
  @field('Afue') Afue!: string
  @field('AhriReferenceNumber') AhriReferenceNumber!: string
  @field('AirFlowRateHighCooling') AirFlowRateHighCooling!: string
  @field('AirFlowRateHighHeating') AirFlowRateHighHeating!: string
  @field('AirFlowRateLowCooling') AirFlowRateLowCooling!: string
  @field('AirFlowRateLowHeating') AirFlowRateLowHeating!: string
  @field('AirFlowRateMediumCooling') AirFlowRateMediumCooling!: string
  @field('AirFlowRateMediumHeating') AirFlowRateMediumHeating!: string
  @field('AirFlowRateSuperHighCooling') AirFlowRateSuperHighCooling!: string
  @field('AirFlowRateSuperHighHeating') AirFlowRateSuperHighHeating!: string
  @field('AirFlowRateSuperLowCooling') AirFlowRateSuperLowCooling!: string
  @field('AirFlowRateSuperLowHeating') AirFlowRateSuperLowHeating!: string
  @field('AirWaterIndicator') AirWaterIndicator!: string
  @field('ApplicationGuideName1') ApplicationGuideName1!: string
  @field('ApprovalWorkflowState') ApprovalWorkflowState!: string
  @field('Areyourproductslabeledwithage') Areyourproductslabeledwithage!: string
  @field('BlowerAvailableAcTonnageHigh') BlowerAvailableAcTonnageHigh!: string
  @field('BlowerAvailableAcTonnageLow') BlowerAvailableAcTonnageLow!: string
  @field('Brand') Brand!: string
  @field('CapacityControlRangeMax') CapacityControlRangeMax!: string
  @field('CapacityControlRangeMin') CapacityControlRangeMin!: string
  @field('FamilyDescription') FamilyDescription!: string
  @field('FunctionCategory') FunctionCategory!: string
  @field('FunctionCategoryId') FunctionCategoryId!: string
  @field('OrderMarketItemNumber') OrderMarketItemNumber!: string
  @field('PipeSizeGas') PipeSizeGas!: string
  @field('ProductDescriptionPim') ProductDescriptionPim!: string
  @field('ProductFamily') ProductFamily!: string
  @field('ShippingVolumeUnit') ShippingVolumeUnit!: string
  @field('ShortDescription') ShortDescription!: string
  @field('SystemFamily') SystemFamily!: string
  @field('Title') Title!: string
  @field('Tonnage') Tonnage!: string
  @field('UshtsCode') UshtsCode!: string
  @field('productModelTypeDescription') productModelTypeDescription!: string

  @children('category') CategoryName!: any
  // @children('cmsDocuments') DimensionalDrawing!: any
  @children('cmsDocuments') Image!: any
  // @children('cmsDocuments') OperationManual!: any
  // @children('cmsDocuments') ServiceManual!: any
  // @children('cmsDocuments') SubmittalData!: any

}

export class Product2 extends Model {

  static table: string = 'product2'

  @field('ProductId') ProductId!: string
  @field('AccessoriesName') AccessoriesName!: string
  @field('AccessoryType') AccessoryType!: string
  @field('AdditionalRefrigerantCharge') AdditionalRefrigerantCharge!: string
  @field('Afue') Afue!: string
  @field('AhriReferenceNumber') AhriReferenceNumber!: string
  @field('AirFlowRateHighCooling') AirFlowRateHighCooling!: string
  @field('AirFlowRateHighHeating') AirFlowRateHighHeating!: string
  @field('AirFlowRateLowCooling') AirFlowRateLowCooling!: string
  @field('AirFlowRateLowHeating') AirFlowRateLowHeating!: string
  @field('AirFlowRateMediumCooling') AirFlowRateMediumCooling!: string
  @field('AirFlowRateMediumHeating') AirFlowRateMediumHeating!: string
  @field('AirFlowRateSuperHighCooling') AirFlowRateSuperHighCooling!: string
  @field('AirFlowRateSuperHighHeating') AirFlowRateSuperHighHeating!: string
  @field('AirFlowRateSuperLowCooling') AirFlowRateSuperLowCooling!: string
  @field('AirFlowRateSuperLowHeating') AirFlowRateSuperLowHeating!: string
  @field('AirWaterIndicator') AirWaterIndicator!: string
  @field('ApplicationGuideName1') ApplicationGuideName1!: string
  @field('ApprovalWorkflowState') ApprovalWorkflowState!: string
  @field('Areyourproductslabeledwithage') Areyourproductslabeledwithage!: string
  @field('BlowerAvailableAcTonnageHigh') BlowerAvailableAcTonnageHigh!: string
  @field('BlowerAvailableAcTonnageLow') BlowerAvailableAcTonnageLow!: string
  @field('Brand') Brand!: string
  @field('CapacityControlRangeMax') CapacityControlRangeMax!: string
  @field('CapacityControlRangeMin') CapacityControlRangeMin!: string
  @field('FamilyDescription') FamilyDescription!: string
  @field('FunctionCategory') FunctionCategory!: string
  @field('FunctionCategoryId') FunctionCategoryId!: string
  @field('OrderMarketItemNumber') OrderMarketItemNumber!: string
  @field('PipeSizeGas') PipeSizeGas!: string
  @field('ProductDescriptionPim') ProductDescriptionPim!: string
  @field('ProductFamily') ProductFamily!: string
  @field('ShippingVolumeUnit') ShippingVolumeUnit!: string
  @field('ShortDescription') ShortDescription!: string
  @field('SystemFamily') SystemFamily!: string
  @field('Title') Title!: string
  @field('Tonnage') Tonnage!: string
  @field('UshtsCode') UshtsCode!: string
  @field('productModelTypeDescription') productModelTypeDescription!: string

  @children('category') CategoryName!: any
  // @children('cmsDocuments') DimensionalDrawing!: any
  @children('cmsDocuments') Image!: any
  // @children('cmsDocuments') OperationManual!: any
  // @children('cmsDocuments') ServiceManual!: any
  // @children('cmsDocuments') SubmittalData!: any

}

export class Product3 extends Model {

  static table: string = 'product3'

  @field('ProductId') ProductId!: string
  @field('AccessoriesName') AccessoriesName!: string
  @field('AccessoryType') AccessoryType!: string
  @field('AdditionalRefrigerantCharge') AdditionalRefrigerantCharge!: string
  @field('Afue') Afue!: string
  @field('AhriReferenceNumber') AhriReferenceNumber!: string
  @field('AirFlowRateHighCooling') AirFlowRateHighCooling!: string
  @field('AirFlowRateHighHeating') AirFlowRateHighHeating!: string
  @field('AirFlowRateLowCooling') AirFlowRateLowCooling!: string
  @field('AirFlowRateLowHeating') AirFlowRateLowHeating!: string
  @field('AirFlowRateMediumCooling') AirFlowRateMediumCooling!: string
  @field('AirFlowRateMediumHeating') AirFlowRateMediumHeating!: string
  @field('AirFlowRateSuperHighCooling') AirFlowRateSuperHighCooling!: string
  @field('AirFlowRateSuperHighHeating') AirFlowRateSuperHighHeating!: string
  @field('AirFlowRateSuperLowCooling') AirFlowRateSuperLowCooling!: string
  @field('AirFlowRateSuperLowHeating') AirFlowRateSuperLowHeating!: string
  @field('AirWaterIndicator') AirWaterIndicator!: string
  @field('ApplicationGuideName1') ApplicationGuideName1!: string
  @field('ApprovalWorkflowState') ApprovalWorkflowState!: string
  @field('Areyourproductslabeledwithage') Areyourproductslabeledwithage!: string
  @field('BlowerAvailableAcTonnageHigh') BlowerAvailableAcTonnageHigh!: string
  @field('BlowerAvailableAcTonnageLow') BlowerAvailableAcTonnageLow!: string
  @field('Brand') Brand!: string
  @field('CapacityControlRangeMax') CapacityControlRangeMax!: string
  @field('CapacityControlRangeMin') CapacityControlRangeMin!: string
  @field('FamilyDescription') FamilyDescription!: string
  @field('FunctionCategory') FunctionCategory!: string
  @field('FunctionCategoryId') FunctionCategoryId!: string
  @field('OrderMarketItemNumber') OrderMarketItemNumber!: string
  @field('PipeSizeGas') PipeSizeGas!: string
  @field('ProductDescriptionPim') ProductDescriptionPim!: string
  @field('ProductFamily') ProductFamily!: string
  @field('ShippingVolumeUnit') ShippingVolumeUnit!: string
  @field('ShortDescription') ShortDescription!: string
  @field('SystemFamily') SystemFamily!: string
  @field('Title') Title!: string
  @field('Tonnage') Tonnage!: string
  @field('UshtsCode') UshtsCode!: string
  @field('productModelTypeDescription') productModelTypeDescription!: string

  @children('category') CategoryName!: any
  // @children('cmsDocuments') DimensionalDrawing!: any
  @children('cmsDocuments') Image!: any
  // @children('cmsDocuments') OperationManual!: any
  // @children('cmsDocuments') ServiceManual!: any
  // @children('cmsDocuments') SubmittalData!: any

}

export class Product4 extends Model {

  static table: string = 'product4'

  @field('ProductId') ProductId!: string
  @field('AccessoriesName') AccessoriesName!: string
  @field('AccessoryType') AccessoryType!: string
  @field('AdditionalRefrigerantCharge') AdditionalRefrigerantCharge!: string
  @field('Afue') Afue!: string
  @field('AhriReferenceNumber') AhriReferenceNumber!: string
  @field('AirFlowRateHighCooling') AirFlowRateHighCooling!: string
  @field('AirFlowRateHighHeating') AirFlowRateHighHeating!: string
  @field('AirFlowRateLowCooling') AirFlowRateLowCooling!: string
  @field('AirFlowRateLowHeating') AirFlowRateLowHeating!: string
  @field('AirFlowRateMediumCooling') AirFlowRateMediumCooling!: string
  @field('AirFlowRateMediumHeating') AirFlowRateMediumHeating!: string
  @field('AirFlowRateSuperHighCooling') AirFlowRateSuperHighCooling!: string
  @field('AirFlowRateSuperHighHeating') AirFlowRateSuperHighHeating!: string
  @field('AirFlowRateSuperLowCooling') AirFlowRateSuperLowCooling!: string
  @field('AirFlowRateSuperLowHeating') AirFlowRateSuperLowHeating!: string
  @field('AirWaterIndicator') AirWaterIndicator!: string
  @field('ApplicationGuideName1') ApplicationGuideName1!: string
  @field('ApprovalWorkflowState') ApprovalWorkflowState!: string
  @field('Areyourproductslabeledwithage') Areyourproductslabeledwithage!: string
  @field('BlowerAvailableAcTonnageHigh') BlowerAvailableAcTonnageHigh!: string
  @field('BlowerAvailableAcTonnageLow') BlowerAvailableAcTonnageLow!: string
  @field('Brand') Brand!: string
  @field('CapacityControlRangeMax') CapacityControlRangeMax!: string
  @field('CapacityControlRangeMin') CapacityControlRangeMin!: string
  @field('FamilyDescription') FamilyDescription!: string
  @field('FunctionCategory') FunctionCategory!: string
  @field('FunctionCategoryId') FunctionCategoryId!: string
  @field('OrderMarketItemNumber') OrderMarketItemNumber!: string
  @field('PipeSizeGas') PipeSizeGas!: string
  @field('ProductDescriptionPim') ProductDescriptionPim!: string
  @field('ProductFamily') ProductFamily!: string
  @field('ShippingVolumeUnit') ShippingVolumeUnit!: string
  @field('ShortDescription') ShortDescription!: string
  @field('SystemFamily') SystemFamily!: string
  @field('Title') Title!: string
  @field('Tonnage') Tonnage!: string
  @field('UshtsCode') UshtsCode!: string
  @field('productModelTypeDescription') productModelTypeDescription!: string

  @children('category') CategoryName!: any
  // @children('cmsDocuments') DimensionalDrawing!: any
  @children('cmsDocuments') Image!: any
  // @children('cmsDocuments') OperationManual!: any
  // @children('cmsDocuments') ServiceManual!: any
  // @children('cmsDocuments') SubmittalData!: any

}

export class Product5 extends Model {

  static table: string = 'product5'

  @field('ProductId') ProductId!: string
  @field('AccessoriesName') AccessoriesName!: string
  @field('AccessoryType') AccessoryType!: string
  @field('AdditionalRefrigerantCharge') AdditionalRefrigerantCharge!: string
  @field('Afue') Afue!: string
  @field('AhriReferenceNumber') AhriReferenceNumber!: string
  @field('AirFlowRateHighCooling') AirFlowRateHighCooling!: string
  @field('AirFlowRateHighHeating') AirFlowRateHighHeating!: string
  @field('AirFlowRateLowCooling') AirFlowRateLowCooling!: string
  @field('AirFlowRateLowHeating') AirFlowRateLowHeating!: string
  @field('AirFlowRateMediumCooling') AirFlowRateMediumCooling!: string
  @field('AirFlowRateMediumHeating') AirFlowRateMediumHeating!: string
  @field('AirFlowRateSuperHighCooling') AirFlowRateSuperHighCooling!: string
  @field('AirFlowRateSuperHighHeating') AirFlowRateSuperHighHeating!: string
  @field('AirFlowRateSuperLowCooling') AirFlowRateSuperLowCooling!: string
  @field('AirFlowRateSuperLowHeating') AirFlowRateSuperLowHeating!: string
  @field('AirWaterIndicator') AirWaterIndicator!: string
  @field('ApplicationGuideName1') ApplicationGuideName1!: string
  @field('ApprovalWorkflowState') ApprovalWorkflowState!: string
  @field('Areyourproductslabeledwithage') Areyourproductslabeledwithage!: string
  @field('BlowerAvailableAcTonnageHigh') BlowerAvailableAcTonnageHigh!: string
  @field('BlowerAvailableAcTonnageLow') BlowerAvailableAcTonnageLow!: string
  @field('Brand') Brand!: string
  @field('CapacityControlRangeMax') CapacityControlRangeMax!: string
  @field('CapacityControlRangeMin') CapacityControlRangeMin!: string
  @field('FamilyDescription') FamilyDescription!: string
  @field('FunctionCategory') FunctionCategory!: string
  @field('FunctionCategoryId') FunctionCategoryId!: string
  @field('OrderMarketItemNumber') OrderMarketItemNumber!: string
  @field('PipeSizeGas') PipeSizeGas!: string
  @field('ProductDescriptionPim') ProductDescriptionPim!: string
  @field('ProductFamily') ProductFamily!: string
  @field('ShippingVolumeUnit') ShippingVolumeUnit!: string
  @field('ShortDescription') ShortDescription!: string
  @field('SystemFamily') SystemFamily!: string
  @field('Title') Title!: string
  @field('Tonnage') Tonnage!: string
  @field('UshtsCode') UshtsCode!: string
  @field('productModelTypeDescription') productModelTypeDescription!: string

  @children('category') CategoryName!: any
  // @children('cmsDocuments') DimensionalDrawing!: any
  @children('cmsDocuments') Image!: any
  // @children('cmsDocuments') OperationManual!: any
  // @children('cmsDocuments') ServiceManual!: any
  // @children('cmsDocuments') SubmittalData!: any

}