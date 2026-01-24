import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600">
              We're here to help with your waterfront needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Email */}
            <a 
              href="mailto:Henry.West@du.edu"
              className="block group"
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-sky-400 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition-colors">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                    <p className="text-xl font-semibold text-slate-900">Henry.West@du.edu</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+17372319001"
              className="block group"
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                    <p className="text-xl font-semibold text-slate-900">(737) 231-9001</p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500">
              Serving Lake Austin, Texas
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}