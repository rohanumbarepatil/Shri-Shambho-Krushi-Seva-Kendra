import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold font-marathi text-[var(--color-brand-green)]">
                श्री शंभो कृषी सेवा केंद्र
              </span>
              <span className="text-xs text-gray-500 font-marathi">
                देवसिंगा (तुळजापूर)
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[var(--color-brand-green)] font-marathi font-medium">मुखपृष्ठ</Link>
            <Link to="/about" className="text-gray-700 hover:text-[var(--color-brand-green)] font-marathi font-medium">आमच्याबद्दल</Link>
            <Link to="/products" className="text-gray-700 hover:text-[var(--color-brand-green)] font-marathi font-medium">उत्पादने</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[var(--color-brand-green)] font-marathi font-medium">गॅलरी</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[var(--color-brand-green)] font-marathi font-medium">संपर्क</Link>
            
            <a href="tel:+919850011530" className="flex items-center gap-2 bg-[var(--color-brand-green)] text-white px-4 py-2 rounded-lg font-bold hover:bg-green-800 transition">
              <Phone size={18} />
              <span className="font-english">9850011530</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[var(--color-brand-green)] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-green)] font-marathi font-medium rounded-md">मुखपृष्ठ</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-green)] font-marathi font-medium rounded-md">आमच्याबद्दल</Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-green)] font-marathi font-medium rounded-md">उत्पादने</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-green)] font-marathi font-medium rounded-md">आमचे दुकान</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-green)] font-marathi font-medium rounded-md">संपर्क</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
