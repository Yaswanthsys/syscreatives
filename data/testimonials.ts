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
    role: "Director of Operations",
    company: "NextGen Tech",
    avatar: "/images/avatar-1.png",
    rating: 5,
    review: "The live stream of our global summit was absolutely flawless. SYS Creatives' multi-camera production quality was exceptional, and our virtual attendees felt like they were in the front row."
  },
  {
    id: "review-2",
    name: "Emily & David",
    role: "Bride & Groom",
    company: "Private Event",
    avatar: "/images/avatar-2.png",
    rating: 5,
    review: "Our wedding highlights video looks and feels like a luxury movie! The gold tones, music selection, and emotional cuts are breathtaking. We couldn't have asked for a better keepsake."
  },
  {
    id: "review-3",
    name: "Marcus Vance",
    role: "Lead Event Planner",
    company: "Vance & Co. Events",
    avatar: "/images/avatar-3.png",
    rating: 5,
    review: "The AI QR gallery system was the absolute highlight of our charity gala. Guests were completely blown away at how fast they received their professional photos by scanning their custom codes."
  },
  {
    id: "review-4",
    name: "Elena Rostova",
    role: "Chief Executive Officer",
    company: "Aura Fragrances",
    avatar: "/images/avatar-4.png",
    rating: 5,
    review: "Stunning graphic design and branding work. They elevated our packaging and visual identity from standard to absolute luxury. Their attention to detail and design aesthetics is unmatched."
  }
];
