//import { fetchProducts } from "../sanity/lib/fetchProducts"
import { sanityFetch } from '../sanity/lib/sanityFetch';
import { allItems, allCategories } from '../sanity/lib/queries';
import { MainComponent } from '@/components/mainComponent';

async function App() {
  const [categories, items] = await Promise.all([
    sanityFetch({ query: allCategories }),
    sanityFetch({ query: allItems })
  ])
  return (
    <div className="lg:relative lg:h-full lg:w-full lg:font-theme lg:block hidden bg-white">
   <MainComponent categories={categories} items={items}/> 
     </div>
  );
}
export default App;

