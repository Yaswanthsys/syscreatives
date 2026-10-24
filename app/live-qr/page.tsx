import type { Metadata } from "next";
import LiveQRView from "@/components/live-qr/LiveQRView";

export const metadata: Metadata = {
  title: "Dileep & Meghana | Wedding Celebration | SYS Creatives",
  description:
    "Celebrate the wedding of Dileep & Meghana on Monday, October 26, 2026. View the wedding invitation and find your event photos in the wedding gallery.",
  openGraph: {
    title: "Dileep & Meghana | Wedding Celebration",
    description:
      "Wedding ceremony at 10:00 AM, followed by reception and lunch at 12:00 PM. Hosted by Nakka Yasyya and Smt. Mery.",
    images: [{ url: "/live-qr/Oct26.jpg" }],
  },
};

export default function LiveQRPage() {
  return (
    <main className="min-h-screen w-full bg-[#FFFDF9]">
      <LiveQRView
        studioName="SYS CREATIVES"
        studioTagline="PREMIUM CREATIVE AGENCY & LIVE STREAMING"
        photographyPartnerLogo="/live-qr/Bhimavaram.png"
        themeTitle="A Celebration of Love"
        themeSubtitle="WEDDING CELEBRATION"
        twinNames="Dileep & Meghana"
        familyName="NAKKA FAMILY"
        eventDate="Monday, October 26, 2026"
        eventTime="Wedding Ceremony at 10:00 AM"
        venueName="Saint Peters Lutheran Church"
        venueAddress="Tallamma Cheruvu"
        dinnerNote="Reception & Lunch at 12:00 PM"
        parents=""
        invitedBy="Nakka Yasyya and Smt. Mery"
        blessingQuote="Therefore what God has joined together, let no one separate. — Mark 10:9"
        childrenImage="/live-qr/Oct26.jpg"
        invitationCardImage="/live-qr/Invitation.jpg"
        qrCodeImage="/live-qr/live-qr.jpg"
        galleryUrl="https://e.dslr.app/selfie-search/fbb48936-ead0-4e74-8f8d-db25d382e3c2"
        showWatchLive={false}
        youtubeLiveUrl="https://www.youtube.com"
        youtubeVideoId="M7lc1UVf-VE"
        whatsappNumber="918500622735"
        displayPhone="+91 85006 22735"
      />
    </main>
  );
}
