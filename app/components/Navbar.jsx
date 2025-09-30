"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full h-[60px] absolute top-0 left-0 right-0 shadow-lg z-50 min-h-10 bg-[#ffffff16] backdrop-blur-sm">
      <div className="w-full h-full flex flex-row items-center relative max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Logo */}
        <span className="w-full h-full flex items-center justify-start">
          <Image src="https://thebsgroup.in/wp-content/uploads/2025/04/TM-1-e1745239305497.png" alt="logo" width={80} height={80} className="md:w-[100px] md:h-[40px]" />
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-full h-full flex-row justify-end items-center text-base header font-normal text-white gap-8 lg:gap-10 uppercase">
          <li>
            <Link 
              className={`pb-5 hover:border-b-2 hover:border-white transition-all duration-300 ${active === "Home" ? "border-b-2 border-white" : ""}`} 
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              className="pb-5 hover:border-b-2 hover:border-white transition-all duration-300" 
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              className="pb-5 hover:border-b-2 hover:border-white transition-all duration-300" 
              href="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              className="pb-5 hover:border-b-2 hover:border-white transition-all duration-300" 
              href="/"
            >
              Properties
            </Link>
          </li>
          <li>
            <Link 
              className="bg-white rounded-full px-4 lg:px-5 py-2 lg:py-3 text-blue-400 font-semibold text-sm hover:bg-gray-100 transition-all duration-300" 
              href="/contactus"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50  backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header - Close Button Only */}
          <div className="flex items-center justify-end p-6 border-b border-gray-200 bg-[#171e3d]">

            <span className="w-full h-full flex items-center justify-between">
            <Image src="https://thebsgroup.in/wp-content/uploads/2025/04/TM-1-e1745239305497.png" alt="logo" width={80} height={80} className="md:w-[100px] md:h-[40px]" />
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </span>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-6 py-8 bg-white">
            <ul className="space-y-6">
              <li>
                <Link 
                  className={`block text-lg font-medium text-[#171e3d] hover:text-blue-400 transition-colors duration-300 pb-2 border-b border-transparent hover:border-blue-400 ${
                    active === "Home" ? "text-blue-400 border-blue-400" : ""
                  }`}
                  href="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  className="block text-lg font-medium text-[#171e3d] hover:text-blue-400 transition-colors duration-300 pb-2 border-b border-transparent hover:border-blue-400"
                  href="/"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  className="block text-lg font-medium text-[#171e3d] hover:text-blue-400 transition-colors duration-300 pb-2 border-b border-transparent hover:border-blue-400"
                  href="/"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  className="block text-lg font-medium text-[#171e3d] hover:text-blue-400 transition-colors duration-300 pb-2 border-b border-transparent hover:border-blue-400"
                  href="/"
                  onClick={closeMobileMenu}
                >
                  Properties
                </Link>
              </li>
              <li className="pt-4">
                <Link 
                  className="block w-full bg-blue-400 text-white text-center rounded-full px-6 py-3 font-semibold hover:bg-blue-500 transition-colors duration-300"
                  href="/contactus"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <p className="text-gray-500 text-sm text-center">
              © 2024 BSGroup Property Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}