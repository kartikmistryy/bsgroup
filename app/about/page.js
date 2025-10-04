"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi porro quis commodi deserunt maxime dolorum soluta? Nisi, necessitatibus.",
      author: "Client Name 1"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi porro quis commodi deserunt maxime dolorum soluta? Nisi, necessitatibus.",
      author: "Client Name 2"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi porro quis commodi deserunt maxime dolorum soluta? Nisi, necessitatibus.",
      author: "Client Name 3"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi porro quis commodi deserunt maxime dolorum soluta? Nisi, necessitatibus.",
      author: "Client Name 4"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Change testimonial every 2 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <section className="w-full h-full flex flex-col relative bg-[url(https://images.pexels.com/photos/3288103/pexels-photo-3288103.png)] bg-cover bg-center min-h-screen md:items-start md:justify-end items-center justify-center px-4 md:px-20 pb-20">
        <h1 className="text-white text-[50px] md:text-[80px] lg:text-[100px] font-bold header uppercase tracking-wider">
          ABOUT US
        </h1>
      </section>

      <section
        className="w-full h-full flex flex-col bg-white relative py-12 md:py-20"
        data-scroll-section
      >
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#1d264e] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              OUR APPROACH
            </h3>

            <p className="w-full md:w-full md:max-w-[75%] text-[#1d264e] leading-[160%] md:leading-[180%] text-sm md:text-base">
            At bsgroup we focus on quality, innovation, and sustainability. We start with careful planning and design, using modern techniques and eco-friendly materials to build beautiful, responsible homes. We aim to create vibrant communities. Our projects include well-planned amenities, green spaces, and community areas, which foster a sense of belonging and enhance resident&apos;s quality of life.
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of images */}
            <div className="flex gap-8 flex-shrink-0 mr-8">
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern building" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Architecture" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern interior" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Urban development" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Construction site" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 flex-shrink-0 mr-8">
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern building" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Architecture" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern interior" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Urban development" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image 
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Construction site" 
                  width={256} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Statistic 1 */}
            <div className="text-left">
              <div className="text-4xl md:text-5xl lg:text-[70px] font-normal text-[#1d264e] mb-2">
                18
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
                Completed Projects
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We are delivering high-quality residential complexes on time and within budget.
              </p>
            </div>

            {/* Statistic 2 */}
            <div className="text-left">
              <div className="text-4xl md:text-5xl lg:text-[70px] font-normal text-[#1d264e] mb-2">
                500+
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
                Happy Families
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Creating vibrant communities with modern amenities and sustainable living spaces.
              </p>
            </div>

            {/* Statistic 3 */}
            <div className="text-left">
              <div className="text-4xl md:text-5xl lg:text-[70px] font-normal text-[#1d264e] mb-2">
                15
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
                Years Experience
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Proven expertise in construction, design, and real estate development.
              </p>
            </div>

            {/* Statistic 4 */}
            <div className="text-left">
              <div className="text-4xl md:text-5xl lg:text-[70px] font-normal text-[#1d264e] mb-2">
                100%
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
                Client Satisfaction
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Committed to excellence and innovation in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex flex-col relative">
        <div className="w-full h-full flex flex-col gap-10 max-w-[1300px] mx-auto bg-gradient-to-r from-[#ebfffe] to-[#60d5ffa4] py-24 px-10 rounded-lg">
          <div className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#1d264e] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium uppercase">
            Our Timeline
            </h3>

            <h3 className="w-full md:w-full md:max-w-[75%] text-[#1d264e] text-4xl lg:text-5xl font-normal uppercase">Our Journey Through the Years</h3>
          </div>

          <div className="w-full max-w-[75%] md:ml-auto pr-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-2.5 top-0 bottom-0 w-0.5 bg-[#3ad8ff]"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Year 1 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 bg-[#3ad8ff] rounded-full flex items-center justify-center relative z-10">
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-3xl font-normal text-[#1d264e] mb-3">2021</h4>
                  <p className="text-gray-700 max-w-[450px] leading-relaxed text-sm md:text-base">
                    bsgroup was established with a clear vision to revolutionize the real estate industry through innovative design and sustainable practices. Our founding team brought together decades of experience in construction, architecture, and urban planning to create something truly special in the market.
                  </p>
                </div>
              </div>

              {/* Year 2 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 bg-[#3ad8ff] rounded-full flex items-center justify-center relative z-10">
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-3xl font-normal text-[#1d264e] mb-3">2022</h4>
                  <p className="text-gray-700 max-w-[450px] leading-relaxed text-sm md:text-base">
                    bsgroup was established with a clear vision to revolutionize the real estate industry through innovative design and sustainable practices. Our founding team brought together decades of experience in construction, architecture, and urban planning to create something truly special in the market.
                  </p>
                </div>
              </div>

              {/* Year 3 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 bg-[#3ad8ff] rounded-full flex items-center justify-center relative z-10">
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-3xl font-normal text-[#1d264e] mb-3">2024</h4>
                  <p className="text-gray-700 max-w-[450px] leading-relaxed text-sm md:text-base">
                    bsgroup was established with a clear vision to revolutionize the real estate industry through innovative design and sustainable practices. Our founding team brought together decades of experience in construction, architecture, and urban planning to create something truly special in the market.
                  </p>
                </div>
              </div>

              {/* Year 4 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 bg-[#3ad8ff] rounded-full flex items-center justify-center relative z-10">
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-3xl font-normal text-[#1d264e] mb-3">2025</h4>
                  <p className="text-gray-700 max-w-[450px] leading-relaxed text-sm md:text-base">
                    bsgroup was established with a clear vision to revolutionize the real estate industry through innovative design and sustainable practices. Our founding team brought together decades of experience in construction, architecture, and urban planning to create something truly special in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0 pt-20">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#1d264e] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium uppercase">
            PROCESS
            </h3>

            <h3 className="w-full md:w-full md:max-w-[75%] text-[#1d264e] text-4xl lg:text-5xl font-normal uppercase">
            Check Out How Our Process Works</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-10">
            {/* Statistic 1 */}
            <div className="text-left">
              <div className="text-4xl md:text-4xl font-normal text-[#1d264e] mb-2">
                01
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
                Consultation
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We begin with detailed planning, including site analysis, architectural design, and budget estimation, ensuring a solid foundation for your project.
              </p>
            </div>

            {/* Statistic 2 */}
            <div className="text-left">
              <div className="text-4xl md:text-4xl font-normal text-[#1d264e] mb-2">
                02
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
              Estimating
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We begin with detailed planning, including site analysis, architectural design, and budget estimation, ensuring a solid foundation for your project.
              </p>
            </div>

            {/* Statistic 3 */}
            <div className="text-left">
              <div className="text-4xl md:text-4xl font-normal text-[#1d264e] mb-2">
                03
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
              Building

              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We begin with detailed planning, including site analysis, architectural design, and budget estimation, ensuring a solid foundation for your project.
              </p>
            </div>

            {/* Statistic 4 */}
            <div className="text-left">
              <div className="text-4xl md:text-4xl font-normal text-[#1d264e] mb-2">
                04
              </div>
              <div className="text-lg md:text-2xl uppercase text-[#1d264e] font-medium mb-4">
              Finished
              </div>
              <div className="w-full h-[1.5px] bg-[#53727a] mb-4"></div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We begin with detailed planning, including site analysis, architectural design, and budget estimation, ensuring a solid foundation for your project.
              </p>
            </div>
          </div>
        </div>
        

      </section>

      <section className="w-full h-full flex flex-col relative max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0 mb-16">
          <h3 className="w-full md:w-full md:max-w-[25%] text-[#1d264e] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium uppercase">
            MEET THE TEAM
          </h3>
          <h3 className="w-full md:w-full md:max-w-[75%] text-[#1d264e] text-4xl lg:text-5xl font-normal uppercase">
            The People Behind Our Success
          </h3>
        </div>

        {/* Lead Member */}
        <div className="w-full flex flex-col items-center mb-20">
          <div className="w-full max-w-[400px] md:max-w-[500px] text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="CEO - John Smith" 
                width={224} 
                height={224} 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl md:text-3xl font-semibold text-[#1d264e] mb-2">John Smith</h4>
            <p className="text-lg md:text-xl text-[#3ad8ff] font-medium mb-4">Chief Executive Officer</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              With over 20 years of experience in real estate development, John leads bsgroup with a vision for sustainable growth and innovative construction practices. His leadership has been instrumental in establishing our company as a trusted name in the industry.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Sarah Johnson - Project Manager" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-[#1d264e] mb-2">Sarah Johnson</h4>
            <p className="text-base md:text-lg text-[#3ad8ff] font-medium mb-4">Project Manager</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Sarah oversees project execution with precision and attention to detail. Her expertise in construction management ensures timely delivery and quality standards across all our developments.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Michael Chen - Lead Architect" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-[#1d264e] mb-2">Michael Chen</h4>
            <p className="text-base md:text-lg text-[#3ad8ff] font-medium mb-4">Lead Architect</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Michael brings innovative design solutions to every project. His architectural vision combines functionality with aesthetics, creating spaces that enhance the quality of life for our residents.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Emily Rodriguez - Operations Director" 
                width={192} 
                height={192} 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-[#1d264e] mb-2">Emily Rodriguez</h4>
            <p className="text-base md:text-lg text-[#3ad8ff] font-medium mb-4">Operations Director</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Emily manages our day-to-day operations with efficiency and strategic thinking. Her background in business administration ensures smooth coordination between all departments and stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section
        className="w-full h-full flex flex-col lg:flex-row bg-[#171e3d] relative"
        data-scroll-section
      >
        <div className="w-full h-full flex flex-col justify-start items-start lg:basis-1/2 basis-full py-12 md:py-20">
          <span className="w-full h-full lg:basis-1/2 px-4 md:px-16 flex flex-col items-start justify-start">
            <h3 className="w-full h-full max-w-full md:max-w-[25%] text-[#fff] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              TESTIMONIALS
            </h3>
            <h3 className="text-white uppercase text-2xl md:text-3xl lg:text-5xl tracking-wide font-light py-4 md:py-6">
              Client Stories
            </h3>
          </span>

          <div className="w-full h-full flex flex-row items-start justify-start px-4 md:px-16 my-6 md:my-8">
            <div className="w-full h-full flex flex-col gap-2 items-start justify-start relative overflow-hidden">
              {/* Testimonial Carousel */}
              <div className="relative w-full h-[150px] md:h-[200px] overflow-hidden">
                <motion.div
                  className="flex h-full"
                  animate={{ x: `-${currentTestimonial * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 flex flex-col text-white justify-center px-2 md:px-0"
                    >
                      <h3 className="text-white text-xs md:text-sm font-medium leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </h3>
                      <h3 className="text-blue-400 text-sm md:text-base font-medium mt-3 md:mt-5">
                        {testimonial.author}
                      </h3>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
        </div>
        <div className="w-full h-full lg:basis-1/2 basis-full">
          <Image src="https://images.pexels.com/photos/33601908/pexels-photo-33601908.jpeg" alt="testimonial" width={1000} height={1000} className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover" />
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
                 <li><Link href="/" className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm">Contact</Link></li>
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
};

export default About;
