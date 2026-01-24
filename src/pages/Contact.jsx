import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Header */}
      <section className="pt-32 pb-20 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600">
              We'll respond within 24 hours
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.a
              href="Henry.West@du.edu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col items-center justify-center text-center hover:border-sky-200">
                <div className="p-4 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors mb-4">
                  <Mail className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">Henry.West@du.edu</p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+17372319001"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 h-full flex flex-col items-center justify-center text-center hover:border-emerald-200">
                <div className="p-4 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors mb-4">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Call</h3>
                <p className="text-slate-600">(737) 231-9001</p>
              </div>
            </motion.a>
          </div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200">
              <MapPin className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Serving Lake Austin, Texas</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
