import { Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-serif font-bold tracking-tighter">DECODE</Link>
        
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          <Link to="/" className="hover:opacity-50 transition">Home</Link>
          <Link to="/shop" className="hover:opacity-50 transition">Shop</Link>
          <Link to="/about" className="hover:opacity-50 transition">About</Link>
          <Link to="/services" className="hover:opacity-50 transition">Services</Link>
          <Link to="/contact" className="hover:opacity-50 transition">Contact</Link>
        </div>

        <div className="flex items-center space-x-5">
          <Search size={20} strokeWidth={1.5} />
          <ShoppingBag size={20} strokeWidth={1.5} />
        </div>
      </div>
    </nav>
  );
}