import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import SimpleHowItWorks from '@/components/home/SimpleHowItWorks';
import LocalFocusSection from '@/components/home/LocalFocusSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <SimpleHowItWorks />
      <LocalFocusSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}