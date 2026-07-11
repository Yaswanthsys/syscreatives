export interface PortfolioItem {
  id: string;
  title: string;
  category: "Photography" | "Live Streaming" | "Wedding" | "Corporate" | "Graphic Design" | "QR Gallery";
  image: string;
  videoUrl?: string; // Optional URL for video previews
  client?: string;
  date?: string;
  description?: string;
}

export const portfolioCategories = [
  
  "Photography",
  "Live Streaming",
  "Wedding",
  "Corporate",
  "Graphic Design",
  "QR Gallery"
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "luxury-fashion-photos",
    title: "Vogue Autumn Editorial",
    category: "Photography",
    image: "/images/sony.png",
    client: "Verve Collection",
    date: "September 2025",
    description: "High-end studio editorial photography showcasing a minimal autumn luxury streetwear collection."
  },
  {
    id: "tech-summit-live",
    title: "Global Tech Summit 2026",
    category: "Live Streaming",
    image: "/images/live s.jpg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-recording-a-live-stream-of-a-speaker-41584-large.mp4",
    client: "NextGen Technologies",
    date: "March 2026",
    description: "Multi-camera 1080p live stream broadcast with integrated slides, real-time overlays, and interactive Q&A feeds."
  },
  {
    id: "royal-wedding-highlight",
    title: "Elegance in the Estate",
    category: "Wedding",
    image: "/images/portfolio-wedding1.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-groom-putting-the-ring-on-the-brides-finger-43026-large.mp4",
    client: "Sophia & Alexander",
    date: "June 2026",
    description: "Cinematic wedding highlight film capturing the morning preparations, garden vows, and grand ballroom reception."
  },
  {
    id: "lux-branding-concept",
    title: "Aura Luxury Brand Book",
    category: "Graphic Design",
    image: "/images/portfolio-graphic1.png",
    client: "Aura Fragrances",
    date: "January 2026",
    description: "Premium visual identity, gold-foil packaging layouts, and digital branding assets designed for an upscale perfumery."
  },
  {
    id: "gala-qr-gallery",
    title: "Annual Charity Gala QR Board",
    category: "QR Gallery",
    image: "/images/portfolio-qr1.png",
    client: "Hope Foundation",
    date: "April 2026",
    description: "AI face recognition live photo board. 400+ guests instantly accessed personal portraits by scanning their dynamic custom QR code."
  },
  {
    id: "indie-festival-stream",
    title: "Summer Beat Music Festival",
    category: "Live Streaming",
    image: "/images/portfolio-stream2.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-dj-playing-music-at-a-club-42512-large.mp4",
    client: "Vibe Events Ltd",
    date: "July 2026",
    description: "High-fidelity live stream broadcast of 3 main stages, incorporating drone camera feeds and custom digital mixing board integration."
  },
  {
    id: "sunset-vows-edit",
    title: "Golden Hour Promises",
    category: "Wedding",
    image: "/images/portfolio-wedding2.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-bouquet-of-flowers-43033-large.mp4",
    client: "Chloe & Liam",
    date: "May 2026",
    description: "Warm, emotional film editing showcasing vows under the golden sunset light, set to custom licensed cinematic orchestration."
  },
  {
    id: "exhibit-poster-series",
    title: "Contemporary Art Exhibition",
    category: "Graphic Design",
    image: "/images/portfolio-graphic2.png",
    client: "Metropolitan Art Gallery",
    date: "February 2026",
    description: "Minimalist poster layouts, invitations, and promotional social media flyers featuring high-contrast editorial typography."
  },
  {
    id: "corp-promo-campaign",
    title: "Linear Workflows Campaign",
    category: "Corporate",
    image: "/images/portfolio-corporate1.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-office-business-meeting-43058-large.mp4",
    client: "Flow Inc.",
    date: "November 2025",
    description: "High-end corporate promo video capturing company culture, software demos, and animated executive interviews."
  }
];
