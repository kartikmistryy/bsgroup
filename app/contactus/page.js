"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: ""
      });
    }, 2000);
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      <section className="w-full h-full flex flex-col relative bg-[url(https://images.pexels.com/photos/3288103/pexels-photo-3288103.png)] bg-cover bg-center min-h-screen md:items-start md:justify-end items-center justify-center px-4 md:px-20 pb-20">
        <h1 className="text-white text-[50px] md:text-[80px] lg:text-[100px] font-bold header uppercase tracking-wider">Contact Us</h1>
      </section>
      
      <section className="w-full h-full flex flex-col lg:flex-row justify-between bg-white py-12 md:py-20 px-5 max-w-[1400px] mx-auto">
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 flex flex-col justify-start">
          <div className="max-w-md">
            <h2 className="text-3xl header md:text-4xl font-bold  text-[#171e3d] mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ready to transform your property? Contact us today and let our experts help you create the perfect space for your needs.
            </p>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
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
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
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
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl header md:text-3xl font-bold text-[#171e3d] mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-400 hover:bg-blue-500 hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
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
                <li><Link href="/" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">About</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Services</Link></li>
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
  );
}