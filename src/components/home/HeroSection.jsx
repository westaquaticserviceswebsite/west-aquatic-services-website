import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Leaf, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white">
      <div className="w-full px-5 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight"
          >
            Clean, Clear Water Around Your Dock
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-xl md:text-2xl text-slate-600 leading-relaxed"
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
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-10 py-7 text-lg rounded-full shadow-lg"
              >
                Request a Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-7 text-lg rounded-full"
            >
              How It Works
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base"
          >
            {[
              { icon: Shield, text: 'Fully Permitted' },
              { icon: Leaf, text: 'Environmentally Responsible' },
              { icon: Hand, text: 'Manual Removal' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600">
                <item.icon className="w-5 h-5 text-sky-600" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}