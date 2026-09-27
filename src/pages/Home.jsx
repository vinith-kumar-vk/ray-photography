import React, { useState, useRef } from 'react';
import { AWARDS, PORTFOLIO_PHOTOS, WEDDING_FILMS, REAL_STORIES, TESTIMONIALS, FAQS } from '../data/websiteData';
import { Award, Trophy, Star, Camera, Play, ArrowRight, ChevronDown, ChevronUp, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const Home = ({ setActiveTab, onOpenLightbox, onOpenVideo, onOpenStory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef(null);

  const categories = ['All', 'Candid Weddings', 'Pre-Wedding', 'Editorial Portraits', 'Haldi & Sangeet'];

  const filteredPhotos = selectedCategory === 'All'
    ? PORTFOLIO_PHOTOS
    : PORTFOLIO_PHOTOS.filter(p => p.category === selectedCategory);

  const handleHeroClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const getAwardIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award size={28} className="text-[#d4af37]" />;
      case 'Trophy': return <Trophy size={28} className="text-[#d4af37]" />;
      case 'Star': return <Star size={28} className="text-[#d4af37]" />;
      default: return <Camera size={28} className="text-[#d4af37]" />;
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* HERO SECTION - TAP/CLICK ANYWHERE TO TOGGLE PLAY/PAUSE (NO ICON OVERLAY) */}
      <section
        onClick={handleHeroClick}
        className="relative w-full h-[calc(100vh-80px)] min-h-[550px] flex items-center justify-center overflow-hidden bg-black cursor-pointer"
      >
        {/* Full-width 100% Edge-to-Edge Wedding Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-100"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="https://video.wixstatic.com/video/0075b0_7c6ef45113024dfb838ab8a72f0eb673/1080p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Bottom Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-black/20 pointer-events-none z-10" />

        {/* Scroll Indicator (Bottom Center) */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-300 group-hover:text-[#d4af37] transition-colors block mb-1">
            Scroll to Explore
          </span>
          <ChevronDown size={22} className="mx-auto text-[#d4af37] animate-bounce" />
        </div>
      </section>

      {/* AWARDS & ACCOLADES BADGES */}
      <section className="bg-[#0e0e12] border-y border-[#d4af37]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {AWARDS.map((award) => (
              <div key={award.id} className="p-4 rounded-md border border-gray-800/80 bg-gray-900/40 hover:border-[#d4af37]/40 transition-colors">
                <div className="flex justify-center mb-2">{getAwardIcon(award.icon)}</div>
                <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">{award.title}</h4>
                <p className="text-[11px] text-gray-400 mt-1">{award.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY / ABOUT BRIEF */}
      <section className="py-20 bg-[#0a0a0d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Our Philosophy</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif leading-snug">
                Artistic Wedding Photography & Cinematic Films
              </h2>
              
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                At <strong className="text-white font-semibold">Ray Photography</strong>, we are passionate about capturing unforgettable wedding stories. Every wedding is a once-in-a-lifetime celebration filled with genuine emotions, quiet teardrops, and unscripted joy.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Our crew of professional wedding photographers and filmmakers specializes in candid moments, editorial bridal portraiture, and high-definition cinematic films, ensuring your celebration is preserved into a heirloom story you can relive for generations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d4af37]" /> Authentic Candid Emotions
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d4af37]" /> Editorial Lighting & Composition
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d4af37]" /> 4K Ultra HD Cinema Films
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#d4af37]" /> Worldwide Travel Available
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo({top:0, behavior:'smooth'}); }}
                  className="btn-gold text-xs py-3 px-6"
                >
                  Discover Our Story
                </button>
                <button
                  onClick={() => { setActiveTab('get-quote'); window.scrollTo({top:0, behavior:'smooth'}); }}
                  className="btn-outline text-xs py-3 px-6"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Visual Mosaic Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="img-zoom-container rounded-lg border border-gray-800 h-64">
                  <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" alt="Wedding Ritual" />
                </div>
                <div className="img-zoom-container rounded-lg border border-gray-800 h-44">
                  <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" alt="Haldi Celebration" />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="img-zoom-container rounded-lg border border-gray-800 h-44">
                  <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Editorial Portrait" />
                </div>
                <div className="img-zoom-container rounded-lg border border-gray-800 h-64">
                  <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80" alt="Traditional Vows" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED WORK / GALLERY PREVIEW */}
      <section className="py-20 bg-[#0e0e12] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Selected Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">Our Craft & Vision</h2>
            <div className="title-decorator" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black font-semibold border-[#d4af37]'
                    : 'bg-gray-900 text-gray-300 border-gray-800 hover:border-[#d4af37]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.slice(0, 6).map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(filteredPhotos, idx)}
                className="img-zoom-container rounded-lg border border-gray-800 cursor-pointer group h-80"
              >
                <img src={photo.url} alt={photo.title} />
                <div className="img-overlay flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-semibold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{photo.couple} — {photo.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Photos Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => { setActiveTab('photos'); window.scrollTo({top:0, behavior:'smooth'}); }}
              className="btn-outline text-xs px-8 py-3"
            >
              Explore Full Photo Gallery ({PORTFOLIO_PHOTOS.length} Works)
            </button>
          </div>

        </div>
      </section>

      {/* FEATURED CINEMATIC FILMS */}
      <section className="py-20 bg-[#0a0a0d] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Cinema & Teasers</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">Cinematic Wedding Trailers</h2>
            <div className="title-decorator" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEDDING_FILMS.map((film) => (
              <div
                key={film.id}
                onClick={() => onOpenVideo(film)}
                className="group cursor-pointer bg-gray-900/60 border border-gray-800 rounded-lg overflow-hidden hover:border-[#d4af37]/40 transition-all shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="p-4 bg-[#d4af37] text-black rounded-full shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Play size={24} fill="black" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] px-2.5 py-1 rounded font-mono">
                    {film.duration}
                  </span>
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                    {film.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">{film.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REAL STORIES SHOWCASE */}
      <section className="py-20 bg-[#0e0e12] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Real Weddings</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">Stories We Were Grateful to Tell</h2>
            <div className="title-decorator" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REAL_STORIES.slice(0, 3).map((story) => (
              <div
                key={story.id}
                onClick={() => onOpenStory(story)}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden cursor-pointer group hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
              >
                <div className="img-zoom-container h-60">
                  <img src={story.coverImage} alt={story.couple} />
                </div>
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20">
                      {story.theme}
                    </span>
                    <h3 className="text-xl font-bold text-white font-serif mt-3 group-hover:text-[#f3e5ab] transition-colors">
                      {story.couple}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{story.subtitle}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-[#d4af37] font-semibold">
                    <span>Read Full Story</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 bg-[#0a0a0d] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Kind Words</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">What Our Couples Say</h2>
            <div className="title-decorator" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="glass-panel p-8 rounded-lg border border-gray-800 text-left flex flex-col justify-between relative">
                <Quote size={32} className="text-[#d4af37]/20 absolute top-6 right-6" />
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#d4af37" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-800 mt-6">
                  <img src={item.avatar} alt={item.couple} className="w-12 h-12 rounded-full object-cover border border-[#d4af37]" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.couple}</h4>
                    <p className="text-xs text-gray-400">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#0e0e12] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Clear Answers</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-2">Frequently Asked Questions</h2>
            <div className="title-decorator" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-md overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-gray-200 hover:text-[#d4af37] transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp size={18} className="text-[#d4af37]" /> : <ChevronDown size={18} />}
                </button>

                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-gray-800/60 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL QUOTE CALLOUT BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#121219] via-[#1a1924] to-[#121219] border-t border-[#d4af37]/30 text-center relative">
        <div className="max-w-4xl mx-auto px-4">
          <Sparkles size={32} className="mx-auto text-[#d4af37] mb-4 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            Ready to Document Your Celebration?
          </h2>
          <p className="text-xs sm:text-base text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Tell us about your dates and wedding vision. We offer customized packages for pre-wedding, candid photography, and 4K cinema films.
          </p>
          <button
            onClick={() => { setActiveTab('get-quote'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="btn-gold text-sm px-10 py-4"
          >
            Get Custom Wedding Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
