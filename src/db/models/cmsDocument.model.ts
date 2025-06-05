import { columnName, Model } from '@nozbe/watermelondb'
import { field, relation, text } from '@nozbe/watermelondb/decorators'

export default class CMSDocuments extends Model {
  static table: string = 'cmsDocuments'

  @field('DocumentId') DocumentId!: string
  @field('Title') Title!: string
  @field('Url') Url!: string
  @field('AlternativeText') AlternativeText!: string
  @field('LastModified') LastModified!: string
  @field('PublicationDate') PublicationDate!: string
  @field('DateCreated') DateCreated!: string
  @field('Ordinal') Ordinal!: string
  @field('MimeType') MimeType!: string
  @field('Extension') Extension!: string
  @field('TotalSize') TotalSize!: string
  @field('ParentId') ParentId!: string
  @field('ThumbnailUrl') ThumbnailUrl!: string
  @field('DocumentHeading') DocumentHeading!: string


  @relation('product', 'ProductId') product!: any
}