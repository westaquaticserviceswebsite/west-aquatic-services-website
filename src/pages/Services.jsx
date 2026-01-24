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
    <div className="min-h-screen bg-white">
      <div className="pt-20"></div>

      <ServicesList />

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