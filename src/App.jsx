import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalleryLightbox from './components/GalleryLightbox';
import VideoModal from './components/VideoModal';
import StoryModal from './components/StoryModal';

import Home from './pages/Home';
import Photos from './pages/Photos';
import Stories from './pages/Stories';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import GetQuote from './pages/GetQuote';

export function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Lightbox Modal state
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Video Modal state
  const [activeVideo, setActiveVideo] = useState(null);

  // Story Modal state
  const [activeStory, setActiveStory] = useState(null);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenLightbox = (photosOrSingle, index = 0) => {
    if (Array.isArray(photosOrSingle)) {
      setLightboxPhotos(photosOrSingle);
      setLightboxIndex(index);
    } else {
      setLightboxPhotos([photosOrSingle]);
      setLightboxIndex(0);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxPhotos.length - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev < lightboxPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#f5f5f7] flex flex-col justify-between selection:bg-[#d4af37] selection:text-black">
      {/* Header Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <Home
            setActiveTab={setActiveTab}
            onOpenLightbox={handleOpenLightbox}
            onOpenVideo={(video) => setActiveVideo(video)}
            onOpenStory={(story) => setActiveStory(story)}
          />
        )}

        {activeTab === 'photos' && (
          <Photos onOpenLightbox={handleOpenLightbox} />
        )}

        {activeTab === 'stories' && (
          <Stories onOpenStory={(story) => setActiveStory(story)} />
        )}

        {activeTab === 'testimonials' && (
          <Testimonials setActiveTab={setActiveTab} />
        )}

        {activeTab === 'about' && (
          <About setActiveTab={setActiveTab} />
        )}

        {activeTab === 'get-quote' && (
          <GetQuote />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={lightboxPhotos}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

      {/* Video Popup Overlay */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      {/* Story Reader Popup Overlay */}
      {activeStory && (
        <StoryModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}
    </div>
  );
}

export default App;
