'use client'
import { ItemPreview } from "@/lib/types/item";
import { SanityImage, urlFor } from "./sanityImage";
import { Tag } from "./tags";
interface CardProps {
  items: ItemPreview
}

export function Card({ items, func, cart,total,setTotal }: CardProps & { func: Function, cart: Record<string, Object>,setTotal:Function,total:number }) {

  const { name, id, category, subcategory, image, price } = items;
  console.log("cart currently", id in cart)
  const itemInfo = { "name": name, "category": category, "subcategory": subcategory, "url": image, "price": price }
  const add = (id: string) => {
    func(id, 1, itemInfo)
    setTotal(total+price)
  }
  const remove = (id: string) => {
    func(id, 0, itemInfo)
    setTotal(total-price)
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
      {(id in cart) ?
        <button onClick={() => remove(id)} className="flex gap-1 py-2 text-sm bg-blue-500 mt-1 rounded-md justify-center hover:bg-blue-500 hover:text-white hover:transition-all  ">
          Added
        </button>
        : <button onClick={() => add(id)} className="flex gap-1 py-2 text-sm bg-blue-100 mt-1 rounded-md justify-center hover:bg-blue-500 hover:text-white hover:transition-all ">
          <span>Add to cart</span>
        </button>}
    </div>
  );
}
