import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface EngagementSlideProps {
  userData: UserData;
}

const EngagementSlide: React.FC<EngagementSlideProps> = ({ userData }) => {
  const stats = [
    { label: '社区发帖', value: userData.interactions.neighborhoodPosts, accent: 'bg-amber-500/20 text-amber-700' },
    { label: '活动参与', value: userData.interactions.gameEvents, accent: 'bg-blue-500/15 text-blue-700' },
    { label: '计划共创', value: userData.interactions.planParticipation, accent: 'bg-emerald-500/15 text-emerald-700' },
  ];

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
          className="flex justify-between items-start mb-6"
        >
          <div>
            <h2 className="text-3xl font-serif text-slate-900">社区互动</h2>
            <p className="text-slate-500">与邻里共建的热度曲线。</p>
          </div>
          <div className="text-right text-xs uppercase tracking-[0.3em] text-slate-400">Engagement</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.12, duration: 0.85 }}
              className="rounded-2xl bg-white/80 border border-white/60 shadow-xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{s.label}</p>
              <p className="text-4xl font-serif text-slate-900 mt-3">{s.value}</p>
              <div className={`inline-flex mt-3 px-3 py-1 rounded-full text-xs ${s.accent}`}>年度表现</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 bg-slate-900 text-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">核心趋势</p>
            <h3 className="text-2xl font-serif mt-2">夜间预约频繁</h3>
            <p className="text-sm text-white/70 mt-1">最新记录：{userData.records.latestActive.time} - {userData.records.latestActive.activity}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-400 text-xl">∞</div>
            <p className="text-sm text-white/70">峰值时段集中于夜间礼宾服务</p>
          </div>
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default EngagementSlide;
