import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface SpendSlideProps {
  userData: UserData;
}

const SpendSlide: React.FC<SpendSlideProps> = ({ userData }) => {
  const total = userData.totalSpend;
  const top = userData.categories.find((c) => c.name === userData.topCategory);
  const increased = userData.categories.find((c) => c.name === userData.increasedCategory);

  return (
    <SlideLayout className="justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl w-full mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">年度投入</p>
            <h2 className="text-3xl font-serif text-slate-900">品质支出概览</h2>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl px-6 py-3 text-right">
            <p className="text-xs text-amber-700 uppercase tracking-[0.2em]">总计</p>
            <p className="text-4xl font-serif text-amber-700">¥{(total / 1000).toFixed(1)}k</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[top, increased].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.1, duration: 0.85 }}
              className="bg-white/80 rounded-2xl border border-white/60 shadow-xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {idx === 0 ? '最大投入' : '增长最快'}
              </p>
              <p className="text-2xl font-serif text-slate-900 mt-2">{item?.name}</p>
              <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${idx === 0 ? 'bg-amber-500' : 'bg-blue-500'}`}
                  style={{ width: `${Math.min(100, ((item?.value || 0) / total) * 120)}%` }}
                />
              </div>
              <p className="text-sm text-slate-600 mt-2">¥{item?.value.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="bg-white/70 rounded-2xl border border-white/50 p-6 shadow-lg"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">分项对比</p>
          <div className="space-y-3">
            {userData.categories.map((cat, idx) => (
              <div key={cat.name} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: idx === 0 ? '#f59e0b' : '#94a3b8' }} />
                <span className="w-24 text-sm text-slate-700">{cat.name}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300" style={{ width: `${(cat.value / total) * 100}%` }} />
                </div>
                <span className="text-sm text-slate-500 w-24 text-right">¥{cat.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default SpendSlide;
