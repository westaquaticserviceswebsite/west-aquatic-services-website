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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100">
            <img 
              src={videoMedia} 
              alt="Our services" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {caption && (
            <p className="mt-6 text-center text-slate-600 text-sm">
              {caption}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}