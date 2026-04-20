import { useState } from 'react';
import SneakerCard from '../components/SneakerCard';

// Image Imports
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

const BRANDS = ['ALL', 'NIKE', 'JORDAN', 'ADIDAS', 'CONVERSE', 'REEBOK', 'STÜSSY'];
const CATEGORIES = ['ALL', 'LOW', 'MID', 'HIGH'];

const PRODUCTS = [
  { id: 1, brand: 'NIKE', name: 'Dunk Low x Stüssy', price: 320, category: 'LOW', img: img1 },
  { id: 2, brand: 'JORDAN', name: 'Air Jordan 1 Mid', price: 285, category: 'MID', img: img2 },
  { id: 3, brand: 'ADIDAS', name: 'Superstar Classic', price: 140, category: 'LOW', img: img3 },
  { id: 4, brand: 'CONVERSE', name: 'Chuck 70 Hi', price: 110, category: 'HIGH', img: img4 },
  { id: 5, brand: 'NIKE', name: 'Dunk Low Green', price: 190, category: 'LOW', img: img5 },
  { id: 6, brand: 'CONVERSE', name: 'Chuck 70 Logo', price: 115, category: 'HIGH', img: img6 },
];

export default function Shop() {
  const [activeBrand, setActiveBrand] = useState('ALL');
  const [activeCat, setActiveCat] = useState('ALL');
  const [priceRange, setPriceRange] = useState(400);

  // --- Logic Fix: Filtering the products ---
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesBrand = activeBrand === 'ALL' || product.brand === activeBrand;
    const matchesCat = activeCat === 'ALL' || product.category === activeCat;
    const matchesPrice = product.price <= priceRange;

    return matchesBrand && matchesCat && matchesPrice;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <header className="mb-16">
        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-400">The Catalog</span>
        <h1 className="text-7xl font-serif mt-4 tracking-tighter">All Sneakers</h1>
        <p className="text-gray-500 mt-4 font-medium italic italic">
          {filteredProducts.length} pairs curated from the icons.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12">
          
          {/* Brand Filter */}
          <section>
            <h3 className="text-[11px] uppercase tracking-widest font-bold mb-6">Brand</h3>
            <div className="flex flex-wrap gap-2">
              {BRANDS.map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-4 py-2 text-[10px] font-bold border transition duration-300 ${
                    activeBrand === brand ? 'bg-black text-white border-black' : 'border-gray-200 text-black hover:border-black'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section>
            <h3 className="text-[11px] uppercase tracking-widest font-bold mb-6">Category</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 text-[10px] font-bold border transition duration-300 ${
                    activeCat === cat ? 'bg-black text-white border-black' : 'border-gray-200 text-black hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Price Filter */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[11px] uppercase tracking-widest font-bold">Price · Up to ${priceRange}</h3>
            </div>
            <input 
              type="range" 
              min="0" 
              max="400" 
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
          </section>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              Showing {filteredProducts.length}
            </span>
            <select className="text-[10px] font-bold tracking-widest uppercase bg-transparent outline-none cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {filteredProducts.map(shoe => (
                <SneakerCard key={shoe.id} shoe={shoe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 font-serif italic text-xl">No sneakers found for this filter.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}