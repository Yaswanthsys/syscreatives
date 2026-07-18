"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds slide time
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative py-20 sm:py-24 bg-[#0F0F0F] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What Our Clients Say About Us"
          alignment="center"
        />

        <div className="max-w-4xl mx-auto relative px-4 sm:px-10">
          
          {/* Quote mark decoration */}
          <div className="absolute top-[-30px] left-2 text-gold/10 pointer-events-none select-none">
            <Quote className="h-28 w-28 fill-current" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <Card className="p-8 sm:p-12 md:p-16 border border-white/[0.08] relative z-10 flex flex-col gap-6 text-left">
                {/* Content Column */}
                <div className="flex-grow">
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: activeTestimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-[#E5E7EB] text-sm sm:text-base md:text-lg leading-relaxed font-medium italic mb-6">
                    "{activeTestimonial.review}"
                  </blockquote>

                  {/* Client Info */}
                  <div>
                    <cite className="not-italic text-white text-base font-bold block">
                      {activeTestimonial.name}
                    </cite>
                    <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider block mt-1">
                      {activeTestimonial.role} &bull; <span className="text-gold">{activeTestimonial.company}</span>
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10 relative z-20">
            <button
              onClick={handlePrev}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? "w-8 bg-gold" : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
