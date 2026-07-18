export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    name: "Sarah Jenkins",
    role: "VP of Communications",
    company: "NextGen Corp",
    avatar: "/images/avatar-1.png",
    rating: 5,
    review: "The live stream of our global summit was absolutely flawless. SYS Creatives' multi-camera production quality was exceptional, and our virtual attendees felt like they were in the front row."
  },
  {
    id: "review-2",
    name: "Emily & David",
    role: "Newlyweds",
    company: "Luxury Wedding",
    avatar: "/images/avatar-2.png",
    rating: 5,
    review: "Our wedding highlights video looks and feels like a luxury movie! The gold tones, music selection, and emotional cuts are breathtaking. We couldn't have asked for a better keepsake."
  },
  {
    id: "review-3",
    name: "Liam Carter",
    role: "Founder",
    company: "Aether Lifestyle",
    avatar: "/images/avatar-3.png",
    rating: 5,
    review: "SYS Creatives built a bespoke Next.js website for our luxury brand that completely exceeded our expectations. The animations are fluid, the loading times are instant, and the custom layouts look like an award-winning showcase."
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    role: "Creative Director",
    company: "Aura Fragrances",
    avatar: "/images/avatar-4.png",
    rating: 5,
    review: "Stunning graphic design and branding work. They elevated our packaging and visual identity from standard to absolute luxury. Their attention to detail and design aesthetics is unmatched."
  },
  {
    id: "review-5",
    name: "Marcus Vance",
    role: "Lead Event Planner",
    company: "Vance & Co. Events",
    avatar: "/images/avatar-1.png", // Reusing avatar index or fallback since images are hidden
    rating: 5,
    review: "The AI QR photo scanning system was the absolute highlight of our charity gala. Guests were completely blown away at how fast they received their professional photos by scanning their custom codes."
  },
  {
    id: "review-6",
    name: "Sophia Patel",
    role: "Director of Brand Marketing",
    company: "Summit Global",
    avatar: "/images/avatar-2.png",
    rating: 5,
    review: "We engaged SYS Creatives for both our custom event landing page and post-event highlight editing. Integrating our digital presence and event production with one partner saved us time and resulted in a unified, premium brand showcase."
  }
];
