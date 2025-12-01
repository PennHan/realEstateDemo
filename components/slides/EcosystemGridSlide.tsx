import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface EcosystemGridSlideProps {
  userData: UserData;
}

const EcosystemGridSlide: React.FC<EcosystemGridSlideProps> = ({ userData }) => {
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
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-3xl font-serif text-slate-900">尊享生态</h2>
            <p className="text-slate-500 text-sm">全场景服务覆盖度。</p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Ecosystem</div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userData.ecosystem.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06, duration: 0.75 }}
              className={`p-4 rounded-xl border shadow-lg ${
                item.active
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-800'
                  : 'bg-white/70 border-slate-200 text-slate-400'
              }`}
            >
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-2">
                {item.active ? '已开通' : '待激活'}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default EcosystemGridSlide;
