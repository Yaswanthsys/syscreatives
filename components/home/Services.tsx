"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services } from "@/data/services";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-[#0F0F0F] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          title="Our Services"
          subtitle="Professional Solutions Tailored For Every Event"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, idx) => {
            // Dynamically look up Lucide icon component
            const IconComponent = (Icons as any)[service.iconName];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between p-8 sm:p-10 group min-h-[480px]">
                  {/* Card background hover image reveal */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-5 group-hover:opacity-10 scale-100 group-hover:scale-105 pointer-events-none"
                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                  />

                  {/* Top content */}
                  <div>
                    {/* Header: Icon & Sub-indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <Link
                        href={`/services/${service.id}`}
                        className="h-14 w-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gold group-hover:text-black group-hover:bg-gold transition-all duration-500 shadow-lg"
                      >
                        {IconComponent && <IconComponent className="h-6 w-6" />}
                      </Link>
                      <span className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-full">
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                      <Link href={`/services/${service.id}`} className="hover:underline decoration-gold/50">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="border-t border-white/[0.05] pt-6 mb-8">
                      <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-xs text-white font-bold tracking-widest uppercase hover:text-gold group/btn transition-colors duration-300"
                    >
                      Learn More
                      <Icons.ChevronRight className="h-4.5 w-4.5 text-gold transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
