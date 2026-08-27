import { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { services } from "@/data/services";
import { servicesDetailed } from "@/data/servicesDetail";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "All Services | SYS Creatives",
  description:
    "Explore our complete range of luxury media solutions: Live Streaming, Cinematic Video Editing, Custom Web Development, Visual Graphic Design, and AI-Powered QR Photo Scanning.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-white selection:bg-gold selection:text-black antialiased overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <FloatingWhatsApp />
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero Header */}
        <section className="relative z-10 pt-8 pb-16 border-b border-white/[0.06] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[140px] pointer-events-none rounded-full" />

          <Container className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#9CA3AF] mb-6">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gold font-medium">Services</span>
            </div>

            <span className="text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 inline-block mb-4">
              Comprehensive Media Solutions
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Crafted For Visionaries.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-white">
                Engineered For Perfection.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto">
              From broadcast-grade 4K multi-camera live streams to AI-powered instant photo sharing and bespoke web portals, explore our full suite of luxury event and digital services.
            </p>
          </Container>
        </section>

        {/* Services List Grid */}
        <section className="relative z-10 py-16 sm:py-24">
          <Container>
            <div className="space-y-12 sm:space-y-16">
              {services.map((service, index) => {
                const detail = servicesDetailed[service.id];
                const IconComponent = (Icons as any)[service.iconName] || Icons.Sparkles;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={service.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#151515]/60 border border-white/[0.08] rounded-3xl p-6 sm:p-10 hover:border-gold/30 transition-all duration-500`}
                  >
                    {/* Visual Media Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[16/10] bg-[#1E1E1E] group shadow-xl">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${service.bgImage}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gold">
                          <IconComponent className="h-6 w-6" />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="text-[10px] text-gold font-bold uppercase tracking-wider">
                            0{index + 1} / 05
                          </span>
                          <h4 className="text-white text-base font-bold">{service.subtitle}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 flex flex-col text-left ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                          {detail ? detail.heroBadge : service.subtitle}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Key features chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {service.features.slice(0, 6).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#D1D5DB]">
                            <Icons.CheckCircle className="h-3.5 w-3.5 text-gold shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-4">
                        <Link href={`/services/${service.id}`}>
                          <Button variant="gold" size="sm" className="group">
                            <span>Detailed Explanation</span>
                            <Icons.ArrowRight className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Global CTA Banner */}
        <section className="relative z-10 py-16 bg-[#181818] border-t border-white/[0.06]">
          <Container className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Need a Custom Multi-Service Package?
            </h3>
            <p className="text-sm text-[#9CA3AF] mb-8">
              We frequently package Live Streaming, Cinematic Video Editing, and AI QR Galleries together for high-end weddings and multi-day corporate summits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button variant="gold" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
