import React, { useState, useContext } from "react";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaQuestionCircle,
  FaRegChartBar,
  FaDonate,
  FaClipboardList,
  FaSignInAlt,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeProvider";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Assuming your context provides theme and toggle function

  // Handle theme toggle
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav className=" bg-[url('../public/tile.jpg')] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400 font-normal">CleanMy</span>
            <span>Street</span>
          </div>
        </div>

        {/* Navbar items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="#how-it-works"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaQuestionCircle />
            <span>How It Works</span>
          </Link>
          <Link
            to="/report"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaRegChartBar />
            <span>Report</span>
          </Link>
          <Link
            to="/track-complain"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaClipboardList />
            <span>Track Your Complaint</span>
          </Link>
          <Link to="/donate" className="flex items-center space-x-2 text-black">
            <div className="bg-yellow-400 hover:bg-yellow-300 px-1 flex items-center gap-1 py-1 rounded">
              <span>Donate</span>
              ❤️
            </div>
          </Link>
         
          <button
            onClick={handleThemeToggle}
            className="text-xl focus:outline-none border-2 px-1 rounded-full"
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex justify-center items-center gap-4 md:hidden">
        <Link to="/donate" className="flex items-center space-x-2 text-black">
                    <div className="bg-yellow-400 hover:bg-yellow-300 px-1 flex items-center gap-1 py-1 rounded">
                        <span>Donate</span>
                        ❤️
                    </div>
                    </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden  text-white mt-4 space-y-4 p-4">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="#how-it-works"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaQuestionCircle />
            <span>How It Works</span>
          </Link>
          <Link
            to="/report"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaRegChartBar />
            <span>Report</span>
          </Link>

          <Link
            to="/track-complain"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaClipboardList />
            <span>Track Your Complaint</span>
          </Link>
          <Link
            to="/signin"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaSignInAlt />
            <span>Sign In</span>
          </Link>
          <button
            onClick={handleThemeToggle}
            className="text-normal focus:outline-none flex justify-center items-center gap-2 "
          >
         {theme === "light" ? <FaSun  /> : <FaMoon  />}<span className="uppercase ">{theme}</span> 
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
