'use client'
import { ItemPreview } from "@/lib/types/item";
import { SanityImage, urlFor } from "./sanityImage";
import { SubCategoryPreview } from "@/lib/types/subcategory";
import { CirclePlus, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
interface CardProps {
  items: ItemPreview
}

export function Card({ items, func, status="default" }: CardProps & { func: Function, status: string }) {

  const { name, id, category, subcategory, image, price } = items;
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
  const reduceCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className="grid gap-1 bg-[#F8F9FD] p-4 rounded-md w-[200px] shadow-sm">
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
      {(status == "added") ?
        <button className="flex gap-1 bg-blue-200 p-1">
          <div onClick={reduceCount} className={count==0?`cursor-not-allowed text-gray-400`:'cursor-pointer text-blue-600'}><MinusCircle /></div><span>{count}</span><div onClick={addCount} className="cursor-pointer text-blue-600"><PlusCircle /></div>
        </button>
        : <button className="flex gap-1 p-1 text-sm bg-blue-100 mt-1 rounded-md justify-center hover:bg-blue-500 hover:text-white hover:transition-all ">
          <span>Add to cart</span>
        </button>}
    </div>
  );
}
