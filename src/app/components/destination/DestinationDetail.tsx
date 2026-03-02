import React, { useMemo, useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const HEADER_TOP = 72;
const FOOTER_BOTTOM = 80;

type Rect = { left: number; top: number; width: number; height: number };

interface DestinationDetailProps {
  selectedDest: any;
  cardRect: DOMRect | null;
  exitRect: Rect | null;
  onClose: () => void;
}

const PC_MAX = 1280;

export const DestinationDetail = ({ selectedDest, cardRect, exitRect, onClose }: DestinationDetailProps) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const update = () => {
      setContentHeight(window.innerHeight - HEADER_TOP - FOOTER_BOTTOM);
      setWindowWidth(window.innerWidth);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (selectedDest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedDest]);

  const fromCard = useMemo(() => {
    if (!cardRect) return null;
    return {
      left: cardRect.left,
      top: cardRect.top,
      width: cardRect.width,
      height: cardRect.height,
    };
  }, [cardRect]);

  const toFull = useMemo(() => {
    const w = windowWidth || (typeof window !== 'undefined' ? window.innerWidth : 0);
    const h = contentHeight || (typeof window !== 'undefined' ? window.innerHeight - HEADER_TOP - FOOTER_BOTTOM : 0);
    const width = w >= PC_MAX ? PC_MAX : w;
    const left = w >= PC_MAX ? (w - PC_MAX) / 2 : 0;
    return { left, top: HEADER_TOP, width, height: h };
  }, [contentHeight, windowWidth]);

  const hasFromCard = fromCard && selectedDest;
  const exitTarget = exitRect ?? (hasFromCard ? fromCard : null);

  return (
    <AnimatePresence>
      {selectedDest && (
        <motion.div
          key="detail-modal"
          initial={hasFromCard ? fromCard : { scale: 0.92, opacity: 0 }}
          animate={toFull}
          exit={exitTarget || { scale: 0.92, opacity: 0 }}
          transition={{
            type: 'tween',
            duration: 0.35,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="fixed z-50 bg-white flex flex-col min-[800px]:flex-row overflow-hidden min-[1280px]:rounded-b-lg min-[1280px]:shadow-2xl"
        >
          {/* 뒤로가기 - 모바일(375) / 태블릿(800) / PC(1280) 각각 위치·크기 반응형 */}
          <button
            type="button"
            className="absolute top-3 right-3 min-[800px]:top-5 min-[800px]:right-5 min-[1280px]:top-6 min-[1280px]:right-8 z-[60] p-2.5 min-[800px]:p-3 min-[1280px]:p-4 bg-white/90 backdrop-blur-md rounded-full hover:bg-black hover:text-white transition-colors shadow-sm border border-gray-200/50 cursor-pointer"
            onClick={onClose}
            aria-label="메인으로 돌아가기"
          >
            <ArrowLeft className="w-5 h-5 min-[800px]:w-6 min-[800px]:h-6 min-[1280px]:w-7 min-[1280px]:h-7" />
          </button>

          {/* 이미지 영역 - 모바일: 상단 고정 비율, 태블릿/PC: 좌측 절반 */}
          <div className="w-full max-w-[375px] min-[800px]:max-w-none min-[800px]:w-1/2 min-[800px]:min-h-0 h-[40vh] min-[800px]:h-full mx-auto min-[800px]:mx-0 relative overflow-hidden shrink-0">
            <motion.img
              src={selectedDest.image}
              alt={selectedDest.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05, filter: 'brightness(0.7)' }}
              animate={{ scale: 1, filter: 'brightness(1)' }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>

          {/* 설명 영역 - 모바일: 375 맞춤, 태블릿 800, PC 1280 */}
          <motion.div
            className="w-full min-[800px]:w-1/2 h-auto min-[800px]:h-full flex flex-col justify-center overflow-y-auto shrink-0 px-4 py-6 min-[800px]:px-8 min-[800px]:py-10 min-[1280px]:px-16 min-[1280px]:py-14"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.06 } }}
            transition={{ duration: 0.3, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="w-full max-w-[375px] min-[800px]:max-w-[360px] min-[1280px]:max-w-[520px] mx-auto min-[800px]:mx-0">
              <span className="text-xs min-[800px]:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 min-[800px]:mb-4 block font-sans">
                {selectedDest.category}
              </span>
              <h2 className="text-3xl min-[800px]:text-5xl min-[1280px]:text-6xl min-[1280px]:leading-tight font-black tracking-tighter mb-2 min-[800px]:mb-4 leading-none font-serif">
                {selectedDest.title}
              </h2>
              <h3 className="text-lg min-[800px]:text-2xl min-[1280px]:text-3xl font-serif italic text-gray-500 mb-6 min-[800px]:mb-8">
                {selectedDest.subtitle}
              </h3>
              <p className="text-sm min-[800px]:text-base min-[1280px]:text-lg leading-relaxed text-gray-800 font-sans">
                {selectedDest.description}
              </p>
              <div className="mt-8 min-[800px]:mt-12 pt-6 min-[800px]:pt-8 border-t border-gray-200 flex flex-col min-[800px]:flex-row min-[800px]:justify-between min-[800px]:items-center gap-2 font-sans text-xs min-[800px]:text-sm">
                <span className="font-bold uppercase tracking-widest text-gray-400">
                  Brand Identity, Visual Language
                </span>
                <span className="font-bold uppercase tracking-widest text-black">SEOUL, KR</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
