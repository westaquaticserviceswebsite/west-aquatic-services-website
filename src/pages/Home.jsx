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
      <HeroSection heroMedia="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600" />
      
      <StorySection storyMedia="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800" />
      
      <WhyItWorksSection />
      
      <HowItWorksSection />
      
      <FinalCTASection />
      
      <Footer />
    </div>
  );
}