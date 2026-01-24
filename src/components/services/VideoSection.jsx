import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection({ videoMedia, caption }) {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
        </motion.div>


      </div>
    </section>
  );
}