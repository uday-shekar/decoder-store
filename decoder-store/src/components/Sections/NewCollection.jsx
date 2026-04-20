import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../Common/ProductCard';
import SectionTitle from '../Common/SectionTitle';
import Button from '../Common/Button';
 
export default function NewCollection() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
 
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-600 mb-4">SS26</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              New Collection
            </h2>
          </div>
          <Link to="/shop">
            <Button variant="ghost" icon>
              VIEW ALL
            </Button>
          </Link>
        </div>
 
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
 