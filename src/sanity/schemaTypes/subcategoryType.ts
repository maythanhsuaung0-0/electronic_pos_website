import {defineType,defineField} from 'sanity'
export const SubcategoryType = defineType({
name:'subcategory',
title:'Subcategory',
type:'document',
fields:[
defineField({
    name:'name',
      title:'SubCategory Name',
    type:'string'}),
    
]})
