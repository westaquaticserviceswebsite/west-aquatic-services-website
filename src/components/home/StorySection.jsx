import React from 'react';
import MediaUploader from '@/components/ui/MediaUploader';
import { motion } from 'framer-motion';

export default function StorySection({ storyMedia, onMediaChange, isAdmin }) {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MediaUploader
              sectionId="story"
              currentMedia={storyMedia}
              onMediaChange={onMediaChange}
              isAdmin={isAdmin}
              aspectRatio="square"
              className="rounded-3xl overflow-hidden shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
              Our Approach
            </div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
              We carefully remove hydrilla by hand—directly from docks and shorelines—improving access without damaging your property or the lake ecosystem.
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