//import { fetchProducts } from "../sanity/lib/fetchProducts"
import { sanityFetch } from '../sanity/lib/sanityFetch';
import { allItems, allCategories } from '../sanity/lib/queries';
import { MainComponent } from '@/components/mainComponent';
import { Navbar } from '@/components/navbar';

async function App() {
  const [categories, items] = await Promise.all([
    sanityFetch({ query: allCategories }),
    sanityFetch({ query: allItems })
  ])
  return (
    <div className="md:relative md:h-full md:w-full md:font-theme md:block hidden bg-white">
      <Navbar />
      <MainComponent categories={categories} items={items} />
    </div>
  );
}
export default App;

