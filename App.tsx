import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_USER_DATA } from './constants';
import IntroSlide from './components/slides/IntroSlide';
import DataSlide from './components/slides/DataSlide';
import ChartSlide from './components/slides/ChartSlide';
import PersonaSlide from './components/slides/PersonaSlide';
import { SlideDirection } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>(SlideDirection.NONE);
  const touchStartY = useRef<number | null>(null);

  // Define total number of slides (Intro + Data Pages + Summary + Persona)
  // Mapping logic below defines the sequence
  const TOTAL_SLIDES = 3;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe Up -> Next
        nextSlide();
      } else {
        // Swipe Down -> Prev
        prevSlide();
      }
    }
    touchStartY.current = null;
  };

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(SlideDirection.UP);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(SlideDirection.DOWN);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <IntroSlide onUnlock={nextSlide} />;
      case 1:
        return (
          <DataSlide
            title="时光之旅"
            description={`自您开启尊贵生活以来，已相伴 ${MOCK_USER_DATA.totalDays} 天。`}
            highlightVal={MOCK_USER_DATA.totalDays}
            highlightLabel="相伴天数"
          />
        );
      /* Commented out intermediate slides
      case 2:
        return (
          <DataSlide
            title="尊享积分"
            subtitle="累计价值"
            highlightVal={MOCK_USER_DATA.totalPoints.toLocaleString()}
            highlightLabel="总积分"
            description={`主要来源于：${MOCK_USER_DATA.pointsSource.join(' & ')}。`}
            illustration={<div className="text-6xl">💎</div>}
          />
        );
      case 3:
        return (
          <DataSlide
            title="年度投入"
            description="您对品质生活的追求，体现在每一次选择中。"
            highlightVal={`¥${(MOCK_USER_DATA.totalSpend / 1000).toFixed(1)}k`}
            highlightLabel="年度支出"
            illustration={<div className="w-full h-1 bg-gradient-to-r from-slate-200 via-amber-500 to-slate-200 rounded-full" />}
          />
        );
      case 4:
        return <ChartSlide data={MOCK_USER_DATA.categories} />;
      case 5:
        return (
          <DataSlide
            title="社区脉搏"
            highlightVal={MOCK_USER_DATA.interactions.neighborhoodPosts}
            highlightLabel="互动时刻"
            description="您是社区活力的重要源泉。"
          />
        );
      case 6:
        return (
          <DataSlide
            title="尊享生态"
            description="无缝连接您的全方位生活。"
            illustration={
              <div className="grid grid-cols-2 gap-4 w-full">
                {MOCK_USER_DATA.ecosystem.map((e, i) => (
                  <div key={i} className={`p-4 rounded border ${e.active ? 'border-amber-500/50 bg-amber-500/10 text-amber-700' : 'border-slate-300 text-slate-400'} text-center text-xs uppercase`}>
                    {e.name}
                  </div>
                ))}
              </div>
            }
          />
        );
      case 7:
        return (
          <DataSlide
            title="高光时刻"
            description={`您最大的一笔投入是 ${MOCK_USER_DATA.records.mostExpensive.item}。`}
            highlightVal="顶级体验"
            illustration={<div className="text-4xl mt-4">🏆</div>}
          />
        );
      case 8:
        return (
          <DataSlide
            title="拥抱未来"
            description="您是首批体验我们 AI 管家服务的尊贵业主。"
            highlightVal={`${MOCK_USER_DATA.highlights.aiUsage}%`}
            highlightLabel="智能采用率"
          />
        );
      case 9:
        return (
          <DataSlide
            title="独特品味"
            description={`当大家都热衷于健身房时，您却钟情于${MOCK_USER_DATA.taste.niche}。`}
            highlightVal="独具慧眼"
            illustration={<div className="text-4xl mt-4">🍷</div>}
          />
        );
      case 10:
        return (
          <DataSlide
            title="年度清单"
            illustration={
              <div className="bg-white text-slate-900 p-6 rounded-sm shadow-xl w-full max-w-xs rotate-[-2deg] font-mono text-sm relative border border-slate-200">
                <div className="border-b-2 border-dashed border-slate-300 mb-4 pb-2 text-center uppercase tracking-widest font-bold">25年 账单</div>
                <div className="flex justify-between mb-2"><span>积分</span><span>{MOCK_USER_DATA.totalPoints}</span></div>
                <div className="flex justify-between mb-2"><span>活动</span><span>{MOCK_USER_DATA.interactions.gameEvents}</span></div>
                <div className="flex justify-between mb-2"><span>项目</span><span>{MOCK_USER_DATA.itemCount}</span></div>
                <div className="border-t-2 border-slate-900 mt-4 pt-2 flex justify-between font-bold text-lg">
                  <span>总计</span>
                  <span>高净值</span>
                </div>
                <div className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-4 h-4 rounded-full bg-slate-900"></div>
              </div>
            }
          />
        );
      */
      case 2:
        return <PersonaSlide userData={MOCK_USER_DATA} onRestart={() => setCurrentSlide(0)} />;
      default:
        return null;
    }
  };

  // Animation variants for sliding pages
  const variants = {
    enter: (dir: SlideDirection) => ({
      y: dir === SlideDirection.UP ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: SlideDirection) => ({
      y: dir === SlideDirection.UP ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div
      className="w-full h-[100dvh] bg-slate-50 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator REMOVED as requested */}

      {/* Scroll Hint */}
      {currentSlide > 0 && currentSlide < TOTAL_SLIDES - 1 && (
        <div className="absolute bottom-4 left-0 w-full flex justify-center animate-bounce z-40 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default App;