"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { LogOut, Login } from "./AuthButton";
import { isAuthenticated } from "../utils/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#fff] shadow-md relative">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-lg font-bold text-black">Second-Life</span>
          </div>

          <SearchBar />

          <div className="hidden md:flex items-center space-x-2">
            {isAuthenticated() ? <LogOut /> : <Login />}
          </div>

          {/* Profile and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="block md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Profile */}
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex justify-start bg-[#205b28] border-1 border-b-[#ffc125]">
          <ul className="flex space-x-8 py-3 px-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-[#ffc125] border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#ffc125] border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#ffc125] border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-2"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#ffc125] border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-2"
              >
                Product
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Off-Canvas Menu (Mobile) */}
      <div
        id="offcanvas-menu"
        className={`rounded-r-lg fixed top-0 left-0 z-50 w-1/2 h-full bg-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } menu-transition md:hidden`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#"
            className="text-gray-700 hover:text-white border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-white border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-white border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-white border-2 border-transparent hover:bg-[#205b28] active:text-[#ffc125] active:border-[#ffc125] rounded-lg transition-all duration-300 ease-in-out px-4 py-1"
          >
            Product
          </a>

          <div className="flex items-center ml-3">
            {isAuthenticated() ? <LogOut /> : <Login />}
          </div>
        </nav>
      </div>

      <style jsx>{`
        .menu-transition {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Header;
