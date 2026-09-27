import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

const GalleryLightbox = ({ photos, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentItem = photos[currentIndex];

  return (
    <div className="modal-backdrop">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center justify-center p-2 sm:p-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-2 sm:right-0 p-2 text-gray-300 hover:text-[#d4af37] bg-black/50 hover:bg-black rounded-full transition-colors z-20"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-[#d4af37] hover:text-black rounded-full transition-all z-20 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/60 hover:bg-[#d4af37] hover:text-black rounded-full transition-all z-20 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Main Image Display */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[75vh] flex items-center justify-center bg-black/80 border border-gray-800">
          <img
            src={currentItem.url}
            alt={currentItem.title}
            className="max-h-[75vh] max-w-full object-contain animate-fadeIn"
          />
        </div>

        {/* Image Metadata Bar */}
        <div className="w-full max-w-3xl mt-4 bg-gray-900/90 border border-gray-800 p-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/30 inline-flex items-center gap-1">
              <Tag size={12} /> {currentItem.category}
            </span>
            <h3 className="text-base font-semibold text-white mt-1.5">{currentItem.title}</h3>
            <p className="text-xs text-gray-400 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
              <MapPin size={12} className="text-[#d4af37]" /> {currentItem.couple} — {currentItem.location}
            </p>
          </div>

          <div className="text-xs text-gray-400 font-mono">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalleryLightbox;
