import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
// import Portfolio from "@/components/home/Portfolio";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import ContactInfo from "@/components/home/ContactInfo";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "SYS Creatives | Premium Creative Agency & Live Streaming Solutions",
  description: "SYS Creatives is an award-winning creative agency specializing in luxury live streaming, cinematic video editing, premium branding design, and AI face recognition QR galleries.",
  openGraph: {
    title: "SYS Creatives | Premium Creative Agency",
    description: "Capture Moments. Stream Memories. Luxury Live Streaming, Editing, and Design.",
    images: [{ url: "/images/hero-camera.png" }],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-white selection:bg-gold selection:text-black antialiased overflow-x-hidden">
      {/* Premium Layout Effects */}
      <ScrollProgress />
      <CursorGlow />
      <FloatingWhatsApp />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Portfolio Grid Section */}
        {/* <Portfolio /> */}

        {/* About Section */}
        <About />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Contact Section: Form + Details */}
        <section id="contact" className="relative py-20 sm:py-24 bg-[#181818] overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />
          
          <Container className="relative z-10">
            <SectionTitle
              title="Get In Touch"
              subtitle="Let's Build Something Exceptional"
              alignment="center"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
              {/* Left Side: Contact Information & Map */}
              <div className="lg:col-span-5 h-full">
                <ContactInfo />
              </div>
              
              {/* Right Side: Interactive Service Request Form */}
              <div className="lg:col-span-7 h-full">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
