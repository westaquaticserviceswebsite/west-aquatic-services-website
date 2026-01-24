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
    <section className="py-16 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">


        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                <service.icon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-slate-600">
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