import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
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
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600">
              We'd love to hear from you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <a 
              href="mailto:westaquaticservices@gmail.com"
              className="block group"
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-sky-400 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition-colors">
                    <Mail className="w-7 h-7 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wide">Email</p>
                    <p className="text-xl md:text-2xl font-semibold text-slate-900">westaquaticservices@gmail.com</p>
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
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    <Phone className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wide">Phone</p>
                    <p className="text-xl md:text-2xl font-semibold text-slate-900">(737) 231-9001</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-slate-50">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wide">Service Area</p>
                  <p className="text-xl md:text-2xl font-semibold text-slate-900">Lake Austin, Texas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}