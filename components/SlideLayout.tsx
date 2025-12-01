import React from 'react';
import { motion } from 'framer-motion';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string; // Optional URL for background
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "", bgImage }) => {
  return (
    <div className={`relative w-full h-full flex flex-col px-8 py-12 overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <img src={bgImage} alt="bg" className="w-full h-full object-cover opacity-30" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200" />
        )}
        {/* Decorative Elements */}
        <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>

      {/* Logo / Footer watermark */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-40 z-20">
        <span className="text-[10px] tracking-[0.3em] font-serif text-slate-800/50">LUXE ESTATE • 25</span>
      </div>
    </div>
  );
};

export default SlideLayout;