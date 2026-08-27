"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking navigation links
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
    }
    
    // If not on homepage or target is outside, route with hash
    if (href.startsWith("#")) {
      router.push(`/${href}`);
    } else {
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0F0F0F]/80 backdrop-blur-md border-b border-white/[0.06] py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="SYS Creatives Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="relative text-sm text-[#9CA3AF] hover:text-white transition-colors duration-300 py-2 group font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button onClick={() => handleLinkClick("#contact")}>
            <Button variant="gold" size="sm">
              Request Service
            </Button>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gold transition-colors duration-300 focus:outline-none p-1 z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-[#0F0F0F]/98 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-6 mb-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="text-2xl font-bold text-[#9CA3AF] hover:text-white hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navItems.length * 0.05 }}
            >
              <button onClick={() => handleLinkClick("#contact")}>
                <Button variant="gold" size="lg">
                  Request Service
                </Button>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
