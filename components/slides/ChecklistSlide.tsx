import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface ChecklistSlideProps {
  userData: UserData;
}

const ChecklistSlide: React.FC<ChecklistSlideProps> = ({ userData }) => {
  const checklist = [
    { label: '积分', value: userData.totalPoints.toLocaleString() },
    { label: '活动', value: userData.interactions.gameEvents },
    { label: '项目', value: userData.itemCount },
    { label: 'AI 采用率', value: `${userData.highlights.aiUsage}%` },
  ];

  return (
    <SlideLayout className="justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-serif text-slate-900 mb-2">年度清单</h2>
          <p className="text-slate-500 text-sm mb-6">一张清单看懂您的年度投入。</p>
        </motion.div>

        <motion.div
          initial={{ rotate: -4, opacity: 0, scale: 0.96 }}
          whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white text-slate-900 p-6 rounded-sm shadow-2xl w-full max-w-sm font-mono text-sm relative border border-slate-200"
        >
          <div className="border-b-2 border-dashed border-slate-300 mb-4 pb-2 text-center uppercase tracking-widest font-bold">25年 账单</div>
          {checklist.map((item) => (
            <div key={item.label} className="flex justify-between mb-3">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
          <div className="border-t-2 border-slate-900 mt-4 pt-2 flex justify-between font-bold text-lg">
            <span>总计</span>
            <span>高净值</span>
          </div>
          <div className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-4 h-4 rounded-full bg-slate-900" />
        </motion.div>
      </motion.div>
    </SlideLayout>
  );
};

export default ChecklistSlide;
