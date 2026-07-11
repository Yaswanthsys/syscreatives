"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Camera, Award, Zap, HeartHandshake } from "lucide-react";
import { statistics } from "@/data/statistics";
import { useScrollCounter } from "@/hooks/useScrollCounter";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

// Dynamic sub-component for counting numbers
function StatCounter({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) {
  const { count, ref } = useScrollCounter(value, 2.5);

  return (
    <Card className="p-8 text-center flex flex-col justify-center items-center">
      <span ref={ref} className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 flex items-center justify-center">
        {count}
        <span className="text-gold ml-0.5">{suffix}</span>
      </span>
      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{label}</h4>
      <p className="text-[#9CA3AF] text-xs leading-relaxed max-w-[200px]">{description}</p>
    </Card>
  );
}

export default function WhyChooseUs() {
  const coreValues = [
    {
      title: "Professional Team",
      desc: "Our videographers and operators are industry experts committed to flawless execution.",
      icon: Award
    },
    {
      title: "Premium Equipment",
      desc: "We use top-tier cine cameras, stabilizers, audio grids, and dedicated encoding hubs.",
      icon: Camera
    },
    {
      title: "Dedicated Support",
      desc: "Comprehensive pre-event tests and active monitoring throughout your live stream broadcast.",
      icon: HeartHandshake
    },
    {
      title: "Fast Delivery",
      desc: "Optimized pipelines ensure color-graded deliverables and reels are ready in record time.",
      icon: Zap
    },
    {
      title: "Quality Assured",
      desc: "Rigorous standards for high definition video, spatial audio, and robust cellular bonding.",
      icon: Shield
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-20 sm:py-24 bg-[#181818] overflow-hidden">
      {/* Subtle luxury particle overlay style (via radial glow) */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/3 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-white/[0.01] blur-[150px] pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Reasons */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              We Don't Just Record.<br />
              <span className="text-[#9CA3AF]">We Elevate Your Vision.</span>
            </h2>
            
            <div className="flex flex-col gap-6 max-w-xl">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="h-10 w-10 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] text-gold rounded-xl shrink-0 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1.5">{value.title}</h3>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statistics.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
