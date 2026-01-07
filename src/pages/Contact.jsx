import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';

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
              Contact West Aquatic Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Questions or special requests? We're happy to help.
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
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 space-y-8"
          >
            {/* Service Area */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-100">
                <MapPin className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-lg text-slate-800">Service Area</p>
                <p className="text-slate-600 mt-1">Lake Austin, Texas</p>
              </div>
            </div>

            {/* Email Button */}
            <div className="pt-4">
              <a href="mailto:Henry.West@du.edu">
                <Button className="w-full h-16 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white text-lg rounded-full shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6" />
                  Henry.West@du.edu
                </Button>
              </a>
              <p className="text-center text-sm text-slate-500 mt-3">
                Click to send us an email
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}