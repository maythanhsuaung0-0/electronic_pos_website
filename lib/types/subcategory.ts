import z from "zod";
export const SubCategory = z.object({
  _id: z.string(),
  _type: z.literal("subcategory"),
  name: z.string(),
  _createdAt: z.string(),
  _updatedAt: z.string()
})
export type SubCategory = z.infer<typeof SubCategory>;
const subcategoryPreview = SubCategory.pick({
_id:true,
  _type:true,
  name:true,
  _createdAt:true,
  _updatedAt:true
})
export type SubCategoryPreview = z.infer<typeof subcategoryPreview>;
