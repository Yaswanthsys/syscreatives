export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // Used to map to Lucide icons dynamically
  bgImage: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "photography",
    title: "Photography",
    subtitle: "Premium event coverage",
    description: "Capturing high-end editorial and cinematic stills for luxury weddings, corporate forums, and commercial campaigns.",
    iconName: "Camera",
    bgImage: "/images/sony.png",
    features: [
      "Event & Gala Highlights",
      "Sleek Portrait Sessions",
      "Editorial Fashion Shoots",
      "High-Resolution Digital Stills",
      "Professional Color Editing",
      "Online Private Galleries",
      "Full Commercial Rights"
    ]
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    subtitle: "Professional multi-camera production",
    description: "Broadcast your event to a global audience with high-definition, multi-camera live streaming services tailored for flawless real-time engagement.",
    iconName: "Radio",
    bgImage: "/images/live s.jpg",
    features: [
      "Multi Camera Production",
      "YouTube Live Broadcast",
      "Facebook Live Broadcast",
      "Wedding Streaming",
      "Church Services",
      "Corporate Event Feeds",
      "Full HD 1080p Quality"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    subtitle: "Cinematic post-production",
    description: "Transform raw footage into captivating cinematic stories. We offer professional color grading, audio design, and smooth motion graphics.",
    iconName: "Film",
    bgImage: "/images/service-editing.png",
    features: [
      "Wedding Highlights",
      "Social Media Reels & TikToks",
      "Event After Movies",
      "Advanced Color Grading",
      "Corporate Videos",
      "Motion Graphics & SFX",
      "Custom Logo Animation"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "Premium visual branding",
    description: "Make an unforgettable statement. From luxury wedding stationery to corporate brand books, we craft modern designs that inspire.",
    iconName: "Palette",
    bgImage: "/images/service-design.png",
    features: [
      "Event Posters & Banners",
      "Luxury Wedding Invitations",
      "Branding & Visual Identity",
      "Logo & Icon Design",
      "Social Media Graphics",
      "High-Click YouTube Thumbnails",
      "Premium Business Cards"
    ]
  },
  {
    id: "qr-photo-scanning",
    title: "QR Photo Scanning",
    subtitle: "AI-Powered instant photo sharing",
    description: "Guests scan a QR code, upload or view photos, and find their pictures instantly using custom AI face-recognition technology.",
    iconName: "QrCode",
    bgImage: "/images/service-qr.png",
    features: [
      "AI Face Recognition",
      "Instant Guest Uploads",
      "Unlimited High-Res Downloads",
      "Private & Secure Gallery",
      "Mobile-Friendly Layout",
      "Secure Custom Sharing Links"
    ]
  }
];
