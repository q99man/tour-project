import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onLogoClick?: () => void;
}

export const Layout = ({ children, onLogoClick }: LayoutProps) => {
  return (
    <div className="relative h-screen flex flex-col bg-[#fafafa] text-gray-900 font-sans selection:bg-black selection:text-white overflow-hidden">
      
      {/* Fixed Header */}
      <div className="shrink-0 z-50">
        <Header onLogoClick={onLogoClick} />
      </div>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
        <div className="min-h-full w-full max-w-[1800px] mx-auto px-6 md:px-12 py-12 flex flex-col items-center">
          {children}
        </div>
      </main>

      {/* Fixed Footer */}
      <div className="shrink-0 z-40">
        <Footer />
      </div>
    </div>
  );
};
