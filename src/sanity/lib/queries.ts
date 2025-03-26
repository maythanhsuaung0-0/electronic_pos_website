import {defineQuery} from 'next-sanity';


const itemFields = `
"id":_id,
"name":item,
"description":description,
price,
image,
"category":category->name,
"subcategory":subcategory->name,
_createdAt,
_updatedAt`
export const allItems = defineQuery(`*[_type=="item"]{${itemFields}}`);
export const allCategories = defineQuery(`*[_type=="category"]{"id":_id,name}`);
export const allSubCategories = defineQuery(`*[_type=="subcategory"]{"id":_id,name}`);
