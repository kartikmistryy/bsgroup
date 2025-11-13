"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Carousel images data
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
      alt: "Modern Home Exterior",
      title: "Luxury Rentals",
      subtitle: "Exclusive short- and long-term rentals featuring premium amenities, bespoke interiors and prime locations. We handpick spaces that offer not just comfort but a statement of lifestyle.",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      alt: "Luxury Interior",
      title: "Property Sales",
      subtitle: "From luxury high-rises to heritage-inspired apartments, gain access to Mumbai’s most elite properties with end-to-end transaction support. We ensure transparency, value and a smooth transition from first visit to final handover.",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      alt: "Beautiful Garden",
      title: "Acquisition & Leasing Strategy",
      subtitle: "For investors and corporate clients, we develop custom strategies to maximize ROI, portfolio strength and asset security. Our in-depth market expertise helps you make informed, future-ready decisions.",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      alt: "Living Room",
      title: "Wealth & Well-being Advisory",
      subtitle: "We don’t just help you invest — we help you grow and preserve your wealth. Our advisory services connect real estate investments with your lifestyle aspirations and long-term goals.",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      alt: "Luxury Bathroom",
      title: "Experience the Pinnacle of Real Estate Excellence",
      subtitle: "Partner with BS Group Consultancy and gain exclusive access to Mumbai’s most desirable residential and commercial spaces. We bring knowledge, integrity and human warmth to every interaction because your success is our reputation.",
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const totalSlides = isMobile ? carouselImages.length : Math.ceil(carouselImages.length / 3);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length, isMobile]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <section className="w-full h-full flex flex-col relative bg-[url(https://images.pexels.com/photos/3288103/pexels-photo-3288103.png)] bg-cover bg-center min-h-screen md:items-start md:justify-end items-center justify-center px-4 md:px-20 pb-20">
        <h1 className="text-white md:text-[50px] text-2xl font-bold header uppercase tracking-wider">
        Your 360° Partner in Real Estate Success.
        </h1>
      </section>

      <section className="w-full h-full flex flex-col bg-white relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              SERVICES
            </h3>

            <span className="w-full md:w-full md:max-w-[75%] text-[#171e3d] flex flex-col justify-start items-start leading-[160%] md:leading-[180%]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
                Transform your property
              </h3>
              <p className="text-sm md:text-base mt-3">
                Explore our comprehensive range of services designed to transform your property into the perfect space. From interior design to property management, we handle every detail with expertise and care.
              </p>
            </span>
          </div>
        </div>

        {/* Multi-Image Services Carousel */}
        <div className="w-full h-full flex flex-col items-center justify-center mx-auto relative px-4 md:px-16 py-12 md:py-20">
          <div className="relative w-full max-w-[1400px] overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ 
                x: `-${currentSlide * (isMobile ? 100 : 100/3)}%` 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(33.333%-1rem)] flex-shrink-0 relative group cursor-pointer"
                >
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm md:text-base opacity-90">{image.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ 
                length: isMobile ? carouselImages.length : Math.ceil(carouselImages.length / 3) 
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#3ad8ff] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => {
                    const maxSlides = isMobile ? carouselImages.length : Math.ceil(carouselImages.length / 3);
                    return (prev - 1 + maxSlides) % maxSlides;
                  }
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => {
                  const maxSlides = isMobile ? carouselImages.length : Math.ceil(carouselImages.length / 3);
                  return (prev + 1) % maxSlides;
                })
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex flex-col bg-white relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between mb-16">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              OUR SERVICES
            </h3>

            <span className="w-full md:w-full md:max-w-[75%] text-[#171e3d] flex flex-col justify-start items-start leading-[160%] md:leading-[180%]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
                Comprehensive Property Solutions
              </h3>
              <p className="text-sm md:text-base mt-3">
                We offer a complete range of services to transform your property into the perfect space. From design to maintenance, we handle every aspect with professional expertise.
              </p>
            </span>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
            {/* Service 1 - Interior Design & Turnkey */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3ad8ff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#49e3f7] transition-colors duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-4">Interior Design & Turnkey</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Complete interior design solutions from concept to completion. We handle everything from planning to final installation.
              </p>
            </div>

            {/* Service 2 - Asset Inspection */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3ad8ff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#49e3f7] transition-colors duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-4">Asset Inspection</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Professional property inspections to ensure your investment is protected and maintained at the highest standards.
              </p>
            </div>

            {/* Service 3 - Maid Service */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3ad8ff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#49e3f7] transition-colors duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-4">Maid Service</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Professional cleaning services to keep your property spotless and well-maintained throughout the year.
              </p>
            </div>

            {/* Service 4 - Pest Control */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3ad8ff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#49e3f7] transition-colors duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-4">Pest Control</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Comprehensive pest management solutions to protect your property from termites and other unwanted visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full h-full flex flex-col lg:flex-row justify-between bg-gray-50 py-12 md:py-20 px-5 max-w-[1400px] mx-auto">
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 flex flex-col justify-start">
          <div className="max-w-md">
            <h2 className="text-3xl header md:text-4xl font-bold text-[#171e3d] mb-6">Get Started Today</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ready to transform your property? Contact us today and let our experts help you create the perfect space for your needs.
            </p>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3ad8ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171e3d] mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Property Lane<br />
                    Real Estate District<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3ad8ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171e3d] mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3ad8ff] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#171e3d] mb-1">Email</h3>
                  <p className="text-gray-600">info@BSGroupproperty.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 mt-12 lg:mt-0">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl header md:text-3xl font-bold text-[#171e3d] mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="interior-design">Interior Design & Turnkey Service</option>
                    <option value="asset-inspection">Asset Inspection</option>
                    <option value="maid-service">Maid Service</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-[#3ad8ff] hover:bg-[#49e3f7] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#171e3d] text-white py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            
            {/* Company Info & Logo */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="mb-4 md:mb-6">
                <Image src="https://thebsgroup.in/wp-content/uploads/2025/04/TM-1-e1745239305497.png" alt="logo" width={80} height={80} className="md:w-[100px] md:h-[40px]" />
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md mt-4 md:mt-6 lg:mt-10">
                  Your trusted partner in property management. We transform your space into the perfect home with our comprehensive services and dedicated expertise.
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-3 md:space-x-4">
                <a 
                  href="#" 
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.596.596 1.297.894 2.14.894.894 0 1.596-.298 2.14-.894l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529zm7.118 0c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.596.596 1.297.894 2.14.894.894 0 1.596-.298 2.14-.894l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Navigation</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">About</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Services</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Properties</Link></li>
                <li><Link href="/contactus" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Contact Info</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex md:flex-col flex-row gap-2">
                    <p className="text-gray-300 text-xs md:text-sm">123 Property Lane</p>
                    <p className="text-gray-300 text-xs md:text-sm">Real Estate District</p>
                    <p className="text-gray-300 text-xs md:text-sm">City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">+1 (234) 567-890</a>
                </div>
                
                <div className="flex items-center space-x-2 md:space-x-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@BSGroupproperty.com" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">info@BSGroupproperty.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border & Copyright */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                © 2024 BSGroup Property Management. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 gap-2 md:gap-0">
                <a href="#" className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services