import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const NAVIGATION = [
  { 
    label: 'Destinations', 
    sub: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'] 
  },
  { 
    label: 'Journal', 
    sub: ['Stories', 'Tips', 'Photography', 'Culture'] 
  },
  { 
    label: 'About', 
    sub: ['Our Story', 'Team', 'Contact', 'Press'] 
  }
];

export const Header = ({ onLogoClick }: { onLogoClick?: () => void }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeMenu === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeMenu]);

  return (
    <header className="w-full p-6 md:px-10 md:py-6 flex justify-between items-center z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-200">
      <button
        type="button"
        onClick={() => {
          onLogoClick?.();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-2xl font-serif font-bold tracking-tighter text-gray-600 hover:text-black transition-colors cursor-pointer"
      >
        VOYAGE
      </button>
      
      <nav ref={navRef} className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase font-sans relative">
        {NAVIGATION.map((item) => (
          <div key={item.label} className="relative">
            <button
              type="button"
              className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${activeMenu === item.label ? 'text-black font-semibold' : 'text-gray-600 hover:text-black font-medium'}`}
              onClick={() => setActiveMenu((prev) => (prev === item.label ? null : item.label))}
            >
              {item.label}
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {activeMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-100 shadow-xl rounded-none overflow-hidden z-[60]"
                >
                  <div className="flex flex-col py-2">
                    {item.sub.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="px-6 py-3 text-xs font-bold text-gray-600 hover:text-black hover:bg-gray-50 transition-colors tracking-widest uppercase text-left block cursor-pointer"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
      
      {/* Mobile Menu Icon Placeholder */}
      <button type="button" className="md:hidden text-gray-600 cursor-pointer hover:text-black transition-colors" onClick={() => console.log('Mobile menu clicked')}>
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current mb-1"></span>
        <span className="block w-6 h-0.5 bg-current"></span>
      </button>
    </header>
  );
};
