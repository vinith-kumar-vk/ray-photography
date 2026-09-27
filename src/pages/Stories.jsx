import React from 'react';
import { REAL_STORIES } from '../data/websiteData';
import { Heart, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Stories = ({ onOpenStory }) => {
  return (
    <div className="pt-28 pb-20 bg-[#0a0a0d] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center justify-center gap-2">
            <Heart size={16} className="text-[#d4af37]" /> Real Wedding Stories
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-2">
            Stories We Were Grateful to Be a Part of
          </h1>
          <div className="title-decorator" />
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Every celebration holds a unique soul. Explore full wedding photo blogs documenting real emotions and unscripted memories.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {REAL_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onOpenStory(story)}
              className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden cursor-pointer group hover:border-[#d4af37]/40 transition-all flex flex-col justify-between shadow-2xl"
            >
              <div className="img-zoom-container h-80 relative">
                <img src={story.coverImage} alt={story.couple} />
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#d4af37]/30">
                    {story.theme}
                  </span>
                </div>
              </div>

              <div className="p-8 text-left space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-white font-serif group-hover:text-[#f3e5ab] transition-colors">
                    {story.couple}
                  </h2>
                  <p className="text-xs text-[#d4af37] font-medium flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {story.location}
                  </p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-3">
                  {story.storyText}
                </p>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-semibold text-[#d4af37]">
                  <span>Read Full Photo Story</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Stories;
