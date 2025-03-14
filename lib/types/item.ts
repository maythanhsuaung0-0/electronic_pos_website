import z from "zod";
import {SanityImage} from "@/lib/types";
import {Category} from "@/lib/types/category";
import {SubCategory} from "@/lib/types/subcategory";
export const Item = z.object({
id:z.string(),
  name:z.string(),
  description:z.string(),
  price:z.number(),
 category:z.string(),
 subcategory:z.string(),
  image:SanityImage,
  _createdAt:z.string(),
  _updatedAt:z.string(),
 
})
export type Item = z.infer<typeof Item>;
const itemPreview = Item.pick({
id:true,
  name:true,
  description:true,
price:true,
category:true,
subcategory:true,
image:true,
_createdAt:true,
_updatedAt:true})
export type ItemPreview = z.infer<typeof itemPreview>;
