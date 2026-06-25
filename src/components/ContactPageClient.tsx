'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PhoneCall, Mail, Clock, MapPin, Send, Check } from 'lucide-react';

interface ContactFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '₹15 Lakhs - ₹30 Lakhs',
    '₹30 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore +',
  ];

  const timelineOptions = [
    'Immediate (Within 1 Month)',
    '1 - 3 Months',
    '3 - 6 Months',
    'Flexible (6+ Months)',
  ];

  const projectTypes = [
    'Restaurant',
    'Cafe',
    'Bar & Lounge',
    'Workspace / Office',
    'Retail Storefront',
    'Bespoke Styling',
  ];

  const validate = () => {
    const tempErrors: Partial<ContactFormState> = {};
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
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Simulate API submit trigger
      setTimeout(() => {
        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          budgetRange: '',
          timeline: '',
          message: '',
        });
      }, 1000);
    }
  };

  const handleWhatsAppConnect = () => {
    const messageText = `Hello INARA, my name is ${form.name || '[Name]'}. I am inquiring on behalf of ${form.company || 'my brand'} for a ${form.projectType || '[Project Type]'} space. Budget: ${form.budgetRange || '[Budget]'}, Timeline: ${form.timeline || '[Timeline]'}. ${form.message ? 'Description: ' + form.message : ''}`;
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/919000012345?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-background min-h-screen pt-28 pb-20 select-none">
      {/* Editorial Page Header */}
      <section className="pt-12 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-16">
        <span className="font-sans text-luxury-gold text-label-caps tracking-[0.25em] font-bold block mb-4">
          CONTACT ORDINATES
        </span>
        <h1 className="font-display text-[40px] sm:text-headline-md md:text-[68px] leading-[1.05] font-bold text-charcoal mb-6">
          Schedule A Consultation
        </h1>
        <p className="font-sans text-body-lg text-secondary max-w-2xl font-light leading-relaxed">
          Partner with INARA to shape your brand narrative through space. Complete our design brief below, or connect with our office instantly.
        </p>
      </section>

      {/* Main Grid: Form + Coordinates Card */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-section-gap mb-24 items-start">
        {/* Left Side: Contact Brief Form */}
        <div className="lg:col-span-8 bg-surface-container p-8 md:p-16 border border-charcoal/5 relative min-h-[600px]">
          <h2 className="font-display text-[26px] md:text-headline-sm text-charcoal mb-10 pb-4 border-b border-charcoal/10">
            Project Brief Form
          </h2>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
              >
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors placeholder:text-charcoal/35 font-sans text-body-md rounded-none border-t-0 border-x-0"
                    placeholder="YOUR NAME *"
                  />
                  {errors.name && (
                    <span className="absolute bottom-[-20px] left-0 font-sans text-[10px] text-error tracking-wider uppercase font-semibold">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Company Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors placeholder:text-charcoal/35 font-sans text-body-md rounded-none border-t-0 border-x-0"
                    placeholder="COMPANY / BRAND NAME"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors placeholder:text-charcoal/35 font-sans text-body-md rounded-none border-t-0 border-x-0"
                    placeholder="EMAIL ADDRESS *"
                  />
                  {errors.email && (
                    <span className="absolute bottom-[-20px] left-0 font-sans text-[10px] text-error tracking-wider uppercase font-semibold">
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
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors placeholder:text-charcoal/35 font-sans text-body-md rounded-none border-t-0 border-x-0"
                    placeholder="PHONE NUMBER *"
                  />
                  {errors.phone && (
                    <span className="absolute bottom-[-20px] left-0 font-sans text-[10px] text-error tracking-wider uppercase font-semibold">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Project Type */}
                <div className="relative">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors text-charcoal/70 font-sans text-body-md rounded-none border-t-0 border-x-0"
                  >
                    <option value="">PROJECT TYPE *</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <span className="absolute bottom-[-20px] left-0 font-sans text-[10px] text-error tracking-wider uppercase font-semibold">
                      {errors.projectType}
                    </span>
                  )}
                </div>

                {/* Budget Range */}
                <div className="relative">
                  <select
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors text-charcoal/70 font-sans text-body-md rounded-none border-t-0 border-x-0"
                  >
                    <option value="">BUDGET RANGE</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div className="relative md:col-span-2">
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors text-charcoal/70 font-sans text-body-md rounded-none border-t-0 border-x-0"
                  >
                    <option value="">EXPECTED TIMELINE</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vision Description Message */}
                <div className="relative md:col-span-2">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-charcoal/20 focus:border-luxury-gold outline-none py-3 px-0 transition-colors placeholder:text-charcoal/35 font-sans text-body-md rounded-none border-t-0 border-x-0"
                    placeholder="TELL US ABOUT YOUR SPATIAL VISION"
                  />
                </div>

                {/* Action CTA Buttons */}
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 mt-6 justify-center">
                  <button
                    type="button"
                    onClick={handleWhatsAppConnect}
                    className="flex items-center justify-center gap-3 border border-charcoal/20 text-charcoal hover:border-luxury-gold hover:text-luxury-gold px-8 py-4 font-sans font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 bg-transparent active:scale-95 cursor-pointer"
                    id="contact-whatsapp-btn"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp Brief</span>
                  </button>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-charcoal text-white hover:bg-luxury-gold hover:text-charcoal px-8 py-4 font-sans font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 active:scale-95 cursor-pointer"
                    id="contact-submit-btn"
                  >
                    <Send size={14} />
                    <span>Send Inquiry</span>
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
                <div className="w-16 h-16 bg-luxury-gold text-charcoal rounded-full flex items-center justify-center mb-6 shadow-md border border-luxury-gold animate-bounce">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="font-display text-[26px] text-charcoal mb-4">
                  Brief Registered Successfully
                </h3>
                <p className="font-sans text-[15px] text-secondary max-w-md leading-relaxed font-light mb-8">
                  Thank you for sharing your project parameters. Our commercial team will evaluate the brief and contact you within one business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-sans text-label-caps text-luxury-gold hover:text-charcoal border-b border-luxury-gold hover:border-charcoal pb-1 transition-colors duration-300 font-bold"
                >
                  SEND ANOTHER BRIEF
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Coordinates Panel */}
        <div className="lg:col-span-4 space-y-12">
          {/* Studio Coordinates */}
          <div className="bg-surface-container p-10 border border-charcoal/5">
            <h3 className="font-sans font-bold text-label-caps text-[11px] tracking-wider text-primary border-b border-charcoal/10 pb-4 mb-8">
              STUDIO COORDINATES
            </h3>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="text-luxury-gold mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="font-sans text-[11px] text-secondary tracking-widest uppercase font-bold block mb-1">
                    Address
                  </span>
                  <span className="font-sans text-[14px] text-charcoal leading-relaxed font-semibold">
                    Plot 42, Jubilee Hills Road No. 36,<br />
                    Hyderabad, Telangana 500033
                  </span>
                </div>
              </div>

              {/* Inquiry Lines */}
              <div className="flex gap-4 items-start">
                <div className="text-luxury-gold mt-1">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <span className="font-sans text-[11px] text-secondary tracking-widest uppercase font-bold block mb-1">
                    Inquiry Line
                  </span>
                  <a
                    href="tel:+919000012345"
                    className="font-sans text-[14px] text-charcoal font-semibold hover:text-luxury-gold transition-colors block"
                  >
                    +91 90000 12345
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex gap-4 items-start">
                <div className="text-luxury-gold mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="font-sans text-[11px] text-secondary tracking-widest uppercase font-bold block mb-1">
                    Electronic Mail
                  </span>
                  <a
                    href="mailto:hello@inara.studio"
                    className="font-sans text-[14px] text-charcoal font-semibold hover:text-luxury-gold transition-colors block"
                  >
                    hello@inara.studio
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="text-luxury-gold mt-1">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="font-sans text-[11px] text-secondary tracking-widest uppercase font-bold block mb-1">
                    Working Hours
                  </span>
                  <span className="font-sans text-[14px] text-charcoal leading-relaxed font-semibold">
                    Mon - Sat • 09:00 AM - 07:00 PM<br />
                    Sunday • Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="bg-surface-container p-10 border border-charcoal/5">
            <h3 className="font-sans font-bold text-label-caps text-[11px] tracking-wider text-primary border-b border-charcoal/10 pb-4 mb-6">
              SOCIAL CHANNELS
            </h3>
            <div className="flex flex-col gap-4 font-sans text-[14px] text-charcoal font-semibold">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors flex justify-between items-center py-2 border-b border-charcoal/5"
              >
                <span>Instagram Showcase</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-secondary">@inara.studio</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-luxury-gold transition-colors flex justify-between items-center py-2 border-b border-charcoal/5"
              >
                <span>LinkedIn Corporate</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-secondary">INARA Commercial</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Architectural Location Map Layout */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-10">
        <div className="bg-charcoal text-white p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Directions Info */}
            <div className="lg:col-span-4 space-y-6">
              <span className="font-sans text-luxury-gold text-label-caps tracking-[0.2em] font-bold block">
                FIND US IN JUBILEE HILLS
              </span>
              <h2 className="font-display text-[28px] md:text-[36px] leading-tight font-medium text-white">
                Our Office Location
              </h2>
              <p className="font-sans text-[14px] text-white/60 leading-relaxed font-light">
                Our studio is located in the commercial heart of Jubilee Hills, Road No. 36. Located within 10 minutes of Hitech City and Banjara Hills, it features a custom showroom showcasing luxury lighting, textures, and bespoke furniture finishes.
              </p>
              <a
                href="https://maps.google.com/?q=Jubilee+Hills+Road+No+36+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-luxury-gold text-charcoal hover:bg-white hover:text-charcoal px-6 py-4 font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300 active:scale-95 mt-4"
                id="contact-map-directions"
              >
                <span>Get Directions</span>
                <Send size={12} />
              </a>
            </div>

            {/* Stylized Map Render (CSS Canvas) */}
            <div className="lg:col-span-8">
              <div className="aspect-[16/9] w-full border border-white/10 bg-neutral-950 relative flex items-center justify-center p-8 overflow-hidden select-none">
                {/* Decorative blueprint grids */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:30px_30px] opacity-15" />
                
                {/* Concentric rings representing map circles */}
                <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-pulse" />
                <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
                
                {/* Stylized coordinates block */}
                <div className="absolute bottom-4 right-4 bg-neutral-900 border border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/40 font-mono">
                  17.4326° N, 78.4071° E
                </div>

                {/* Stylized landmark node points */}
                <div className="flex flex-col items-center relative">
                  <div className="relative">
                    {/* Glowing coordinate marker */}
                    <div className="absolute -inset-4 bg-luxury-gold/30 rounded-full blur-md animate-ping" />
                    <div className="w-10 h-10 bg-luxury-gold border-2 border-white rounded-full flex items-center justify-center text-charcoal shadow-2xl relative z-10 font-display font-bold">
                      I
                    </div>
                  </div>
                  <div className="mt-4 bg-charcoal/90 border border-luxury-gold/30 px-6 py-3 shadow-2xl text-center backdrop-blur-md">
                    <span className="font-sans text-[11px] text-luxury-gold font-bold tracking-widest uppercase block">
                      INARA STUDIO
                    </span>
                    <span className="font-sans text-[9px] text-white/50 tracking-wider uppercase block mt-1">
                      Plot 42, Road No. 36
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
