"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ZoomIn, X, Calendar, User, Tag } from "lucide-react";
import { portfolioItems, portfolioCategories, PortfolioItem } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filter items based on active tag
  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="relative py-20 sm:py-24 bg-[#0F0F0F] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-gold/2 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          title="Portfolio"
          subtitle="Our Featured Masterpieces"
          alignment="center"
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeFilter === category
                  ? "bg-gold text-black border-gold shadow-[0_0_15px_rgba(212,175,55,0.25)] font-semibold"
                  : "bg-white/[0.02] text-[#9CA3AF] border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D]/50 aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] text-gold font-bold uppercase tracking-wider">
                    <Tag className="h-2.5 w-2.5" />
                    {item.category}
                  </span>
                </div>

                {/* Play icon indicator for videos */}
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="h-14 w-14 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 opacity-80 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </motion.div>
                  </div>
                )}

                {/* Card Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-gold/80" />
                      {item.client}
                    </span>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest pointer-events-none">
                    <ZoomIn className="h-4 w-4" />
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Details Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md"
            >
              {/* Close click blocker */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)} />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[#121212] border border-white/[0.08] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl flex flex-col lg:flex-row"
              >
                {/* Media Side (Left) */}
                <div className="lg:w-2/3 bg-black relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:h-auto select-none">
                  {selectedItem.videoUrl ? (
                    <video
                      src={selectedItem.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-contain max-h-[60vh] lg:max-h-[80vh]"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Meta Side (Right) */}
                <div className="lg:w-1/3 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#151515]">
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] text-gold font-bold uppercase tracking-wider">
                        {selectedItem.category}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                      {selectedItem.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>

                    {/* Metadata Items */}
                    <div className="flex flex-col gap-4 border-t border-white/[0.05] pt-6 mb-8">
                      {selectedItem.client && (
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] text-gold rounded-lg">
                            <User className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <span className="text-[10px] text-[#9CA3AF] block font-semibold uppercase tracking-wider">Client</span>
                            <span className="text-sm font-bold text-white">{selectedItem.client}</span>
                          </div>
                        </div>
                      )}

                      {selectedItem.date && (
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] text-gold rounded-lg">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <span className="text-[10px] text-[#9CA3AF] block font-semibold uppercase tracking-wider">Date</span>
                            <span className="text-sm font-bold text-white">{selectedItem.date}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 mt-6">
                    <a href="#contact" onClick={() => setSelectedItem(null)}>
                      <Button variant="gold" className="w-full">
                        Inquire About This Service
                      </Button>
                    </a>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedItem(null)}>
                      Close Project View
                    </Button>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:text-gold transition-colors duration-300 z-20 cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
