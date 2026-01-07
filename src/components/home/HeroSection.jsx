import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Leaf, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MediaUploader from '@/components/ui/MediaUploader';
import { motion } from 'framer-motion';

export default function HeroSection({ heroMedia, onMediaChange, isAdmin }) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {heroMedia ? (
          <img 
            src={heroMedia} 
            alt="Lake Austin shoreline" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-sky-100 via-white to-emerald-50" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
      </div>



      <div className="relative z-10 w-full px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-sky-600 leading-tight tracking-tight"
          >
            Clean, Clear Water Around Your Dock
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
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-sky-200 transition-all hover:shadow-xl hover:shadow-sky-300"
              >
                Request a Quote
              </Button>
            </Link>
            <Link to={createPageUrl('Services')}>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-full"
              >
                See How It Works
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {[
              { icon: Shield, text: 'Fully Permitted' },
              { icon: Leaf, text: 'Environmentally Responsible' },
              { icon: Hand, text: 'Manual Precision Removal' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600">
                <div className="p-2 rounded-full bg-emerald-50">
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