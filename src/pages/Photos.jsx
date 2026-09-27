import React, { useState } from 'react';
import { PORTFOLIO_PHOTOS } from '../data/websiteData';
import { Camera, MapPin, Tag, ZoomIn } from 'lucide-react';

const Photos = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Candid Weddings', 'Pre-Wedding', 'Editorial Portraits', 'Haldi & Sangeet', 'Reception & Party'];

  const filteredPhotos = activeCategory === 'All'
    ? PORTFOLIO_PHOTOS
    : PORTFOLIO_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-[#0a0a0d] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Camera size={16} /> Photography Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-2">
            Capturing Real Moments & Timeless Art
          </h1>
          <div className="title-decorator" />
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            We embody subtle observation, attuned to uncovering those genuine, ephemeral treasures of joy, laughter, and profound emotion.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-5 py-2.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-[#d4af37] text-black font-semibold border-[#d4af37] shadow-lg shadow-[#d4af37]/20'
                  : 'bg-gray-900 text-gray-300 border-gray-800 hover:border-[#d4af37]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(filteredPhotos, idx)}
              className="img-zoom-container rounded-lg border border-gray-800 cursor-pointer group h-96 relative shadow-xl"
            >
              <img src={photo.url} alt={photo.title} />
              
              <div className="img-overlay flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-black/60 px-2.5 py-1 rounded border border-[#d4af37]/30">
                    {photo.category}
                  </span>
                  <span className="p-2 bg-black/60 text-white rounded-full group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                    <ZoomIn size={16} />
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors font-serif">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                    <MapPin size={12} className="text-[#d4af37]" /> {photo.couple} — {photo.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Photos;
