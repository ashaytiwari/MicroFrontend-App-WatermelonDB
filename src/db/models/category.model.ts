import { columnName, Model } from '@nozbe/watermelondb'
import { field, relation, text } from '@nozbe/watermelondb/decorators'

export default class Category extends Model {
  static table: string = 'category'

  @field('CategoryId') CategoryId!: string
  @field('Title') Title!: string
  @field('Url') Url!: string
  @field('Description') Description!: string
  @field('LastModified') LastModified!: string
  @field('PublicationDate') PublicationDate!: string
  @field('DateCreated') DateCreated!: string

  @relation('product', 'ProductId') product!: any
}