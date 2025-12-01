import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { UserData } from '../../types';
import { generateUserPersona } from '../../services/geminiService';

interface PersonaSlideProps {
  userData: UserData;
  onRestart: () => void;
}

const PersonaSlide: React.FC<PersonaSlideProps> = ({ userData, onRestart }) => {
  const [persona, setPersona] = useState<{title: string, description: string} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    generateUserPersona(userData).then(result => {
        if(mounted) {
            setPersona(result);
            setLoading(false);
        }
    });
    return () => { mounted = false; };
  }, [userData]);

  return (
    <SlideLayout className="bg-gradient-to-t from-amber-100/50 to-slate-50">
      <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
        
        <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ type: "spring", damping: 12 }}
             className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 p-1 mb-8 shadow-2xl shadow-amber-500/20"
        >
             <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
             </div>
        </motion.div>

        {loading ? (
            <div className="text-amber-600/50 animate-pulse font-serif">正在生成专属分析...</div>
        ) : (
            <>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-6"
                >
                    {persona?.title}
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/60 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-lg mx-4"
                >
                    <p className="text-slate-600 italic font-light leading-relaxed">
                        "{persona?.description}"
                    </p>
                </motion.div>

                {/* Badge Grid for Aesthetic */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-3 mt-8"
                >
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs border border-amber-500/20">前 1%</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs border border-blue-500/20">潮流先锋</span>
                </motion.div>
            </>
        )}
      </div>

      <motion.button
        onClick={onRestart}
        className="mt-8 py-3 px-8 rounded-full border border-slate-400 text-slate-500 text-sm hover:bg-white transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        重播
      </motion.button>
    </SlideLayout>
  );
};

export default PersonaSlide;