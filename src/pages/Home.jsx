import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import WhyItWorksSection from '@/components/home/WhyItWorksSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <StorySection />
      
      <WhyItWorksSection />
      
      <HowItWorksSection />
      
      <FinalCTASection />
      
      <Footer />
    </div>
  );
}