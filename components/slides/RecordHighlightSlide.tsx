import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface RecordHighlightSlideProps {
  userData: UserData;
}

const RecordHighlightSlide: React.FC<RecordHighlightSlideProps> = ({ userData }) => {
  const { records } = userData;

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
            <h2 className="text-3xl font-serif text-slate-900">高光时刻</h2>
            <p className="text-slate-500 text-sm">记录值得被纪念的选择。</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl">🏆</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="bg-white/80 border border-white/60 rounded-2xl p-5 shadow-xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">单笔之最</p>
            <p className="text-xl font-serif text-slate-900 mt-2">{records.mostExpensive.item}</p>
            <p className="text-2xl font-serif text-amber-600 mt-3">¥{records.mostExpensive.price.toLocaleString()}</p>
            <p className="text-sm text-slate-600 mt-2">品质投入，匹配精致生活。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="rounded-2xl bg-slate-900 text-white p-5 shadow-xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">最新活动</p>
            <p className="text-4xl font-serif text-amber-400 mt-3">{records.latestActive.time}</p>
            <p className="text-sm text-white/70 mt-2">{records.latestActive.activity}</p>
            <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em]">夜间礼宾</div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default RecordHighlightSlide;
