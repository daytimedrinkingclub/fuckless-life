import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-header-bg py-3 px-6 border-b-[20px] border-[#010101]">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-[188px] h-[80px]" />
        {/* Navigation menu for desktop */}
        <nav className="hidden lg:flex items-center">
          <a
            href="/about"
            className="text-black font-bold text-lg mr-6 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
          >
            About Us
          </a>
          <a
            href="/merch"
            className="text-black font-bold text-lg mr-6 hover:text-gray-700 transition-colors duration-300 leading-[38px] text-[30px] font-[700]"
          >
            Merch
          </a>
          <a
            href="/podcast"
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
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Navigation menu for mobile */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:hidden flex-col mt-4`}
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
