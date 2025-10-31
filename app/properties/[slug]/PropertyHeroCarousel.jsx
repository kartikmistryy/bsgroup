"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PropertyHeroCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <Image src={src} alt={`slide-${i}`} fill priority className="object-cover" />
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${current === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}


