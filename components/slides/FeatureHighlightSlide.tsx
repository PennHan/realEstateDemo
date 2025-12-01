import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface FeatureHighlightSlideProps {
  userData: UserData;
}

const FeatureHighlightSlide: React.FC<FeatureHighlightSlideProps> = ({ userData }) => {
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
            <h2 className="text-3xl font-serif text-slate-900">年度新功能</h2>
            <p className="text-slate-500 text-sm">保持与体验前沿同步。</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Adoption</p>
            <p className="text-4xl font-serif text-amber-600">{userData.highlights.aiUsage}%</p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {userData.highlights.newFeatures.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.12, duration: 0.85 }}
              className="flex items-start gap-3 bg-white/80 rounded-2xl border border-white/60 p-4 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 font-semibold">
                {idx + 1}
              </div>
              <div>
                <p className="text-lg font-serif text-slate-900">{feature}</p>
                <p className="text-sm text-slate-600 mt-1">已覆盖您的账户，推荐在移动端深度体验。</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default FeatureHighlightSlide;
