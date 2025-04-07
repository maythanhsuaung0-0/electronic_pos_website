"use client";
import { SanityImage as SItype } from "@/lib/types";
import { Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { urlFor, SanityImage } from "./sanityImage";

interface ChildProps {
  detail: {
    count: number;
    itemInfo: {
      name: string;
      url?: SItype;
      price: number;
      orderCount: number;
    }
  }
}

export function CartItem({ mainTotal,setMainTotal, detail, id, updateCart }: ChildProps & { id: string, updateCart: Function ,mainTotal:number, setMainTotal:Function} ) {
  const { count, itemInfo } = detail
  console.log("main",mainTotal)
  const itemName = itemInfo["name" as keyof typeof itemInfo]
  const url = itemInfo["url" as keyof typeof itemInfo]
  const price = itemInfo["price" as keyof typeof itemInfo]
  const [currentCount, setCurrentCount] = useState(count);
  const [total, setTotal] = useState(price)
  const increase = () => {
    setCurrentCount(currentCount + 1);
    console.log('price',typeof(total),typeof(price))
    if(price){
    let subtotal: number = total + price
    price && setTotal(subtotal)
    }
    updateCart(id, currentCount + 1, itemInfo)
  };
  const decrease = () => {
    currentCount > 0 && setCurrentCount(currentCount - 1);
    price && setTotal(total-price)
    updateCart(id, count - 1, detail)
  };
  return (
    <div className="grid grid-cols-[80px_auto_40px] gap-3">
      <div>
       {url && <SanityImage
          className="border-sm h-[80px] object-cover -full rounded-md"
          src={urlFor(url).width(200).height(200).url()}
          height={200} width={200} alt="item" />
     } </div>
      <div className="self-center grid gap-2">
        <h5 className="font-semibold text-sm">{itemName ? itemName : " "}</h5>
        <div className="flex gap-4">
          <span className="align-baseline self-center">$ {price}</span>
          <div className="grid grid-cols-3 gap-1 border border-gray-300 py-1 px-2 rounded-sm w-fit">
            <button
              onClick={decrease}
              className={`${currentCount <= 0 ? " cursor-not-allowed" : " cursor-pointer"
                }`}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span>{currentCount}</span>
            <button onClick={increase} className="cursor-pointer">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="self-center grid gap-2">
        <div></div>
        <div className="cursor-pointer w-fit">
          <Trash className="w-4 h-4 text-red-500 " />
        </div>
      </div>
    </div>
  );
}
