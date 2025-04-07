 "use client"
 import { useState } from "react";
import { CartItem } from "./cart-item";

export function AddToCart({cart,updateCart}:Record<string,Object> & {updateCart:Function}) {
const [total,setTotal] = useState<number>(0.0)

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
              <td className="w-32 py-1 px-2 text-right ">$200</td>
            </tr>
            <tr className="">
              <td className="w-32 py-1 px-2">Delivery Fee</td>
              <td className="w-32 py-1 px-2 text-right">$20</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="w-32 py-1 px-2">Taxes</td>
              <td className="w-32 py-1 px-2 text-right">$20</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="">
              <td className="w-32 py-1 px-2">Total</td>
              <td className="w-32 py-1 px-2 text-right">$432</td>
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
