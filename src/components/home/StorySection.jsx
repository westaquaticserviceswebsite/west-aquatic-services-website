import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold uppercase tracking-wide">
            Our Approach
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Manual Hydrilla Removal Done Right
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We remove hydrilla by hand with precision, restoring dock access while protecting your property and the lake's natural ecosystem.
          </p>
          
          <div className="pt-8">
            <p className="text-slate-500">
              Serving Lake Austin homeowners with care and precision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}