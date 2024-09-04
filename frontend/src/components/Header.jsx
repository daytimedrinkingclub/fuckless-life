import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-header-bg py-3 px-6 border-b-[20px] border-[#010101]">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[190px] h-[88px]" />
        </Link>
        <nav className="hidden lg:flex items-center">
          <a
            href="https://daytimedrinking.club"
            target="_blank"
            className="text-black font-bold text-lg mr-6 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
          >
            About Us
          </a>
          <a
            href="https://okat.store"
            target="_blank"
            className="text-black font-bold text-lg mr-6 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
          >
            Merch
          </a>
          <a
            href="https://www.youtube.com/@DaytimeDrinkingClub"
            target="_blank"
            className="text-black font-bold text-lg hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
          >
            Podcast
          </a>
        </nav>
        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Navigation menu for mobile */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"} lg:hidden flex-col mt-4`}
      >
        <a
          href="/about"
          className="text-black font-bold text-lg mb-2 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
        >
          About Us
        </a>
        <a
          href="/merch"
          className="text-black font-bold text-lg mb-2 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
        >
          Merch
        </a>
        <a
          href="/podcast"
          className="text-black font-bold text-lg mb-2 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
        >
          Podcast
        </a>
      </nav>
    </div>
  );
};

export default Header;
