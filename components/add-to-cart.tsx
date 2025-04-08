 "use client"
 import { useState } from "react";
import { CartItem } from "./cart-item";

export function AddToCart({cart,updateCart,total,setTotal}:Record<string,Object> & {updateCart:Function,total:number,setTotal:Function}) {

console.log("orders",cart)
  return (
    <div className="grid gap-4 mt-5 h-full ">
      <div className="h-[60vh] overflow-auto scroll-smooth">
        <div className="grid gap-2">
        
        {Object.keys(cart).map((key)=>(<CartItem key={key} id={key} mainTotal={total} setMainTotal={setTotal} detail={cart[key as keyof typeof cart]} updateCart={updateCart} />))}
        </div>
      </div>
      <div>
        <table className="w-full">
          <tbody className="border-t border-b border-gray-200 py-1 ">
            <tr className="border-t border-gray-400">
              <td className="w-32 py-1 px-2">Sub total</td>
              <td className="w-32 py-1 px-2 text-right ">${total}</td>
            </tr>
           <tr className="border-b border-gray-400">
              <td className="w-32 py-1 px-2">Taxes (8%)</td>
              <td className="w-32 py-1 px-2 text-right">${total*0.08}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="">
              <td className="w-32 py-1 px-2">Grand Total</td>
              <td className="w-32 py-1 px-2 text-right">${total+(total*0.08)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button className="bg-blue-500 rounded-full px-4 py-2 cursor-pointer">
        Order and Checkout
      </button>
    </div>
  );
}
