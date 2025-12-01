import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_USER_DATA } from './constants';
import IntroSlide from './components/slides/IntroSlide';
import DataSlide from './components/slides/DataSlide';
import ChartSlide from './components/slides/ChartSlide';
import PersonaSlide from './components/slides/PersonaSlide';
import PointsSlide from './components/slides/PointsSlide';
import SpendSlide from './components/slides/SpendSlide';
import EngagementSlide from './components/slides/EngagementSlide';
import EcosystemGridSlide from './components/slides/EcosystemGridSlide';
import FeatureHighlightSlide from './components/slides/FeatureHighlightSlide';
import TasteSlide from './components/slides/TasteSlide';
import ChecklistSlide from './components/slides/ChecklistSlide';
import RecordHighlightSlide from './components/slides/RecordHighlightSlide';
import { SlideDirection } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>(SlideDirection.NONE);
  const touchStartY = useRef<number | null>(null);

  // Define total number of slides (Intro + Data Pages + Summary + Persona)
  // Mapping logic below defines the sequence
  const TOTAL_SLIDES = 12;

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
      case 2:
        return <PointsSlide userData={MOCK_USER_DATA} />;
      case 3:
        return <SpendSlide userData={MOCK_USER_DATA} />;
      case 4:
        return <ChartSlide data={MOCK_USER_DATA.categories} />;
      case 5:
        return <EngagementSlide userData={MOCK_USER_DATA} />;
      case 6:
        return <EcosystemGridSlide userData={MOCK_USER_DATA} />;
      case 7:
        return <RecordHighlightSlide userData={MOCK_USER_DATA} />;
      case 8:
        return <FeatureHighlightSlide userData={MOCK_USER_DATA} />;
      case 9:
        return <TasteSlide userData={MOCK_USER_DATA} />;
      case 10:
        return <ChecklistSlide userData={MOCK_USER_DATA} />;
      case 11:
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
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
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
