import React from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import dataBgImage from '/assets/images/data-bg.png';

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
      className="justify-center items-center"
      bgImage={dataBgImage}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Glass card container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/60">
          {/* Decorative corner accent */}
          <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-amber-500/30 rounded-tl-2xl" />
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-amber-500/30 rounded-br-2xl" />

          {/* Title section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-slate-900 leading-tight mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-amber-600/90 text-sm mt-2 font-light tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {/* Decorative divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-amber-500 to-amber-200 rounded-full mt-4 mb-6"
            />
          </motion.div>

          {/* Highlight value */}
          {(highlightVal !== undefined) && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 60 }}
              className="my-8 text-center relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5 rounded-xl blur-xl" />

              <div className="relative">
                <div className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-600 tracking-tight font-bold">
                  {highlightVal}
                </div>
                {highlightLabel && (
                  <div className="text-slate-500 text-xs uppercase tracking-[0.25em] mt-3 font-medium">
                    {highlightLabel}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-slate-600 font-light leading-relaxed text-base text-center"
            >
              {description}
            </motion.p>
          )}

          {/* Illustration */}
          {illustration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 flex justify-center"
            >
              {illustration}
            </motion.div>
          )}
        </div>
      </motion.div>
    </SlideLayout>
  );
};

export default DataSlide;