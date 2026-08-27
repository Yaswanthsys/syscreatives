"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye, Heart, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type TabType = "story" | "mission" | "vision" | "values";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("story");

  const tabsContent = {
    story: {
      title: "Our Story",
      lead: "From a small production team to a full-service creative agency.",
      paragraphs: [
        "Founded in 2022, SYS Creatives started with a simple goal: to make premium live streaming accessible without sacrificing cinematic production quality. We noticed a major gap between standard static streaming feeds and high-budget television broadcasts.",
        "By merging modern cine gear, robust network systems, and advanced post-production editing, we built a hybrid studio that helps clients broadcast events beautifully. Today, we are trusted by luxury brands, wedding couples, and corporations globally."
      ],
      icon: Compass
    },
    mission: {
      title: "Our Mission",
      lead: "Bridging physical events and global audiences seamlessly.",
      paragraphs: [
        "Our mission is to craft digital experiences that capture the true emotion and prestige of physical events. We believe that distance shouldn't compromise connection.",
        "Whether it is an intimate wedding in the hills or a global developer conference, our systems ensure every frame is delivered with crystal-clear fidelity and seamless streaming stability."
      ],
      icon: Target
    },
    vision: {
      title: "Our Vision",
      lead: "Pioneering the future of interactive event media.",
      paragraphs: [
        "We envision a world where live-streamed events are as immersive and interactive as attending in person. We are actively integrating AI-assisted photography, real-time overlays, and spatial audio to make this a reality.",
        "Our investments in AI face recognition QR galleries represent the first step in creating frictionless sharing spaces for event attendees."
      ],
      icon: Eye
    },
    values: {
      title: "Our Values",
      lead: "Built on precision, creativity, and absolute trust.",
      paragraphs: [
        "Uncompromised Quality: We never cut corners on equipment or processing nodes. Reliability: We run redundant systems for every single live stream. Creative Excellence: Every design, video cut, and color grade is customized to the brand.",
        "Client Partnership: We treat your event as our own, providing dedicated technical support from early rehearsals to the final wrap."
      ],
      icon: Heart
    }
  };

  const timelineMilestones = [
    { year: "2022", title: "SYS Creatives Founded", desc: "Established a boutique studio specializing in high-end event graphics and local multi-camera broadcasts." },
    { year: "2023", title: "Broadcast & Motion Upgrade", desc: "Pioneered cellular bonded live stream arrays and cinema-grade video editing workflows." },
    { year: "2024", title: "AI Photo Scanning Launch", desc: "Introduced custom AI face-recognition QR photo scanning systems for instant guest media sharing." },
    { year: "2025", title: "Unified Digital Platform", desc: "Launched the unified SYS Creatives platform, combining elite live production, branding design, and web development." }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#181818] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-[5%] w-[350px] h-[350px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          title="About SYS Creatives"
          subtitle="Behind The Lenses & Broadcasts"
          alignment="left"
        />

        {/* Story Tab and Image Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-7">
            {/* Tabs List */}
            <div className="flex flex-wrap border-b border-white/[0.08] mb-8 gap-2">
              {(Object.keys(tabsContent) as TabType[]).map((tabKey) => {
                const tab = tabsContent[tabKey];
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`px-6 py-4 text-sm font-bold uppercase tracking-wider relative cursor-pointer transition-colors duration-300 ${
                      activeTab === tabKey ? "text-gold" : "text-[#9CA3AF] hover:text-white"
                    }`}
                  >
                    {tab.title}
                    {activeTab === tabKey && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[250px] text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/15">
                      {React.createElement(tabsContent[activeTab].icon, { className: "h-5 w-5" })}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {tabsContent[activeTab].lead}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                    {tabsContent[activeTab].paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Simple Centered Flat Logo */}
          <div className="lg:col-span-5 flex items-center justify-center min-h-[350px] sm:min-h-[450px] p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] flex items-center justify-center"
            >
              <img
                src="/images/about-logo-flat.png"
                alt="SYS Creatives Logo"
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </motion.div>
          </div>

        </div>

        {/* Timeline Layout */}
        <div className="border-t border-white/[0.05] pt-20">
          <SectionTitle
            title="Our Milestones"
            subtitle="The Journey of Innovation"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-8">
            {timelineMilestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col gap-3 group"
              >
                {/* Year display with gold border line */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-gold tracking-tight">{milestone.year}</span>
                  <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent flex-grow" />
                </div>
                {/* Text detail */}
                <h4 className="text-white font-bold text-base group-hover:text-gold transition-colors duration-300">
                  {milestone.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
