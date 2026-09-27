import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftNavItems = [
    { id: 'home', label: 'HOME' },
    { id: 'photos', label: 'PHOTOS' },
    { id: 'stories', label: 'STORIES' },
  ];

  const rightNavItems = [
    { id: 'testimonials', label: 'TESTIMONIALS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'get-quote', label: 'GET QUOTE' },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <>
      {/* Sticky Top Header with linear-gradient(to right, #fdefe4 0%, #fdefe4 100%) background */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md border-b border-[#e8d7c5] ${
          scrolled ? 'py-2' : 'py-3'
        }`}
        style={{
          background: 'linear-gradient(to right, #fdefe4 0%, #fdefe4 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-16">
            {/* Left Nav Links */}
            <nav className="flex items-center space-x-9">
              {leftNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs tracking-widest font-semibold transition-colors duration-200 py-2 uppercase ${
                    activeTab === item.id
                      ? 'text-[#0d0d0d] font-bold'
                      : 'text-gray-800 hover:text-[#d4af37]'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d4af37] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Center Attached PNG Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex flex-col items-center group transform transition-transform hover:scale-105 py-1"
            >
              <img
                src="/ray-logo.png"
                alt="Ray Photography"
                className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply filter drop-shadow-sm"
              />
            </div>

            {/* Right Nav Links */}
            <nav className="flex items-center space-x-9">
              {rightNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs tracking-widest font-semibold transition-colors duration-200 py-2 uppercase ${
                    item.id === 'get-quote'
                      ? 'px-5 py-2.5 bg-[#d4af37] text-black font-bold hover:bg-[#0d0d0d] hover:text-[#d4af37] rounded-sm transition-all shadow-sm'
                      : activeTab === item.id
                      ? 'text-[#0d0d0d] font-bold'
                      : 'text-gray-800 hover:text-[#d4af37]'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && item.id !== 'get-quote' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#d4af37] rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile & Tablet Bar */}
          <div className="lg:hidden flex items-center justify-between h-14">
            <div onClick={() => handleNavClick('home')} className="cursor-pointer">
              <img
                src="/ray-logo.png"
                alt="Ray Photography"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleNavClick('get-quote')}
                className="text-[11px] px-3.5 py-1.5 bg-[#d4af37] text-black font-bold uppercase tracking-wider rounded-sm shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-900 hover:text-[#d4af37] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between p-8 pt-24 animate-fadeIn"
          style={{ background: 'linear-gradient(to right, #fdefe4 0%, #fdefe4 100%)' }}
        >
          <div className="flex flex-col items-center space-y-6 text-center">
            <img src="/ray-logo.png" alt="Ray Photography" className="h-20 w-auto object-contain mix-blend-multiply mb-4" />

            {allNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-semibold uppercase tracking-widest transition-colors py-1 ${
                  activeTab === item.id ? 'text-[#0d0d0d] font-bold border-b-2 border-[#d4af37]' : 'text-gray-800 hover:text-[#d4af37]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Footer Contacts */}
          <div className="border-t border-[#e8d7c5] pt-6 flex flex-col items-center gap-4 text-xs text-gray-700">
            <div className="flex space-x-6">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-900 font-semibold">
                <Phone size={16} /> +91 98765 43210
              </a>
            </div>
            <p className="text-gray-600">© 2026 Ray Photography. All rights reserved.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
