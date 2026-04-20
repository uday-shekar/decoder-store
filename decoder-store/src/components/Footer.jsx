import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

// Destructuring icons with safety check
const { Instagram, Twitter } = LucideIcons;

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5 font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          {/* 1. Brand Identity */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-4xl font-serif font-bold tracking-tighter uppercase italic">DECODE</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">
              The Sneakers Culture
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              Curated sneakers from the world's most iconic brands. 100% authentic, hand-picked, delivered fast.
            </p>
          </div>

          {/* 2. Shop Links */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/shop" className="hover:text-white transition-colors duration-300">All Sneakers</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors duration-300">New Collection</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors duration-300">Brands</Link></li>
            </ul>
          </div>

          {/* 3. Company Links */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">Company</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter (Exact match to video/screenshot) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-white">Newsletter</h3>
            <p className="text-sm text-gray-500">Get drops & releases first.</p>
            
            <form 
              className="relative border-b border-gray-800 pb-2 flex items-center group focus-within:border-white transition-colors duration-500"
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent text-sm w-full outline-none placeholder:text-gray-700"
              />
              <button 
                type="submit" 
                className="text-[11px] tracking-[0.2em] font-bold hover:text-gray-400 transition-colors ml-2 uppercase"
              >
                Join
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-6 pt-4 text-gray-500">
              {Instagram && (
                <a href="#" className="hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              )}
              {Twitter && (
                <a href="#" className="hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Twitter size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar (Video logic match) */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="space-y-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
              © 2026 DECODE. All rights reserved.
            </p>
          </div>

          {/* Vertical/Right aligned text from video */}
          <div className="text-right">
             <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold opacity-50">
               Decoding Sneaker Culture Since 2026
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}