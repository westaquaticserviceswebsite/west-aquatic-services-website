import React, { useState } from 'react';
import MediaUploader from '@/components/ui/MediaUploader';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function ImageGallery({ galleryMedia, onMediaChange, isAdmin }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const galleryItems = [
    { id: 'gallery-1' },
    { id: 'gallery-2' },
    { id: 'gallery-3' },
    { id: 'gallery-4' },
    { id: 'gallery-5' },
    { id: 'gallery-6' }
  ];

  const hasAnyMedia = galleryItems.some(item => galleryMedia?.[item.id]);

  if (!isAdmin && !hasAnyMedia) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800">
            Our Work
          </h2>
          <p className="mt-4 text-slate-600">
            See the difference professional hydrilla removal makes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative group"
            >
              {isAdmin ? (
                <MediaUploader
                  sectionId={item.id}
                  currentMedia={galleryMedia?.[item.id]}
                  onMediaChange={(url) => onMediaChange?.(item.id, url)}
                  isAdmin={isAdmin}
                  aspectRatio="square"
                />
              ) : galleryMedia?.[item.id] ? (
                <button
                  onClick={() => setLightboxImage(galleryMedia[item.id])}
                  className="w-full rounded-2xl overflow-hidden aspect-square"
                >
                  <img 
                    src={galleryMedia[item.id]} 
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}