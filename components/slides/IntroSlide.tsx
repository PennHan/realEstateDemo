import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import introBgImage from '/assets/images/intro-bg.png';

interface IntroSlideProps {
  onUnlock: () => void;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ onUnlock }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <SlideLayout
      className="items-center justify-center text-center"
      bgImage={introBgImage}
      dark={true}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="w-20 h-20 border border-amber-500/40 mx-auto mb-8 flex items-center justify-center rounded-full backdrop-blur-sm bg-slate-900/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
        >
          <span className="font-serif text-3xl text-amber-500 drop-shadow-lg">25</span>
        </motion.div>
        <h1 className="text-5xl font-serif text-white mb-4 tracking-wide drop-shadow-2xl">
          <span className="block text-3xl mb-2 opacity-90">LuxeLiving</span>
          25年年度<br /><span className="text-amber-500 font-bold">报告</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 1, duration: 1 }}
          className="h-[1px] bg-amber-500/60 mx-auto my-6"
        />
        <p className="text-slate-300 text-sm tracking-[0.3em] uppercase font-light">您的尊贵生活足迹</p>
      </motion.div>

      <div className="relative mt-8 z-10">
        <motion.button
          className={`w-24 h-24 rounded-full border border-dashed ${isPressed ? 'border-amber-500 bg-amber-500/20 scale-95' : 'border-slate-400/50 bg-slate-900/20'} flex items-center justify-center transition-all duration-500 backdrop-blur-md`}
          whileHover={{ scale: 1.05 }}
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
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.59-4.18" />
            </svg>
          </motion.div>
        </motion.button>
        <p className="absolute -bottom-12 w-full text-center text-[10px] text-slate-400/60 animate-pulse tracking-widest">点击指纹解锁</p>
      </div>
    </SlideLayout>
  );
};

export default IntroSlide;