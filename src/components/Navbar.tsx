import { useState } from 'react';
import { Menu, X, Church } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Storia', href: '#storia' },
    { title: 'Orari Messe', href: '#orari' },
    { title: 'Eventi', href: '#eventi' },
    { title: 'Galleria', href: '#galleria' },
    { title: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Church className="h-6 w-6 text-amber-700" />
            <span className="text-xl font-semibold text-amber-900">Cattedrale di Mileto</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;