import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2, Send, MapPin, Phone, Mail, User } from 'lucide-react';
import Footer from '@/components/Footer';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    property_address: '',
    area_type: '',
    estimated_sqft: '',
    additional_details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.property_address.trim()) newErrors.property_address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await base44.entities.QuoteRequest.create(formData);
    
    await base44.integrations.Core.SendEmail({
      to: 'Henry.West@du.edu',
      subject: `New Quote Request from ${formData.full_name}`,
      body: `
New quote request received:

Name: ${formData.full_name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Address: ${formData.property_address}
Area Type: ${formData.area_type || 'Not specified'}
Estimated Sq Ft: ${formData.estimated_sqft || 'Not specified'}

Additional Details:
${formData.additional_details || 'None provided'}
      `
    });

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
              Quote Request Received!
            </h1>
            <p className="mt-4 text-slate-600">
              Thank you for reaching out. We will review your request and get back to you within 24 hours with a clear estimate.
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
              Request Your Quote
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Share a few details and we'll respond quickly with a clear estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 space-y-6">
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
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 ${errors.phone ? 'border-red-300' : ''}`}
                placeholder="(512) 555-0123"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Property Address */}
            <div className="space-y-2">
              <Label htmlFor="property_address" className="text-slate-700 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                Property Address *
              </Label>
              <Input
                id="property_address"
                value={formData.property_address}
                onChange={(e) => handleChange('property_address', e.target.value)}
                className={`h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 ${errors.property_address ? 'border-red-300' : ''}`}
                placeholder="123 Lakefront Dr, Austin, TX"
              />
              {errors.property_address && <p className="text-red-500 text-sm">{errors.property_address}</p>}
            </div>

            {/* Area Type */}
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Area to Service</Label>
              <Select value={formData.area_type} onValueChange={(value) => handleChange('area_type', value)}>
                <SelectTrigger className="h-12 rounded-xl border-slate-200">
                  <SelectValue placeholder="Select area type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dock">Dock</SelectItem>
                  <SelectItem value="shoreline">Shoreline</SelectItem>
                  <SelectItem value="swim_area">Swim Area</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Estimated Sq Ft */}
            <div className="space-y-2">
              <Label htmlFor="estimated_sqft" className="text-slate-700 font-medium">
                Estimated Square Footage (optional)
              </Label>
              <Input
                id="estimated_sqft"
                value={formData.estimated_sqft}
                onChange={(e) => handleChange('estimated_sqft', e.target.value)}
                className="h-12 rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500"
                placeholder="e.g., 500 sq ft"
              />
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
              <Label htmlFor="additional_details" className="text-slate-700 font-medium">
                Additional Details
              </Label>
              <Textarea
                id="additional_details"
                value={formData.additional_details}
                onChange={(e) => handleChange('additional_details', e.target.value)}
                className="min-h-[120px] rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 resize-none"
                placeholder="Any other information that might be helpful..."
              />
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
                  Get My Quote
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}