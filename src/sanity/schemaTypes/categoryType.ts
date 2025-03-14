import { defineField, defineType } from 'sanity';
export const CategoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string'
    })]

})
