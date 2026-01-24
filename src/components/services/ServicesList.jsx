import React from 'react';
import { motion } from 'framer-motion';
import { Check, Hand, Anchor, Fish, Droplets, Volume2, Package, FileCheck, Calculator } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      icon: Hand,
      title: 'Manual Hydrilla Removal',
      description: 'Using hand operated tools for precise, careful vegetation removal'
    },
    {
      icon: Anchor,
      title: 'Dock & Shoreline Clearing',
      description: 'Restore full access to your dock, boat lifts, and waterfront areas'
    },
    {
      icon: Fish,
      title: 'Swim Area Restoration',
      description: 'Create safe, clear swimming zones around your property'
    },
    {
      icon: Droplets,
      title: 'No Chemicals or Herbicides',
      description: 'Completely natural approach safe for lake ecosystem and wildlife'
    },
    {
      icon: Volume2,
      title: 'No Motorized Equipment',
      description: 'Quiet, nondisruptive work that respects your peace'
    },
    {
      icon: Package,
      title: 'Proper Disposal',
      description: 'Vegetation is collected, dried, bagged, and properly disposed'
    },
    {
      icon: FileCheck,
      title: 'Permit Compliant',
      description: 'All work meets local and environmental regulations'
    },
    {
      icon: Calculator,
      title: 'Fair Pricing',
      description: 'Pricing based on square footage removed clear and transparent'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-5 md:px-8 bg-gradient-to-b from-white to-sky-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive manual hydrilla removal services tailored to Lake Austin properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-4 p-7 rounded-2xl bg-white shadow-md border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center group-hover:from-sky-200 group-hover:to-emerald-200 transition-all">
                <service.icon className="w-7 h-7 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}