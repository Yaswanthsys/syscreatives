export interface ServiceStat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  iconName?: string;
  tag?: string;
}

export interface ServiceWorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ServicePackage {
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  deliverables: string[];
  bestFor: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  categoryName: "Live Streaming" | "Video Editing" | "Web Development" | "Graphic Design" | "QR Photo Scanning";
  tagline: string;
  subtitle: string;
  heroBadge: string;
  heroDescription: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  bgImage: string;
  secondaryImage?: string;
  iconName: string;
  stats: ServiceStat[];
  keyCapabilities: ServiceFeatureItem[];
  workflow: ServiceWorkflowStep[];
  packages: ServicePackage[];
  faqs: ServiceFAQ[];
}

export const servicesDetailed: Record<string, DetailedService> = {
  "live-streaming": {
    id: "live-streaming",
    slug: "live-streaming",
    title: "Live Streaming",
    categoryName: "Live Streaming",
    tagline: "Broadcast-Grade Multi-Camera Live Streaming & Virtual Production",
    subtitle: "High-Definition Multi-Camera Production",
    heroBadge: "Ultra-Reliable 4K & 1080p Broadcasts",
    heroDescription:
      "Broadcast your grand wedding, corporate summit, spiritual gathering, or cultural ceremony to a global audience. We deliver flawless, zero-buffer, multi-camera live feeds with studio-grade audio, live graphics, and dual-platform simulcasting.",
    overviewHeading: "Cinema-Quality Live Broadcasting Without Compromise",
    overviewParagraphs: [
      "Standard static webcams and unstable single-phone feeds fail to capture the emotion, scale, and prestige of high-end events. SYS Creatives provides a complete mobile television broadcast production unit directly to your venue.",
      "Using state-of-the-art Sony Alpha & FX cinema cameras, Blackmagic ATEM live switchers, bonded multi-SIM cellular 5G networks, and wireless video transmitters, we eliminate buffering and signal dropouts even in remote or packed venues.",
      "Your audience on YouTube, Facebook, Twitch, or private portals will experience crisp 1080p60/4K video, crystal-clear multi-channel wireless audio, real-time dynamic scoreboards or lower-third graphics, and instant replay highlights."
    ],
    bgImage: "/images/hero-camera.jpg",
    secondaryImage: "/images/service-streaming.png",
    iconName: "Radio",
    stats: [
      { value: "100+", label: "Live Broadcasts Delivered", sublabel: "Weddings & Summits" },
      { value: "1080p / 4K", label: "Crystal Clear Resolution", sublabel: "60 FPS High Bitrate" },
      { value: "99.9%", label: "Uptime & Zero Buffer", sublabel: "5G Bonded Redundancy" },
      { value: "Simulcast", label: "Multi-Platform Streaming", sublabel: "YouTube + FB + Custom" }
    ],
    keyCapabilities: [
      {
        title: "Multi-Camera Cinematic Switcher",
        description: "Seamless live camera angle switching between close-ups, wide venue views, crane shots, and gimbal tracking.",
        iconName: "Video",
        tag: "Cinema Hardware"
      },
      {
        title: "Bonded Cellular 5G Multi-SIM Internet",
        description: "We bring our own bonded multi-carrier internet rigs to guarantee zero buffering, even when venue Wi-Fi is down.",
        iconName: "Wifi",
        tag: "Zero-Lag"
      },
      {
        title: "Live Lower-Thirds & Animated Branding",
        description: "Custom-designed branded overlays, speaker titles, couple monograms, sponsor logos, and countdown stingers.",
        iconName: "Sparkles",
        tag: "Bespoke Visuals"
      },
      {
        title: "Multi-Track Studio Audio Engineering",
        description: "Direct audio board integration and wireless Sennheiser/Rode lavalier & handheld microphones for studio-grade vocal clarity.",
        iconName: "Mic",
        tag: "Hi-Fi Sound"
      },
      {
        title: "Simultaneous Multi-Platform Streaming",
        description: "Stream simultaneously to YouTube Live, Facebook Live, private unlisted event links, or custom embedded web portals.",
        iconName: "Share2",
        tag: "Multi-Cast"
      },
      {
        title: "Master ISO Recording & Rapid Highlights",
        description: "Every individual camera feed is recorded uncompressed in full quality, ready for rapid highlight editing and archiving.",
        iconName: "HardDrive",
        tag: "Full Archive"
      }
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Pre-Event Site Survey & Network Audit",
        description: "Our technical team evaluates the venue layout, tests cellular 5G signal strength across all providers, maps power sources, and prepares backup power stations.",
        highlights: ["Venue speed tests", "Camera angle mapping", "Audio routing plan"]
      },
      {
        stepNumber: "02",
        title: "Custom Graphics & Stream Channel Setup",
        description: "We craft branded stream overlays, countdown intro animations, custom stream thumbnails, and configure YouTube/Facebook live stream URLs in advance.",
        highlights: ["Bespoke lower-thirds", "Custom stream links & QR", "Client approval"]
      },
      {
        stepNumber: "03",
        title: "On-Site Production & Live Directing",
        description: "We arrive 3-4 hours prior to the event, set up multi-camera rigs, sound checks, lighting calibration, and execute seamless live switching during the event.",
        highlights: ["Multi-cam live switching", "Live audio engineering", "Real-time stream health monitoring"]
      },
      {
        stepNumber: "04",
        title: "Archival & Master Footage Handover",
        description: "Immediately post-event, the full stream replay remains active for global viewers, and raw master 4K camera files are delivered via high-speed cloud drive.",
        highlights: ["Permanent YouTube unlisted link", "Master 4K footage handover", "Instant reel cut options"]
      }
    ],
    packages: [
      {
        name: "Essential Live Feed",
        badge: "Single Camera",
        description: "Ideal for intimate ceremonies, lectures, or private rituals requiring crisp, dependable broadcasting.",
        deliverables: [
          "1x Dedicated 4K Cinema Camera Operator",
          "Dedicated Wireless Lavalier / Handheld Mic",
          "Full HD 1080p Stream to YouTube or Facebook",
          "Single Platform Streaming",
          "Basic Static Overlay with Event Title",
          "Full Event Cloud Recording Link"
        ],
        bestFor: "Small family gatherings, press briefs, and private functions"
      },
      {
        name: "Pro Multi-Cam Production",
        badge: "Most Popular",
        isPopular: true,
        description: "Our flagship multi-angle setup engineered for weddings, conferences, and high-energy stage events.",
        deliverables: [
          "2-3x Cinema Cameras (Wide + Stage + Moving Gimbal)",
          "Blackmagic ATEM Live Production Switcher",
          "Bonded 5G Multi-Carrier Internet Backpack",
          "Custom Branded Animated Lower-Thirds & Intro Video",
          "Multi-Platform Simulcast (YouTube + Facebook)",
          "Studio Multi-Track Wireless Audio System",
          "Full HD Master ISO Recordings & Instant Archive"
        ],
        bestFor: "Grand weddings, corporate symposiums, and cultural celebrations"
      },
      {
        name: "Ultra Broadcast & Drone Suite",
        badge: "Luxury VIP",
        description: "A complete mobile broadcast television experience with aerial drone feeds, live LED wall integration, and multi-location setups.",
        deliverables: [
          "4-5x Multi-Cam Rigs + Live Aerial Drone Stream",
          "Dedicated Technical Director + Switcher Crew",
          "Simultaneous Stream to 3+ Social & Private Portals",
          "Direct Feed Integration to Venue LED Display Walls",
          "Instant Highlight Clip Cut during Event Intermissions",
          "Lossless 4K Master ISO Footage Delivery on SSD",
          "VIP 24/7 Dedicated Event Support"
        ],
        bestFor: "Mega weddings, music festivals, state summits, and multi-day conventions"
      }
    ],
    faqs: [
      {
        question: "What happens if the event venue has bad or non-existent Wi-Fi?",
        answer: "We never rely solely on venue Wi-Fi. We deploy enterprise-grade bonded multi-SIM cellular backpacks that combine Airtel, Jio, and BSNL 5G signals into one ultra-resilient, high-bandwidth connection."
      },
      {
        question: "Can our remote guests watch privately without the video being public?",
        answer: "Yes! We can set up private unlisted YouTube streams, password-protected custom web portals, or secure Zoom relays so only your invited family and guests can tune in."
      },
      {
        question: "How long is the live stream link accessible after the event concludes?",
        answer: "The live stream recording is automatically processed by YouTube/Facebook and remains permanently accessible for you and your family to rewatch anytime."
      },
      {
        question: "Can you broadcast simultaneously to both YouTube and Facebook?",
        answer: "Yes! Our streaming encoders support multi-destination RTMP broadcasting, allowing simultaneous feeds to YouTube, Facebook, Twitch, and custom RTMP endpoints with zero added latency."
      }
    ]
  },

  "video-editing": {
    id: "video-editing",
    slug: "video-editing",
    title: "Video Editing",
    categoryName: "Video Editing",
    tagline: "Cinematic Storytelling, Hollywood Color Grading & Motion Graphics",
    subtitle: "Cinematic Post-Production",
    heroBadge: "Award-Winning Editing & Color Science",
    heroDescription:
      "Transform raw, unedited footage into high-impact cinematic masterpieces. We specialize in emotional wedding highlights, viral social media reels, corporate brand documentaries, advanced DaVinci Resolve color grading, and custom sound design.",
    overviewHeading: "We Turn Raw Moments Into Unforgettable Stories",
    overviewParagraphs: [
      "Great filmmaking is won or lost in the editing room. Anyone can record footage, but only a skilled editor can evoke goosebumps, pace a story with rhythmic precision, and craft a visual journey that keeps viewers glued to the screen.",
      "At SYS Creatives, we work with DaVinci Resolve Studio, Adobe Premiere Pro, and After Effects to bring Hollywood-grade color grading, skin tone isolation, foley sound design, and custom 2D/3D motion graphics to every project.",
      "Whether you need a 60-second viral Instagram Reel with kinetic typography and trending audio or a 45-minute full-length cinematic wedding film, we deliver perfection with fast turnaround times."
    ],
    bgImage: "/images/service-editing.png",
    secondaryImage: "/images/hero-editing.png",
    iconName: "Film",
    stats: [
      { value: "500+", label: "Cinematic Films & Reels", sublabel: "Edited & Delivered" },
      { value: "4K / 8K", label: "High-Bitrate Cinema Workflow", sublabel: "ProRes & RAW" },
      { value: "24-48h", label: "Fast Rush Delivery Available", sublabel: "For Social Content" },
      { value: "100%", label: "Custom Sound & SFX Design", sublabel: "Royalty-Free Audio" }
    ],
    keyCapabilities: [
      {
        title: "Emotional Narrative & Rhythmic Pacing",
        description: "We analyze hours of footage to pinpoint the heartfelt glances, speeches, and peaks of energy that tell your true story.",
        iconName: "Sparkles",
        tag: "Storytelling"
      },
      {
        title: "DaVinci Resolve Studio Color Grading",
        description: "Custom film emulation, skin tone matching, high dynamic range LUTs, and chromatic adjustments that give your video a rich cinema look.",
        iconName: "Palette",
        tag: "Cinema Color"
      },
      {
        title: "Cinematic Sound Design & Foley Mixing",
        description: "Multi-layered audio mixing, ambient soundscapes, whooshes, risers, vocal cleanup, and licensed orchestral/contemporary music tracks.",
        iconName: "Volume2",
        tag: "Immersive Audio"
      },
      {
        title: "Viral High-Retention Social Reels & Shorts",
        description: "Dynamic auto-captions with custom animation, fast cuts, trending sounds, sound effects, and hook optimization for 9:16 vertical feeds.",
        iconName: "Smartphone",
        tag: "Social Media"
      },
      {
        title: "2D & 3D Motion Graphics & Kinetic Titles",
        description: "Custom lower thirds, 3D title intros, tracked camera text, animated charts, and seamless visual transitions.",
        iconName: "Layers",
        tag: "Visual FX"
      },
      {
        title: "Footage Restoration & AI Enhancement",
        description: "Shaky footage stabilization, noise reduction for low-light shots, AI frame interpolation, and unwanted background object removal.",
        iconName: "Wand2",
        tag: "Restoration"
      }
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Footage Ingestion & Narrative Outlining",
        description: "We securely ingest your RAW camera footage, generate lightweight editing proxies, categorize clips by scene and emotion, and outline the story arc.",
        highlights: ["Secure cloud/drive ingestion", "Audio sync & multi-cam alignment", "Story beat breakdown"]
      },
      {
        stepNumber: "02",
        title: "The Assembly & Rough Cut",
        description: "We construct the primary edit, pairing the visual sequence with a hand-selected, licensed musical score that dictates the rhythm and emotion.",
        highlights: ["Music selection & licensing", "Pacing & transitional flow", "First look review link"]
      },
      {
        stepNumber: "03",
        title: "Color Science & Sound Design",
        description: "Once the visual cut is locked, our colorist applies custom color grading and our audio engineer layers sound effects, vocal EQ, and master leveling.",
        highlights: ["DaVinci Resolve color grading", "Foley & ambient SFX", "Vocal mastering"]
      },
      {
        stepNumber: "04",
        title: "Client Feedback & Final 4K Master Handover",
        description: "You review the project with timestamped feedback tools. We implement revisions promptly and deliver exports formatted for 4K TV, YouTube, and 9:16 Instagram Reels.",
        highlights: ["Timestamped revision tool", "Multiple aspect ratio exports", "Full resolution delivery"]
      }
    ],
    packages: [
      {
        name: "Viral Social Content Pack",
        badge: "Reels & Shorts",
        description: "Crafted for influencers, brands, and couples who want explosive engagement on Instagram Reels, TikTok, and YouTube Shorts.",
        deliverables: [
          "5x High-Energy Vertical Reels (30-60s each)",
          "Dynamic Styled Animated Subtitles / Captions",
          "Sound Effects, Zoom-ins & Trend-Matching Music",
          "Color Grading Optimized for Mobile OLED Displays",
          "2 Rounds of Quick Revisions Included",
          "48-Hour Turnaround Time"
        ],
        bestFor: "Instagram creators, brand promos, event teasers, and personal branding"
      },
      {
        name: "Cinematic Highlight Film",
        badge: "Most Popular",
        isPopular: true,
        description: "Our signature cinematic teaser and highlight film that captures the soul and emotional peaks of your special event.",
        deliverables: [
          "1x 3-5 Minute 4K Cinematic Highlight Film",
          "1x 60-Second Viral Teaser Trailer for Social Media",
          "DaVinci Resolve Studio Advanced Color Grading",
          "Multi-Layered Sound Design & Licensed Music Track",
          "Speech & Vow Audio Integration",
          "Full 4K Ultra HD Master File Delivery"
        ],
        bestFor: "Luxury weddings, corporate conferences, and after-movie recaps"
      },
      {
        name: "Full Feature & Documentary Suite",
        badge: "Complete Archive",
        description: "An exhaustive, documentary-style complete film capturing every speech, ceremony ritual, and full-length performance.",
        deliverables: [
          "Full Length Documentary Film (30 to 60+ Minutes)",
          "Multi-Camera Synchronization & Continuous Coverage",
          "Includes 1x Cinematic Teaser + 1x Highlight Video",
          "Full Color Correction & Professional Audio Balancing",
          "Chapter Markers & Organized USB/Cloud Delivery",
          "3 Rounds of Comprehensive Revisions"
        ],
        bestFor: "Full wedding ceremonies, keynote speeches, concerts, and feature documentaries"
      }
    ],
    faqs: [
      {
        question: "How do I send you raw footage?",
        answer: "You can upload files via Google Drive, Dropbox, WeTransfer, or ship us an encrypted SSD/Hard drive. We handle RAW, ProRes, and MP4 formats from all major cameras (Sony, Canon, Blackmagic, RED)."
      },
      {
        question: "What is your typical turnaround time for edits?",
        answer: "Social media reels and short teasers are delivered within 48 to 72 hours. Cinematic wedding highlight films are typically delivered within 7 to 14 business days, with rush delivery available upon request."
      },
      {
        question: "Do you provide royalty-free music licensing?",
        answer: "Yes! All music tracks used in our edits are fully licensed through commercial music platforms (such as Artlist and Musicbed), ensuring zero copyright strikes on YouTube, Instagram, or Facebook."
      },
      {
        question: "Can I request changes if something isn't how I envisioned?",
        answer: "Absolutely. We use modern interactive review software where you can click directly on the video timestamp to leave precise notes. We include dedicated revision rounds with every package."
      }
    ]
  },

  "web-development": {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    categoryName: "Web Development",
    tagline: "High-Performance Next.js Web Apps & Bespoke Digital Experiences",
    subtitle: "Premium Digital Solutions",
    heroBadge: "Next.js 15+, Tailwind & Fluid Motion",
    heroDescription:
      "We design and build fast, responsive, and visually mesmerizing custom websites that captivate visitors and convert them into paying clients. From luxury brand portals to interactive portfolios, we craft digital experiences that leave a lasting impression.",
    overviewHeading: "Where Cutting-Edge Engineering Meets High-End Design",
    overviewParagraphs: [
      "A cookie-cutter template with slow load times and generic layouts diminishes your brand's authority. Your website should be a digital masterpiece that mirrors the luxury and precision of your real-world services.",
      "We specialize in bespoke web engineering using Next.js, React, Tailwind CSS, TypeScript, and Framer Motion. Every line of code is optimized for blazing-fast 99+ Google PageSpeed scores, seamless mobile responsiveness, and intuitive navigation.",
      "Whether you need interactive 3D elements, dark-luxury glassmorphism, instant booking funnels, CMS integration, or automated contact workflows, we build digital assets that scale your business."
    ],
    bgImage: "/images/service-web.png",
    secondaryImage: "/images/service-web.png",
    iconName: "Code",
    stats: [
      { value: "99+", label: "Google PageSpeed Score", sublabel: "Blazing Fast Performance" },
      { value: "< 1.0s", label: "Average Load Time", sublabel: "Zero Lag User Experience" },
      { value: "100%", label: "Mobile-First Responsive", sublabel: "Flawless on All Screens" },
      { value: "Next.js 15", label: "Modern React Stack", sublabel: "Type-Safe & Scalable" }
    ],
    keyCapabilities: [
      {
        title: "Bespoke Next.js & React Architecture",
        description: "Ultra-fast server-rendered architecture built with clean TypeScript, ensuring seamless reliability, maintainability, and scale.",
        iconName: "Cpu",
        tag: "Modern Stack"
      },
      {
        title: "Awwwards-Level Fluid Motion & Micro-Animations",
        description: "Smooth Framer Motion animations, parallax scrolling effects, and cursor glow interactions that elevate the user experience.",
        iconName: "Sparkles",
        tag: "Fluid UX"
      },
      {
        title: "Full-Spectrum SEO & OpenGraph Optimization",
        description: "Structured JSON-LD schema, dynamic meta tags, sitemaps, and Core Web Vitals optimization to rank at the top of Google search results.",
        iconName: "Search",
        tag: "SEO Ranked"
      },
      {
        title: "Interactive Lead Capture & Booking Engines",
        description: "Custom contact forms, WhatsApp click-to-chat integration, calendar scheduling (Calendly), and automated email notifications.",
        iconName: "CheckCircle",
        tag: "High Conversion"
      },
      {
        title: "Headless CMS & Dynamic Content Portals",
        description: "Intuitive admin dashboards (Sanity, Strapi, Supabase) allowing you to update portfolio projects, blogs, and testimonials effortlessly.",
        iconName: "Database",
        tag: "Dynamic Data"
      },
      {
        title: "Enterprise Web Security & Cloud Hosting",
        description: "End-to-end SSL encryption, DDoS mitigation, and global edge CDN deployment on Vercel or AWS for maximum uptime.",
        iconName: "Shield",
        tag: "Cloud Secure"
      }
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Discovery, Strategy & Wireframing",
        description: "We analyze your target market, establish clear user conversion funnels, and map out responsive UI/UX wireframes with luxury dark aesthetic themes.",
        highlights: ["Brand identity mapping", "User journey architecture", "Interactive Figma wireframes"]
      },
      {
        stepNumber: "02",
        title: "Pixel-Perfect UI/UX Design",
        description: "We craft custom color palettes, modern typography scales, smooth hover states, and dynamic components tailored to your agency brand.",
        highlights: ["Tailored typography & gold accents", "Micro-interaction prototypes", "Mobile UI previews"]
      },
      {
        stepNumber: "03",
        title: "Next.js Full-Stack Engineering",
        description: "We code the application using Next.js, React, Tailwind CSS, and Framer Motion, integrating contact APIs, backend webhooks, and analytics.",
        highlights: ["Clean component architecture", "API routing & form automation", "Optimized WebP asset delivery"]
      },
      {
        stepNumber: "04",
        title: "Speed Optimization, SEO & Launch",
        description: "We perform rigorous cross-browser testing, achieve 95+ PageSpeed scores, configure custom domains & SSL, and launch your site to the world.",
        highlights: ["Google PageSpeed 99+", "SSL & DNS propagation", "Post-launch warranty & training"]
      }
    ],
    packages: [
      {
        name: "Showcase Portfolio Site",
        badge: "Single Page / Landing",
        description: "A high-impact, single-page luxury website designed for creative professionals, photographers, and studios.",
        deliverables: [
          "Bespoke Single-Page Next.js Layout with Smooth Scroll",
          "Hero Parallax, Services Showcase, & About Sections",
          "Interactive Media Gallery & Portfolio Filter",
          "Integrated Contact Form & Floating WhatsApp Button",
          "100% Mobile & Tablet Optimization",
          "Basic SEO Setup & Domain Connection"
        ],
        bestFor: "Freelancers, photographers, and emerging creative studios"
      },
      {
        name: "Agency Business Suite",
        badge: "Most Popular",
        isPopular: true,
        description: "A comprehensive multi-page digital web application tailored to established agencies and luxury service businesses.",
        deliverables: [
          "Up to 6-8 Custom-Designed Responsive Pages",
          "Individual Service Detail Pages & Portfolio Showcase",
          "Dynamic Interactive Testimonial Slider & FAQs",
          "Awwwards-Level Framer Motion Transitions & Cursor Glow",
          "Full Schema Markup, OpenGraph & Core Web Vitals Tuning",
          "Automated Email Dispatch & WhatsApp Leads",
          "1 Month Free Post-Launch Maintenance & Support"
        ],
        bestFor: "Growing agencies, event production firms, and luxury brands"
      },
      {
        name: "Custom Enterprise Portal",
        badge: "Full Custom",
        description: "A bespoke full-stack web application with headless CMS, client portals, dynamic database integration, and e-commerce capabilities.",
        deliverables: [
          "Unlimited Pages with Headless CMS Dashboard (Sanity/Strapi)",
          "Client Login Portal, Booking Engine or E-Commerce Store",
          "Real-Time Database Integration (Supabase/PostgreSQL)",
          "Custom API Integrations & Webhooks",
          "Advanced Analytics & Conversion Rate Tracking",
          "Dedicated Server Architecture on Vercel / AWS",
          "Priority 24/7 SLA & Ongoing Engineering Support"
        ],
        bestFor: "High-volume businesses, SaaS platforms, and enterprise ventures"
      }
    ],
    faqs: [
      {
        question: "Why do you use Next.js and React instead of WordPress?",
        answer: "Next.js delivers unmatched loading speeds (sub-second page loads), superior security with zero plugin vulnerability exploits, and infinite customization for luxury animations and modern web apps."
      },
      {
        question: "Can I update the website content and images myself later?",
        answer: "Yes! We can integrate an easy-to-use Headless CMS (like Sanity or Strapi) where you can easily add new portfolio projects, blog posts, or edit text without touching any code."
      },
      {
        question: "Will my website work perfectly on mobile phones and tablets?",
        answer: "100%. We follow a mobile-first design process, ensuring touch-friendly interactions, lightning-fast mobile data loading, and pixel-perfect layouts on iPhones, Androids, iPads, and desktops."
      },
      {
        question: "How long does it take to design and launch a custom website?",
        answer: "A standard showcase website takes approximately 5 to 7 business days, while an extensive multi-page agency platform or web application takes 2 to 3 weeks from discovery to final deployment."
      }
    ]
  },

  "graphic-design": {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design",
    categoryName: "Graphic Design",
    tagline: "Distinctive Visual Identity, Luxury Stationery & High-Impact Marketing",
    subtitle: "Premium Visual Branding",
    heroBadge: "Print-Ready Vector & Luxury Digital Assets",
    heroDescription:
      "Make an unforgettable first impression. From luxury wedding invitation suites and royal stationery to corporate brand books, high-click YouTube thumbnails, and social media marketing kits, we craft visual assets that stand out.",
    overviewHeading: "Crafting Timeless Visual Elegance for Modern Brands",
    overviewParagraphs: [
      "Your visual identity is the silent ambassador of your brand. In a world inundated with generic Canva templates, bespoke graphic design is what separates ordinary businesses from coveted luxury brands.",
      "At SYS Creatives, we combine classical design principles—golden ratio proportions, harmonious typography, and sophisticated color psychology—with modern digital aesthetics.",
      "We deliver versatile vector assets engineered for both high-resolution offset printing (300+ DPI CMYK with metallic foil stamps) and ultra-crisp digital screen displays (RGB WebP/SVG)."
    ],
    bgImage: "/images/service-design.png",
    secondaryImage: "/images/hero-design.png",
    iconName: "Palette",
    stats: [
      { value: "300+", label: "Brand Identities Created", sublabel: "Logos & Visual Kits" },
      { value: "300 DPI", label: "Print-Ready Resolution", sublabel: "CMYK & Spot Color" },
      { value: "Vector", label: "100% Scalable Assets", sublabel: "AI, EPS, SVG & PDF" },
      { value: "Unlimited", label: "Creative Freedom", sublabel: "Custom Typography & Palettes" }
    ],
    keyCapabilities: [
      {
        title: "Complete Brand Identity & Logo Systems",
        description: "Primary logos, secondary monograms, brand color schemes, typography pairings, and complete brand style guidebooks.",
        iconName: "Layers",
        tag: "Brand Identity"
      },
      {
        title: "Luxury Wedding & Event Stationery",
        description: "Bespoke digital animated e-invites, royal physical card templates, welcome standees, ceremony itinerary booklets, and place cards.",
        iconName: "Sparkles",
        tag: "Event Stationery"
      },
      {
        title: "High-Click YouTube Thumbnails & Banners",
        description: "Eye-catching, high-CTR YouTube thumbnails, channel banners, and stream countdown graphics designed to maximize views.",
        iconName: "Image",
        tag: "Digital Graphics"
      },
      {
        title: "Social Media Marketing Suites",
        description: "Custom Instagram grid templates, story highlight covers, carousel slide decks, and promotional ad banners.",
        iconName: "Share2",
        tag: "Social Media"
      },
      {
        title: "Print Collateral & Large Format Banners",
        description: "Event standees, roll-up banners, stage backdrops, flyers, tri-fold brochures, and luxury foil-stamped business cards.",
        iconName: "Printer",
        tag: "Print Ready"
      },
      {
        title: "Custom Vector Illustrations & Crests",
        description: "Hand-crafted vector illustrations, family crests, couple monograms, and custom iconography packages.",
        iconName: "PenTool",
        tag: "Custom Art"
      }
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Creative Brief & Moodboard Discovery",
        description: "We analyze your event theme or brand ethos, curate inspirational moodboards, and establish the visual tone, color palette, and typography style.",
        highlights: ["Aesthetic direction alignment", "Color harmony selection", "Font & style moodboards"]
      },
      {
        stepNumber: "02",
        title: "Concept Sketching & Vector Prototyping",
        description: "Our lead designers develop multiple unique design concepts, exploring varied layouts, typographic balances, and artistic accents.",
        highlights: ["Multiple concept variations", "Digital mockups on real products", "Client review round"]
      },
      {
        stepNumber: "03",
        title: "Refinement, Detailing & Kerning",
        description: "We polish the chosen concept, perfecting alignment, contrast, line weights, color gradients, and export formats.",
        highlights: ["Pixel-level perfection", "Typography kerning & hierarchy", "Color profile calibration"]
      },
      {
        stepNumber: "04",
        title: "Production Files & Source Handover",
        description: "We export the complete asset package: print-ready CMYK PDFs with bleed marks, digital RGB files, and full editable vector source files.",
        highlights: ["Print-ready 300 DPI files", "Vector AI, SVG, PNG & PDF", "Full commercial license"]
      }
    ],
    packages: [
      {
        name: "Digital Marketing Starter",
        badge: "Social & Promo",
        description: "Essential graphic package for social media marketing, promo flyers, and online event announcements.",
        deliverables: [
          "5x Custom Social Media Creatives / Posters",
          "2x High-Click YouTube / Stream Thumbnails",
          "1x Event Banner / Cover Header",
          "Web-Optimized PNG, JPG & SVG Files",
          "2 Rounds of Creative Revisions",
          "Fast 48-Hour Turnaround"
        ],
        bestFor: "Social media campaigns, event promotions, and digital marketing"
      },
      {
        name: "Luxury Wedding Invitation Suite",
        badge: "Most Popular",
        isPopular: true,
        description: "Our bespoke luxury stationery collection for grand weddings, receptions, and landmark celebrations.",
        deliverables: [
          "1x Animated MP4 Digital E-Invite for WhatsApp & Socials",
          "1x Print-Ready Luxury Wedding Card Template (Front & Back)",
          "1x Welcome Board Standee & Event Itinerary Design",
          "Custom Couple Monogram / Royal Crest Logo",
          "Print Bleed & Spot UV / Gold Foil Layer Separation",
          "Complete Vector & High-Res PDF Handover"
        ],
        bestFor: "Couples planning luxury weddings, engagements, and grand receptions"
      },
      {
        name: "Complete Brand Identity Kit",
        badge: "Full Branding",
        description: "A comprehensive brand foundation including logo systems, corporate guidelines, stationery, and digital assets.",
        deliverables: [
          "Primary, Secondary & Icon Mark Logos",
          "Official Brand Style Guidelines (Typography & Color Palette)",
          "Luxury Business Cards & Letterhead Templates",
          "Social Media Kit (Profile, Banner, & 6 Post Templates)",
          "3D Product / Apparel Mockup Previews",
          "Full Vector Source Files (AI, EPS, SVG, PDF, PNG)",
          "Unlimited Revisions until 100% Satisfaction"
        ],
        bestFor: "New businesses, luxury agencies, rebranding projects, and startups"
      }
    ],
    faqs: [
      {
        question: "Will the designs be ready for physical printing?",
        answer: "Yes! All print files are prepared in 300+ DPI CMYK format with proper bleed, crop marks, and spot-color layers for gold foil stamping, embossing, or UV gloss coating."
      },
      {
        question: "Do you supply the editable source files?",
        answer: "Yes. Upon project completion, we hand over full editable source files (Adobe Illustrator .AI, .EPS, SVG, and high-res vector PDFs) with full commercial ownership rights."
      },
      {
        question: "Can you create animated digital invitations for WhatsApp?",
        answer: "Yes! We specialize in cinematic animated MP4 e-invitations with custom music, text reveals, and gold particle effects tailored for instant WhatsApp sharing."
      },
      {
        question: "What if I need adjustments after seeing the initial draft?",
        answer: "We include dedicated revision rounds in all our packages to ensure colors, fonts, and phrasing align exactly with your vision."
      }
    ]
  },

  "qr-photo-scanning": {
    id: "qr-photo-scanning",
    slug: "qr-photo-scanning",
    title: "QR Photo Scanning & AI Face Recognition",
    categoryName: "QR Photo Scanning",
    tagline: "Instant Event Photo Sharing & AI-Powered Selfie Search",
    subtitle: "AI-Powered Instant Photo Sharing",
    heroBadge: "Zero App Download • Instant AI Selfie Match",
    heroDescription:
      "Revolutionize how event guests receive their memories. Guests scan a QR code at their table, snap a quick selfie, and our AI face recognition instantly finds and delivers every high-resolution photo of them from the event in seconds.",
    overviewHeading: "The Future of Event Photography & Instant Guest Delights",
    overviewParagraphs: [
      "At traditional weddings and corporate events, guests wait weeks for photographers to share a massive Google Drive link with thousands of photos. Sifting through 3,000 photos just to find 4 pictures of yourself is tedious and outdated.",
      "SYS Creatives brings an ultra-modern AI-powered photo sharing platform. We place elegant branded QR cards on dinner tables and venue entrances. When a guest scans the QR code with their phone camera, they don't need to download any mobile app.",
      "They simply snap a 1-second selfie, and our state-of-the-art AI facial recognition engine instantly scans through thousands of high-res photos to present a personalized gallery containing only their photos, ready for instant HD download and Instagram sharing."
    ],
    bgImage: "/images/service-qr.png",
    secondaryImage: "/images/hero-qr.png",
    iconName: "QrCode",
    stats: [
      { value: "< 2 Sec", label: "Instant AI Search Speed", sublabel: "Blazing Fast Matching" },
      { value: "99.8%", label: "Facial Recognition Accuracy", sublabel: "Even with Glasses & Angles" },
      { value: "0 Apps", label: "Zero App Download Required", sublabel: "Runs in Mobile Browser" },
      { value: "Unlimited", label: "Full HD Guest Downloads", sublabel: "Instant WhatsApp & IG Sharing" }
    ],
    keyCapabilities: [
      {
        title: "AI Face Recognition Engine",
        description: "Guests snap a selfie and the AI instantly matches their facial biometric landmarks to pull up all their photos from the event.",
        iconName: "Cpu",
        tag: "AI Powered"
      },
      {
        title: "Zero App Download (100% Web-Based)",
        description: "Works natively in Safari and Chrome. Guests simply scan the QR code with their regular smartphone camera app.",
        iconName: "Smartphone",
        tag: "Frictionless"
      },
      {
        title: "Live Real-Time Photographer Tethering",
        description: "Photographers can upload raw or edited camera feeds live during the event so guests get their pictures while still at the party!",
        iconName: "Camera",
        tag: "Real-Time Sync"
      },
      {
        title: "Elegant Custom Branded QR Cards & Standees",
        description: "We design and print gorgeous acrylic or gold-foil table standees and cards with your couple monogram or corporate brand logo.",
        iconName: "Sparkles",
        tag: "Branded Standees"
      },
      {
        title: "Privacy-First Encrypted Architecture",
        description: "Guests only see photos where they appear. Host master access is PIN-protected, and galleries can be set to public or strictly private.",
        iconName: "ShieldCheck",
        tag: "100% Secure"
      },
      {
        title: "Full Analytics & Guest Engagement Dashboard",
        description: "Track total QR scans, selfie searches, and photo downloads with detailed real-time event analytics.",
        iconName: "TrendingUp",
        tag: "Analytics"
      }
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Event Gallery Setup & QR Standee Design",
        description: "We configure your private cloud event portal, set up AI recognition algorithms, and design customized luxury QR table cards matching your event theme.",
        highlights: ["Custom branded cloud gallery", "Bespoke QR standee printing", "Security PIN configuration"]
      },
      {
        stepNumber: "02",
        title: "Live On-Site Tethering / Photo Uploads",
        description: "During the event, your photographers upload high-resolution images to the cloud hub. Our AI indexes faces in real-time within seconds.",
        highlights: ["Live camera sync", "Automated AI face indexing", "High-speed cloud processing"]
      },
      {
        stepNumber: "03",
        title: "Guest Scan & 2-Second Selfie Match",
        description: "Guests scan the table QR code, upload a quick selfie, and watch in amazement as all their photos appear on screen instantly.",
        highlights: ["Instant selfie match", "One-click HD downloads", "Direct Instagram/WhatsApp sharing"]
      },
      {
        stepNumber: "04",
        title: "Post-Event Cloud Hosting & Master Zip",
        description: "The gallery remains live online for 30 to 90 days for extended family downloads, and the host receives a complete master zip archive.",
        highlights: ["30-90 days cloud retention", "Full analytics report", "Master ZIP archive download"]
      }
    ],
    packages: [
      {
        name: "Intimate Gathering",
        badge: "Up to 200 Guests",
        description: "Perfect for birthday parties, engagement ceremonies, and private corporate dinners.",
        deliverables: [
          "Up to 1,000 High-Resolution Photos Supported",
          "Custom Branded QR Code Design (Print-Ready PDF)",
          "Instant AI Face Recognition & Selfie Search",
          "Unlimited Guest Photo Downloads",
          "30 Days of Secure Cloud Gallery Hosting",
          "Host Master Admin Access"
        ],
        bestFor: "Engagements, birthday milestones, and private dinner celebrations"
      },
      {
        name: "Grand Wedding & Gala",
        badge: "Most Popular",
        isPopular: true,
        description: "Our signature package for grand weddings, receptions, and multi-day festivities with hundreds of guests.",
        deliverables: [
          "Up to 5,000 High-Resolution Photos Supported",
          "Custom Acrylic / Gold Standee Print Designs Included",
          "Real-Time Live Upload Support During Event",
          "Guest Upload Portal (Allows guests to pool their phone pics)",
          "60 Days of High-Speed Cloud Hosting",
          "Custom Watermark / Sponsor Logo Overlay Option",
          "Full Engagement Analytics Report"
        ],
        bestFor: "Grand weddings, multi-day celebrations, and corporate galas"
      },
      {
        name: "Mega Summit & VIP Festival",
        badge: "Enterprise / Unlimited",
        description: "Built for massive multi-thousand attendee conferences, college festivals, and VIP concerts.",
        deliverables: [
          "Unlimited Photo Storage & Unlimited Guest Scans",
          "Multi-Photographer Live Cloud Tethering Support",
          "Custom Subdomain (e.g., photos.yourbrand.com)",
          "VIP Priority AI Face Recognition Processing Server",
          "90 Days Extended Cloud Hosting + Raw Master Cloud Link",
          "Dedicated On-Site Technical Coordinator",
          "Lead Capture & CRM Integration for Corporate Sponsors"
        ],
        bestFor: "Large-scale conventions, music festivals, luxury expos, and sporting events"
      }
    ],
    faqs: [
      {
        question: "Do guests need to download an application from the App Store or Play Store?",
        answer: "No app download is required! The entire experience works smoothly inside the default web browser (Safari on iPhone, Chrome on Android) as soon as they scan the QR code."
      },
      {
        question: "How accurate is the AI face recognition if someone is wearing sunglasses or smiling?",
        answer: "Our AI model analyzes 128 distinct facial biometric anchor points (eye spacing, jawline, nose bridge), maintaining over 99.8% matching accuracy even across different angles, lighting, and expressions."
      },
      {
        question: "Is guest privacy protected?",
        answer: "Yes, 100%. Guests are only shown the photos where they are identified. Additionally, galleries can be password-protected or restricted to invited guests only."
      },
      {
        question: "Can guests also upload the photos they took on their own smartphones?",
        answer: "Yes! Our platform features a 'Guest Upload' toggle, enabling guests to upload their candid smartphone photos and videos into a unified community album for the host."
      }
    ]
  }
};
