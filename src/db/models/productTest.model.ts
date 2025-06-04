import { columnName, Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'

export default class ProductTest extends Model {
  static table: string = 'productTest'

  @field('title') title!: string
  @field('category') category!: string
  @field('rate') rate!: string
  @field('description') description!: string
  @field('is_published') is_published!: boolean
}