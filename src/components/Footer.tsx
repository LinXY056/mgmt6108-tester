import React from 'react';

interface FooterProps {
  onLegalClick?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  const handleLink = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    if (onLegalClick) {
      onLegalClick(title);
    }
  };

  return (
    <footer className="mt-8 pt-6 border-t border-[#dfdfdf] px-4 text-center">
      <div className="flex justify-center mb-3">
        <svg aria-label="The New York Times" className="h-4 w-auto fill-current text-[#121212]" viewBox="0 0 450 60">
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

      <p className="text-[11px] text-[#727272] mb-2 font-sans-nyt">
        © 2026 The New York Times Company
      </p>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-[#545454] font-sans-nyt">
        <a
          onClick={(e) => handleLink(e, 'The New York Times Company')}
          className="hover:underline cursor-pointer"
          href="#"
        >
          NYTCo
        </a>
        <a
          onClick={(e) => handleLink(e, 'Contact The New York Times')}
          className="hover:underline cursor-pointer"
          href="#"
        >
          Contact Us
        </a>
        <a
          onClick={(e) => handleLink(e, 'Accessibility Guidelines')}
          className="hover:underline cursor-pointer"
          href="#"
        >
          Accessibility
        </a>
        <a
          onClick={(e) => handleLink(e, 'Privacy Policy')}
          className="hover:underline cursor-pointer"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          onClick={(e) => handleLink(e, 'Terms of Service')}
          className="hover:underline cursor-pointer"
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};
