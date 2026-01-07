import React from 'react';
import { motion } from 'framer-motion';

export default function SimpleHowItWorks() {
  const steps = [
    { number: '1', text: 'Request a quote' },
    { number: '2', text: 'We assess and schedule' },
    { number: '3', text: 'We remove and clean' }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-slate-800"
        >
          How It Works
        </motion.h2>

        <div className="mt-12 space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <p className="text-lg md:text-xl text-slate-700 text-left">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-lg text-slate-600"
        >
          Simple, clear, and handled responsibly from start to finish.
        </motion.p>
      </div>
    </section>
  );
}