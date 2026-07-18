"use client";

import React from "react";
import { ArrowUp, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navItems } from "@/data/navigation";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#121212] border-t border-white/[0.05] pt-16 pb-8 text-white overflow-hidden">
      {/* Soft Gold Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/images/logo.png"
              alt="SYS Creatives Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs mt-2">
            Capturing premium cinematic moments and broadcasting live stream memories for luxury weddings, corporate summits, and high-end events.
          </p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Youtube"
            >
              <Youtube className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6 relative inline-block">
            Quick Links
            <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-gold" />
          </h4>
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[#9CA3AF] text-sm hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6 relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-gold" />
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-[#9CA3AF] text-sm hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="h-1 w-1 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-6 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-8 h-[1px] bg-gold" />
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone className="h-4.5 w-4.5 text-gold mt-1 shrink-0" />
              <div className="text-sm">
                <p className="text-white">+91 8500622735</p>
                <p className="text-[#9CA3AF] text-xs">Mon - Sat: 9am - 10pm</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4.5 w-4.5 text-gold mt-1 shrink-0" />
              <p className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-300">
                yaswanth777ys@gmail.com
              </p>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4.5 w-4.5 text-gold mt-1 shrink-0" />
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Someswaram,Rayavarm
              </p>
            </li>
          </ul>
        </div>
      </Container>

      {/* Copyright & Scroll to Top */}
      <div className="border-t border-white/[0.05] pt-8 relative z-10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SYS Creatives. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#9CA3AF] hover:text-white uppercase tracking-widest transition-colors duration-300 cursor-pointer group"
          >
            Back to Top
            <span className="h-8 w-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white group-hover:border-gold group-hover:text-gold transition-all duration-300">
              <ArrowUp className="h-4 w-4 animate-[bounce_2s_infinite]" />
            </span>
          </button>
        </Container>
      </div>
    </footer>
  );
}
