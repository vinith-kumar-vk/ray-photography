import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle, Calculator, Calendar, MapPin, Phone, Mail, User, Sparkles } from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    eventDate: '',
    city: '',
    functions: [],
    guestCount: '200-500',
    budget: 'Standard (₹2.5L - ₹4L)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Candid Photography',
    'Cinematic 4K Wedding Film',
    'Traditional Stage Video & Photos',
    'Pre-Wedding Concept Shoot',
    'Aerial Drone Cinematography',
    'Custom Luxury Photobooks'
  ];

  const toggleService = (service) => {
    setFormData(prev => {
      const exists = prev.functions.includes(service);
      const updated = exists
        ? prev.functions.filter(s => s !== service)
        : [...prev.functions, service];
      return { ...prev, functions: updated };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi Ray Photography, I would like to request a quote for my wedding!
Name: ${formData.name || 'Client'}
Dates: ${formData.eventDate || 'TBD'}
City: ${formData.city || 'Bengaluru'}
Services: ${formData.functions.join(', ') || 'All Services'}
Budget: ${formData.budget}`;
    
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#0a0a0d] min-h-screen animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Calculator size={16} /> Request Custom Quote
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-2">
            Let's Plan Your Wedding Story
          </h1>
          <div className="title-decorator" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Fill out your celebration details below to get a custom tailored pricing quote and availability check within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="glass-panel p-10 rounded-xl text-center border border-[#d4af37]/40 space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#d4af37]/20 text-[#d4af37] rounded-full flex items-center justify-center mx-auto border border-[#d4af37]">
              <CheckCircle size={36} />
            </div>
            <h2 className="text-2xl font-bold font-serif text-white">Thank You, {formData.name || 'Dear Couple'}!</h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              We have received your event details for <strong className="text-white">{formData.city || 'your wedding'}</strong>. Our team is reviewing date availability and will reach out shortly!
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppRedirect}
                className="btn-gold text-xs px-6 py-3 flex items-center gap-2"
              >
                <MessageCircle size={16} /> Chat Instantly on WhatsApp
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline text-xs px-6 py-3"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 sm:p-10 space-y-8 text-left shadow-2xl">
            
            {/* Step 1: Personal Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
                <User size={16} /> 1. Couple Details
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Deepthi & Vignesh"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">Instagram Handle (Optional)</label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="@deepthi_vignesh"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Event Details */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
                <Calendar size={16} /> 2. Wedding Dates & Location
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-300 block mb-1">Wedding / Event Dates *</label>
                  <input
                    type="text"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    placeholder="e.g. Nov 14 - Nov 16, 2026"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 block mb-1">City / Venue Location *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Palace Grounds, Bengaluru / Goa"
                    className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Required Services */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} /> 3. Select Desired Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((service) => {
                  const isChecked = formData.functions.includes(service);
                  return (
                    <div
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`p-3 rounded border cursor-pointer flex items-center justify-between text-xs transition-colors ${
                        isChecked
                          ? 'bg-[#d4af37]/15 border-[#d4af37] text-white font-semibold'
                          : 'bg-black/50 border-gray-800 text-gray-300 hover:border-gray-700'
                      }`}
                    >
                      <span>{service}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-[#d4af37] border-[#d4af37] text-black' : 'border-gray-700'
                      }`}>
                        {isChecked && <CheckCircle size={12} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Budget Range */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
                <Calculator size={16} /> 4. Estimated Photography Budget
              </h3>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
              >
                <option value="Essential (₹1.5L - ₹2.5L)">Essential Coverage (₹1.5L - ₹2.5L)</option>
                <option value="Standard (₹2.5L - ₹4L)">Standard Luxury (₹2.5L - ₹4L)</option>
                <option value="Grand Destination (₹4L - ₹8L+)">Grand Destination Celebration (₹4L - ₹8L+)</option>
              </select>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Tell Us About Your Vision & Functions</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your ceremonies (Sangeet, Haldi, Muhurtham, Reception, themes...)"
                  className="w-full bg-black/60 border border-gray-800 rounded p-3 text-xs text-white focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button type="submit" className="btn-gold w-full sm:w-auto text-xs py-4 px-8">
                Submit Quote Request <Send size={14} />
              </button>
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="btn-outline w-full sm:w-auto text-xs py-4 px-8 flex items-center justify-center gap-2 text-green-400 border-green-500/50 hover:bg-green-500/10"
              >
                <MessageCircle size={16} /> Instant WhatsApp Quote
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default GetQuote;
