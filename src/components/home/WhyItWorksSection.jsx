import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Anchor, Eye, Clock } from 'lucide-react';

export default function WhyItWorksSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 leading-tight">
            A Smarter, More Responsible Way to Remove Hydrilla
          </h2>
          
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Hydrilla blocks docks, ruins views, and limits time on the water. Our manual approach avoids heavy equipment, chemicals, and shoreline disruption while delivering clean, usable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Waves, label: 'Clear Water' },
            { icon: Anchor, label: 'Dock Access' },
            { icon: Eye, label: 'Better Views' },
            { icon: Clock, label: 'More Time on Water' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-sky-600" />
              </div>
              <p className="mt-4 text-sm font-medium text-slate-700">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}