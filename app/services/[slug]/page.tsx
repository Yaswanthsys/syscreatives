import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesDetailed } from "@/data/servicesDetail";
import ServiceDetailView from "@/components/services/ServiceDetailView";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesDetailed).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetailed[slug];

  if (!service) {
    return {
      title: "Service Not Found | SYS Creatives",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} Services | SYS Creatives`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.title} | SYS Creatives`,
      description: service.heroDescription,
      images: [{ url: service.bgImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesDetailed[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-white selection:bg-gold selection:text-black antialiased overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <FloatingWhatsApp />

      <Navbar />

      <main>
        <ServiceDetailView service={service} />
      </main>

      <Footer />
    </div>
  );
}
