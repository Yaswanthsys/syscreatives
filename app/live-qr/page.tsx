import { Metadata } from "next";
import LiveQRView from "@/components/live-qr/LiveQRView";

export const metadata: Metadata = {
  title: "Dileep & Meghana | Wedding Celebration | Live Stream & QR Gallery",
  description:
    "Join us in celebrating the wedding of Dileep & Meghana. Explore the wedding invitation, access the live photo gallery, and relive beautiful moments from their special day.",
  openGraph: {
    title: "Dileep & Meghana — Wedding Celebration | SYS Creatives",
    description:
      "A celebration of love and togetherness. Wedding ceremony, reception, and live photo gallery.",
    images: [{ url: "/live-qr/Oct26.jpg" }],
  },
};

export default function LiveQRPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFDF9]">
      <LiveQRView
        studioName="SYS CREATIVES"
        studioTagline="PREMIUM CREATIVE AGENCY & LIVE STREAMING"
        photographyPartnerLogo="/live-qr/Bhimavaram.png"

        themeTitle="A Celebration of Love"
        themeSubtitle="WEDDING CELEBRATION"
        twinNames="Dileep & Meghana"
        familyName="NAKKA FAMILY"

        eventDate="26th October 2026 (Monday)"
        eventTime="Wedding Ceremony at 10:00 AM"
        venueName="Saint Peters Lutheran Church"
        venueAddress="Tallamma Cheruvu"
        dinnerNote="Reception & Lunch to follow at 12:00 PM"

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
