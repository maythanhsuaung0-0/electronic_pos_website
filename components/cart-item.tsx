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

export function CartItem({ mainTotal,setMainTotal, detail, id, updateCart,cart }: ChildProps & { id: string, updateCart: Function ,mainTotal:number, setMainTotal:Function, cart:Record<string,Object> } ) {
  const { count, itemInfo } = detail
  const itemName = itemInfo["name" as keyof typeof itemInfo]
  const url = itemInfo["url" as keyof typeof itemInfo]
  const price = itemInfo["price" as keyof typeof itemInfo]
  const [currentCount, setCurrentCount] = useState(count);
  const [total, setTotal] = useState(price!==undefined && typeof price === 'number'? price:0)
  const increase = () => {
    setCurrentCount(currentCount + 1);
    if(price !== undefined && typeof total === 'number' && typeof price === 'number'){

    let subtotal: number = total + price
    price && setTotal(subtotal)
    setMainTotal(mainTotal+price)
    }
    updateCart(id, currentCount + 1, itemInfo)
  };
  const decrease = () => {
    currentCount > 0 && setCurrentCount(currentCount - 1);
    if(price!== undefined && typeof total ==='number' && typeof price==='number'){
    let subtotal: number = total - price
    price && setTotal(subtotal)
    setMainTotal(mainTotal-price)
    }
    updateCart(id, count - 1, itemInfo)
    
  };
  const deleteItem=()=>{
    const price = itemInfo["price" as keyof typeof itemInfo]*cart[id].count
     let subtotal = total - price
     setTotal(subtotal)
     setMainTotal(mainTotal - price)
   updateCart(id,0,itemInfo)
  }
  return (
    <div className="grid grid-cols-[80px_auto_40px] gap-3">
       <div>
       {url!==undefined && typeof url === 'object'?<SanityImage
          className="border-sm h-[80px] object-cover -full rounded-md"
          src={urlFor(url).width(200).height(200).url()}
          height={200} width={200} alt="item" />
    :
    <div className="h-[80px] w-full bg-gray-50"></div>} </div>
      <div className="self-center grid gap-2">
        <h5 className="font-semibold text-sm">{itemName && typeof itemName ==='string' ? itemName : " "}</h5>
        <div className="flex gap-4">
          <span className="align-baseline self-center">$ {total}</span>
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
        <div className="cursor-pointer w-fit" onClick={deleteItem}>
          <Trash className="w-4 h-4 text-red-500 " />
        </div>
      </div>
    </div>
  );
}
