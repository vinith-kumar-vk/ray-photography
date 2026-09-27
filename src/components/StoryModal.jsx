import React from 'react';
import { X, MapPin, Sparkles, Calendar, Heart } from 'lucide-react';

const StoryModal = ({ story, onClose, onOpenLightbox }) => {
  if (!story) return null;

  return (
    <div className="modal-backdrop">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c10] border border-[#d4af37]/30 rounded-lg overflow-y-auto p-6 sm:p-8 text-left shadow-2xl animate-fadeIn custom-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#d4af37] bg-gray-900 rounded-full transition-colors z-10"
        >
          <X size={22} />
        </button>

        {/* Cover Header */}
        <div className="relative h-64 sm:h-80 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden">
          <img
            src={story.coverImage}
            alt={story.couple}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/20 backdrop-blur px-3 py-1 rounded-sm border border-[#d4af37]/40 w-fit mb-2">
              {story.theme}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-serif tracking-wide">{story.couple}</h2>
            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2 mt-1">
              <MapPin size={14} className="text-[#d4af37]" /> {story.location}
            </p>
          </div>
        </div>

        {/* Story Subtitle & Description */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-[#f3e5ab] font-serif border-l-2 border-[#d4af37] pl-3">
            {story.subtitle}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            {story.storyText}
          </p>
        </div>

        {/* Story Photo Gallery Grid */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-2">
            <Sparkles size={14} /> Story Gallery Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {story.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox({
                  url: imgUrl,
                  title: `${story.couple} - Highlight ${idx + 1}`,
                  category: story.theme,
                  couple: story.couple,
                  location: story.location
                })}
                className="img-zoom-container rounded border border-gray-800 cursor-pointer h-48"
              >
                <img src={imgUrl} alt={`${story.couple} frame ${idx + 1}`} />
                <div className="img-overlay flex items-center justify-center">
                  <span className="text-xs text-white opacity-0 hover:opacity-100 transition-opacity bg-black/60 px-3 py-1 rounded">View Full Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><Heart size={14} className="text-[#d4af37]" /> Captured by Ray Photography Crew</span>
          <button onClick={onClose} className="text-[#d4af37] hover:underline font-semibold">Back to Stories</button>
        </div>

      </div>
    </div>
  );
};

export default StoryModal;
