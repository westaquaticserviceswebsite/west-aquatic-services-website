import React from 'react';
import { motion } from 'framer-motion';
import { Target, Volume2, FileCheck, DollarSign } from 'lucide-react';
import MediaUploader from '@/components/ui/MediaUploader';

export default function WhyChooseUsSection({ cardMedia, onMediaChange, isAdmin }) {
  const cards = [
    {
      id: 'card-precision',
      icon: Target,
      title: 'Precision Where It Matters',
      description: 'Hand-operated tools allow us to work carefully around your dock, lifts, and sensitive areas.',
      gradient: 'from-sky-500 to-sky-600'
    },
    {
      id: 'card-noise',
      icon: Volume2,
      title: 'No Noise or Disruption',
      description: 'Quiet, efficient work that won\'t disturb you, your neighbors, or wildlife.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'card-permit',
      icon: FileCheck,
      title: 'Fully Permitted & Compliant',
      description: 'All our work meets local and environmental regulations—peace of mind included.',
      gradient: 'from-violet-500 to-violet-600'
    },
    {
      id: 'card-pricing',
      icon: DollarSign,
      title: 'Fair, Transparent Pricing',
      description: 'Clear quotes based on square footage. No hidden fees, no surprises.',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-800">
            Why Choose West Aquatic Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {card.title}
              </h3>
              
              <p className="mt-3 text-slate-600 leading-relaxed">
                {card.description}
              </p>

              {isAdmin && (
                <div className="mt-4">
                  <MediaUploader
                    sectionId={card.id}
                    currentMedia={cardMedia?.[card.id]}
                    onMediaChange={(url) => onMediaChange?.(card.id, url)}
                    isAdmin={isAdmin}
                    aspectRatio="wide"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}