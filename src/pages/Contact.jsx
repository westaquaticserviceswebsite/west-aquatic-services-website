import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-24 px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-600">
              We'd love to hear from you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Email */}
            <a 
              href="mailto:westaquaticservices@gmail.com"
              className="block group"
            >
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 hover:shadow-xl hover:border-sky-300 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-sky-100 group-hover:bg-sky-200 transition-colors">
                    <Mail className="w-7 h-7 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      westaquaticservices@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+17372319001"
              className="block group"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                    <Phone className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      (737) 231-9001
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-xl bg-slate-100">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Service Area</p>
                  <p className="text-xl md:text-2xl font-semibold text-slate-700">
                    Lake Austin, Texas
                  </p>
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