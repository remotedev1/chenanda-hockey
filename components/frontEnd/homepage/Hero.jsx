"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <span className="absolute inset-0 bg-black/10 z-10"></span>
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative top-10 z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Chenanda Okka</h1>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link
            href="/about-us"
            className="cursor-pointer bg-yellow-400 rounded-full text-black text-base p-5 py-3 m-5 z-10"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
