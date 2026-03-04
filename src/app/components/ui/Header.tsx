import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Menu,
  X,
  User,
  LogIn,
  Home,
  Bell,
  HelpCircle,
  MessageCircle,
  Bot,
  ChevronRight,
} from 'lucide-react';

export const Header = ({ onLogoClick }: { onLogoClick?: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="w-full px-5 py-4 md:px-10 md:py-5 flex items-center justify-between gap-4 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-gray-200">
      {/* 웹 이름 */}
      <button
        type="button"
        onClick={() => {
          onLogoClick?.();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-gray-700 hover:text-black transition-colors cursor-pointer"
      >
        GNEUL
      </button>

      {/* 가운데 검색 */}
      <div className="flex-1 flex justify-center">
        <motion.div
          ref={searchRef}
          layout
          className="flex items-center overflow-hidden rounded-full border border-gray-300/80 bg-white/80 text-xs md:text-sm lg:text-[15px] text-gray-700 shadow-sm cursor-text hover:border-gray-400/90 hover:bg-white w-full max-w-[260px] md:max-w-[390px] lg:max-w-[520px]"
          animate={{}}
          onClick={() => {
            if (!searchOpen) {
              setSearchOpen(true);
            }
          }}
        >
          <button
            type="button"
              className="pl-3 pr-1 py-1.5 text-gray-700 cursor-pointer hover:text-black"
            onClick={(e) => {
              e.stopPropagation();
              if (!searchOpen) setSearchOpen(true);
            }}
          >
            <Search size={16} />
          </button>
          {!searchOpen && (
            <button
              type="button"
              className="pr-3 py-1.5 text-[11px] md:text-[12px] lg:text-[13px] font-medium text-gray-600 cursor-pointer truncate"
              onClick={(e) => {
                e.stopPropagation();
                if (!searchOpen) setSearchOpen(true);
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
              className="flex-1 pr-3 py-1.5 bg-transparent outline-none text-xs md:text-sm lg:text-base text-gray-800 placeholder:text-gray-400"
            />
          )}
        </motion.div>
      </div>

      {/* 우측 햄버거 버튼 (모든 해상도에서 동일) */}
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer shadow-sm"
        onClick={() => setMobileOpen(true)}
        aria-label="메뉴 열기"
      >
        <Menu size={20} />
      </button>

      {/* 사이드바 - body에 포탈, 오른쪽에서 부드럽게 슬라이드 + 블러 오버레이 */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-[3px] z-[70]"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden
                />
                <motion.aside
                  initial={{ x: '100%', opacity: 0.6 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0.6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.9 }}
                  className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-xs bg-gradient-to-b from-white via-gray-50 to-gray-100 z-[80] shadow-[0_0_35px_rgba(15,23,42,0.38)] flex flex-col border-l border-gray-200/70"
                >
                  {/* 상단 로그인/회원가입 영역 - 메인 테마와 어울리는 뉴트럴 톤 */}
                  <div className="px-5 pt-8 pb-6 flex items-center gap-3 relative bg-gradient-to-r from-white/100 via-gray-50 to-gray-100/90 border-b border-gray-200/80">
                    <button
                      type="button"
                      onClick={() => {
                        // TODO: 로그인/회원가입으로 이동
                        setMobileOpen(false);
                      }}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shadow-gray-400/40 ring-1 ring-gray-200/70 cursor-pointer hover:ring-gray-300 hover:shadow-gray-500/40"
                      aria-label="로그인 / 회원가입"
                    >
                      <User className="text-gray-500" size={24} />
                    </button>
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: 로그인/회원가입으로 이동
                          setMobileOpen(false);
                        }}
                        className="inline-flex items-center gap-1 text-[16px] font-semibold tracking-[0.18em] uppercase text-gray-700 hover:text-gray-900 cursor-pointer"
                      >
                        로그인/회원가입
                      </button>
                    </div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 p-2 text-gray-700 hover:text-black cursor-pointer"
                      onClick={() => setMobileOpen(false)}
                      aria-label="닫기"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* 메뉴 리스트 */}
                  <nav className="flex-1 overflow-y-auto px-5 py-4 text-sm font-sans">
                    <ul className="space-y-1">
                      <li>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-800 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-3">
                            <Home size={18} className="text-gray-500" />
                            <span className="text-[13px] font-medium">홈으로</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-800 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-3">
                            <Bell size={18} className="text-gray-500" />
                            <span className="text-[13px] font-medium">공지사항</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-800 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-3">
                            <HelpCircle size={18} className="text-gray-500" />
                            <span className="text-[13px] font-medium">도움말</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-800 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-3">
                            <MessageCircle size={18} className="text-gray-500" />
                            <span className="text-[13px] font-medium">1:1 문의</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-800 cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-3">
                            <Bot size={18} className="text-gray-500" />
                            <span className="text-[13px] font-medium">AI 챗봇</span>
                          </span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </li>
                    </ul>
                  </nav>

                  {/* 하단 호스트센터 버튼 - 보라/노랑 대신 뉴트럴 그라데이션 */}
                  <div className="px-5 pb-6 pt-3 border-t border-gray-200 bg-gradient-to-r from-white via-gray-50 to-gray-100">
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-gray-700 text-white text-[13px] font-semibold py-3 cursor-pointer shadow-2xl"
                    >
                      호스트센터
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};
