import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface TasteSlideProps {
  userData: UserData;
}

const TasteSlide: React.FC<TasteSlideProps> = ({ userData }) => {
  return (
    <SlideLayout className="justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl w-full mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-3xl font-serif text-slate-900">独特品味</h2>
            <p className="text-slate-500 text-sm">大众热度 vs 您的偏好。</p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Taste</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85 }}
            className="rounded-2xl bg-white/80 border border-white/60 p-5 shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">大众热度</p>
            <p className="text-2xl font-serif text-slate-900 mt-2">{userData.taste.massAppeal}</p>
            <p className="text-sm text-slate-600 mt-2">社区常见选择，您以探索者身份加入。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85 }}
            className="rounded-2xl bg-slate-900 text-white p-5 shadow-xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">您的私享</p>
            <p className="text-2xl font-serif text-amber-400 mt-2">{userData.taste.niche}</p>
            <p className="text-sm text-white/70 mt-2">稀缺而精致的选择，彰显您对细节的掌控。</p>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default TasteSlide;
