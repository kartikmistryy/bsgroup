"use client";
import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/properties";
import LeadGateModal from "../components/LeadGateModal";

export default function PropertiesPage() {
  return (
    <div className="w-full h-full flex flex-col relative">
      <section className="w-full h-full flex flex-col relative bg-[url('/header.jpeg')] bg-cover bg-center min-h-[60vh] md:items-start md:justify-end items-center justify-center px-4 md:px-20 pb-16">
        <h1 className="text-white text-[40px] md:text-[72px] lg:text-[90px] font-bold header uppercase tracking-wider">
          Properties
        </h1>
      </section>

      {/* Filters row placeholder (static chips for now) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="flex flex-wrap items-center gap-3">
          {[
            "All Properties",
            "For Sale",
            "For Rent",
            "Bangkok",
            "Outer Bangkok",
            "Homes",
            "Condo / Apartment",
            "Land Plots",
          ].map((label, idx) => (
            <button
              key={idx}
              className={`${idx === 0 ? "bg-[#171e3d] text-white" : "bg-gray-100 text-[#171e3d]"} px-4 py-2 rounded-md text-sm`}
            >
              {label}
            </button>
          ))}
          <button className="text-sm text-[#171e3d] underline ml-auto">Clear Filters</button>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p) => (
            <article key={p.slug} className="flex flex-col">
              <Link href={`/properties/${p.slug}`} className="block">
                <div className="w-full h-[240px] md:h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.purpose}</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.city}</span>
                <span className="px-3 py-1 rounded-md bg-gray-100 text-sm">{p.type}</span>
              </div>

              <Link href={`/properties/${p.slug}`} className="mt-3">
                <h3 className="text-[#171e3d] text-xl md:text-2xl font-semibold uppercase tracking-wide">
                  {p.title}
                </h3>
              </Link>
              <div className="text-[#171e3d] text-2xl font-semibold mt-1">
                ฿{p.price.toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm mt-2">{p.address}</div>

              {/* Quick facts */}
              <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4z"/></svg>
                  {p.areaSqm} sqm
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10h10v8H7z"/></svg>
                  {p.beds} bed, {p.baths} bath
                </span>
              </div>
              <div className="text-gray-600 text-sm mt-3 flex items-center gap-2">
                {p.features.slice(0, 3).join(", ")}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead gate modal after 50% scroll */}
      <LeadGateModal mode="scroll50" />
    </div>
  );
}


