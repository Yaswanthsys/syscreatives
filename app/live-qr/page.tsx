import { Metadata } from "next";
import LiveQRView from "@/components/live-qr/LiveQRView";

export const metadata: Metadata = {
  title: "Seren & Selena | Twins Birthday Celebration | Live Stream & QR Gallery",
  description:
    "Two Peas in a Pod — Celebrate the birthday of Seren & Selena Vijjeswarapu. Watch live broadcast and find all event photos with AI face recognition.",
  openGraph: {
    title: "Seren & Selena — Twins Birthday Celebration | SYS Creatives",
    description: "Two Peas in a Pod • Live stream & AI QR photo gallery.",
    images: [{ url: "/live-qr/children-photo.jpg" }],
  },
};

export default function LiveQRPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFDF9]">
      <LiveQRView
        studioName="SYS CREATIVES"
        studioTagline="PREMIUM CREATIVE AGENCY & LIVE STREAMING"
        photographyPartnerLogo="/live-qr/snaps-by-rajesh.png"
        themeTitle="Two Peas in a Pod"
        themeSubtitle="TWINS BIRTHDAY CELEBRATION"
        twinNames="Seren & Selena"
        familyName="VIJJESWARAPU"
        eventDate="8th September 2026 (Tuesday)"
        eventTime="Evening starting at 5:00 PM"
        venueName="D1 Convention"
        venueAddress="1 Walkers rd, Venkateswara Nagar, Rajahmundry"
        dinnerNote="Dinner to follow"
        parents="Dr. Vinod Vijjeswarapu MBBS, MPH | Dr. Satya Sudha Daggumilli MBBS, MD"
        invitedBy="Vijjeswarapu and Daggumilli Family"
        blessingQuote="Children are a heritage from the Lord, offspring a reward from Him. — Psalm 127:3"
        childrenImage="/live-qr/children-photo.jpg"
        invitationCardImage="/live-qr/invitation-card.jpg"
        qrCodeImage="/live-qr/event-qr.png"
        galleryUrl="https://e.dslr.app/selfie-search/c89e18fe-e0a3-4596-810e-5699e91fcc7a"
        showWatchLive={false}
        youtubeLiveUrl="https://www.youtube.com"
        youtubeVideoId="M7lc1UVf-VE"
        whatsappNumber="918500622735"
        displayPhone="+91 85006 22735"
      />
    </main>
  );
}
