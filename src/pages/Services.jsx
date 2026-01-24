import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import VideoSection from '@/components/services/VideoSection';
import ServicesList from '@/components/services/ServicesList';
import Footer from '@/components/Footer';

export default function Services() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-slate-600">
              Professional manual hydrilla removal for Lake Austin properties
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesList />

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-5 md:px-8 bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
        
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Ready to Clear Your Waterfront?
            </h2>
            <p className="mt-6 text-lg text-white/90">
              Get a free quote and see what we can do for your property.
            </p>
            <div className="mt-10">
              <Link to={createPageUrl('RequestQuote')}>
                <Button 
                  size="lg" 
                  className="bg-white text-sky-700 hover:bg-sky-50 px-10 py-7 text-lg rounded-full shadow-xl shadow-sky-800/20 group"
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