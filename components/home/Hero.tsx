"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Radio, 
  Film, 
  Code, 
  Palette, 
  QrCode, 
  Users, 
  Star, 
  Clock, 
  Globe 
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  // Specialties data with matching icons
  const specialties = [
    { name: "Live Streaming", icon: Radio, slug: "live-streaming" },
    { name: "Video Editing", icon: Film, slug: "video-editing" },
    { name: "Web Development", icon: Code, slug: "web-development" },
    { name: "Graphic Design", icon: Palette, slug: "graphic-design" },
    { name: "QR Photo Scanning", icon: QrCode, slug: "qr-photo-scanning" }
  ];

  // Carousel card configs
  const carouselCards = [
    {
      id: "live-streaming",
      title: "Live Streaming",
      badge: "01. LIVE STREAMING",
      image: "/images/service-streaming.png",
      slug: "live-streaming"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      badge: "02. CINEMATIC EDIT",
      image: "/images/service-editing.png",
      slug: "video-editing"
    },
    {
      id: "web-development",
      title: "Web Development",
      badge: "03. WEB DEVELOPMENT",
      image: "/images/service-web.png",
      slug: "web-development"
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      badge: "04. VISUAL BRANDING",
      image: "/images/service-design.png",
      slug: "graphic-design"
    },
    {
      id: "qr-photo-scanning",
      title: "QR Photo Scanning",
      badge: "05. QR PHOTO SCANNING",
      image: "/images/service-qr.png",
      slug: "qr-photo-scanning"
    }
  ];

  // Matching 3D gear objects to display at the bottom
  const gearElements = [
    { image: "/images/element-camera.png", name: "Broadcast Camera" },
    { image: "/images/element-headphones.png", name: "Studio Headphones" },
    { image: "/images/element-keyboard.png", name: "Mechanical Keyboard" },
    { image: "/images/element-stylus.png", name: "Stylus Pen" },
    { image: "/images/element-phone.png", name: "Smartphone" }
  ];

  // Stats bar data
  const statsData = [
    { value: "150+", label: "Projects Completed", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "5+", label: "Years Experience", icon: Clock },
    { value: "24/7", label: "Support Available", icon: Globe }
  ];

  // Start Autoplay Loop (Right to Left rotation)
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4500); // Rotate every 4.5 seconds
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    startAutoplay(); // Reset autoplay timer on click
  };

  // Helper to compute card offsets along a 3D circular ellipse
  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -2) diff += 5;
    if (diff > 2) diff -= 5;

    const isActive = diff === 0;
    
    let x = 0;
    let y = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let rotateY = 0;

    // Ellipse layouts
    if (diff === 0) {
      x = 0;
      y = 0;
      scale = 1.05;
      opacity = 1;
      zIndex = 30;
    } else if (diff === 1) {
      x = isMobile ? 80 : 130;
      y = isMobile ? -5 : -10;
      scale = isMobile ? 0.85 : 0.82;
      opacity = 0.7;
      zIndex = 20;
      rotateY = -15;
    } else if (diff === -1) {
      x = isMobile ? -80 : -130;
      y = isMobile ? -5 : -10;
      scale = isMobile ? 0.85 : 0.82;
      opacity = 0.7;
      zIndex = 20;
      rotateY = 15;
    } else if (diff === 2) {
      x = isMobile ? 140 : 220;
      y = isMobile ? -10 : -25;
      scale = isMobile ? 0.7 : 0.65;
      opacity = 0.35;
      zIndex = 10;
      rotateY = -30;
    } else if (diff === -2) {
      x = isMobile ? -140 : -220;
      y = isMobile ? -10 : -25;
      scale = isMobile ? 0.7 : 0.65;
      opacity = 0.35;
      zIndex = 10;
      rotateY = 30;
    }

    return { x, y, scale, opacity, zIndex, rotateY, isActive };
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-36 overflow-hidden bg-[#0F0F0F]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-6"
          >
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-[0.2em] font-sans">
              Creative Solutions. Technical Excellence.
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Where Creativity.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-white">
              Meets Technology.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#9CA3AF] max-w-xl leading-relaxed mb-8"
          >
            Professional media solutions designed for high-end events. We combine cinematic post-production with state-of-the-art live broadcasting and interactive design.
          </motion.p>

          {/* Specialization Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 max-w-xl mb-10"
          >
            {specialties.map((spec, idx) => {
              const Icon = spec.icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={spec.name}
                  onClick={() => handleManualSelect(idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                      : "bg-white/[0.02] border-white/[0.08] text-[#9CA3AF] hover:bg-white/[0.05] hover:border-white/[0.15] hover:text-white"
                  }`}
                >
                  <Icon className={`h-4.5 w-4.5 ${isActive ? "text-gold" : "text-[#9CA3AF]"}`} />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">{spec.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a href="#contact">
              <Button variant="gold" size="lg" className="group shadow-lg shadow-gold/10">
                <span>Request Service</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-gold transition-colors duration-300"
            >
              <span>Explore Services</span>
              <span className="h-7 w-7 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors duration-300">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: 3D Stage Carousel */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[520px] w-full">
          {/* Main Stage Setup */}
          <div className="relative w-full max-w-[500px] h-full flex flex-col items-center justify-center perspective-[1000px]">
            
            {/* 1. Backdrop Pedestal Panel with Glowing Logo */}
            <div className="absolute top-[8%] w-[280px] h-[310px] rounded-3xl border border-white/[0.08] bg-[#161616]/90 backdrop-blur-md shadow-2xl flex flex-col items-center justify-start pt-6 z-0 overflow-hidden">
              {/* Radial gold neon glow behind logo */}
              <div className="absolute top-[-10%] w-[150px] h-[150px] rounded-full bg-gold/10 blur-[30px] pointer-events-none" />
              {/* Gold vertical bar accents on left/right */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              
              <div className="relative z-10 flex flex-col items-center">
                {/* Logo graphics */}
                <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-3">
                  <span className="text-gold font-black text-xl tracking-tighter">S</span>
                </div>
                <h3 className="text-white text-base font-extrabold tracking-[0.2em] font-sans">SYS CREATIVES</h3>
                <p className="text-[9px] text-[#9CA3AF] uppercase tracking-widest mt-1">Studio Stage</p>
              </div>
            </div>

            {/* 2. Circular Rotating Service Cards */}
            <div className="absolute top-[35%] w-full h-[220px] flex items-center justify-center z-10">
              {carouselCards.map((card, idx) => {
                const { x, y, scale, opacity, zIndex, rotateY, isActive } = getCardStyle(idx);
                return (
                  <motion.div
                    key={card.id}
                    animate={{
                      x,
                      y,
                      scale,
                      opacity,
                      zIndex,
                      rotateY
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 18
                    }}
                    onClick={() => handleManualSelect(idx)}
                    className={`absolute w-[180px] aspect-[4/3] rounded-2xl overflow-hidden border bg-[#1D1D1D]/90 backdrop-blur-md shadow-2xl group cursor-pointer ${
                      isActive 
                        ? "border-gold/50 ring-1 ring-gold/20" 
                        : "border-white/[0.08] hover:border-white/20"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Link href={`/services/${card.slug}`} className="block w-full h-full" onClick={(e) => {
                      if (!isActive) {
                        // Prevent navigation if card is not active front-center (let click select it first)
                        e.preventDefault();
                      }
                    }}>
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                        style={{ backgroundImage: `url('${card.image}')` }} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="text-[8px] text-gold font-bold uppercase tracking-wider block mb-0.5">{card.badge}</span>
                        <h4 className="text-white text-[11px] font-bold tracking-wide">{card.title}</h4>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* 3. Circular Podium base */}
            <div className="absolute bottom-[10%] w-[340px] h-[34px] rounded-full bg-[#1C1C1C] border border-white/[0.08] flex items-center justify-center z-5 shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              {/* Outer gold neon ring */}
              <div className="absolute inset-[-4px] rounded-full border border-gold/15 blur-[2px] animate-pulse-slow" />
              {/* Inner dark pedestal */}
              <div className="w-[310px] h-[22px] rounded-full bg-[#121212] border border-white/[0.05] shadow-inner" />
            </div>

            {/* 4. Dynamic Gear Object at the bottom */}
            <div className="absolute bottom-[2%] w-[160px] h-[160px] z-20 pointer-events-none flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={gearElements[activeIndex].image}
                  alt={gearElements[activeIndex].name}
                  initial={{ opacity: 0, y: 25, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(212,175,55,0.2)]"
                />
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </Container>

      {/* Bottom Horizontal Stats Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full bg-[#181818]/60 backdrop-blur-md border border-white/[0.06] rounded-2xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pointer-events-auto shadow-2xl"
          >
            {statsData.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-4 text-left w-full md:w-auto md:justify-center">
                  <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <StatIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#9CA3AF] font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </div>

    </section>
  );
}
