import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import WhyItWorksSection from '@/components/home/WhyItWorksSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [mediaState, setMediaState] = useState({});

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await base44.auth.me();
        setIsAdmin(user?.role === 'admin');
      } catch {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  const { data: allMedia = [] } = useQuery({
    queryKey: ['siteMedia'],
    queryFn: () => base44.entities.SiteMedia.list()
  });

  useEffect(() => {
    if (allMedia.length > 0) {
      const mediaMap = {};
      allMedia.forEach(m => {
        mediaMap[m.section_id] = m.media_url;
      });
      setMediaState(mediaMap);
    }
  }, [allMedia]);

  const handleMediaChange = (sectionId, url) => {
    setMediaState(prev => ({ ...prev, [sectionId]: url }));
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        heroMedia={mediaState['hero']}
        onMediaChange={(url) => handleMediaChange('hero', url)}
        isAdmin={isAdmin}
      />
      
      <StorySection 
        storyMedia={mediaState['story']}
        onMediaChange={(url) => handleMediaChange('story', url)}
        isAdmin={isAdmin}
      />
      
      <WhyItWorksSection />
      
      <WhyChooseUsSection 
        cardMedia={mediaState}
        onMediaChange={handleMediaChange}
        isAdmin={isAdmin}
      />
      
      <HowItWorksSection 
        stepMedia={mediaState}
        onMediaChange={handleMediaChange}
        isAdmin={isAdmin}
      />
      
      <FinalCTASection />
      
      <Footer />
    </div>
  );
}