import { Search } from "lucide-react";

export function Navbar() {
  return (
    <div className="lg:px-20 px-12 h-[60px] flex shadow-sm">
      <ul className="flex flex-row my-auto gap-6">
        <li className="self-center">
          <h1 className="font-bold">MyElectron</h1>
        </li>
        <li className="ml-auto  ">
          <div className="flex gap-2 rounded-full bg-gray-200 py-2 px-4">
            <input
              type="text"
              placeholder="type here to search"
              className="w-full bg-transparent focus:outline-none min-w-[300px]"
            />
            <Search className="w-5 h-5" />
          </div>
        </li>
      </ul>
    </div>
  );
}
