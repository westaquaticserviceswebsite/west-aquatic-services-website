import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Your Lake. Crystal Clear.
          </h2>
          
          <p className="mt-6 text-lg text-white/90 max-w-xl mx-auto">
            Stop fighting hydrilla. Get back to the water you love—fast, safe, and done right.
          </p>
          
          <div className="mt-10">
            <Link to={createPageUrl('RequestQuote')}>
              <Button 
                size="lg" 
                className="bg-white text-sky-700 hover:bg-sky-50 px-10 py-7 text-lg rounded-full shadow-xl shadow-sky-800/20 transition-all hover:shadow-2xl group"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}