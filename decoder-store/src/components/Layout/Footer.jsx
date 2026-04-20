import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';
import { SITE_NAME, SITE_TAGLINE, FOOTER_LINKS, CONTACT_INFO } from '../../utils/constants';
 
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">{SITE_NAME}</h3>
            <p className="text-gray-400 text-sm tracking-wide mb-6">{SITE_TAGLINE}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Curated sneakers from the world's most iconic brands. 100% authentic, hand-picked, delivered fast.
            </p>
          </div>
 
          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6">NEWSLETTER</h4>
            <p className="text-gray-400 text-sm mb-4">Get drops & releases first.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900 text-white placeholder-gray-600 text-sm focus:outline-none"
              />
              <button className="px-6 py-2 bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">
                JOIN
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a 
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={CONTACT_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}