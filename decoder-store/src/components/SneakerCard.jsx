export default function SneakerCard({ shoe }) {
  // Destructure for cleaner code
  const { brand, name, price, img } = shoe;

  return (
    <div className="group cursor-pointer w-full">
      {/* 1. Image Wrapper - Perfect Editorial Look */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f6f6] mb-5">
        <img 
          src={img} 
          alt={name}
          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
          // Custom Fallback in case image import fails
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000';
          }}
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* 2. Content Section - Exact Video/Screenshot Match */}
      <div className="flex justify-between items-start px-1">
        {/* Left Side: Brand & Model */}
        <div className="space-y-1">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
            {brand}
          </p>
          <h3 className="text-[15px] md:text-lg font-serif leading-tight group-hover:underline decoration-1 underline-offset-8 transition-all duration-500">
            {name}
          </h3>
        </div>

        {/* Right Side: Price */}
        <div className="text-right">
          <p className="text-base md:text-lg font-serif italic text-black font-medium">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}