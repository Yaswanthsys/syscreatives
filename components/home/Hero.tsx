"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
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

  // Comprehensive Services Data with descriptions, slugs, icons, and metrics
  const servicesData = [
    {
      id: "live-streaming",
      title: "Live Streaming",
      subtitle: "High-End Live Broadcasts",
      badge: "01. LIVE BROADCAST",
      icon: Radio,
      image: "/images/service-streaming.png",
      slug: "live-streaming",
      description: "Professional multi-camera live streaming solutions designed for corporate events, luxury weddings, and high-profile summits with zero latency and ultra-HD quality.",
      stats: { primary: "10Gbps", label: "Redundant Bandwidth", secondary: "4K UHD", label2: "Streaming Output" }
    },
    {
      id: "video-editing",
      title: "Video Editing",
      subtitle: "Cinematic Post-Production",
      badge: "02. CINEMATIC EDIT",
      icon: Film,
      image: "/images/service-editing.png",
      slug: "video-editing",
      description: "Expert color grading, sound design, and narrative-driven video editing that elevates raw footage into compelling cinematic brand stories and highlight reels.",
      stats: { primary: "10bit+", label: "Color Grading", secondary: "Dolby", label2: "Atmospheric Sound" }
    },
    {
      id: "web-development",
      title: "Web Development",
      subtitle: "Premium Digital Interfaces",
      badge: "03. PREMIUM CODE",
      icon: Code,
      image: "/images/service-web.png",
      slug: "web-development",
      description: "Custom headless web development utilizing modern React frameworks. We build ultra-fast, search-optimized websites with bespoke animations and fluid UX.",
      stats: { primary: "100ms", label: "Average Response", secondary: "100%", label2: "Lighthouse Performance" }
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "Luxury Brand Identity",
      badge: "04. VISUAL BRANDING",
      icon: Palette,
      image: "/images/service-design.png",
      slug: "graphic-design",
      description: "Comprehensive visual branding, mockup design, and logo identities that capture your brand essence and communicate premium value across all media assets.",
      stats: { primary: "3D", label: "Mockup Renders", secondary: "Premium", label2: "Print Finish Guides" }
    },
    {
      id: "qr-photo-scanning",
      title: "QR Photo Scanning",
      subtitle: "AI-Powered Photo Sharing",
      badge: "05. AI PHOTO SHARING",
      icon: QrCode,
      image: "/images/service-qr.png",
      slug: "qr-photo-scanning",
      description: "Real-time AI-powered photo scanning and sharing platforms for high-end events, allowing guests to instantly download their professional portraits via dynamic QR codes.",
      stats: { primary: "Instant", label: "QR Delivery", secondary: "AI", label2: "Face Recognition" }
    }
  ];



  // Start Autoplay Loop
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 5500); // 5.5s autoplay rotation
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
    startAutoplay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
    startAutoplay();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    startAutoplay();
  };

  // Helper to compute card offsets along a 3D circular Coverflow Cylinder
  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -2) diff += servicesData.length;
    if (diff > 2) diff -= servicesData.length;

    const isActive = diff === 0;
    
    let x = 0;
    let z = 0;
    let scale = 1;
    let opacity = 1;
    let rotateY = 0;
    let zIndex = 10;

    if (isMobile) {
      // Mobile optimization: Show only the active center card, hide other cards to prevent page overflow
      if (diff === 0) {
        x = 0;
        z = 0;
        scale = 1;
        opacity = 1;
        zIndex = 30;
        rotateY = 0;
      } else {
        x = 0;
        z = -100;
        scale = 0.85;
        opacity = 0;
        zIndex = 10;
        rotateY = 0;
      }
    } else {
      // Desktop full 3D Coverflow Cylinder layouts
      if (diff === 0) {
        x = 0;
        z = 120;
        scale = 1.05;
        opacity = 1;
        zIndex = 30;
        rotateY = 0;
      } else if (diff === 1) {
        x = 155;
        z = 0;
        scale = 0.82;
        opacity = 0.65;
        zIndex = 20;
        rotateY = -35;
      } else if (diff === -1) {
        x = -155;
        z = 0;
        scale = 0.82;
        opacity = 0.65;
        zIndex = 20;
        rotateY = 35;
      } else if (diff === 2) {
        x = 270;
        z = -100;
        scale = 0.65;
        opacity = 0.25;
        zIndex = 10;
        rotateY = -55;
      } else if (diff === -2) {
        x = -270;
        z = -100;
        scale = 0.65;
        opacity = 0.25;
        zIndex = 10;
        rotateY = 55;
      }
    }

    return { x, z, scale, opacity, rotateY, zIndex, isActive };
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-48 lg:pb-36 overflow-hidden bg-[#0F0F0F]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center h-full w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col text-left">


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 animate-gradient"
          >
            Where Creativity.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-white">
              Meets Technology.
            </span>
          </motion.h1>

          {/* dynamic Service detail card info */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 backdrop-blur-md max-w-xl mb-8"
          >
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] block mb-2">
              {servicesData[activeIndex].badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {servicesData[activeIndex].subtitle}
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
              {servicesData[activeIndex].description}
            </p>
            
            {/* Dynamic metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-4">
              <div>
                <span className="text-lg font-extrabold text-white block">
                  {servicesData[activeIndex].stats.primary}
                </span>
                <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                  {servicesData[activeIndex].stats.label}
                </span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white block">
                  {servicesData[activeIndex].stats.secondary}
                </span>
                <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                  {servicesData[activeIndex].stats.label2}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Specialties navigation tab buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-2.5 max-w-xl mb-8"
          >
            {servicesData.map((spec, idx) => {
              const Icon = spec.icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={spec.id}
                  onClick={() => handleManualSelect(idx)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                      : "bg-white/[0.02] border-white/[0.08] text-[#9CA3AF] hover:bg-white/[0.05] hover:border-white/[0.15] hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-gold" : "text-[#9CA3AF]"}`} />
                  <span className="text-xs font-semibold tracking-wide">{spec.title}</span>
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

        {/* Right Column: 3D Coverflow Carousel Showcase */}
        <div className="lg:col-span-6 relative flex flex-col justify-center items-center h-[450px] sm:h-[530px] w-full">
          
          {/* True 3D spatial perspective wrapper */}
          <div 
            className="relative w-full max-w-[520px] h-[360px] flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {servicesData.map((card, idx) => {
                const { x, z, scale, opacity, rotateY, zIndex, isActive } = getCardStyle(idx);
                return (
                  <motion.div
                    key={card.id}
                    animate={{
                      x,
                      z,
                      scale,
                      opacity,
                      rotateY,
                      zIndex
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] // Ultra-smooth cubic-bezier deceleration
                    }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden"
                    }}
                    onClick={() => handleManualSelect(idx)}
                    className={`absolute w-[240px] sm:w-[270px] aspect-[3/4] rounded-2xl overflow-hidden border bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group cursor-pointer ${
                      isActive 
                        ? "border-gold/60 ring-2 ring-gold/15" 
                        : "border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <Link href={`/services/${card.slug}`} className="block w-full h-full" onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault(); // Click selects card first, double-click or active card link navigates
                      }
                    }}>
                      {/* Image background with zoom on hover */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                        style={{ backgroundImage: `url('${card.image}')` }} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                      
                      {/* Card Content overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[8px] text-gold font-bold uppercase tracking-wider block mb-1">
                          {card.badge}
                        </span>
                        <h4 className="text-white text-sm font-bold tracking-wide">
                          {card.title}
                        </h4>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 3D coverflow controls (Next/Prev buttons & Pagination indicators) */}
          <div className="flex items-center gap-6 mt-6 z-40">
            <button 
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9CA3AF] hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            
            {/* Pagination Lines */}
            <div className="flex items-center gap-1.5">
              {servicesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManualSelect(i)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-gold" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#9CA3AF] hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      </Container>

    </section>
  );
}
