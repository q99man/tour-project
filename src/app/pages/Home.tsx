import React, { useState } from 'react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Layout } from '../components/ui/Layout';
import { DestinationGrid } from '../components/destination/DestinationGrid';
import { DestinationDetail } from '../components/destination/DestinationDetail';
import { CategoryGrid } from '../components/destination/CategoryGrid';

type Destination = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
};

type ExitRect = { left: number; top: number; width: number; height: number };

interface HomeContentProps {
  selectedDest: Destination | null;
  setSelectedDest: React.Dispatch<React.SetStateAction<Destination | null>>;
  cardRect: DOMRect | null;
  setCardRect: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  exitRect: ExitRect | null;
  setExitRect: React.Dispatch<React.SetStateAction<ExitRect | null>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const HomeContent = ({
  selectedDest,
  setSelectedDest,
  cardRect,
  setCardRect,
  exitRect,
  setExitRect,
  selectedCategory,
  setSelectedCategory,
}: HomeContentProps) => {
  const handleScrollTop = () => {
    const main = document.getElementById('main-scroll');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseDetail = () => {
    const el = selectedDest
      ? document.querySelector(`[data-dest-id="${selectedDest.id}"]`)
      : null;
    const rect = el?.getBoundingClientRect();
    if (rect) {
      setExitRect({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
      requestAnimationFrame(() => {
        setSelectedDest(null);
        setCardRect(null);
        setExitRect(null);
      });
    } else {
      setSelectedDest(null);
      setCardRect(null);
      setExitRect(null);
    }
  };

  return (
    <>
      {/* Giant Background Typography */}
      <div className="fixed top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none z-0 overflow-hidden flex justify-center select-none">
        <h2 className="text-[16vw] md:text-[18vw] font-black tracking-tighter text-gray-200/70 whitespace-nowrap font-serif">
          {selectedCategory ? 'ITINERARY' : 'DEPARTURE'}
        </h2>
      </div>

      {/* Intro section */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mb-10 md:mb-14 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-900">
              {selectedCategory ? selectedCategory : '어떤 여행을 떠나고 싶으신가요?'}
            </h1>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 text-right">
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-700 hover:text-black cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back to categories
              </button>
            )}
          </div>
        </div>

        {selectedCategory && (
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className="md:hidden inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-700 hover:text-black cursor-pointer mt-1"
          >
            <ArrowLeft size={16} />
            카테고리로 돌아가기
          </button>
        )}
      </div>

      {/* Grid section */}
      <div className="relative z-10 w-full">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {!selectedCategory && (
              <motion.div
                key="category-grid"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <CategoryGrid
                  onSelect={(category, _rect) => {
                    setSelectedCategory(category);
                    const main = document.getElementById('main-scroll');
                    if (main) {
                      main.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                />
              </motion.div>
            )}

            {selectedCategory && (
              <motion.div
                key="destination-grid"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <DestinationGrid
                  category={selectedCategory}
                  onSelect={(dest, rect) => {
                    setSelectedDest(dest);
                    setCardRect(rect);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      {/* Button Sector (Now Scroll Top) - 모든 해상도에서 풋터 위에 보이도록 */}
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-4">
        <p className="text-sm italic text-gray-500 font-serif tracking-wide pointer-events-none hidden md:block">
          Explore More Destinations
        </p>
        <button
          type="button"
          className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-700 transition-colors shadow-2xl cursor-pointer"
          onClick={handleScrollTop}
        >
          <span className="uppercase text-sm font-bold tracking-widest font-sans">
            Back to Top
          </span>
          <ArrowUp size={18} className="transition-transform duration-500" />
        </button>
      </div>

      {/* Detail Modal */}
      <DestinationDetail 
        selectedDest={selectedDest}
        cardRect={cardRect}
        exitRect={exitRect}
        onClose={handleCloseDetail}
      />
    </>
  );
};

export default function Home() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const [exitRect, setExitRect] = useState<ExitRect | null>(null);
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleLogoClick = () => {
    setSelectedDest(null);
    setCardRect(null);
    setExitRect(null);
    setSelectedCategory(null);
    document.getElementById('main-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout onLogoClick={handleLogoClick}>
      <HomeContent 
        selectedDest={selectedDest}
        setSelectedDest={setSelectedDest}
        cardRect={cardRect}
        setCardRect={setCardRect}
        exitRect={exitRect}
        setExitRect={setExitRect}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Layout>
  );
}
