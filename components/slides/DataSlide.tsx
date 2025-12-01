import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface DataSlideProps {
  title: string;
  subtitle?: string;
  highlightVal?: string | number;
  highlightLabel?: string;
  description?: string;
  illustration?: React.ReactNode;
}

const DataSlide: React.FC<DataSlideProps> = ({ title, subtitle, highlightVal, highlightLabel, description, illustration }) => {
  return (
    <SlideLayout className="justify-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-serif text-slate-900 leading-tight mb-6">
          {title}
          {subtitle && <span className="block text-amber-600 text-lg mt-2">{subtitle}</span>}
        </h2>
      </motion.div>

      {(highlightVal !== undefined) && (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="my-8"
        >
            <div className="text-6xl font-light text-slate-900 tracking-tighter">
                {highlightVal}
            </div>
            {highlightLabel && <div className="text-slate-500 text-sm uppercase tracking-widest mt-2 ml-1">{highlightLabel}</div>}
        </motion.div>
      )}

      {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-600 font-light leading-relaxed"
          >
              {description}
          </motion.p>
      )}

      {illustration && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
              {illustration}
          </motion.div>
      )}
    </SlideLayout>
  );
};

export default DataSlide;