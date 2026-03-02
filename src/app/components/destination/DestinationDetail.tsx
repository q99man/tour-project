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

export const DestinationDetail = ({ selectedDest, cardRect, exitRect, onClose }: DestinationDetailProps) => {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const update = () => setContentHeight(window.innerHeight - HEADER_TOP - FOOTER_BOTTOM);
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

  const toFull = useMemo(() => ({
    left: 0,
    top: HEADER_TOP,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: contentHeight || (typeof window !== 'undefined' ? window.innerHeight - HEADER_TOP - FOOTER_BOTTOM : 0),
  }), [contentHeight]);

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
          className="fixed z-50 bg-white flex flex-col md:flex-row overflow-hidden"
        >
          {/* Close / Back - 우측 하나만 */}
          <button
            type="button"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-full hover:bg-black hover:text-white transition-colors shadow-sm border border-gray-200/50 cursor-pointer"
            onClick={onClose}
            aria-label="메인으로 돌아가기"
          >
            <ArrowLeft size={22} className="md:w-6 md:h-6" />
          </button>

          {/* Left: Image - shrink 시 이 영역만 보이도록 */}
          <div className="w-full md:w-1/2 h-[45vh] md:h-full relative overflow-hidden shrink-0">
            <motion.img
              src={selectedDest.image}
              alt={selectedDest.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05, filter: 'brightness(0.7)' }}
              animate={{ scale: 1, filter: 'brightness(1)' }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            />
          </div>

          {/* Right: Content - exit 시 즉시 숨겨서 작아질 때 사진만 보이게 */}
          <motion.div
            className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-8 md:p-20 overflow-y-auto shrink-0"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.06 } }}
            transition={{ duration: 0.3, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="max-w-xl">
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block font-sans">
                {selectedDest.category}
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none font-serif">
                {selectedDest.title}
              </h2>
              <h3 className="text-xl md:text-3xl font-serif italic text-gray-500 mb-8">
                {selectedDest.subtitle}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-800 font-sans">
                {selectedDest.description}
              </p>
              <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center font-sans text-sm">
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
