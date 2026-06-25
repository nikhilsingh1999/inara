'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PhoneCall, Check, Send } from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budgetRange: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '₹15 Lakhs - ₹30 Lakhs',
    '₹30 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore +',
  ];

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!form.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(form.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Invalid phone number';
    }
    if (!form.projectType) tempErrors.projectType = 'Project type is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Mock API call transition
      setTimeout(() => {
        setForm({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          budgetRange: '',
          message: '',
        });
      }, 1000);
    }
  };

  const handleWhatsAppConnect = () => {
    const messageText = `Hello INARA Design Team, my name is ${form.name || '[Name]'}. I am looking for a consultation for a ${form.projectType || '[Project Type]'} project. Budget range: ${form.budgetRange || '[Budget]'}. ${form.message ? 'My vision: ' + form.message : ''}`;
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/919000012345?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop scroll-mt-20 select-none overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-luxury-gold text-label-caps mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[32px] sm:text-headline-md md:text-display-lg-mobile text-charcoal">
            Start Your Journey
          </h2>
        </div>

        <div className="bg-surface-container-lowest p-8 md:p-16 border border-charcoal/5 relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12"
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors placeholder:text-charcoal/30 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                    placeholder="YOUR NAME *"
                  />
                  {errors.name && (
                    <span className="absolute bottom-[-22px] left-0 font-sans text-[11px] text-error tracking-wider uppercase font-semibold">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors placeholder:text-charcoal/30 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                    placeholder="EMAIL ADDRESS *"
                  />
                  {errors.email && (
                    <span className="absolute bottom-[-22px] left-0 font-sans text-[11px] text-error tracking-wider uppercase font-semibold">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors placeholder:text-charcoal/30 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                    placeholder="PHONE NUMBER *"
                  />
                  {errors.phone && (
                    <span className="absolute bottom-[-22px] left-0 font-sans text-[11px] text-error tracking-wider uppercase font-semibold">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div className="relative">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors text-charcoal/60 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                  >
                    <option value="">PROJECT TYPE *</option>
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Hospitality/Restaurant">Hospitality/Restaurant</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                  {errors.projectType && (
                    <span className="absolute bottom-[-22px] left-0 font-sans text-[11px] text-error tracking-wider uppercase font-semibold">
                      {errors.projectType}
                    </span>
                  )}
                </div>

                {/* Budget Range Dropdown */}
                <div className="relative md:col-span-2">
                  <select
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors text-charcoal/60 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                  >
                    <option value="">BUDGET RANGE</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative md:col-span-2">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-4 px-0 transition-colors placeholder:text-charcoal/30 font-sans text-body-md focus:ring-0 rounded-none border-t-0 border-x-0"
                    placeholder="TELL US ABOUT YOUR VISION"
                  />
                </div>

                {/* Actions */}
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 justify-center mt-8">
                  <button
                    type="button"
                    onClick={handleWhatsAppConnect}
                    className="flex items-center justify-center gap-3 border border-charcoal/20 text-charcoal hover:border-luxury-gold hover:text-luxury-gold px-10 py-5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-500 bg-transparent active:scale-95 cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp Quick Connect</span>
                  </button>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-charcoal text-white hover:bg-luxury-gold hover:text-charcoal px-10 py-5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-500 active:scale-95 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Schedule Consultation</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-20 h-20 bg-luxury-gold text-charcoal rounded-full flex items-center justify-center mb-6 shadow-md border border-luxury-gold animate-bounce">
                  <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="font-display text-[28px] md:text-headline-md text-charcoal mb-4">
                  Thank You
                </h3>
                <p className="font-sans text-[16px] text-secondary max-w-md leading-relaxed font-light mb-8">
                  Your request has been successfully registered. Our principal architect will contact you within 24 hours to schedule the session.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-sans text-label-caps text-luxury-gold hover:text-charcoal border-b border-luxury-gold hover:border-charcoal pb-1 transition-colors duration-300 font-bold"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
