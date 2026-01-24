import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Contact() {

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
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-12 md:p-16"
          >
            <div className="space-y-10">
              {/* Email */}
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-sky-50 mb-4">
                  <Mail className="w-8 h-8 text-sky-600" />
                </div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Email</p>
                <a 
                  href="mailto:Henry.West@du.edu" 
                  className="text-xl md:text-2xl font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Henry.West@du.edu
                </a>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Phone */}
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-emerald-50 mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Phone</p>
                <a 
                  href="tel:+17372319001" 
                  className="text-xl md:text-2xl font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  (737) 231-9001
                </a>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Location */}
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-slate-50 mb-4">
                  <MapPin className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Service Area</p>
                <p className="text-xl md:text-2xl font-semibold text-slate-700">Lake Austin, Texas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}