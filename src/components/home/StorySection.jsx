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
          className="space-y-8"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
            Our Approach
          </div>
          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
            We remove hydrilla by hand. No shortcuts. No chemicals. Just results.
          </p>
          <div className="pt-6">
            <p className="text-slate-500">
              Serving Lake Austin homeowners with care and precision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}