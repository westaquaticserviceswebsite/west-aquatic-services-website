import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Leaf, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="relative z-10 w-full px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight"
          >
            Clear Water Access for Every Dock
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Manual hydrilla removal designed to restore access, protect the lake, and keep your shoreline beautiful.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={createPageUrl('RequestQuote')}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-sky-200 transition-all hover:shadow-xl"
              >
                Request a Quote
              </Button>
            </Link>
            <Link to={createPageUrl('Services')}>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-7 text-lg rounded-full"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Shield, text: 'Fully Permitted' },
              { icon: Leaf, text: 'Environmentally Responsible' },
              { icon: Hand, text: 'Manual Precision Removal' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-700">
                <div className="p-2.5 rounded-xl bg-emerald-100">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm md:text-base font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}