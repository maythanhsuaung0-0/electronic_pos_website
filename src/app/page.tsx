import { AddToCart } from "@/components/add-to-cart";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";
import { Tag } from "@/components/tags";
//import { fetchProducts } from "../sanity/lib/fetchProducts"
import { sanityFetch } from '../sanity/lib/sanityFetch';
import { allItems, allCategories } from '../sanity/lib/queries';
import { ItemPreview } from "@/lib/types/item";

async function App() {
  const tags = ["All", "phones", "tablets", "household appliances"];
  const [categories, items] = await Promise.all([
    sanityFetch({ query: allCategories }),
    sanityFetch({ query: allItems })
  ])
  console.log(items)
  console.log(categories)
  return (
    <div className="lg:relative lg:h-full lg:w-full lg:font-theme lg:block hidden bg-white">
      <div className="lg:grid lg:grid-cols-[auto_380px]">
        <div className="">
          <Navbar />
          <div className="grid gap-4 mx-20">
            <h4 className="text-sm mt-6">Choose from popular categories</h4>
            <div className="flex gap-2 flex-row">
              {categories.map((e:ItemPreview) => {
                return <Tag key={e.id} value={e.name}></Tag>;
              })}
            </div>
            <div className=" scroll-smooth overflow-auto h-[calc(100vh-200px)]">
              <div className="flex flex-wrap gap-4 flex-row">
                {items.map((e:ItemPreview) => {
                  return (
                    <Card
                      key={e.id}
                    items ={e}
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
            <AddToCart />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default App;

