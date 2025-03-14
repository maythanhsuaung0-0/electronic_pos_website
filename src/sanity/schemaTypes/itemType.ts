import { defineField, defineType } from 'sanity'
export const ItemType = defineType({
  name: 'item',
  title: 'Item ',
  type: 'document',
  fields: [
    defineField({
    name:'image',
    title:'Image',
    type:'image',
    options:{
      hotspot:true},
     }),
    defineField({
      name: 'item',
      title: 'Item Name',
      type: 'string'
    }),
    defineField({
    name:'description',
    title:'Item Description',
    type:'string'}),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' }
    }),
    defineField({
      name: 'subcategory',
      title: 'Sub Category',
      type: 'reference',
      to: [{ type: 'subcategory' }],

    }),
  ]
})
