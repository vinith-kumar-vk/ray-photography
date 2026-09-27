import React from 'react';
import { TESTIMONIALS } from '../data/websiteData';
import { Star, Quote, Heart, MessageSquare, Play } from 'lucide-react';

const Testimonials = ({ setActiveTab }) => {
  return (
    <div className="pt-28 pb-20 bg-[#0a0a0d] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Heart size={16} className="text-[#d4af37]" /> Couple Reviews
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-2">
            Client Testimonials & Love Notes
          </h1>
          <div className="title-decorator" />
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            What truly sets Ray Photography apart is our genuine love for people and storytelling. Read honest reviews from couples whose weddings we were honored to document.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 text-left relative flex flex-col justify-between shadow-2xl hover:border-[#d4af37]/40 transition-all"
            >
              <Quote size={40} className="text-[#d4af37]/15 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex gap-1 text-[#d4af37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4af37" />
                  ))}
                </div>

                <p className="text-sm text-gray-200 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.couple}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">{item.couple}</h3>
                    <p className="text-xs text-[#d4af37] font-medium">{item.location}</p>
                  </div>
                </div>

                <div className="w-16 h-16 rounded overflow-hidden border border-gray-700 hidden sm:block">
                  <img src={item.weddingPhoto} alt="Wedding moment" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="glass-panel p-10 rounded-xl max-w-3xl mx-auto text-center border border-[#d4af37]/30">
          <MessageSquare size={28} className="mx-auto text-[#d4af37] mb-3" />
          <h3 className="text-2xl font-bold font-serif text-white mb-2">Want to Create Magic Together?</h3>
          <p className="text-xs text-gray-300 font-light mb-6">
            We limit the number of weddings we take each year to give every couple our full heart and creative energy.
          </p>
          <button
            onClick={() => { setActiveTab('get-quote'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="btn-gold text-xs px-8 py-3.5"
          >
            Check Availability For Your Date
          </button>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
