import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { Waves } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

function FooterLogoUploader() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = React.useRef(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await base44.auth.me();
        setIsAdmin(user?.role === 'admin');
      } catch {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  const { data: logoMedia, refetch } = useQuery({
    queryKey: ['footer-logo'],
    queryFn: async () => {
      const media = await base44.entities.SiteMedia.filter({ section_id: 'footer-logo' });
      return media[0]?.media_url || null;
    }
  });

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      const existingMedia = await base44.entities.SiteMedia.filter({ section_id: 'footer-logo' });
      
      if (existingMedia.length > 0) {
        await base44.entities.SiteMedia.update(existingMedia[0].id, {
          media_url: file_url
        });
      } else {
        await base44.entities.SiteMedia.create({
          section_id: 'footer-logo',
          media_url: file_url,
          media_type: 'image'
        });
      }
      refetch();
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  if (!logoMedia) {
    if (isAdmin) {
      return (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 transition-colors"
          >
            <Waves className="w-6 h-6 text-sky-400" />
          </button>
        </div>
      );
    }
    return (
      <div className="p-2 rounded-xl bg-sky-500/20">
        <Waves className="w-6 h-6 text-sky-400" />
      </div>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <img 
        src={logoMedia} 
        alt="West Aquatic Services" 
        className="h-10 w-auto max-w-[120px] object-contain cursor-pointer"
        onClick={() => isAdmin && fileInputRef.current?.click()}
      />
      {isAdmin && isHovered && (
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">Edit</span>
        </div>
      )}
    </div>
  );
}

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
              <FooterLogoUploader />
              <span className="text-xl font-semibold">West Aquatic Services</span>
            </div>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Manual hydrilla removal focused on clarity, care, and value. Serving Lake Austin homeowners with precision and environmental responsibility.
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