
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-xl border-b-2 border-[#1d1d1f]/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight text-[#1d1d1f] hover:opacity-80 transition-opacity whitespace-nowrap relative group">
          <span className="relative z-10">Fred Dongho Tsobjio</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1d1d1f] group-hover:w-full transition-all duration-300"></span>
        </a>
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-[#1d1d1f] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1d1d1f] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="px-4 py-2 bg-[#1d1d1f] text-white text-xs font-bold rounded-full hover:bg-[#007aff] transition-all shadow-[0_4px_15px_rgba(29,29,31,0.3)] hover:shadow-[0_6px_20px_rgba(0,122,255,0.4)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
