import z,{type SafeParseReturnType} from "zod";
export const SanityImage = z.object({
asset:z.object({
_ref:z.string(),
    _type:z.literal("reference"),
  })})
export type SanityImage = z.infer<typeof SanityImage>
