import React from 'react';
import { motion } from 'framer-motion';
import MediaUploader from '@/components/ui/MediaUploader';

export default function HowItWorksSection({ stepMedia, onMediaChange, isAdmin }) {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Request Your Quote',
      description: 'Tell us about your dock and shoreline. You receive a clear, straightforward quote within 24 hours.'
    },
    {
      id: 'step-2',
      number: '02',
      title: 'We Handle the Details',
      description: 'We visit your property, confirm the scope, and schedule the work at your convenience.'
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Your Dock, Cleared',
      description: 'Hydrilla is removed by hand and hauled away, leaving clean water and full dock access.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-gradient-to-br from-slate-50 via-sky-50/30 to-emerald-50/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple process designed for results
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg border border-slate-100">
                  <span className="text-3xl font-bold bg-gradient-to-br from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-slate-800">
                  {step.title}
                </h3>
                
                <p className="mt-3 text-slate-600">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-sky-200 to-emerald-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}