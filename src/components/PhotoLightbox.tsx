import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface PhotoLightboxProps {
  isOpen: boolean;
  imageUrl: string;
  caption: string;
  credit: string;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  imageUrl,
  caption,
  credit,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md">
      {/* Top Bar with brand monogram and close button */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-2">
          <span className="font-cheltenham text-2xl font-black italic">T</span>
          <span className="text-[11px] font-sans-nyt uppercase tracking-widest text-neutral-400">
            NYT Photojournalism
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-neutral-300 rounded-full hover:bg-neutral-800 transition cursor-pointer"
          aria-label="Close photo view"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image */}
      <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={caption}
          className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl transition-transform duration-300"
        />
      </div>

      {/* Bottom Caption & Credit */}
      <div className="max-w-2xl mx-auto w-full text-white font-sans-nyt bg-black/50 p-3 rounded backdrop-blur-xs">
        <p className="text-[13px] leading-[18px] text-gray-200 font-medium mb-1">
          {caption}
        </p>
        <p className="text-[11px] text-gray-400">
          Photograph credit: <span className="text-gray-300 font-semibold">{credit}</span>
        </p>
      </div>
    </div>
  );
};
