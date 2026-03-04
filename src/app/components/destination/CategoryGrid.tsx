import React from 'react';
import { DESTINATIONS } from '../../data/destinations';
import { motion, LayoutGroup } from 'motion/react';

interface CategoryGridProps {
  onSelect: (category: string, cardRect: DOMRect) => void;
}

type CategorySummary = {
  name: string;
  image: string;
  count: number;
};

const buildCategories = (): CategorySummary[] => {
  const map = new Map<string, CategorySummary>();

  DESTINATIONS.forEach((dest) => {
    if (!map.has(dest.category)) {
      map.set(dest.category, {
        name: dest.category,
        image: dest.image, // 대표 썸네일로 첫 번째 상품 이미지 사용
        count: 1,
      });
    } else {
      const current = map.get(dest.category)!;
      map.set(dest.category, {
        ...current,
        count: current.count + 1,
      });
    }
  });

  const all = Array.from(map.values());
  // 큰 카테고리는 9개까지만 표시
  return all.slice(0, 9);
};

export const CategoryGrid = ({ onSelect }: CategoryGridProps) => {
  const categories = buildCategories();

  return (
    <LayoutGroup>
      <motion.div
        layout
        className="w-full relative transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            layout
            type="button"
            className="group relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 aspect-[4/5] w-full cursor-pointer rounded-2xl shadow-xl shadow-gray-300/40 ring-1 ring-black/5 text-left"
            onClick={(e) => onSelect(cat.name, e.currentTarget.getBoundingClientRect())}
            whileHover={{ scale: 1.03, translateY: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            {/* 대표 배경 이미지 + 오버레이 */}
            <div className="absolute inset-0">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
            </div>

            {/* 텍스트 영역 */}
            <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white">
                  {cat.name}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-xs md:text-sm text-gray-100/90 font-medium tracking-wide">
                  {Math.min(5, cat.count)} of {cat.count}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </LayoutGroup>
  );
};

