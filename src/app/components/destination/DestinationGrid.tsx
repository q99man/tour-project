import React from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { motion } from 'motion/react';

interface DestinationGridProps {
  onSelect: (dest: any, cardRect: DOMRect) => void;
  category?: string | null;
}

export const DestinationGrid = ({ onSelect, category }: DestinationGridProps) => {
  const base = category
    ? DESTINATIONS.filter((dest) => dest.category === category)
    : DESTINATIONS;

  // 요청: 카테고리별 상품은 5개씩 보여주기
  const visibleDestinations = category ? base.slice(0, 5) : base;

  return (
    <motion.div
      layout
      className="w-full relative transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10"
    >
      {visibleDestinations.map((dest) => (
        <motion.div
          layoutId={`dest-${dest.id}`}
          key={dest.id}
          data-dest-id={dest.id}
          className="group relative overflow-hidden bg-gray-200 aspect-[4/5] w-full cursor-pointer rounded-lg shadow-lg shadow-gray-300/40 ring-1 ring-black/5"
          onClick={(e) => onSelect(dest, e.currentTarget.getBoundingClientRect())}
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        >
          {/* Image */}
          <img
            src={dest.image}
            alt={dest.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />

          {/* Overlay Hover Reveal */}
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-8">
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-white/80 text-sm tracking-widest uppercase mb-2 font-sans">
                {dest.category}
              </p>
              <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tighter font-serif">
                {dest.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
