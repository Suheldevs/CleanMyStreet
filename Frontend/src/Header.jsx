import React, { useState, useContext } from "react";
import { FaSun, FaMoon, FaHome, FaQuestionCircle, FaRegChartBar, FaDonate, FaClipboardList, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { ThemeContext } from "./Context/ThemeProvider";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext); // Assuming your context provides theme and toggle function

    // Handle theme toggle
    const handleThemeToggle = () => {
        toggleTheme();
    };

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand Name */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">MyBrand</h1>
                </div>

                {/* Navbar items (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/how-it-works" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaQuestionCircle />
                        <span>How It Works</span>
                    </Link>
                    <Link to="/report" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaRegChartBar />
                        <span>Report</span>
                    </Link>
                    <Link to="/donate" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaDonate />
                        <span>Donate</span>
                    </Link>
                    <Link to="/track-complain" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaClipboardList />
                        <span>Track Your Complaint</span>
                    </Link>
                    <Link to="/signin" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaSignInAlt />
                        <span>Sign In</span>
                    </Link>
                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={handleThemeToggle}
                    className="text-xl focus:outline-none"
                >
                    {theme === "light" ? <FaSun /> : <FaMoon />}
                </button>

                {/* Mobile Menu Toggle */}
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

            {/* Mobile Menu (Conditional rendering) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white mt-4 space-y-4 p-4">
                    <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/how-it-works" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaQuestionCircle />
                        <span>How It Works</span>
                    </Link>
                    <Link to="/report" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaRegChartBar />
                        <span>Report</span>
                    </Link>
                    <Link to="/donate" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaDonate />
                        <span>Donate</span>
                    </Link>
                    <Link to="/track-complain" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaClipboardList />
                        <span>Track Your Complaint</span>
                    </Link>
                    <Link to="/signin" className="flex items-center space-x-2 hover:text-gray-300">
                        <FaSignInAlt />
                        <span>Sign In</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Header;
