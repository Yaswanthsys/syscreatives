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
    { year: "2022", title: "SYS Creatives Founded", desc: "Started with custom wedding film edits and local corporate streams." },
    { year: "2023", title: "Redundant Stream Arrays", desc: "Deployed cellular bonding boxes for guaranteed stream uptime." },
    { year: "2024", title: "AI QR Galleries Launch", desc: "Introduced smart photo scanning with instant face retrieval." },
    { year: "2025", title: "Unified Services Launch", desc: "Published all premium creative & live production services onto a single unified platform on SYS Creatives." }
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

          {/* Right Column: Overlapping Images */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[350px] sm:h-[450px]">
            {/* Card 1: The Team (Background) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-[5%] left-[5%] w-[70%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D] shadow-2xl z-10 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/about-team.png')` }}
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Card 2: The Gear (Foreground) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[5%] right-[5%] w-[65%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1D1D1D] shadow-[0_15px_40px_rgba(0,0,0,0.5)] z-20 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/about-equipment.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] text-gold font-bold uppercase tracking-wider block">Redundancy Rig</span>
                <span className="text-white text-xs font-semibold">Cinema Encoder Array</span>
              </div>
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
