import { ItemPreview } from "@/lib/types/item";
import { SanityImage, urlFor } from "./sanityImage";
import { SubCategoryPreview } from "@/lib/types/subcategory";
import { CirclePlus } from "lucide-react";
interface CardProps {
  items: ItemPreview
}

export function Card({ items,func }: CardProps & {func:Function}) {

  const { name, id, category, subcategory, image, price } = items;
  return (
    <div className="grid gap-1 bg-[#F8F9FD] p-4 rounded-md w-[180px] shadow-sm">
      <div className="border border-gray-100 rounded-md">
        <SanityImage
          className="border-sm h-[100px] object-cover -full rounded-md"
          src={urlFor(image).width(200).height(200).url()}
          height={200} width={200} alt="item" />
      </div>
      <h5 className="">
        <span className="font-semibold">{name}</span>
      </h5>
      <div className="flex justify-between">  
      <span className=" text-lg font-bold text-blue-600">${price}</span>
        <span className="text-xs px-1 py-[0.5] self-center bg-gray-300 rounded-sm w-fit">
          {subcategory}
        </span></div>
      <button className="flex gap-1 p-1 text-sm bg-blue-100 mt-1 rounded-md justify-center hover:bg-blue-500 hover:text-white hover:transition-all "> 
     <span>Add to cart</span>
      </button>
    </div>
  );
}
