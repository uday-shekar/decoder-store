import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_NAME, NAVIGATION } from '../../utils/constants';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
      <nav className="container-custom flex justify-between items-center w-full">
        <Link to="/" className="text-2xl font-serif font-bold">{SITE_NAME}</Link>
        <div className="hidden md:flex space-x-10">
          {NAVIGATION.map((item) => (
            <Link key={item.label} to={item.path} className="text-[12px] font-bold tracking-widest hover:opacity-50">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <Search size={20} className="cursor-pointer" />
          <ShoppingBag size={20} className="cursor-pointer" />
          <Menu size={20} className="md:hidden cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}