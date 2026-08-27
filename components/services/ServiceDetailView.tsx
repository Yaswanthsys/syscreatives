"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { DetailedService } from "@/data/servicesDetail";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/home/ContactForm";
import ContactInfo from "@/components/home/ContactInfo";

interface ServiceDetailViewProps {
  service: DetailedService;
}

export default function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Other services (excluding the current one)
  const otherServices = services.filter((s) => s.id !== service.slug);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const el = document.getElementById("book-service");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamically resolve the main service icon
  const MainIcon = (Icons as any)[service.iconName] || Icons.Sparkles;

  const whatsappMessage = encodeURIComponent(
    `Hello SYS Creatives, I am interested in your ${service.title} services for an upcoming event. Please share more details.`
  );

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-white pt-28 pb-20 overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full bg-gold/3 blur-[180px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-4 pb-16 sm:pb-24 border-b border-white/[0.06]">
        <Container>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#9CA3AF] mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-gold font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest w-fit mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <MainIcon className="h-4 w-4" />
                <span>{service.heroBadge}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {service.title}
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-[#D4AF37] mt-3 font-serif italic">
                  {service.tagline}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
                {service.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Button variant="gold" size="lg" onClick={scrollToContact} className="group shadow-lg shadow-gold/10">
                  <span>Book This Service</span>
                  <Icons.ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <a
                  href={`https://wa.me/918500622735?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-gold/50 text-white font-medium text-sm transition-all duration-300 group"
                >
                  <Icons.MessageSquare className="h-4.5 w-4.5 text-gold group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#1A1A1A] aspect-[4/3] sm:aspect-[16/10] shadow-2xl group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent" />
                
                {/* Floating Service Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gold font-bold uppercase tracking-wider block">Service Specialty</span>
                    <h4 className="text-white text-base font-bold">{service.subtitle}</h4>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    <MainIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-white/[0.08]"
          >
            {service.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#181818]/70 border border-white/[0.06] rounded-2xl p-5 text-center hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">{stat.label}</div>
                {stat.sublabel && <div className="text-[11px] text-[#9CA3AF]">{stat.sublabel}</div>}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 2. IN-DEPTH OVERVIEW & CAPABILITIES */}
      <section className="relative z-10 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-3">
              Deep Dive & Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {service.overviewHeading}
            </h2>
            <div className="space-y-4 text-[#9CA3AF] text-sm sm:text-base leading-relaxed">
              {service.overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <SectionTitle
            title="Technical Capabilities & Features"
            subtitle="Precision Hardware, Software, & Creative Execution"
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {service.keyCapabilities.map((cap, idx) => {
              const CapIcon = cap.iconName ? (Icons as any)[cap.iconName] || Icons.Sparkles : Icons.Sparkles;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="h-full"
                >
                  <Card className="h-full p-6 sm:p-8 group hover:border-gold/40 flex flex-col justify-between transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-md">
                          <CapIcon className="h-6 w-6" />
                        </div>
                        {cap.tag && (
                          <span className="text-[11px] font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                            {cap.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">{cap.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. STEP-BY-STEP WORKFLOW / PROCESS */}
      <section className="relative z-10 py-20 sm:py-24 bg-[#141414] border-y border-white/[0.06] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold/3 blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            title="Our Step-By-Step Process"
            subtitle="How We Deliver Flawless Results From Concept To Launch"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {service.workflow.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-[#1A1A1A]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:border-gold/40 transition-all duration-300"
              >
                {/* Step Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-100 font-mono">
                      {step.stepNumber}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="border-t border-white/[0.06] pt-4 mt-auto">
                  <ul className="space-y-2">
                    {step.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#D1D5DB]">
                        <Icons.CheckCircle className="h-3.5 w-3.5 text-gold shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PACKAGES & SERVICE TIERS */}
      <section className="relative z-10 py-20 sm:py-24">
        <Container>
          <SectionTitle
            title="Tailored Service Packages"
            subtitle="Select A Configuration Or Request A Custom Plan"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
            {service.packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full flex"
              >
                <div
                  className={`w-full rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-[#1F1D16] border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                      : "bg-[#181818]/80 border border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-black text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      {pkg.badge || "Recommended"}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                      {!pkg.isPopular && pkg.badge && (
                        <span className="text-[11px] text-[#9CA3AF] bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Deliverables list */}
                    <div className="border-t border-white/[0.06] pt-6 mb-6">
                      <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
                        What's Included:
                      </span>
                      <ul className="space-y-3">
                        {pkg.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#D1D5DB] leading-normal">
                            <Icons.CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer CTA & Best For */}
                  <div className="border-t border-white/[0.06] pt-6 mt-6">
                    <p className="text-[11px] text-[#9CA3AF] mb-4 italic">
                      <strong className="text-white not-italic">Best For:</strong> {pkg.bestFor}
                    </p>
                    <Button
                      variant={pkg.isPopular ? "gold" : "outline"}
                      className="w-full"
                      onClick={scrollToContact}
                    >
                      Select This Package
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. INTERACTIVE FAQ ACCORDION */}
      <section className="relative z-10 py-20 sm:py-24 bg-[#141414] border-t border-white/[0.06]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle={`Everything You Need To Know About Our ${service.title} Service`}
              alignment="center"
            />

            <div className="space-y-4 mt-12">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-white/[0.08] bg-[#1A1A1A]/80 rounded-2xl overflow-hidden transition-colors hover:border-gold/30"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-white">
                        {faq.question}
                      </span>
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-gold text-black rotate-180" : "bg-white/[0.04] text-white"
                        }`}
                      >
                        <Icons.ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm text-[#9CA3AF] leading-relaxed border-t border-white/[0.04] pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. DEDICATED INQUIRY FORM (Pre-Selected) */}
      <section id="book-service" className="relative z-10 py-20 sm:py-24 bg-[#181818] overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionTitle
            title={`Book ${service.title}`}
            subtitle="Let Us Bring High Production Value To Your Vision"
            alignment="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
            <div className="lg:col-span-5 h-full">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7 h-full">
              <ContactForm defaultService={service.categoryName} />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. EXPLORE OTHER SERVICES */}
      <section className="relative z-10 py-20 sm:py-24 border-t border-white/[0.06]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">
                More Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Explore Other Services
              </h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest hover:underline"
            >
              <span>View All Services</span>
              <Icons.ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((other) => {
              const OtherIcon = (Icons as any)[other.iconName] || Icons.Sparkles;
              return (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className="group block"
                >
                  <Card className="p-6 h-full flex flex-col justify-between group-hover:border-gold/50 transition-all duration-300">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 mb-6 shadow-md">
                        <OtherIcon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {other.title}
                      </h4>
                      <p className="text-xs text-[#9CA3AF] line-clamp-3 leading-relaxed mb-6">
                        {other.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <Icons.ChevronRight className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
