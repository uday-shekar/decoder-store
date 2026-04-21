import { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold tracking-tighter">
          DECODE
        </Link>
        
        {/* Desktop Menu - Hidden on Mobile */}
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:opacity-50 transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 md:space-x-5">
          <button className="hover:opacity-50 transition">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:opacity-50 transition">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          
          {/* Mobile Menu Button - Visible only on Mobile/Tablet */}
          <button 
            className="md:hidden p-1 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            
            {/* Mobile Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-10 px-6 flex flex-col space-y-6 md:hidden z-50 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif tracking-tight border-b border-gray-50 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Extra Info in Mobile Menu */}
              <div className="pt-4 flex flex-col space-y-2">
                <span className="text-[10px] uppercase text-gray-400 tracking-widest">Support</span>
                <p className="text-sm font-medium">help@decode.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}