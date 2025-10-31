import Image from "next/image";
import Link from "next/link";
import PropertyHeroCarousel from "./PropertyHeroCarousel";
import { getPropertyBySlug, properties } from "../../data/properties";
import LeadGateModal from "../../components/LeadGateModal";

export default function PropertyDetail({ params }) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return (
      <div className="max-w-[1000px] mx-auto px-4 py-20">
        <h1 className="text-2xl font-semibold text-[#171e3d]">Property not found</h1>
        <Link href="/properties" className="text-blue-500 underline mt-4 inline-block">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header carousel */}
      <section className="w-full relative">
        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative">
          <PropertyHeroCarousel images={[property.image, ...property.gallery]} />
          <span className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-[#171e3d] via-[#171e3db3] to-transparent"></span>
        </div>
      </section>

      {/* Title */}
      <section className="w-full bg-[#171e3d]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 text-white grid grid-cols-1">
          <div>
            <Link href="/properties" className="text-sm underline">Back to Properties</Link>
            <h1 className="text-3xl md:text-5xl font-semibold mt-2 uppercase">{property.title}</h1>
            <div className="text-2xl md:text-3xl mt-2">฿{property.price.toLocaleString()}</div>
            <div className="text-gray-300 mt-2">{property.address}</div>
          </div>
        </div>
      </section>

      {/* Key facts and features - horizontal grid */}
      <section className="w-full bg-[#171e3d]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-5 text-white">
            <h4 className="text-lg font-semibold mb-3">Key Facts</h4>
            <ul className="text-gray-200 text-sm grid grid-cols-2 gap-y-2">
              <li>Purpose: {property.purpose}</li>
              <li>Type: {property.type}</li>
              <li>Category: {property.category}</li>
              <li>Area: {property.areaSqm} sqm</li>
              <li>Bedrooms: {property.beds}</li>
              <li>Bathrooms: {property.baths}</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-5 text-white">
            <h4 className="text-lg font-semibold mb-3">Features</h4>
            <div className="flex flex-wrap gap-2">
              {property.features.map((f) => (
                <span key={f} className="px-3 py-1 rounded-md bg-white/20 text-sm">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-[#171e3d] mb-2">Overview</h3>
            <p className="text-gray-600">Beautiful property located in {property.city}. Featuring {property.beds} bedrooms, {property.baths} bathrooms and {property.areaSqm} sqm of living space.</p>
          </div>

          {/* Additional content */}
          <div className="space-y-10 mt-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171e3d] mb-3">Discover the Comfort and Luxury</h3>
              <p className="text-gray-600 leading-relaxed">
                This residence blends sophisticated design with state-of-the-art amenities. Large open floor plans,
                abundant natural light, and premium finishes create a refined yet comfortable living experience.
                Every space has been thoughtfully planned to support relaxation, productivity, and effortless hosting.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The architecture focuses on timeless aesthetics and everyday practicality, offering the perfect
                environment for both quiet moments and social gatherings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171e3d] mb-3">Air Cleaning</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced air purification systems remove pollutants and allergens to maintain a clean and healthy
                indoor environment for residents.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-1">
                <li>Cleaner air with removal of up to 99% of particulates</li>
                <li>Energy‑efficient operation and low noise output</li>
                <li>Allergy relief from dust, pollen, and pet dander</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171e3d] mb-3">Ventilation & Heating</h3>
              <p className="text-gray-600 leading-relaxed">
                State‑of‑the‑art ventilation ensures consistent airflow and excellent air quality year‑round. Integrated
                heating provides quick, even warmth with energy‑saving performance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171e3d] mb-3">Water & Power Supply</h3>
              <p className="text-gray-600 leading-relaxed">
                High‑quality filtration delivers clean, safe drinking water, while reliable power infrastructure supports
                uninterrupted living with modern efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Removed sidebar; features shown above next to key facts */}
      </section>

      {/* Similar Properties */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 pb-6 pt-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-6 bg-[#3ad8ff]"></span>
          <h3 className="text-xl md:text-2xl font-semibold text-[#171e3d]">Similar Properties</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.filter(p => p.slug !== property.slug).slice(0,3).map((p) => (
            <article key={p.slug} className="flex flex-col">
              <Link href={`/properties/${p.slug}`} className="block">
                <div className="w-full h-[220px] rounded-lg overflow-hidden">
                  <Image src={p.image} alt={p.title} width={800} height={600} className="w-full h-full object-cover" />
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.purpose}</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.city}</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.type}</span>
              </div>
              <Link href={`/properties/${p.slug}`} className="mt-2">
                <h4 className="text-[#171e3d] text-lg md:text-xl font-semibold uppercase tracking-wide">{p.title}</h4>
              </Link>
              <div className="text-[#171e3d] text-xl font-semibold mt-1">฿{p.price.toLocaleString()}</div>
              <div className="text-gray-600 text-sm mt-1">{p.address}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form at the end */}
      <section className="w-full h-full flex flex-col lg:flex-row justify-between bg-gray-50 py-12 md:py-20 px-5 max-w-[1400px] mx-auto">
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 flex flex-col justify-start">
          <div className="max-w-md">
            <h2 className="text-3xl header md:text-4xl font-bold text-[#171e3d] mb-6">Interested in this property?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Send us a message and our team will get back to you shortly with more details and a personalized walkthrough.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-20 mt-12 lg:mt-0">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl header md:text-3xl font-bold text-[#171e3d] mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ad8ff] focus:border-transparent transition-all duration-300 resize-none" />
              </div>
              <button type="submit" className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-[#3ad8ff] hover:bg-[#49e3f7] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      {/* Immediate lead gate on detail page */}
      <LeadGateModal mode="immediate" />
    </div>
  );
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}


