import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Search, User } from 'lucide-react';

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="w-full p-6 md:px-10 md:py-6 flex items-center justify-between gap-4 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-200">
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

      <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
        <nav
          ref={navRef}
          className="hidden md:flex gap-6 lg:gap-8 items-center text-sm font-medium tracking-wide uppercase font-sans relative flex-shrink"
        >
          {NAVIGATION.map((item) => (
            <div key={item.label} className="relative">
              <button
                type="button"
                className={`flex items-center gap-1 py-2 transition-colors cursor-pointer ${
                  activeMenu === item.label
                    ? 'text-black font-semibold'
                    : 'text-gray-600 hover:text-black font-medium'
                }`}
                onClick={() =>
                  setActiveMenu((prev) => (prev === item.label ? null : item.label))
                }
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeMenu === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
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

        {/* Desktop: 검색 + 로그인 */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            ref={searchRef}
            layout
            className="flex items-center overflow-hidden rounded-full border border-gray-300/80 bg-white/80 text-xs text-gray-700 shadow-sm cursor-text hover:border-gray-400/90 hover:bg-white"
            animate={{ width: searchOpen ? 260 : 110 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            onClick={() => {
              if (!searchOpen) {
                setSearchOpen(true);
              }
            }}
          >
            <button
              type="button"
              className="pl-3 pr-1 py-1.5 text-gray-500 cursor-pointer hover:text-black"
              onClick={() => {
                if (!searchOpen) {
                  setSearchOpen(true);
                }
              }}
            >
              <Search size={16} />
            </button>
            {!searchOpen && (
              <button
                type="button"
                className="pr-3 py-1.5 text-[11px] font-medium text-gray-600 cursor-pointer"
                onClick={() => {
                  if (!searchOpen) {
                    setSearchOpen(true);
                  }
                }}
              >
                검색
              </button>
            )}
            {searchOpen && (
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="검색어를 입력해 주세요"
                className="flex-1 pr-3 py-1.5 bg-transparent outline-none text-xs text-gray-800 placeholder:text-gray-400"
              />
            )}
          </motion.div>

          <button
            type="button"
            className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
            aria-label="로그인"
          >
            <User size={18} />
          </button>
        </div>

        {/* Mobile: 햄버거 아이콘 */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 text-gray-600 cursor-pointer hover:text-black transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="메뉴 열기"
        >
          <span className="block w-6 h-0.5 bg-current" />
          <span className="block w-6 h-0.5 bg-current" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile: 서랍 메뉴 - body에 포탈로 렌더, 빠르고 부드러운 아래 슬라이드 */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="fixed inset-0 bg-black/25 z-[70] md:hidden backdrop-blur-[2px]"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden
                />
                <motion.aside
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ type: 'tween', duration: 0.2, ease: 'easeOut' }}
                  className="fixed top-0 left-0 right-0 max-h-[85vh] z-[80] md:hidden flex flex-col rounded-b-2xl overflow-hidden bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50"
                >
                  <div className="p-5 flex justify-between items-center border-b border-gray-200/80 shrink-0">
                    <span className="text-lg font-serif font-bold tracking-tighter text-gray-900">Menu</span>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="p-2 text-gray-600 hover:text-black cursor-pointer"
                      aria-label="메뉴 닫기"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 pb-8 font-sans">
                    <ul className="list-none m-0 p-0">
                      {NAVIGATION.map((item) => (
                        <li key={item.label} className="border-b border-gray-100 last:border-0">
                          <p className="pt-4 pb-2 text-sm font-semibold tracking-widest uppercase text-gray-700">
                            {item.label}
                          </p>
                          <ul className="list-none m-0 pb-4 pl-0">
                            {item.sub.map((subItem) => (
                              <li key={subItem}>
                                <a
                                  href="#"
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2.5 text-sm font-medium text-gray-800 hover:text-black cursor-pointer"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};
