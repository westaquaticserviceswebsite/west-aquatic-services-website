import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Send, Phone, Mail, User, MessageSquare, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await base44.entities.ContactMessage.create(formData);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="min-h-[80vh] flex items-center justify-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-800">
              Message Sent!
            </h1>
            <p className="mt-4 text-slate-600">
              Thank you for reaching out. We will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Service Area</p>
                    <p className="text-slate-600">Lake Austin, Texas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <a href="mailto:Henry.West@du.edu" className="text-sky-600 hover:text-sky-700">
                      Henry.West@du.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="full_name" className="text-slate-700 font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-slate-400" />
                  Full Name *
                </Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => handleChange('full_name', e.target.value)}
                  className={`h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 ${errors.full_name ? 'border-red-300' : ''}`}
                  placeholder="Your full name"
                />
                {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 ${errors.email ? 'border-red-300' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  Phone (optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500"
                  placeholder="(512) 555-0123"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`min-h-[150px] rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 resize-none ${errors.message ? 'border-red-300' : ''}`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-sky-600 hover:bg-sky-700 text-white text-lg rounded-full shadow-lg shadow-sky-200 transition-all"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}