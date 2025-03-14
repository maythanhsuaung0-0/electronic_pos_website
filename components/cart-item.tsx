"use client";
import { Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";

interface ChildProps {
  name: string;
  url?: string;
  price: number;
}

export function CartItem({ name, url = "", price }: ChildProps) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="grid grid-cols-[80px_auto_40px] gap-3">
      <div className="bg-red-100 w-full h-24 rounded-sm"></div>
      <div className="self-center grid gap-2">
        <h5 className="font-semibold text-sm">{name}</h5>
        <div className="grid grid-cols-3 gap-1 border border-gray-300 py-1 px-2 rounded-sm w-fit">
          <button
            onClick={decrease}
            className={`${
              count <= 0 ? " cursor-not-allowed" : " cursor-pointer"
            }`}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{count}</span>
          <button onClick={increase} className="cursor-pointer">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="self-center grid gap-2">
        <div>${price}</div>
        <div className="cursor-pointer w-fit">
          <Trash className="w-4 h-4 text-red-500 " />
        </div>
      </div>
    </div>
  );
}
