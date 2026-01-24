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
            <h1 className="text-4xl md:text-6xl font-bold text-sky-600 leading-tight">
              Clear Water Starts Here
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-700">
              Free quote in 24 hours
            </p>
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
          <div className="bg-gradient-to-br from-white to-sky-50/30 rounded-3xl shadow-2xl shadow-sky-200/30 p-12 border border-sky-100">
            <div className="max-w-md mx-auto space-y-8">
              <div className="text-center space-y-2">
                <p className="text-slate-700 text-xl font-medium">
                  Tell us about your property
                </p>
                <p className="text-slate-500">
                  Quick form. Fast response. Clear pricing.
                </p>
              </div>
              
              <a 
                href="https://www.surveymonkey.com/r/FPMJF9H" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full h-20 bg-gradient-to-r from-sky-600 to-emerald-500 hover:from-sky-700 hover:to-emerald-600 text-white text-xl font-semibold rounded-2xl shadow-xl shadow-sky-300/40 transition-all hover:shadow-2xl hover:shadow-sky-400/50 hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Get My Free Quote
                  <ExternalLink className="w-6 h-6" />
                </Button>
              </a>
              
              <div className="flex items-center justify-center gap-6 text-sm text-slate-600 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>No commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>24 hour response</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}