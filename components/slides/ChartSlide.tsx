import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';

interface ChartSlideProps {
  data: UserData['categories'];
}

const COLORS = ['#d97706', '#b45309', '#78350f', '#fbbf24', '#f59e0b'];

const ChartSlide: React.FC<ChartSlideProps> = ({ data }) => {
  return (
    <SlideLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
         <h2 className="text-2xl font-serif text-slate-900 mb-2">年度投入分布</h2>
         <p className="text-slate-500 text-sm mb-8">您今年的生活重心所在。</p>
      </motion.div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                itemStyle={{ color: '#1e293b' }}
                formatter={(value: number) => `¥${value.toLocaleString()}`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <motion.div 
        className="mt-8 space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.sort((a,b) => b.value - a.value).slice(0,3).map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-slate-200 pb-2">
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[idx % COLORS.length]}}></div>
                    <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="text-slate-900 font-medium">¥{item.value.toLocaleString()}</span>
            </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
};

export default ChartSlide;