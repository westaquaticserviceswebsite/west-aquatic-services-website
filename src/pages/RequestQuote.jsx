import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function RequestQuote() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-800">
              Request Your Quote
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We tend to respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="pb-20 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 md:p-6">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdJnGfBCF9j6eIvPNMRcqr_8jPBfD8c1jFGhLhpJDYXc3kHNw/viewform?embedded=true" 
              width="100%" 
              height="800"
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="rounded-xl"
            >
              Loading…
            </iframe>
          </div>
          <div className="text-center mt-4">
            <a 
              href="https://forms.gle/o6VQjDKbMt6PiS6P9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-700 text-sm"
            >
              Open form in new tab
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}