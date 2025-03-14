import { type SchemaTypeDefinition } from 'sanity'
import { ItemType } from './itemType'
import { SubcategoryType } from './subcategoryType'
import { CategoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
ItemType,SubcategoryType,CategoryType  ],
}
