import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { Waves, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

function LogoUploader({ isScrolled }) {
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
    queryKey: ['logo'],
    queryFn: async () => {
      const media = await base44.entities.SiteMedia.filter({ section_id: 'nav-logo' });
      return media[0]?.media_url || null;
    }
  });

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      const existingMedia = await base44.entities.SiteMedia.filter({ section_id: 'nav-logo' });
      
      if (existingMedia.length > 0) {
        await base44.entities.SiteMedia.update(existingMedia[0].id, {
          media_url: file_url
        });
      } else {
        await base44.entities.SiteMedia.create({
          section_id: 'nav-logo',
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
            className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-sky-100' : 'bg-white/90'} hover:bg-sky-200`}
          >
            <Waves className="w-5 h-5 text-sky-600" />
          </button>
        </div>
      );
    }
    return (
      <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-sky-100' : 'bg-white/90'}`}>
        <Waves className="w-5 h-5 text-sky-600" />
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

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', page: 'Home' },
    { name: 'Services', page: 'Services' },
    { name: 'Contact', page: 'Contact' }
  ];

  const isActive = (page) => {
    const currentPath = location.pathname;
    return currentPath === `/${page}` || (page === 'Home' && currentPath === '/');
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --sky-50: #f0f9ff;
          --sky-100: #e0f2fe;
          --sky-200: #bae6fd;
          --sky-400: #38bdf8;
          --sky-500: #0ea5e9;
          --sky-600: #0284c7;
          --sky-700: #0369a1;
          --emerald-50: #ecfdf5;
          --emerald-100: #d1fae5;
          --emerald-500: #10b981;
          --emerald-600: #059669;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <LogoUploader isScrolled={isScrolled} />
              <span className={`text-lg font-semibold transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                West Aquatic Services
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.page)
                      ? 'text-sky-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl('RequestQuote')}>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6">
                  Get a Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <nav className="px-5 py-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive(item.page)
                        ? 'bg-sky-50 text-sky-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to={createPageUrl('RequestQuote')}>
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-full py-6 text-base">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}