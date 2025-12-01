import React from 'react';
import { motion } from 'framer-motion';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  bgImage?: string; // Optional URL for background
  dark?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "", bgImage, dark = false }) => {
  return (
    <div className={`relative w-full h-full flex flex-col px-8 py-12 overflow-hidden ${dark ? 'bg-slate-900' : 'bg-slate-50'} ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <>
            <img src={bgImage} alt="bg" className={`w-full h-full object-cover ${dark ? 'opacity-40 mix-blend-overlay' : 'opacity-20'}`} />
            {dark && <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200" />
        )}
        {/* Decorative Elements */}
        <div className={`absolute top-[-10%] right-[-20%] w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${dark ? 'bg-amber-500/20' : 'bg-amber-500/10'}`} />
        <div className={`absolute bottom-[-10%] left-[-20%] w-[250px] h-[250px] rounded-full blur-3xl ${dark ? 'bg-blue-900/20' : 'bg-blue-500/10'}`} />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>

      {/* Logo / Footer watermark */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-40 z-20">
        <span className={`text-[10px] tracking-[0.3em] font-serif ${dark ? 'text-white/30' : 'text-slate-800/50'}`}>LUXE ESTATE • 25</span>
      </div>
    </div>
  );
};

export default SlideLayout;