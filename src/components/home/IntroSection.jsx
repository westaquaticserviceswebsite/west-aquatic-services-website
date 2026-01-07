import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center"
        >
          We remove hydrilla by hand—directly from docks and shorelines. No machines. No chemicals. Just careful, effective work that improves access while protecting the lake.
        </motion.p>
      </div>
    </section>
  );
}