import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface IntroSlideProps {
  onUnlock: () => void;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ onUnlock }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <SlideLayout className="items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <div className="w-16 h-16 border border-amber-600/30 mx-auto mb-6 flex items-center justify-center rounded-full">
          <span className="font-serif text-2xl text-amber-600">25</span>
        </div>
        <h1 className="text-4xl font-serif text-slate-900 mb-2 tracking-wide">
          年度<br /><span className="text-amber-600">报告</span>
        </h1>
        <p className="text-slate-500 text-sm tracking-widest uppercase mt-4">您的生活足迹</p>
      </motion.div>

      <div className="relative mt-12">
        <motion.button
          className={`w-24 h-24 rounded-full border-2 border-dashed ${isPressed ? 'border-amber-500 bg-amber-500/10' : 'border-slate-400'} flex items-center justify-center transition-colors duration-500`}
          whileTap={{ scale: 0.95 }}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onClick={() => {
            setTimeout(onUnlock, 400);
          }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.59-4.18" />
            </svg>
          </motion.div>
        </motion.button>
        <p className="absolute -bottom-10 w-full text-center text-xs text-slate-500 animate-pulse">点击解锁</p>
      </div>
    </SlideLayout>
  );
};

export default IntroSlide;