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
    <SlideLayout
      className="justify-center"
      bgImage="/assets/images/data-bg.png"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-4xl font-serif text-slate-900 leading-tight mb-8 drop-shadow-sm">
          {title}
          {subtitle && <span className="block text-amber-600/90 text-xl mt-3 font-light tracking-wide">{subtitle}</span>}
        </h2>
      </motion.div>

      {(highlightVal !== undefined) && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 40 }}
          className="my-10 relative"
        >
          <div className="absolute -left-6 -top-6 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
          <div className="text-7xl font-serif text-slate-800 tracking-tighter drop-shadow-md relative z-10">
            {highlightVal}
          </div>
          {highlightLabel && <div className="text-slate-500 text-sm uppercase tracking-[0.2em] mt-3 ml-1 font-medium">{highlightLabel}</div>}
        </motion.div>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-slate-600 font-light leading-relaxed text-lg max-w-[90%]"
        >
          {description}
        </motion.p>
      )}

      {illustration && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex justify-center w-full"
        >
          {illustration}
        </motion.div>
      )}
    </SlideLayout>
  );
};

export default DataSlide;