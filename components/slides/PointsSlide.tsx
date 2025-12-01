import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface PointsSlideProps {
  userData: UserData;
}

const PointsSlide: React.FC<PointsSlideProps> = ({ userData }) => {
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
            <h2 className="text-3xl font-serif text-slate-900">尊享积分</h2>
            <p className="text-slate-500 text-sm">来源清晰，价值明确。</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">累计</p>
            <p className="text-4xl font-serif text-amber-600">{userData.totalPoints.toLocaleString()}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.85 }}
          className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-2xl backdrop-blur"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">来源构成</p>
          <div className="space-y-4">
            {userData.pointsSource.map((source, idx) => (
              <motion.div
                key={source}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '100%', opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.12, duration: 0.8 }}
                className="grid grid-cols-5 gap-3 items-center"
              >
                <div className="col-span-2 text-slate-700">{source}</div>
                <div className="col-span-3">
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                      style={{ width: `${40 + idx * 20}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default PointsSlide;
