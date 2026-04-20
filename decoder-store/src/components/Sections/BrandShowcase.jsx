import { brands } from '../../data/products';
 
export default function BrandShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {brands.map((brand) => (
            <div key={brand.name} className="group cursor-pointer">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-400 group-hover:text-black transition-colors">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 