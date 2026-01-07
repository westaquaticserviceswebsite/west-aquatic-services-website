import React from 'react';
import MediaUploader from '@/components/ui/MediaUploader';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection({ videoMedia, caption, onMediaChange, isAdmin }) {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4">
            <Play className="w-4 h-4" />
            See Our Process
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800">
            Watch How We Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100">
            <MediaUploader
              sectionId="services-video"
              currentMedia={videoMedia}
              onMediaChange={onMediaChange}
              isAdmin={isAdmin}
              mediaType="video"
              aspectRatio="video"
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