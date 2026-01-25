"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const yBackend = useTransform(scrollY, [0, 500], [0, 150]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const textScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <motion.div 
        style={{ y: yBackend }}
        className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none"
      >
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-r from-purple-900/40 to-accent-dark/30 blur-[100px] animate-pulse" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
           style={{ opacity: textOpacity, scale: textScale }}
           initial={{ opacity: 0, filter: "blur(20px)", scale: 1.2 }}
           animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
           transition={{ duration: 2.5, ease: "circOut" }}
           className="mb-8"
        >
          <h1 className="font-heading text-6xl md:text-9xl text-white tracking-widest uppercase">
            Nailovy
          </h1>
          <p className="font-body text-sm md:text-base text-gray-400 mt-4 tracking-[0.2em] uppercase">
            Luxury at Your Fingertips
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link
            href="https://api.whatsapp.com/send?phone=917075839900" 
            target="_blank"
            rel="noopener noreferrer"     
            className="px-8 py-3 bg-white/5 border border-white/20 rounded-full text-sm uppercase tracking-wider backdrop-blur-sm text-white hover:bg-white/10 hover:border-accent transition-all duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-24 md:bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
}
