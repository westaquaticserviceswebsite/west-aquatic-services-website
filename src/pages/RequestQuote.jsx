import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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
              Your Quote. 24 Hours. Zero Hassle.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Form Link */}
      <section className="pb-20 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10">
            <p className="text-slate-600 mb-8 text-lg">
              Tell us about your property. Get your quote in 24 hours. Simple.
            </p>
            <a 
              href="https://www.surveymonkey.com/r/FPMJF9H" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="h-16 bg-sky-600 hover:bg-sky-700 text-white text-lg rounded-full shadow-lg shadow-sky-200 transition-all px-10 flex items-center justify-center gap-3 mx-auto"
              >
                Get My Free Quote
                <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}