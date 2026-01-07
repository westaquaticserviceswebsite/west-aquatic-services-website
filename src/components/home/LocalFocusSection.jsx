import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function LocalFocusSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-sky-600" />
            <span className="text-sm font-medium text-sky-700 uppercase tracking-wide">
              Local Service
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
            Built For Lake Austin Properties
          </h2>
          
          <p className="text-xl text-slate-700 leading-relaxed">
            West Aquatic Services is a focused local service created specifically for lakefront homeowners who want clean access without disruption or damage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}