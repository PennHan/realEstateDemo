import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface MilestoneSlideProps {
  userData: UserData;
}

const MilestoneSlide: React.FC<MilestoneSlideProps> = ({ userData }) => {
  const milestones = [
    { label: '注册日期', value: userData.registrationDate, accent: 'from-amber-500/40 to-amber-300/30' },
    { label: '相伴天数', value: `${userData.totalDays} 天`, accent: 'from-blue-500/30 to-teal-300/30' },
    { label: '累计项目', value: `${userData.itemCount} 项`, accent: 'from-slate-500/30 to-slate-300/20' },
  ];

  return (
    <SlideLayout>
      <div className="flex flex-col gap-8 mt-6">
        <div>
          <h2 className="text-3xl font-serif text-slate-900 mb-2">您的里程碑</h2>
          <p className="text-slate-500">记录每一次与社区的同行。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-xl backdrop-blur"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${m.accent}`} />
              <div className="relative p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{m.label}</p>
                <p className="text-2xl font-serif text-slate-900 mt-3">{m.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default MilestoneSlide;
