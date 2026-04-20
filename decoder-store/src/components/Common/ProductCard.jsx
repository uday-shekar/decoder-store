export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">{product.brand}</p>
          <h3 className="text-lg font-serif font-semibold">{product.name}</h3>
        </div>
        <p className="font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
}