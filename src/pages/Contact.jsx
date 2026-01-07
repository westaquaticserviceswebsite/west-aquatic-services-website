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
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Have questions? Feel free to reach out! Our team will respond within 24 hours.
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
              <div className="p-3 rounded-xl bg-sky-100 flex-shrink-0">
                <MapPin className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-lg">Service Area</p>
                <p className="text-slate-600 mt-1">Lake Austin, Texas</p>
              </div>
            </div>

            {/* Email Button */}
            <div className="pt-4 space-y-12">
              <a href="mailto:Henry.West@du.edu">
                <Button 
                  className="w-full h-16 bg-sky-600 hover:bg-sky-700 text-white text-lg rounded-full shadow-lg shadow-sky-200 transition-all flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
              <a href="tel:+17372319001">
                <Button 
                  className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white text-lg rounded-full shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}