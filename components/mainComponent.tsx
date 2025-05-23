"use client"
import React, { useState } from "react"
import { Card } from "./card";
import { Tag } from "./tags";
import { AddToCart } from "./add-to-cart";
import { ItemPreview } from "@/lib/types/item";
type Props = {
  categories: Array<ItemPreview>,
  items: Array<ItemPreview>
}

export const MainComponent = ({ categories, items }: Props) => {
  const [cart, setCart] = useState<Record<string, Object>>({})
  const [total, setTotal] = useState<number>(0.0)
  const managingCart = (e: string, count: number, itemInfo: Object) => {
    console.log("my info", itemInfo, itemInfo["name" as keyof typeof itemInfo])

    if (count > 0) {
      setCart((prev) => ({ ...prev, [e]: { "count": count, itemInfo } }))
    }
    else {
      setCart((prev) => {
        const newCart = { ...prev }
        delete newCart[e]
        return newCart;
      })
    }

  }
  return (

    <div className="grid md:grid-cols-[auto_200px] h-[calc(100vh-60px)] lg:grid-cols-[auto_380px] @container ">
      <div className="">
        <div className="grid gap-6 mx-12 lg:mx-20">
          <div>
            <h4 className="text-sm mt-6">Choose from popular categories</h4>
            <div className="flex gap-2 mt-2 flex-row ">
              {categories.map((e: ItemPreview) => {
                return <Tag key={e.id} value={e.name}></Tag>;
              })}
            </div>
          </div>
          <div className=" ">
            <div className="grid grid-cols-2  @2xl:grid-cols-3 @4xl:grid-cols-5 gap-3 @2xl:gap-4 ">
              {items.map((e: ItemPreview) => {
                return (
                  <Card
                    key={e.id}
                    items={e}
                    func={managingCart}
                    cart={cart}
                    total={total}
                    setTotal={setTotal}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {    Object.keys(cart).length!==0 &&  <div className="bg-gray-100 ">
        <div className="p-5">
          {" "}
          <h3>My Orders</h3>
          <AddToCart total={total} setTotal={setTotal} cart={cart} updateCart={managingCart} />
        </div>{" "}
      </div>
      }
    </div>

  )
}
