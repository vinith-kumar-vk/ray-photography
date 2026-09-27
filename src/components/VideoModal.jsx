import React from 'react';
import { X, Play, Film } from 'lucide-react';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="modal-backdrop">
      <div className="relative w-full max-w-4xl bg-black border border-[#d4af37]/30 rounded-lg overflow-hidden shadow-2xl animate-fadeIn p-4">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <Film size={18} className="text-[#d4af37]" />
            <h3 className="text-sm font-semibold text-gray-200 line-clamp-1">{video.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white bg-gray-900 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Responsive Video Container */}
        <div className="relative aspect-video w-full bg-black rounded overflow-hidden">
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
          <p>{video.description}</p>
          <span className="text-[#d4af37] font-semibold">{video.duration}</span>
        </div>

      </div>
    </div>
  );
};

export default VideoModal;
