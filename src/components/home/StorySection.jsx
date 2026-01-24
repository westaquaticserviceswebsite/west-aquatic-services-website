import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection({ storyMedia }) {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-5 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
              Our Approach
            </div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
              We remove hydrilla by hand with precision, restoring dock access while protecting your property and the lake's natural ecosystem.
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-slate-500 text-sm">
                Serving Lake Austin homeowners with care and precision
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}