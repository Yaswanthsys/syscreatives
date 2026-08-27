"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  // For mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 30; // Max 30px offset
      const y = (clientY - window.innerHeight / 2) / 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const specialties = ["Live Streaming", "Video Editing", "Web Development", "Graphic Design", "QR Photo Scanning"];

  // Floating animations configuration
  const floatTransition = (duration: number, delay: number) => ({
    duration,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
    delay,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0F0F0F]"
    >
      {/* Cinematic Luxury Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Diagonal luxury gradient beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[350px] bg-gradient-to-tr from-gold/[0.02] via-transparent to-white/[0.01] rotate-12 pointer-events-none blur-3xl" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full">
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Where Creativity.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-white">
              Meets Technology.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed mb-8"
          >
            Professional media solutions designed for high-end events. We combine cinematic post-production with state-of-the-art live broadcasting and interactive design.
          </motion.p>

          {/* Specialization Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 max-w-xl mb-10"
          >
            {specialties.map((spec) => (
              <div key={spec} className="flex items-center gap-2.5 text-[#E5E7EB] text-sm font-medium">
                <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
           
            <a href="#contact">
              <Button variant="gold" size="lg" className="group">
                Request Service
                <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#portfolio">
              
            </a>
          </motion.div>
        </div>

        {/* Right Side: Layered Parallax Cards */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[400px] sm:h-[500px]">
          <motion.div
            className="relative w-full max-w-[450px] h-full"
            style={{
              x: isMobile ? 0 : springX,
              y: isMobile ? 0 : springY,
            }}
          >
            {/* 1. Live Streaming Card (Top-Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={floatTransition(5, 0)}
              className="absolute top-[2%] left-[2%] w-[40%] aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D]/50 backdrop-blur-md shadow-2xl z-10 group cursor-pointer hover:border-gold/50"
            >
              <Link href="/services/live-streaming" className="block w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('/images/service-streaming.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">01. Live Broadcast</span>
                  <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">Live Streaming</h4>
                </div>
              </Link>
            </motion.div>

            {/* 2. Video Editing Card (Top-Right) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={floatTransition(6, 0.5)}
              className="absolute top-[10%] right-[2%] w-[38%] aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D]/50 backdrop-blur-md shadow-2xl z-10 group cursor-pointer hover:border-gold/50"
            >
              <Link href="/services/video-editing" className="block w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('/images/service-editing.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">02. Cinematic Edit</span>
                  <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">Video Editing</h4>
                </div>
              </Link>
            </motion.div>

            {/* 3. Web Development Card (Center) */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={floatTransition(5.5, 0.8)}
              className="absolute top-[28%] left-[20%] w-[44%] aspect-square rounded-2xl overflow-hidden border border-gold/25 bg-[#1D1D1D]/70 backdrop-blur-md shadow-3xl z-30 group animate-pulse-slow cursor-pointer hover:border-gold"
            >
              <Link href="/services/web-development" className="block w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('/images/service-web.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">03. Premium Code</span>
                  <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">Web Development</h4>
                </div>
              </Link>
            </motion.div>

            {/* 4. Graphic Design Card (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={floatTransition(5.2, 1.2)}
              className="absolute bottom-[10%] left-[2%] w-[38%] aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D]/50 backdrop-blur-md shadow-2xl z-10 group cursor-pointer hover:border-gold/50"
            >
              <Link href="/services/graphic-design" className="block w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('/images/service-design.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">04. Visual Branding</span>
                  <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">Graphic Design</h4>
                </div>
              </Link>
            </motion.div>

            {/* 5. QR Photo Scanning Card (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={floatTransition(4.8, 1.5)}
              className="absolute bottom-[2%] right-[2%] w-[40%] aspect-square rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D]/50 backdrop-blur-md shadow-2xl z-20 group cursor-pointer hover:border-gold/50"
            >
              <Link href="/services/qr-photo-scanning" className="block w-full h-full">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('/images/service-qr.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">05. AI Photo Sharing</span>
                  <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">QR Photo Scanning</h4>
                </div>
              </Link>
            </motion.div>

            {/* Central Glow Element behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gold/10 blur-[80px] z-0 pointer-events-none" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
