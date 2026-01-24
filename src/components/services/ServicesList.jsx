import React from 'react';
import { motion } from 'framer-motion';
import { Check, Hand, Anchor, Fish, Droplets, Volume2, Package, FileCheck, Calculator } from 'lucide-react';

export default function ServicesList() {
  const services = [
    {
      icon: Hand,
      title: 'Manual Hydrilla Removal',
      description: 'Every strand removed by hand. Precise and thorough.'
    },
    {
      icon: Anchor,
      title: 'Dock & Shoreline Clearing',
      description: 'Full access restored. Dock, boat lift, waterfront.'
    },
    {
      icon: Fish,
      title: 'Swim Area Restoration',
      description: 'Safe, clear water. Swim with confidence.'
    },
    {
      icon: Droplets,
      title: 'Zero Chemicals',
      description: 'Completely natural. Safe for lake and wildlife.'
    },
    {
      icon: Volume2,
      title: 'No Heavy Machinery',
      description: 'Quiet work. No disturbance to your property.'
    },
    {
      icon: Package,
      title: 'Complete Cleanup',
      description: 'We collect, bag, and dispose. Nothing left behind.'
    },
    {
      icon: FileCheck,
      title: 'Fully Permitted',
      description: 'Meets all local and environmental standards.'
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Simple pricing by square footage. No surprises.'
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