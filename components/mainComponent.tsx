"use client"
import React, { useState } from "react"
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Tag } from "./tags";
import { AddToCart } from "./add-to-cart";
import { ItemPreview } from "@/lib/types/item";
type Props = {
  categories: Array<ItemPreview>,
  items: Array<ItemPreview>
}

export const MainComponent = ({ categories, items }: Props) => {
  const [cart, setCart] = useState<Record<string, Object>>({})

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
    <div className="lg:grid lg:grid-cols-[auto_380px]">
      <div className="">
        <Navbar />
        <div className="grid gap-6 mx-20">
          <div>
            <h4 className="text-sm mt-6">Choose from popular categories</h4>
            <div className="flex gap-4 mt-2 flex-row">
              {categories.map((e: ItemPreview) => {
                return <Tag key={e.id} value={e.name}></Tag>;
              })}
            </div>
          </div>
          <div className=" scroll-smooth overflow-auto h-[calc(100vh-200px)]">
            <div className="flex flex-wrap gap-4 flex-row">
              {items.map((e: ItemPreview) => {
                return (
                  <Card
                    key={e.id}
                    items={e}
                    func={managingCart}
                    cart={cart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-screen">
        <div className="p-5">
          {" "}
          <h3>My Orders</h3>
          <AddToCart cart={cart} updateCart={managingCart} />
        </div>{" "}
      </div>
    </div>

  )
}
