import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PatternList from '@/components/PatternList';
import QuestionList from '@/components/QuestionList';
import Footer from '@/components/Footer';
import { Pattern } from '@/data/dsaData';
import HeroScroller from '@/components/HeroScroller';

const Index = () => {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);

  const handleSelectPattern = (pattern: Pattern) => {
    setSelectedPattern(pattern);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPattern(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {selectedPattern ? (
            <QuestionList
              key="questions"
              pattern={selectedPattern}
              onBack={handleBack}
            />
          ) : (
            <>
              <Hero key="hero" />
              <div className="-mt-16">
                <HeroScroller/>
              </div>
            
              <PatternList
                key="patterns"
                onSelectPattern={handleSelectPattern}
              />
            </>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
