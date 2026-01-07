import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Waves } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { name: 'Home', page: 'Home' },
    { name: 'Services', page: 'Services' },
    { name: 'Request a Quote', page: 'RequestQuote' },
    { name: 'Contact', page: 'Contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-sky-500/20">
                <Waves className="w-6 h-6 text-sky-400" />
              </div>
              <span className="text-xl font-semibold">West Aquatic Services</span>
            </div>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Manual hydrilla removal focused on care, clarity, and value.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} West Aquatic Services. All rights reserved.</p>
          <p>Lake Austin, Texas</p>
        </div>
      </div>
    </footer>
  );
}