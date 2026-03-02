import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Layout } from '../components/ui/Layout';
import { DestinationGrid } from '../components/destination/DestinationGrid';
import { DestinationDetail } from '../components/destination/DestinationDetail';

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
}

const HomeContent = ({
  selectedDest,
  setSelectedDest,
  cardRect,
  setCardRect,
  exitRect,
  setExitRect,
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
        <h2 className="text-[18vw] font-black tracking-tighter text-gray-100 whitespace-nowrap opacity-60 mix-blend-multiply font-serif">
          DEPARTURE
        </h2>
      </div>

      {/* Grid */}
      <DestinationGrid 
        onSelect={(dest, rect) => {
          setSelectedDest(dest);
          setCardRect(rect);
        }}
      />

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

  const handleLogoClick = () => {
    setSelectedDest(null);
    setCardRect(null);
    setExitRect(null);
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
      />
    </Layout>
  );
}
