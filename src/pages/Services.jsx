import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import VideoSection from '@/components/services/VideoSection';
import ServicesList from '@/components/services/ServicesList';
import ImageGallery from '@/components/services/ImageGallery';
import Footer from '@/components/Footer';

export default function Services() {
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
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-5 md:px-8 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-800 leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Focused manual hydrilla removal with care for your property and the lake. No chemicals, no heavy machinery—just careful, professional work.
            </p>
          </motion.div>
        </div>
      </section>

      <VideoSection 
        videoMedia={mediaState['services-video']}
        onMediaChange={(url) => handleMediaChange('services-video', url)}
        isAdmin={isAdmin}
      />

      <ServicesList />

      <ImageGallery 
        galleryMedia={mediaState}
        onMediaChange={handleMediaChange}
        isAdmin={isAdmin}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-5 md:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
              Ready to Clear Your Waterfront?
            </h2>
            <p className="mt-4 text-slate-600">
              Get a free quote and see what we can do for your property.
            </p>
            <div className="mt-8">
              <Link to={createPageUrl('RequestQuote')}>
                <Button 
                  size="lg" 
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-sky-200 group"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}