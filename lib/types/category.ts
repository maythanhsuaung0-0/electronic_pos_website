import z from "zod";

export const Category = z.object({
_id:z.string(),
  _type:z.literal("category"),
  _createdAt:z.string(),
  _updatedAt:z.string(),
  name:z.string()
})
const CategoryPreview = Category.pick({
_id:true,
  _type:true,
  name:true,
  _createdAt:true,
  _updatedAt:true
})
export type CategoryPreview = z.infer<typeof CategoryPreview>;
