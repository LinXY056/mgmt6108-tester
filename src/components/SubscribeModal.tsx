import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeConfirm: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onSubscribeConfirm
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onSubscribeConfirm();
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-xs shadow-2xl z-10 border border-[#dfdfdf] overflow-hidden">
        {/* Top close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-black rounded transition cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center bg-white">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="font-cheltenham text-[22px] font-bold text-[#121212] mb-1">
              Welcome to The Times
            </h3>
            <p className="text-[13px] text-neutral-600 font-sans-nyt">
              Your All Access Digital Subscription is now active. Enjoy unlimited access.
            </p>
          </div>
        ) : (
          <div>
            {/* Header banner */}
            <div className="bg-[#121212] text-white p-6 text-center">
              <div className="flex justify-center mb-2">
                <svg aria-label="The New York Times" className="h-5 w-auto fill-current text-white" viewBox="0 0 450 60">
                  <text
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="44"
                    fontWeight="900"
                    letterSpacing="-1.5"
                    textAnchor="middle"
                    x="50%"
                    y="45"
                  >
                    The New York Times
                  </text>
                </svg>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-sans-nyt mb-1">
                Special Limited-Time Offer
              </p>
              <h2 className="font-cheltenham text-[26px] font-bold tracking-tight text-white leading-tight">
                $1 a week for your first year.
              </h2>
              <p className="text-[12px] text-neutral-300 font-sans-nyt mt-1">
                Billed as $4 every 4 weeks. Cancel anytime.
              </p>
            </div>

            {/* Benefits list */}
            <div className="p-6 font-sans-nyt">
              <p className="text-[12px] font-bold uppercase tracking-wider text-neutral-700 mb-3">
                All Access Digital includes:
              </p>
              <ul className="space-y-2.5 text-[13px] text-neutral-800">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>News:</strong> Unrivaled reporting, analysis, and live updates across 150+ bureaus worldwide.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Games:</strong> Spelling Bee, Connections, The Crossword, and Wordle.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Cooking:</strong> 20,000+ tested recipes with easy meal planning and guides.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Audio & Wirecutter:</strong> Exclusive narrated articles and rigorously tested product reviews.</span>
                </li>
              </ul>

              {/* Call to action */}
              <div className="mt-6 pt-4 border-t border-[#dfdfdf]">
                <button
                  onClick={handleConfirm}
                  className="w-full py-3 bg-[#121212] hover:bg-black text-white text-[13px] font-bold rounded-sm tracking-tight transition cursor-pointer shadow-sm"
                >
                  Start Subscription · $1/Week
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[10.5px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Secure checkout · Hassle-free online cancellation</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
