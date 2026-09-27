import React, { useState } from 'react';
import { MessageCircle, Heart, ShieldCheck, X, Camera, Film, Globe, Share2 } from 'lucide-react';

const Footer = ({ setActiveTab }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const tags = [
    'Wedding Films', 'Fine-Art Cinematography', 'Cinematic Wedding Trailer', 'Wedding Photographers in Bengaluru',
    'Destination Wedding Photographer', 'Best Indian Wedding Photographers', 'South Indian Weddings', 'Pre-Wedding Shoot',
    'Editorial Bridal Portraits', 'Candids & Stories'
  ];

  return (
    <footer className="bg-[#07070a] border-t border-[#d4af37]/20 pt-16 pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <img src="/logo-light.svg" alt="Ray Photography" className="h-16 w-auto" />
            <p className="text-xs leading-relaxed text-gray-400">
              Capturing authentic emotions, timeless candids, and grand cinematic wedding stories across India and global destinations.
            </p>
            <div className="flex space-x-3 pt-2 text-gray-300">
              {/* Instagram Icon SVG */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="hover:text-[#d4af37] transition-colors p-2.5 bg-gray-900 rounded-full border border-gray-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook Icon SVG */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-[#d4af37] transition-colors p-2.5 bg-gray-900 rounded-full border border-gray-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* YouTube Icon SVG */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube" className="hover:text-[#d4af37] transition-colors p-2.5 bg-gray-900 rounded-full border border-gray-800">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" title="WhatsApp" className="hover:text-[#d4af37] transition-colors p-2.5 bg-gray-900 rounded-full border border-gray-800">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => { setActiveTab('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">HOME</button></li>
              <li><button onClick={() => { setActiveTab('photos'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">PHOTOS</button></li>
              <li><button onClick={() => { setActiveTab('stories'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">STORIES</button></li>
              <li><button onClick={() => { setActiveTab('testimonials'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">TESTIMONIALS</button></li>
              <li><button onClick={() => { setActiveTab('about'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">ABOUT</button></li>
              <li><button onClick={() => { setActiveTab('get-quote'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">GET QUOTE</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">Contact Studio</h4>
            <p className="text-xs leading-relaxed text-gray-400 mb-2">
              <strong className="text-gray-200">Ray Photography Studio</strong><br />
              Bengaluru, Karnataka, India<br />
              Available for Worldwide Travel
            </p>
            <p className="text-xs text-gray-300">
              Email: <a href="mailto:contact@rayphotography.com" className="text-[#d4af37] hover:underline">contact@rayphotography.com</a><br />
              Phone: +91 98765 43210
            </p>
          </div>

          {/* Accolades & Trust */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">Excellence</h4>
            <div className="bg-gray-900/60 p-4 border border-gray-800 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
                <ShieldCheck size={16} className="text-[#d4af37]" /> WPJA Award Winners 2025
              </div>
              <p className="text-[11px] text-gray-400">
                Top rated luxury wedding photography crew for destination weddings worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* SEO Tags Strip */}
        <div className="py-6 border-b border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Keywords & Topics:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] bg-gray-900 text-gray-400 px-2.5 py-1 rounded-full border border-gray-800">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Ray Photography. All rights reserved.</p>
          <div className="flex space-x-6">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('get-quote')} className="hover:text-gray-300 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal-backdrop">
          <div className="glass-panel p-8 max-w-lg w-full rounded-md border border-[#d4af37]/40 relative text-left">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">Privacy Policy</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              At Ray Photography, we respect your privacy. All photographs, videos, and personal client details submitted through our forms remain confidential and copyrighted by Ray Photography.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              We do not sell or share client information with third parties. Client images are displayed on our portfolio solely for artistic representation.
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="btn-gold w-full text-xs py-2.5"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
