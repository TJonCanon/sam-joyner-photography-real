'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];
  const isActive = (path: string) =>
    pathname === path ? 'font-medium text-black' : 'text-gray-600 hover:text-black';

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif tracking-wider text-black">
              SAM JOYNER
              <span className="block text-xs tracking-widest mt-1 font-light">
                PHOTOGRAPHY
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.path}
                className={`${isActive(link.path)} text-sm uppercase tracking-widest transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.path}
                className={`${isActive(link.path)} block px-3 py-2 text-sm uppercase tracking-widest`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;