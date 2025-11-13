"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [expandedWhy, setExpandedWhy] = useState(0);

  // Carousel images data
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
      alt: "Modern Home Exterior",
      title: "Modern Living",
      subtitle: "Contemporary Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      alt: "Luxury Interior",
      title: "Luxury Interiors",
      subtitle: "Premium Living Spaces",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      alt: "Beautiful Garden",
      title: "Outdoor Spaces",
      subtitle: "Landscaped Gardens",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      alt: "Living Room",
      title: "Interior Design",
      subtitle: "Cozy Living Spaces",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      alt: "Luxury Bathroom",
      title: "Luxury Bathrooms",
      subtitle: "Spa-like Experiences",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop",
      alt: "Modern Bedroom",
      title: "Master Bedrooms",
      subtitle: "Serene Retreats",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "They didn’t just sell us a home, they guided us like family.",
      author: "Client Name 1",
    },
    {
      text: "Transparent, professional and genuinely caring. The best real estate experience we’ve ever had",
      author: "Client Name 2",
    },
    {
      text: "BS Group understood what we needed before we did. That’s what true consultancy feels like.",
      author: "Client Name 3",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi porro quis commodi deserunt maxime dolorum soluta? Nisi, necessitatibus.",
      author: "Client Name 4",
    },
  ];

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What services does BSGroup Property Management offer?",
      answer:
        "BSGroup Property Management offers comprehensive property management services including interior design & turnkey services, asset inspection, maid service, and pest control. We handle all aspects of home care to provide you with a stress-free living environment.",
    },
    {
      id: 2,
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact our team through our website or call us directly. We'll schedule a consultation to understand your needs and create a customized service plan that fits your requirements and budget.",
    },
    {
      id: 3,
      question:
        "Do you provide services for both residential and commercial properties?",
      answer:
        "Yes, we provide our comprehensive property management services for both residential and commercial properties. Our experienced team is equipped to handle various property types and sizes, ensuring consistent quality across all our services.",
    },
    {
      id: 4,
      question:
        "What makes BSGroup Property Management different from competitors?",
      answer:
        "BSGroup Property Management stands out with our experienced experts, customized solutions, advanced technology, and tailor-made services. We believe 'home' is the foundation of life, and we're dedicated to handling all the details so you can focus on enjoying your life.",
    },
  ];

  const whyChooseItems = [
    {
      id: "01",
      title: "Legacy of Excellence",
      paragraphs: [
        `Since 1992, BS Group has been shaping India's real estate story with an unwavering commitment to trust, innovation and timeless design. For over three decades, we've turned blueprints into living realities crafting spaces that reflect sophistication, purpose and emotional connection. Every project we undertake is more than a structure, it's a story of people, dreams and moments built on the solid foundation of credibility and craftsmanship. With each passing year, we've only strengthened our belief that a home is not just built - it's carefully nurtured.`
      ]
    },
    {
      id: "02",
      title: "Smartly Designed Communities",
      paragraphs: [
        `Mumbai is a city of spirit, rhythm and resilience - and we design communities that reflect just that. Every home we curate or create strikes a thoughtful balance between open spaces, greenery and luxury, where modern design meets functionality and aesthetics. Our spaces are built to breathe to allow light, comfort and happiness to flow freely. We believe in designing homes that evolve with time and people where design isn't just about appearance but about the experience of living.`
      ]
    },
    {
      id: "03",
      title: "Comprehensive Assistance",
      paragraphs: [
        `At BS Group Consultancy, our relationship with you begins long before you sign the dotted line and continues long after. Whether you're buying, selling, renting or leasing, we simplify the process with honesty, precision and care. Our dedicated team guides you through every phase of your property journey:`
      ],
      list: [
        `Legal, technical and financial clarity`,
        `Transparent documentation and registrations`,
        `Personalized property scouting and evaluation`,
        `Market insights and investment planning`
      ],
      closing:
        `We make complex real estate transactions feel effortless, allowing you to focus on what truly matters: your family, your goals, your peace of mind.`
    }
  ];

  // Project Categories data
  const projectCategories = [
    {
      title: "Residential Projects",
      description: "Discover homes that are as elegant as they are enduring designed to reflect your individuality. Our residential portfolio spans premium apartments, sea-view homes and serene villas, each built with impeccable quality and timeless appeal.",
      icon: "🏠"
    },
    {
      title: "Commercial Spaces",
      description: "From boutique offices to large-scale business hubs, we create workspaces that embody professionalism, functionality and flair. We understand that the right environment can inspire productivity and we make sure yours does just that.",
      icon: "🏢"
    },
    {
      title: "Farmhouses & Vacation Homes",
      description: "Experience the perfect escape from city life. Our range of farmhouses and holiday homes are architectural sanctuaries balancing nature's calm with contemporary luxury.",
      icon: "🌳"
    }
  ];

  // Featured Projects data
  const featuredProjects = [
    {
      title: "Urban Retreat",
      subtitle: "A luxury haven in the heart of the city.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop"
    },
    {
      title: "Luxury Redefined",
      subtitle: "Where elegance meets everyday comfort.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop"
    },
    {
      title: "Construction Aesthetic",
      subtitle: "Built on principles of precision and beauty.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
    },
    {
      title: "Modern Minimalism",
      subtitle: "Simplicity elevated into art.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
    },
    {
      title: "Contemporary Edge",
      subtitle: "Innovative designs for tomorrow's lifestyle.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop"
    },
    {
      title: "Innovation & Quality",
      subtitle: "Our promise, delivered consistently.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Change testimonial every 2 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Transform scroll progress to control the animation
  // When scrollYProgress reaches 0.5 (50% of hero section), the text should be hidden
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.95, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, -20, -100]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <section
        id="hero"
        className="w-full h-full min-h-[100vh] md:min-h-[120vh] bg-cover bg-center flex flex-col bg-[url('/header.jpeg')] pt-[120px] md:pt-[250px] px-4 md:px-0"
      >
        <motion.h1
          className="text-xl md:text-5xl lg:text-5xl font-medium leading-[140%] text-center text-white max-w-[900px] mx-auto"
          style={{
            opacity,
            scale,
            y,
          }}
          initial={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          We Meet Your Expectations of a Dream Home. A Team of Dedicated
          Professionals Committed to Provide You Nothing but the Best!
        </motion.h1>

        {/* <motion.p
          className="text-[16px] sm:text-[18px] md:text-[20px] text-center text-white max-w-[800px] mx-auto header px-4 md:px-0 mt-4"
          style={{
            opacity,
            scale,
            y,
          }}
        >
          We are a team of experienced professionals who are dedicated to
          providing the best possible service to our clients.
        </motion.p> */}
        <span className="w-full h-full flex flex-row items-center justify-center mt-8">
          <Link
            href="/"
            className="bg-white rounded-full px-6 md:px-8 py-3 md:py-2 text-blue-400 font-semibold text-base md:text-lg mx-auto hover:bg-gray-100 transition-colors duration-300"
          >
            Know more
          </Link>
        </span>
        <span className="bg-gradient-to-t from-[#171e3d] via-[#171e3db3] to-[#171e3d00] h-[150px] md:h-[200px] w-full absolute bottom-0 left-0 right-0"></span>
      </section>

      <section
        className="w-full h-full flex flex-col bg-gradient-to-bl from-[#171e3d] via-[#172047] to-[#49e3f7] relative py-12 md:py-20"
        data-scroll-section
      >
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
            <h3 className="w-full md:w-full md:max-w-[25%] text-white pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              OUR STORY
            </h3>

            <p className="w-full md:w-full md:max-w-[75%] text-white leading-[160%] md:leading-[180%] text-sm md:text-base">
              BS Group was established with a firm vision to provide the best
              possible real estate solutions that suit every client’s budget and
              meet their requirements. We assure you a stress-free property
              registration and manage all the technicalities related to the
              construction, so that you can focus on your work free from any
              stress and provide a 360-degree assistance in all matters related
              to premium real estate management – rental, buying and selling or
              lease.
            </p>
          </div>
        </div>
        <div className="w-full h-full max-w-full md:max-w-[75%] flex flex-col items-start justify-start ml-0 md:ml-auto relative px-4 md:px-0 md:pr-20 py-8 md:py-10">
          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
            {/* Image 1 - Top Left */}
            <div className="w-full h-full bg-gradient-to-br from-[#49e3f7] to-[#171e3d] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Modern Home Exterior"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-semibold">Modern Living</h4>
                  <p className="text-sm opacity-90">
                    Contemporary Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 - Top Right */}
            <div className="w-full h-full bg-gradient-to-br from-[#49e3f7] to-[#171e3d] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300  hover:shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Modern Home Exterior"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-semibold">Modern Living</h4>
                  <p className="text-sm opacity-90">
                    Contemporary Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Image 3 - Bottom Left */}
            <div className="w-full h-full bg-gradient-to-br from-[#49e3f7] to-[#171e3d] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=300&fit=crop"
                alt="Modern Home Exterior"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Outdoor Spaces</h4>
                  <p className="text-sm opacity-90">Landscaped Gardens</p>
                </div>
              </div>
            </div>

            <div className="w-full h-full bg-gradient-to-br from-[#49e3f7] to-[#171e3d] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=300&fit=crop"
                alt="Modern Home Exterior"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Interior Design</h4>
                  <p className="text-sm opacity-90">Cozy Living Spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full h-full flex flex-col bg-white relative py-12 md:py-20"
        data-scroll-section
      >
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              Our Values
            </h3>

            <span className="w-full md:w-full md:max-w-[75%] text-[#171e3d] flex flex-col justify-start items-start leading-[160%] md:leading-[180%]">
              <p className="text-base font-normal">
                A Unique Blend of Integrity & Innovation – BS Group is known for
                its excellence, commitment to integrity and premium quality of
                construction not only regarding residential real estate
                construction but also in commercial property ventures. We are
                committed to leaving a legacy for the future generations by
                building premium real estate ventures that speak volumes of
                ethical finesse and modern aesthetics. Adapting a very
                contemporary approach in property construction with the most
                technologically advanced engineering and architectural skills,
                we provide you nothing but the very best in Mumbai’s market.
                <br />
                We stand on the pillars of integrity, experience, design and
                modern niche creation.
              </p>
              <p className="text-sm md:text-base mt-3">
                Explore our services of completed projects, showcasing our
                commitment to quality and innovation.
              </p>
              <Link
                href="/services"
                className="text-sm md:text-base mt-4 bg-[#171e3d] py-2 px-6 md:px-8 text-white hover:bg-[#0f1427] transition-colors duration-300"
              >
                Read more about our values
              </Link>
            </span>
          </div>
        </div>
        {/* Service 1 */}
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center mx-auto relative px-4 md:px-16 py-12 md:py-20 gap-8 md:gap-10">
          <div className="w-full lg:w-full lg:max-w-[25%] flex flex-col items-start justify-start">
            <h3 className="text-xl md:text-2xl uppercase font-medium">
              Unwavering Integrity:
            </h3>
            <hr className="w-4/5 border-[#171e3d7e] my-2" />
            <p className="text-sm md:text-sm leading-[160%] md:leading-[180%]">
              Transparent, ethical and dependable, our work ethics reflect a
              steady dedication towards building a property that stands the test
              of times and lasts for multiple generations. Homes are built with
              whole life earnings and they should be constructed with whole soul
              and dedication. We are creating homes with a purpose and we will
              not relent until we deliver the ultimate by today’s standards.
            </p>
          </div>
          {/* Automatic Image Carousel */}
          <div className="relative w-full lg:max-w-[75%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + carouselImages.length) % carouselImages.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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

        {/* Service 2 */}
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center mx-auto relative px-4 md:px-16 py-12 md:py-20 gap-8 md:gap-10">
          <div className="w-full lg:w-full lg:max-w-[25%] flex flex-col items-start justify-start">
            <h3 className="text-xl md:text-2xl uppercase font-medium">
              {" "}
              Effortless Experience
            </h3>
            <hr className="w-4/5 border-[#171e3d7e] my-2" />
            <p className="text-sm md:text-sm leading-[160%] md:leading-[180%]">
              Seamless, stress-free processes from start to finish, we ensure a
              steady support throughout your entire real estate deals,
              transactions, stamp registrations, paper work and documentations
              and all technicalities and legalities. We fail at nothing to
              fool-proof your dealings and reduce your burden of the paperwork.{" "}
              <br />
              Do the Shri Ganesha of your property ventures with us and discover
              a whole lot of premium services related to real estate as you
              enrich your real estate knowledge and expertise with us.
            </p>
          </div>
          {/* Automatic Image Carousel */}
          <div className="relative w-full lg:max-w-[75%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + carouselImages.length) % carouselImages.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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

        {/* Service 3 */}
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center mx-auto relative px-4 md:px-16 py-12 md:py-20 gap-8 md:gap-10">
          <div className="w-full lg:w-full lg:max-w-[25%] flex flex-col items-start justify-start">
            <h3 className="text-xl md:text-2xl uppercase font-medium">
              Designed for You
            </h3>
            <hr className="w-4/5 border-[#171e3d7e] my-2" />
            <p className="text-sm md:text-sm leading-[160%] md:leading-[180%]">
              Diligent, customer-first approach that translates into
              superiority, perfection and thoughtfulness. We create homes with a
              purpose, malls with a vision and we are into organizing the entire
              property gamut for you so that you are at ease and explore the
              real estate realm completely. You can gain knowledge of various
              real estate deals, buying and selling and leasing et.al with our
              expert counsellors and plan your next step accurately and wisely.
            </p>
          </div>
          {/* Automatic Image Carousel */}
          <div className="relative w-full lg:max-w-[75%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + carouselImages.length) % carouselImages.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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

        {/* Service 4 */}
        <div className="w-full h-full flex flex-col lg:flex-row items-start justify-center mx-auto relative px-4 md:px-16 py-12 md:py-20 gap-8 md:gap-10">
          <div className="w-full lg:w-full lg:max-w-[25%] flex flex-col items-start justify-start">
            <h3 className="text-xl md:text-2xl uppercase font-medium">
              Beyond a Home
            </h3>
            <hr className="w-4/5 border-[#171e3d7e] my-2" />
            <p className="text-sm md:text-sm leading-[160%] md:leading-[180%]">
              Spaces that enrich modern lifestyles are a prominent feature of
              our hallmark construction ethics. We build nothing that is short
              on any standards and ensure you the ultimate of the real estate
              market that’s available currently. Our real estate range varies
              from residential to commercial and also we lend our expertise into
              renting and leasing. So, with us you have nothing to worry about
              and you can freely take a deep dive into the vast expanse of the
              real estate industry.
            </p>
          </div>
          {/* Automatic Image Carousel */}
          <div className="relative w-full lg:max-w-[75%] lg:ml-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + carouselImages.length) % carouselImages.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
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

      <section
        className="w-full h-full flex flex-col bg-[url('/choose.jpeg')] bg-cover bg-center relative py-12 md:py-20"
        data-scroll-section
      >
        <span className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"></span>
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto z-[3] px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between pt-6 md:pt-10">
            <h3 className="w-full md:w-full md:max-w-[25%] text-white pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              WHY CHOOSE US?
            </h3>

            <span className="w-full md:w-full md:max-w-[75%] text-white flex flex-col justify-start items-start leading-[160%] md:leading-[180%]">
              <p className="text-lg font-medium">
                BS Group stands for an infallible tradition of superior construction, business ethics and technical
                innovation that has withstood the tests of time. Yat Bhavo Tat Bhavati – as you think so shall you become,
                and you think as per your living environment, we at BS Group refine your work and living spaces with an
                accord, technicality and aesthetic designs. We assure a smooth procedure of moving into your new home or
                niche and we bring an auspicious Shubharambham to your Gruhapravesham.
                <br />
                Join hands with us and step into an amazingly simpler, affordable and contemporary real estate journey.
                BS Group stands for a real estate sojourn that’s way ahead of its time and we intend to set the landmark
                milestone with you!
              </p>
            </span>
          </div>

          <div className="w-full md:w-full md:max-w-[75%] md:ml-auto flex flex-col gap-4 md:gap-6 pl-4 md:pl-10 py-8 md:py-10">
            {whyChooseItems.map((item, index) => {
              const isOpen = expandedWhy === index;
              return (
                <div
                  key={item.id}
                  className="w-full border-b border-white pb-4 md:pb-5 text-white"
                >
                  <button
                    type="button"
                    className="w-full flex flex-col md:flex-row gap-3 md:gap-6 items-start justify-between text-left focus:outline-none"
                    onClick={() =>
                      setExpandedWhy((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={isOpen}
                    aria-controls={`why-item-${item.id}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xl md:text-2xl font-bold">{item.id}</span>
                      <span className="text-lg md:text-2xl font-normal uppercase">
                        {item.title}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m-7-7h14" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div id={`why-item-${item.id}`} className="mt-3 md:mt-4 text-sm md:text-base space-y-3">
                      {item.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                      {item.list && (
                        <ul className="list-disc list-inside space-y-1">
                          {item.list.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.closing && <p>{item.closing}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="w-full h-full flex flex-col bg-white relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between mb-12">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              PROJECT CATEGORIES
            </h3>
            <h3 className="w-full md:w-full md:max-w-[75%] text-[#171e3d] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
              Find Your Signature Space
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {projectCategories.map((category, index) => (
              <div key={index} className="flex flex-col bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">{category.icon}</div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-4">{category.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories List Section */}
      <section className="w-full h-full flex flex-col bg-gray-50 relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between mb-8">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              CATEGORIES
            </h3>
            <div className="w-full md:w-full md:max-w-[75%]">
              <h4 className="text-xl md:text-2xl font-semibold text-[#171e3d] mb-6">Project Categories:</h4>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#3ad8ff] mt-1 text-xl">●</span>
                  <span className="text-base md:text-lg">Primary Residential Apartments (Sale)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3ad8ff] mt-1 text-xl">●</span>
                  <span className="text-base md:text-lg">Primary Residential Apartments (Rent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3ad8ff] mt-1 text-xl">●</span>
                  <span className="text-base md:text-lg">Secondary Homes & Farmhouses (Vacation/Investment)</span>
                </li>
              </ul>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Each project embodies elegance, smart design and quality craftsmanship.
              </p>
              <p className="text-[#171e3d] font-semibold text-lg md:text-xl">
                Find Your Signature Space — Homes that reflect ambition, style, and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full h-full flex flex-col bg-white relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between mb-12">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              FEATURED PROJECTS
            </h3>
            <h3 className="w-full md:w-full md:max-w-[75%] text-[#171e3d] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
              High-resolution visuals with overlay text
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {featuredProjects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-[320px] md:h-[420px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-sm md:text-base opacity-90">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Partner Section */}
      <section className="w-full h-full flex flex-col bg-gradient-to-br from-[#171e3d] via-[#1a2342] to-[#171e3d] relative py-12 md:py-20">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between">
            <h3 className="w-full md:w-full md:max-w-[25%] text-white pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              YOUR PARTNER
            </h3>
            <div className="w-full md:w-full md:max-w-[75%] text-white flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase text-white">
                Your Partner in Every Real Estate Milestone
              </h3>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                At BS Group Consultancy, every key you receive opens more than a door, it opens a new chapter of your life. We don't just deal in properties; we create experiences rooted in trust, precision and care.
              </p>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                Join us in redefining Mumbai's skyline one meaningful space at a time.
              </p>
              <div className="mt-6 p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white font-semibold text-lg md:text-xl">
                  Experience the pinnacle of real estate excellence. Partner with us to unlock Mumbai's most exclusive living spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full h-full flex flex-col lg:flex-row bg-[#171e3d] relative"
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
          <Image
            src="https://images.pexels.com/photos/33601908/pexels-photo-33601908.jpeg"
            alt="testimonial"
            width={1000}
            height={1000}
            className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
          />
        </div>
      </section>

      <section
        className="w-full h-full flex flex-col bg-white relative py-12 md:py-20"
        data-scroll-section
      >
        <div className="w-full h-full flex flex-col justify-center items-center max-w-[1400px] mx-auto z-[3] px-4 md:px-8">
          <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-10 items-start justify-between pt-6 md:pt-10">
            <h3 className="w-full md:w-full md:max-w-[25%] text-[#171e3d] pl-5 border-l-4 border-[#3ad8ff] text-lg md:text-xl font-medium">
              FAQ
            </h3>

            <span className="w-full md:w-full md:max-w-[75%] text-[#171e3d] flex flex-col justify-start items-start leading-[160%] md:leading-[180%]">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
                Frequently Asked Questions
              </h3>
              <p className="text-sm md:text-base text-gray-500 mt-3">
                Do you have questions about our residential complexes or
                services? Our FAQ section provides quick answers to common
                inquiries. If you need further assistance, contact our dedicated
                support team.
              </p>
            </span>
          </div>

          <div className="w-full md:w-full md:max-w-[75%] md:ml-auto flex flex-col gap-4 md:gap-6 pl-4 md:pl-10 py-6 md:py-10">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="w-full border-b border-gray-200 pb-6"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                  }
                  className="w-full flex flex-row gap-3 md:gap-5 items-start justify-start text-left p-3 md:p-4 -m-3 md:-m-4 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-lg md:text-xl text-gray-500 font-medium flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-base md:text-lg lg:text-xl font-normal text-[#171e3d] pr-2 md:pr-4 leading-tight">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedFAQ === faq.id ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedFAQ === faq.id ? "auto" : 0,
                        opacity: expandedFAQ === faq.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                </button>
              </div>
            ))}
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
                <Image
                  src="https://thebsgroup.in/wp-content/uploads/2025/04/TM-1-e1745239305497.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="md:w-[100px] md:h-[40px]"
                />
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md mt-4 md:mt-6 lg:mt-10">
                  Your trusted partner in property management. We transform your
                  space into the perfect home with our comprehensive services
                  and dedicated expertise.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-3 md:space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.596.596 1.297.894 2.14.894.894 0 1.596-.298 2.14-.894l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529zm7.118 0c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.596.596 1.297.894 2.14.894.894 0 1.596-.298 2.14-.894l1.529 1.297c-.757.933-1.908 1.529-3.205 1.529z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#3ad8ff] rounded-full flex items-center justify-center hover:bg-[#49e3f7] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                Navigation
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="flex md:flex-col flex-row gap-2">
                    <p className="text-gray-300 text-xs md:text-sm">
                      123 Property Lane
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Real Estate District
                    </p>
                    <p className="text-gray-300 text-xs md:text-sm">
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                <div className="flex items-center space-x-2 md:space-x-3">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-[#3ad8ff] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@BSGroupproperty.com"
                    className="text-gray-300 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                  >
                    info@BSGroupproperty.com
                  </a>
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#3ad8ff] transition-colors duration-300 text-xs md:text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
