'use client'
import { ItemPreview } from "@/lib/types/item";
import { SanityImage, urlFor } from "./sanityImage";
import { SubCategoryPreview } from "@/lib/types/subcategory";
import { CirclePlus, MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Tag } from "./tags";
interface CardProps {
  items: ItemPreview
}

export function Card({ items, func, cart }: CardProps & { func: Function, cart: Record<string, number> }) {

  const { name, id, category, subcategory, image, price } = items;

  const [count, setCount] = useState(0)
  const add = (id: string) => {
    console.log("added")
    setCount(count+1)
    func(id,count+1)
  }
  const remove = (id: string) => {
    console.log("remove")
    setCount(count-1)
    func(id,count-1)
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
        <Tag value={subcategory} />
      </div>
      {(count>0) ?
        <button className="flex gap-1 bg-blue-200 py-2">
          <div onClick={() => remove(id)} className={cart[id] == 0 ? `cursor-not-allowed text-gray-400` : 'cursor-pointer text-blue-600'}><MinusCircle /></div><span>{[count]}</span><div onClick={() => add(id)} className="cursor-pointer text-blue-600"><PlusCircle /></div>
        </button>
        : <button onClick={() => add(id)} className="flex gap-1 py-2 text-sm bg-blue-100 mt-1 rounded-md justify-center hover:bg-blue-500 hover:text-white hover:transition-all ">
          <span>Add to cart</span>
        </button>}
    </div>
  );
}
